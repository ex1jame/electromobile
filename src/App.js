import './style/App.css';
import './style/media.css'

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
import News from './components/News';
import { NewsCreate } from './components/NewsCreate';
import { NewsUpdate } from './components/NewsUpdate';
import Videos from './components/Videos';
import { AboutAdmin } from './components/AboutAdmin';
import { ArticlePage } from './components/ArticlePage';
import ico from './favicon.ico'
import AboutPageAdmin from './components/pages-admin/AboutPageAdmin';
import CreditPageAdmin from './components/pages-admin/CreditPageAdmin';
import DealerPageAdmin from './components/pages-admin/DealerPageAdmin';
import MainPageAdmin from './components/pages-admin/MainPageAdmin';
import TestDrivePageAdmin from './components/pages-admin/TestDrivePageAdmin';
import TrackingPageAdmin from './components/pages-admin/TrackingPageAdmin';
import { useDispatch } from 'react-redux';
import { addSeo } from './redux/actions/seo';

function App() {

    const [isLight, setIsLight] = useState(false)
    const [isDisplay, setDisplay] = useState(false)
    const [isBlack, setIsBlack] = useState(false)
    const [seo, setSeo] = useState({})
    const dispatch  = useDispatch()

    useEffect(() => {
        const get = async () => {
            const config = {
                method: 'get',
                url: `${_LINK}/v1/api/user/seo`
            }
            try {
                const { data } = await axios(config)
                setSeo(data)
                dispatch(addSeo(data))
            } catch (e) {
                console.log(e)
            }
        }
        get()
        
    }, [])

    return (
        <HelmetProvider>
            <Helmet>
                <title>{seo?.title}</title>
                <meta property="og:title" content={seo?.title} />
                <meta name="description" content={seo?.metaDesc} />
                <meta name="og:description" content={seo?.metaDesc} />
                <meta name="keywords" content={seo?.keyWords} />
                <meta name="og:keywords" content={seo?.keyWords} />
                <link rel="icon" type="image/png" href={seo?.metaLogo?.name ? `${_LINK}/v1/api/file/${seo?.metaLogo?.name}` : ico} sizes="16x16" />
            </Helmet>
            <BrowserRouter className="App">
                <Header isLight={isLight} isDisplay={isDisplay} isBlack={isBlack} />
                <Routes>
                    <Route path="/" element={<MainPage setIsLight={setIsLight} seo={seo} />} />
                    <Route path="/testdrive" element={<TestDrive setIsLight={setIsLight} seo={seo} />} />
                    <Route path="/tracking" element={<Tracking setIsLight={setIsLight} seo={seo} />} />
                    <Route path="/credit" element={<Credit setIsLight={setIsLight} seo={seo} />} />
                    <Route path="/diler" element={<Dileram setIsLight={setIsLight} seo={seo} />} />
                    <Route path="/about" element={<About setIsLight={setIsLight} seo={seo} />} />
                    <Route path="/login" element={<Login setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/admin" element={<Admin setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/cars/:id" element={<Cars setIsBlack={setIsBlack} seo={seo} />} />
                    <Route path="/categories" element={<Categories setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/edit-category/:id/:name" element={<EditCategory setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/edit-car/:id" element={<EditCar setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/new-category" element={<CreateCategory setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/material" element={<Materials setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/application/:id" element={<Application setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/create-tracking" element={<CreateTracking setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/list-tracking" element={<TrackingList setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/list-tracking-closed" element={<TrackingListClosed setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/edit-tracking/:code/:id" element={<EditTracking setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/edit-step/:id" element={<EditStep setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/seo" element={<Seo setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/icons" element={<Icons setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/create" element={<Create setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/vehicle" element={<Vehicle setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/edit/:id" element={<Edit_application setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/news" element={<News setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/create-news" element={<NewsCreate setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/edit-news/:id" element={<NewsUpdate setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/videos" element={<Videos setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/page-about" element={<AboutAdmin setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/article/:id" element={<ArticlePage setIsLight={setIsLight} />} seo={seo} />
                    <Route path="/admin-about" element={<AboutPageAdmin setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/admin-credit" element={<CreditPageAdmin setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/admin-dealer" element={<DealerPageAdmin setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/admin-main" element={<MainPageAdmin setDisplay={setDisplay} />} seo={seo} />
                    <Route path="/admin-test" element={<TestDrivePageAdmin setDisplay={setDisplay} seo={seo} />} />
                    <Route path="/admin-tracking" element={<TrackingPageAdmin setDisplay={setDisplay} seo={seo} />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
