import React from "react";
import "./college.css";
export default function(props){
let color;
if(props.m_course==="engineering") color="orange";
else if(props.m_course==="medical") color="purple";
else color="white";
//alert(props.v_photo);
return(
<div className="college">
<img src={props.v_photo}/>
<div style={{
background:color,
boxShadow:`0px -5px 5px 10px ${color}`
}}>
<h3>{props.name}</h3>
<h5>Rank:{props.ranking}</h5>
<h6>Cutoff:{props.cutoff}</h6>
</div>
</div>
);
}
