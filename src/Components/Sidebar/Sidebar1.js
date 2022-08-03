import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

function Sidebar() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Nav variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Nav> */}
       <Navbar bg="dark" expand="lg">
       
       <NavDropdown style={{color:'white'}} title="Dropdown" onClick={handleShow} id="basic-nav-dropdown">

       </NavDropdown>
       </Navbar>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {/* <Link to='/pagination' >P</Link> */}
            {/* <Link to='/input' >Input</Link> */}
            <Link to="/Pagination" className='demo'>Sign Up</Link><br/>
            <Link to="/Input" className='demo'>Login</Link><br/>
            <Link to="/Toggle" className='demo'>togglr</Link><br/>
            <Link to="/ParentChild" className='demo'>parent</Link><br/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar