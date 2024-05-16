import StyledDialog from "./Dialog.Styled";
import { Stack, Input } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
const Dialog = () => {
  return (
    <StyledDialog>
      <Stack className="wrapper" p={4}>
        <Stack className="content_box" p={3}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            className="content_box-title"
          >
            <h3>Create Account</h3>
            <span>
              <AiOutlineClose />
            </span>
          </Stack>
          <Stack>
            <Input label="Email:" placeholder="input Email" />

            <Input label="UserName:" placeholder="input UserName" />

            <Input label="FullName:" placeholder="input FullName" />
          </Stack>
        </Stack>
      </Stack>
    </StyledDialog>
  );
};

export default Dialog;
