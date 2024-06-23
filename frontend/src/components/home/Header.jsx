// Filename - Header.js

import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
//const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);

  };

  useEffect(() => {

    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);



	return (
		<AppBar position="static">
			<Toolbar>
				{/*Inside the IconButton, we
					can render various icons*/}
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					{/*This is a simple Menu
					Icon wrapped in Icon */}
					<MenuIcon />
				</IconButton>
				{/* The Typography component applies
					default font weights and sizes */}

				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					Book swiper app
				</Typography>
				        <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent focus:outline-none w-24 sm:w-64"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}

                          />
                          <button>
                          <FaSearch className="text-slate-600" />

                          </button>
                        </form>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
}

