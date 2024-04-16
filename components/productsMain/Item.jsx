import React from 'react'
import  Link  from 'next/link'


const Item = ({ id, title, category, price, img }) => {

    return (
        <div key={id}>
            <Link href={`/product/${id}`} className='hover:opacity-75'>
                <div className="w-full h-[400px]  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">

                    <img
                        src={img[0]}
                        alt={title}
                        className={category !== 'Pants' ? `w-full h-full object-top object-cover lg:w-full lg:h-full` : `w-full h-full object-bottom object-cover lg:w-full lg:h-full`}
                    />

                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm md:text-md text-dark">
                            <p className="capitalize font-medium font-poppins">
                                {title}
                            </p>
                        </h3>
                    </div>
                    <p className={  ` font-semibold text-xl   text-gold text-gry-900`}>
                     
                     {price}      ليرة تركي 
                    </p>
                </div>
            </Link>

        </div>
    )
}

export default Item