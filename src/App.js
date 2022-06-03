import './style/App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Header from './components/Header';
import MainPage from './components/MainPage';
import TestDrive from './components/TestDrive';
import Tracking from './components/Tracking'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter className="App">
            <Header />
            <Routes>
                <Route path="/" element={ <MainPage /> } />
                <Route path="/testdrive" element={ <TestDrive /> } />
                <Route path="/tracking" element={<Tracking/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
