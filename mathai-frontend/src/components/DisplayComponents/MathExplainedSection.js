import { Box, Typography } from "@mui/material";
import mathExplainedText from "../../public/mathExplainedText.png";
import devider from "../../public/devider.png";

export const MathExplainedSection = () => {
  const subjectsLeft = [
    {
      title: "Elementary math",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "Algebra",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "Geometry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
  ];

  const subjectsRight = [
    {
      title: "Trigonometry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "Statistics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "Calculus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
  ];

  return (
    <Box
      sx={{
        height: "14%",
        width: "100%",
        padding: "40px 0px 40px 0px",
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <img src={mathExplainedText} />
      </Box>
      <Box
        sx={{
          height: "90%",
          marginTop: "20px",
          width: "100%",
          padding: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "30%" }}>
          {subjectsLeft.map((subject, index) => (
            <Box key={index} sx={{ marginBottom: "40px" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Gupter",
                  fontSize: "42px",
                  fontWeight: "bold",
                }}
              >
                {subject.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Gupter", color: "#98A2B3" }}
              >
                {subject.description}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <img src={devider} alt="devider" />
        </Box>
        <Box sx={{ width: "30%", marginRight: "20px" }}>
          {subjectsRight.map((subject, index) => (
            <Box key={index} sx={{ marginBottom: "40px" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Gupter",
                  fontSize: "42px",
                  fontWeight: "bold",
                }}
              >
                {subject.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Gupter", color: "#98A2B3" }}
              >
                {subject.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
