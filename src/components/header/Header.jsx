import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  Container,
  InputBase,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import "./header.scss";

// assets
import { logoKepka2, basketIcon, loupeIcon } from "../../assets";

const pages = [
  { name: "Каталог", url: "/catalog/" },
  { name: "Бренды", url: "/brands/" },
  { name: "О нас", url: "/about-us/" },
];

// Search
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  border: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(event.currenTarget);
  };

  return (
    <AppBar
      className="header-app"
      position="static"
      sx={{
        my: 7,
        background: "none",
        boxShadow: 0,
        paddingX: 15,
      }}
    >
      <Container fixed>
        <Toolbar disableGutters>
          <IconButton>
            <NavLink to="/">
              <img src={logoKepka2} alt="logo" />
            </NavLink>
          </IconButton>

          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Typography variant="body1" mr={5}>
                <NavLink
                  to={page.url}
                  style={{ color: "#555252", fontSize: "18px" }}
                >
                  {page.name}
                </NavLink>
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
