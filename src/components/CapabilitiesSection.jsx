import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { capabilities } from '../content/profile';
import Reveal from './Reveal';

const DeckFill = ({ children }) => (
  <Reveal as="p" className="section-deck deck-fill" aria-label={children}>
    {children.split(' ').map((word, i) => (
      <span aria-hidden="true" className="deck-word" key={`${word}-${i}`} style={{ '--i': i }}>
        {word}{' '}
      </span>
    ))}
  </Reveal>
);

const CapabilityCard = ({ cap, index }) => {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = hovered || pinned;
  const panelId = `cap-more-${index}`;

  const follow = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Reveal
      as="article"
      className={`capability-card${open ? ' is-open' : ''}`}
      style={{ '--d': `${index * 80}ms` }}
      onPointerMove={follow}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="cap-head">
        <h3>{cap.title}</h3>
        <button
          type="button"
          className="cap-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? 'Hide' : 'Show'} details: ${cap.title}`}
          onClick={() => setPinned((p) => !p)}
        >
          <Plus size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>
      <p className="capability-problem">{cap.problem}</p>
      <div className="cap-more" id={panelId}>
        <ul className="cap-evidence">
          {cap.evidence.map((item, i) => (
            <li key={item.label} style={{ '--n': i }}>
              <span className="evidence-label">{item.label}</span>
              <span className="evidence-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

const CapabilitiesSection = () => (
  <section className="capabilities-section" id="work">
    <div className="section-intro">
      <div>
        <span className="section-index section-dot">Consulting</span>
        <Reveal as="h2" className="section-header">Where I can help.</Reveal>
      </div>
      <DeckFill>
        Some teams need help deciding whether AI belongs in the workflow. Others already have a prototype and need help making it reliable. I work on both.
      </DeckFill>
    </div>
    <div className="capabilities-grid">
      {capabilities.map((cap, i) => (
        <CapabilityCard cap={cap} index={i} key={cap.title} />
      ))}
    </div>
  </section>
);

export default CapabilitiesSection;
