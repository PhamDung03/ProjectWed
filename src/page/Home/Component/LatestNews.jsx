import { Container, Grid, Stack } from "@mui/material";
import StyledLatestNews from "./LatestNews.Styled";
import BlogItem from "../../Blogs/Component/BlogItem";
import blog1 from "../../../img/blog-1.jpg";
import blog2 from "../../../img/blog-2.jpg";
import blog3 from "../../../img/blog-3.jpg";

const LatestNews = () => {
  return (
    <StyledLatestNews>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack className="section_title">
              <span>Latest News</span>
              <h2>Fashion New Trends</h2>
            </Stack>
          </Grid>
          <Grid item lg={4} md={6} sm={6}>
            <BlogItem
              date="16 February 2020"
              title="What Curling Irons Are The Best Ones"
              img={blog1}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6}>
            <BlogItem
              date="16 February 2020"
              title="What Curling Irons Are The Best Ones"
              img={blog2}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6}>
            <BlogItem
              date="16 February 2020"
              title="What Curling Irons Are The Best Ones"
              img={blog3}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledLatestNews>
  );
};

export default LatestNews;
