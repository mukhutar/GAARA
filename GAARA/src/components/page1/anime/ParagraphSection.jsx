
import React from 'react';
import './Anime.scss';


const ParagraphSection = ({ title, paragraph }) => (
  <div className="paragraph-section">
    <h1 className='h1'>{title}</h1> <br />
    <p className='rotating_paragraph'> {paragraph}</p>
  </div>
);

export default ParagraphSection;
