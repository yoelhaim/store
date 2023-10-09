'use client';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { createContext, useReducer } from 'react';
import { PayloadOptions } from 'next/dist/server/send-payload';
import { TasksContext, TasksDispatchContext } from './taskCont';

export default function ContextProvidor({
  children,
}: {
  children: React.ReactNode;
}) {
  const Context = createContext<any>(null);

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <Navbar />

        <main className="main">{children}</main>
        <Footer />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export interface TaskInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number

  
}

function tasksReducer(state: any, action: any ) {
  switch (action.type) {
    case 'added': {
      return [
        ...state,
        {
            id: action.id,
            title: action.title,
            price: action.price,
            description: action.description,
            image: action.image,
            quantity: action.quantity,
            
        },
      ];
    }
    case 'removeAll': {
        // remove all items in state
        return [];
    }
       
  }
  
}

const initialTasks: TaskInterface[] = [] as TaskInterface[];
