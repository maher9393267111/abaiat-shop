import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/swiper-bundle.css';
import'swiper/css';
import'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'


const Banner = ({  }) => {


  const bannerData = [
    { id: 1, img: "/shop/1.jpg" },
    { id: 2, img: "/shop/2.jpg" },
    { id: 3, img: "/shop/3.jpg" },
    { id: 4, img: "/shop/4.jpg" },
    { id: 5, img: "/shop/5.jpg" },
  ];




    return (
        <>
            <div className=' sm:block border-t my-12'>
                <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 3000
                }}
                modules=
                
                
                {[Navigation, Autoplay, Pagination]} >
                


                {bannerData.map((data) => (
            <SwiperSlide key={data.id}>
              <div>
                <Image
                className=" md:h-[700px]"
                  src={data.img}
                  width={2000}
                  height={400}
                  alt="banner-image"
                  priority={true}
                />
              </div>
            </SwiperSlide>
          ))}




                </Swiper>
            </div>
        </>
    )
}

export default Banner;



// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";



// const BannerSection = ({  }) => {
//   const bannerData = [
//     { id: 1, img: "/shop/1.jpg" },
//     { id: 2, img: "/shop/2.jpg" },
//     { id: 3, img: "/shop/3.jpg" },
//     { id: 4, img: "/shop/4.jpg" },
//     { id: 5, img: "/shop/5.jpg" },
//   ];

//   return (
//     <div className=" my-12">
//       <div className="">
//         <Swiper
//           className="pagination-true"
//           loop={true}
//           pagination={{
//             clickable: true,
//           }}
//           spaceBetween={20}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           modules={[Pagination, Autoplay]}
//         >
//           {bannerData.map((data) => (
//             <SwiperSlide key={data.id}>
//               <div>
//                 <Image
//                   src={data.img}
//                   width={2000}
//                   height={700}
//                   alt="banner-image"
//                   priority={true}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default BannerSection;



// export default React.memo(BannerSection);