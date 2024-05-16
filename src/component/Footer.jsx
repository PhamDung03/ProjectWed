import StyledFooter from "./Footer.Styled";
import { Stack, Container, Grid, useMediaQuery } from "@mui/material";
import { FaPhoneAlt, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import page from "../img/Page.jpg";
import { BsCCircle } from "react-icons/bs";
const Footer = () => {
  const isMobileView = useMediaQuery("(max-width: 1023px)");

  return (
    <StyledFooter>
      <Container maxWidth="lg" className="footer_top">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Stack>
              <h4>GỌI MUA HÀNG (08:30 - 21:30)</h4>
              <Stack direction={"row"}>
                <span>
                  <FaPhoneAlt />
                </span>
                <h3>0352714499</h3>
              </Stack>
              <p>Tất cả các ngày trong tuần</p>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Stack>
              <h4>GỌI MUA HÀNG (08:30 - 21:30)</h4>
              <Stack direction={"row"}>
                <span>
                  <FaPhoneAlt />
                </span>
                <h3>0352714499</h3>
              </Stack>
              <p>Các ngày trong tuần (trừ ngày lễ)</p>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Stack>
              <h4>ĐĂNG KÝ NHẬN THÔNG TIN MỚI</h4>
              <Stack direction={"row"}>
                <input type="text" placeholder="Nhập email của bạn..." />
                <button>Đăng ký</button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Stack>
              <h4>Theo dõi chúng tôi</h4>
              <Stack direction={"row"} className="icon" spacing={3}>
                <FaFacebook color="#0866FF" />
                <FaInstagram />
                <FaYoutube color="#FF0000" />
                <FaTwitter color="#50ABF1" />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      {!isMobileView && (
        <Stack className="footer_bottom">
          <Container maxWidth="lg">
            <Grid container spacing={4} className="footer_bottom-main">
              <Grid item xs={3}>
                <Stack>
                  <h3>Hỗ trợ khách hàng</h3>
                  <ul>
                    <li>Chính sách bảo hành / đổi trả</li>
                    <li>Chính sách vận chuyển</li>
                    <li>Chính sách thành viên</li>
                    <li>Chính sách bảo mật</li>
                    <li>Hướng dẫn chọn size</li>
                  </ul>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack>
                  <h3>Về chúng tôi</h3>
                  <ul>
                    <li>Câu chuyện thương hiệu</li>
                    <li>Liên hệ</li>
                    <li>Hệ thống cửa hàng</li>
                  </ul>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack>
                  <h3>Công ty My Shop</h3>
                  <ul>
                    <li>Mã số thuê: 0129878 - Ngày cấp: 31/3/2024</li>
                    <li>
                      Địa chỉ: Tiên xá , Phường Hạp Lĩnh, TP.Bắc Ninh, Tỉnh Bắc
                      Ninh
                    </li>
                    <li>
                      Văn phòng: Chung cư k33, Phường Ngọc Thụy, Q.Long Biên, Hà
                      Nội
                    </li>
                    <li>
                      <i>
                        Copyright <BsCCircle /> Phạm Văn Dũng
                      </i>
                    </li>
                  </ul>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack>
                  <h3>FanPage chúng tôi</h3>
                  <img src={page} alt="" />
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Stack>
      )}
    </StyledFooter>
  );
};

export default Footer;
