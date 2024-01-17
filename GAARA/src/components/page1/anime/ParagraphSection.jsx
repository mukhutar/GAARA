
import React from 'react';

const ParagraphSection = ({ title, paragraph }) => (
  <div className="paragraph-section">
    <h1 className='h1'>{title}</h1> <br />
    <p>{paragraph}</p>
  </div>
);

export default ParagraphSection;
