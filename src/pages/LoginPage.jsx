import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MIN_CHAR_PASSWORD_VALIDATION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { apiLogin } from "../redux/auth/authSlice";

const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Your password must be greater than ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
    ),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Login user</h2>
          <label>
            <span>Email:</span>
            <br />
            <Field type="email" name="email" placeholder="jorik@i.ua" />
            <ErrorMessage component="p" name="email" />
          </label>{" "}
          <br />
          <label>
            <span>Password:</span>
            <br />
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage component="p" name="password" />
          </label>
          <br />
          <button type="submit">▶ Create new user</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
