import React from 'react'
import '../styles/home.css';
import UpNabar from '../components/UpNabar';
import SideNav from '../components/SideNav';

const Home = () => {
  return (
    <div className='container home-container'>
      <div className='left'>
        <SideNav />
      </div>
      <div className='right'>
        <UpNabar />
      </div>

    </div>
  )
}

export default Home;
