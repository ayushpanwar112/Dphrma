import React from 'react'
import "./nav.css"

const Nav = () => {
  return (
    <div className='nav_bar'>
  <ul className='nav_item_list'>
    <li className='nav_item'>
      <a href='#'>Link1</a>
    </li>
    <li className='nav_item'>
      <a href='#'>Link 2</a>
    </li>
    <li className='nav_item'>
      <a href='#'>Link 3</a>
    </li>
    <li className='nav_item'>
      <a href='#'>Link 4</a>
    </li>
    <li className='nav_item'>
      <a href='#'>Link 5</a>
    </li>
  <li className='nav_item'><button className='nav_btn'>Button</button></li>  
  </ul>
 
</div>

  )
}

export default Nav
