import React from 'react';
import useReveal from '../hooks/useReveal';

const Reveal = ({ as, className = '', children, ...rest }) => {
  const Tag = as || 'div';
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
