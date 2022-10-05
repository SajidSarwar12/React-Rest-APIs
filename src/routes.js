import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidenav from './components/sidenav/sidenav';
import Footer from './components/footer/footer';
import Home from './container/home/home';
import Addadmin from './container/addadmin/addadmin';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const RoutesPage = () => {
    return (
        <div>
            <Row className="gx-0">
                <Col xs lg="2"  >
                    <Sidenav/>
                </Col>
                <Col xs lg="10" >
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/addadmin' element={<Addadmin/>}/>
                    </Routes> 
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default RoutesPage;

