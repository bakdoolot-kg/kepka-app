import React from "react";
import { Box, IconButton, Badge } from "@mui/material";
import { NavLink } from "react-router-dom";

import { BasketIcon } from "../../assets";

const Basket = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        width: { xs: "35%", sm: "12%", md: "10%", lg: "5%" },
      }}
    >
      <IconButton
        disableFocusRipple
        centerRipple
        style={{ width: 65, height: 65 }}
        size="large"
        sx={{
          ml: { xl: 3, lg: 3 },
        }}
      >
        <Badge badgeContent={5} color="newItem">
          <NavLink to="/basket/" color="">
            {/* HERE Basket */}
            <BasketIcon />
          </NavLink>
        </Badge>
      </IconButton>
    </Box>
  );
};

export default Basket;
