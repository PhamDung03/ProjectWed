import { Alert, styled, Box } from "@mui/material";

export const AlertStatusSuccess = () => {
  return (
    <StyledAlertStatus>
      <Alert severity="success">This is a success Alert.</Alert>
    </StyledAlertStatus>
  );
};

export const AlertStatusError = () => {
  return (
    <StyledAlertStatus>
      <Alert severity="error">This is an error Alert.</Alert>
    </StyledAlertStatus>
  );
};

const StyledAlertStatus = styled(Box)({
  position: "fixed",
  top: 100,
  right: 0,
});
