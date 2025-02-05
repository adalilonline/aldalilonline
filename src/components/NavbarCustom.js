// NavbarCustom.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import logo from '../assets/aa.svg'; // عدّل المسار أو الشعار حسب حاجتك

function NavbarCustom({ currentUser, setCurrentUser }) {
  // دالة تسجيل الخروج
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser'); // إزالة بيانات المستخدم من التخزين المحلي
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        {/* الشعار (مثال) */}
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
              <>
                <span className="navbar-text me-3">
                  مرحباً {currentUser.username}
                </span>
                <Button variant="outline-danger" onClick={handleLogout}>
                  تسجيل الخروج
                </Button>
              </>
            ) : (
              <Button
                variant=""
                style={{ backgroundColor: '#ff5722', color: '#fff' }}
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
