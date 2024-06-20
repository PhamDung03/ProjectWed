import heroBanner from "../img/hero-2.jpg";
import heroBanner1 from "../img/hero-1.jpg";
import heroBanner2 from "../img/hero-3.png";
import iconNext from "../img/arrow-right.png";
import iconPrev from "../img/prev.png";
import { styled, Box, Stack, Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GrLinkNext } from "react-icons/gr";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
const Banner = () => {
  return (
    <StyledBanner>
      <Box className="content">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Stack className="item item_hero1">
              <Container>
                <Grid container>
                  <Grid item xs={5} lg={4} md={8} className="item_content">
                    <div className="item_content-text">
                      <h6>Summer Collection</h6>
                      <h2>Fall - Winter Collections 2030</h2>
                      <p>
                        A specialist label creating luxury essentials. Ethically
                        crafted with an unwavering commitment to exceptional
                        quality.
                      </p>
                      <button>
                        Shop now <GrLinkNext />
                      </button>
                    </div>
                    <Stack
                      className="item_content-icon"
                      direction={"row"}
                      spacing={4}
                    >
                      <FaFacebookF />
                      <FaTwitter />
                      <FaPinterest />
                      <FaInstagram />
                    </Stack>
                  </Grid>
                </Grid>
              </Container>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            <Stack className="item item_hero2">
              <Container>
                <Grid container>
                  <Grid item xs={5} lg={4} md={5} className="item_content">
                    <div className="item_content-text">
                      <h6>Summer Collection</h6>
                      <h2>Fall - Winter Collections 2030</h2>
                      <p>
                        A specialist label creating luxury essentials. Ethically
                        crafted with an unwavering commitment to exceptional
                        quality.
                      </p>
                      <button>
                        Shop now <GrLinkNext />
                      </button>
                    </div>
                  </Grid>
                  <Grid xs={7} item></Grid>
                </Grid>
              </Container>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack className="item item_hero3">
              <Container>
                <Grid container>
                  <Grid item xs={5} lg={4} md={5} className="item_content">
                    <div className="item_content-text">
                      <h6>Summer Collection</h6>
                      <h2>Fall - Winter Collections 2030</h2>
                      <p>
                        A specialist label creating luxury essentials. Ethically
                        crafted with an unwavering commitment to exceptional
                        quality.
                      </p>
                      <button>
                        Shop now <GrLinkNext />
                      </button>
                    </div>
                  </Grid>
                  <Grid xs={7} item></Grid>
                </Grid>
              </Container>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Box>
    </StyledBanner>
  );
};

const StyledBanner = styled(Box)(({ theme }) => ({
  margin: "0 0 70px 0",
  ".content": {
    width: "1519.2px",
  },
  ".item_hero1": {
    backgroundImage: `url(${heroBanner2})`,
  },

  ".item_hero2": {
    backgroundImage: `url(${heroBanner1})`,
  },

  ".item_hero3": {
    backgroundImage: `url(${heroBanner})`,
  },

  ".item": {
    backgroundRepeat: "no-repaet",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    height: 800,
    position: "relative",
    ".item_content": {
      position: "absolute",
      top: 250,
      ".item_content-text": {
        h6: {
          color: "#e53637",
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 28,
          transition: "all 0.5s",
        },
        h2: {
          color: "#111111",
          fontSize: 48,
          fontƯeight: 700,
          marginBottom: 30,
        },
        p: {
          fontSize: 16,
          marginBottom: 35,
          lineHeight: 1.8,
          color: "#3d3d3d",
          fontWeight: 400,
        },
        button: {
          display: "flex",
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          padding: "14px 30px",
          color: "#fff",
          background: "#000",
          letterSpacing: 4,
          svg: {
            paddingLeft: 4,
          },
        },
      },
      ".item_content-icon": {
        position: "relative",
        bottom: -150,
      },
    },
  },

  ".swiper-button-next": {
    backgroundImage: `url(${iconNext})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    backgroundPosition: "center",
    marginRight: 60,
  },
  ".swiper-button-next::after": {
    display: "none",
  },
  ".swiper-button-prev": {
    backgroundImage: `url(${iconPrev})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    backgroundPosition: "center",
    marginLeft: 60,
  },
  ".swiper-button-prev::after": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    ".swiper-button-next": {
      position: "absolute",
      right: "72%",
      top: "84%",
    },
    ".swiper-button-prev": {
      position: "absolute",
      left: "-2%",
      top: "84%",
    },
    ".banner-img": {
      height: "auto",
    },
    ".item": {
      height: "640px",
      h6: {
        fontSize: "14px !important",
      },
      h2: {
        fontSize: "36px !important",
      },
    },
    ".item_content": {
      top: "150px !important",
      position: "absolute",
      width: "23%",
    },
    ".item_content-icon": {
      bottom: "-100px !important",
    },
  },
}));

export default Banner;
