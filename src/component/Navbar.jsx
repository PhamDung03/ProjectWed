import {
  Grid,
  Container,
  Stack,
  useMediaQuery,
  IconButton,
  styled,
  Badge,
  Box,
} from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";
import StyledNavbar from "./Navbar.styled";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { useUser } from "../providers/user-provider";
import { AiOutlineLogin } from "react-icons/ai";
import { useSelector } from "react-redux";
import img from "../img/LogoShop.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useUser();
  const cart = useSelector((state) => state?.cart.cart) || [];

  const onClickUser = () => {
    navigate("/login");
  };

  const onClickLogout = () => {
    logout();
    navigate("/login");
  };

  const onClickCart = () => {
    navigate("/cart");
  };

  const navBarList = [
    {
      name: "Home",
      path: "/",
      public: true,
    },
    {
      name: "Admin",
      path: "/admin",
      public: isLoggedIn,
    },
    {
      name: "Shop",
      path: "/shop",
      public: true,
    },
    {
      name: "About Us",
      path: "/aboutUs",
      public: true,
    },
    {
      name: "Blogs",
      path: "/blogs",
      public: true,
    },
  ];

  const isMobileView = useMediaQuery("(max-width: 830px)");

  return (
    <StyledNavbar>
      <Box className="header_top">
        <Container maxWidth="lg">
          <Stack direction={"row"} justifyContent={"space-between"}>
            <p>Free shipping, 30-day return or refund guarantee.</p>
            <div className="header_top-right">
              <a href="/">Wishing you a great day!</a>
            </div>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          mt={4}
        >
          <Grid item sm={3} md={2}>
            <img src={img} alt="" />
          </Grid>
          {!isMobileView && (
            <>
              <Grid item xs={6}>
                <ul className="header__list">
                  {navBarList.map((item, i) => {
                    if (item.public) {
                      return (
                        <li key={i}>
                          <NavLink
                            to={item.path}
                            className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : ""
                            }
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </Grid>

              <Grid item xs={2}>
                <Stack spacing={5} direction={"row"}>
                  <IconButton aria-label="cart" onClick={onClickCart}>
                    <StyledBadge badgeContent={cart.length} color="primary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                  {!isLoggedIn ? (
                    <IconButton onClick={onClickUser}>
                      <FaRegCircleUser style={{ fontSize: 24 }} />
                    </IconButton>
                  ) : (
                    <IconButton onClick={onClickLogout}>
                      <AiOutlineLogin />
                    </IconButton>
                  )}
                </Stack>
              </Grid>
            </>
          )}

          {isMobileView && (
            <IconButton>
              <TfiMenu />
            </IconButton>
          )}
        </Grid>
      </Container>
    </StyledNavbar>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid`,
    padding: "0 4px",
  },
}));

export default Navbar;
