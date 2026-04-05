// src/pages/Courses.jsx

import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, Filter, Star, Clock, Users, BookOpen,
  Video, FileText, Book, X
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

const PURPLE = '#4B0082';
const GOLD = '#FFD700';

const Courses = ({ enrolledCourses, setEnrolledCourses }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const [showModal, setShowModal] = useState(false);
  const [modalCourse, setModalCourse] = useState(null);

  const categories = ['all', 'Technology', 'Business', 'Creative', 'DevOps'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  // Sample resources fallback
  const sampleResources = (course) => ({
    videos: [
      { title: `Intro to ${course.title}`, url: 'https://youtu.be/W6NZfCO5SIk' },
      { title: `${course.title} – Essentials`, url: 'https://youtu.be/8dWL3wF_OMw' }
    ],
    articles: [
      { title: `${course.title}: Getting Started`, url: 'https://developer.mozilla.org/' }
    ],
    books: [
      { title: `Mastering ${course.title}`, url: 'https://eloquentjavascript.net/' }
    ]
  });

  const getResources = (course) => {
    if (!course.resources) return sampleResources(course);
    const r = course.resources;
    return {
      videos: Array.isArray(r.videos) && r.videos.length ? r.videos : sampleResources(course).videos,
      articles: Array.isArray(r.articles) && r.articles.length ? r.articles : sampleResources(course).articles,
      books: Array.isArray(r.books) && r.books.length ? r.books : sampleResources(course).books,
    };
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  const sortedCourses = useMemo(() => {
    const arr = [...filteredCourses];
    switch (sortBy) {
      case 'popular':
        arr.sort((a, b) => b.students - a.students);
        break;
      case 'rating':
        arr.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        arr.sort((a, b) => (b.createdAt || b.id) - (a.createdAt || a.id));
        break;
      default:
        break;
    }
    return arr;
  }, [filteredCourses, sortBy]);

  const handleEnroll = (course) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const isAlreadyEnrolled = enrolledCourses.some(en => en.courseId === course.id);

    if (!isAlreadyEnrolled) {
      const resources = getResources(course);
      const newEnrollment = {
        id: Date.now(),
        courseId: course.id,
        title: course.title,
        progress: 0,
        image: course.image,
        category: course.category,
        instructor: course.instructor,
        totalLessons: resources.videos.length,
        completedLessons: 0,
        lastAccessed: 'Just now'
      };

      const updatedCourses = [...enrolledCourses, newEnrollment];
      setEnrolledCourses(updatedCourses);
      localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));

      // ✅ Save notification on successful enrollment
      const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
      notifications.unshift({
        id: Date.now(),
        message: `🎉 You just enrolled in ${course.title}!`,
        read: false,
        time: 'Just now'
      });
      localStorage.setItem('notifications', JSON.stringify(notifications));

      alert(`Enrolled successfully! 🎉 Check it in My Journey or Notifications.`);
    } else {
      navigate('/my-journey');
    }
  };

  const openResources = (course) => {
    setModalCourse(course);
    setShowModal(true);
  };

  const closeResources = () => {
    setShowModal(false);
    setModalCourse(null);
  };

  return (
    <>
      {/* Tiny component-scoped styles for hover & modal */}
      <style>{`
        .course-card-modern {
          transition: transform .25s ease, box-shadow .25s ease;
          border-radius: 16px;
        }
        .course-card-modern:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,.08);
        }
        .img-clip {
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }
        .glass {
          background-color: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
        }
        .btn-pill {
          border-radius: 30px;
        }
        .badge-soft {
          background-color: #EDE7F6;
          color: ${PURPLE};
        }
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,.45);
          display: flex; align-items: center; justify-content: center; z-index: 1050;
        }
        .modal-card {
          width: min(860px, 92vw);
          background: #fff; border-radius: 16px; box-shadow: 0 18px 48px rgba(0,0,0,.25);
          overflow: hidden;
        }
        .modal-header {
          padding: 18px 22px; color: #fff;
          background: linear-gradient(135deg, ${PURPLE}, ${GOLD});
          display: flex; align-items: center; justify-content: space-between;
        }
        .modal-body {
          padding: 22px;
        }
        .link-clean { text-decoration: none; }
        .link-clean:hover { text-decoration: underline; }
      `}</style>

      <div className="min-vh-100" style={{ backgroundColor: '#f9f9fb' }}>
        {/* Header */}
        <section
          className="text-white py-5"
          style={{ background: `linear-gradient(135deg, ${PURPLE}, ${GOLD})` }}
        >
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-3">Explore Our Courses</h1>
                <p className="lead mb-0">
                  Discover {coursesData.length}+ expertly crafted courses to master new skills and
                  advance your career.
                </p>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="text-center p-4 rounded-4 shadow-lg glass">
                  <h3 className="fw-bold mb-1" style={{ color: GOLD }}>
                    50,000+
                  </h3>
                  <p className="mb-0">Students Learning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main */}
        <div className="container py-5">
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-3 mb-4">
              <div
                className="card border-0 shadow-sm sticky-top"
                style={{ top: '100px', borderTop: `4px solid ${PURPLE}`, borderRadius: '12px' }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0" style={{ color: PURPLE }}>
                      <Filter size={20} className="me-2" /> Filters
                    </h5>
                    <button
                      className="btn btn-sm text-decoration-none fw-semibold"
                      style={{ color: '#BA55D3' }}
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedLevel('all');
                        setSearchTerm('');
                        setSortBy('popular');
                      }}
                    >
                      Clear
                    </button>
                  </div>

                  {/* Search */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold small">Search</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <Search size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold small">Category</label>
                    <div className="d-flex flex-column gap-2">
                      {categories.map((category) => (
                        <div key={category} className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            id={`cat-${category}`}
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                          />
                          <label className="form-check-label" htmlFor={`cat-${category}`}>
                            {category === 'all' ? 'All Categories' : category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Level */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold small">Level</label>
                    <div className="d-flex flex-column gap-2">
                      {levels.map((level) => (
                        <div key={level} className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="level"
                            id={`level-${level}`}
                            checked={selectedLevel === level}
                            onChange={() => setSelectedLevel(level)}
                          />
                          <label className="form-check-label" htmlFor={`level-${level}`}>
                            {level === 'all' ? 'All Levels' : level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div className="mb-2">
                    <label className="form-label fw-semibold small">Sort by</label>
                    <select
                      className="form-select"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="popular">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="col-lg-9">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: PURPLE }}>
                    {sortedCourses.length} {sortedCourses.length === 1 ? 'Course' : 'Courses'} Found
                  </h5>
                  <p className="text-muted small mb-0">
                    {searchTerm && `Showing results for "${searchTerm}"`}
                  </p>
                </div>
              </div>

              {/* Cards */}
              {sortedCourses.length > 0 ? (
                <div className="row g-4">
                  {sortedCourses.map((course) => {
                    const enrolled = enrolledCourses.some((en) => en.courseId === course.id);
                    return (
                      <div key={course.id} className="col-md-6 col-xl-4">
                        <div className="card shadow-sm border-0 course-card-modern">
                          <div className="position-relative">
                            <img
                              src={course.image}
                              className="card-img-top img-clip"
                              alt={course.title}
                              style={{ height: 180, objectFit: 'cover' }}
                            />
                            <span
                              className="position-absolute top-0 end-0 m-3 badge"
                              style={{ backgroundColor: GOLD, color: PURPLE, fontWeight: 700 }}
                            >
                              Free
                            </span>
                            <div
                              className="position-absolute bottom-0 start-0 w-100 p-3"
                              style={{
                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.45) 100%)',
                                color: 'white',
                                borderBottomLeftRadius: 16,
                                borderBottomRightRadius: 16,
                              }}
                            >
                              <div className="d-flex justify-content-between">
                                <span className="small">
                                  <Users size={14} className="me-1" /> {course.students.toLocaleString()}
                                </span>
                                <span className="small">
                                  <Clock size={14} className="me-1" /> {course.duration}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span className="badge badge-soft">{course.category}</span>
                              <div className="d-flex align-items-center">
                                <Star size={14} fill={GOLD} className="me-1" />
                                <span className="fw-bold small">{course.rating}</span>
                              </div>
                            </div>

                            <h5 className="fw-bold mb-2" style={{ color: PURPLE }}>
                              {course.title}
                            </h5>
                            <p className="text-muted small mb-3">{course.description}</p>

                            <div className="text-muted small mb-3">👤 {course.instructor}</div>
                            <span className="badge bg-light text-dark">{course.level}</span>
                          </div>

                          <div className="card-footer bg-white border-0 pb-4 px-4">
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-pill flex-grow-1 fw-bold"
                                style={{ backgroundColor: PURPLE, color: 'white' }}
                                onClick={() => handleEnroll(course)}
                              >
                                {enrolled ? 'Continue Course' : 'Enroll Now'}
                              </button>
                              <button
                                className="btn btn-outline-secondary btn-pill"
                                onClick={() => openResources(course)}
                                title="View resources"
                              >
                                <Video size={18} className="me-1" />
                                Resources
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-5">
                  <BookOpen size={64} className="text-muted mb-3" />
                  <h4 className="fw-bold mb-2">No courses found</h4>
                  <p className="text-muted">Try adjusting your filters or search terms</p>
                  <button
                    className="btn fw-bold btn-pill"
                    style={{ backgroundColor: PURPLE, color: 'white' }}
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedLevel('all');
                      setSortBy('popular');
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Resources Modal */}
      {showModal && modalCourse && (
        <div className="modal-overlay" onClick={closeResources}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="d-flex align-items-center">
                <Video size={22} className="me-2" />
                <strong>Resources · {modalCourse.title}</strong>
              </div>
              <button className="btn btn-light btn-sm" onClick={closeResources}>
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              {(() => {
                const r = getResources(modalCourse);
                return (
                  <div className="row g-4">
                    <div className="col-md-4">
                      <h6 className="fw-bold d-flex align-items-center" style={{ color: PURPLE }}>
                        <Video size={18} className="me-2" /> Videos
                      </h6>
                      <ul className="list-unstyled mb-0">
                        {r.videos.map((v, i) => (
                          <li key={i} className="mb-2">
                            <a
                              href={v.url}
                              target="_blank"
                              rel="noreferrer"
                              className="link-clean"
                            >
                              {v.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <h6 className="fw-bold d-flex align-items-center" style={{ color: PURPLE }}>
                        <FileText size={18} className="me-2" /> Articles
                      </h6>
                      <ul className="list-unstyled mb-0">
                        {r.articles.map((a, i) => (
                          <li key={i} className="mb-2">
                            <a
                              href={a.url}
                              target="_blank"
                              rel="noreferrer"
                              className="link-clean"
                            >
                              {a.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <h6 className="fw-bold d-flex align-items-center" style={{ color: PURPLE }}>
                        <Book size={18} className="me-2" /> Books
                      </h6>
                      <ul className="list-unstyled mb-0">
                        {r.books.map((b, i) => (
                          <li key={i} className="mb-2">
                            <a
                              href={b.url}
                              target="_blank"
                              rel="noreferrer"
                              className="link-clean"
                            >
                              {b.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
