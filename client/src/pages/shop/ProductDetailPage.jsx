import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "../../components/RelatedProducts";
import cartStore from "../../store/cartStore";
import useAuthStore from "../../store/useAuthStore";
const ProductDetailPage = () => {
  const { user } = useAuthStore();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = cartStore();
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.images?.[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="text-center py-20 text-xl">Loading product...</div>;
  if (error || !product)
    return (
      <div className="text-center py-20 text-red-600">Product not found.</div>
    );

  return (
    <div className="bg-gradient-to-br from-gray-500 via-gray-400 to-gray-500 px-6 sm:px-12 md:px-20 py-10">
      <div className="mx-auto bg-gray-300/90 backdrop-blur rounded-2xl shadow-xl px-4 sm:px-8 md:px-10 py-10">
        {/* Top Hero Text */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-2">
            Explore Product Details
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            Get all the information you need before adding it to your cart
          </p>
        </div>

        {/* Product Layout */}
        <div className="flex xl:flex-row flex-col gap-10 items-start">
          {/* Image Section */}
          <div className="w-full xl:w-1/2">
            {selectedImage && (
              <img
                src={selectedImage}
                alt={product.name}
                className="rounded-xl shadow-md w-full max-h-[40rem] object-cover"
              />
            )}

            {/* Thumbnail Gallery */}
            {product.images?.length > 1 && (
              <div className="flex gap-3 mt-4 flex-wrap">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-14 rounded-full cursor-pointer object-cover border-2 ${
                      selectedImage === img
                        ? "border-gray-800"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="w-full xl:w-1/2">
            <div className="p-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-6 break-words whitespace-pre-wrap">
                {product.about}
              </p>

              <p className="text-xl font-semibold text-gray-800 mb-2">
                Price: ${product.price}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Rating: ⭐ {product.rating || 0}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Stock: {product.stock}
              </p>
            </div>

            {/* Sizes */}
            {product.sizes?.length > 0 && (
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">
                  Available Sizes:
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {product.sizes.map((size, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">
                  Available Colors:
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {product.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className="w-5 h-5 rounded-full border border-gray-300"
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    ></span>
                  ))}
                </div>
              </div>
            )}
            {user?.role === "buyer" && (
              <button
                onClick={(e) => {
                  e.preventDefault(); // stops <a> navigation
                  e.stopPropagation(); // stops bubbling to parent <Link>
                  addToCart(product._id);
                }}
                className="mt-6 w-full cursor-pointer sm:w-[80%] bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition duration-200 shadow-lg"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-10">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetailPage;
