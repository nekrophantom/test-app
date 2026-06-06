import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !address || !phone) {
      alert("Please fill all fields");
      return;
    }
    

    const deliveryDays =
      Math.floor(Math.random() * 5) + 2;

    alert(
      `Order placed successfully! Thank you for your order, ${fullName}!\n\nYour package will arrive in ${deliveryDays} days.`
    );

    setFullName("");
    setAddress("");
    setPhone("");

    navigate("/");
  }

  return (
    <div>
      <h1>Checkout</h1>

      <form className="checkout-form">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
        />

        <button type="submit" onClick={handleSubmit}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;