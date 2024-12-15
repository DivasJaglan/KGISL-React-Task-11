import Navbar from "./Components/Navbar";
import Products from "./Products";

function Home({ addToCart, cartItems }) {
  return (
    <div className="d-flex flex-column gap-5 justify-content-center ">
      <Navbar />
      <div className="w-75 align-self-center mb-5">
        <Products addToCart={addToCart} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Home;
