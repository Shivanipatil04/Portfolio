import { useState } from "react";
import { Box, Fab, Paper, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "hero" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <>
      {/* Floating Button */}
      <Fab
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          bottom: 25,
          right: 25,
          bgcolor: "#8A2BE2",
          color: "white",
          zIndex: 2000,
          "&:hover": { bgcolor: "#9b3ff2" },
          display: { xs: "flex", md: "none" }, // only mobile/tablet
        }}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </Fab>

      {/* Animated Menu Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: 85,
              right: 25,
              zIndex: 1500,
            }}
          >
            <Paper
              sx={{
                p: 2,
                bgcolor: "#111",
                border: "1px solid #8A2BE2",
                borderRadius: "12px",
                boxShadow: "0 0 15px rgba(138,43,226,0.35)",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  onClick={() => setOpen(false)}
                >
                  <Typography
                    sx={{
                      color: "white",
                      cursor: "pointer",
                      "&:hover": { color: "#8A2BE2" },
                      fontFamily: "Inter",
                      fontSize: "16px",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
