import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import './content-addadmin.css';
import './../../assets/styles/globalStyles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentNav from './../contentnav/contentnav';

const Content_addadmin = () => {
    const navigator= useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    console.log("name=", name)
    console.log("password=", password)

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("submit handler called")

        let payload = {
            teacherFullName:name,
            email: email,
            password: password,
            phoneNo: phone
        }
        Axios.post('http://localhost:8080/teacher', payload).then((response)=>{
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
                                <input type="name" required
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }}
                                />
                            </div>

                            <div className="mb-3" controlId="formBasicEmail">
                                <label>Email*</label>
                                <input type="email" required
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}
                                />
                            </div>

                            <div className="mb-3" controlId="formBasicEmail">
                                <label>Select Password*</label>
                                <input type="password" required
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                    }}
                                />
                            </div>

                            <div className="mb-3" controlId="formBasicEmail">
                                <label>Phone No*</label>
                                <input type="number" required
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

export default Content_addadmin;