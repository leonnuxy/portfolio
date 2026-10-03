import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { person } from '../content/profile';
import Reveal from './Reveal';

// ponytail: Formspree posts to your inbox, no backend. Set VITE_FORM_ENDPOINT (https://formspree.io/f/<id>) at build time.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const ContactSection = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
  <section className="contact-section" id="contact">
    <Reveal as="div" className="contact-card">
      <div className="contact-status">
        <span className="availability-light" aria-hidden="true" />
        Available
      </div>
      <span className="section-index">06 / Get in touch</span>
      <h2>You do not need a perfect brief.</h2>
      <p className="contact-lead">
        If you have an AI idea, a pipeline that keeps breaking, or a prototype that is stuck, send me what you have. A few lines is enough to start.
      </p>
      {status === 'sent' ? (
        <p className="contact-sent" role="status">Thanks, your message is in. I will reply by email.</p>
      ) : (
        <form className="contact-form" onSubmit={submit}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label className="contact-form-wide">What are you working on?
            <textarea name="message" rows="5" required />
          </label>
          <input name="_gotcha" tabIndex="-1" autoComplete="off" className="contact-honeypot" aria-hidden="true" />
          <div className="contact-primary-actions">
            <button type="submit" className="btn btn-primary" disabled={status === 'sending' || !ENDPOINT}>
              {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            {status === 'error' && <span className="contact-error" role="alert">Something went wrong. Please try again.</span>}
          </div>
        </form>
      )}
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
};

export default ContactSection;
