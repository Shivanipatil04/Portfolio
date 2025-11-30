import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Neon purple icons
const icons = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  sql: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
};

// Random bubble sizes + shapes for realistic bubble feel
const bubbleVariants = [
  { w: 140, h: 135 }, // slightly oval
  { w: 120, h: 120 },
  { w: 110, h: 115 },
  { w: 130, h: 125 },
  { w: 150, h: 145 },
];

const skills = [
  { name: "HTML", icon: icons.html },
  { name: "CSS", icon: icons.css },
  { name: "JavaScript", icon: icons.js },
  { name: "React.js", icon: icons.react },
  { name: "Node.js", icon: icons.node },
  { name: "Express.js", icon: icons.express },
  { name: "MongoDB", icon: icons.mongodb },
  { name: "SQL", icon: icons.sql },
  { name: "Python", icon: icons.python },
  { name: "Git", icon: icons.git },
  { name: "GitHub", icon: icons.github },
  { name: "Linux", icon: icons.linux },
  { name: "Postman", icon: icons.postman },
];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        px: { xs: 2, sm: 4, md: 10 },
        pt: { xs: 6, md: 12 },
        pb: { xs: 6, md: 12 },
        bgcolor: "#0a0a0a",
        color: "white",
        textAlign: "center",
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
          mb: 5,
          fontFamily: "Poppins",
        }}
      >
        &lt;Skills /&gt;
      </Typography>

      {/* REAL BUBBLE CLOUD */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
        }}
      >
        {skills.map((skill, index) => {
          const random = bubbleVariants[index % bubbleVariants.length];

          return (
            <Paper
              key={index}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, 2, -2, 1],
                transition: { duration: 0.4 },
              }}
              animate={{
                y: [0, -6, 0, 6, 0],
                x: [0, 2, -2, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                width: random.w,
                height: random.h,
                borderRadius: "50%",
                bgcolor: "rgba(20, 20, 20, 0.7)",
                background: "radial-gradient(circle at 30% 30%, #222, #0a0a0a)",
                border: "3px solid rgba(138,43,226,0.8)",
                boxShadow:
                  "0 0 25px rgba(138,43,226,0.8), inset 0 0 20px rgba(138,43,226,0.4)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{
                  width: "45px",
                  height: "45px",
                  filter: "drop-shadow(0 0 6px #8A2BE2)",
                }}
              />

              <Typography
                sx={{
                  fontSize: "14px",
                  mt: 1,
                  fontFamily: "Inter",
                  color: "#ccc",
                }}
              >
                {skill.name}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}
