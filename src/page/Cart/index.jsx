import { Navbar } from "../../component";
import { Container, Stack, Grid, Box } from "@mui/material";
import StyledCart from "./Cart.Styled";
import { PolicyProduct } from "../../component";
import { useSelector } from "react-redux";
import { formatImg } from "../../utils/imgHelpers";
import { useDispatch } from "react-redux";
import { onCountDown, onCountUp } from "../../redux/actions/counterActions";
import { onRemoveItem } from "../../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../component";
import { MdNavigateNext } from "react-icons/md";
const Cart = () => {
  const cart = useSelector((state) => state?.cart?.cart) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartTotal = cart.reduce((a, b) => {
    return a + Number(b.productPrice) * b.quantity;
  }, 0);

  const onClickCountUp = (productId) => {
    dispatch(onCountUp(productId));
  };

  const onClickCountDown = (productId) => {
    dispatch(onCountDown(productId));
  };

  const onClickDelete = (product) => {
    dispatch(onRemoveItem(product));
  };

  const onClickCheckout = () => {
    navigate("/checkout");
  };

  const onClickHome = () => {
    navigate("/");
  };

  return (
    <StyledCart>
      <Navbar />
      <Stack className="breadcrumb_option">
        <Container maxWidth="lg">
          <h3>Cart Product</h3>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <span>Home</span>
            <MdNavigateNext />
            <p>Cart Products</p>
          </Stack>
        </Container>
      </Stack>
      <Container maxWidth="lg">
        {/* Tiêu đề */}
        <Stack direction={"row"} className="heading">
          <h1>Giỏ hàng của bạn</h1>
          <span>
            (có <b>{cart.length}</b> sản phẩm trong giỏ hàng)
          </span>
        </Stack>

        {/* form */}
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Stack className="content_cart">
              <table>
                <tbody>
                  {cart.map((product, i) => (
                    <tr className="products" key={product.productId}>
                      {/* Ảnh sản phẩm */}
                      <td className="image">
                        <img src={formatImg(product.productImage)} alt="" />
                      </td>
                      {/* Tên sản phẩm */}
                      <td className="product_name">
                        <Stack>
                          <h3>{product?.productName}</h3>
                          <button onClick={() => onClickDelete(product)}>
                            Xóa
                          </button>
                        </Stack>
                      </td>
                      {/* Bộ đếm */}
                      <td className="quantity ">
                        <Stack direction={"row"}>
                          <span
                            className="add_down add_action"
                            onClick={() => onClickCountDown(product.productId)}
                          >
                            -
                          </span>
                          <input
                            type="text"
                            value={product?.quantity}
                            className="item_quantity"
                          />

                          <span
                            className="add_up add_action"
                            onClick={() => onClickCountUp(product.productId)}
                          >
                            +
                          </span>
                        </Stack>
                      </td>

                      <td className="product_price">
                        <span>
                          {Number(
                            product?.productPrice * product?.quantity
                          ).toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Stack className="boxRightCart">
              <Box className="titleInfoCart">Tóm tắt đơn hàng</Box>
              <Stack className="summary-subtotal">
                <p>Chưa bao gồm phí vận chuyển:</p>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  className="sum_price"
                >
                  <span>Tổng tiền:</span>
                  <span>{`${cartTotal.toLocaleString()} VND`}</span>
                </Stack>
              </Stack>
              <Box className="note-subtotal">
                <i>Bạn có thể nhập mã giảm giá ở trang thanh toán</i>
              </Box>
              <Stack className="cart_buttons">
                <button className="checkLimitCart" onClick={onClickCheckout}>
                  Tiến hành đặt hàng
                </button>
                <button className="link_continue" onClick={onClickHome}>
                  Mua thêm sản phẩm
                </button>
              </Stack>
            </Stack>
            <PolicyProduct />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </StyledCart>
  );
};

export default Cart;
