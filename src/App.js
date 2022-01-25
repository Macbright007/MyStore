import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import Home from './components/Home';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route  path="/" exact element={<Home />}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
