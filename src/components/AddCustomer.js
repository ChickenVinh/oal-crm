import { Link } from "react-router-dom";

function AddCustomer() {
  return (
    <div>
      <h1>Add Costumer</h1>
      <Link to="/" className="btn btn-primary">
        Dashboard
      </Link>
    </div>
  );
}

export default AddCustomer;
