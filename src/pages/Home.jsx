import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import illustration from "../assets/profile.jpg"; // Use your actual illustration path
function Home() {
    return (
      <Container
      maxWidth={false}
      sx={{
          background: "#fff",
          display: "flex",
          alignItems: "center",
      }}
  >
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: 8 }}>
          {/* Text Content */}
          <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 10 }, textAlign: { xs: "center", md: "left" } }}>
                  <Typography variant="h2" component="div" fontWeight="bold" sx={{ fontSize: { xs: 36, md: 48 }, lineHeight: 1.1 }}>
                      Hi{" "}
                      <span role="img" aria-label="wave" style={{ fontSize: 48 }}>
                          👋
                      </span>
                      ,
                      <br />
                      I’m Ilyzza,
                  </Typography>
                  <Typography
                      variant="h3"
                      component="div"
                      fontWeight="bold"
                      sx={{
                          fontSize: { xs: 28, md: 40 },
                          color: "#E573C1", // Pink highlight
                          mt: 1,
                          mb: 2,
                      }}
                  >
                      Front-end Developer
                  </Typography>
                  <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                          mt: 2,
                          mb: 4,
                          maxWidth: 500,
                          mx: { xs: "auto", md: 0 },
                      }}
                  >
                      I design and develop experiences that make people's lives simpler through Web and Mobile apps. I work with HTML5, CSS3, JavaScript, Vue, Vuetify, and Bootstrap.
                  </Typography>
              </Box>
          </Grid>
          {/* Illustration */}
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Box
                  component="img"
                  src={illustration}
                  alt="Ilyzza working"
                  sx={{
                      maxWidth: 420,
                      width: "100%",
                      mx: "auto",
                      mt: { xs: 4, md: 0 },
                  }}
              />
          </Grid>
      </Grid>
  </Container>
    );
}

export default Home;