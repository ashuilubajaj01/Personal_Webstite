import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ashutosh-bajaj-a51588175/" target="_blank">
            <BsLinkedin/>
        </a>
        <a href="https://github.com/ashuilubajaj01" target="_blank"><FaGithub/></a>

        <a href="https://wa.me/+916025545358" target="_blank"><BsWhatsapp/></a>

    </div>
  )
}

export default HeaderSocials