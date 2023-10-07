import React from 'react'
import '../../style/componentStyle/Sidebar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuLinks from '../menuLinks/MenuLinks';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__wrapper">
        <img
        src="/images/me.jpg"
        alt=""
        className="sidebar__img"
        />

        <div className="sidebar__icon">
          <MenuLinks Icon={<LinkedInIcon className='sidebar__icon--linkedin'/>} text='Linkedin'/>
          <MenuLinks Icon={<GitHubIcon className='sidebar__icon--github'/>} text='Github'/>
          <MenuLinks Icon={<GoogleIcon className='sidebar__icon--email'/>} text='Email'/>
          <MenuLinks Icon={<InstagramIcon className='sidebar__icon--instagram'/>} text='Instagram'/>
          <MenuLinks Icon={<FacebookIcon className='sidebar__icon--facebook'/>} text='Facebook'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
