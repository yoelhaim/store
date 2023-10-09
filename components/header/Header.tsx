import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="gridOne">
          <Link href="/categories/1">
            <div className="overlay"></div>
            <p className="descr">Live Comfortably</p>
          </Link>

          {/* <Image alt="store" height={400} width={400} src="" /> */}
        </div>
        <div className="gridTwo">
        <Link href="/categories/2">
          <div className="overlay"></div>
          <p className="descr">Live Comfortably</p>
          </Link>
        </div>
        <div className="gridThree">
        <Link href="/categories/3">
          <div className="overlay"></div>
         </Link>
        </div>
        <div className="gridFour">
        <Link href="/categories/4">
          <div className="overlay"></div>
          <p className="descr">Live Comfortably</p>
        </Link>
        </div>
      </div>
    </header>
  );
}
