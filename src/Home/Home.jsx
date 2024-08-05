import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home section home_sec" id='home'>
      <div className='home_container container'>
        <div className="home_content">
          <div className="data_section">
            {/* <Social/> */}
            <Data />
          </div>
          <div className="home_image"></div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
