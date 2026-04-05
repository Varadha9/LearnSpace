// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, User, LogOut, Bell } from 'lucide-react';

const Navbar = ({ isAuthenticated, setIsAuthenticated, userName }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Fetch unread notifications count
  const updateUnreadCount = () => {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const unread = storedNotifications.filter((n) => !n.read).length;
    setUnreadCount(unread);
  };

  // ✅ Initial fetch + listen for storage updates
  useEffect(() => {
    updateUnreadCount();

    // Update badge dynamically when notifications are added or updated
    const handleStorageChange = (event) => {
      if (event.key === 'notifications') updateUnreadCount();
    };
    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // ✅ Also recheck whenever user logs in/out or visits notification page
  useEffect(() => {
    updateUnreadCount();
  }, [isAuthenticated, location.pathname]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    localStorage.removeItem('enrolledCourses');
    localStorage.removeItem('notifications');
    setUnreadCount(0);
    navigate('/');
  };

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div
            className="rounded p-2 me-2"
            style={{
              background: 'linear-gradient(135deg, #4B0082, #FFD700)',
              color: 'white',
            }}
          >
            <BookOpen size={24} />
          </div>
          <span className="fw-bold fs-4">LearnScape</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          {showMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setShowMenu(false)}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses" onClick={() => setShowMenu(false)}>
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setShowMenu(false)}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setShowMenu(false)}>
                Contact
              </Link>
            </li>

            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/my-journey" onClick={() => setShowMenu(false)}>
                  My Journey
                </Link>
              </li>
            )}

            {isAuthenticated ? (
              <>
                {/* Notification Button */}
                <li className="nav-item ms-lg-3 d-flex align-items-center">
                  <Link
                    to="/notifications"
                    className="btn btn-light position-relative"
                    onClick={() => setShowMenu(false)}
                  >
                    <Bell size={20} />
                    {unreadCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {unreadCount}
                      </span>
                    )}
                  </Link>
                </li>

                {/* Username and Logout Button */}
                <li className="nav-item ms-lg-3 d-flex align-items-center">
                  <span className="me-2 fw-semibold" style={{ color: '#4B0082' }}>
                    <User size={18} className="me-1" /> {userName || 'User'}
                  </span>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} className="me-1" /> Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item ms-lg-2">
                <Link
                  to="/login"
                  className="btn btn-primary"
                  onClick={() => setShowMenu(false)}
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
