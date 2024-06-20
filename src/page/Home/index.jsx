import { Container, Dialog } from "@mui/material";
import {
  ListProducts,
  Navbar,
  Banner,
  Footer,
  ScrollTop,
  DialogProduct,
} from "../../component";
import { useState } from "react";
import store from "../../redux/store";
import Categories from "./Component/Categories";
import LatestNews from "./Component/LatestNews";
import Instagram from "./Component/Instagram";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../../providers/user-provider";
const Home = () => {
  const [showDialogProduct, setShowDialogProduct] = useState(false);
  // const navigate = useNavigate();
  // const { setUser } = useUser();
  const onCloseDialogProduct = () => {
    setShowDialogProduct(false);
  };

  const [scroll] = useState("body");
  store.subscribe(() =>
    setShowDialogProduct(store?.getState()?.showDialogBuy.showDialogBuy)
  );

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (isLoggedIn === "true") {
  //     setUser({ name: "PD" });
  //     navigate("/");
  //   }
  // }, [setUser, navigate]);

  return (
    <>
      <Navbar />
      <Banner />

      <Container maxWidth="lg">
        <ListProducts checkShop={false} />
      </Container>
      <Categories />
      <Instagram />
      <LatestNews />
      <ScrollTop />
      <Footer />

      {/* Dialog Product */}
      <Dialog
        open={showDialogProduct}
        onClose={onCloseDialogProduct}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 970,
            maxHeight: 802,
          },
        }}
      >
        <DialogProduct dividers={scroll === "paper"} />
      </Dialog>
    </>
  );
};

export default Home;
