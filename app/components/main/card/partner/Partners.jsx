import React from 'react'
import "./partners.css"

const Partners = () => {
  return (
    <div className="partner_container">
       <div className="content">
        <h2 className="heading">
        Our Partners</h2>
       </div>
       <div className="content_box">
           <div className="cont">img1</div>
           <div className="cont">img2</div>
           <div className="cont">img3</div>
       </div>
       <div className="blg_cont">
         <div className="content">
        <h2 className="heading">
        Latest blog</h2>
       </div>
       <div className="bloges">
        <div className="blg">
            <div className="img-cont">     
            </div>
            <h2>Humans are much more smarter than AI</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora.</p>

        </div> 
        <div className="blg">
            <div className="img-cont">     
            </div>
            <h2>Humans are much more smarter than AI</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora.</p>

        </div>
        <div className="blg">
            <div className="img-cont">     
            </div>
            <h2>Humans are much more smarter than AI</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora.</p>

        </div>
         
         </div><button className="card_btn btn-part"> button</button>
       </div>
      
    </div>
  )
}

export default Partners
