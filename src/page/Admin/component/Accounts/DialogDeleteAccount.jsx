import { Stack, Button, styled, Box } from "@mui/material";
import { apiDeleteAccount } from "../../../../services/account";
const DialogDelete = (props) => {
  const { onCloseDeleteDialog, selectedAccount, refreshAccounts } = props;
  const onSubmitDelete = () => {
    apiDeleteAccount(selectedAccount?.accountId)
      .then(onCloseDeleteDialog(), refreshAccounts())
      .catch((err) => console.log(err));
  };

  return (
    <StyledDialogDelete>
      <Stack className="dialog_title" justifyContent={"center"}>
        <h1 style={{ textAlign: "center" }}>
          Are you sure you want to delete this element ?
        </h1>
      </Stack>
      <Stack>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <CustomButtonDelete
            variant="contained"
            type="submit"
            onClick={onSubmitDelete}
          >
            Yes
          </CustomButtonDelete>

          <CustomButtonClose onClick={() => onCloseDeleteDialog()}>
            No
          </CustomButtonClose>
        </Stack>
      </Stack>
    </StyledDialogDelete>
  );
};

const StyledDialogDelete = styled(Box)({
  height: 240,
  ".dialog_title": {
    height: "75%",
    h1: {
      fontSize: 24,
      color: "#000",
    },
  },
});

const CustomButtonDelete = styled(Button)({
  backgroundColor: "#FC716A",
  width: "50%",
  borderRadius: 0,
  height: "60px",
  "&:hover": {
    backgroundColor: "#C54C40",
  },
  fontSize: 20,
});

const CustomButtonClose = styled(Button)({
  backgroundColor: "#B7BED0",
  borderRadius: 0,
  width: "50%",
  "&:hover": {
    backgroundColor: "#59adbc",
  },
  color: "#fff",
  fontSize: 20,
});

export default DialogDelete;
