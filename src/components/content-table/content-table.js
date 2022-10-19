import React, { useEffect, useState } from 'react';
import './content-table.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


function Contenttable() {
    const navigator = useNavigate();
    const [post, setPost] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8080/teacher').then(response => {
            setPost(response.data);
        }).catch(error => {
            console.log(error)
        })

        // Axios.get(URL).then(response=>{
        //     console.log(response)
        // }).catch(error=>{
        //     console.log(error)
        // })
    }, []);

    //table 2

    const [content, setContent] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8080/student').then(response => {
            setContent(response.data);
        }).catch(error => {
            console.log(error)
        })
    }, []);

    // method for deleting teacher

    const deleteTeacherRecordHandler = (id) => {
        Axios.delete(`http://localhost:8080/teacher?teacherId=${id}`).then(response => {
            let remainingRecords = post.filter((record) => record.teahcherId !== id);
            setPost(remainingRecords);
        })
    }

    // method for deleting student

    const deleteStudentRecordHandler = (s_id) => {
        Axios.delete(`http://localhost:8080/student?studentId=${s_id}`).then(response => {
            let remainingStudents = content.filter((record) => record.studentId !== s_id);
            setContent(remainingStudents);
        })

    }

    //modal code

    let subtitle;
    const [IsOpen, setIsOpen] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    console.log('userdetails=', userDetails);



    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#0d6efd';

    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };





    return (
        <React.Fragment>
            <Table bordered hover bgdark>
                <thead class="thead-primary ">
                    <tr>
                        <th >Id</th>
                        <th>Email</th>
                        <th>Teacher Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((item, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.email}</td>
                            <td>{item.teacherFullName}</td>
                            <td>{item.phoneNo}</td>
                            <td>
                                <ButtonToolbar aria-label="Toolbar with button groups">
                                    <ButtonGroup className="me-2" aria-label="First group" >
                                        <Button variant="outline-secondary" size="sm" onClick={() => { deleteTeacherRecordHandler(item.teahcherId) }}>delete</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="me-2" aria-label="Second group">
                                        <Button variant="outline-secondary" size="sm" onClick={() => navigator(`/update/${item.teahcherId}`)}>update</Button>
                                    </ButtonGroup>
                                    <ButtonGroup aria-label="Third group">
                                        <Button variant="outline-secondary" size="sm" onClick={() => {
                                            openModal()
                                            setUserDetails(item)
                                        }}>View Details</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </td>
                        </tr>
                    )
                    }



                </tbody>
            </Table>
            <Table bordered hover bgdark>
                <thead class="thead-primary ">
                    <tr>
                        <th >Id</th>
                        <th>Email</th>
                        <th>Student Name</th>
                        <th>Student FullName</th>
                        <th>Parent FullName</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((item, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.email}</td>
                            <td>{item.studentFullName}</td>
                            <td>{item.parentFullName}</td>
                            <td>
                                <ButtonToolbar aria-label="Toolbar with button groups">
                                    <ButtonGroup className="me-2" aria-label="First group" >
                                        <Button variant="outline-secondary" size="sm" onClick={() => { deleteStudentRecordHandler(item.studentId) }}>delete</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="me-2" aria-label="Second group">
                                        <Button variant="outline-secondary" size="sm">update</Button>
                                    </ButtonGroup>
                                    <ButtonGroup aria-label="Third group">
                                        <Button variant="outline-secondary" size="sm" onClick={openModal}>View Details</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </td>
                        </tr>
                    )
                    }



                </tbody>
            </Table>

            {/* // --------------------------------modal--------------------------- */}

            <Modal
                isOpen={IsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Teacher Details</h2>


                <Table bordered hover bgdark>
                    <thead class="thead-primary ">
                        <tr>
                            <th >Id</th>
                            <th>Email</th>
                            <th>Teacher Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{userDetails.teahcherId}</td>
                            <td>{userDetails.email}</td>
                            <td>{userDetails.teacherFullName}</td>
                            <td>{userDetails.phoneNo}</td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="outline-primary" onClick={() => {
                    closeModal()
                    setUserDetails({})
                }}>close</Button>

            </Modal>
        </React.Fragment>
    );
}
export default Contenttable;