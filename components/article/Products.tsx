'use client';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import Trending from '../trending/Trending';
import instanceAxios from '@/api/axios';
import DataProducts from '@/api/allProducts';
import { TasksContext, TasksDispatchContext } from '../children/taskCont';

export default function Products({ params }: { params: number }) {
  const [product, setProduct] = useState<number>(1);
  const [price, setPrice] = useState<number>(121);
  const [total, setTotal] = useState<number>(121);
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);

  const dispatch = useContext(TasksDispatchContext);


  const data = useContext(TasksContext);

  useEffect(() => {
    function getProducts() {


      DataProducts.forEach((item: any) => {
        if (item.id == params) {
          setTitle(item.title);
          setImage(item.images[0]);
          setDescription(item.description);
          setPrice(item.price);
          setTotal(item.price);
          setImages(item.images);
        }
      });
    }
    getProducts();
  }, []);

  return (
    <>
      <h3 style={{ padding: '30px 0' }}> {title}</h3>

      <div className="home_info_article">
        <div className="card_info">
          <div className="images_product">
            <div className="image_product">
              {image && (
                <Image
                  loading="eager"
                  src={image}
                  width={500}
                  height={500}
                  alt="hello"
                  className="image"
                />
              )}

              {/* <div className='images'>

                {
                    images.map((item:any)=>(
                       <div key={item}>
                         <Image
                        loading='eager'
                          src={item}
                          width={50}
                          height={50}
                          alt="hello"
                          className="image"
                        />
                       </div>
                    ))
                }
               
            </div> */}
            </div>
          </div>

          <div className="info_prod">
            <div className="prod">
              <p>{description}</p>

              <div className="quant">
                <div>Quantity</div>
                <div className="qs">
                  <Button
                    value="-"
                    className="btnpm"
                    onClick={() => {
                      setProduct((p) => (p > 1 ? p - 1 : p));
                      product > 1 ? setTotal(total - price) : null;
                    }}
                  />
                  <Button value={product.toString()} className="btnpm" />
                  <Button
                    value="+"
                    className="btnpm"
                    onClick={() => {
                      setProduct((p) => p + 1);
                      setTotal(total + price);
                    }}
                  />
                </div>
                <div>{total}$</div>
              </div>

              <div className="banner">
                <Button value="Add to cart" className="btnCheck"  onClick={()=>{
                    const mYData = {
                        id: params,
                        title: title,
                        price: total,
                        image: image,
                        quantity: product
                    }
                    dispatch({
                        type: 'added',
                        id: params,
                        title: title,
                        price: total,
                        image: image,
                        quantity: product
                       
                    });

                    let getItems = JSON.parse(localStorage.getItem('cart') || '[]');
                    getItems.push(mYData);

                    localStorage.setItem('cart', JSON.stringify(getItems));
                }} />
                <Button value="Buy now" className="btnCheck2" />
              </div>
            </div>
          </div>
        </div>
     
        {/* <div className="aut_info">
        <div>
          <h4>Texture:</h4>
          <h5>Wood</h5>
        </div>
        <div>
          <h4>Weight::</h4>
          <h5>190g</h5>
        </div>
        <div>
          <h4>Size:</h4>
          <h5>60cm x 20cm</h5>
        </div>
      </div> */}

        <Trending />
      </div>
    </>
  );
}
