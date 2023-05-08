import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

function Search() {
  return (
    <>
      <div className="Search">
        <div className="SearchInput">
          <span id="new">
            <SearchIcon />
          </span>

          <input />
          <span id="new">
            <MicIcon />
          </span>
        </div>
      </div>
      ;
    </>
  );
}

export default Search;
