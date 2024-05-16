import {
  Stack,
  Grid,
  Container,
  Box,
  TextField,
  Radio,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { MdArrowBackIos, MdNavigateNext } from "react-icons/md";
import StyledCheckOut from "./Checkout.Styled";
import { AiOutlineLine } from "react-icons/ai";
import { useSelector } from "react-redux";
import ProductList from "./component/ProductList";
import FormInfo from "./component/FormInfo";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { DialogSuccess } from "../../component";
import logo from "../../img/LogoShop.png";

const Checkout = () => {
  const methods = useForm();
  const [showDialogSuccess, setShowDialogSuccess] = useState(false);
  const cart = useSelector((state) => state?.cart?.cart) || [];
  const cartTotal = cart.reduce((a, b) => {
    return a + Number(b.productPrice) * b.quantity;
  }, 0);

  const onSubmitFormInfo = (values) => {
    const order = {
      userInfo: values,
      cart: cart.map((i) => ({
        productName: i.productName,
        productQuality: i.quantity,
      })),
    };
    localStorage.setItem("order", JSON.stringify(order));
    setShowDialogSuccess(true);
  };
  const isMobileView = useMediaQuery("(max-width: 830px)");
  return (
    <FormProvider {...methods}>
      <StyledCheckOut>
        <Container maxWidth="lg" className="container">
          <Box
            component="form"
            onSubmit={methods.handleSubmit(onSubmitFormInfo)}
          >
            <Grid container>
              <Grid item xs={12} sm={7} className="main">
                <Stack className="main_header">
                  <div className="box_img">
                    <img src={logo} alt="" />
                  </div>
                  <ul>
                    <li className="cart">Giỏ hàng</li>
                    <li>
                      <MdNavigateNext />
                    </li>
                    <li className="buy">Thanh toán</li>
                  </ul>
                </Stack>

                <Stack className="main_content">
                  <h2 className="main_content-herder">Thông tin giao hàng</h2>
                  {/* form infomation */}
                  <FormInfo />

                  <Stack className="section-payment-method">
                    <h2>Phương thức thanh toán</h2>

                    <Stack className="content_box">
                      <Box className="radio_check">
                        <Radio
                          value="a"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                          size="small"
                        />
                        <span>Thanh toán khi nhận hàng (COD)</span>
                      </Box>

                      <Box className="cod_description">
                        Thanh toán khi nhận hàng
                      </Box>
                    </Stack>
                  </Stack>
                  {!isMobileView && (
                    <Box className="back_cart">
                      <a href="/cart">
                        <MdArrowBackIos /> Giỏ hàng
                      </a>
                    </Box>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sm={5} className="sidebar">
                <Stack className="sidebar_content">
                  <Stack className="order_sections">
                    {/* Products */}
                    <ProductList products={cart} />

                    <Stack
                      className="order_sections-discount"
                      direction={"row"}
                      spacing={2}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Mã giảm giá"
                        variant="outlined"
                        size="small"
                      />
                      <Button variant="contained" className="use">
                        Sử dụng
                      </Button>
                    </Stack>
                    {/* transprort_fee */}
                    <Stack
                      className="transprort_fee"
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography>Phí vận chuyển</Typography>
                      <AiOutlineLine />
                    </Stack>
                    {/* Total */}
                    <Stack
                      className="total"
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography>Tổng cộng</Typography>
                      <Box>
                        <span>VND </span>
                        <span className="total_price">
                          {cartTotal.toLocaleString()}
                        </span>
                      </Box>
                    </Stack>

                    <Typography className="note">
                      Chúng tôi sẽ XÁC NHẬN đơn hàng bằng TIN NHẮN SMS hoặc GỌI
                      ĐIỆN. Bạn vui lòng kiểm tra TIN NHẮN hoặc NGHE MÁY ngay
                      khi đặt hàng thành công và CHỜ NHẬN HÀNG
                    </Typography>
                  </Stack>
                </Stack>
                <Stack className="sidebar_footer">
                  <Button variant="contained" type="submit">
                    Hoàn tất đơn hàng
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          {/* <Dialog open={showSuccess} onClose={onCloseSuccessDialog}>
            <DialogSucces />
          </Dialog> */}
          {showDialogSuccess && <DialogSuccess />}
        </Container>
      </StyledCheckOut>
    </FormProvider>
  );
};

export default Checkout;
