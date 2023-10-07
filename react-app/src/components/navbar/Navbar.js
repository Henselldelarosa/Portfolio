import React from 'react'
import { useSelector } from 'react-redux'
import '../../style/componentStyle/Navbar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <div className='navbar'>
      <div className="navbar__Wrapper">
        <div className="navbar__left">
          <h1 className="logo">My Portfolio</h1>
        </div>

        <div className="navbar__center">
          <div className="center__options">

            <div  className="options__option">

              <button title='GitHub' className='icon_button'>
                <GitHubIcon title='gitHub'className='options__option--icon github'/>
              </button>

            </div>

            <div className="options__option">

              <button title='Linkedin' className='icon_button'>
                <LinkedInIcon className='options__option--icon linkedin'/>
              </button>

            </div>
          </div>
        </div>

        <div className="navbar__right">
          <div className="navbar__userInfo">
            <img
            src="https://i.stack.imgur.com/l60Hf.png"
            alt=""
            className="userInfo__img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
