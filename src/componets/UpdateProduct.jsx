import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import baseURL from "../utils/url";

const UpdateProduct = () => {
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    // receive data from server via get method
    fetch(`${baseURL}/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
      });
  }, [id]);
  // console.log(product);

  const handleUpdateProductForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const type = e.target.type.value;
    const rating = e.target.rating.value;
    const info = { name, brand, price, image, type, rating };
    // console.log(info);

    // send data to server for update product via put method
    fetch(`${baseURL}/updateProduct/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("product updated successfully");
        }
      });
  };

  return (
    <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#0f7d4f]">
              <i className="bx bxs-alarm-add"></i>
            </span>

            <span>
              <span className="text-[#0f7d4f]">Update </span>
              Your Product
            </span>
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleUpdateProductForm}>
          <div className="flex gap-8">
            {/* Left Side */}
            <div className="flex-1">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                defaultValue={product?.name}
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
              />

              <label className="block mt-4 mb-2" htmlFor="brand">
                Brand Name
              </label>
              <select
                defaultValue={product?.brand}
                name="brand"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              >
                <option value="Test">Test</option>
                <option value="Test2">Test2</option>
                <option value="Test3">Test3</option>
              </select>

              <label className="block mt-4 mb-2" htmlFor="price">
                Price
              </label>
              <input
                defaultValue={product?.price}
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="price"
                name="price"
              />
            </div>

            {/* Right Side */}
            <div className="flex-1">
              <label className="block mb-2" htmlFor="image">
                Image
              </label>
              <input
                defaultValue={product?.image}
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
              />

              <label className="block mb-2 mt-4" htmlFor="type">
                Type
              </label>
              <input
                defaultValue={product?.type}
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter type"
                id="type"
                name="type"
              />

              <label className="block mt-4 mb-2" htmlFor="rating">
                Rating
              </label>
              <input
                defaultValue={product?.rating}
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
              />
            </div>
          </div>

          {/* Submit Button */}
          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#085c39] bg-[#0f7d4f] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Product"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
