import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogout = () => {
    userService.logOut();
    setUser(null);
  };

  return (
    <nav>
      <h2>Welcome, {user.name}</h2>
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogout}>Log out</Link>
      &nbsp; | &nbsp;
      <Link to="/items">Create New Book</Link>

    </nav>
  );
}

export default NavBar;
