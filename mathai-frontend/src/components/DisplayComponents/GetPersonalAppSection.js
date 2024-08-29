import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getAppText from "../../public/getAppText.png";
import circles from "../../public/circles.png";
import getApp from "../../public/getApp.png";

export const GetPersonalAppSection = () => {
  const navigate = useNavigate();
  const [GetPersonalAppSectionHover, setPersonalAppSectionHover] =
    useState(false);

  const onMouseEnterPersonalApp = () => {
    setPersonalAppSectionHover(true);
  };

  const onMouseLeavePersonalApp = () => {
    setPersonalAppSectionHover(false);
  };

  return (
    <Box
      sx={{
        height: "18%",
        width: "100%",
        backgroundColor: "#F2F4F7",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src={getApp}
        alt="getapp"
        style={{
          height: "400px",
          width: "400px",
          marginBottom: "50px",
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
          right: GetPersonalAppSectionHover ? "38%" : "78%",
          bottom: "22%",
          transition: "0.5s ease",
        }}
      />
      <Box>
        <img
          src={getAppText}
          alt="mathapptext"
          style={{
            position: "absolute",
            bottom: GetPersonalAppSectionHover ? "65%" : "60%",
            transition: "0.5s ease",
          }}
        />
        <Typography
          sx={{
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
            width: "120px",
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
  );
};
