import { Box, Container, Stack, styled } from "@mui/material";
import { Navbar } from "../../component";
import { MdNavigateNext } from "react-icons/md";

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <Navbar />
      <Stack className="breadcrumb_option">
        <Container maxWidth="lg">
          <h3>About Us</h3>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <span>Home</span>
            <MdNavigateNext />
            <p>About Us</p>
          </Stack>
        </Container>
      </Stack>
    </StyledAboutUs>
  );
};

export default AboutUs;

const StyledAboutUs = styled(Box)({
  ".breadcrumb_option": {
    background: "#F3F2EE",
    padding: "40px 0",
    h3: {
      color: "#111",
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 8,
    },
    span: {
      fontSize: 15,
      cursor: "pointer",
    },
    p: {
      fontSize: 15,
      color: "#b7b7b7",
    },
  },
});
