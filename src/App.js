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
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Cars from "./components/Cars";
import Categories from "./components/Categories";
import Materials from "./components/materials";
import Application from "./components/Application";
import Seo from "./components/seo";
import Icons from "./components/icons";
import Create from "./components/Create";
import Edit_application from "./components/edit_application";
import { CreateCategory } from './components/CreateCategory';
import Vehicle from './components/Vehicle';
import { EditCategory } from './components/EditCategory';
import EditCar from './components/EditCar';
import { CreateTracking } from './components/CreateTracking';
import { TrackingList } from './components/TrackingList';
import { EditTracking } from './components/EditTracking';
import { EditStep } from './components/EditStep';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios';
import { _LINK } from './data/Data';
import { TrackingListClosed } from './components/TrackingListClosed';

function App() {

    const [isLight, setIsLight] = useState(false)
    const [isDisplay, setDisplay] = useState(false)
    const [isBlack, setIsBlack] = useState(false)
    const [title, setTitle] = useState("")
    const [metaDesc, setMetaDesc] = useState("")
    const [keyWords, setKeyWords] = useState("")
    const [seo, setSeo] = useState({})

    useEffect(() => {
        const get = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/user/seo`
            }
            try {
                const { data } = await axios(config)
                console.log(data)
                setSeo(data)
            } catch (e) {
                alert(e)
            }
        }
        get()
        
    }, [])

    return (
        <HelmetProvider>
            <Helmet>
                <title>{seo?.title}</title>
                <meta name="description" content={seo?.metaDesc} />
                <meta name="keywords" content={seo?.keyWords} />
            </Helmet>
            <BrowserRouter className="App">
                <Header isLight={isLight} isDisplay={isDisplay} isBlack={isBlack} />
                <Routes>
                    <Route path="/" element={<MainPage setIsLight={setIsLight} />} />
                    <Route path="/testdrive" element={<TestDrive setIsLight={setIsLight} />} />
                    <Route path="/tracking" element={<Tracking setIsLight={setIsLight} />} />
                    <Route path="/credit" element={<Credit setIsLight={setIsLight} />} />
                    <Route path="/diler" element={<Dileram setIsLight={setIsLight} />} />
                    <Route path="/about" element={<About setIsLight={setIsLight} />} />
                    <Route path="/login" element={<Login setDisplay={setDisplay} />} />
                    <Route path="/admin" element={<Admin setDisplay={setDisplay} />} />
                    <Route path="/cars" element={<Cars setIsBlack={setIsBlack} />} />
                    <Route path="/categories" element={<Categories setDisplay={setDisplay} />} />
                    <Route path="/edit-category/:id/:name" element={<EditCategory setDisplay={setDisplay} />} />
                    <Route path="/edit-car/:id" element={<EditCar setDisplay={setDisplay} />} />
                    <Route path="/new-category" element={<CreateCategory setDisplay={setDisplay} />} />
                    <Route path="/material" element={<Materials setDisplay={setDisplay} />} />
                    <Route path="/application/:id" element={<Application setDisplay={setDisplay} />} />
                    <Route path="/create-tracking" element={<CreateTracking setDisplay={setDisplay} />} />
                    <Route path="/list-tracking" element={<TrackingList setDisplay={setDisplay} />} />
                    <Route path="/list-tracking-closed" element={<TrackingListClosed setDisplay={setDisplay} />} />
                    <Route path="/edit-tracking/:code/:id" element={<EditTracking setDisplay={setDisplay} />} />
                    <Route path="/edit-step/:id" element={<EditStep setDisplay={setDisplay} />} />
                    <Route path="/seo" element={<Seo setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/icons" element={<Icons setDisplay={setDisplay} />} />
                    <Route path="/create" element={<Create setDisplay={setDisplay} />} />
                    <Route path="/vehicle" element={<Vehicle setDisplay={setDisplay} />} />
                    <Route path="/edit/:id" element={<Edit_application setDisplay={setDisplay} />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
