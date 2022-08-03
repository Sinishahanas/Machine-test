import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navbar1.css'

function Navbar1() {
  return (
    <div><Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand ><Link to="/" style={{color:'black',textDecoration:'none'}}><b>ZARTEK</b></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-2"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto bg-light ">
          <Link to='/pagination' className='subdemo'>PAGINATION</Link>
          <Link to='/toggle' className='subdemo'>TOGGLE</Link>
          <Link to='/input' className='subdemo'>INPUT</Link>
          <Link to='/parentChild' className='subdemo'>PARENT-CHILD</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Navbar1