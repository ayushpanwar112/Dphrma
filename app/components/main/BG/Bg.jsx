import React from 'react'
import "./bg.css"

const Bg = () => {
  return (
    <div className='bg_container'>
     <div className='bg_text'>
        <h2 className='heading sub-bg'>
            Why our client trust us
        </h2>
        
        <p className='para'>
        Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id. Urna posuere consequat velit vulputate faucibus pretium arcu accumsan sit. Vel venenatis sapie
        </p>
     </div>
     <div className="bg_sub">
       <div className="bg_left">
          <div className="img1">
            img1
          </div>
          <div className="img2">img2</div>
          <div className="img3">img3</div>
        </div>
        <div className="bg_right">
          <ul className="list_item">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugit.</li>
          </ul>
           <button className="card_btn">Button</button>
        </div>
     </div>
       
    </div>
  )
}

export default Bg