'use client';

import React, { use, useRef } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export default function Trending() {
  const ref = useRef<HTMLInputElement>(null);

  const scroll = (scrollOffset: number) => {
    if (ref.current) ref.current.scrollLeft += scrollOffset;
  };
  return (
    <section className="trend">
      <div className="nav_trend">
        <h4 className="title_">Trending Now</h4>
        <div className="btn_trend">
          <Button
            className="btn_trend_"
            value="<"
            onClick={() => scroll(-120)}
          />
          <Button
            className="btn_trend_"
            value=">"
            onClick={() => scroll(120)}
          />
        </div>
      </div>

      <div className="trend__container" ref={ref}>
        <Card
          image="/prod/art11.jpg"
          title="Little Armchair Sheepskin"
          price="100$"
        />
        <Card
          image="/prod/art12.jpeg"
          title="Little Armchair Sheepskin"
          price="100$"
        />
        <Card
          image="/prod/art13.png"
          title="Little Armchair Sheepskin"
          price="100$"
        />
        <Card
          image="/prod/art14.png"
          title="Little Armchair Sheepskin"
          price="100$"
        />
        <Card
          image="/prod/art15.jpg"
          title="Little Armchair Sheepskin"
          price="100$"
        />
        <Card
          image="/prod/art16.jpg"
          title="Little Armchair Sheepskin"
          price="100$"
        />
        <Card
          image="/prod/art17.png"
          title="Little Armchair Sheepskin"
          price="100$"
        />
        <Card
          image="/prod/art18.png"
          title="Little Armchair Sheepskin"
          price="100$"
        />
        <Card
          image="/prod/art19.jpg"
          title="Little Armchair Sheepskin"
          price="100$"
        />
      </div>
    </section>
  );
}
