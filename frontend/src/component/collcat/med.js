import React from 'react';
import data from '../main/data.js';
import "./collcat.css";
import College from "../college/college.js";
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
)
return(
<div className="categories">
<h1>MEDICAL</h1>
<div>{college}</div>

</div>
);
}
