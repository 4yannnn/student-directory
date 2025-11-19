import React from 'react';
import Header from './components/Header';
import StudentLists from './components/StudentLists';
import DirectoryStats from './components/DirectoryStats';
import Footer from './components/Footer';

const activeStudents = [
  { id: 'A1', name: 'Ayan', rollNumber: 'A1', course: 'BCA', email: 'ayan@example.com', skills: ['JavaScript','React','HTML'], isActive: true },
  { id: 'A2', name: 'Sehzaad', rollNumber: 'A2', course: 'BBA', email: 'sehzaad@example.com', skills: ['Communication','Management'], isActive: true },
  { id: 'A3', name: 'Shareeq', rollNumber: 'A3', course: 'B.Tech', email: 'shareeq@example.com', skills: ['C++','Data Structures'], isActive: true },
  { id: 'A4', name: 'Thameem', rollNumber: 'A4', course: 'BA', email: 'thameem@example.com', skills: ['Photoshop','HTML','CSS'], isActive: true }
];

const alumniStudents = [
  { id: 'L1', name: 'Shabab', rollNumber: 'L1', course: 'MBA', email: 'shabab@example.com', skills: ['Leadership','Finance'], isActive: false },
  { id: 'L2', name: 'Faisal', rollNumber: 'L2', course: 'MCA', email: 'faisal@example.com', skills: ['React','Node.js'], isActive: false },
  { id: 'L3', name: 'Suhail Bhai', rollNumber: 'L3', course: 'M.Tech', email: 'suhail.bhai@example.com', skills: ['Machine Learning','Python'], isActive: false }
];

const allStudents = [...activeStudents, ...alumniStudents];

export default function App(){
  return (
    <div className="container page">
      <Header title="Student Directory 2025" subtitle="Full Stack Development Batch" author="Mohammad Ayan" />

      <DirectoryStats allStudents={allStudents} activeCount={activeStudents.length} alumniCount={alumniStudents.length} />

      <StudentLists activeStudents={activeStudents} alumniStudents={alumniStudents} />

      <Footer institute="XYZ Institute of Technology — Full Stack Development" contact="xyz@gmail.com" year={2025} />
    </div>
  );
}
