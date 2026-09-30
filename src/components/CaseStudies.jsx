import React, { useEffect, useId, useRef, useState } from 'react';
import {
  ChevronRight,
  Check,
  Plus,
} from 'lucide-react';
import { caseStudies } from '../content/profile';
import Reveal from './Reveal';

const FamilyAvatar = ({ x, y, className = '', small = false }) => (
  <g className={`family-avatar ${className}`} transform={`translate(${x} ${y})`}>
    <circle className="family-avatar-shell" r={small ? 9 : 13} />
    <circle className="family-avatar-head" cy={small ? -2 : -3} r={small ? 2.2 : 3} />
    <path className="family-avatar-body" d={small ? 'M-4 5c1-4 7-4 8 0' : 'M-5.5 7c1.2-5 9.8-5 11 0'} />
  </g>
);

const ProjectVisual = ({ project }) => {
  if (project.visual === 'ingestion') {
    return (
      <div className="project-graphrag">
        <div className="graphrag-header">
          <span>documents</span>
          <span>linked knowledge</span>
          <span>LLM context</span>
        </div>
        <svg className="graphrag-map" viewBox="0 0 600 230" role="presentation">
          <g className="graphrag-docs">
            <rect x="24" y="65" width="52" height="66" rx="4" />
            <path d="M36 82h27M36 94h22M36 106h27" />
            <rect x="42" y="82" width="52" height="66" rx="4" />
            <path d="M54 99h27M54 111h22M54 123h27" />
            <rect x="60" y="99" width="52" height="66" rx="4" />
            <path d="M72 116h27M72 128h22M72 140h27" />
          </g>
          <path className="graphrag-ingest" pathLength="1" d="M116 116C145 116 151 105 177 105" />

          <g className="graphrag-edges">
            <path d="M214 74 283 50M214 74l45 52M283 50l56 42M259 126l80-34M259 126l62 54M339 92l61 45M321 180l79-43M339 92l35-50" />
          </g>
          <g className="graphrag-selected-edges">
            <path pathLength="1" d="M214 74 283 50M283 50l56 42M339 92l61 45M339 92l35-50" />
          </g>

          <g className="graphrag-node graphrag-node-a"><circle cx="214" cy="74" r="13" /></g>
          <g className="graphrag-node graphrag-node-b"><circle cx="283" cy="50" r="16" /></g>
          <g className="graphrag-node graphrag-node-c"><circle cx="259" cy="126" r="11" /></g>
          <g className="graphrag-node graphrag-node-d"><circle cx="339" cy="92" r="18" /></g>
          <g className="graphrag-node graphrag-node-e"><circle cx="321" cy="180" r="13" /></g>
          <g className="graphrag-node graphrag-node-f"><circle cx="400" cy="137" r="14" /></g>
          <g className="graphrag-node graphrag-node-g"><circle cx="374" cy="42" r="10" /></g>

          <path className="graphrag-context-route" pathLength="1" d="M415 112C446 112 453 104 470 104" />
          <g className="graphrag-model">
            <circle cx="520" cy="104" r="42" />
            <text className="graphrag-model-name" x="520" y="101">LLM</text>
            <text className="graphrag-model-state" x="520" y="118">context</text>
          </g>
        </svg>
        <div className="graphrag-answer">
          <span>relationship-aware context</span>
        </div>
        <div className="graphrag-proof">
          <span><Check size={13} /> checkpoint 0186 resumed</span>
          <span><strong>{project.metric}</strong> {project.metricLabel}</span>
        </div>
      </div>
    );
  }

  if (project.visual === 'relationships') {
    return (
      <div className="project-family-tree">
        <div className="family-tree-header">
          <span>family graph</span>
          <span>4 generations</span>
        </div>
        <svg className="family-tree-map" viewBox="0 0 600 225" role="presentation">
          <g className="family-generation-labels">
            <text x="18" y="33">I</text>
            <text x="18" y="91">II</text>
            <text x="18" y="147">III</text>
            <text x="18" y="207">IV</text>
          </g>

          <g className="family-couple-lines">
            <path pathLength="1" d="M295 28H305" />
            <path pathLength="1" d="M165 88h10M425 88h10" />
          </g>
          <g className="family-branches family-branches-one">
            <path pathLength="1" d="M300 46V62H170V75M300 62H430V75" />
          </g>
          <g className="family-branches family-branches-two">
            <path pathLength="1" d="M170 101V116H105V132M170 116H235V132M430 101V116H365V132M430 116H495V132" />
          </g>
          <g className="family-branches family-branches-three">
            <path pathLength="1" d="M105 154V170H65V193M105 170H145V193M235 154V170H195V193M235 170H275V193M365 154V170H325V193M365 170H405V193" />
          </g>
          <g className="family-branches family-branches-suggested">
            <path pathLength="1" d="M495 154V170H455V193M495 170H535V193" />
          </g>

          <FamilyAvatar x={282} y={28} className="family-gen-one family-root-primary" />
          <FamilyAvatar x={318} y={28} className="family-gen-one family-root-spouse" />

          <FamilyAvatar x={152} y={88} className="family-gen-two" />
          <FamilyAvatar x={188} y={88} className="family-gen-two" />
          <FamilyAvatar x={412} y={88} className="family-gen-two" />
          <FamilyAvatar x={448} y={88} className="family-gen-two" />

          <FamilyAvatar x={105} y={143} className="family-gen-three" small />
          <FamilyAvatar x={235} y={143} className="family-gen-three" small />
          <FamilyAvatar x={365} y={143} className="family-gen-three" small />
          <FamilyAvatar x={495} y={143} className="family-gen-three family-suggested" small />

          {[65, 145, 195, 275, 325, 405].map((x) => (
            <FamilyAvatar x={x} y={202} className="family-gen-four" small key={x} />
          ))}
          <FamilyAvatar x={455} y={202} className="family-gen-four family-suggested" small />
          <FamilyAvatar x={535} y={202} className="family-gen-four family-suggested" small />
        </svg>
        <div className="family-tree-proof">
          <span><Check size={13} /> AI suggested · person confirmed</span>
          <span><strong>{project.metric}</strong> {project.metricLabel}</span>
        </div>
      </div>
    );
  }

  return null;
};

const CaseStudyCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [motionRun, setMotionRun] = useState(0);
  const [motionPlaying, setMotionPlaying] = useState(false);
  const [motionVisible, setMotionVisible] = useState(false);
  const motionRef = useRef(null);
  const replayFrame = useRef(0);
  const hasPlayed = useRef(false);
  const panelId = useId();
  const motionDescription = project.visual === 'ingestion'
    ? 'Documents become a connected entity graph. A query retrieves the relevant relationship neighborhood as context for the language model. The pipeline resumed from checkpoint 0186 and was stress-tested with 10 million documents.'
    : project.visual === 'relationships'
      ? 'A root person and spouse grow into a four-generation family tree. AI-suggested relationships remain tentative until the person building the tree confirms them.'
      : '';
  const hasFeaturedMotion = Boolean(motionDescription);

  useEffect(() => {
    if (!hasFeaturedMotion || !motionRef.current) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setMotionVisible(entry.isIntersecting);
      if (entry.isIntersecting && !hasPlayed.current) {
        hasPlayed.current = true;
        setMotionRun((run) => run + 1);
        setMotionPlaying(true);
      }
    }, { threshold: 0.35 });

    observer.observe(motionRef.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(replayFrame.current);
    };
  }, [hasFeaturedMotion]);

  const replayMotion = () => {
    if (!hasFeaturedMotion) return;
    setMotionPlaying(false);
    cancelAnimationFrame(replayFrame.current);
    replayFrame.current = requestAnimationFrame(() => {
      setMotionRun((run) => run + 1);
      setMotionPlaying(true);
    });
  };

  const toggleExpanded = () => {
    if (!expanded) replayMotion();
    setExpanded(!expanded);
  };

  return (
    <Reveal
      as="article"
      className={`case-study-card case-study-card-${project.visual}${expanded ? ' is-expanded' : ''}`}
      onMouseEnter={replayMotion}
    >
      <button
        className="case-study-summary"
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={toggleExpanded}
        onFocus={replayMotion}
      >
        <span className="case-study-eyebrow">{project.eyebrow}</span>
        <span className="case-study-title">{project.title}</span>
        <span className="case-study-metric">
          <strong>{project.metric}</strong>
          <small>{project.metricLabel}</small>
        </span>
        <span className="case-study-toggle" aria-hidden="true">
          <Plus className="case-study-toggle-plus" size={18} aria-hidden="true" />
          <ChevronRight className="case-study-toggle-chevron" size={22} aria-hidden="true" />
        </span>
        {motionDescription && <span className="sr-only">{motionDescription}</span>}
      </button>
      {hasFeaturedMotion && (
        <div
          className={`case-study-featured-visual${motionPlaying ? ' is-playing' : ''}${motionVisible ? '' : ' is-paused'}`}
          ref={motionRef}
          aria-hidden="true"
        >
          <div className="case-study-visual" key={motionRun}>
            <ProjectVisual project={project} />
          </div>
        </div>
      )}
      <div className="case-study-expand" id={panelId} aria-hidden={!expanded}>
        <div className="case-study-expand-inner">
          <p className="case-study-body">{project.callout}</p>
          <div className="case-study-tags" aria-label="Technologies and themes">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const CaseStudies = () => (
  <section className="case-studies-section" id="case-studies">
    <div className="section-intro">
      <div>
        <span className="section-index">02 / Selected work</span>
        <Reveal as="h2" className="section-header">Projects I can talk about.</Reveal>
      </div>
      <Reveal as="p" className="section-deck">
        These are four projects where the first version of the problem was not the whole problem.
      </Reveal>
    </div>
    <div className="case-studies-grid">
      {caseStudies.map((project) => (
        <CaseStudyCard project={project} key={project.title} />
      ))}
    </div>
  </section>
);

export default CaseStudies;
