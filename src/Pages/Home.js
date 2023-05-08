import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Home.css";
import Search from "../Component/Search";
import { Box, Typography } from "@mui/material";
import create from "../images/Add.png";
import extension from "../images/Google_Chrome_WebStore.png";
import Udemy from "../images/Udemy-Logo.png";
import cherryblossom from "../images/cherryBlossom.jpg";
import youtube from "../images/youtube-logo.png";

import { Extension, YouTube } from "@mui/icons-material";

function Home() {
  return (
    <>
      <div className="Home">
        <img id="bgImage" src={cherryblossom}></img>
        <div className="Header">
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
          <Box className="BigBox">
            <Box className="SmallBox">
              <img className="innerImg" src={Udemy}></img>
              <span className="BelowBox">
                <Typography>Udemy</Typography>
              </span>
            </Box>
            <Box className="SmallBox">
              <img className="innerImg" src={extension}></img>
              <span className="BelowBox">
                <Typography>Extension</Typography>
              </span>
            </Box>
            <Box className="SmallBox">
              <img className="innerImg" src={youtube}></img>
              <span className="BelowBox">
                <Typography>Youtube</Typography>
              </span>
            </Box>
            <Box className="SmallBox">
              <img className="innerImg" src={create}></img>
              <span className="BelowBox">
                <Typography>Create</Typography>
              </span>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Home;
