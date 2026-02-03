import { Link } from "react-router-dom";

const ProductCard = ({ singleItem }) => {
  // console.log(singleItem);
  return (
    <div>
      <div className="card bg-base-300 shadow-sm">
        <figure>
          <img className="h-48 w-full" src={singleItem?.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {singleItem?.name}
            <div className="badge badge-secondary">{singleItem?.price} $</div>
          </h2>
          <div className="card-actions justify-items-start">
            <Link
              to={`/updateProduct/${singleItem._id}`}
              className="btn btn-xs btn-success"
            >
              Update
            </Link>
            <div className="btn btn-xs btn-error">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
