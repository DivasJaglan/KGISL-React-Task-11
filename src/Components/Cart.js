function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start adding some products!</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ height: "100px", objectFit: "cover" }}
                />

                <div>
                  <h5>{item.name}</h5>
                  <p>
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="btn btn-success mt-3">Place Order</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
