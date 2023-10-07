import { type } from 'os';
import React from 'react';
import { Button } from './Button';

type SectionProps = {
  title: string;
  description: string;
  image: string;
  className?: string;
};

export default function Section({
  title,
  description,
  image,
  className ,
}: SectionProps) {
  return (
    <section className={`section_f ${className}`}>
      <div className="left_section">
        <div>
        <h3 className="section_title">
            {title}
        </h3>
        <p className="section_description">
            {description}
        </p>
        <Button value="Shop Now" className="btn" />
        </div>
      </div>
      <div
        className="right_section"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          width: '100%',
            height: '100%',
        }}
      ></div>
    </section>
  );
}
