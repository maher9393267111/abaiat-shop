import React from "react";
import { useRouter } from "next/router";

import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/layout";

import ContactUs from "@/components/HomeMain/contactMain";


import CategoryCards from '@/components/layout/categoryCards'
import BannerSlider from "@/components/client/layout/BannerSlider";
import AboutHero from '@/components/HomeMain/AboutHero'


export default function Index({}) {
  const { t } = useTranslation("common");

  const router = useRouter();

  console.log("Lodale", router.locale, router);
  //  const aboutus = t("aboutus", { returnObjects: true });
  //  console.log("links", aboutus);

  return (
    <Layout dir={router.locale === "ar" ? "rtl" : "ltr"}>
      <div className="scroll-smooth mx-6 md:mx-28">
        <BannerSlider/>
       <CategoryCards/>
       <AboutHero/>



        <ContactUs/>
        {/* <Test/> */}
    
      </div>
      
    </Layout>
  );
}

// serverside

export const getStaticProps = async ({ locale }) => {
  //const allProducts = await api.getAllProducts();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // allProducts,
    },
  };
};

// Index.getInitialProps = async (context) => {
//   let products = [];
//   //navbar.jsx href={`/products?category=${item.title.toLowerCase()}`}
//   const category = context.query.category;
//   const subcategory = context.query.subcategory;
//   // step 1
//   const search = context.query.search;

//   //console.log("categoryyyyy", category);

//   //console.log("subcategoryyyyy", subcategory);

//   //    where("fieldname", "==", fieldValue)

//   products = await getDocumentsOrder(
//     "products",
//     orderBy("timeStamp", "desc"),

//     //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)
//     category
//       ? where("category", "==", category)
//       : subcategory
//       ? where("subcategory", "==", subcategory)
//       : null
//   );

//   return {
//     // props from serverside will go to props in clientside
//     products: products,

//   };
// };
