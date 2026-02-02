import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ItemCard from "./ItemCard";

const MyCart = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myCart/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setItems(data);
        });
    }
  }, [user?.email]);

  return (
    <div className="gadgetContainer pt-10">
      <h1 className="text-2xl font-medium mb-4 text-center">Added to Cart : {items.length} items</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((singleItem) => (
          <ItemCard singleItem={singleItem} key={singleItem._id}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
