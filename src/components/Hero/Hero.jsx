import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";  

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        px: { xs: 2, sm: 4, md: 10 },
        pt: { xs: 6, md: 12 },
        pb: { xs: 6, md: 12 },
        bgcolor: "#0a0a0a",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 4, md: 6 },
      }}
    >
      {/* LEFT CONTENT */}
      <Box sx={{ flex: 1 }}>
        <Typography
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            fontSize: { xs: "26px", md: "40px" },
            fontWeight: 700,
            color: "primary.main",
            mb: 1,
            fontFamily: "Poppins",
          }}
        >
          &lt;Hello World /&gt;
        </Typography>

        <Typography
          component={motion.h1}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            fontSize: { xs: "38px", md: "60px" },
            fontWeight: 800,
            color: "#ffffff",
            mb: 2,
            fontFamily: "Poppins",
          }}
        >
          I'm <span style={{ color: "#a855f7" }}>Shivani Patil</span>
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{
            fontSize: { xs: "15px", md: "18px" },
            color: "#d1d1d1",
            lineHeight: 1.6,
            maxWidth: "550px",
            mb: 3,
            fontFamily: "Inter",
          }}
        >
          I'm a MERN Stack Developer who loves turning ideas into fast, scalable,
          and visually stunning web applications.
        </Typography>

        <Button
          variant="contained"
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
          sx={{
            background: "#8A2BE2",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "bold",
            px: 3,
            py: 1.2,
            borderRadius: "8px",
            boxShadow: "0 0 12px #8A2BE2",
          }}
        >
          LET'S WORK TOGETHER
        </Button>
      </Box>

      
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={avatar}
          alt="Developer Avatar"
          sx={{
            width: { xs: "90%", sm: "60%", md: "80%" },
            maxWidth: "420px",
            filter: "drop-shadow(0 0 25px #8A2BE2)",
            userSelect: "none",
          }}
        />
      </Box>
    </Box>
  );
}
