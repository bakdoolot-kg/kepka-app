import React from "react";
import { Button, ThemeProvider, Box, Typography } from "@mui/material";
import theme from "../../theme-mui/theme";

import {
  ellipse1,
  ellipse2,
  fiftyKepka1,
  fiftyKepka2,
  fiftyKepka3,
} from "../../assets";
import "./home-banner.scss";
import { NavLink } from "react-router-dom";

const HomeBanner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: { xs: "flex", sm: "flex" },
          justifyContent: { xs: "space-evenly", sm: "normal" },
          alignItems: { xs: "center" },
          mt: { xs: "66px", sm: "40px", md: "40px", lg: "35px", xl: "44px" },
          mb: { sm: "20px", md: "35px", xl: "40px" },
          background:
            "linear-gradient(90.87deg, #F8F7F7 0.69%, rgba(227, 227, 227, 0.56) 98.66%)",
        }}
      >
        {/* Column 1 images */}
        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            alignSelf: { lg: "flex-start" },
            mt: { xs: "0", sm: "-50px", lg: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "50px", sm: "60px", md: "82px", xl: "126px" },
              ml: { xs: "15%", md: "73px", lg: "12px", xl: "-3%" },
              mt: { xs: "-190px", sm: "-30px", lg: 0 },
              mb: { sm: "100px" },
              alignContent: { xs: "start", lg: "center", xl: "end" },
            }}
          >
            <img
              src={ellipse1}
              alt="Ellipse"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "95px", md: "150px", lg: "192px" },
              ml: { xs: "-40px", sm: "25px", md: "30px" },
              mt: { xs: "-50px", sm: "-10px" },
              position: { xs: "static", sm: "absolute" },
            }}
          >
            <img src={fiftyKepka1} style={{ width: "100%", height: "100%" }} />
          </Box>
        </Box>

        {/* SM + title */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            maxWidth: { sm: "175px", md: "380px", lg: "600px" },
            mt: { sm: "50px", md: "80px", lg: "100px" },
            ml: { sm: "60px", md: 0, lg: 10 },
            mb: { sm: "20px" },
            px: { md: 2 },
            zIndex: 10,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textTransform: "uppercase",
              fontWeight: "700",
              lineHeight: { xl: "117px" },
              fontSize: {
                xs: "24px",
                sm: "34px",
                md: "64px",
                lg: "64px",
                xl: "96px",
              },
              color: "#070D3F",
            }}
          >
            New era
          </Typography>

          <Typography
            variant="body1"
            sx={{
              display: { xs: "none", md: "block" },
              textAlign: "left",
              fontSize: { md: "14px", lg: "14px", xl: "18px" },
              lineHeight: { md: "17px", lg: "22px" },
              mt: { md: "15px" },
            }}
          >
            Новая коллекция 2021 уже доступны на заказ яркие цвета, винтажный
            принт 70х, тематические группы и отличное качество
          </Typography>

          <Typography
            variant="body1"
            sx={{
              display: { xs: "block", md: "none" },
              textAlign: { xs: "center", sm: "left" },
              fontSize: { xs: "12px", sm: "14px" },
              lineHeight: "15px",
              mt: "5px",
              mb: "13px",
              color: "#555252",
            }}
          >
            Новая коллекция 2021 уже доступны на заказ яркие цвета...
          </Typography>

          <Button
            variant="contained"
            sx={{
              fontSize: { sm: "11px", md: "14px", xl: "18px" },
              borderRadius: "20px",
              backgroundColor: "#FDDB16",
              color: "#000",
              boxShadow: "none",
              py: { sm: "8px", md: "10px" },
              px: { sm: "20px", md: "20px" },
              mt: { sm: "13px", md: "20px" },
              mb: { lg: "25px" },
              ":hover": {
                color: "#fff",
                bgcolor: "#FDDB16",
              },
              textTransform: "capitalize",
            }}
          >
            <NavLink
              to="/catalog/"
              style={{
                color: "#000",
              }}
            >
              Открыть каталог
            </NavLink>
          </Button>
        </Box>

        {/* Column 2 images */}
        <Box
          sx={{
            display: { xs: "flex" },
            alignItems: { xs: "flex-end" },
            justifyContent: { xs: "flex-end" },
            width: { xs: "65%", lg: "80%" },
          }}
        >
          <Box
            sx={{
              position: { xs: "absolute" },
              mr: { xs: "25%", sm: "12%", md: "10%", lg: "20%" },
              width: {
                xs: "166px",
                sm: "140px",
                md: "220px",
                lg: "300px",
                xl: "500px",
              },
              transform: { xs: "rotate(45deg)", sm: "rotate(0)" },
              mb: { xs: "-40px" },
            }}
          >
            <img src={fiftyKepka2} style={{ width: "100%", height: "100%" }} />
          </Box>
          <Box
            sx={{
              width: {
                xs: "95px",
                sm: "90px",
                md: "148px",
                lg: "189px",
                xl: "289px",
              },
              transform: { xs: "rotate(24deg)", sm: "rotate(0)" },
              mr: { sm: "-20px", xl: "-70px" },
              marginBottom: { xs: "100px", md: "130px" },
            }}
          >
            <img src={fiftyKepka3} style={{ width: "100%", height: "100%" }} />
          </Box>
          <Box
            sx={{
              width: { xs: "35px", lg: "50px", xl: "80px" },
              mr: { xs: "15px" },
              mb: { xs: "15px" },
            }}
          >
            <img src={ellipse2} style={{ width: "100%", height: "100%" }} />
          </Box>
        </Box>
      </Box>

      {/* XS title */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          maxWidth: "157px",
          textAlign: { xs: "center", sm: "left" },
          mx: { xs: "auto", sm: "77px", md: "125px", lg: "130px" },
          mt: { xs: "20px", md: "80px", lg: "100px" },
          px: { md: 2 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "64px", lg: "96px" },
            color: "#070D3F",
            textTransform: "uppercase",
          }}
        >
          New era
        </Typography>

        <Typography
          variant="body1"
          sx={{
            display: { xs: "block", md: "none" },
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "12px" },
            lineHeight: "15px",
            color: "#555252",
            mt: "5px",
          }}
        >
          Новая коллекция 2021 уже доступны на заказ яркие цвета...
        </Typography>
        <Button
          sx={{
            mt: "13px",
            mb: "25px",
            fontSize: "11px",
            color: "#000",
            backgroundColor: "#FDDB16",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          <NavLink to="/catalog/" style={{ color: "#000", fontSize: "11px" }}>
            Открыть каталог
          </NavLink>
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default HomeBanner;
