import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import BriefContact from '../BriefContact';
import MyData from '../MyData';


export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MyData/>} />
        <Route path='/briefcard/:id' element={<BriefContact/>} />

        {/* <Route path="/bot/:id/flow" element={<BotFlow />} /> */}


      </Routes>
    </div>
  )
}
