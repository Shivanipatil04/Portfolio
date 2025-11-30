import React from "react";
import { Box, IconButton, Tooltip, Typography, Link as MUILink } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        px: { xs: 3, md: 6 },
        bgcolor: "transparent",
        borderTop: "1px solid rgba(138,43,226,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        {/* Replace href values with your real profiles */}
        <Tooltip title="GitHub">
          <IconButton
            component={MUILink}
            href="https://github.com/Shivanipatil04"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: "#111",
              border: "1px solid rgba(138,43,226,0.25)",
              color: "white",
              "&:hover": { bgcolor: "#1a0a2a" },
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            component={MUILink}
            href="https://www.linkedin.com/in/https://www.linkedin.com/in/shivani-patil-2b86522a9?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: "#111",
              border: "1px solid rgba(138,43,226,0.25)",
              color: "white",
              "&:hover": { bgcolor: "#1a0a2a" },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email">
          <IconButton
            component={MUILink}
            href="mailto:shivanipatilsp318@gmail.com"
            sx={{
              bgcolor: "#111",
              border: "1px solid rgba(138,43,226,0.25)",
              color: "white",
              "&:hover": { bgcolor: "#1a0a2a" },
            }}
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>
        © {new Date().getFullYear()} Shivani Patil — MERN Stack Developer
      </Typography>
    </Box>
  );
}
