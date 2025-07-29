import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../services/productService";
const MyListingSection = () => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const sellerId = localStorage.getItem("userId");
    if (!sellerId) return;

    fetch(`/api/products/seller/${sellerId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("API response:", data);
        setMyProducts(data); // should now be a real array
      })
      .catch((err) => console.error("Error fetching seller products:", err));
  }, []);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setMyProducts(myProducts.filter((p) => p._id !== productId));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      {myProducts.length === 0 ? (
        <>
        <p className="text-center text-white xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md">
          You haven't listed any products yet  ◑﹏◐        </p>
         <div className="text-center mt-10  hover:scale-105 duration-500">
           <Link to="/admin/products/new" className="text-center bg-[#025048] px-6 py-2.5 border-none sm:px-8 sm:py-3 text-white rounded font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md">
          Do you want to list products?
          </Link>
         </div>
        </>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {myProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.images[0] || "/placeholder.jpg"}
                  alt={product.name}
                  className="w-full min-h-[21rem] max-h-[25rem] hover:scale-105 duration-500 object-cover rounded-xl mb-4"
                />
               <div className="p-2">
                 <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                  {product.about}
                </p>
                <span className="text-emerald-600 font-bold text-2xl">
                  ${product.price}
                </span>
               </div>
              </Link>

              <div className="flex justify-between items-center p-3 mt-5">
                <Link
                  to={`/admin/products/edit/${product._id}`}
                  className="text-lg bg-gray-200 font-sans px-2 rounded text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-lg bg-gray-200 px-2 font-sans cursor-pointer rounded text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListingSection;
