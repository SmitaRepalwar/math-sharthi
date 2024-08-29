import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../public/Logo.png";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const DisplayPageHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const NavButton = styled(Button)({
    borderRadius: "30px",
    padding: "10px 20px",
    color: "white",
    fontWeight: "bold",
    "&.active": {
      backgroundColor: "#0099FF",
    },
  });

  const LoginButton = styled(Button)({
    borderRadius: "30px",
    padding: "10px 20px",
    color: "white",
    backgroundColor: "#FF8C00",
    marginLeft: "10px",
  });

  const SignupButton = styled(Button)({
    borderRadius: "30px",
    padding: "10px 20px",
    color: "white",
    backgroundColor: "#FF8C00",
    marginLeft: "10px",
  });

  return (
    <Grid
      id="home"
      container
      sx={{
        width: "100vw",
        height: isMobile ? "20px" : "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={2}>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: isMobile ? "100%" : "60%",
            height: isMobile ? "100%" : "60%",
          }}
        />
      </Grid>
      <Grid item xs={10}>
        <Box
          sx={{
            background: "#171717",
            width: "80vw",
            height: "10vh",
            gap: "10px",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <>
              <IconButton onClick={handleMenuClick} sx={{ color: "white" }}>
                <MenuIcon />
              </IconButton>
              <SignupButton onClick={() => navigate("/signup")}>
                SIGN UP/LOGIN
              </SignupButton>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center", // Changed to center for better alignment
                }}
                transformOrigin={{
                  vertical: "top", // Added transformOrigin for positioning
                  horizontal: "center",
                }}
              >
                <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <NavButton
                    component={HashLink}
                    smooth
                    to="#home"
                    onClick={handleMenuClose}
                  >
                    Home
                  </NavButton>
                  <NavButton
                    component={HashLink}
                    smooth
                    to="#about"
                    onClick={handleMenuClose}
                  >
                    About
                  </NavButton>
                  <NavButton
                    component={HashLink}
                    smooth
                    to="#service"
                    onClick={handleMenuClose}
                  >
                    Service
                  </NavButton>
                  <NavButton
                    component={HashLink}
                    smooth
                    to="#pricing"
                    onClick={handleMenuClose}
                  >
                    Pricing
                  </NavButton>
                  <NavButton
                    component={HashLink}
                    smooth
                    to="#contact"
                    onClick={handleMenuClose}
                  >
                    Contact
                  </NavButton>
                  <LoginButton
                    onClick={() => {
                      navigate("/login");
                      handleMenuClose();
                    }}
                  >
                    LOGIN/SIGNUP
                  </LoginButton>
                </Box>
              </Popover>
            </>
          ) : (
            <>
              <NavButton component={HashLink} smooth to="#home">
                Home
              </NavButton>
              <NavButton component={HashLink} smooth to="#about">
                About
              </NavButton>
              <NavButton component={HashLink} smooth to="#service">
                Service
              </NavButton>
              <NavButton component={HashLink} smooth to="#pricing">
                Pricing
              </NavButton>
              <NavButton component={HashLink} smooth to="#contact">
                Contact
              </NavButton>
              <Box>
                <LoginButton onClick={() => navigate("/login")}>
                  LOGIN
                </LoginButton>
                <SignupButton onClick={() => navigate("/signup")}>
                  SIGN UP
                </SignupButton>
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DisplayPageHeader;
