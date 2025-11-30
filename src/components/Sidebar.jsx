import { Box, Typography } from "@mui/material";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

const menuItems = [
  { name: "Home", icon: <HomeIcon />, link: "hero" },
  { name: "About", icon: <PersonIcon />, link: "about" },
  { name: "Skills", icon: <BuildIcon />, link: "skills" },
  { name: "Projects", icon: <WorkIcon />, link: "projects" },
  { name: "Contact", icon: <EmailIcon />, link: "contact" },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        display: { xs: "none", md: "flex" }, // hide on mobile
        flexDirection: "row",
        gap: 3,
        zIndex: 2000,
        bgcolor: "rgba(10,10,10,0.7)",
        backdropFilter: "blur(8px)",
        p: 1.5,
        borderRadius: "12px",
        border: "1px solid #8A2BE2",
        boxShadow: "0 0 15px rgba(138,43,226,0.4)",
      }}
    >
      {menuItems.map((item, index) => (
        <Link key={index} to={item.link} smooth={true} duration={500} offset={-50}>
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              cursor: "pointer",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "white",
              borderRadius: "10px",
              background: "#111",
              border: "1px solid #8A2BE2",
              boxShadow: "0 0 10px #8A2BE2",
              fontFamily: "Inter",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            {item.icon}
            <Typography>{item.name}</Typography>
          </motion.div>
        </Link>
      ))}
    </Box>
  );
}
