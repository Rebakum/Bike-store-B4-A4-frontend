import LoadingSkelton from "@/components/shared/LoadingSkelton";
import { Badge } from "@/components/ui/badge";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { useMemo, useState } from "react";
import { FieldValues } from "react-hook-form";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
export default function AllProducts() {
  const dispatch = useAppDispatch();

  // Filter State
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "",
    inStock: "",
    minPrice: "",
    maxPrice: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8; // Items per page

  // Handle filter changes
  const handleFilterChange = (e: FieldValues) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Construct API Query Object
  const query = useMemo(() => {
    const params: Record<string, string> = {
      page: currentPage.toString(),
      limit: limit.toString(),
    };
    if (filters.searchTerm) params.searchTerm = filters.searchTerm;
    if (filters.category) params.category = filters.category;
    if (filters.inStock)
      params.inStock = filters.inStock === "In Stock" ? "true" : "false";
    if (filters.minPrice) params.minPrice = filters.minPrice;
    if (filters.maxPrice) params.maxPrice = filters.maxPrice;
    return params;
  }, [filters, currentPage]);

  // Fetch Data with Filters
  const { data, isLoading } = useAllProductsQuery(query);
  const totalPages = data?.meta?.totalPage || 1;

  console.log(data);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading) {
    return <LoadingSkelton />;
  }

  return (
    <div className="min-h-screen ">
      <div className="container px-4 mx-auto md:px-0">
        <h1 className="py-3 text-4xl font-light text-center uppercase text-gray-950">
          All Products
        </h1>
        <div className="flex items-center justify-center mt-2">
          <div className="w-12 h-0.5 bg-teal-700 mr-2"></div>
          <div className="w-3 h-3 rotate-45 bg-teal-700"></div>
          <div className="w-12 h-0.5 bg-teal-700 ml-2"></div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col gap-4 mt-10 mb-6 md:flex-row bg-gray-100 p-4">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search by brand, name, or category"
            className="flex-1 p-2 border border-gray-300 rounded-md"
            value={filters.searchTerm}
            onChange={handleFilterChange}
          />

          <select
            name="category"
            className="p-2 border border-gray-300 rounded-md"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>

          <select
            name="inStock"
            className="p-2 border border-gray-300 rounded-md"
            value={filters.inStock}
            onChange={handleFilterChange}
          >
            <option value="">All Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          <div className="flex items-center gap-2">
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              className="w-24 p-2 border border-gray-300 rounded-md"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
            <span> - </span>
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              className="w-24 p-2 border border-gray-300 rounded-md"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:px-20 px-4 py-4">
          {data?.data?.map((product) => (
            <div
              key={product?._id}
              className="p-4 overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover rounded-md hover:scale-[1.05] transition-all duration-300 cursor-pointer"
                />
                <Badge
                  className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold ${
                    product?.inStock
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>

              <div className="p-3">
                <h2 className="mb-1 text-lg font-bold">{product.name}</h2>
                <p className="my-3 text-sm text-gray-600">
                  Model: {product.model}
                </p>
                <p className="text-lg font-medium text-gray-800">
                  Price:{" "}
                  <span className="font-bold text-primary-red uppercase">
                    {product.price} bdt
                  </span>
                </p>

                <div className="flex gap-2 mt-3">
                  <Link to={`/details/${product._id}`} className="flex-1">
                    <button className="w-full py-2 text-base  font-bold uppercase text-white transition-all bg-black border-2 rounded-md hover:bg-white hover:text-black flex gap-4 justify-center ">
                      <div className="mt-1">
                        <TbListDetails />
                      </div>
                      <div className="">View Details</div>
                    </button>
                  </Link>

                  <button
                    className={`py-2 px-4 rounded-md ${
                      !product?.inStock
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primary-red hover:bg-green-600"
                    } transition-all`}
                    disabled={!product?.inStock}
                    onClick={() =>
                      dispatch(addToCart({ ...product, selectQuantity: 1 }))
                    }
                  >
                    <BiCart className="text-lg text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {data?.data?.length === 0 && (
          <div className="mt-8 text-center text-gray-500">
            No products match your search or filter criteria.
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-4 py-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-6 py-2 text-white transition-all duration-300 bg-teal-500 rounded-lg hover:bg-teal-600 disabled:bg-gray-600"
          >
            Prev
          </button>
          <span className="px-4 py-2 text-black">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-6 py-2 text-white transition-all duration-300 bg-teal-500 rounded-lg hover:bg-teal-600 disabled:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
