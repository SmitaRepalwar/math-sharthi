import { Box, Divider, Typography } from "@mui/material";
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
  return (
    <Box
      sx={{
        width: "20%",
        height: "100%",
        margin: "20px",
        backgroundColor: "#171717",
        opacity: "0.6",
        borderRadius: "50px",
        border: "1px solid #bfbfbf",
        position: "relative",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "flex-start",
        // alignItems: "center",
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
          height: "50%",
          width: "70%",
          backgroundColor: "#807f7d",
          borderRadius: "20px",
          position: "absolute",
          left: "15%",
          top: "28%",
        }}
      ></Box>
      <Box
        sx={{
          height: "56%",
          width: "76%",
          backgroundColor: "#bfbfbf",
          borderRadius: "20px",
          position: "absolute",
          left: "11%",
          top: "31%",
        }}
      ></Box>
      <img
        src={image}
        style={{
          height: "62%",
          width: "82%",
          // zIndex: 3,
          position: "absolute",
          left: "8%",
          borderRadius: "20px",
          top: "34%",
        }}
      />
    </Box>
  );
};

export const ServiceSection = () => {
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
        height: "13%",
        width: "100%",
        backgroundImage: `url(${displayBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50px",
        padding: "20px 0px 40px 0px",
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
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0px 40px 0px",
          color: "#ffffff",
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontFamily: "Gupter", fontSize: "42px" }}
          >
            My <span style={{ color: "#ff7a33" }}>Sevices</span>
          </Typography>
        </Box>
        <Box sx={{ width: "40%" }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
            congue ligula, eget lobortis augue. Pellentesque
          </Typography>
        </Box>
      </Box>
      <img
        src={animationImage1}
        alt="animationImage1"
        style={{
          height: "60%",
          width: "20%",
          position: "relative",
          left: "80%",
          animation: hoverClouds && "move1 2s infinite alternate",
        }}
      />
      <img
        src={animationImage2}
        alt="animationImage2"
        style={{
          height: "60%",
          width: "20%",
          position: "relative",
          left: "20%",
          bottom: "30%",
          animation: hoverClouds && "move2 2s infinite alternate",
        }}
      />
      <img
        src={animationImage3}
        alt="animationImage3"
        style={{
          height: "60%",
          width: "20%",
          position: "relative",
          right: "40%",
          animation: hoverClouds && "move3 2s infinite alternate",
        }}
      />
      <Box
        sx={{
          height: "60%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          bottom: "50%",
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
