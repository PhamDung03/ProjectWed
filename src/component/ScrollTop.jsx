import { Box, IconButton, styled } from "@mui/material";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollTop = () => {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledCrollTop>
      <IconButton onClick={ScrollToTop}>
        <FaAngleDoubleUp />
      </IconButton>
    </StyledCrollTop>
  );
};

const StyledCrollTop = styled(Box)({
  position: "fixed",
  bottom: 40,
  right: 32,
});

export default ScrollTop;
