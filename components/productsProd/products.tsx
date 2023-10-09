'use client';
import { useContext, useEffect, useState } from 'react';
import { Card } from '../ui/Card';
import instanceAxios from '@/api/axios';
import Link from 'next/link';
import Products from '@/api/homeProducts';
import { TasksContext, TasksDispatchContext } from '../children/taskCont';


export default function ProductProud() {
    const [isClient, setIsClient] = useState<boolean>(false);
    const tasks = useContext(TasksContext);
    const dispatch = useContext(TasksDispatchContext);

    useEffect(() => {
      setIsClient(true)
    }, [])
  


  return (
    <div>
      <h1 className="title_">Product we are Proud of you</h1>

      <div className="all_prod">
        {
        isClient &&
        Products.map((items: any) => (
          <Link href={`/products/${items.id}`} key={items.id}>
            <Card
              image={items.images[0]}
              title={items.title}
              price={`${items.price}$`}
            />
          </Link>
        ))}



        {/* <button onClick={() => {
            dispatch({
                type: 'added',
                id: 1,
                text: 'text',
            });
        }}>Add Task</button> */}
      </div>
    </div>
  );
}
