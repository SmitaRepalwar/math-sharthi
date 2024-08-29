import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../public/Logo.png";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <Box id="contact" sx={{ backgroundColor: "#F4F4F4" }}>
      <Box
        sx={{
          backgroundColor: "#2c2c2c",
          color: "white",
          py: 6,
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Logo and Branding */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>
                <img
                  src={Logo}
                  alt="techSharthi.com"
                  style={{ width: "150px" }}
                />
              </Typography>
            </Grid>

            {/* Navigation Links */}
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom color="orange">
                Navigation
              </Typography>
              <Typography
                component={HashLink}
                smooth
                to="#home"
                color="#bfbfbf"
              >
                Home
              </Typography>
              <br />
              <Typography
                component={HashLink}
                smooth
                to="#about"
                color="#bfbfbf"
              >
                About Us
              </Typography>
              <br />
              <Typography
                component={HashLink}
                smooth
                to="#service"
                color="#bfbfbf"
              >
                Service
              </Typography>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom color="orange">
                Contact
              </Typography>
              <Typography>+91 0000 0000 00</Typography>
              <Typography>demo@gmail.com</Typography>
              <Typography>techsharthi.com</Typography>
            </Grid>

            {/* Newsletter Signup */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom color="orange">
                Get the latest information
              </Typography>
              <Box
                component="form"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Email Address"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff7f50",
                    color: "#ffffff",
                    minWidth: "48px",
                    "&:hover": {
                      backgroundColor: "#ff7f50",
                    },
                  }}
                >
                  &gt;
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 4,
              borderTop: "1px solid gray",
              pt: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="body2" color="white">
              Copyright© 2024 Tech Sharthi. All Rights Reserved.
            </Typography>
            <Typography variant="body2" color="white">
              <Link href="#" color="inherit" underline="none">
                Conditions
              </Link>{" "}
              |{" "}
              <Link href="#" color="inherit" underline="none">
                Privacy Policy
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
