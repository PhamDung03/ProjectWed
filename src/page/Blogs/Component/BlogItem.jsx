import { Box, styled } from "@mui/material";
const BlogItem = (props) => {
  return (
    <StyledBlogItem image={props.img}>
      <Box className="blog_item">
        <Box className="blog_item-pic"></Box>
        <Box className="blog_item-text">
          <span>{props.date}</span>
          <h5>{props.title}</h5>
          <a href="/">Read More</a>
        </Box>
      </Box>
    </StyledBlogItem>
  );
};

const StyledBlogItem = styled(Box)(({ image }) => ({
  "&:hover": {
    "a::after": {
      width: "30%",
      backgroundColor: "#d02020dd",
    },
  },
  ".blog_item-pic": {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    height: 270,
  },
  ".blog_item-text": {
    padding: "30px 30px 25px",
    background: "#fff",
    margin: "-35px 30px 0 30px",
  },
  span: {
    color: "#3d3d3d",
    fontSize: 13,
    display: "block",
    marginBottom: 10,
  },
  h5: {
    color: "0d0d0d",
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  a: {
    display: "inline-block",
    color: "#111111",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 5,
    textTransform: "uppercase",
    padding: "3px 0",
    position: "relative",
    textDecoration: "none",
  },
  "a::after": {
    content: "''",
    position: "absolute",
    height: 2,
    width: "100%",
    background: "#000",
    bottom: -10,
    left: 0,
    transition: "0.5s",
  },
  "a:hover": {
    color: "#d02020dd",
  },
}));

export default BlogItem;
