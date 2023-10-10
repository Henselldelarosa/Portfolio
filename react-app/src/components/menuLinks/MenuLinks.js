import React from 'react'
import '../../style/componentStyle/MenuLinks.scss'
const MenuLinks = ({Icon, text}) => {
  const difText = ['Hensell1000@gmail.com', '929-300-1372']

  return (
    <div className='menuLinks'>
      <div className='description'>
       {Icon}

       {text === 'Hensell1000@gmail.com' &&
        <spam className='Email'>{text}</spam>
       }

       {text === '929-300-1372' &&
         <spam className='Phone'>{text}</spam>
       }

       {!difText.includes(text) &&
        <spam className={text}>{text}</spam>
       }


      </div>
    </div>
  )
}

export default MenuLinks
