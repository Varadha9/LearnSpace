// src/pages/Notifications.jsx

import React, { useEffect, useState } from 'react';
import { Trash2, Bell, CheckCircle } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedNotifications =
      JSON.parse(localStorage.getItem('notifications')) || [];
    setNotifications(storedNotifications);
  }, []);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const toggleRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: !n.read } : n
    );
    setNotifications(updated);
  };

  const deleteNotification = (id) => {
    const updated = notifications.filter((n) => n.id !== id);
    setNotifications(updated);
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4" style={{ color: '#4B0082' }}>
        <Bell size={24} className="me-2" /> Notifications
      </h2>

      {notifications.length === 0 ? (
        <div className="text-center py-5">
          <CheckCircle size={60} color="#4B0082" className="mb-3" />
          <h5 className="text-muted">You're all caught up! 🎉</h5>
          <p>No new notifications at the moment.</p>
        </div>
      ) : (
        <ul className="list-group shadow-sm">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                notification.read ? 'bg-light' : ''
              }`}
            >
              <div>
                <span
                  className={`fw-semibold ${
                    notification.read ? 'text-muted' : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleRead(notification.id)}
                >
                  {notification.message.replace(
                    /(You enrolled in )(.*?)(!)/,
                    (_, prefix, course, suffix) =>
                      `${prefix}<strong>${course}</strong>${suffix}`
                  )}
                </span>
                <div className="small text-muted">{notification.time}</div>
              </div>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteNotification(notification.id)}
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
