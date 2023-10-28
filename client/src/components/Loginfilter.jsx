import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import 'boxicons'

import "../css/Login_Register.css";
import Swal from "sweetalert2";
import { Col, Row } from "react-bootstrap";

const onFinish = (values) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

const Loginfilter = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loadings, setLoadings] = useState([]);

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 1500);
    };
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    const login = () => {
        var data = new URLSearchParams();
        data.append("username", username);
        data.append("userpassword", password);
        fetch("http://localhost:3000/user/login?" + data, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.check === true) {
                    Toast.fire({
                        icon: "success",
                        title: "Đăng nhập thành công",
                    }).then(() => {
                        localStorage.setItem("username", username);
                        localStorage.setItem("apitoken", res.apitoken);
                        localStorage.setItem("idRole", res.idRole);
                        window.location.replace("/todo_1_account");
                    });
                } else {
                    Toast.fire({
                        icon: "error",
                        title: res.error,
                    });
                }
            });
    };
    const changepage = (idRole) => {
        localStorage.setItem("idRole", idRole);
        window.location.replace("/login");
    }
    return (
        <div>
            <Row style={{ padding: "17vh" }} className="justify-content-center">
                <div style={{ width: "30%", padding: "5vh", backgroundColor: "white", borderRadius: "25px" }}>
                    <p className="text-center">ĐĂNG NHẬP DÀNH CHO</p>
                    <Button className="mt-4" onClick={() => changepage(1)} size="large" block>Học viên</Button>
                    <Button className="mt-4" onClick={() => changepage(2)} size="large" block>Giáo viên</Button>
                    <Button className="mt-4" onClick={() => changepage(3)} size="large" block>Nhân viên</Button>
                    <Button className="mt-4" onClick={() => changepage(4)} size="large" block>Quản trị viên</Button>
                    <br />
                    <br />
                    <hr />
                </div>
            </Row >
        </div >
    );
};

export default Loginfilter;
