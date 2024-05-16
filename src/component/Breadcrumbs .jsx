import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { FaHome } from "react-icons/fa";
import { MdGrain } from "react-icons/md";
import { Stack, Container, Box, styled } from "@mui/material";
const Breadcrumbs = () => {
  return (
    <StyledBreadcrumbs>
      <Container maxWidth="lg">
        <Stack direction={"row"}>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
          >
            <FaHome sx={{ mr: 6 }} fontSize="inherit" />
            Home/
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <MdGrain sx={{ mr: 8 }} fontSize="inherit" />
            Products
          </Typography>
        </Stack>
      </Container>
    </StyledBreadcrumbs>
  );
};

const StyledBreadcrumbs = styled(Box)({
  margin: 10,
});

export default Breadcrumbs;
