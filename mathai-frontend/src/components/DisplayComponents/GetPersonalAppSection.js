import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getAppText from "../../public/getAppText.png";
import circles from "../../public/circles.png";
import getApp from "../../public/getApp.png";

export const GetPersonalAppSection = () => {
  const navigate = useNavigate();
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [GetPersonalAppSectionHover, setPersonalAppSectionHover] =
    useState(false);

  const onMouseEnterPersonalApp = () => {
    setPersonalAppSectionHover(true);
  };

  const onMouseLeavePersonalApp = () => {
    setPersonalAppSectionHover(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: isMobile ? "auto" : "18%",
          width: "100%",
          backgroundColor: "#F2F4F7",
          borderRadius: isMobile ? "20px" : "50px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: isMobile ? "20px" : "0",
        }}
      >
        <img
          src={getApp}
          alt="getapp"
          style={{
            height: isMobile ? "200px" : "400px",
            width: isMobile ? "200px" : "400px",
            marginBottom: isMobile ? "20px" : "50px",
            zIndex: 1,
          }}
          onMouseEnter={onMouseEnterPersonalApp}
          onMouseLeave={onMouseLeavePersonalApp}
        />
        <img
          src={circles}
          alt="circles"
          style={{
            height: GetPersonalAppSectionHover ? "100%" : "0%",
            width: GetPersonalAppSectionHover ? "90%" : "0%",
            position: "absolute",
            right: isMobile
              ? GetPersonalAppSectionHover
                ? "10%"
                : "30%"
              : GetPersonalAppSectionHover
              ? "38%"
              : "78%",
            bottom: isMobile ? "5%" : "22%",
            transition: "0.5s ease",
          }}
        />
        <Box
          sx={{
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <img
            src={getAppText}
            alt="mathapptext"
            style={{
              position: "absolute",
              bottom: GetPersonalAppSectionHover ? "65%" : "60%",
              transition: "0.5s ease",
              width: isMobile ? "150px" : "auto",
            }}
          />
          <Typography
            sx={{
              marginTop: isMobile ? "20px" : "0",
              color:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales ",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/login");
            }}
            onMouseEnter={onMouseEnterPersonalApp}
            onMouseLeave={onMouseLeavePersonalApp}
            sx={{
              color: "#151515",
              borderColor: "#151515",
              height: "50px",
              width: isMobile ? "100px" : "120px",
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "#151515",
                color: "#ffffff",
                borderColor: "#151515",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
