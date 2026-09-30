import React from 'react';
import { BriefcaseBusiness, Code2, NotebookPen } from 'lucide-react';
import { person } from '../content/profile';

const Header = () => (
  <header className="main-header">
    <a href="#about" className="header-title">
      <span className="header-monogram" aria-hidden="true">NU</span>
      <span className="header-name">
        Noel <span>Ugwoke</span>
      </span>
    </a>
    <nav className="header-bar" aria-label="Primary">
      <div className="header-actions">
        <a className="header-availability" href="#contact">
          <span className="availability-light" aria-hidden="true" />
          Let&apos;s talk
        </a>
        <span className="header-divider" aria-hidden="true" />
        <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={16} aria-hidden="true" /></a>
        <a href={person.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Code2 size={16} aria-hidden="true" /></a>
        <a href={person.links.blog} aria-label="Blog"><NotebookPen size={16} aria-hidden="true" /></a>
      </div>
    </nav>
  </header>
);

export default Header;
