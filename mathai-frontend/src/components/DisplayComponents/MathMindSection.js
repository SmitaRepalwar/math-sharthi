import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

// const MathMindCard = ({ image, title, description }) => {
//   return (
//     <Card sx={{ maxWidth: 345, position: "relative" }}>
//       <CardMedia component="img" height="140" image={image} alt={title} />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//       <IconButton
//         sx={{
//           position: "absolute",
//           bottom: 16,
//           right: 16,
//           backgroundColor: "#2c2c2c",
//           color: "#ffffff",
//           "&:hover": {
//             backgroundColor: "#2c2c2c",
//           },
//         }}
//       >
//         <ArrowCircleRightIcon />
//       </IconButton>
//     </Card>
//   );
// };

export const MathMindSection = () => {
  const cardsData = [
    {
      image: "/path-to-your-image1.jpg",
      title: "Math from all angles: Photomath for different learning styles",
      description:
        "Math from all angles: Photomath for different learning styles",
    },
    {
      image: "/path-to-your-image2.jpg",
      title: "Study Tips to Find Your Focus and Ace Your Next Math Test",
      description: "Study Tips to Find Your Focus and Ace Your Next Math Test",
    },
    {
      image: "/path-to-your-image3.jpg",
      title: "Overcoming Math Anxiety: How to Conquer Fear & Build Confidence",
      description:
        "Overcoming Math Anxiety: How to Conquer Fear & Build Confidence",
    },
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: "#F4F4F4" }} id="about">
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "Gupter", fontSize: "42px" }}
      >
        About <span style={{ color: "#ff7a33" }}>Us</span>
      </Typography>
      <Typography
        sx={{ fontFamily: "Gupter", fontSize: "22px", color: "#98A2B3" }}
      >
        Welcome to Math Sharthi, your trusted companion on the journey to
        mastering mathematics. Whether you're a student looking to strengthen
        your math skills, a teacher seeking an effective teaching tool, or a
        math enthusiast eager to explore new concepts, Math Sharthi is here to
        guide you every step of the way. At Math Sharthi, we believe that math
        is more than just numbers and equations—it's a powerful tool for solving
        real-world problems and unlocking new opportunities. Our app is designed
        to make learning math engaging, accessible, and personalized. With
        interactive lessons, practice problems, quizzes, and advanced
        calculators, Math Sharthi caters to learners of all levels, from
        beginners to advanced users. Our mission is to simplify complex
        concepts, provide meaningful practice, and help you build confidence in
        your math abilities. We are committed to making math education enjoyable
        and effective through innovative features, real-world applications, and
        a user-friendly experience. Join us at Math Sharthi and discover the joy
        of learning math with a partner you can trust.
      </Typography>
      {/* <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MathMindCard
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#ff7f50",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#ff7f50",
          },
        }}
      >
        See All
      </Button> */}
    </Box>
  );
};
