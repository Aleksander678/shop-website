import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard"
import OfferCard from "./OfferCard";


//images
import autumnImg from "./autumn.jpg";
import basketballImg from "./Basketball.png"
import sunglassesImg from "./sunglasses.jpg"
import paintingImg from "./painting.jpg"
import mouseImg from "./mouse.webp"
import booksImg from "./books.jpg"
import ratingImg from "./rating.webp"

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-extrabold m-5 ml-8 w-6/12">Welcome! <br/>How are you today?</h1> 
        <div className="carousel carousel-vertical rounded-box h-96 shadow-lg">
          <div className="carousel-item h-full">
            <OfferCard image={autumnImg} title="Autumn sale!"/>
          </div>
          <div className="carousel-item h-full">
            <OfferCard image={booksImg} title="Books 30% off for our members"/>
          </div>
          <div className="carousel-item h-full">
            <OfferCard image={ratingImg} title="Rate this app"/>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <h1 className="font-extrabold text-2xl m-3">For you</h1>
      <div className="flex flex-wrap">
        <ProductCard image={basketballImg} title="Basketball" badge="new" price="29.99 zł" categories={["sport", "games"]}/>
        <ProductCard image={sunglassesImg} title="Sunglasses" badge="" price="15.99 zł" categories={["accesories", "summer"]}/>
        <ProductCard image={paintingImg} title="Painting - japanese landscape" badge="new" price="49.99 zł" categories={["art", "decoration"]}/>
        <ProductCard image={mouseImg} title="Wireless mouse" badge="30% off" price="89.99 zł" categories={["electronics", "gadgets"]}/>
      </div>
      <div className="divider"></div>
      <h1 className="font-extrabold text-2xl m-3">Popular</h1>
      <div className="flex flex-wrap">
        <ProductCard image={basketballImg} title="Basketball" badge="new" price="29.99 zł" categories={["sport", "games"]}/>
        <ProductCard image={sunglassesImg} title="Sunglasses" badge="" price="15.99 zł" categories={["accesories", "summer"]}/>
        <ProductCard image={paintingImg} title="Painting - japanese landscape" badge="new" price="49.99 zł" categories={["art", "decoration"]}/>
        <ProductCard image={mouseImg} title="Wireless mouse" badge="30% off" price="89.99 zł" categories={["electronics", "gadgets"]}/>
      </div>
      
    </main>
  );
}
