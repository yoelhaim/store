'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import Trending from '../trending/Trending';

export default function Products() {
  const [product, setProduct] = useState<number>(1);
  const [price, setPrice] = useState<number>(121);
  const [total, setTotal] = useState<number>(121);
  return (
    <div className="home_info_article">
      <div className="card_info">
        <div className="images_product">
          <div className="image_product">
            <Image
              src="/prod/art11.jpg"
              width={500}
              height={500}
              alt="hello"
              className="image"
            />
          </div>
        </div>

        <div className="info_prod">
          <div className="prod">
            <p>
              Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf
              designed with functionality and aesthetics in mind. Without
              unnecessary details and clean lines, this collection hangs easily
              and elegantly on the wall, creating calm and an overview of the
              things you want to put on the shelf.
            </p>

            <div className="quant">
              <div>Quantity</div>
              <div className="qs">
                <Button
                  value="-"
                  className="btnpm"
                  onClick={() => {
                    setProduct((p) => (p > 1 ? p - 1 : p));
                    product > 1 ?   setTotal(total - (price)): null;
                  }}
                />
                <Button value={product.toString()} className="btnpm" />
                <Button
                  value="+"
                  className="btnpm"
                  onClick={() => {
                    setProduct((p) => p + 1);
                    setTotal(total + price );
                  }}
                />
              </div>
              <div>{total}$</div>
            </div>

            <div className="banner">
              <Button value="Add to cart" className="btnCheck" />
              <Button value="Buy now" className="btnCheck2" />
            </div>
          </div>
        </div>
      </div>

      <div className="aut_info">
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
      </div>

      <Trending />
    </div>
  );
}
