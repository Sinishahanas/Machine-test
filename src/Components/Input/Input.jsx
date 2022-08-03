import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import './Input.css'

function Input() {
    const [show,setShow]=useState('')

    const [form,setForm]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(form);
        setShow(form)
    }

  return (
        <div>
          <div className="card">
            <Form className="form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label text-light">Email</Form.Label>
                <Form.Control
                  className="input"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label text-light">Password</Form.Label>
                <Form.Control
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
   
              <Button className="button" variant="success" type="submit" onClick={handleClick}>
                Submit
              </Button>
            </Form>
            </div> 
      <br/>
      <center>
      <div className="show">
        <p>{show.email}</p>
        <p>{show.password}</p>
      </div>
      </center>
    </div>
  );
}

export default Input;
