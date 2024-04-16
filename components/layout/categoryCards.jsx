import React from "react"
import  Link  from "next/link";

const PreviewCategories = ({  }) => {

    const cats = [
        { id: 1, link: "men" , title:'رجالي' ,img:'https://next-shop-gilt.vercel.app/_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fpublications%2Fg76%2Fshotzoom%2F2008%2Fu41-261s.jpg%3Fim%3DResize%2Cwidth%3D364&w=1920&q=75' },
    
        { id: 2, link: "women" ,title:'نسائي' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2v-o3j50RdgSeygjmRUfDKPxodO5xNYJQAZoZhKZg_g&s' },
    
        { id: 3, link: "children" , title:'اطفال' ,img:'https://next-shop-gilt.vercel.app/_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fpublications%2Fg26%2Fshotzoom%2F4003%2F591-248s.jpg%3Fim%3DResize%2Cwidth%3D364&w=1920&q=75' },
      ];
    





    return (
        <div className="bg-white">
            <div className="py-4 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
                <div className="px-4 sm:px-6 sm:flex sm:items-center -mt-2 sm:justify-between lg:px-8 xl:px-0">
                    <h2 className="text-2xl  text-gold font-semibold  text-gray-900">تسوق حسب الاقسام</h2>
                    <Link href="/products" className="hidden text-xl font-semibold text-gold font-poppins hover:text-brown transition-all duration-150 sm:block">
                        جميع المنتجات<span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>

                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-hidden">
                            <div className="absolute min-w-screen-xl px-4 flex gap-4 space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 
                            

                            xl:grid xl:grid-cols-5 xl:gap-x-8">
                                {cats.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/products?category=${category.link}`}
                                        className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                                    >
                                        <span aria-hidden="true" className="absolute inset-0">
                                            <img src={category.img} alt="" className="w-full h-full object-center object-cover" />
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-dark opacity-50"
                                        />
                                        <span className="relative mt-auto text-center text-xl font-bold font-poppins shimmer text-whit">{category.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 px-4 sm:hidden">
                    <Link href="/products" className="block text-sm font-bold text-gold font-poppins ">
                    جميع المنتجات<span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PreviewCategories