import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Home.css";
import Search from "../Component/Search";
import { Typography } from "@mui/material";
import cherryblossom from "../images/cherryBlossom.jpg";

function Home() {
  return (
    <>
      <div className="Home">
        <div className="Header">
          {/* <img id="bgImage" src={cherryblossom}></img> */}
          <div className="HeaderLeft">
            <p>About</p>
            <p>Store</p>
          </div>
          <div className="HeaderRight">
            <p>Gmail</p>
            <p>Images</p>
            <span id="appIcon">
              <AppsIcon />
            </span>
            <span id="accountIcon">
              <AccountCircleIcon />
            </span>
          </div>
        </div>
        <div className="Body">
          <Typography id="GoogleLogo">Google</Typography>
          <Search />
        </div>
      </div>
    </>
  );
}

export default Home;
