import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="text-3xl font-bold text-red-500 p-3 border-b-2 border-gray-500 flex justify-between items-center">
      <span>
        {" "}
        Filmy<span className="text-white">Verse</span>
      </span>

      <h1 className="text-lg flex items-center cursor-pointer">
        <Button>
          <AddIcon color="secondary" className="mr-1" />
          <span className="text-white ">Add New</span>
        </Button>
      </h1>
    </div>
  );
};

export default Header;
