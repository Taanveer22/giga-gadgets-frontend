import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ProductCard from "../componets/ProductCard";
import toast from "react-hot-toast";
import baseURL from "../utils/url";

const MyCart = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`${baseURL}/products/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setItems(data);
        });
    }
  }, [user?.email, control]);

  const handleDeleteItem = (id) => {
    fetch(`${baseURL}/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("delete item successfully");

          // ✅ Instantly update UI without waiting for re-fetch
          // const remainingItems = items.filter((item) => item._id !== id);
          // setItems(remainingItems);

          // ✅ update UI using re-fetch
          setControl(!control);
        }
      });
  };

  return (
    <div className="gadgetContainer pt-10">
      <h1 className="text-2xl font-medium mb-4 text-center">
        Available in Cart : {items.length} items
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((singleItem) => (
          <ProductCard
            singleItem={singleItem}
            key={singleItem._id}
            handleDeleteItem={handleDeleteItem}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
