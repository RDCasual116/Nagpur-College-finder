import React from 'react';
import "./main.css";
import College from "./college.js";
import data from "./data.js";
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
<div className="courses"><img src="./pic/eng.jpg"/>ENGINEERING</div>
<div className="courses"><img src="./pic/med.jpg"/>MEDICAL</div>
<div className="courses"><img src="./pic/oth.jpg"/>OTHERS</div>
</div>

  </div>
  </div>
);
}
