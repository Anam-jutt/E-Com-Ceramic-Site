import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getProductById,
  createProduct,
  updateProduct,
} from "../../services/productService";
import api from "../../services/api";
const ProductFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [previewImages, setPreviewImages] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    rating: "",
    stock: "",
    sizes: [],
    colors: [],
    images: [],
    about: "",
  });

  useEffect(() => {
    if (isEdit) {
      getProductById(id)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id, isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      if (isEdit) {
        await updateProduct(id, product, token); // make sure this also uses token
        alert("Product updated!");
      } else {
        await createProduct(product, token);
        alert("Product added!");
      }

      navigate("/admin/productadded");
    } catch (err) {
      console.error("Submit error", err.response?.data || err.message);
      alert("Failed to submit product");
    }
  };
  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file)); // for local preview
    setPreviewImages(previews); // optional state for preview (see below)

    try {
      const formData = new FormData();
      files.forEach((file) => formData.append("images", file));

      const res = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const uploadedImageUrls = res.data.imageUrls; // real backend URLs
      setProduct((prev) => ({ ...prev, images: uploadedImageUrls }));
    } catch (error) {
      console.error(
        "Image upload failed:",
        error.response?.data || error.message
      );
      alert("Image upload failed, Please Select 5 Images Onnly!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500 via-gray-400 to-gray-500 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-xl bg-gray-400/90 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/30">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isEdit ? "Edit" : "Add"} Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <input
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            placeholder="Product Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
            required
          />

          {/* Price */}
          <input
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            placeholder="Price"
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
            required
          />

          {/* Rating */}
          <input
            value={product.rating}
            onChange={(e) => setProduct({ ...product, rating: e.target.value })}
            placeholder="Rating (0 to 5)"
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
            min={0}
            max={5}
          />

          {/* Stock */}
          <input
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
            placeholder="Stock"
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
            min={0}
          />

          {/* Sizes */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Available Sizes:
            </label>
            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={product.sizes.includes(size)}
                    onChange={() => {
                      const selected = product.sizes.includes(size)
                        ? product.sizes.filter((s) => s !== size)
                        : [...product.sizes, size];
                      setProduct({ ...product, sizes: selected });
                    }}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Colors:
            </label>
            <div className="flex flex-wrap gap-3">
              {["Red", "Blue", "Green", "Black", "White"].map((color) => (
                <label key={color} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={product.colors.includes(color)}
                    onChange={() => {
                      const selected = product.colors.includes(color)
                        ? product.colors.filter((c) => c !== color)
                        : [...product.colors, color];
                      setProduct({ ...product, colors: selected });
                    }}
                  />
                  <span
                    className="w-4 h-4 inline-block rounded-full border"
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></span>
                  {color}
                </label>
              ))}
            </div>
          </div>

          {/* Image Upload */}
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full cursor-pointer text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-white hover:file:bg-gray-900"
          />

          {/* Image Preview (from uploaded or existing if editing) */}
          {(previewImages.length > 0 || product.images.length > 0) && (
            <div className="grid grid-cols-3 gap-3 mt-2">
              {(previewImages.length > 0 ? previewImages : product.images).map(
                (img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Preview ${idx}`}
                    className="h-24 w-full object-cover rounded-lg shadow"
                  />
                )
              )}
            </div>
          )}

          {/* About */}
          <textarea
            value={product.about}
            onChange={(e) => setProduct({ ...product, about: e.target.value })}
            placeholder="About this product"
            className="w-full px-4 py-2 h-28 resize-none border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white cursor-pointer font-semibold rounded-lg hover:bg-gray-900 transition shadow-md"
          >
            {isEdit ? "Update" : "Add"} Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductFormPage;
