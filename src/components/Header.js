import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header sticky z-10 top-0 text-3xl font-bold text-red-500 p-3 border-b-2 border-gray-500 flex justify-between items-center">
      <Link to={"/"}>
        <span>
          {" "}
          Filmy<span className="text-white">Verse</span>
        </span>
      </Link>

      <Link to={"/addmovie"}>
        <h1 className="text-lg flex items-center cursor-pointer">
          <Button>
            <AddIcon color="secondary" className="mr-1" />
            <span className="text-white ">Add New</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
