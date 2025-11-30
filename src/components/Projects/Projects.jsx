import { Box, Typography, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      name: "GhostChat – Real-Time Chat App",
      desc: "A real-time chat application with typing indicator, message sync, and modern UI.",
      live: "https://ghostchat-1.onrender.com",
      github: "https://github.com/Shivanipatil04/GhostChat",
    },
    {
      name: "Summarizer App",
      desc: "Summarizes text, documents, and YouTube videos using NLP and Flask backend. Clean UI, fast response.",
      live: "",
      github: "https://github.com/Shivanipatil04/SummarizerV2.0",
    },
    {
      name: "To-Do List ",
      desc: "Feature-rich To-Do app with localStorage, filters, edit, delete, timestamps, theme toggle, and animations.",
      live: "https://Shivanipatil04.github.io/To-Do-List-",
      github: "https://github.com/Shivanipatil04/To-Do-List-",
    },
    {
      name: "E-Commerce Chatbot",
      desc: "AI chatbot built with Flask + React to help users search products, check availability, prices & details.",
      live: "",
      github: "https://github.com/Shivanipatil04/Chatbot-app",
    },
    {
      name: "Weather App",
      desc: "Modern weather app using OpenWeather API with temperature, humidity, wind speed, and city search.",
      live: "https://mayurgaike.github.io/Weather/",
      github: "https://github.com/Shivanipatil04/weather_s",
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        px: { xs: 2, sm: 4, md: 10 },
    pt: { xs: 6, md: 12 },
    pb: { xs: 6, md: 12 },
    pl: { xs: 0, md: "120px" },
        bgcolor: "#0a0a0a",
        color: "white",
        overflowX: "hidden", // fix horizontal scroll
      }}
    >
      {/* Title */}
      <Typography
        component={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          fontSize: { xs: "28px", md: "38px" },
          fontWeight: 700,
          color: "primary.main",
          mb: 6,
          fontFamily: "Poppins",
        }}
      >
        &lt;Projects /&gt;
      </Typography>

      {}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {projectList.map((p, i) => (
          <Paper
            key={i}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            sx={{
              p: 4,
              bgcolor: "#111",
              borderRadius: "14px",
              border: "1px solid #222",
              boxShadow: "0 0 15px rgba(138,43,226,0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#8A2BE2", fontWeight: 600, mb: 2 }}
            >
              {p.name}
            </Typography>

            <Typography sx={{ color: "#ccc", mb: 3 }}>{p.desc}</Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#8A2BE2",
                  "&:hover": { bgcolor: "#9b3ff2" },
                }}
                href={p.live}
                target="_blank"
              >
                Live Demo
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#8A2BE2",
                  color: "#8A2BE2",
                  "&:hover": {
                    borderColor: "#9b3ff2",
                    color: "#9b3ff2",
                  },
                }}
                href={p.github}
                target="_blank"
              >
                GitHub
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
