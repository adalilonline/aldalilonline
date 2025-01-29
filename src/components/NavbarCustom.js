import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/aa.svg'; // تأكد من صحة المسار

function NavbarCustom({ currentUser }) {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        {/* شعار فقط بدون نص */}
        <Navbar.Brand as={Link} to="/login">
          <img
            src={logo}
            alt="Logo"
            width="150px"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {currentUser ? (
              <span className="navbar-text">
                {currentUser.username}, مرحبا
              </span>
            ) : (
              // هنا وضعنا زر تسجيل الدخول بدلاً من النص "غير مسجّل"
              <Button
                variant=""
                style={{backgroundColor:'#ff5722',color:'#fff'}}
                as={Link}
                to="/login"
              >
                تسجيل الدخول
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
