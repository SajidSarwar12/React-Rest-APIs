import React from 'react';
import Sidenav from './../sidenav/sidenav';
import Footer from './../footer/footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 const index =  (props) => {
    return (
        <div>
            <Row className="gx-0">
                <Col xs lg="2"  >
                    <Sidenav/>
                </Col>
                <Col xs lg="10" >
                {
                props.children
                }
                </Col>
            </Row>
            <Footer/>
            
            
        </div>
    )
} 
export default index;