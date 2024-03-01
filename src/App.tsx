import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import HomeComponent from './Components/HomeComponent';
import About from './Components/About';
import NavBar from './Components/NavBar';
import CampaignDetails from './Components/CampaignDetails';

export default class App extends React.Component{

    render() {
        return (
            <div style = {{height: '100vh', backgroundColor: 'wheat'}}>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path = "/"            element = {<HomeComponent />} />
                        <Route path = "/about"       element = {<About />} />
                        <Route path = "/details/:id" element = {<CampaignDetails/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}