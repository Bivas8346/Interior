import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {

    let mainurl =
        "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";
    let mtoken = window.sessionStorage.getItem("token");

    let [main, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        profile_pic: "",
    });

    useEffect(() => {
        axios
            .get(mainurl, {
                headers: {
                    "x-access-token": mtoken,
                    Content_Type: "application/x-www-form-urlendcoded",
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.status === 200) {
                    let base_url = "https://wtsacademy.dedicateddevelopers.us/";
                    let folder_path = "uploads/user/profile_pic/";
                    let img = base_url + folder_path + res.data.data.profile_pic;
                    console.log("image -", img);

                    setUser({
                        ...main,
                        first_name: res.data.data.first_name,
                        last_name: res.data.data.last_name,
                        email: res.data.data.email,
                        profile_pic: img,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });
    return (
        <>

            <div className='profilemain'>
                <h2>Profile page</h2>
                <div className="Profile">
                    <img className='profileimg' src={main.profile_pic} width="148%" />
                    <h1 className='profileh'>{main.first_name}{main.last_name}</h1>
                    <span className='profilespan'>{main.email}</span>
                </div>
                <br/>
                    <p>Phone - 4561237892</p>
            </div>
        </>
    )
}

export default Profile