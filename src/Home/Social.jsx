import React, { useState } from 'react';
import "./social.css"
import { UilInstagram, UilLinkedin, UilGithub } from '@iconscout/react-unicons';

const Social = () => {
  return (
    <div className="home_social">
      <a href="https://www.instagram.com/ashish269_/" className="instagram home_social-icon" target="_blank" rel="noopener noreferrer">
        <UilInstagram />
      </a>
      <a href="https://www.linkedin.com/in/ashish-kumar-3792a4249/" className="linkedin home_social-icon" target="_blank" rel="noopener noreferrer">
        <UilLinkedin />
      </a>
      <a href="https://github.com/ashishkumar183" className="github home_social-icon" target="_blank" rel="noopener noreferrer">
        <UilGithub />    
      </a>
    </div>
  );
}

export default Social;
