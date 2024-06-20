import { Box, Stack } from "@mui/material";
import StyledDrawerList from "./DrawerList.Styled";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { formatImg } from "../utils/imgHelpers";
import { onRemoveItem } from "../redux/actions/cartActions";
import { Link, useNavigate } from "react-router-dom";
const DrawerList = (props) => {
  const { close } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cart?.cart) || [];
  const navigate = useNavigate();

  const total = cart.reduce((a, b) => {
    return a + Number(b.productPrice) * b.quantity;
  }, 0);

  console.log("Total: ", total);
  const handleClose = ({ target }) => {
    const isClose =
      ["svg", "path"].includes(target.tagName) ||
      target?.className?.includes("drawer-container");
    isClose && close();
  };

  const onClickDelete = (product) => {
    dispatch(onRemoveItem(product));
  };

  const onClickCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <StyledDrawerList className="drawer-container" onClick={handleClose}>
      <Box className="wapper">
        <Stack className="content">
          <Stack
            className="title"
            direction={"row"}
            justifyContent={"space-between"}
          >
            <p>Giỏ hàng</p>
            <IoCloseSharp size={30} onClick={close} />
          </Stack>
          <span className="cartSide">
            Bạn đang có <b>{cart.length}</b> sản phẩm trong giỏ hàng
          </span>
          <table>
            <tbody>
              {cart.map((product, i) => (
                <tr key={i}>
                  {/* Ảnh sản phẩm */}
                  <td className="image">
                    <img src={formatImg(product.productImage)} alt="" />
                  </td>

                  {/* Thông tin sản phẩm */}
                  <td>
                    <Stack>
                      <span className="product_name">
                        {product?.productName}
                      </span>
                      <span className="product_price">
                        {`${Number(product.productPrice).toLocaleString()}₫`}
                        <i> x {product?.quantity}</i>
                      </span>

                      <button
                        className="btn_delete"
                        onClick={() => onClickDelete(product)}
                      >
                        Xóa
                      </button>
                    </Stack>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <span className="line"></span>
          <Stack className="total">
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              margin={"20px 0"}
            >
              <b>Tổng tiền tạm tính</b>
              <b>{`${total.toLocaleString()} VNĐ`}</b>
            </Stack>
            <button className="btn_add" onClick={onClickCheckOut}>
              Tiến hành đặt hàng
            </button>
            <Box className="LinkProductDetail">
              <Link to={"/cart"}>Xem chi tiết giỏ hàng {">>"} </Link>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </StyledDrawerList>
  );
};

export default DrawerList;
