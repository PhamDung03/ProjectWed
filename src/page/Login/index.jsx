import { Navbar } from "../../component";
import StyledLogin from "./Login.Styled";
import { Container, Button, TextField, Stack, Grid } from "@mui/material";
import img2 from "../../img/img3.svg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import { login } from "../../services/account";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../providers/user-provider";

let loginSchema = object({
  username: string().required(),
  password: string().required(),
});

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const onSubmitLogin = (values) => {
    login(values)
      .then((res) => {
        console.log(res);
        navigate("/");
        setUser({name: "PD"});
      })
      .catch((err) => {
        formik.setErrors({ root: err?.response?.data?.msg });
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: onSubmitLogin,
  });

  return (
    <StyledLogin>
      <Navbar />

      <Container>
        <Grid container spacing={2}>
          <Grid item className="img" lg={8}>
            <img src={img2} alt="" />
          </Grid>

          <Grid item className="Login__content" lg={4}>
            <form onSubmit={formik.handleSubmit}>
              <h1>Login</h1>
              <h2>Hello, Friends!</h2>
              <p>Enter your personal detail and start journey with us.</p>
              <Stack className="Login__content--inner" spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  size="small"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={!!formik.errors.username}
                  helperText={formik.errors.username}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  size="small"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={!!formik.errors.password}
                  helperText={formik.errors.password}
                />

                {/* Text error for form  */}
                {formik.errors.root && (
                  <p style={{ color: "red" }}>{formik.errors.root}</p>
                )}

                <a href="/">Forgot password / Username</a>
              </Stack>
              <Button variant="contained" type="submit">
                Login
              </Button>
              <h5>
                Not a member ? <Link to="/signup">Create Account</Link>
              </h5>
            </form>
          </Grid>
        </Grid>
      </Container>
    </StyledLogin>
  );
};

export default Login;
