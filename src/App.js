import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserProvider from './Components/Context/User';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {
  if(isMobile) {
    window.location.href = "http://192.168.1.157:3001"
  }
  return (
    <div className="App"> 
    <UserProvider>
      <Navbar />
      <div className="py-5">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/register" element={<Register />}/>
        </Routes>
      </div>
    </UserProvider>
    </div>
  );
}

export default App;
