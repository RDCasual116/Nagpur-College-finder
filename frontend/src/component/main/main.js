import React from 'react';
import "./main.css";
import College from "../college/college.js";
import data from "./data.js";

import {useNavigate} from 'react-router-dom';
export default function(){
const college=data.map(c=>
<College
key={c.id}
id={c.id}
name={c.name}
v_photo={c.v_photo}
ranking={c.ranking}
cutoff={c.cutoff}
m_course={c.m_course}
/>
);
const navi=useNavigate();
return(
<div className="Main">
  <div className="ct">
<h1>NAGPUR COLLEGE SEARCHER</h1> 
 <div className="bar"></div>
  <h2>TOP COLLEGES</h2>

<div style={{display:"flex",
flexWrap:"wrap",
gap:"20px",
justifyContent:"space-around"
}}>
{college}
</div>
<h2>Courses</h2>
<div className="coursecontainer">
<div className="courses" onClick={()=>navi('engineering')}>
<img src="./pic/eng.jpg"/>
<h4>ENGINEERING</h4></div>
<div className="courses" onClick={()=>navi('medical')}>
<img src="./pic/med.jpg"/>
<h4>MEDICAL</h4></div>
<div className="courses" onClick={()=>navi('others')}>
<img src="./pic/oth.jpg"/>
<h4>OTHERS</h4></div>
</div>
  </div>

  </div>
);
}
