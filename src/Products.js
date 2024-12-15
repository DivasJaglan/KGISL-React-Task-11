import product_1 from "./assets/product-1.png";
import product_2 from "./assets/product-2.png";
import product_3 from "./assets/product-3.png";
import product_4 from "./assets/product-4.png";
import product_5 from "./assets/product-5.png";
import product_6 from "./assets/product-6.png";
import product_7 from "./assets/product-7.png";
import product_8 from "./assets/product-8.png";
import product_9 from "./assets/product-9.png";
import { Outlet, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Luxury Analog Watch",
    price: 129.99,
    img: product_1,
    quantity: 0,
  },
  {
    id: 2,
    name: "Chronograph Sport Watch",
    price: 149.99,
    img: product_2,
    quantity: 0,
  },
  {
    id: 3,
    name: "Classic Canvas Sneakers",
    price: 39.99,
    img: product_3,
    quantity: 0,
  },
  { id: 4, name: "Modern Backpack", price: 59.99, img: product_4, quantity: 0 },
  { id: 5, name: "Retro Sneakers", price: 49.99, img: product_5, quantity: 0 },
  {
    id: 6,
    name: "Smart Device Set",
    price: 899.99,
    img: product_6,
    quantity: 0,
  },
  {
    id: 7,
    name: "Vintage Leather Backpack",
    price: 109.99,
    img: product_7,
    quantity: 0,
  },
  {
    id: 8,
    name: "Classic Coffee Mug",
    price: 12.99,
    img: product_8,
    quantity: 0,
  },
  {
    id: 9,
    name: "Premium Smartphone",
    price: 999.99,
    img: product_9,
    quantity: 0,
  },
];

function Products({ addToCart, cartItems }) {
  return (
    <>
      <div className="container text-center ">
        <div className="row ">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
                <div className="card-body">
                  <button className="card-link btn btn-outline-success">
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="card-link btn btn-outline-warning"
                  >
                    Add to Cart
                  </button>

                  {cartItems.find((item) => item.id === product.id) && (
                    <Link
                      to="/cart"
                      class="btn btn-primary position-relative mx-2"
                    >
                      <i class="fa-solid fa-cart-shopping"></i>
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {
                          cartItems.find((item) => item.id === product.id)
                            .quantity
                        }
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Products;
