import React from 'react';
import { MapPin } from 'lucide-react';
import { person, now, bio, heroSignals, heroProof } from '../content/profile';

const HeroSection = () => (
  <section className="hero-section" id="about">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="hero-kicker-row">
          <p className="hero-kicker">{person.kicker}</p>
          <span className="hero-location">
            <MapPin size={13} aria-hidden="true" />
            {person.location}
          </span>
        </div>

        <h1 className="hero-title">{person.tagline}</h1>
        <p className="hero-bio">{bio}</p>

        <div className="hero-actions">
          <a href="#case-studies" className="btn btn-primary">Read case studies</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>

        <dl className="hero-signals">
          {heroSignals.map((signal) => (
            <div className="hero-signal" key={signal.label}>
              <dt>{signal.label}</dt>
              <dd>{signal.value}</dd>
            </div>
          ))}
        </dl>

        <div className="hero-proof-rail" aria-label="Selected results from shipped work">
          {heroProof.map((item) => (
            <div className="hero-proof-item" key={item.label}>
              <span className="hero-proof-value">{item.value}</span>
              <span className="hero-proof-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="hero-rail" aria-label="Current focus">
        <div className="hero-panel hero-panel-now">
          <div className="hero-panel-header">
            <span className="hero-panel-label">
              <span className="now-pulse" aria-hidden="true" />
              {now.status}
            </span>
            <span className="hero-panel-chip">In progress</span>
          </div>
          <p className="hero-panel-text">{now.text}</p>
        </div>

      </aside>
    </div>
  </section>
);

export default HeroSection;
