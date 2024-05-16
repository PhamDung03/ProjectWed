import { Box, styled } from "@mui/material";

const StyledLatestNews = styled(Box)({
  padding: "95px 0 80px 0",
  ".section_title": {
    marginBottom: 20,
    textAlign: "center",
    span: {
      color: "#e53637",
      fontSize: 14,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 2,
      marginBottom: 16,
    },
    h2: {
      color: "#111",
      fontWeight: 600,
      fontSize: 36,
    },
  },
});

export default StyledLatestNews;
