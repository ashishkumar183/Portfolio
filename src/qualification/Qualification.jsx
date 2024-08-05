import React, { useState } from 'react'
import "../qualification/qualification.css"

const Qualification = () => {
    const [toggleState , setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <>
    <section className="qualification section quali_section">
    <h2 className="section__title">Qualifications</h2>
    <span className="section__subtitle">My Personal Journey</span>
    <div className="qualification_container container">
        <div className="qualification_tabs">
            <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : 
                "qualification_button button--flex"}
                onClick={() => toggleTab(1)}
                >
                <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
                Education
            </div>

            <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : 
                "qualification_button button--flex"}
                onClick={() => toggleTab(2)}
                >
                <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
                Achievements
            </div>
        </div>

        <div className="qualification_sections">
            <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">B.Tech Computer Science</h3>
                        <span className="qualification_subtitle">VIT Bhopal University</span>
                        <div className="qualification_calender">
                        <i class='bx bx-calendar'></i>
                            2022-Present
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                    <div>
                        <h3 className="qualification_title">Intermediate</h3>
                        <span className="qualification_subtitle">Doon Public School</span>
                        <div className="qualification_calender">
                        <i class='bx bx-calendar'></i>
                            2019-2021
                        </div>
                    </div>
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Matriculate</h3>
                        <span className="qualification_subtitle">Doon Public School</span>
                        <div className="qualification_calender">
                        <i class='bx bx-calendar'></i>
                            2009-2019
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>
            </div>

            <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Smart India Hackathon</h3>
                        <span className="qualification_subtitle">Cleared internal round</span>
                        <div className="qualification_calender">
                        <i class='bx bx-calendar'></i>
                            2023
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                    <div>
                        <h3 className="qualification_title">DSA Tussle</h3>
                        <span className="qualification_subtitle">VIT Bhopal University</span>
                        <div className="qualification_calender">
                        <i class='bx bx-calendar'></i>
                        2024
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Qualification