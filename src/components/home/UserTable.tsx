import React, { useEffect, useState } from "react";
import UserInformation from "./User";
import Category from "./Category";
import { Typography } from "@mui/material";

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  return (
    <div className=" border max-w-7xl mx-auto rounded-2xl p-5  mt-10 h-screen">
      <Typography>All User Information</Typography>

      <div className="mt-5">
        <UserInformation data={userData} />
      </div>

      <div className="mt-10">
        <Typography>Our Category</Typography>
        <div className="mt-5">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default UserTable;
