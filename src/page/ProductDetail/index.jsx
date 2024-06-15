import { Box, Container, Stack, styled } from "@mui/material";
import { Navbar } from "../../component";
import { DetailProducts } from "../../component";
import { MdNavigateNext } from "react-icons/md";
const ProductDetail = () => {
  return (
    <StyledProductDetail>
      <Navbar />
      <Stack className="breadcrumb_option">
        <Container maxWidth="lg">
          <h3>Detail Product</h3>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <span>Home</span>
            <MdNavigateNext />
            <p>Detail Products</p>
          </Stack>
        </Container>
      </Stack>
      <DetailProducts />
    </StyledProductDetail>
  );
};

export default ProductDetail;

const StyledProductDetail = styled(Box)({
  ".breadcrumb_option": {
    marginBottom: 100,
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
