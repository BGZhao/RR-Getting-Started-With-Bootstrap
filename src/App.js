import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website</h1>
 <>
 <>
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Bertha</td>
      <td>Zhao</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bashar</td>
      <td>Shdooh</td>
      <td>@Handsome</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Kotoko</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
 <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>For more information</Card.Title>
    <Card.Text>
      This is Bertha Website for Bootstrap
    </Card.Text>
    <Button variant="primary">Bootstrap</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
</>
 <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
</Form>
<Form.Group>
    <Form.Label>Form Dropdown with favorite movies</Form.Label>
    <Form.Control as="select">
      <option>Inception</option>
      <option>Forrest Gump</option>
      <option>Shawshank Redemption</option>
      <option>Spiderman: Into the Spiderverse</option>
      <option>Avengers: Endgame</option>
    </Form.Control>
</Form.Group>

 <Button variant="info">Info</Button>{' '}
 <Nav activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/about">About Us</Nav.Link>
    </Nav.Item>
</Nav>
</>
    </div>
  );
}


export default App;     

