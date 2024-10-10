import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(['Feed cow', 'Walk cow', 'Drink water']);

  const createTask = (e) => {
    e.preventDefault();
    console.log(task);
    if (task) {
      setTasks([...tasks, task]);
      console.log(tasks);
      setTask('');
    }
  };

  const remove = (i) => {
    setTasks(tasks.slice(0, i).concat(tasks.slice(i + 1)));
    console.log('deleted');
  };

  return (
    <Container className='App'>
      <br />
      <Row align='center'>
        <Col xs={0} md={2}></Col>
        <Col xs={8} md={6}>
          <h1>To-do App</h1>
        </Col>
        <Col xs={4} md={4}></Col>
      </Row>
      <br />
      <br />
      <Form onSubmit={createTask}>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={8} md={6}>
            <Form.Control
              placeholder='Add a task'
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Col>
          <Col xs={4} md={4}>
            <Button variant='primary' type='submit'>
              Create
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
      <hr />
      {tasks.map((task, i) => (
        <>
          <Row key={i}>
            <Col xs={0} md={2}></Col>
            <Col xs={8} md={6}>
              <h5>{task}</h5>
            </Col>
            <Col xs={4} md={4} className='icons'>
              <AiOutlineDelete className='icon' onClick={() => remove(i)} />
            </Col>
          </Row>
          <hr />
        </>
      ))}
    </Container>
  );
}

export default App;
