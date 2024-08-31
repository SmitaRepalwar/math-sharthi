import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import DisplayPageHeader from "../components/DisplayComponents/DisplayPageHeader";
import headerText from "../public/headingText.png";
import Ellipse2 from "../public/Ellipse2.png";
import girl from "../public/girl.png";
import text from "../public/text.png";
import equations from "../public/equations.png";
import { ServiceSection } from "../components/DisplayComponents/ServiceSection";
import { MathExplainedSection } from "../components/DisplayComponents/MathExplainedSection";
import { GetPersonalAppSection } from "../components/DisplayComponents/GetPersonalAppSection";
import { ExploreOptionSection } from "../components/DisplayComponents/ExploreOptionSection";
import { MathMindSection } from "../components/DisplayComponents/MathMindSection";
import { Footer } from "../components/DisplayComponents/Footer";
import { display, textAlign, width } from "@mui/system";

const DisplayPage = () => {
  const [hover, setHover] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  // Responsive styles
  const headerStyles = {
    position: "absolute",
    zIndex: 0,
    left: hover ? (isMobile ? "10%" : "650px") : isMobile ? "10%" : "350px",
    top: hover ? "100%" : isMobile ? "30%" : "10%",
    height: hover ? "0px" : isMobile ? "25%" : "42%",
    width: hover ? "0px" : isMobile ? "60%" : "48%",
    transition: "0.5s ease",
  };

  const textStyles = {
    zIndex: 2,
    position: "absolute",
    right: isMobile ? "10%" : "70%",
    top: hover ? "40%" : "50%",
    height: isMobile ? "15%" : "30%",
    width: isMobile ? "30%" : "19%",
    transition: "0.5s ease",
  };

  const equationStyles = {
    zIndex: 2,
    position: "absolute",
    left: hover ? (isMobile ? "0%" : "280px") : isMobile ? "0%" : "650px",
    top: hover ? (isMobile ? "13%" : "0%") : "110%",
    height: hover ? (isMobile ? "50%" : "90%") : "0%",
    width: hover ? (isMobile ? "80%" : "60%") : "0%",
    transition: "0.5s ease",
  };

  const girlStyles = {
    position: "absolute",
    left: isMobile ? "-1%" : "28%",
    bottom: "0%",
    zIndex: 3,
    height: isMobile ? "75%" : "90%",
    width: isMobile ? "90%" : "50%",
  };

  const ellipseStyles = {
    position: "absolute",
    right: isMobile ? "25%" : "25%",
    bottom: "0%",
    height: isMobile ? "30%" : "58%",
    width: isMobile ? "60%" : "45%",
  };

  return (
    <Box
      sx={{
        width: "98vw",
        height: "100vh",
        padding: "1%",
        overflow: "auto",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box sx={{ height: "100%", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: isMobile ? "800vh" : "600vh",
            overflowY: "hidden",
            padding: "40px 0px 40px 0px",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <DisplayPageHeader />
          <Box
            sx={{
              width: "100%",
              height: isMobile ? "40vh" : "14%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              padding: "20px",
            }}
          >
            <img src={headerText} style={headerStyles} />
            <img src={text} style={textStyles} />
            <img src={equations} style={equationStyles} />
            <img
              src={girl}
              style={girlStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img src={Ellipse2} style={ellipseStyles} />
          </Box>
          <ServiceSection />

          <MathExplainedSection />
          <GetPersonalAppSection />
          <ExploreOptionSection />
          <MathMindSection />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayPage;
