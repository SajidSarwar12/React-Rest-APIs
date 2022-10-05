import React, { useEffect, useState } from 'react';
import './content-table.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Axios from 'axios';


function Contenttable() {
    const [post, setPost]=useState([]);
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            
            setPost(response.data);
        }).catch(error=>{
            console.log(error)
        })
        
        // Axios.get(URL).then(response=>{
        //     console.log(response)
        // }).catch(error=>{
        //     console.log(error)
        // })
    },[]);
    console.log(post);
    return (
        <Table bordered hover bgdark>
            <thead class="thead-primary ">
                <tr>
                    <th >Id</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Website</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                { post.map(item=>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.website}</td>
                    <td>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="me-2" aria-label="First group" >
                                <Button variant="outline-secondary" size="sm">1</Button>
                            </ButtonGroup>
                            <ButtonGroup className="me-2" aria-label="Second group">
                                <Button variant="outline-secondary" size="sm">2</Button>
                            </ButtonGroup>
                            <ButtonGroup aria-label="Third group">
                                <Button variant="outline-secondary" size="sm">View Details</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </td>
                </tr>
                )
                }
                
               
                 
            </tbody>
        </Table>
    );
}
export default Contenttable;