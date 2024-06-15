import { Navbar } from "../../component";
import { Stack, styled, Box, Container } from "@mui/material";
import { MdNavigateNext } from "react-icons/md";
import ListProductShop from "./component/ListProductShop";

const Shop = () => {
  return (
    <StyledShop>
      <Navbar />
      <Stack className="breadcrumb_option">
        <Container maxWidth="lg">
          <h3>Shop</h3>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <span>Home</span>
            <MdNavigateNext />
            <p>Shop</p>
          </Stack>
        </Container>
      </Stack>
      <ListProductShop />
    </StyledShop>
  );
};

export default Shop;

const StyledShop = styled(Box)({
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
