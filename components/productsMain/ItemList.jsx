import Link from 'next/link'
import Item from "./Item"

const ItemList = ({ items }) => {

  return (
    <>
      <div className="grid mt-12 px-8 md:px-12 grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
        {items?.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.images}
            category={product?.category}
         
          />
        ))}
      </div>

      {
        items.length === 0 && (
          <div className="text-md font-poppins text-dark flex flex-col items-center">
            Sorry, no items found according to your search.
            <Link href="/categories" className="pt-2 text-gold underline">
              Go back to categories
            </Link>
          </div>
        )
      }
    </>


  )
}

export default ItemList