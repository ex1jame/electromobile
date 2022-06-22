import './style/App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Header from './components/Header';
import MainPage from './components/MainPage';
import TestDrive from './components/TestDrive';
import Tracking from './components/Tracking'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Credit from "./components/Credit";
import Dileram from "./components/Dileram";
import About from "./components/About";
import {useState} from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Cars from "./components/Cars";

function App() {

    const [isLight, setIsLight] = useState(false)
    const [isDisplay, setDisplay] = useState(false)
    const [isBlack, setIsBlack] = useState(false)

    return (
        <BrowserRouter className="App">
            <Header isLight={isLight} isDisplay={isDisplay} isBlack={isBlack}/>
            <Routes>
                <Route path="/" element={ <MainPage setIsLight={setIsLight} /> } />
                <Route path="/testdrive" element={ <TestDrive setIsLight={setIsLight} /> } />
                <Route path="/tracking" element={<Tracking setIsLight={setIsLight} />} />
                <Route path="/credit" element={<Credit setIsLight={setIsLight} />} />
                <Route path="/diler" element={<Dileram setIsLight={setIsLight}/>} />
                <Route path="/about" element={<About setIsLight={setIsLight} />} />
                <Route path="/login" element={<Login setDisplay={setDisplay} />} />
                <Route path="/admin" element={<Admin setDisplay={setDisplay} />} />
                <Route path="/cars" element={<Cars setIsBlack={setIsBlack} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
