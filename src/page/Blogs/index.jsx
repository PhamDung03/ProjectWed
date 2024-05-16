import { Footer, Navbar } from "../../component";
import BannerBlogs from "./Component/BannerBlogs";
import ContentBlog from "./Component/ContentBlog";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <BannerBlogs />
      <ContentBlog />
      <Footer />
    </>
  );
};

export default Blogs;
