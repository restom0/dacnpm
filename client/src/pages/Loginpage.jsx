import React from "react";
import "../css/Loginpage.css";
import Login from "../components/Login";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
const Loginpage = () => {
  return (
    <div>
      <div><Container>
        <Navbar expand="lg" data-bs-theme="light" style={{ paddingTop: 0 }}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav.Link href="/"><Image src="https://s3-alpha-sig.figma.com/img/b456/6545/8b4257a23dc0e8145d1544bbbad74ae6?Expires=1699228800&Signature=G8iOiC1gJqP87c~eXYOJeIBOKqWCG4-cBzXPtI6T5Dd96LVXvD456vA49~daHRSMeLibpx7Hlf6zL-G388csqYuNmAyD3mRvVFFl25p4qYxRjzfNdLMZFS27gK9J2kiockioedv8Yy~GaeZmv00l2ZEZpX0xB~xiRhq6xakgLmmhYwVsLL06igxOZYlDA5IVSB5SDc2UsQlxiz1E8asbcILPRSqoi0dORHbUwd7ANMNPUiINo6GwGZHl3ujlKvpWC7G3wDwNxUb6iSWrYlsaflDeu5Mglplu3W3xagtht0Ato0GE7HfSRGg9~vgJoAgk~ty~u8hy54A870b8by4slQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" fluid style={{ width: "60%" }} /></Nav.Link>
              <Nav.Link className='pt-1'>ĐĂNG NHẬP</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container >
      </div>
      <div className="login">
        <div className="login-form">
          <div style={{ marginBottom: "15vh" }} className="login-form-input">
            <div className="login-form-space">
            </div >
            <Login />
          </div>
        </div>
      </div >
    </div>
  );
};

export default Loginpage;
