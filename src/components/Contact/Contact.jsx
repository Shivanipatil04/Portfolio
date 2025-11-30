import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";


export default function Contact() {
  return (
    <Box
      id="contact"
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
      {/* Page Title */}
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
        &lt;Contact /&gt;
      </Typography>

      {/* Contact Card */}
      <Paper
        component={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          maxWidth: "600px",
          mx: "auto",
          p: { xs: 3, md: 4 },
          bgcolor: "#111",
          border: "1px solid #222",
          borderRadius: "14px",
          boxShadow: "0 0 15px rgba(138,43,226,0.25)",
        }}
      >
        <Typography
          sx={{
            color: "#ccc",
            fontSize: "16px",
            mb: 3,
            fontFamily: "Inter",
            textAlign: "center",
          }}
        >
          Want to work together or have a question?  
          Just drop a message! 
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Name */}
          <TextField
            label="Your Name"
            fullWidth
            InputLabelProps={{ style: { color: "#9e9e9e" } }}
            InputProps={{ style: { color: "#fff" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#8A2BE2" },
                "&:hover fieldset": { borderColor: "#9b3ff2" },
              },
            }}
          />

          {/* Email */}
          <TextField
            label="Your Email"
            fullWidth
            InputLabelProps={{ style: { color: "#9e9e9e" } }}
            InputProps={{ style: { color: "#fff" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#8A2BE2" },
                "&:hover fieldset": { borderColor: "#9b3ff2" },
              },
            }}
          />

          {/* Message */}
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
            InputLabelProps={{ style: { color: "#9e9e9e" } }}
            InputProps={{ style: { color: "#fff" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#8A2BE2" },
                "&:hover fieldset": { borderColor: "#9b3ff2" },
              },
            }}
          />

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#8A2BE2",
              fontWeight: "bold",
              py: 1.4,
              "&:hover": { bgcolor: "#9b3ff2" },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
