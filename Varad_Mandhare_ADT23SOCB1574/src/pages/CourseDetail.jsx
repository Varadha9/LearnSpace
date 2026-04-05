// src/pages/CourseDetail.jsx

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { ArrowLeft, Video, FileText, Book } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData.find(c => c.id === parseInt(courseId));

  const [activeTab, setActiveTab] = useState('videos'); // Default active tab

  if (!course) {
    return (
      <div className="container py-5 text-center">
        <h2 className="mb-3" style={{ color: '#4B0082' }}>Course Not Found</h2>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  // ✅ Sample resources if course has no custom resources
  const sampleResources = {
    videos: [
      { title: `What is ${course.title}?`, url: 'https://youtu.be/W6NZfCO5SIk' },
      { title: `${course.title} Explained`, url: 'https://youtu.be/8dWL3wF_OMw' }
    ],
    articles: [
      { title: `${course.title} Getting Started Blog`, url: 'https://developer.mozilla.org/' }
    ],
    books: [
      { title: `Mastering ${course.title}`, url: 'https://eloquentjavascript.net/' }
    ]
  };

  const resources = {
    videos: course.resources?.videos?.length ? course.resources.videos : sampleResources.videos,
    articles: course.resources?.articles?.length ? course.resources.articles : sampleResources.articles,
    books: course.resources?.books?.length ? course.resources.books : sampleResources.books,
  };

  const renderNoResources = () => (
    <p className="text-muted mt-3">No resources available in this section yet.</p>
  );

  return (
    <div className="container py-5">
      {/* Back Button */}
      <Link to="/my-journey" className="btn btn-outline-secondary mb-4">
        <ArrowLeft size={16} className="me-2" /> Back to My Journey
      </Link>

      {/* Header */}
      <div className="row">
        <div className="col-md-8">
          <h2 className="fw-bold" style={{ color: '#4B0082' }}>{course.title}</h2>
          <p className="text-muted">{course.description}</p>

          {/* Tabs */}
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`}
                onClick={() => setActiveTab('videos')}
              >
                <Video size={16} className="me-1" /> Videos
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'articles' ? 'active' : ''}`}
                onClick={() => setActiveTab('articles')}
              >
                <FileText size={16} className="me-1" /> Articles
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'books' ? 'active' : ''}`}
                onClick={() => setActiveTab('books')}
              >
                <Book size={16} className="me-1" /> Books
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div>
            {activeTab === 'videos' && (
              <div>
                <h5 className="mb-3">Course Videos</h5>
                {resources.videos.length > 0 ? (
                  <ul className="list-group">
                    {resources.videos.map((video, index) => (
                      <li key={index} className="list-group-item">
                        <a href={video.url} target="_blank" rel="noreferrer">
                          <Video size={16} className="me-2" />
                          {video.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : renderNoResources()}
              </div>
            )}

            {activeTab === 'articles' && (
              <div>
                <h5 className="mb-3">Recommended Articles</h5>
                {resources.articles.length > 0 ? (
                  <ul className="list-group">
                    {resources.articles.map((article, index) => (
                      <li key={index} className="list-group-item">
                        <a href={article.url} target="_blank" rel="noreferrer">
                          <FileText size={16} className="me-2" />
                          {article.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : renderNoResources()}
              </div>
            )}

            {activeTab === 'books' && (
              <div>
                <h5 className="mb-3">Suggested Books</h5>
                {resources.books.length > 0 ? (
                  <ul className="list-group">
                    {resources.books.map((book, index) => (
                      <li key={index} className="list-group-item">
                        <a href={book.url} target="_blank" rel="noreferrer">
                          <Book size={16} className="me-2" />
                          {book.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : renderNoResources()}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-md-4">
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded mb-4"
          />
          <div className="card p-3 shadow-sm">
            <h6 className="fw-bold">Course Details</h6>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Students:</strong> {course.students.toLocaleString()}</p>
            <p><strong>Level:</strong> {course.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
