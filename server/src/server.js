const express = require("express");
const connectDb = require("./config/db");
require("dotenv").config();
const cors = require("cors");

const session = require("express-session");
const passport = require("passport");
const User = require("./models/userModel");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}));

app.use(express.json());

const PORT = process.env.PORT || 9080
const DB_URL = process.env.MONGO_URL
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const SECRET_KEY = process.env.SECRET_KEY 

// setUp session
app.use(session({
    secret : SECRET_KEY,
    resave: false,
    saveUninitialized: true
}))

// setup passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        callbackURL : "/auth/google/callback",
        scope : ["profile", "email"] 
    },
     async(accessToken, refreshToken, profile, done) => {
        console.log("Profile", profile)
        try{
            let user = await User.findOne({googleId:profile.id});

            if(!user) {
               user = new User({
                googleId : profile.id,
                displayName : profile.displayName,
                email : profile.emails[0].value,
                image : profile.photos[0].value,
               });

               await user.save();

            }

            return done(null, user);

        }catch(err) {
            return done(err, null);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// initial google auth login
app.get('/auth/google/callback', passport.authenticate("google", {scope : ["profile", "email"]}));

app.get('/auth/google/callback', passport.authenticate("google", {
    successRedirect: "http://localhost:5173/home",
    failureRedirect : "http://localhost:5173/login"
}));

app.listen(PORT, () => {
    connectDb(DB_URL);
    console.log(`Server is  running : http://localhost:${PORT}`);
});