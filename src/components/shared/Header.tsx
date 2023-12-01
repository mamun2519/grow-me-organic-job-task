import { Link } from "react-router-dom";
import {
  getFromLocalStorage,
  removeLocalStorage,
} from "../../utils/local-storage";
import { useEffect } from "react";

const Header = () => {
  const user = getFromLocalStorage("USER_FORM");
  console.log(user);
  useEffect(() => {}, [user]);
  return (
    <div className="h-16 mt-10 w-full border max-w-7xl mx-auto rounded-2xl shadow flex items-center   justify-between gap-5 px-10">
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </div>

      <div className=" flex   items-center gap-5">
        <div>
          <p>{user?.name},</p>
        </div>
        {user?.email && (
          <button
            onClick={() => removeLocalStorage("USER_FORM")}
            className="px-8 py-2 bg-red-500 text-white rounded-xl"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
