// Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

import logo from '../assets/logo.svg'; // عدّل المسار أو الصورة حسب حاجتك

function Login({ setCurrentUser, usersData, setUsersData, fetchUsersFromGitHub }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // استخراج رقم المستخدم من الـ username
  const getUserCode = (uname) => {
    const match = uname.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // حالة الأدمن
    if (
      username === 'ahmed$#@@admin.dashboard' &&
      password === 'admin$#@aldalildashboard'
    ) {
      const adminUser = { username, isAdmin: true };
      setCurrentUser(adminUser);
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      navigate('/admin-dashboard');
      return;
    }

    // إذا لم يكن أدمن => ابحث في usersData
    if (!usersData || usersData.length === 0) {
      setError('لم يتم تحميل بيانات المستخدمين بعد. حاول مجددًا.');
      return;
    }

    const foundUser = usersData.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      // حفظ بيانات المستخدم في localStorage
      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      const userCode = getUserCode(foundUser.username);
      if (userCode >= 1001 && userCode <= 2000) {
        navigate('/first-year');
      } else if (userCode >= 2001 && userCode <= 3000) {
        navigate('/second-year');
      } else if (userCode >= 3001 && userCode <= 4000) {
        navigate('/third-year');
      } else {
        setError('الكود الخاص بك غير موجود ضمن السنوات المحددة!');
      }
    } else {
      setError('اسم المستخدم أو كلمة المرور غير صحيحة!');
    }
  };

  // جلب بيانات المستخدمين (مرة واحدة عند التحميل)
  useEffect(() => {
    fetchUsersFromGitHub();
  }, [fetchUsersFromGitHub]);

  return (
    <Container
      className="my-5"
      style={{
        direction: 'rtl',
        textAlign: 'right',
      }}
    >
      {/* الشعار في المنتصف */}
      <Row className="justify-content-center">
        <Col xs="auto">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '280px', height: 'auto', marginTop: '70px' }}
          />
        </Col>
      </Row>

      {/* بطاقة نموذج الدخول */}
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} lg={4}>
          <Card
            className="shadow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: 'none',
            }}
          >
            <Card.Body>
              <h4 className="text-center mb-4" style={{ color: '#333' }}>
                تسجيل الدخول
              </h4>
              {error && <div className="alert alert-danger">{error}</div>}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label style={{ color: '#333' }}>
                    اسم المستخدم :
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="أدخل اسم المستخدم"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ textAlign: 'right' }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label style={{ color: '#333' }}>
                    كلمة المرور :
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ textAlign: 'right' }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    backgroundColor: '#ff5722',
                    border: 'none',
                  }}
                >
                  تسجيل الدخول
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Login;
