import React from 'react';
import './content-box.css';
import Contenttable from './../content-table/content-table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pagination from 'react-bootstrap/Pagination';

function Contentbox() {
    return (
        <div>
            <div className="gx-4 p-3 ">
                <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className="content-box-outer">
                    <Container>
                        <Navbar.Brand href="#home">All Admins Record</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav>
                                <DropdownButton id="dropdown-basic-button" title="Select Admin Status" variant="outline-light">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Contenttable />
                <Pagination variant="outline-primary" size="lg">
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>

            </div>


        </div>
    );
}
export default Contentbox;