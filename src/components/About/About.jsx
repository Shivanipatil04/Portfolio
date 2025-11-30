import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
         px: { xs: 2, sm: 4, md: 10 },
    pt: { xs: 6, md: 12 },
    pb: { xs: 6, md: 12 },
    pl: { xs: 0, md: "120px" }, 
        bgcolor: "#0a0a0a",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* Section Title */}
      <Typography
        component={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{
          fontSize: { xs: "28px", md: "38px" },
          fontWeight: 700,
          color: "primary.main",
          mb: 6,
          fontFamily: "Poppins",
        }}
      >
        &lt;About Me /&gt;
      </Typography>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: 4,
        }}
      >
        {/* LEFT: Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            component={motion.p}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            sx={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#cccccc",
              fontFamily: "Inter",
            }}
          >
            I’m <span style={{ color: "#8A2BE2", fontWeight: 600 }}>Shivani Patil</span>, 
            a MERN Stack Developer & intrested in Freelancing helping businesses build modern, responsive, and fully scalable web applications.
            <br /><br />
            With expertise in 
            <span style={{ color: "#8A2BE2" }}> React, Node.js, Express.js, and MongoDB,</span>, 
            I develop dynamic UIs, secure APIs, database-driven systems, and real-time features.
            <br /><br />
            My focus is always on clean code, fast performance, and delivering exactly what the client needs — with a smooth and professional experience.
          </Typography>
        </Box>

        {/* RIGHT: Developer Code Card */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          elevation={5}
          sx={{
            flex: 1,
            p: 3,
            bgcolor: "#111",
            border: "1px solid #222",
            borderRadius: "12px",
            boxShadow: "0 0 12px rgba(138, 43, 226, 0.25)",
            fontFamily: "JetBrains Mono",
            color: "#bdbdbd",
          }}
        >
          <Typography sx={{ color: "#8A2BE2", mb: 1 }}>
            const shivani = {"{"}
          </Typography>

          <Typography sx={{ ml: 3 }}>
            name: <span style={{ color: "#fff" }}>"Shivani Patil"</span>,
          </Typography>

          <Typography sx={{ ml: 3 }}>
            role: <span style={{ color: "#fff" }}>"Mern stack developer"</span>,
          </Typography>

          <Typography sx={{ ml: 3 }}>
            skills: 
            <span style={{ color: "#8A2BE2" }}> [</span>
            "React", "JavaScript", "Node.js", "MongoDB", "Express"
            <span style={{ color: "#8A2BE2" }}> ]</span>,
          </Typography>

          <Typography sx={{ color: "#8A2BE2", mt: 1 }}>
            {"}"};
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
