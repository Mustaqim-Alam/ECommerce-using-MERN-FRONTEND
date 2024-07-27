import { useState } from "react";
import { FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";


const user = { _id: "hgfdsgh", role: "user" };
const Header = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/search">{<HiSearch />} </Link>
      <Link to="/cart">{<FaShoppingBag />}</Link>
      {user?._id ? (
        <>
          <button onClick={() => setisOpen((prev) => !prev)}>
            <FaUserAlt />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <button>
                  <Link to="/admin/dashboard">Admin</Link>
                </button>
              )}
              <Link to="/orders">Orders</Link>
              <button>{<GoSignOut />}</button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to="/login">SignIn</Link>
      )}
    </nav>
  );
};

export default Header;
