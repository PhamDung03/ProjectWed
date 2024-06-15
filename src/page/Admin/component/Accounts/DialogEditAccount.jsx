import {
  Stack,
  Typography,
  TextField,
  styled,
  Box,
  Button,
} from "@mui/material";
import {
  apiCreateAccount,
  apiUpdateAccount,
} from "../../../../services/account";
import { useFormik } from "formik";
import { object, string } from "yup";
import { toast } from "react-toastify";

let AccountSchema = object({
  email: string().required(),
  fullName: string().required(),
  username: string().required(),
});

const DialogAdmin = (prop) => {
  const { onCloseDialog, selectedAccount, refreshAccounts } = prop;

  // Post api create account
  const onSubmitCreateAccount = (values) => {
    apiCreateAccount(values)
      .then(() => {
        onCloseDialog();
        toast.success("Thêm tài khoản mới thành công!");
      })
      .catch((err) => {
        console.log(err);
        formik.setErrors({ root: err?.response?.data?.message });
        toast.error("Thêm tài khoản mới thất bại!");
      });
  };

  // Put api update account
  const onSubmitUpdateAccount = (values) => {
    apiUpdateAccount(selectedAccount?.accountId, values)
      .then(() => {
        onCloseDialog();
        refreshAccounts();
        toast.success("Sửa tài khoản thành công!");
      })
      .catch((err) => {
        toast.error("Sửa tài khoản thất bại!");
      });
  };

  const formik = useFormik({
    initialValues: {
      email: selectedAccount?.email || "",
      fullName: selectedAccount?.fullName || "",
      username: selectedAccount?.username || "",
    },
    validationSchema: AccountSchema,
    onSubmit: selectedAccount?.accountId
      ? onSubmitUpdateAccount
      : onSubmitCreateAccount,
  });

  return (
    <StyledDialogAdmin>
      <Stack p={5} spacing={3} component="form" onSubmit={formik.handleSubmit}>
        <Typography align="center" variant="h4">
          {selectedAccount?.accountId ? "Update Account" : "Create Account"}
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          id="email"
          name="email"
          size="small"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
        />
        <TextField
          id="fullName"
          label="Full Name"
          variant="outlined"
          name="fullName"
          size="small"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={!!formik.errors.fullName}
          helperText={formik.errors.fullName}
        />
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          size="small"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={!!formik.errors.username}
          helperText={formik.errors.username}
        />
        {!selectedAccount && (
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={!!formik.errors.password}
            helperText={formik.errors.password}
          />
        )}
        {formik.errors.root && (
          <p style={{ color: "red" }}>{formik.errors.root}</p>
        )}

        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </Stack>
    </StyledDialogAdmin>
  );
};

const StyledDialogAdmin = styled(Box)({});

export default DialogAdmin;
