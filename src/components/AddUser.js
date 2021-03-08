import { Link } from "react-router-dom";

function AddUser() {
  return (
    <div>
      <h1>Add User</h1>
      <Link to="/" className="btn btn-primary">
        Dashboard
      </Link>
    </div>
  );
}

export default AddUser;
