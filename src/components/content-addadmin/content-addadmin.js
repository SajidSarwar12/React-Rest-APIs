import React from 'react';
import './content-addadmin.css';
import './../../assets/styles/globalStyles.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentNav from './../contentnav/contentnav';

const Content_addadmin = () => {
     

        return (
            <div className="contentOuter ">
                <ContentNav />
                <Container className="p-4">
                    <Row className="justify-content-md-center">
                        <Col xs lg="8">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Select Password*</Form.Label>
                                    <Form.Select>
                                        <option>Random Password</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Select Role*</Form.Label>
                                    <Form.Select>
                                        <option>Select Role</option>
                                    </Form.Select>
                                </Form.Group>

                                <Button variant="outline-secondary" type="submit">
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit" className="m-3">
                                    Create
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
}

export default Content_addadmin;