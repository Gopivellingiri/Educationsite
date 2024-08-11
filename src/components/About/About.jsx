import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import Play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={Play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Our university is committed to fostering innovation and critical thinking in a world-class learning environment. With cutting-edge facilities and expert faculty, we prepare students to excel in their careers and tackle global challenges.</p>

            <p>Beyond academics, we offer diverse extracurricular activities and research opportunities to help students develop essential leadership and problem-solving skills. Our programs are designed to create well-rounded individuals ready to lead with confidence.</p>

            <p>We celebrate diversity and inclusivity, providing a supportive community where students can explore their passions and build lasting connections. At our university, every student is empowered to reach their full potential and shape the future.</p>

        </div>
    </div>
  )
}

export default About