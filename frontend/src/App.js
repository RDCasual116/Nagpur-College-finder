import React from 'react';
import Home from './component/home/home.js';
import Main from './component/main/main.js';
import Eng from "./component/collcat/collcat.js";
import Med from "./component/collcat/med.js";
import Oth from "./component/collcat/oth.js";
import Colldet from "./component/colldet/colldet.js";
import {Routes,Route} from 'react-router-dom';
export default function(){
return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />}/>

        <Route path="/main/engineering" element={<Eng />} />       
        <Route path="/main/medical" element={<Med />} />
        <Route path="/main/others" element={<Oth />} />

      <Route path="/college/:id" element={<Colldet />} />
    </Routes>
);
}
