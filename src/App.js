//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Row, Col, Form, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>To-do App</h1>
      <br />
      <br />
          <Form>
            <Row>
              <Col>
              </Col>
              <Col xs={6}>
                <Form.Control placeholder="Add a task"/>
              </Col>
              <Col xs={4}>
                <Button variant="primary">Create</Button>
              </Col>
            </Row>
          </Form>
        <br />
        <hr />
        
        <p><Row><Col></Col><Col xs={6}>
        Buy apples</Col><Col xs={4}>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        <p><Row><Col></Col><Col xs={6}>
        Feed cat</Col><Col xs={4}>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        <p><Row><Col></Col><Col xs={6}>
        Walk dog</Col><Col xs={4}>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        <p><Row><Col></Col><Col xs={6}>
        Drink water</Col><Col xs={4}>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        <p><Row><Col></Col><Col xs={6}>
        Eat bananas</Col><Col xs={4}>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        
    </div>
  );
}

export default App;
