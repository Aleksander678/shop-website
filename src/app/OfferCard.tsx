import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { StaticImageData } from 'next/image'

type OfferCardProps={
        image: StaticImageData;
        title: string;
    }
  
const OfferCard = ({image, title}: OfferCardProps) => {
    
    return (
    <div className="card-body shadow-lg w-350n p-10 cursor-all-scroll">
        <figure>
            <Image width="400" height="300" src={image} alt="Autumn forest" className="rounded-md	"/>
        </figure>
        <p className="card-title">{title}</p>
        <FaArrowRight className="card-actions text-accent cursor-pointer"/>
    </div>
  )
}

export default OfferCard