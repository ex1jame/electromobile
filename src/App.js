import './style/App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Header from './components/Header';
import MainPage from './components/MainPage';
import TestDrive from './components/TestDrive';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter className="App">
            <Header />
            <Routes>
                <Route path="/" element={ <MainPage /> } />
                <Route path="/testdrive" element={ <TestDrive /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
