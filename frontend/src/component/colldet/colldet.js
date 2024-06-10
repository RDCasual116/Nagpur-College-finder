import React from 'react';
import "./colldet.css";
import {useParams} from 'react-router-dom';
import data from '../main/data.js';
export default function(){
const params=useParams();
let college={name:"das"};
for(let i=0;i<data.length;i++){
if(data[i].id===params.id){
college=data[i];
break;
}
}
let courses=college.o_course.map(entry=>
<li>{entry}</li>);
let pics=college.photo.map(entry=><img src={entry}/>);
return(
<div className="detbg">
<img className="maincphoto" src={college.v_photo}/>
<img className="logo" src={college.logo}/>
<span>
<p>cutoff: {college.cutoff}</p>
<p>fees for open: {college.fees}</p></span>
<div className="cnamebox"><h1>{college.name}</h1>
<p>{college.address}</p></div>
<a href={college.website}>visit website</a>
<br/>
<div className="csra">
<span><h2>Courses</h2>
<ul>
{courses}
</ul></span>
{college.ranking?
<p className="crnk"><span className="ranknum">
{college.ranking}</span>
<span>
rank</span>
</p>:null}
</div>
<div className="photoslider">{pics}</div>

</div>

);
}
