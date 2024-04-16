import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid'

const BreadCrumb = ({ category, name ,id }) => {
    return (


        <nav className="flex ml-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li>
                    <div>
                        <Link href="/" className="text-dark hover:text-gold transition-all duration-120">
                            <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                        </Link>
                    </div>
                </li>

                <li>
                    <div className="flex items-center">
                        <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-dark" aria-hidden="true" />
                        <Link
                            href={`/products`}
                            className="ml-4 text-sm font-medium text-dark hover:text-gold transition-all duration-120"
                           
                        >
                           المنتجات
                        </Link>
                    </div>
                </li>

                <li>
                    <div className="flex items-center">
                        <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-dark" aria-hidden="true" />
                        <Link
                            href={`/products/single?id=${id}`}
                            className="ml-4 text-sm font-medium text-dark hover:text-gold transition-all duration-120"
                        >
                            {name}
                        </Link>
                    </div>
                </li>


            </ol>
        </nav>
    )
}

export default BreadCrumb