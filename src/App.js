import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import Home from './components/Home';
import NavBar from './components/layout/NavBar';
import { ItemProvider } from './components/ItemContext'

function App() {
  return (
    <BrowserRouter>
      <ItemProvider>
      <NavBar />
        <Routes>
          <Route  path="/" exact element={<Home />}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </ItemProvider>
    </BrowserRouter>
  );
}

export default App;
