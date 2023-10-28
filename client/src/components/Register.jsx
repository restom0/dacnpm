import React, { useState } from "react";
import { Button, Checkbox } from "antd";

import "../css/Login_Register.css";
import Swal from "sweetalert2";
import { Col, InputGroup, Form, Row } from "react-bootstrap";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
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
      <Row style={{ padding: "5vh 20vh 5vh 20vh" }} className="justify-content-center">
        <div style={{ width: "40%", padding: "5vh", backgroundColor: "white", borderRadius: "25px" }}>
          <h3 className="text-center">ĐĂNG KÝ</h3>
          <Row className="mt-1">
            <Col><InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Họ
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Tên
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Tài khoản
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Số điện thoại hoặc email"
              />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Mật khẩu
              </InputGroup.Text>
              <Form.Control
                type="password"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Row>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  DOB
                </InputGroup.Text>
                <Form.Control
                  type="date"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Select id="disabledSelect">
                  <option selected>Giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Bạn là?
              </InputGroup.Text>
              <Form.Control
                type="text"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách cookie của chúng tôi.
" />
          </Form.Group>
          <hr />
          <Row>
            <Button type="primary" size="large">
              Đăng ký
            </Button>
          </Row>
        </div>
      </Row >
    </div >
  );
};

export default Register;
