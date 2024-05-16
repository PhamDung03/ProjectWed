import {
  Stack,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  styled,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import { formatImg } from "../../../../utils/imgHelpers";
import {
  apiCreateProducts,
  apiGetCategories,
  apiUpdateProduct,
} from "../../../../services/product";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const DialogEditProduct = (props) => {
  const { selectdProduct, onCloseDilog, refreshProducts } = props;
  const [showcategories, setShowcategories] = useState([]);

  // post api thêm product
  const onSubmitCreateProduct = (values) => {
    apiCreateProducts(values)
      .then(
        onCloseDilog(),
        refreshProducts(),
        toast.success("Tạo sản phẩm mới thành công!")
      )
      .catch((err) => toast.error("Tạo sản phẩm mới thất bại"));
  };

  // Put api sửa product
  const onSubmitUpdateProduct = (values) => {
    apiUpdateProduct(selectdProduct?.productId, values)
      .then(() => {
        onCloseDilog();
        refreshProducts();
        toast.success("Sửa sản phẩm thành công!");
      })
      .catch(() => {
        toast.error("Sửa sản phẩm thất bại!");
      });
  };

  const formik = useFormik({
    initialValues: {
      productName: selectdProduct?.productName || "",
      productInfo: selectdProduct?.productInfo || "",
      productImage: selectdProduct?.productImage || "",
      ratingStar: selectdProduct?.ratingStar || 0,
      productPrice: selectdProduct?.productPrice || "",
    },
    onSubmit: selectdProduct ? onSubmitUpdateProduct : onSubmitCreateProduct,
  });

  useEffect(() => {
    apiGetCategories()
      .then((res) => {
        setShowcategories(res.data.data || []);
        formik.setFieldValue("categoryId", selectdProduct?.categoryId);
      })
      .catch((err) => console.log(err));
  });

  return (
    <StyledDialogEdit>
      <Stack
        spacing={3}
        p={5}
        component={"form"}
        onSubmit={formik.handleSubmit}
      >
        <Typography align="center" variant="h4">
          {selectdProduct?.productId ? "Update Product" : "Create Product"}
        </Typography>

        <TextField
          label="Product Name"
          variant="outlined"
          size="small"
          id="productName"
          name="productName"
          value={formik.values.productName}
          onChange={formik.handleChange}
          error={!!formik.errors.productName}
          helperText={formik.errors.productName}
        />

        <label htmlFor="file_img">
          <img
            src={formatImg(formik?.values.productImage)}
            alt="img"
            className="product_img"
            id="product_img_preview"
          />
        </label>

        <input
          type="file"
          id="file_img"
          onChange={(e) => {
            var reader = new FileReader();
            reader.onload = function (e) {
              let productImg = document.getElementById("product_img_preview");
              productImg.setAttribute("src", e.target.result);
            };
            reader.readAsDataURL(e.target?.files[0]);
            formik.setFieldValue("productImage", e.target?.files[0]);
          }}
        />

        <TextField
          label="Product Info"
          variant="outlined"
          size="small"
          id="productInfo"
          name="productInfo"
          value={formik?.values?.productInfo}
          onChange={formik?.handleChange}
          error={!!formik.errors.productInfo}
          helperText={formik.errors.productInfo}
        />

        <TextField
          label="Product Star"
          variant="outlined"
          size="small"
          id="ratingStar"
          name="ratingStar"
          value={formik?.values?.ratingStar}
          onChange={formik?.handleChange}
          error={!!formik.errors.ratingStar}
          helperText={formik.errors.ratingStar}
        />

        <TextField
          label="Product Price"
          variant="outlined"
          size="small"
          id="productPrice"
          name="productPrice"
          value={formik?.values?.productPrice}
          onChange={formik?.handleChange}
          error={!!formik.errors.productPrice}
          helperText={formik.errors.productPrice}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="categoryId"
            label="Categories"
            value={formik?.values?.categoryId || ""}
            onChange={formik?.handleChange}
          >
            {showcategories.length > 0 &&
              showcategories.map((category, i) => (
                <MenuItem value={category?.categoryId} key={i}>
                  {category?.categoryName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <Stack>
          <Button type="submit">Submit</Button>
        </Stack>
      </Stack>
    </StyledDialogEdit>
  );
};

const StyledDialogEdit = styled(Box)({
  ".product_img": {
    height: 100,
    width: 100,
  },
  "#file_img": {
    display: "none",
  },
});

export default DialogEditProduct;
