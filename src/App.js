//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Row, Col, Form, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>To-do App</h1>
      <hr />
      <br />
          <Form>
            <Row>
              <Col>
              </Col>
              <Col xs={6}>
                <Form.Control placeholder="Add a task"/>
              </Col>
              <Col>
                <Button variant="primary">Create</Button>
              </Col>
            </Row>
          </Form>
        <br />
        <hr />
        
        <p><Row><Col>
        Buy apples</Col><Col>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        <p><Row><Col>
        Feed cat</Col><Col>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        <p><Row><Col>
        Walk dog</Col><Col>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        <p><Row><Col>
        Drink water</Col><Col>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        <p><Row><Col>
        Eat bananas</Col><Col>
        <Button variant="info">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
        </Col></Row></p>
        <hr />
        
    </div>
  );
}

export default App;
