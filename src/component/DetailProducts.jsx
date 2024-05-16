import { Container, Grid, Stack, Box } from "@mui/material";
import StyledDetailProducts from "./DetailProducts.Styled";
import { FaRegHeart, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { formatImg } from "../utils/imgHelpers";
import { Footer, PolicyProduct } from "../component";
import { toast } from "react-toastify";
import { onAddItem } from "../redux/actions/cartActions";
import { IconButton } from "@mui/material";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { onCountDown, onCountUp } from "../redux/actions/counterActions";
import { useDispatch } from "react-redux";

const DetailProducts = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [selectedSize, setSelectSize] = useState(-1);
  if (!state) {
    return <div>Không có thông tin sản phẩm</div>;
  }
  const addProductToCart = () => {
    dispatch(onAddItem(product));
    toast.success("Thêm sản phẩm vào giỏ hàng thành công");
  };

  const onClickCountUp = (productId) => {
    dispatch(onCountUp(productId));
  };

  const onClickCountDown = (productId) => {
    dispatch(onCountDown(productId));
  };

  const product = state.product;
  const sizes = [
    {
      name: "XXL",
      value: 0,
    },
    {
      name: "XL",
      value: 1,
    },
    {
      name: "L",
      value: 2,
    },
    {
      name: "M",
      value: 3,
    },
  ];

  return (
    <StyledDetailProducts>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7} md={7} className="box">
            <img
              className="product_img"
              src={formatImg(product.productImage)}
              alt=""
            />
            <IconButton className="icon_pre">
              <BsChevronCompactLeft />
            </IconButton>
            <IconButton className="icon_next">
              <BsChevronCompactRight />
            </IconButton>
            <p>
              <IoSearch className="icon_look" />
              Click xem hình lớn hơn
            </p>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <Stack className="product_title">
              <h1 className="tp_product_detail_name">{product.productName}</h1>
              <Box>
                Mã Sản Phẩm:
                <span>SMC.430</span>
              </Box>
              <span className="statusProduct">Còn Hàng</span>
            </Stack>
            <Box className="product-price">
              <span>{`${Number(product.productPrice).toLocaleString()}đ`}</span>
            </Box>
            <Stack className="add-item-form">
              {/* Tiêu đề */}
              <Box className="header_form">
                Kích Thước:
                <span className="guideSize">
                  <a href="/">Hướng dẫn chọn size</a>
                </span>
              </Box>
              {/* Chọn Size */}
              <Stack direction={"row"} spacing={2} className="select-swap">
                {sizes.map((size, i) => (
                  <Box className="swatch-element" key={i}>
                    <label
                      style={
                        size.value === selectedSize
                          ? { border: "1.4px solid#111" }
                          : { border: "1.4px solid#d7d7d7" }
                      }
                      onClick={() => {
                        setSelectSize(size.value);
                      }}
                    >
                      <span>{size.name}</span>
                    </label>
                  </Box>
                ))}
              </Stack>
              {/* Chọn sô lượng  */}
              <Stack className="quantity-area" direction={"row"} mt={2}>
                <button
                  className="qty-btn tp_button"
                  onClick={() => onClickCountDown(product.productId)}
                >
                  -
                </button>
                <input type="text" value={1} className="quantity-selector" />
                <button
                  className="qty-btn tp_button"
                  onClick={() => onClickCountUp(product.productId)}
                >
                  +
                </button>
              </Stack>
              {/* Thêm Vào giỏ hàng  */}
              <Stack
                className="wrap-addcart"
                direction={"row"}
                mt={2}
                spacing={2}
              >
                <button
                  className="btnAddToCart tp_button"
                  onClick={addProductToCart}
                >
                  Thêm vào giỏ hàng
                </button>
                <button className="btnAddToCart tp_button">Mua Ngay</button>
              </Stack>
              {/* Yêu Thích */}
              <Stack
                className="wishlist"
                direction={"row"}
                mt={2}
                spacing={1}
                justifyContent={"center"}
              >
                <FaRegHeart />
                <span>Yêu Thích</span>
              </Stack>
              {/* Chia sẻ */}
              <Stack
                className="share"
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <span>Chia sẻ</span>
                <a href="/">
                  <FaFacebookF className="icon" />
                </a>
                <a href="/">
                  <FaInstagram className="icon" />
                </a>
              </Stack>
            </Stack>

            <Stack className="sys-store">
              <span className="numberStore">9 cửa hàng còn sản phẩm này</span>
              <Box className="select_cty">
                <select name="" id="" className="form_control">
                  <option value="">- Tỉnh Thành -</option>
                  <option value="">Bắc Ninh</option>
                  <option value="">Hà Nội</option>
                  <option value="">Thái Nguyên</option>
                  <option value="">Vĩnh Phúc</option>
                  <option value="">Phú Thọ</option>
                  <option value="">Bắc Giang</option>
                  <option value="">Hải Phòng</option>
                  <option value="">Hải Dương</option>
                  <option value="">Hưng Yên</option>
                </select>
              </Box>

              <Stack className="form_group">
                <Box className="stock_box">
                  <Stack className="stock">
                    <span>
                      <MdPlace />
                      KHOSR109PNT:
                    </span>
                    <span className="street">0352714499</span>
                    <span className="time_store">
                      KHOSR109PNT:
                      <strong>(Hết hàng)</strong>
                    </span>
                  </Stack>
                  <Stack className="stock">
                    <span>
                      <MdPlace />
                      KHOSR109PNT:
                    </span>
                    <span className="street">0352714499</span>
                    <span className="time_store">
                      KHOSR109PNT:
                      <strong>(Hết hàng)</strong>
                    </span>
                  </Stack>
                  <Stack className="stock">
                    <span>
                      <MdPlace />
                      KHOSR109PNT:
                    </span>
                    <span className="street">0352714499</span>
                    <span className="time_store">
                      KHOSR109PNT:
                      <strong>(Hết hàng)</strong>
                    </span>
                  </Stack>
                </Box>
              </Stack>
            </Stack>

            <Stack className="product_description">
              <Stack
                className="description-title"
                direction={"row"}
                mt={1}
                justifyContent={"space-between"}
              >
                <h2>Nội dung sản phẩm</h2>
                <span>
                  <FaPlus />
                </span>
              </Stack>
            </Stack>
            <Stack className="product_description">
              <Stack
                className="description-title"
                direction={"row"}
                mt={1}
                justifyContent={"space-between"}
              >
                <h2>Chính sách đổi trả</h2>
                <span>
                  <FaPlus />
                </span>
              </Stack>
            </Stack>
            <Stack className="product_description">
              <Stack
                className="description-title"
                direction={"row"}
                mt={1}
                justifyContent={"space-between"}
              >
                <h2>Hướng dẫn bảo quản</h2>
                <span>
                  <FaPlus />
                </span>
              </Stack>
            </Stack>

            <PolicyProduct />
            <Stack
              className="product_tags"
              direction={"row"}
              mt={2}
              spacing={2}
            >
              <strong>Tags:</strong>
              <a href="/">Phạm Dũng</a>
              <a href="/">Tất cả sản phẩm</a>
            </Stack>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </StyledDetailProducts>
  );
};

export default DetailProducts;
