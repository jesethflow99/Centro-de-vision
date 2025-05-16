import React from 'react'
import "./service_card.css"
import 'bootstrap-icons/font/bootstrap-icons.css';


const Service_card = ({icon,title,description}) => {
  return (
    <div>
<div className="e-card playing card">
  <div className="image"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  

      <div className="infotop">

      <i className={`bi ${icon}`} style={{ fontSize: '50px' }}></i>

    <br/>  
{title}
<br/>
<div className="name">{description}</div>
  </div>
</div>
    </div>
  )
}

export default Service_card