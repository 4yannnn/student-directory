import React from 'react';

export default function Footer({ institute, contact, year }) {
  return (
    <footer className="footer">
      <p>Institute: {institute}</p>
      <p>Contact: {contact}</p>
      <p>© {year} Student Portal</p>
    </footer>
  );
}
