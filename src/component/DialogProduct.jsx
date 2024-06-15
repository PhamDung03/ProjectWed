import { Box, Grid, Stack } from "@mui/material";
import StyledDialogProduct from "./DialogProduct.Styled";
import { FaPlus } from "react-icons/fa6";
import DrawerList from "./DrawerList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatImg } from "../utils/imgHelpers";
import { onAddItem } from "../redux/actions/cartActions";
const DialogProduct = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispath = useDispatch();
  const productDetail = useSelector(
    (state) => state?.showDialogBuy?.productDetail
  );

  const showDrawerList = () => {
    setOpenDrawer(true);
    dispath(onAddItem(productDetail));
  };

  const closeDrawerList = () => {
    setOpenDrawer(false);
  };

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
    <StyledDialogProduct>
      <Grid container spacing={2}>
        {/* Box Left */}
        <Grid item md={8} sm={7} xs={12}>
          <Grid container>
            <Grid item sm={1} className="thumbnails ">
              <Box className="small-img">
                <img src={formatImg(productDetail.productImage)} alt="" />
              </Box>
              <Box className="small-img">
                <img src={formatImg(productDetail.productImage)} alt="" />
              </Box>
              <Box className="small-img">
                <img src={formatImg(productDetail.productImage)} alt="" />
              </Box>
              <Box className="small-img">
                <img src={formatImg(productDetail.productImage)} alt="" />
              </Box>
              <Box className="small-img">
                <img src={formatImg(productDetail.productImage)} alt="" />
              </Box>
            </Grid>

            <Grid item sm={11} className="slide-image">
              <Box className="slide-image-item">
                <img src={formatImg(productDetail.productImage)} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={5} xs={12}>
          <Stack className="product_title">
            <h2>{productDetail.productName}</h2>
            <span className="pro-soldold">
              Tình trạng: <span className="statusProduct">Còn hàng</span>
            </span>
          </Stack>
          <p className="product_price">{`${Number(
            productDetail.productPrice
          ).toLocaleString()}đ`}</p>

          <div className="form_add-product">
            <Stack className="select_size">
              <h3 className="select_size-header">Kích thước</h3>
              <Stack className="select-swap" direction={"row"}>
                {sizes.map((size) => {
                  return <span key={size.value}>{size.name}</span>;
                })}
              </Stack>
            </Stack>
            <button className="button_add" onClick={showDrawerList}>
              Sở hữu ngay
            </button>
          </div>
          <Stack
            className="product_description"
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <span>Thông tin sản phẩm</span>
            <FaPlus />
          </Stack>
          <Stack
            className="product_description"
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <span>Mô tả sản phẩm</span>
            <FaPlus />
          </Stack>

          <Box className="LinkProductDetail">
            <span>Xem chi tiết sản phẩm {">>"} </span>
          </Box>
        </Grid>
      </Grid>
      {openDrawer && <DrawerList close={closeDrawerList} />}
    </StyledDialogProduct>
  );
};

export default DialogProduct;
