import Dashboard from "./Dashboard.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserDetails from "./UserDetails.js";
import DetailEntry from "./DetailEntry.js";
import Contact from "./Contact.js";
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/dashboard/detailentry" element={<DetailEntry/>}/>  
        <Route path="/userdetails" element={<UserDetails/>}/>
        <Route path="/contact" elements={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    )
  }
}
