import React from 'react';

export default function Header({title, subtitle, author}) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <p className="byline">Built by {author}</p>
    </header>
  );
}
