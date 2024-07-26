import { FaShoppingBag, FaSignInAlt } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { PiSignInBold, PiSignInFill } from "react-icons/pi";
import { VscSignIn } from "react-icons/vsc";
import { Link } from "react-router-dom";

const user = { _id: "", role: "user" };
const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">{<HiSearch />} </Link>
        <Link to="/cart">{<FaShoppingBag />}</Link>
        {user?._id ? (
          <></>
        ) : (
          <Link to="/login">
            SignIn
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
