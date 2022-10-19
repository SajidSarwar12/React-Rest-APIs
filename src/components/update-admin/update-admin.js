import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './update-admin.css';
import './../../assets/styles/globalStyles.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentNav from './../contentnav/contentnav';
import {useParams, useNavigate} from 'react-router-dom';

const Update_admin = () => {
    const param = useParams();
    const navigator= useNavigate();
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')
    const [password, setPassword]=useState('')
   useEffect(()=>{
    Axios.get(`http://localhost:8080/teacher/${param.id}`).then(response=>{
        console.log(response.data[0].phoneNo);
        setName(response.data[0].teacherFullName);
        setEmail(response.data[0].email);
        setPhone(response.data[0].phoneNo);


    });
   },[])

   console.log('phone no=',phone);

   const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit handler called")

    let payload = {
        teacherFullName:name,
        email: email,
        password: password,
        phoneNo: phone
    }
    Axios.put(`http://localhost:8080/teacher/${param.id}`, payload).then((response)=>{
        navigator("/")
    })
}

   


    return (
        <div className="contentOuter ">
            <ContentNav />
            <Container className="p-4">
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <form onSubmit={
                            (event) => {
                                submitHandler(event);
                            }
                        }>
                            <div className="mb-3" controlId="formBasicEmail">
                                <label>Name*</label>
                                <input type="name" value={name}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                                />
                            </div>

                            <div className="mb-3" controlId="formBasicEmail">
                                <label>Email*</label>
                                <input type="email" value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                                />
                            </div>

                            <div className="mb-3" controlId="formBasicEmail">
                                <label>Select Password*</label>
                                <input type="password"
                                onChange={(event)=> {
                                    setPassword(event.target.value)
                                }}
                                />
                            </div>

                            <div className="mb-3" controlId="formBasicEmail">
                                <label>Phone No*</label>
                                <input type="" value={phone}
                                onChange={(event) => {
                                    setPhone(event.target.value)
                                }}
                                />
                            </div>



                            <button variant="outline-secondary">
                                Cancel
                            </button>
                            <button variant="primary" className="m-3" type="submit">
                                Save
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Update_admin;