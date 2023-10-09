import Products from '@/components/article/Products';
import React from 'react';

export default function page({params}: {params: any}) {
  return (
    <div style={{ marginTop: '10rem' }}>
   
      <Products params={params.id}/>
    </div>
  );
}
