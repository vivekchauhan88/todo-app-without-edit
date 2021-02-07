//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Row, Col, Form, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>To-do App</h1>
      <hr />
      <br /><br />
          <Form>
            <Row>
              <Col>
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Control placeholder="Add a task"/>
              </Col>
              <Col>
                <Button variant="primary">Create</Button>
              </Col>
            </Row>
          </Form>
        <br /><br />
        <hr />
    </div>
  );
}

export default App;
