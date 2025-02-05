// App.js
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCustom from './components/NavbarCustom';
import Login from './components/Login';
import FirstYear from './components/FirstYear';
import SecondYear from './components/SecondYear';
import ThirdYear from './components/ThirdYear';
import AdminDashboard from './components/AdminDashboard';
import Starting from './components/Starting';

import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';

const RAW_JSON_URL = "https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/notused/userData.json";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // لا نسمح بالفحص قبل إتمام القراءة
  const [usersData, setUsersData] = useState([]);

  // قراءة localStorage عند تحميل التطبيق
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoadingUser(false);
  }, []);

  // جلب بيانات المستخدمين من GitHub
  const fetchUsersFromGitHub = useCallback(async () => {
    try {
      const response = await fetch(RAW_JSON_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setUsersData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);

  // دوال معرفة السنة
  const getUserCode = (username) => {
    const match = username?.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };

  const isFirstYear = () => {
    if (!currentUser || currentUser.isAdmin) return false;
    const code = getUserCode(currentUser.username);
    return code >= 1001 && code <= 2000;
  };
  const isSecondYear = () => {
    if (!currentUser || currentUser.isAdmin) return false;
    const code = getUserCode(currentUser.username);
    return code >= 2001 && code <= 3000;
  };
  const isThirdYear = () => {
    if (!currentUser || currentUser.isAdmin) return false;
    const code = getUserCode(currentUser.username);
    return code >= 3001 && code <= 4000;
  };

  // مكوّن حماية للسنوات
  function ProtectedRoute({ children, allowedCheck }) {
    if (loadingUser) {
      // ما زلنا نقرأ المستخدم
      return null;
    }
    if (!currentUser || !allowedCheck()) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  // مكوّن حماية للأدمن
  function AdminProtectedRoute({ children }) {
    if (loadingUser) {
      return null; // أو شاشة تحميل
    }
    if (!currentUser || !currentUser.isAdmin) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  return (
    <Router>
      {/* إخفاء النافبار في صفحات معينة */}
      {(window.location.pathname !== '/login' && window.location.pathname !== '/starting') && (
        <NavbarCustom currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}

      <Routes>
        <Route path="/" element={<Starting />} />
        <Route path="/starting" element={<Starting />} />

        <Route
          path="/login"
          element={
            <Login
              setCurrentUser={setCurrentUser}
              usersData={usersData}
              setUsersData={setUsersData}
              fetchUsersFromGitHub={fetchUsersFromGitHub}
            />
          }
        />

        {/* السنوات (محميّة) */}
        <Route
          path="/first-year"
          element={
            <ProtectedRoute allowedCheck={isFirstYear}>
              <FirstYear />
            </ProtectedRoute>
          }
        />
        <Route
          path="/second-year"
          element={
            <ProtectedRoute allowedCheck={isSecondYear}>
              <SecondYear />
            </ProtectedRoute>
          }
        />
        <Route
          path="/third-year"
          element={
            <ProtectedRoute allowedCheck={isThirdYear}>
              <ThirdYear />
            </ProtectedRoute>
          }
        />

        {/* لوحة تحكم الأدمن */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard
                fetchUsersFromGitHub={fetchUsersFromGitHub}
                currentUser={currentUser}
                usersData={usersData}
                setUsersData={setUsersData}
              />
            </AdminProtectedRoute>
          }
        />

        {/* البوكسات */}
        <Route path="/box1" element={<Box1 />} />
        <Route path="/box2" element={<Box2 />} />
        <Route path="/box3" element={<Box3 />} />
        <Route path="/box4" element={<Box4 />} />

        {/* أي مسار غير معروف */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
