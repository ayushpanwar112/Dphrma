import React from 'react'
import "./nav.css"
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='nav_bar'>
  <ul className='nav_item_list'>
    <li className='nav_item'>
      <a href='#'>Home</a>
    </li>
    <li className='nav_item'>
      <a href='#Service'>Service</a>
    </li>
    <li className='nav_item'>
      <a href='#quaries'>Quaries</a>
    </li>
    <li className='nav_item'>
      <a href='#contact'>contact us</a>
    </li>
    <li className='nav_item'>
      <Link href='/pages/about'>about us</Link>
    </li>
  <li className='nav_item'><button className='nav_btn'>SignIn</button></li>  
  </ul>
 
</div>

  )
}

export default Nav
