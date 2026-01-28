const AllProducts = () => {
  return (
    <div>
      {/* Explore our product */}
      <div className="gadgetContainer">
        <div className="text-center md:text-left mt-20">
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-shopping-bag"></i>
            </span>
            Our Products
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Explore Our Product
          </p>
        </div>

        {/* Product container */}
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
          {allProducts?.length > 8
            ? allProducts
                ?.slice(0, 8)
                .map((item) => <ProductCard key={item._id} item={item} />)
            : allProducts?.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))}
        </div>
        {allProducts?.length > 8 && (
          <div className="mt-10 flex justify-center">
            <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
              See All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
