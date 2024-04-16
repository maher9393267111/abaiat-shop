import React from "react";
import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import ItemList from "@/components/productsMain/ItemList";
import Layout from "@/components/layout";

export default function ProductsPage({ products }) {
  console.log("ProductsPage" + products);

  return (
    <Layout>

 
    <div className="scroll-smooth min-h-[90vh]">
      <ItemList items={products} />
    </div>
    </Layout>
  );
}

// serverside
ProductsPage.getInitialProps = async (context) => {
  let products = [];
  //navbar.jsx href={`/products?category=${item.title.toLowerCase()}`}
  const category = context.query.category;

  // step 1
  const search = context.query.search;

  products = await getDocumentsOrder(
    "abaiat",
    orderBy("timeStamp", "desc"),

    category ? where("category", "==", category) : null
  );

  return {
    products: products,
  };
};
