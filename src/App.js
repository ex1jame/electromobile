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

function App() {

    const [isLight, setIsLight] = useState(false)
    const [isDisplay, setDisplay] = useState(false)

    return (
        <BrowserRouter className="App">
            <Header isLight={isLight} isDisplay={isDisplay}/>
            <Routes>
                <Route path="/" element={ <MainPage setIsLight={setIsLight} /> } />
                <Route path="/testdrive" element={ <TestDrive setIsLight={setIsLight} /> } />
                <Route path="/tracking" element={<Tracking setIsLight={setIsLight} />} />
                <Route path="/credit" element={<Credit setIsLight={setIsLight} />} />
                <Route path="/diler" element={<Dileram setIsLight={setIsLight}/>} />
                <Route path="/about" element={<About setIsLight={setIsLight} />} />
                <Route path="/login" element={<Login setDisplay={setDisplay} />} />
                <Route path="/admin" element={<Admin setDisplay={setDisplay} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
