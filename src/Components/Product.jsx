import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
// import img1 from "../assets/images/iphone 9.jpg"
// import img2 from "../assets/images/iphone x.jpg"
// import img3 from "../assets/images/Samsung Universe 9.webp"
// import img4 from "../assets/images/OPPOF19.jpg"
// import img5 from "../assets/images/Huawei P30.jpg"
// import img6 from "../assets/images/MacBook Pro.jpg"
// import img7 from "../assets/images/Samsung Galaxy Book.jpg"

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <>
      <div className="col">
      <div class="card h-100">
        <img src={product.thumbnail} class="card-img-top h-75" alt="..." />
        <div class="card-body">
          <h4 class="card-title">{product.title}</h4>
          <h5 class="">${product.price}</h5>
          <button
            class="btn btn-primary"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;
