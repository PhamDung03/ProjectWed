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
  Pagination,
  Dialog,
  Box,
  Button,
  styled,
  tableCellClasses,
} from "@mui/material";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { apiGetAccounts } from "../../../../services/account";
import DialogAdmin from "./DialogEditAccount";
import { AlertStatusSuccess } from "../../../../component";
import DialogDelete from "./DialogDeleteAccount";
import StyledTableAccount from "./TableAccount.Styled";
import { PiMagnifyingGlassThin } from "react-icons/pi";

const TableAdmin = () => {
  const [accounts, setAccounts] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState();
  const [metaData, setMetaData] = useState({
    limit: 5,
    page: 1,
  });
  const [reloadAccounts, setReloadAccounts] = useState(false);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState("");
  const preData = useRef();

  // api create account
  useEffect(() => {
    apiGetAccounts(metaData.page, metaData.limit)
      .then((res) => {
        setAccounts(res?.data?.data);
        preData.current = res?.data?.data;
        setTotal(res.data.metadata.total || 0);
      })
      .catch((err) => console.log(err));
  }, [metaData, reloadAccounts]);

  const onClickDeleteAccount = (account) => {
    setShowDeleteDialog(true);
    setSelectedAccount(account);
  };

  // xử lý chuyển trang
  const handleChangePagination = (event, value) => {
    setMetaData({ ...metaData, page: value });
  };

  // Button Create Account
  const onClickCreateAccount = () => {
    setShowEditDialog(true);
    setSelectedAccount();
  };

  // Button Update Account
  const onClickUpdateAccount = (account) => {
    setShowEditDialog(true);
    setSelectedAccount(account);
  };
  // Button Close Account
  const onCloseDialog = () => {
    setShowEditDialog(false);
  };

  const onCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const Successed = () => {
    setOpenAlert(true);
  };

  const refreshAccounts = () => {
    setReloadAccounts(!reloadAccounts);
  };

  // Hàm sreach
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const newAccounts = preData.current.filter((account) =>
      account.email.toLowerCase().includes(e.target.value)
    );
    setAccounts(newAccounts);
  };

  return (
    <StyledTableAccount>
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
            placeholder="Search by email..."
            value={searchText}
            onChange={handleSearch}
          />
          <IconButton type="button" sx={{ p: "10px" }}>
            <PiMagnifyingGlassThin />
          </IconButton>
        </Box>

        {/* Button Create New */}
        <Button variant="outlined" size="large" onClick={onClickCreateAccount}>
          Thêm mới
        </Button>
      </Stack>

      {/* Table Account Manager */}
      <Stack className="content">
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell align="center">FullName</StyledTableCell>
                <StyledTableCell align="center">UserName</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account, i) => (
                <StyledTableRow key={i}>
                  <TableCell>{account.email}</TableCell>
                  <TableCell align="center">{account.fullName}</TableCell>
                  <TableCell align="center">{account.username}</TableCell>
                  <TableCell align="center">
                    <MdModeEdit
                      size={20}
                      onClick={() => onClickUpdateAccount(account)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <MdDelete
                      size={20}
                      onClick={() => onClickDeleteAccount(account)}
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

      {/* Dialog Edit */}
      <Dialog
        open={showEditDialog}
        onClose={onCloseDialog}
        PaperProps={{ sx: { width: "100%" } }}
      >
        <DialogAdmin
          {...{ onCloseDialog, Successed, selectedAccount, refreshAccounts }}
        />
      </Dialog>

      <Dialog
        open={showDeleteDialog}
        onClose={onCloseDeleteDialog}
        PaperProps={{ sx: { width: "100%" } }}
      >
        <DialogDelete
          {...{ onCloseDeleteDialog, selectedAccount, refreshAccounts }}
        />
      </Dialog>

      {/* Notification */}
      {openAlert && <AlertStatusSuccess />}
    </StyledTableAccount>
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

export default TableAdmin;
