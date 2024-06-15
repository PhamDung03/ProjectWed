import Product from "./Product";
import { Grid, Stack, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetProducts } from "../services/product";
import StyledListProducts from "./ListProducts.styled";
import { useUser } from "../providers/user-provider";
const ListProducts = (props) => {
  const [total, setTotal] = useState(0);
  const { checkShop } = props;
  const { product, setProduct, preData } = useUser();

  const [metaData, setMetaData] = useState({
    limit: checkShop ? 6 : 8,
    page: 1,
  });

  useEffect(() => {
    apiGetProducts(metaData.page, metaData.limit)
      .then((res) => {
        setProduct(res?.data?.data);
        preData.current = res?.data?.data;
        setTotal(res?.data?.metadata?.total || 0);
      })
      .catch((err) => console.log(err));
  }, [metaData]);

  const handleChangePagination = (e, value) => {
    setMetaData({ ...metaData, page: value });
  };

  const productRender = checkShop ? product : product.slice(0, 9);

  return (
    <StyledListProducts>
      <Grid container>
        {productRender.map((p, i) => (
          <Grid item sm={3} md={checkShop ? 4 : 3} xs={6} key={i}>
            <Product product={p} />
          </Grid>
        ))}
      </Grid>

      {checkShop && (
        <Stack mt={4} alignItems={"center"}>
          <Pagination
            count={Math.ceil(total / metaData.limit)}
            onChange={handleChangePagination}
            color="primary"
          />
        </Stack>
      )}
    </StyledListProducts>
  );
};

export default ListProducts;
