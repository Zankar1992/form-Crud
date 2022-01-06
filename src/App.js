import { useFormik } from 'formik';
import * as Yup from 'yup';
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const validationSchema = Yup.object({
    fullname: Yup
      .string()
      .required("Fullname is required"),
    username: Yup
      .string()
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters')
      .required('Username is required'),
    email: Yup
      .string()
      .email('email is invalid')
      .required('Email is required'),
    password: Yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
      .required('Password is required'),
    confirmpassword: Yup
      .string()
      .oneOf([Yup.ref('password'), null], 'confirm password does not match')
      .required('Confirm password is required'),
    acceptTerms: Yup
      .bool()
      .oneOf([true], 'Accept Terms is required')
      .required('Accept Terms is required'),
  });

  // console.log(validationSchema)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      acceptTerms: false,
    },
    validationSchema,
    onSubmit: (data) => {
      alert(JSON.stringify(data, null, 2))
      // console.log(JSON.stringify(data, null, 2))      //console ma msg show karse
    }
  })

  return (
    <>
      <div className="register-form">
        <h1>Hook Validation Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Full Name</label><br />
            <input
              type="text"
              name="fullname"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.fullname}
            />
            <div className="text-danger">
              {formik.errors.fullname ? formik.errors.fullname
                : null
              }
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label><br />
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <div className="text-danger">
              {formik.errors.username ? formik.errors.username
                : null
              }
            </div>
          </div>
          <div className="form-group">
            <label>Email</label><br />
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className="text-danger">
              {formik.errors.email ? formik.errors.email
                : null
              }
            </div>
          </div>

          <div className="form-group">
            <label>Password</label><br />
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="text-danger">
              {formik.errors.password ? formik.errors.password
                : null
              }
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label><br />
            <input
              type="password"
              name="confirmpassword"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />
            <div className="text-danger">
              {formik.errors.confirmpassword ? formik.errors.confirmpassword
                : null
              }
            </div>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              name="acceptTerms"
              className="form-check-label"
              onChange={formik.handleChange}
              value={formik.values.acceptTerms}
            /> &nbsp;
            <label>I have read and agree to the Terms</label>
            <div className="text-danger">
              {formik.errors.acceptTerms ? formik.errors.acceptTerms
                : null
              }
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Register
            </button> &nbsp; &nbsp;
            <button
              type="button"
              className="btn btn-warning float-right"
              onClick={formik.handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App;
