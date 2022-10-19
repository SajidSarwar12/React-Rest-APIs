import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

function ContentNav() {

  const navigator= useNavigate();
  return (
    <Navbar expand="lg" variant="light" bg="white">
      <Container fluid>
        <Navbar.Brand href="#">Administrator</Navbar.Brand>
        <Form className="d-flex">
            <Button variant="primary" onClick={()=>navigator("/addadmin")}>Create</Button>
          </Form>
      </Container>
    </Navbar>
  );
}

export default ContentNav;