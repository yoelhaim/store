import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="gridOne">
          <div className="overlay"></div>
          <p className="descr">Live Comfortably</p>
          {/* <Image alt="store" height={400} width={400} src="" /> */}
        </div>
        <div className="gridTwo">
          <div className="overlay"></div>
          <p className="descr">Live Comfortably</p>
          {/* <Image alt="store" height={400} width={400} src="" /> */}
        </div>
        <div className="gridThree">
          <div className="overlay"></div>
          <p className="descr">Live Comfortably</p>
          {/* <Image alt="store" height={400} width={400} src="" /> */}
        </div>
        <div className="gridFour">
          <div className="overlay"></div>
          <p className="descr">Live Comfortably</p>
          {/* <Image alt="store" height={400} width={400} src="" /> */}
        </div>
      </div>
    </header>
  );
}
