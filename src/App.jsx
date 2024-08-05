import React from 'react';
import './App.css';
import Header from './header/Header';
import Home from './Home/Home';
import About from './about/About';
import Skill from './Skills/Skill';
import Qualification from './qualification/Qualification';
// import Technology from './technology/Technology';
import Contact from './contact/Contact';
import Projects from './project/Project';
function App() {
  return (<>
     <Header />
    <main className='main'>
    <Home />
    <About/>
    {/* <Technology/> */}
    <Skill/>
    <Qualification/>
    <Projects/>
    <Contact/>
   </main>
   </>
  );
}

export default App;
