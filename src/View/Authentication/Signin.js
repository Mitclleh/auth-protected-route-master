import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import login from "../../api/auth" ;
function Signin() {

  
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required")
  });


  







  let history = useHistory();
  history.push('/home')
const loginSubmitted = (val)=> {
  if(val === true){
    console.log(val)
    localStorage.setItem('isAuthenticated',true)
    
   history.push('/home')

 
}
}
  



  return (
   
    <>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={async (values) => {
      return  login(values).then((val) => loginSubmitted(val));
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <label>
              Email: <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>
            <label>
              Password:
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  </>
  );
}

export default Signin;
