import { StaticImageData } from 'next/image'
import React from 'react'
import Image from "next/image";

type ProductCardProps={
  image: StaticImageData;
  title: string;
  badge: string;
  price: string;
  categories: [string, string];
}

const ProductCard = ({image, title, badge, price, categories}:ProductCardProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-1">
  <figure className='w-5/6 h-5/6'>
    <Image src={image} height={200} width={200}  alt="joe"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      {badge=="" ? <></> : <div className="badge badge-secondary">{badge}</div>}
    </h2>
    <p>{price}</p>
    <div className="card-actions justify-end">
      {categories[0]=="" ? <></> : <div className="badge badge-outline cursor-pointer transition ease-in-out duration-200 hover:bg-primary ">{categories[0]}</div>}
      {categories[1]=="" ? <></> : <div className="badge badge-outline cursor-pointer transition ease-in-out duration-200 hover:bg-primary">{categories[1]}</div>}
    </div>
  </div>
</div>
  )
}

export default ProductCard