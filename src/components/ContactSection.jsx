import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { person } from '../content/profile';
import Reveal from './Reveal';

const ContactSection = () => (
  <section className="contact-section" id="contact">
    <Reveal as="div" className="contact-card">
      <div className="contact-status">
        <span className="availability-light" aria-hidden="true" />
        Available
      </div>
      <span className="section-index">06 / Get in touch</span>
      <h2>You do not need a perfect brief.</h2>
      <p className="contact-lead">
        If you have an AI idea, a pipeline that keeps breaking, or a prototype that is stuck, send me what you have. A short email is enough to start.
      </p>
      <div className="contact-primary-actions">
        <a href={`mailto:${person.email}?subject=AI%20consulting%20conversation`} className="btn btn-primary">
          Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a href={person.links.resume} className="btn btn-ghost" download>
          Download résumé <Download size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="contact-footer">
        <span>Available remotely.</span>
        <div className="contact-links">
          <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>
          <a href={person.links.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub</a>
          <a href={person.links.blog} className="text-link">Notes</a>
        </div>
      </div>
    </Reveal>
  </section>
);

export default ContactSection;
