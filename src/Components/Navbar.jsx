import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Stack } from "@mui/material";
import Logo from "../assets/yt-logo.png";
import Searchbar from "./Searchbar";
import { IoIosMenu } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        boxShadow: "1px 1px 2px #121212",
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex: 100,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <span
          onClick={() => dispatch(toggleMenu())}
          className="px-2 py-2 text-white text-3xl rounded-full hover:bg-gray-900 "
        >
          <IoIosMenu />
        </span>
        <img className="h-[22px] hidden md:block" src={Logo} alt="logo" />
      </Link>
      <Searchbar />
      <div className="text-white text-2xl flex gap-2 ml-4 md:gap-8 items-center">
        <BiVideoPlus />
        <BsBell />
        <div className="w-8 h-8 rounded-full hidden md:block bg-white">
          <img src="" alt="" />
        </div>
      </div>
    </Stack>
  );
};

export default Navbar;
