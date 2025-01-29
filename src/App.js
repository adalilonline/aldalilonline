import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCustom from './components/NavbarCustom';
import Login from './components/Login';
import FirstYear from './components/FirstYear';
import SecondYear from './components/SecondYear';
import ThirdYear from './components/ThirdYear';
import AdminDashboard from './components/AdminDashboard';
import Starting from './components/Starting'; // <-- استيراد صفحة البداية

// سنستخدم هذا الرابط لجلب بيانات users كقراءة فقط
const RAW_JSON_URL = "https://raw.githubusercontent.com/adalilonline/dasht/main/dasht/notused/userData.json";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [usersData, setUsersData] = useState([]);

  // دالة fetch لجلب البيانات من GitHub
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

  // بعض الدوال لمعرفة السنة
  const getUserCode = (username) => {
    const match = username.match(/\d+/);
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

  // مكون حماية (Route) حسب الشروط
  function ProtectedRoute({ children, allowedCheck }) {
    if (!currentUser || !allowedCheck()) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  return (
    <Router>
      {
        // نخفي النافبار في صفحة /login أو /starting إذا أردت
        (window.location.pathname !== '/login' && window.location.pathname !== '/starting') && (
          <NavbarCustom currentUser={currentUser} />
        )
      }
      <Routes>
        {/* المسار الافتراضي / => صفحة البداية (Starting) */}
        <Route
          path="/"
          element={<Starting />}
        />

        {/* صفحة البداية (قد تستعمله أيضًا للعودة لها) */}
        <Route
          path="/starting"
          element={<Starting />}
        />

        {/* صفحة تسجيل الدخول */}
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

        {/* مسارات السنوات */}
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

        {/* مسار لوحة التحكم للأدمن */}
        <Route
          path="/admin-dashboard"
          element={
            currentUser && currentUser.isAdmin ? (
              <AdminDashboard
                usersData={usersData}
                setUsersData={setUsersData}
                fetchUsersFromGitHub={fetchUsersFromGitHub}
                currentUser={currentUser}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* أي مسار غير معروف => توجه للـ / (الصفحة الرئيسية /starting) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
