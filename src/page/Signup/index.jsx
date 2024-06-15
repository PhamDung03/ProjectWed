import StyledSignup from "./Signup.Styled";
import { Navbar } from "../../component";
import img5 from "../../img/img3.svg";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Container, Grid, Stack, TextField, Button } from "@mui/material";
import { object, string } from "yup";
import { useFormik } from "formik";
import { signup } from "../../services/account";
import { useNavigate } from "react-router-dom"; 

let signupSchema = object({
  email: string(),
  fullName: string()
    .required()
    .matches("^[a-zA-Z0-9_.-]*$", "Tên không hợp lệ !"),
  username: string().required(),
  password: string().required(),
});

const Signup = () => {
  const navigate = useNavigate(); 
  const onSubmitSignup = (values) => {
    signup(values)
      .then(() => {
        navigate("/login"); 
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      username: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: onSubmitSignup,
  });

  return (
    <StyledSignup>
      <Navbar />

      <Container>
        <Grid container spacing={2}>
          <Grid item className="img" lg={8}>
            <img src={img5} alt="" />
          </Grid>

          <Grid item className="Signup__content" lg={4}>
            <form onSubmit={formik.handleSubmit}>
              <h1>Create Account</h1>
              <Stack
                direction={"row"}
                className="Signup__content--icon"
                spacing={3}
                justifyContent="center"
              >
                <FaGoogle color="#DE4133" />
                <FaFacebook color="#0866FF" />
                <FaGithub color="#0D2534" />
                <FaTwitter color="#1C9CEA" />
              </Stack>
              <p>or use your email for registeration</p>

              <Stack className="Signup__content--inner" spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  size="small"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={!!formik.errors.email}
                  helperText={formik.errors.email}
                />
                <TextField
                  id="outlined-basic"
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
              </Stack>
              <Button variant="contained" type="submit">
                Sign up
              </Button>
              <h5>
                Already have an account? <Link to="/login">Login</Link>
              </h5>
            </form>
          </Grid>
        </Grid>
      </Container>
    </StyledSignup>
  );
};

export default Signup;
