import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // To load cart data from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data from localStorage", error);
      }
    }
  }, []);

  // To save cart data to localStorage whenever it changes
  useEffect(() => {
    cartItems.length > 0 &&
      localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((prev) => {
      const itemExists = prev.find((item) => item.id === product.id);
      if (itemExists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} cartItems={cartItems} />}
        />

        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
