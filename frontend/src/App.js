import React from 'react';
import Home from './component/home/home.js';
import Main from './component/main.js';
import {Routes,Route} from 'react-router-dom';
export default function(){
return(
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/contact" element={<div>contact</div>} />
      </Routes>
);
}
