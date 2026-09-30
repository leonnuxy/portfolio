import React, { useEffect, useRef, useState } from 'react';
import { howIWork } from '../content/profile';
import Reveal from './Reveal';

const PrincipleBlock = ({ item, duplicate = false }) => (
  <div className="principle-block" aria-hidden={duplicate || undefined}>
    <h3>{item.title}</h3>
    <p>{item.text}</p>
  </div>
);

const DraggablePrinciples = () => {
  const trackRef = useRef(null);
  const pointerRef = useRef({ active: false, x: 0, scrollLeft: 0 });
  const positionRef = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    let lastTime = performance.now();

    const resetToMiddleSet = () => {
      const setWidth = track.scrollWidth / 3;
      if (positionRef.current < setWidth * 0.5) positionRef.current += setWidth;
      if (positionRef.current > setWidth * 1.5) positionRef.current -= setWidth;
      track.scrollLeft = positionRef.current;
    };

    positionRef.current = track.scrollWidth / 3;
    track.scrollLeft = positionRef.current;
    if (reducedMotion) return undefined;

    const drift = (time) => {
      const elapsed = Math.min(time - lastTime, 32);
      lastTime = time;
      if (!pointerRef.current.active) {
        positionRef.current += elapsed * 0.028;
        resetToMiddleSet();
      }
      frame = requestAnimationFrame(drift);
    };

    frame = requestAnimationFrame(drift);
    return () => cancelAnimationFrame(frame);
  }, []);

  const beginDrag = (clientX) => {
    const track = trackRef.current;
    pointerRef.current = {
      active: true,
      x: clientX,
      scrollLeft: track.scrollLeft,
    };
    setDragging(true);
  };

  const moveDrag = (clientX) => {
    if (!pointerRef.current.active) return;
    positionRef.current =
      pointerRef.current.scrollLeft - (clientX - pointerRef.current.x);
    trackRef.current.scrollLeft = positionRef.current;
  };

  const endDrag = () => {
    if (!pointerRef.current.active) return;
    pointerRef.current.active = false;
    setDragging(false);
  };

  const startPointerDrag = (event) => {
    if (event.pointerType === 'touch') return;
    beginDrag(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const stopPointerDrag = (event) => {
    if (event.pointerType === 'touch') return;
    endDrag();
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const pauseForTouch = () => {
    pointerRef.current.active = true;
    setDragging(true);
  };

  const resumeAfterTouch = () => {
    positionRef.current = trackRef.current.scrollLeft;
    pointerRef.current.active = false;
    setDragging(false);
  };

  return (
    <div
      ref={trackRef}
      className={`principles-marquee${dragging ? ' is-dragging' : ''}`}
      aria-label="Working principles. Drag horizontally to explore."
      onPointerDown={startPointerDrag}
      onPointerMove={(event) => {
        if (event.pointerType !== 'touch') moveDrag(event.clientX);
      }}
      onPointerUp={stopPointerDrag}
      onPointerCancel={stopPointerDrag}
      onTouchStart={pauseForTouch}
      onTouchEnd={resumeAfterTouch}
      onTouchCancel={resumeAfterTouch}
    >
      {[0, 1, 2].flatMap((setIndex) =>
        howIWork.map((item) => (
          <article
            className={`principle-marquee-item principle-marquee-item-${item.title.toLowerCase()}`}
            key={`${setIndex}-${item.title}`}
          >
            <PrincipleBlock item={item} duplicate={setIndex !== 1} />
          </article>
        ))
      )}
    </div>
  );
};

const HowIWork = () => (
  <section className="how-i-work-section" id="how-i-work">
    <div className="section-intro">
      <div>
        <span className="section-index">04 / Principles</span>
        <Reveal as="h2" className="section-header">How I work when the answer is not obvious.</Reveal>
      </div>
    </div>
    <div className="how-i-work-grid">
      {howIWork.map((item) => (
        <Reveal as="div" className="how-i-work-item" key={item.title} tabIndex="0">
          <PrincipleBlock item={item} />
        </Reveal>
      ))}
    </div>
    <DraggablePrinciples />
  </section>
);

export default HowIWork;
