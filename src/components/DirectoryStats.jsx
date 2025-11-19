import React from 'react';

export default function DirectoryStats({ allStudents = [], activeCount = 0, alumniCount = 0 }) {
  // compute most common skill
  const freq = {};
  allStudents.forEach(s => (s.skills || []).forEach(sk => {
    const k = sk.trim().toLowerCase();
    if (!k) return;
    freq[k] = (freq[k] || 0) + 1;
  }));
  const entries = Object.entries(freq);
  const mostCommon = entries.length ? entries.sort((a,b)=>b[1]-a[1])[0][0] : '—';

  // recover original capitalization if present
  let displaySkill = mostCommon;
  if (mostCommon !== '—') {
    const found = allStudents.flatMap(s => s.skills || []).find(sk => sk.trim().toLowerCase() === mostCommon);
    if (found) displaySkill = found;
  }

  return (
    <section className="stats">
      <div className="stat-card">
        <h3>Total Students</h3>
        <p className="stat-number">{allStudents.length}</p>
      </div>

      <div className="stat-card">
        <h3>Active</h3>
        <p className="stat-number">{activeCount}</p>
      </div>

      <div className="stat-card">
        <h3>Alumni</h3>
        <p className="stat-number">{alumniCount}</p>
      </div>

      <div className="stat-card">
        <h3>Most Common Skill</h3>
        <p className="stat-number">{displaySkill}</p>
      </div>
    </section>
  );
}
