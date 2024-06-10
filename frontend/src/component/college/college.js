import React from "react";
import "./college.css";
import {useNavigate} from "react-router-dom";
export default function(props){
let color;
const navi=useNavigate();
if(props.m_course==="engineering") color="orange";
else if(props.m_course==="medical") color="purple";
else color="white";
//alert(props.v_photo);
return(
<div className="college" onClick={()=>navi(`/college/${props.id}`)}>
<img src={props.v_photo}/>
<div className="collegecard"
style={{
background:color,
boxShadow:`0px -5px 5px 10px ${color}`
}}
>
<h3>{props.name}</h3>
<h5>Rank:{props.ranking}</h5>
<h6>Cutoff:{props.cutoff}</h6>
</div>

</div>
);
}
