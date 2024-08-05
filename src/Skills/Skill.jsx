import React from 'react'
import "../Skills/skill.css";
import Frontend from './Frontend';
const Skill = () => {
  return (
    <>
    <section className="skills section" id="skills">
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My Technical level</span>
    <div className="skills_container container grid">
    <Frontend/>
    </div>
    </section>
    </>
  )
}

export default Skill