import { Navbar } from "../../component";
import { Grid, Typography, Stack } from "@mui/material";
import { AiFillShop } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { useState } from "react";
import TableAdmin from "./component/Accounts/TableAccount";
import TableProduct from "./component/Products/TableProduct";
import { useUser } from "../../providers/user-provider";
import { Navigate } from "react-router-dom";
const tabs = [
  {
    value: 0,
    name: "User Manager",
    icon: <AiFillShop />,
  },
  {
    value: 1,
    name: "Product Manager",
    icon: <GrUserManager />,
  },
];

const Admin = () => {
  const [select, setSelect] = useState(0);
  const { user } = useUser();

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  const Content = () => {
    switch (select) {
      case 0:
        return <TableAdmin />;
      case 1:
        return <TableProduct />;
      default:
        break;
    }
  };
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid lg={2} item>
          {tabs.map((tab) => (
            <Stack
              direction={"row"}
              spacing={4}
              mt={2}
              p={2}
              key={tab.value}
              sx={{
                backgroundColor: select === tab.value ? "#ddd" : "#fff",
              }}
              onClick={() => {
                setSelect(tab.value);
              }}
            >
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          ))}
        </Grid>

        <Grid lg={10} item backgroundColor={"#E6ECF3"}>
          <Content />
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;
