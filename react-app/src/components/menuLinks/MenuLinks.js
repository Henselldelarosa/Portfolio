import React from 'react'
import '../../style/componentStyle/MenuLinks.scss'
const MenuLinks = ({Icon, text}) => {
  return (
    <div className='menuLinks'>
      {Icon}
      <span className="menuLinks__text">{text}</span>
    </div>
  )
}

export default MenuLinks
