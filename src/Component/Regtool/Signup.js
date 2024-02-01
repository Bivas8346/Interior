import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import './Singup.css'

const formValidate = (formValue) => {
    let errors = {};
    // let emailValidate = /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/;
    // let passwordValidate = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{4,5}$/;

    if (!formValue.fname) {
        errors.fname = "enter first name";
    }
    if (!formValue.lname) {
        errors.lname = "enter last name";
    }
    if (!formValue.email) {
        errors.email = "enter your email";
    }
    // if (!formValue.email) {
    //   errors.email = "enter your email";
    // } else if (!emailValidate.test(formValue.email)) {
    //   errors.email = "wrng type";
    // }
    // if (!formValue.password) {
    //   errors.email = "enter your password";
    // } else if (!passwordValidate.test(formValue.password)) {
    //   errors.email = "wrong type";
    // }
    console.log("Errors: ", errors);
    return errors;
};
const Signup = () => {

    let formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            password: "",
            profile_pic: "",
        },
        validate: formValidate,
        onSubmit: (event) => {
            console.log("submited data:", event);

            let submit = new FormData();
            submit.append("first_name", event.fname);
            submit.append("last_name", event.lname);
            submit.append("email", event.email);
            submit.append("password", event.password);
            submit.append("profile_pic", event.profile_pic);

            axios
                .post(
                    "https://wtsacademy.dedicateddevelopers.us/api/user/signup",
                    submit,
                    {
                        headers: {
                            Content_Type: "application/x-www-form-urlendcoded",
                            "Access-Control-Allow-Origin": "*",
                        },
                    }
                )

                .then((resp) => {
                    console.log(resp);
                    if (resp.data.status === 200) alert("submitted succesfuly");
                    else alert("submit fail" + resp.data.message);
                })
                .catch((err) => {
                    console.log(err);
                    alert("not submitted");
                });
        },
    });



    return (
        <>
            <div className="login-box">
                <form onSubmit={formik.handleSubmit} className="left-box">
                    <h1 className="lefth"> Sign Up </h1>
                    <input
                        type="text"
                        name="fname"
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="First Name"
                        className="lefti"
                    />
                    <br />
                    {formik.touched.fname && formik.errors.fname ? (
                        <span>{formik.errors.fname}</span>
                    ) : (
                        ""
                    )}
                    <input
                        type="text"
                        name="lname"
                        value={formik.values.lname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Last Name"
                        className="lefti"
                    />
                    <br />
                    {formik.touched.lname && formik.errors.lname ? (
                        <span>{formik.errors.lname}</span>
                    ) : (
                        ""
                    )}
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Email"
                        className="lefti"
                    />
                    <br />
                    {formik.touched.email && formik.errors.email ? (
                        <span>{formik.errors.email}</span>
                    ) : (
                        ""
                    )}
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Password"
                        className="lefti"
                    />
                    <br />
                    {formik.touched.password && formik.errors.password ? (
                        <span>{formik.errors.password}</span>
                    ) : (
                        ""
                    )}
                    <label>Profile Picture</label>
                    <input
                        type="file"
                        name="profile_pic"
                        onChange={(event) =>
                            formik.setFieldValue("profile_pic", event.target.files[0])
                        }
                        onBlur={formik.handleBlur}
                        className="lefti"
                    />
                    <br />
                    {formik.touched.profile_pic && formik.errors.profile_pic ? (
                        <span>{formik.errors.profile_pic}</span>
                    ) : (
                        ""
                    )}
                    <br />
                    <button type="submit" disabled={!(formik.dirty && formik.isValid)} className="leftb">
                        Submit
                    </button>
                </form>
            </div>
            <div className="right-box">
                <span className="signinwith">Sign in with<br />Social Network </span>
                <button className="social facebook">Log in with Facebook</button>
                <button className="social twitter">Log in with Twitter</button>
                <button className="social google">Log in with Google+</button>

            </div>
            <div className="or">OR</div>
        </>
    )
};

export default Signup