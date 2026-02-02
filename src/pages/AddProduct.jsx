import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const AddProduct = () => {
  const { user } = useAuth();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const email = user?.email;
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const type = e.target.type.value;
    const rating = e.target.rating.value;
    const info = { email, name, brand, price, image, type, rating };
    // console.log(info);

    // send data to server via post method
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("data added successfully");
        }
      });
  };

  return (
    <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>

            <span>
              <span className="text-[#FF497C]">{"Update Add "}</span>
              Your Product
            </span>
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleAddProduct}>
          <div className="flex gap-8">
            {/* Left Side */}
            <div className="flex-1">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
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
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154] bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
