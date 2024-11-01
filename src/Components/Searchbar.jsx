import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResult } from "../store/searchSlice";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [showSearch, setShowSearch] = useState(false)
  const dispatch = useDispatch();

  const cache = useSelector((state) => state.search);
  const getResults = async () => {
    console.log("Hitted");
    const response = await fetch(`/api${query}`);
    const data = await response.json();
    setItems(data[1]);

    dispatch(
      cacheResult({
        [query]: data[1],
      })
    );
  };

  useEffect(() => {
    if (cache[query]) {
      setItems(cache[query]);
    } else {
      if (query) getResults();
      else setItems([]);
    }
  }, [query]);
  return (
    <div className="w-[300px] md:w-[500px] relative bg-black">
      <div className="border-[1px] border-[#e3e3e3] rounded-full pl-5">
        <input
          onChange={(e) => setQuery(e.target.value)}
          className={`search-bar bg-transparent text-zinc-400 w-[90%]`}
          type="text"
          placeholder="Search..."
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red"}}>
          <Search />
        </IconButton>
      </div>
      <div className="absolute flex flex-col w-full  bg-zinc-300 max-h-[60vh] overflow-auto rounded-lg mt-4">
        {items?.map((item, index) => (
          <Paper
            key={index}
            sx={{ p: 2, m: 1, borderRadius: 2, cursor: "pointer" }}
            onClick={() => console.log(item)}
          >
            {item}
          </Paper>  
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
