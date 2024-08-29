import { Box, Button, Grid, Paper, Typography } from "@mui/material";

export const ExploreOptionSection = () => {
  return (
    <Box sx={{ p: 4, width: "100%" }} id="pricing">
      <Box
        sx={{
          width: "96%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Explore your <span style={{ color: "#ff7a33" }}>options</span>
        </Typography>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ff7a33", borderRadius: "20px" }}
          >
            See All
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {/* Basic Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              height: "400px",
              width: "350px",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                backgroundColor: "#ff7a33",
                borderRadius: "10px",
                p: 2,
                color: "#fff",
              }}
            >
              Basic
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 2 }}
            >
              $0 USD
            </Typography>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography>• Step-by-step explanations</Typography>
              <Typography
                sx={{ textDecoration: "line-through", color: "#999" }}
              >
                • Custom visual aids
              </Typography>
              <Typography>• Extra "how" and "why" tips</Typography>
              <Typography
                sx={{ textDecoration: "line-through", color: "#999" }}
              >
                • Deep-dive solutions for hundreds of textbooks
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Annually Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#fdeacc",
              borderRadius: "10px",
              height: "400px",
              width: "350px",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                backgroundColor: "#ff7a33",
                borderRadius: "10px",
                p: 2,
                color: "#fff",
              }}
            >
              Annually
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 2 }}
            >
              $69.99 USD
            </Typography>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography>• Step-by-step explanations</Typography>
              <Typography>• Custom visual aids</Typography>
              <Typography>• Extra "how" and "why" tips</Typography>
              <Typography>
                • Deep-dive solutions for hundreds of textbooks
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Monthly Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              height: "400px",
              width: "350px",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                backgroundColor: "#ff7a33",
                borderRadius: "10px",
                p: 2,
                color: "#fff",
              }}
            >
              Monthly
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 2 }}
            >
              $69.99 USD
            </Typography>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography>• Step-by-step explanations</Typography>
              <Typography>• Custom visual aids</Typography>
              <Typography>• Extra "how" and "why" tips</Typography>
              <Typography>
                • Deep-dive solutions for hundreds of textbooks
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
