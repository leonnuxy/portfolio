import React, { useEffect, useState } from 'react';

const items = [
  { id: 'work', label: 'Services' },
  { id: 'case-studies', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'direction', label: 'About' },
];

// Sections that sit outside the rail: entering them clears the highlight.
const clearing = ['about', 'contact'];

const SideNav = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const ids = [...items.map((i) => i.id), ...clearing];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(clearing.includes(entry.target.id) ? null : entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="side-nav" aria-label="Sections">
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          aria-current={active === id ? 'true' : undefined}
          className={active === id ? 'is-active' : undefined}
        >
          <span className="side-nav-label">{label}</span>
          <span className="side-nav-dot" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
};

export default SideNav;
