import React from 'react';
import './Login.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let navi=useNavigate();
    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (event) => {
            console.log("data submitted", event);

            let submit = new FormData();
            submit.append("email", event.email);
            submit.append("password", event.password);

            axios
                .post(
                    "https://wtsacademy.dedicateddevelopers.us/api/user/signin",
                    submit,
                    {
                        headers: {
                            Content_Type: "application/x-www-form-urlendcoded",
                            "Access-Control-Allow-Origin": "*",
                        },
                    }
                )

                .then((res) => {
                    console.log(res);
                    if (res.data.status === 200) alert("log-in succesful");
                    else alert("log-in fail" + res.data.message);

                    window.sessionStorage.setItem("token", res.data.token);
                    navi("/");
                })
                .catch((err) => {
                    console.log(err);
                    alert("Not log-in");
                });
        },
    });
    return (
        <>
            <div className="cover">
                <div className="form-ui">
                    <form method="post" action="" className="forml" onSubmit={formik.handleSubmit}>

                        <div className="form-body">
                            <div className="welcome-lines">
                                <div className="w-line-1"><img src='../../../../Assats/Blog/logof.png' width={200}/></div>
                                <div className="w-line-2">Log in Here </div>
                            </div>
                            <div className="input-area">
                                <div className="f-inp">
                                    <input type="email" name='email' placeholder="Email Address" className='inputl'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="f-inp">
                                    <input type="password" name='password'  placeholder="Password" className='inputl'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="submit-button-cvr">
                                <button type="submit" className="submit-button">LOGIN</button>
                            </div>
                            <div className="forgot-pass">
                                <Link to={"/reg"} className='al'>I Dont Have Any Account</Link>
                            </div>
                        </div>
                    </form>
                    <div className="img-box">
                        <img src="../../../../Assats/home1/card2.jpg" alt="UI Image" className='imgl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login