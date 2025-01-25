"use client";
import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  styled,
  Card,
  ThemeProvider,
} from "@mui/material";
import Image from "next/image";
import Animation from "./AnimationUp";
import theme from "../theme";
import Promotions from "./Promotion";

const blogPosts = [
  {
    id: 1,
    title: "How Electrical Product Can Help You Improve Your Health",
    date: "December 17, 2023",
    image: "/VirusKiller.png",
    excerpt:
      "Electricity is critical for health care and can help treat a variety of conditions. It's also used for lighting, heating, and cooling in homes...",
  },
  {
    id: 2,
    title: "Five Reasons Why You Should Invest In Mechanical",
    date: " December 25, 2023",
    image: "/Blog2.jpg",
    excerpt:
      "Investing in mechanical goods can be beneficial due to the potential for increased efficiency, productivity, quality improvement, cost savings...",
  },
  {
    id: 3,
    title: "Things you should look for before using electrical equipment",
    date: "January 11, 2024",
    image: "/Blog3.jpg",
    excerpt:
      "Check that the outer cover of the equipment is not damaged in a way that will give rise to electrical or mechanical hazards...",
  },
];

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
          <Animation>
      <Box sx={{ pt: 8, pb: 4, px: 2, maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", color: "primary.main", mb: 1 }}
        >
          Our Blog
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
          sx={{ textAlign: "center", mb: 6 }}
        >
          Latest Blog & Articles
        </Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  height={300}
                  width={350}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block", mb: 2 }}
                  >
                    {post.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Button sx={{ textTransform: "none", bgcolor: "primary.main", color: 'white' }}>
                    READ MORE →
                  </Button>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Animation>
    </ThemeProvider>

  );
}
