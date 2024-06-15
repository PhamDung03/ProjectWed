import { Box, Stack, styled } from "@mui/material";
import bannerImage from "../../../img/breadcrumb-bg.jpg";
const BannerBlogs = () => {
  return (
    <StyledBannerBlogs>
      <Stack
        className="breadcrumb-blog"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <h2>Our Blog</h2>
      </Stack>
    </StyledBannerBlogs>
  );
};

const StyledBannerBlogs = styled(Box)({
  ".breadcrumb-blog": {
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "350px",
  },
  h2: {
    color: "#ffffff",
    fontSize: 60,
    fontWeight: 700,
  },
});

export default BannerBlogs;
