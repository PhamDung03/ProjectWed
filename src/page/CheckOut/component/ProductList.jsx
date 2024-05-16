import { Stack, IconButton, Typography } from "@mui/material";
// import { FaProductHunt } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { formatImg } from "../../../utils/imgHelpers";
import { onCountDown, onCountUp } from "../../../redux/actions/counterActions";
import { onRemoveItem } from "../../../redux/actions/cartActions";
import { useState } from "react";
const ProductList = (props) => {
  const { products } = props;
  const { buyProductName } = useState(products.productName || "");
  const dispatch = useDispatch();

  const onClickCountDown = (productId) => {
    dispatch(onCountDown(productId));
  };

  const onClickCountUp = (productId) => {
    dispatch(onCountUp(productId));
  };
  const onClickDelete = (product) => {
    dispatch(onRemoveItem(product));
  };
  return (
    <>
      {products.map((product, i) => (
        <Stack className="product_list" key={i}>
          <table>
            <tbody>
              <tr className="product">
                <td className="product_image">
                  <img src={formatImg(product.productImage)} alt="" />
                </td>
                <td className="product-description">
                  <span>{product.productName}</span>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <IconButton
                      className="cart_remove"
                      onClick={() => onClickDelete(product)}
                    >
                      <MdDelete />
                    </IconButton>

                    <Stack className="quantity" direction={"row"}>
                      <span
                        className="quantity_chagne"
                        onClick={() => onClickCountDown(product.productId)}
                      >
                        -
                      </span>
                      <input
                        type="text"
                        value={product?.quantity}
                        className="item-quantity"
                        readOnly
                      />
                      <span
                        className="quantity_chagne"
                        onClick={() => onClickCountUp(product.productId)}
                      >
                        +
                      </span>
                    </Stack>
                  </Stack>
                </td>
                <td className="product-price">
                  <Typography>
                    {Number(
                      product?.productPrice * product?.quantity
                    ).toLocaleString()}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Stack>
      ))}
    </>
  );
};

export default ProductList;
