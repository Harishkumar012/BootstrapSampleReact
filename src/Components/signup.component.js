import React, { Component} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import  { Redirect } from 'react-router-dom'
import * as Yup from "yup";
// import { string } from "yup/lib/locale";
// import { getDefaultNormalizer } from "@testing-library/react";

// const App = () => {

//     const [email, setName] = useState('');
//     const [pwd, setPwd] = useState('');
 
//     const handle = () => {
//        localStorage.setItem('email', email);
//        localStorage.setItem('Password', pwd);
//     };
// }
// const [name, setName] = useState('');
// const [pwd, setPwd] = useState('');

// const handle = () => {
//    localStorage.setItem('Name', name);
//    localStorage.setItem('Password', pwd);
// };
const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .required("Password is required"),
    firstname:Yup.string()
    .required("Firstname is required"),
    lastname:Yup.string()
    .required("Lastname is required")
  });

  
//   handleFormSubmit = () => {
//     const { email, password } = this.state;
//     localStorage.setItem('email', email);
//     localStorage.setItem('password',password);
//   };
// componentDidMount() {
//     const { email, password } = this.state;
//        localStorage.setItem('email', email);
//         localStorage.setItem('password',password);
//   }

export default class SignUp extends Component {
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
    const { email, password } = this.state;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // return <Redirect to={"/sign-in"} />
    // return <Redirect to='/sign-in'  />
  };
  // handleFormSubmit(e){
  //   e.preventDefault()
  //   // this.setState({
  //   //   email:'',
  //   //   password:''
  //   // })
  // }
  // componentDidMount()
  // {
  //   this.userData = JSON.parse(localStorage.getItem('user'));
  //   if(localStorage.getItem('user')){
  //     this.setState({
  //       email:this.userData.email,
  //       password:this.userData.password
  //     })
  //   }
  //   else{
  //     this.setState({
  //       email:'',
  //       password:''
  //     })
  //   }
  // }
  // componentWillUpdate(nextProps,nextState){
  //   localStorage.setItem('user',JSON.stringify(nextState));
  // }

    // useEffect(() => {
    //     window.localStorage.setItem('email', email);
    //   }, []);
    // componentDidMount() {
    // const { email, password } = this.state;
    //    localStorage.setItem('email', email);
    //     localStorage.setItem('password',password);
    // }
    // const App = () => {

    //     const [name, setName] = useState('');
    //     const [pwd, setPwd] = useState('');
     
    //     const handle = () => {
    //        localStorage.setItem('Name', name);
    //        localStorage.setItem('Password', pwd);
    //     };
    //     const remove = () => {
    //        localStorage.removeItem('Name');
    //        localStorage.removeItem('Password');
    //     };
    // handleFormSubmit = () => {};
    // state = {
    //   email: '',
    //   password:''
    // };
    // handleChange = (event) => {
    //   const input = event.target;
    //   const value = input.value;
   
    //   // this.setState({ [input.email]: value});
    // };
    
    render() {

        return (
            <Formik
            initialValues={{ email: "", password: "" ,firstname:"",lastname:""}}
            validationSchema={LoginSchema}
            onSubmit={({ setSubmitting }) => {
              alert("Form is validated! Submitting the form...");
              setSubmitting(false);
            }}
          >
              
              {({ touched, errors, isSubmitting }) => (
            <Form onSubmit={this.handleFormSubmit} action="/sign-in">
                <h3>Register</h3>

                <div className="form-group">
                    {/* <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" /> */}
                    <label htmlFor="firstname">First name</label>
                    <Field
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      className={`form-control ${
                        touched.firstname && errors.firstname ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="firstname"
                      className="invalid-feedback"
                    />
                </div>

                <div className="form-group">
                    {/* <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" /> */}
                    <label htmlFor="lastname">Last name</label>
                    <Field
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                      className={`form-control ${
                        touched.lastname && errors.lastname ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="lastname"
                      className="invalid-feedback"
                    />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      value={this.state.email}
                      placeholder="Enter email"
                      onChange={this.handleChange}
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
                    <Field
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
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">log in?</a>
                </p>
            </Form>)
            }
            </Formik>
        );

    }

}