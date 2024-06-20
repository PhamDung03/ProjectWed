import {
  Container,
  Grid,
  Stack,
  Box,
  InputBase,
  IconButton,
  Accordion,
  AccordionSummary,
  Dialog,
} from "@mui/material";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import StyledListProductShop from "./ListProductShop.Styled";
import { SlArrowDown } from "react-icons/sl";
import { DialogProduct, Footer, ListProducts } from "../../../component";
import { useState } from "react";
import store from "../../../redux/store";
import { useUser } from "../../../providers/user-provider";

const ListProductShop = () => {
  const [isExpandCategory, setIsExpandCategory] = useState(true);
  const [isExpandPrice, setIsExpandPrice] = useState(true);
  const [isExpandSize, setIsExpandSize] = useState(true);
  const [isExpandColor, setIsExpandColor] = useState(true);
  const [isExpandTags, setIsExpandTags] = useState(true);
  const [showDialogProduct, setShowDialogProduct] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { setProduct, preData } = useUser();

  const handlExpandCategory = () => {
    setIsExpandCategory(!isExpandCategory);
  };

  const handlExpandPrice = () => {
    setIsExpandPrice(!isExpandPrice);
  };

  const handlExpandSize = () => {
    setIsExpandSize(!isExpandSize);
  };

  const hanldExpandColor = () => {
    setIsExpandColor(!isExpandColor);
  };

  const handlExpandTags = () => {
    setIsExpandTags(!isExpandTags);
  };

  const onCloseDialogProduct = () => {
    setShowDialogProduct(false);
  };

  const [selectCategory, setSelectCategory] = useState(-1);

  const categories = [
    {
      name: "Shoe(20)",
      value: 0,
      filterKey: "shoe",
    },
    {
      name: "Coat(16)",
      value: 1,
      filterKey: "coat",
    },
    {
      name: "Jean(12)",
      value: 2,
      filterKey: "jean",
    },
  ];

  const [selectPrice, setSelectPrice] = useState(-1);
  const prices = [
    {
      name: "0 - 100,000đ",
      value: 0,
    },
    {
      name: "100,000 - 200,000đ",
      value: 1,
    },
    {
      name: "200,000 - 300,000đ",
      value: 2,
    },
    {
      name: "300,000đ +",
      value: 3,
    },
  ];

  const [scroll] = useState("body");

  store.subscribe(() =>
    setShowDialogProduct(store?.getState()?.showDialogBuy.showDialogBuy)
  );

  const handlSearch = (e) => {
    setSearchText(e.target.value);
    const newProducts = preData.current.filter((p) =>
      p.productName.toLowerCase().includes(e.target.value)
    );
    setProduct(newProducts);
  };

  const filterProductsByCategory = (categoryKey) => {
    const filteredProducts = preData.current.filter((p) =>
      p.categoryName.toLowerCase().includes(categoryKey)
    );
    setProduct(filteredProducts);
  };

  const filterProductsByPrice = (priceRange) => {
    const filteredProducts = preData.current.filter((p) => {
      const price = p.productPrice;
      switch (priceRange) {
        case 0:
          return price >= 0 && price < 100000;
        case 1:
          return price >= 100000 && price < 200000;
        case 2:
          return price >= 200000 && price < 300000;
        case 3:
          return price >= 300000;
        default:
          return true;
      }
    });
    setProduct(filteredProducts);
  };

  // useEffect(() => {
  //   if (selectCategory !== -1) {
  //     filterProductsByCategory(categories[selectCategory].filterKey);
  //   } else {
  //     setProduct(preData.current);
  //   }
  // }, [selectCategory]);

  return (
    <StyledListProductShop>
      <Container maxWidth="lg">
        <Grid container spacing={7}>
          <Grid item lg={3}>
            <Stack>
              {/* Thanh Sreach */}
              <Box
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  border: "1px solid #e5e5e5",
                  marginBottom: "45px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search..."
                  value={searchText}
                  onChange={handlSearch}
                />
                <IconButton type="button" sx={{ p: "10px" }}>
                  <PiMagnifyingGlassThin />
                </IconButton>
              </Box>

              {/* filter  */}
              <Accordion
                className="filter"
                expanded={isExpandCategory}
                onChange={handlExpandCategory}
              >
                <AccordionSummary
                  expandIcon={<SlArrowDown />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="filter_title"
                >
                  CATEGORIES
                </AccordionSummary>
                {categories.map((category, i) => (
                  <h5
                    key={i}
                    className={
                      selectCategory === category.value ? "action" : "unAction"
                    }
                    onClick={() => {
                      setSelectCategory(category.value);
                      filterProductsByCategory(category.filterKey);
                    }}
                  >
                    {category.name}
                  </h5>
                ))}
              </Accordion>
              {/* Giá tiền */}

              <Accordion
                className="filter"
                expanded={isExpandPrice}
                onChange={handlExpandPrice}
              >
                <AccordionSummary
                  expandIcon={<SlArrowDown />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="filter_title"
                >
                  FILTER PRICE
                </AccordionSummary>
                {prices.map((price, i) => (
                  <h5
                    key={i}
                    className={
                      selectPrice === price.value ? "action" : "unAction"
                    }
                    onClick={() => {
                      setSelectPrice(price.value);
                      filterProductsByPrice(price.value);
                    }}
                  >
                    {price.name}
                  </h5>
                ))}
              </Accordion>

              <Accordion
                className="filter"
                expanded={isExpandSize}
                onChange={handlExpandSize}
              >
                <AccordionSummary
                  expandIcon={<SlArrowDown />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="filter_title"
                >
                  SIZE
                </AccordionSummary>
                <a href="/">XS</a>
                <a href="/">S</a>
                <a href="/">M</a>
                <a href="/">xl</a>
                <a href="/">xxl</a>
              </Accordion>

              <Accordion
                className="filter"
                expanded={isExpandColor}
                onChange={hanldExpandColor}
              >
                <AccordionSummary
                  expandIcon={<SlArrowDown />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="filter_title"
                >
                  Colors
                </AccordionSummary>
                <span className="c-1">
                  <input type="radio" />
                </span>

                <span className="c-2">
                  <input type="radio" />
                </span>

                <span className="c-3">
                  <input type="radio" />
                </span>

                <span className="c-4">
                  <input type="radio" />
                </span>

                <span className="c-5">
                  <input type="radio" />
                </span>
                <br />
                <span className="c-6">
                  <input type="radio" />
                </span>
                <span className="c-7">
                  <input type="radio" />
                </span>
                <span className="c-8">
                  <input type="radio" />
                </span>
                <span className="c-9">
                  <input type="radio" />
                </span>
              </Accordion>

              <Accordion
                className="filter"
                expanded={isExpandTags}
                onChange={handlExpandTags}
              >
                <AccordionSummary
                  expandIcon={<SlArrowDown />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="filter_title"
                >
                  TAGS
                </AccordionSummary>
                <a href="/">Product</a>
                <a href="/">Shoes</a>
                <a href="/">Hats</a>
                <a href="/">Clothing</a>
                <a href="/">Accessories</a>
                <a href="/">Fashio</a>
              </Accordion>
            </Stack>
          </Grid>

          {/* show product */}
          <Grid item lg={9}>
            <p className="title_listShop">Showing 1-12 of 126 results</p>
            <ListProducts checkShop={true} preData={preData} />
          </Grid>
        </Grid>
        <Footer />
      </Container>

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
    </StyledListProductShop>
  );
};

export default ListProductShop;
