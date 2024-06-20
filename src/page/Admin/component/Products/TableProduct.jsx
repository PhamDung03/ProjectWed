import {
  Stack,
  IconButton,
  InputBase,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  Box,
  Dialog,
  Rating,
  Pagination,
  Button,
  tableCellClasses,
} from "@mui/material";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { apiGetProducts } from "../../../../services/product";
import { formatImg } from "../../../../utils/imgHelpers";
import DialogEditProduct from "./DialogEdit";
import DialogDelete from "./DialogDelete";
import { PiMagnifyingGlassThin } from "react-icons/pi";

const TableProduct = () => {
  const [products, setProducts] = useState([]);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectdProduct, setSelectProduct] = useState();
  const [reloadProducts, setReloadProducts] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [total, setTotal] = useState(0);
  const [metaData, setMetaData] = useState({
    limit: 5,
    page: 1,
  });

  const [searchText, setSearchText] = useState("");

  const preData = useRef();

  // [Get] api product

  useEffect(() => {
    apiGetProducts(metaData.page, metaData.limit)
      .then((res) => {
        setProducts(res?.data?.data);
        preData.current = res?.data?.data;
        setTotal(res.data.metadata.total || 0);
      })
      .catch((err) => console.log(err));
  }, [metaData, reloadProducts]);

  const handleChangePagination = (event, value) => {
    setMetaData({ ...metaData, page: value });
  };

  const onClickEditProduct = (product) => {
    setShowEditDialog(true);
    setSelectProduct(product);
  };

  const onClickCreateProduct = () => {
    setShowEditDialog(true);
    setSelectProduct();
  };

  const onClickDeleteProduct = (product) => {
    setShowDeleteDialog(true);
    setSelectProduct(product);
  };

  const onCloseDilog = () => {
    setShowEditDialog(false);
  };

  const onCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const refreshProducts = () => {
    setReloadProducts(!reloadProducts);
  };

  const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handlSearch = (e) => {
    const searchText = removeDiacritics(e.target.value.toLowerCase());

    setSearchText(searchText);

    const newProducts = preData.current.filter((product) =>
      removeDiacritics(product.productName.toLowerCase()).includes(searchText)
    );

    setProducts(newProducts);
  };

  return (
    <StyleTableProduct>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        className="title"
        alignItems={"center"}
      >
        {/* Thanh Sreach */}
        <Box
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #e5e5e5",
            width: 400,
            height: 50,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by name..."
            value={searchText}
            onChange={handlSearch}
          />
          <IconButton type="button" sx={{ p: "10px" }}>
            <PiMagnifyingGlassThin />
          </IconButton>
        </Box>

        {/* Button Create New */}
        <Button variant="outlined" size="large" onClick={onClickCreateProduct}>
          Thêm mới
        </Button>
      </Stack>
      {/* Table Account Manager */}
      <Stack className="content">
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Info</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Star</StyledTableCell>
                <StyledTableCell align="center">Category</StyledTableCell>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, i) => (
                <StyledTableRow key={i}>
                  <TableCell>{product?.productName}</TableCell>
                  <TableCell align="center">{product?.productInfo}</TableCell>
                  <TableCell align="center">{product?.productPrice}</TableCell>
                  <TableCell align="center">
                    <Rating value={product?.ratingStar} readOnly />
                  </TableCell>
                  <TableCell align="center">{product?.categoryName}</TableCell>
                  <TableCell align="center">
                    <img
                      src={formatImg(product?.productImage)}
                      alt=""
                      className="product_img"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <MdModeEdit
                      size={20}
                      onClick={() => onClickEditProduct(product)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <MdDelete
                      size={20}
                      onClick={() => onClickDeleteProduct(product)}
                    />
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack alignItems={"center"} mt={4}>
          <Pagination
            count={Math.ceil(total / metaData.limit)}
            onChange={handleChangePagination}
            color="primary"
          />
        </Stack>
      </Stack>

      <Dialog
        open={showEditDialog}
        onClose={onCloseDilog}
        PaperProps={{ sx: { width: "100%" } }}
      >
        <DialogEditProduct
          {...{ selectdProduct, onCloseDilog, refreshProducts }}
        />
      </Dialog>

      <Dialog
        open={showDeleteDialog}
        onClose={onCloseDeleteDialog}
        PaperProps={{ sx: { width: "100%" } }}
      >
        <DialogDelete
          {...{ onCloseDeleteDialog, refreshProducts, selectdProduct }}
        />
      </Dialog>
    </StyleTableProduct>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyleTableProduct = styled(Box)({
  ".product_img": {
    width: 56,
    height: 56,
    objectFit: "cover",
  },
  ".title": {
    margin: "20px auto",
    width: "98%",
    height: 100,
    background: "#fff",
  },
  ".content": {
    width: "98%",
    height: "98%",
    margin: "20px auto",
    background: "#fff",
    paddingBottom: 20,
  },
});

export default TableProduct;
