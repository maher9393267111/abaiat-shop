import { StarIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function SingleProduct({ id, title, category, price, img }) {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="group cursor-pointer">
        <NextLink href={`/products/single?id=${id}`} passHref>
          <div className="relative w-full h-80 lg:h-90  rounded-lg overflow-hidden">
            <Image
              width={300}
              height={500}
              layout="responsive"
              src={img[0]}
              alt=""
              className="!w-full !h-full object-center object-cover  hover:opacity-75"
            />
          </div>
        </NextLink>

        <NextLink href={`/products/single?id=${id}`} passHref>
          <h3 className="mt-4 mb-4 font-bold text-lg text-gray-700 line-clamp-1 hover:text-gray-900">
            {title}
          </h3>
        </NextLink>
        {/* <h3 className='mt-4 text-sm text-gray-700 line-clamp-1 hover:text-gray-900'>
						{category}
					</h3> */}

        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={"text-gold h-5 w-5 flex-shrink-0"}
            />
          ))}
        </div>

        <p className="mt-1 text-lg font-medium text-gray-900">
          {price} ليرة تركي
        </p>

        <div className=" ">
          <a
            target="_blank"
            href={"https://wtspee.com/905550252552"}
            className="text-primary hover:text-primary"
          >
            <button
              className="relative bloc  w-full mt-4 bg-green-600 border border-transparent rounded-md py-3 px-8 items-center justify-center text-xl font-medium text-white hover:bg-green-500 flex justify-center gap-3"
              // onClick={() => handleAddToCart(product)}
            >
              <FaWhatsapp className="text-3xl" />

              <span>تواصل وتس اب</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'
// import  Link  from 'next/link'

// const Item = ({ id, title, category, price, img }) => {

//     return (
//         <div key={id}>
//             <Link href={`/product/${id}`} className='hover:opacity-75'>
//                 <div className="w-full h-[400px]  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">

//                     <img
//                         src={img[0]}
//                         alt={title}
//                         className={category !== 'Pants' ? `w-full h-full object-top object-cover lg:w-full lg:h-full` : `w-full h-full object-bottom object-cover lg:w-full lg:h-full`}
//                     />

//                 </div>
//                 <div className="mt-4 flex justify-between">
//                     <div>
//                         <h3 className="text-sm md:text-md text-dark">
//                             <p className="capitalize font-medium font-poppins">
//                                 {title}
//                             </p>
//                         </h3>
//                     </div>
//                     <p className={  ` font-semibold text-xl   text-gold text-gry-900`}>

//                      {price}      ليرة تركي
//                     </p>
//                 </div>
//             </Link>

//         </div>
//     )
// }

// export default Item
