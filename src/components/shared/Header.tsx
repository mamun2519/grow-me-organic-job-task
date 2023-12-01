import {
  getFromLocalStorage,
  removeLocalStorage,
} from "../../utils/local-storage";
import { useEffect, useState } from "react";
import OurDialog from "../ui/Dailog";

const Header = () => {
  const user = getFromLocalStorage("USER_FORM");
  console.log(user);
  useEffect(() => {}, [user]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="h-16 mt-10 w-full border max-w-7xl mx-auto rounded-2xl shadow flex items-center   justify-between gap-5 px-10">
      <div>
        <button
          onClick={() => handleClickOpen()}
          className="px-8 py-2 border rounded-xl"
        >
          My Profile
        </button>
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
      {open && (
        <OurDialog
          open={open}
          user={user}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Header;
