import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';
import { FcTodoList } from "react-icons/fc";
import { CiCircleList } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

function App() {
  const [enter,setEnter]=useState("")
  const [tasks,setTasks]=useState([])
  const handleTask=(e)=>
  {
    setEnter(e.target.value)
  }
  const handleAdd=()=>
  {
    setTasks([...tasks,enter])
    setEnter('')
  }
  const handleDelete=(index)=>
  {
    const updateTasks=[...tasks];
    updateTasks.splice(index, 1);
    setTasks(updateTasks);
  }
  return (
    <div id='body'>
      <h1 id='head'><FcTodoList /> Todo List</h1>
      {/* <input id='ip' type='text' value={enter} placeholder='enter' onChange={handleTask}></input> */}
      {/* <Form.Control size="lg" type="text" value={enter} placeholder="Enter" onChange={handleTask} /> */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="enter"
          type='text' value={enter} onChange={handleTask}
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-primary" id="button-addon2" onClick={handleAdd}>
        <FaPlus />
        </Button>
      </InputGroup>
      {/* <Button variant="info" onClick={handleAdd}>Add</Button> */}
      {
        tasks.map((items,index)=>(
          // <li key={index}>{items}<button onClick={()=>handleDelete(index)}><MdDelete /></button></li>
          <Stack key={index}>
      <div className="p-2"><CiCircleList id='list' />{items}<MdDelete onClick={()=>handleDelete(index)} id="icon" /></div>
    </Stack>
        ))
      }
    </div>
  );
}

export default App;
