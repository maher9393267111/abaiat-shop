import React ,{useState ,useEffect} from "react";
import { useRouter } from "next/router";
import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import ItemList from "@/components/productsMain/ItemList";
import Layout from "@/components/layout";
import { useAuth } from "@/functions/context";

export default function ProductsPage({  }) {
  

  
  const [products, setProducts] = useState([]);
  const {pageLoading, setPageLoading} = useAuth()
  const router =useRouter()
  const category = router.query.category;

 // const [loacding, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
     // setLoading(true);
     setPageLoading(true)
      setProducts([]);
      const data = await getDocumentsOrder(
        "abaiat",
        orderBy("timeStamp", "asc"),
        category ? where("category", "==", category) : null
       
      );

      console.log(data, "fetch products ====>>>>");
      setProducts(data);
      setPageLoading(false)
    //  setLoading(false);
    };
    getArticles();
  }, [category]);









  return (
    <Layout>

 
    <div className="scroll-smooth min-h-[90vh]">
      <ItemList items={products} />
    </div>
    </Layout>
  );
}




// ProductsPage.getInitialProps = async (context) => {
//   // console.log('Query', context?.query?.country)
//   let products= [];

//   try {

//     const category = context.query.category;

//     // step 1
//     const search = context.query.search;
  
//     products = await getDocumentsOrder(
//       "abaiat",
//       orderBy("timeStamp", "desc"),
  
//       category ? where("category", "==", category) : null
//     );
  


//   } catch (error) {
//     console.error(error);
//   }

//   return {
//     products,
//   };
// };




// serverside
//  ProductsPage.getInitialProps = async (context) => {
 
//   let products = [];
//   //navbar.jsx href={`/products?category=${item.title.toLowerCase()}`}
//   const category = context.query.category;

//   // step 1
//   const search = context.query.search;

//   products = await getDocumentsOrder(
//     "abaiat",
//     orderBy("timeStamp", "desc"),

//     category ? where("category", "==", category) : null
//   );

//   return {
//     products: products,
//   };





// };
