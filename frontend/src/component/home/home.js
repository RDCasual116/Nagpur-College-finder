import React from 'react';
import {useNavigate} from 'react-router-dom';
import "./home.css";
import { ReactComponent as Git } from './git.svg';
import { ReactComponent as Lk } from './link.svg';
export default function(){
const [trig,settrig]=React.useState(true);
const Navigate=useNavigate()

return(
<div className={`main ${trig?"":"main1"}`}>
<div className="front">
<div className="title">
<h1>
NAGPUR COLLEGE<br/>SEARCHER
</h1>
<button onClick={()=>{
settrig(false);
setTimeout(()=>{Navigate("main")},300);
}}>EXPLORE
</button>
</div>
<div className="about">
<span>made by Ritish Das
</span>
<ul>
<li><Git style={{width:"20px",height:"20px"}}/>
</li>
<li><Lk style={{width:"20px",height:"20px"}}/>
</li>
</ul>
</div>
</div>
</div>);
}
