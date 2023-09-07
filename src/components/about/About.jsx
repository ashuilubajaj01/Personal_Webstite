import React from 'react'
import './about.css'
import ME from '../../assets/me3.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'

import {PiCertificateLight} from 'react-icons/pi'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year of Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>PWC</h5>
              <small>Aug 2022 - present </small>
            </article>

            <article className='about__card'>
              <PiCertificateLight className='about__icon'/>
              <h5>Certifications</h5>
              <small>AWS(SAA-C03,CLF-C01)</small>
            </article>
          </div>
          <p>
          Hello, I'm Ashutosh Kumar Bajaj, a dedicated professional with a passion for technology and a strong background in software development. I currently work as an Associate at PWC in Bangalore, India, where I contribute to projects involving ML,React,C++ , Java and python . I hold a B.E. degree in Compurter Science from KLE Technological University and have gained hands-on experience during my internship at PWC. I am an AWS Certified Solution Architect with SAA-C02 and AWS Practitioner certifications, demonstrating my expertise in designing scalable and secure cloud solutions. With a solid foundation in programming languages such as C, C++, Java, and expertise in AWS, HTML, CSS, and JavaScript, I am capable of developing robust and user-friendly web applications. Additionally, I have proficiency in Linux, data structures and algorithms (DSA), and I'm constantly exploring new technologies like machine learning and React. Apart from my professional pursuits, I find joy in coding, exploring poetry, and expanding my knowledge in various domains. I am passionate about learning and enjoy challenging myself to acquire new skills. I am excited to leverage my expertise and contribute to meaningful projects that make a difference.
            </p>
          <a href="https://wa.me/916025545358" target="_blank" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
 
export default About