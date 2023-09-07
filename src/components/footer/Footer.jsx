import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>ASHUTOSH</a>
   <ul className="permalinks">
    <li><a href="#">HOME</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Skills</a></li>
    {/*<li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#testimonials">Testimonials</a></li>*/}
    <li><a href="#contact">Contact</a></li>
   </ul>
   <div className="footer__socials">
    <a href="https://www.linkedin.com/in/ashutosh-bajaj-a51588175/"><AiFillLinkedin/></a>
    <a href="https://instagram.com/wayfaring_stranger99?igshid=NTc4MTIwNjQ2YQ=="><FiInstagram/></a>
    <a href="https://api.whatsapp.com/send?phone916205545358"><AiOutlineWhatsApp/></a>
   </div>
   </footer>
  )
}

export default Footer