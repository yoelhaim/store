import Image from 'next/image';

type CardProps = {
  price: string;
  title: string;
  image: string;
};

export function Card({ price, title, image }: CardProps) {
  return (
    <a className="card">
      <div className="overlay"></div>
      <div className="card__image ">
        <Image src={image} alt="image" width={90} height={250} className='image' />
      </div>
      <div className="card__title">
        <h3 className="">{title}</h3>
      </div>
      <div className="price">
        <p className="card__price">{price}</p>
      </div>
    </a>
  );
}
