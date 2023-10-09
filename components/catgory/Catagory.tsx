'use client';

import Catgory from '@/api/catgory';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Catagories() {
  const [isCatagory, setCatagory] = useState<boolean>(false);

  useEffect(() => {
    setCatagory(true);
  }, []);
  return (
    <div className="header_cat">
      <Link href={`/categories`}>All</Link>
      {isCatagory &&
        Catgory.map((item: any) => (
          <Link href={`/categories/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        ))}
    </div>
  );
}
