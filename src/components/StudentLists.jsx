import React from 'react';
import StudentCard from './StudentCard';

export default function StudentLists({ activeStudents = [], alumniStudents = [] }) {
  return (
    <>
      <section className="section-wrapper">
        <h2 className="section-title">Active Students</h2>
        <div className="cards-grid">
          {activeStudents.map(student => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>
      </section>

      <section className="section-wrapper">
        <h2 className="section-title">Alumni</h2>
        <div className="cards-grid">
          {alumniStudents.map(student => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>
      </section>
    </>
  );
}
