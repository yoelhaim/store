import Header from '@/components/header/Header';
import ProductProud from '@/components/productsProd/products';
import Trending from '@/components/trending/Trending';
import Section from '@/components/ui/Section';


export default function Home() {
  return (
    <div className="mainProd">
          <Header />

      <ProductProud />

      <Section
        title="Creative harmonious living"
        description=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        image="/products/banner.jpg"
        id={357}
      />

      <Trending />


      <Section
        className='section_rev'
        title="Comfortable & Elegante Living"
        description="RAOUF Products are all made to standard sizes so that you can mix and match them freely.banner2"
        image="/products/banner2.jpg"
        id={358}
      />
    </div>
  );
}
