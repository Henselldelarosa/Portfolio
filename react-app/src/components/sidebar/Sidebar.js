import React from 'react'
import '../../style/componentStyle/Sidebar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuLinks from '../menuLinks/MenuLinks';
import InfoIcon from '@mui/icons-material/Info';
import {NavLink} from 'react-router-dom/cjs/react-router-dom.min'

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

            <a
            className='link'
            target='to_blank'
            href='https://www.linkedin.com/in/hensell-delarosa/'
            >
              <MenuLinks Icon={<LinkedInIcon className='sidebar__icon--linkedin'/>} text='Linkedin'/>
            </a>

            <a
            className='link'
            target='to_blank'
            href='https://github.com/Henselldelarosa'
            >
              <MenuLinks Icon={<GitHubIcon className='sidebar__icon--github'/>} text='Github'/>
            </a>

          <NavLink className='link aboutLink' to='/about'>
            <MenuLinks Icon={<InfoIcon className='sidebar__icon--about'/>} text='About'/>
          </NavLink>

          <hr className='sidebar__hr'/>


        </div>
          <div className="sidebar__contactInfo">
            <h2 className="sidebar__contactInfo--contactText">Contact Info</h2>

            <div className="sidebar__myInfo">
              <div className="sidebar__myInfo--item">
                <MenuLinks Icon={<EmailIcon className='sidebar__myInfo--icon'/>} text='Hensell1000@gmail.com'/>
                {/* <EmailIcon/> */}
              </div>

              <div className="sidebar__myInfo--item">
                <MenuLinks Icon={<PhoneIcon className='sidebar__myInfo--icon'/>} text='929-300-1372'/>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Sidebar
