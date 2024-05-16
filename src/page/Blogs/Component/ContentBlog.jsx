import { Box, Container, Grid, styled } from "@mui/material";
import BlogItem from "./BlogItem";
import blog1 from "../../../img/blog-1.jpg";
import blog2 from "../../../img/blog-2.jpg";
import blog3 from "../../../img/blog-3.jpg";
import blog4 from "../../../img/blog-4.jpg";
import blog5 from "../../../img/blog-5.jpg";
import blog6 from "../../../img/blog-6.jpg";

const ContentBlog = () => {
  return (
    <StyledContentBlog>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid sm={6} md={6} lg={4} className="box_item">
            <BlogItem
              date="16 February 2020"
              title="What Curling Irons Are The Best Ones"
              img={blog1}
            />
          </Grid>
          <Grid sm={6} md={6} lg={4} className="box_item">
            <BlogItem
              date="16 February 2020"
              title="What Curling Irons Are The Best Ones"
              img={blog2}
            />
          </Grid>
          <Grid sm={6} md={6} lg={4} className="box_item">
            <BlogItem
              date="16 February 2020"
              title="What Curling Irons Are The Best Ones"
              img={blog3}
            />
          </Grid>
          <Grid sm={6} md={6} lg={4} className="box_item">
            <BlogItem
              date="16 February 2020"
              title="What Curling Irons Are The Best Ones"
              img={blog4}
            />
          </Grid>
          <Grid sm={6} md={6} lg={4} className="box_item">
            <BlogItem
              date="16 February 2020"
              title="What Curling Irons Are The Best Ones"
              img={blog5}
            />
          </Grid>
          <Grid sm={6} md={6} lg={4} className="box_item">
            <BlogItem
              date="16 February 2020"
              title="What Curling Irons Are The Best Ones"
              img={blog6}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledContentBlog>
  );
};

const StyledContentBlog = styled(Box)({
  margin: "100px 0",
  ".box_item": {
    padding: "0 15px",
    marginBottom: 45,
  },
});

export default ContentBlog;
