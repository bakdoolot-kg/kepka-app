import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  createTheme,
  Badge,
  ThemeProvider,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { Search, Basket } from "../";
import theme from "../../theme-mui/theme";
import { pages } from "../../pages";
import "./header.scss";
import { logoKepka2 } from "../../assets";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        className="header-app"
        position="static"
        sx={{
          my: { xs: 1, sm: 2, md: 4 },
          background: "none",
          boxShadow: 0,
          paddingX: { xs: 2, sm: 2, md: 7, xl: 15 },
          borderBottom: 1,
          borderColor: "#847E7E",
        }}
      >
        <Toolbar disableGutters>
          <IconButton>
            <NavLink to="/">
              <img className="logo-kepka" src={logoKepka2} alt="logo" />
            </NavLink>
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              ml: { xl: "105px", lg: "50px", md: "20px" },
            }}
          >
            {pages.map((page, idx) => (
              <Typography variant="body1" mr={5} key={idx + "navlink"}>
                <NavLink
                  to={page.url}
                  style={{
                    color: "#555252",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                  activeClassName="active-navlink"
                >
                  {page.name}
                </NavLink>
              </Typography>
            ))}
          </Box>

          <Search
            value={search}
            onChange={handleChangeSearch}
            xs="none"
            sm="flex"
          />

          <Basket />

          <Box
            sx={{
              width: { xs: "15%", sm: 0 },
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: { xs: "end" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="default"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name + "urlLink"}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center" color="primary">
                    <NavLink
                      to={page.url}
                      activeClassName="active-navlink"
                      style={{
                        color: "#555252",
                        fontSize: "18px",
                        fontWeight: "700",
                      }}
                    >
                      {page.name}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Search
          value={search}
          onChange={handleChangeSearch}
          xs="flex"
          sm="none"
        />
      </Box>
    </ThemeProvider>
  );
}

export default Header;
