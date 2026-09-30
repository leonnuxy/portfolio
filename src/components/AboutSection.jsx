import React from 'react';
import { ChessKnight, Dumbbell, Gamepad2 } from 'lucide-react';
import { about } from '../content/profile';
import Reveal from './Reveal';

const svgProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const TennisBall = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M4.2 5.6c3.6 2.4 5.2 5.2 5.2 6.4s-1.6 4-5.2 6.4" />
    <path d="M19.8 5.6c-3.6 2.4-5.2 5.2-5.2 6.4s1.6 4 5.2 6.4" />
  </svg>
);

const SoccerBall = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="m12 8.2 3.6 2.6-1.4 4.2H9.8l-1.4-4.2z" />
    <path d="M12 8.2V2.6M15.6 10.8l5.3-1.7M14.2 15l3.3 4.5M9.8 15l-3.3 4.5M8.4 10.8 3.1 9.1" />
  </svg>
);

const interestIcons = {
  tennis: TennisBall,
  soccer: SoccerBall,
  chess: () => <ChessKnight size={24} strokeWidth={1.75} aria-hidden="true" />,
  gaming: () => <Gamepad2 size={24} strokeWidth={1.75} aria-hidden="true" />,
  fitness: () => <Dumbbell size={24} strokeWidth={1.75} aria-hidden="true" />,
};

const AboutSection = () => (
  <section className="about-section" id="direction">
    <div className="section-intro">
      <div>
        <span className="section-index">05 / Beyond the work</span>
        <Reveal as="h2" className="section-header">A little more about me.</Reveal>
      </div>
      <Reveal as="p" className="section-deck">
        Credentials, Projects & Leisure.
      </Reveal>
    </div>
    <Reveal as="div" className="beyond-strip">
      <div className="beyond-row">
        <div className="beyond-cell">
          <span className="about-index">Education</span>
          <div className="edu-row">
            <span className="cert-logo" title={about.education.school}>
              <img src={about.education.logo} alt={about.education.school} loading="lazy" />
            </span>
            <div>
              <p className="beyond-title">{about.education.degree}</p>
              <p className="about-muted">{about.education.school}</p>
            </div>
          </div>
        </div>
        <div className="beyond-cell">
          <span className="about-index">Certifications</span>
          <ul className="cert-grid">
            {about.certifications.map((c) => (
              <li className="cert-tile" key={c.issuer} title={c.name ? `${c.issuer}: ${c.name}` : c.issuer}>
                <span className="cert-logo">
                  <img src={c.logo} alt={c.name ? `${c.issuer}: ${c.name}` : c.issuer} loading="lazy" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="beyond-row">
        <div className="beyond-cell">
          {about.sideProjects.map((p) => (
            <div className="project-row" key={p.title}>
              <div className="project-head">
                <span className="about-index">Current Project</span>
                <p className="beyond-title">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a>
                  ) : (
                    p.title
                  )}
                </p>
              </div>
              <ul className="stack-list">
                {p.stack.map((t) => (
                  <li className="stack-logo" key={t.name} title={t.name}>
                    <img src={t.logo} alt={t.name} loading="lazy" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="beyond-cell">
          <span className="about-index">When I log off</span>
          <ul className="interest-list">
            {about.interests.map((i) => {
              const Icon = interestIcons[i.icon];
              return (
                <li className="interest-badge" key={i.label} title={i.label}>
                  <span className="interest-icon"><Icon /></span>
                  <span className="interest-label">{i.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Reveal>
  </section>
);

export default AboutSection;
