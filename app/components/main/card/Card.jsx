import React from 'react'
import "./card.css"

const Card = () => {
  return (
    <div className='card_area'>
      <div className='card_left'>
        <div className='card_left_cont'>
          <h2 className='heading_txt'>
        Great design is invisible
        </h2>  
        <h2 className='sub_heading_txt'>Lorem ipsum dolar sit amet constreteur</h2>
       <button className='card_btn'>Button</button>
      </div>
      
        </div>
        <div className='card_right'>
        card right
      </div>
     
    </div>
  )
}

export default Card
