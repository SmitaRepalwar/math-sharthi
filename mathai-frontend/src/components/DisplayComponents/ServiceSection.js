import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import displayBg from "../../public/displayBg.jpg";
import animationImage1 from "../../public/animationImage1.png";
import animationImage2 from "../../public/animationImage2.png";
import animationImage3 from "../../public/animationImage3.png";
import mainCard from "../../public/mainCard.png";
import scan from "../../public/scan.PNG";
import mathSolve from "../../public/mathSolve.jpg";
import mathLearn from "../../public/mathLearn.jpg";
import { useState } from "react";

const ServiceCard = ({ image, text }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: isMobile ? "80%" : "20%",
        height: isMobile ? "30%" : "100%",
        margin: "8px",
        backgroundColor: "#171717",
        opacity: "0.6",
        borderRadius: "50px",
        border: "1px solid #bfbfbf",
        position: "relative",
        color: "#bfbfbf",
        "&:hover": {
          backgroundColor: "#FEB273",
          opacity: "1",
          color: "#ffffff",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "32px",
          margin: "20px 0px 0px 20px",
          fontFamily: "Gupter",
          "&:hover": { color: "#ffffff" },
        }}
      >
        {text}
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          backgroundColor: "#bfbfbf",
          width: "100%",
          height: "1px",
          marginTop: "5px",
          "&:hover": {
            color: "#ffffff",
          },
        }}
        flexItem
      />
      <Box
        sx={{
          height: isMobile ? "40%" : "50%",
          width: isMobile ? "90%" : "70%",
          backgroundColor: "#807f7d",
          borderRadius: "20px",
          position: "absolute",
          left: isMobile ? "5%" : "15%",
          top: isMobile ? "40%" : "28%",
        }}
      ></Box>
      <Box
        sx={{
          height: isMobile ? "46%" : "56%",
          width: isMobile ? "96%" : "76%",
          backgroundColor: "#bfbfbf",
          borderRadius: "20px",
          position: "absolute",
          left: isMobile ? "2%" : "11%",
          top: isMobile ? "43%" : "31%",
        }}
      ></Box>
      <img
        src={image}
        style={{
          height: isMobile ? "52%" : "62%",
          width: isMobile ? "100%" : "82%",
          position: "absolute",
          left: isMobile ? "0%" : "8%",
          borderRadius: "20px",
          top: isMobile ? "45%" : "34%",
        }}
      />
    </Box>
  );
};

export const ServiceSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const cardInfo = [
    { image: scan, text: "Scan" },
    { image: mathSolve, text: "Solve" },
    { image: mathLearn, text: "Learn" },
  ];

  const [hoverClouds, setHoverClouds] = useState(false);

  const onMouseEnter = () => {
    setHoverClouds(true);
  };

  const onMouseLeave = () => {
    setHoverClouds(false);
  };

  return (
    <Box
      sx={{
        height: isMobile ? "140vh" : "13%",
        width: "100%",
        backgroundImage: `url(${displayBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50px",
        padding: isMobile ? "10px 0px 20px 0px" : "20px 0px 40px 0px",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id="service"
    >
      <Box
        sx={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: isMobile ? "space-around" : "space-between",
          alignItems: "center",
          padding: isMobile ? "10px 0px 20px 0px" : "20px 0px 40px 0px",
          color: "#ffffff",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box sx={{ width: isMobile ? "90%" : "40%" }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontFamily: "Gupter", fontSize: isMobile ? "32px" : "42px" }}
          >
            My <span style={{ color: "#ff7a33" }}>Sevices</span>
          </Typography>
        </Box>
        <Box sx={{ width: isMobile ? "90%" : "40%" }}>
          <Typography
            sx={{
              fontSize: isMobile ? "14px" : "16px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
            congue ligula, eget lobortis augue. Pellentesque
          </Typography>
        </Box>
      </Box>
      <img
        src={animationImage1}
        alt="animationImage1"
        style={{
          height: isMobile ? "30%" : "60%",
          width: isMobile ? "50%" : "20%",
          position: "relative",
          left: isMobile ? "55%" : "80%",
          top: isMobile && "61%",
          animation: hoverClouds && "move1 2s infinite alternate",
        }}
      />
      <img
        src={animationImage2}
        alt="animationImage2"
        style={{
          height: isMobile ? "30%" : "60%",
          width: isMobile ? "50%" : "20%",
          position: "relative",
          left: isMobile ? "10%" : "20%",
          bottom: isMobile ? "15%" : "30%",
          animation: hoverClouds && "move2 2s infinite alternate",
        }}
      />
      <img
        src={animationImage3}
        alt="animationImage3"
        style={{
          height: isMobile ? "30%" : "60%",
          width: isMobile ? "50%" : "20%",
          position: "relative",
          right: isMobile ? "15%" : "40%",
          animation: hoverClouds && "move3 2s infinite alternate",
        }}
      />
      <Box
        sx={{
          height: isMobile ? "95%" : "60%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          bottom: isMobile ? "60%" : "50%",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {cardInfo.map((info, index) => (
          <ServiceCard key={index} image={info.image} text={info.text} />
        ))}
      </Box>
      <style jsx>
        {`
          @keyframes move1 {
            0% {
              transform: translateY(0) scale(1) rotate(0);
            }
            50% {
              transform: translateY(-20px) scale(1.05) rotate(-2deg);
            }
            100% {
              transform: translateY(-40px) scale(1.1) rotate(-5deg);
            }
          }

          @keyframes move2 {
            0% {
              transform: translateX(0) rotate(0);
            }
            100% {
              transform: translateX(40px) rotate(15deg);
            }
          }

          @keyframes move3 {
            0% {
              transform: translateZ(0) translateY(0) scale(1) roatate(0);
            }
            100% {
              transform: translateZ(30px) translateY(20px) scale(1.1)
                rotate(10deg);
            }
          }
        `}
      </style>
    </Box>
  );
};
