'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import instanceAxios from '@/api/axios';
import Link from 'next/link';
import Trend from '@/api/trend';

export default function Trending() {
  const ref = useRef<HTMLInputElement>(null);
 
  

  const scroll = (scrollOffset: number) => {
    if (ref.current) ref.current.scrollLeft += scrollOffset;
  };

 const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true)
  }, [])

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

       
      {
        isClient &&
        
        Trend.map((items: any)=>(
           <Link href={`/products/${items.id}`} key={items.id}>
             <Card
            image={items.images[0]}
            title={items.title}
            price={`${items.price}$`}
          />
            </Link>
        ))
       }
      </div>
    </section>
  );
}
