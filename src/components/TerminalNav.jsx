import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function TerminalNav() {
  const fullText = "shivanipatil@portfolio:~$ ";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "80%", md: "60%" },
        mt: 5,
        bgcolor: "#0d0d0d",
        border: "1px solid #3a3a3a",
        borderRadius: "8px",
        p: 2,
        color: "#bdbdbd",
        fontFamily: "Monospace",
        boxShadow: "0 0 10px rgba(138, 43, 226, 0.3)",
      }}
    >
      {/* Terminal Header */}
      <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f57" }} />
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
        <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#28c840" }} />
      </Box>

      <Typography sx={{ color: "#8A2BE2", fontWeight: 600 }}>
        {typed}
        <span style={{ borderRight: "2px solid #8A2BE2", animation: "blink 1s infinite" }}></span>
      </Typography>

      {/* Navigation */}
      <Box sx={{ mt: 2, ml: 2, display: "flex", flexDirection: "column", gap: 1 }}>

        <Link to="about" smooth={true} duration={500}>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#8A2BE2" } }}>
            &gt; about
          </Typography>
        </Link>

        <Link to="skills" smooth={true} duration={500}>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#8A2BE2" } }}>
            &gt; skills
          </Typography>
        </Link>

        <Link to="projects" smooth={true} duration={500}>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#8A2BE2" } }}>
            &gt; projects
          </Typography>
        </Link>

        <Link to="contact" smooth={true} duration={500}>
          <Typography sx={{ cursor: "pointer", "&:hover": { color: "#8A2BE2" } }}>
            &gt; contact
          </Typography>
        </Link>

      </Box>

      <style>
      {`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}
      </style>
    </Box>
  );
}
