const Shipping = () => {
  return (
    <div className="shipping">
      <form>
        <h1>Shipping Address</h1>
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <input type="number" name="" id="" placeholder="Pin Code" />
        <input type="text" placeholder="State" />
        <select>
          <option value="">Select Country</option>
        </select>
        <button>Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
