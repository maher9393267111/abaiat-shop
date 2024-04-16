import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import parse from "html-react-parser";
import Loader from "@/components/common/Loader";
import dayjs from "dayjs";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ChevronIcon } from "@/functions/icons";

import { getDocuments, getDocument } from "@/functions/firebase/getData";
import MainLayout from "@/components/layout";
import { useAuth } from "@/functions/context";
import BreadCrumb from "@/components/layout/breadCrumb";

export default function ProductSingle() {
  const [product, setProduct] = useState({});
  console.log("🎭🎭🎭>", product.title);
  //  const [loacding, setLoading] = useState(false);
  const { pageLoading, setPageLoading } = useAuth();

  const router = useRouter();

  const id = router.query.id;

  useEffect(() => {
    const getProduct = async () => {
      // setLoading(true);
      setPageLoading(true);
      //setProduct({});
      const data = await getDocument("abaiat", id);
      console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
      setProduct(data);
      setPageLoading(false);
      // setLoading(false);
    };

    if (id) getProduct();
  }, [id]);

  console.log("proooooo", product);

  return (
    <MainLayout>
      <div className=" min-h-[90vh]">
        {product?.title && (
          <div className="bg-white px-8 md:px-12 max-w-2xl mx-auto py-16  sm:py-24 lg:max-w-7xl">
            <BreadCrumb
              category={product.category}
              name={product.title}
              id={product?.id}
            />

            <div className="pt-6 grid md:grid-cols-2 grid-cols-1">
              {/* Image gallery */}
              <div className="p-5">
                <div className="rounded-lg overflow-hidden lg:h-img lg:w-img bg-gol lg:block">
                  <img
                    src={product.images[0]}
                    alt={product?.title}
                    className="object-center object-cover w-full h-full"
                  />

                  <div>
                    <div className="flex mt-12 justify-center gap-12 ">
                      <img
                        src={product.images[0]}
                        alt={product?.title}
                        className="object-center  h-[200px] w-[200px] rounded-md object-cover "
                      />

                      {product?.images[1] && (
                        <img
                          src={product.images[1]}
                          alt={product?.title}
                          className="object-center object-cover h-[200px] w-[200px] rounded-md"
                        />
                      )}

                      {product?.images[2] && (
                        <img
                          src={product.images[2]}
                          alt={product?.title}
                          className="object-center object-cover h-[200px] w-[200px] rounded-md"
                        />
                      )}

                      {product?.images[3] && (
                        <img
                          src={product.images[3]}
                          alt={product?.title}
                          className="object-center object-cover h-[200px] w-[200px] rounded-md"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product info */}
              <div className="mx-auto pt-4 pb-16 px-4 ">
                <div className="lg:col-spn-2 lg:pr-8">
                  <h1 className="text-2xl font-bold font-lora tracking-tight text-gold sm:text-3xl">
                    {product.title}
                  </h1>
                  <h1 className="text-2xl font-bold font-lora tracking-tight text-gray-900 sm:text-3xl">
               <span className=" text-gold"> السعر: </span>{product.price} ليرة
                  </h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:mt-0 lg:row-spa-3">
                  <h2 className="sr-only">Product information</h2>
                  {/* <p className={ `text-3xl mt-4`}>
               ${product.price}
              
             </p> */}

                  <div className="mt-8">{/* Sizes */}</div>
                </div>

                <div className="py-2 lg:pt-0 lg:col-start-1 lg:col-span-2 lg:pr-8">
                  {/* Description and details */}
                  <div className="mt-4">
                    <h3 className="sr-only">Description</h3>
                    <div className="space-y-6">
                      <p className="text-xl font-semibold   text-gray-900">
                        {parse(product.desc)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async (ctx) => {
  return {
    revalidate: 1,
    props: {
      ...(await serverSideTranslations(ctx.locale, ["common"])),
    },
  };
};
