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
   <div className="px-4 sm:px-8 md:px-16 py-12"><hr />
  <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden">
    {/* Hero Section */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 p-10">
      {/* Product Images */}
      <div className="w-full">
        {/* Main Image */}
        {selectedImage && (
          <img
            src={selectedImage}
            alt={product.name}
            className="rounded-xl shadow-md w-full h-[400px] sm:h-[500px] object-contain"
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
                className={`w-14 h-14 rounded-lg border-2 object-cover cursor-pointer transition duration-200 hover:scale-105 ${
                  selectedImage === img ? "border-gray-800" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between">
        {/* Product Title & Price */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6 whitespace-pre-wrap">
            {product.about}
          </p>
          <div className="text-2xl font-bold text-gray-800 mb-2">
            ${product.price}
          </div>
          <div className="text-sm text-yellow-600 font-medium mb-1">
            ⭐ {product.rating || 0} / 5
          </div>
          <div className="text-sm text-gray-500 mb-4">
            {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
          </div>
        </div>

        {/* Sizes */}
        {product.sizes?.length > 0 && (
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Available Sizes:
            </span>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full border border-gray-300"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Colors */}
        {product.colors?.length > 0 && (
          <div className="mb-6">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Available Colors:
            </span>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className="w-6 h-6 rounded-full border border-gray-400"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                ></span>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        {user?.role === "buyer" && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product._id);
            }}
            className="mt-4 w-full sm:w-3/4 bg-black text-white py-3 rounded-xl text-lg hover:bg-gray-900 transition duration-300 shadow-lg"
          >
            🛒 Add to Cart
          </button>
        )}
      </div>
    </div>

    {/* Related Products */}
    <div className="border-t mt-6">
      <h2 className="text-xl font-semibold mb-4 mt-5 text-gray-800">
        Related Products
      </h2>
      <RelatedProducts />
    </div>
  </div>
</div>

  );
};

export default ProductDetailPage;
