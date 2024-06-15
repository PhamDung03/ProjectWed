import { Box, Container, Grid } from "@mui/material";
import StyledInstagram from "./Instagram.Styled";
import img1 from "../../../img/blog-1.jpg";
import img2 from "../../../img/blog-2.jpg";
import img3 from "../../../img/blog-3.jpg";
import img4 from "../../../img/blog-4.jpg";
import img5 from "../../../img/blog-5.jpg";
import img6 from "../../../img/blog-6.jpg";

const Instagram = () => {
  return (
    <StyledInstagram
      img1={img1}
      img2={img2}
      img3={img3}
      img4={img4}
      img5={img5}
      img6={img6}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={8} className="box_left">
            <Box className="instagram_pic">
              <div className="instagram_pic-item i1"></div>
              <div className="instagram_pic-item i2"></div>
              <div className="instagram_pic-item i3"></div>
              <div className="instagram_pic-item i4"></div>
              <div className="instagram_pic-item i5"></div>
              <div className="instagram_pic-item i6"></div>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box className="instagram_text">
              <h2>Instagram</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3>#Male_Fashion</h3>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledInstagram>
  );
};

export default Instagram;
