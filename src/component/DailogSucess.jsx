import { Button, Stack } from "@mui/material";
import StyledDialogSuccess from "./DialogSuccess.Styled";
import imgSuccess from "../img/Success.webp";
const DialogSuccsess = () => {
  return (
    <StyledDialogSuccess>
      <Stack direction={"row"} className="wrapper" alignItems={"center"}>
        <Stack className="content__box">
          <Stack className="content__box--title" alignItems={"center"}>
            <div>
              <img src={imgSuccess} alt="" />
            </div>
            <h2 className="title">Đơn đặt hàng thành công</h2>
            <p className="content">
              Đơn hành của quý khách đã được đặt thành công. My Shop sẽ sớm liên
              hệ với quý khách để kiểm tra thông tin và giao hàng, dịch vụ.
            </p>
            <h3 className="wish">Chúc quý khách một ngày tốt lành !</h3>
          </Stack>

          <Stack
            className="content__box--fotter"
            direction={"row"}
            justifyContent={"center"}
            spacing={4}
          >
            <Button variant="outlined" href="/shop" color="success">
              Tiếp tục mua sắm
            </Button>
            <Button variant="outlined" href="#outlined-buttons" color="error">
              Chi tiết đơn hàng
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </StyledDialogSuccess>
  );
};

export default DialogSuccsess;
