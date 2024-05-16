import { Box, Container, Grid, Stack } from "@mui/material";
import StyledCategories from "./Categoties.styled";
import img from "../../../img/product-sale.png";
const Categories = () => {
  return (
    <StyledCategories>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <Stack className="categories_text">
              <h2>Clothings Hot</h2>
              <h2 className="blur">Shoe Collection</h2>
              <h2>Accessories</h2>
            </Stack>
          </Grid>
          <Grid item lg={4}>
            <Box className="categories_sale">
              <img src={img} alt="" />
              <Box className="categories_sale-sticker">
                <span>Sale Of</span>
                <h5>$39.9</h5>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Stack className="categories_countdown">
              <span className="categories_countdown-title">
                Deal Of The Week
              </span>
              <h2>Multi-pocket Chest Bag Black</h2>
              <Stack direction={"row"} className="countdown_timer">
                <Stack className="item">
                  <span className="item_after">30</span>
                  <p>Days</p>
                </Stack>
                <Stack className="item">
                  <span className="item_after">04</span>
                  <p>Hours</p>
                </Stack>
                <Stack className="item">
                  <span className="item_after">11</span>
                  <p>Minutes</p>
                </Stack>
                <Stack className="item">
                  <span>29</span>
                  <p>Seconds</p>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledCategories>
  );
};

export default Categories;
