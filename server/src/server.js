const express = require("express");
const connectDb = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9080
const DB_URL = process.env.MONGO_URL

app.get('/', (req, res) => {

})

app.listen(PORT, () => {
    connectDb(DB_URL);
    console.log(`Server is  running : http://localhost/:${PORT}`);
})