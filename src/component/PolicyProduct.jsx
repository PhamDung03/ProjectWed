import { styled, Box, Stack } from "@mui/material";
import { TbTruckDelivery } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const PolicyProduct = () => {
  return (
    <StyledPolicyProduct>
      <Stack className="product_policy">
        <Stack className="policy_delivery" direction={"row"} mt={2} spacing={2}>
          <TbTruckDelivery className="icon" />
          <span className="delivery_info">
            <h5>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h5>
            <p>(Sản phẩm nguyên giá từ 500,000đ)</p>
          </span>
        </Stack>
        <Stack className="policy_delivery" direction={"row"} mt={2} spacing={3}>
          <IoNewspaperOutline className="paper_icon" />
          <span className="delivery_info">
            <h5>ĐỔI TRẢ DỄ DÀNG</h5>
            <p>
              (Đổi hàng miễn phí 30 ngày với các sản phẩm Quần Áo còn nguyên tem
              mác)
            </p>
          </span>
        </Stack>
        <Stack className="policy_delivery" direction={"row"} mt={2} spacing={2}>
          <FaPhoneAlt className="phone_icon" />
          <span className="delivery_info">
            <h5>TỔNG ĐÀI BÁN HÀNG 094 983 9229</h5>
            <p>(Miễn phí từ 08h30 - 21:30 mỗi ngày)</p>
          </span>
        </Stack>
      </Stack>
    </StyledPolicyProduct>
  );
};

const StyledPolicyProduct = styled(Box)({
  color: "#252a2b",
  ".policy_delivery": {
    ".icon": {
      fontSize: 30,
      margin: "2px 0 0 10px",
    },
    ".paper_icon": {
      fontSize: 30,
      margin: "2px 0 0 10px",
    },
    ".phone_icon": {
      fontSize: 26,
      margin: "2px 0 0 10px",
    },
    ".delivery_info": {
      h5: {
        fontSize: 14,
        margin: 0,
        fontWeight: 500,
      },
      p: {
        margin: 0,
        fontSize: 14,
        fontWeight: 400,
      },
    },
  },
});

export default PolicyProduct;
