import React from 'react';

export default function StudentCard({ name, rollNumber, course, email, skills = [], isActive }) {
  return (
    <div className="student-card">
      <div className="card-header">
        <div>
          <h3 className="student-name">{name}</h3>
          <p className="student-roll">Roll: {rollNumber}</p>
        </div>
        <span className={`status-badge ${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </span>
      </div>

      <p className="student-course"><strong>Course:</strong> {course}</p>
      <p className="student-email"><strong>Email:</strong> {email}</p>

      <div className="skills">
        {skills.map((skill, idx) => (
          <span key={`${rollNumber}-${skill}-${idx}`} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
