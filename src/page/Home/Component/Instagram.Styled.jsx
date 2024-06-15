import { Box, styled } from "@mui/material";

const StyledInstagram = styled(Box)(
  ({ img1, img2, img3, img4, img5, img6, theme }) => ({
    padding: "100px 0 0 0",
    ".box_left": {
      width: "100%",
    },
    ".instagram_pic": {
      ".instagram_pic-item": {
        width: "33.33%",
        height: 261,
        display: "inline-block",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        float: "left",
      },
      ".i1": {
        backgroundImage: `url(${img1})`,
      },
      ".i2": {
        backgroundImage: `url(${img2})`,
      },
      ".i3": {
        backgroundImage: `url(${img3})`,
      },
      ".i4": {
        backgroundImage: `url(${img4})`,
      },
      ".i5": {
        backgroundImage: `url(${img5})`,
      },
      ".i6": {
        backgroundImage: `url(${img6})`,
      },
    },
    ".instagram_text": {
      paddingTop: 130,
      h2: {
        color: "#111",
        fontWeight: 700,
        marginBottom: 30,
      },
      p: {
        color: "#3d3d3d",
        fontSize: 15,
        fontWeight: 400,
        marginBottom: 65,
        fontFamily: "'Nunito Sans', sans-serif",
      },
      h3: {
        color: "#e53637",
        fontWeight: 700,
        fontSize: 30,
      },
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "calc(100px - 32px)",
      ".instagram_pic-item": {
        width: "100% !important",
      },
    },
  })
);

export default StyledInstagram;
