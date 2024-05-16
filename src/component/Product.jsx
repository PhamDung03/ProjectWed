import { Container, Typography, Stack } from "@mui/material";
import StyledProduct from "./Product.styled";
import { formatImg } from "../utils/imgHelpers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductDetail } from "../redux/actions/productDetailAction";
const Product = (props) => {
  const { product } = props;
  const navigate = useNavigate();
  const dispath = useDispatch();

  function handleDetail(id) {
    navigate(`/product-details/${id}`, { state: { product } });
  }

  const handleShowDialogProduct = (product) => {
    dispath({ type: "showDialog" });
    dispath(setProductDetail(product));
  };

  return (
    <StyledProduct>
      <Container maxWidth="lg" className="product_list">
        <Stack className="product">
          <img
            src={formatImg(product.productImage)}
            alt=""
            className="product_pic"
          />

          <Stack className="product_text" justifyContent={"center"}>
            <Typography variant="h6" className="product_text_name">
              {product.productName}
            </Typography>
            <Typography variant="h6" className="product_text_price">
              {`${Number(product?.productPrice).toLocaleString()}đ`}
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            className="info"
          >
            <button
              className="product_button "
              onClick={() => handleShowDialogProduct(product)}
            >
              Mua hàng
            </button>

            <button
              className="product_button product_icon_information"
              onClick={() => handleDetail(product.productId)}
            >
              Xem chi tiết
            </button>
          </Stack>
        </Stack>
      </Container>
    </StyledProduct>
  );
};

export default Product;
