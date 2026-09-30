import React, { useEffect, useRef, useState } from 'react';
import { experience } from '../content/profile';
import Reveal from './Reveal';

const StreamingSentence = ({ as = 'p', children, className = '' }) => {
  const ref = useRef(null);
  const [streaming, setStreaming] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const touchInput = window.matchMedia('(hover: none), (pointer: coarse)');
    if (!node || !touchInput.matches) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setStreaming(entry.isIntersecting);
    }, {
      threshold: 0.35,
      rootMargin: '-8% 0px -18%',
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    as,
    {
      ref,
      className: `experience-summary${streaming ? ' is-streaming' : ''} ${className}`.trim(),
      'aria-label': children,
    },
    children.split(' ').map((word, index) => (
      <span
        aria-hidden="true"
        className="experience-word"
        key={`${word}-${index}`}
        style={{ '--word-index': index }}
      >
        {word}{' '}
      </span>
    )),
  );
};

const DAY_IN_MS = 24 * 60 * 60 * 1000;

const getDurationInDays = (start, end) => {
  const startTime = Date.parse(`${start}T00:00:00Z`);
  const endTime = end ? Date.parse(`${end}T00:00:00Z`) : Date.now();
  return Math.max(1, Math.floor((endTime - startTime) / DAY_IN_MS));
};

const DurationCounter = ({ start, end, period }) => {
  const ref = useRef(null);
  const duration = getDurationInDays(start, end);
  const [count, setCount] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);

      if (!entry.isIntersecting) {
        setRevealed(false);
        setCount(0);
        return;
      }

      setRevealed(true);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(duration);
        return;
      }

      const startedAt = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - startedAt) / 1400, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(duration * eased));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };

      frame = requestAnimationFrame(animate);
    }, { threshold: 0.35 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration]);

  return (
    <span
      ref={ref}
      className={`experience-duration${revealed ? ' is-visible' : ''}`}
      aria-label={`${duration} days, ${period}`}
      title={period}
    >
      <strong aria-hidden="true">{count.toLocaleString()}</strong>
      <span aria-hidden="true">days</span>
    </span>
  );
};

const ExperienceSection = () => (
  <section id="experience" className="experience-section">
    <div className="section-intro">
      <div>
        <span className="section-index">03 / Experience</span>
        <Reveal as="h2" className="section-header">Where I have worked.</Reveal>
      </div>
      <Reveal as="p" className="section-deck">
        I have spent most of my career close to messy data, operational software or both.
      </Reveal>
    </div>
    <div className="experience-list">
      {experience.map((role) => (
        <Reveal
          as="article"
          className="experience-row"
          key={`${role.title}-${role.period}`}
          tabIndex="0"
        >
          <div className="experience-meta">
            <DurationCounter start={role.start} end={role.end} period={role.period} />
            {role.employer && <span className="experience-employer">{role.employer}</span>}
          </div>
          <div className="experience-content">
            <h3 className="experience-title">{role.title}</h3>
            <StreamingSentence>{role.summary}</StreamingSentence>
            <div className="experience-tools">
              {role.tools.map((tool) => (
                <span className="tool-pill" key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
