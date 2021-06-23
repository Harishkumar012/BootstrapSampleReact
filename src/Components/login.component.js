import React, { Component} from "react";
import { Formik, Form,ErrorMessage } from "formik";
// import  { Redirect } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .required("Password is required")
  });

export default class Login extends Component {
  constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
     this.state = {
      email: '',
      password:''
    };
  }
  handleChange(e){
    this.setState({email:e.target.value})
  }
  handleChange1(e){
    this.setState({password:e.target.value})
  }
  handleFormSubmit = () => {
    // console.log(localStorage.getItem('email'));
    // console.log(localStorage.getItem('password'));
    // let history = useHistory();
    const { email, password } = this.state;
    const localemail=localStorage.getItem("email");
    const localpass=localStorage.getItem("password");
    // console.log(localemail);
    // console.log(localpass);
    // console.log(email);
    // console.log(password);
       if(email === localemail && password === localpass){
        console.log("true");
        this.setState({ redirect: true })
        this.renderRedirect();
        
        // history.push('/Dashboard');
        // return <Redirect to="/Dashboard" />;
    }
    else{
      console.log("false");
      this.setState({ redirect: false })
      this.renderRedirect1();

      // return <Redirect to="/Dashboard" />;
    }
  };
  //   handleFormSubmit = () => {
  //   const { email, password } = this.state;
  //   localStorage.setItem('email', email);
  //   localStorage.setItem('password',password);
  // };
  // LoginReq()
  // {
  //   // userData;
  //   // this.userData = JSON.parse(localStorage.getItem('user'));
  //   lemail=localStorage.getItem('email');
  //   console.log(lemail);
  //   if(localStorage.getItem('user')){
  //     return <Redirect to="/login" />;
  //   }
  //   else{
  //     return <Redirect to="/login" />;
  //   }
  // }

  // Redirection
  state = {
    redirect: false
}
// redirectHandler = () => {
//     this.setState({ redirect: true })
//     this.renderRedirect();
// }
renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/Dashboard' />
    }
    
}
renderRedirect1 = () => {
  if (this.state.redirect) {
      return <Redirect to='/sign-in' />
  }
  
}


    render() {
        return (
<div>
                <h3>Log in</h3>

                <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={({ setSubmitting }) => {
                alert("Form is validated! Submitting the form...");
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form onSubmit={this.handleFormSubmit}>{this.renderRedirect()}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Enter email"
                      className={`form-control ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange1}
                      placeholder="Enter password"
                      className={`form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                  <button type="submit" className="btn btn-dark btn-lg btn-block">Log In</button>
                  </div>
                </Form>
              )}
            </Formik>   
            </div>    );
    }
}