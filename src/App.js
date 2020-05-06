import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <div className='row no-gutters app'>
            <div className='col-12'>
                <Header/>
            </div>
            <div className="col-3">
                <Navbar/>
            </div>
            <div className="col-9">
                <div className=''>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile'
                           render={() => <Profile/>}/>
                </div>
            </div>


        </div>
    )
}

export default App;