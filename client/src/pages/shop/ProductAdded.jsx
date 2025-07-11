import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ProductAdded = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-300 via-gray-600 to-rose-300 px-4">
      <div className="bg-white/90 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-green-500 w-16 h-16" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
          Product Published!
        </h1>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          🎉 Your product is now live and visible to all buyers on the marketplace. You can view, edit, or add more items to grow your store.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/admin/homes"
            className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-900 transition shadow"
          >
            View My Products
          </Link>
          <Link
            to="/admin/products/new"
            className="bg-emerald-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-emerald-600 transition shadow"
          >
            Add Another Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductAdded;
