import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './container/home/home';
import Login from './container/login/login';
import Addadmin from './container/addadmin/addadmin';
import Update from './container/update/update';


const RoutesPage = () => {
    return (
        <div>
                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/addadmin' element={<Addadmin/>}/>
                        <Route path='/update/:id' element={<Update/>}/>

                    </Routes> 
        </div>
    )
}

export default RoutesPage;

