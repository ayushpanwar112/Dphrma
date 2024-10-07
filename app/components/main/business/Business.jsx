import React from 'react'
import "./business.css"

const Business = () => {
  return (
    <div id="Service"className="business_container">
       <div className=" sub_heading">
      <h2 className="heading sub-business">Our business strategy has helped many businesses across the globe</h2> 
      <p className="para">Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id</p>
      <div className="stats-container">
  <div className="stat-item">
    <h3>Clients</h3>
    <p>12K</p>
  </div>
  <div className="divider"></div>
  <div className="stat-item">
    <h3 >Annual growth</h3>
    <p>55%</p>
  </div>
  <div className="divider"></div>
  <div className="stat-item">
    <h3>No of projects</h3>
    <p>5k</p>
  </div>
  <div className="divider"></div>
  <div className="stat-item">
    <h3>Positive ratings</h3>
    <p>80%</p>
  </div>


       </div></div>
       <div className="business_img">
                   img
       </div>
    </div>
  )
}

export default Business
