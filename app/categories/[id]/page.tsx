'use client';
import DataProducts from '@/api/allProducts';
import Products from '@/api/homeProducts';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function page({params}: {params: any}) {


  const [isClient, setClient] = useState<boolean>(false);

  const [data, setData] = useState<any[]>([]);
  useEffect(() => {

    const dataFetch = Products.filter((item: any) => item.category.id == params.id);
    setData(dataFetch);
    
    setClient(true);
  }, []);

  return (
    <div className="item_cat">
      <div className='items'>
        {isClient &&
          data.map((items: any) => (
            <Link href={`/products/${items.id}`} key={items.id}>
              <Card
                image={items.images[0]}
                title={items.title}
                price={`${items.price}$`}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
