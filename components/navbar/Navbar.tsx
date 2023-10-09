'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { TasksContext, TasksDispatchContext } from '../children/taskCont';
import Image from 'next/image';

export function Shop({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (a: boolean) => void;
}) {
  const data = useContext(TasksContext);

  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <div className="overlayshop" onClick={() => setShow(!show)}></div>
      <div className="shop">
        <div className="headershop">
          <h3>Your Shopping Cart ({data.length})</h3>

          <button onClick={() => setShow(!show)}>x</button>
        </div>
        {data.length ? (
          <div className="list_shop">
            {data.map((item: any, index: number) => (
              <div key={index} className="list">
                <Image src={item.image} width={50} height={50} alt="logo" />
                <div>
                  <p>{item.title}</p>
                  <p>
                    {item.price}$ * {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>Card is Empty</p>
          </div>
        )}

        {data.length && (
          <div className="footer_checkout">
            <button className="btn">Checkout</button>
            <button
              className="btn"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: 'removeAll' });
              }}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);
  const data = useContext(TasksContext);

  const dispatch = useContext(TasksDispatchContext);
  function switchs() {
    const menu: HTMLBodyElement | null = document.querySelector('.menu');

    menu?.classList.toggle('actives');
  }

  useEffect(() => {
    const data = localStorage.getItem('cart');

    data &&
      JSON.parse(data).forEach((item: any) => {
        dispatch({
          type: 'added',
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
          image: item.image,
          quantity: item.quantity,
        });
      });
  }, []);

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        Store
      </Link>

      <div className="menu">
        {show && <Shop show={show} setShow={setShow} />}
        <div className="icon_menu" onClick={() => switchs()}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"className="tabler-icon tabler-icon-menu-2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg> */}
        </div>
        <ul>
          <li><Link href='/categories'>catagories</Link></li>
          <li>product page</li>
          <li onClick={() => setShow(!show)}>
            <i>{data.length && data.length}</i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="tabler-icon tabler-icon-shopping-cart"
            >
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
}
