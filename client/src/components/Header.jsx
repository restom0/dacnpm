import React, { useState } from 'react'
import { Form, Image, InputGroup, Modal, NavDropdown } from 'react-bootstrap';
import { Button } from "antd";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Swal from 'sweetalert2';
const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    const login = () => {
        window.location.replace("/loginfilter")
    }
    const logout = () => {
        Swal.fire({
            icon: "question",
            title: "Bạn muốn đăng xuất ?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Đăng xuất",
            denyButtonText: `Hủy`,
        }).then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: "success",
                    title: "Đăng xuất thành công",
                }).then(() => {
                    localStorage.removeItem('apitoken');
                    localStorage.removeItem('username');
                    window.location.reload();
                });
            } else if (result.isDenied) {
            }
        });

    }
    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Username
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={localStorage.getItem('username')}
                            readOnly
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" >
                            API
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={localStorage.getItem('apitoken')}
                            readOnly
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Navbar expand="lg" data-bs-theme="light" style={{ paddingTop: 0 }}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        {localStorage.getItem('apitoken') ?
                            <Nav className="me-auto" >
                                <Nav.Link href="/"><Image src="https://s3-alpha-sig.figma.com/img/b456/6545/8b4257a23dc0e8145d1544bbbad74ae6?Expires=1699228800&Signature=G8iOiC1gJqP87c~eXYOJeIBOKqWCG4-cBzXPtI6T5Dd96LVXvD456vA49~daHRSMeLibpx7Hlf6zL-G388csqYuNmAyD3mRvVFFl25p4qYxRjzfNdLMZFS27gK9J2kiockioedv8Yy~GaeZmv00l2ZEZpX0xB~xiRhq6xakgLmmhYwVsLL06igxOZYlDA5IVSB5SDc2UsQlxiz1E8asbcILPRSqoi0dORHbUwd7ANMNPUiINo6GwGZHl3ujlKvpWC7G3wDwNxUb6iSWrYlsaflDeu5Mglplu3W3xagtht0Ato0GE7HfSRGg9~vgJoAgk~ty~u8hy54A870b8by4slQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" fluid style={{ width: "60%" }} /></Nav.Link>
                                <Nav.Link href="/" className='pt-4'>Trang chủ</Nav.Link>
                                <Nav.Link href="/" className='pt-4'>Giới thiệu</Nav.Link>
                                <Nav.Link href="/course" className='pt-4'>Khóa học</Nav.Link>
                                <Nav.Link href="/contact" className='pt-4'>Liên hệ</Nav.Link>
                                {
                                    localStorage.getItem("idRole") === 1 ?
                                        <Nav.Link href="/mycourse" className='pt-4'>Khóa học của tôi</Nav.Link> :
                                        <Nav.Link href="/mycourse" className='pt-4'>Lớp học của tôi</Nav.Link>
                                }

                                <Nav.Link href="/mypage" className='pt-4'>Trang của tôi</Nav.Link></Nav>
                            :
                            <Nav className="me-auto" >
                                <Nav.Link href="/"><Image src="https://s3-alpha-sig.figma.com/img/b456/6545/8b4257a23dc0e8145d1544bbbad74ae6?Expires=1699228800&Signature=G8iOiC1gJqP87c~eXYOJeIBOKqWCG4-cBzXPtI6T5Dd96LVXvD456vA49~daHRSMeLibpx7Hlf6zL-G388csqYuNmAyD3mRvVFFl25p4qYxRjzfNdLMZFS27gK9J2kiockioedv8Yy~GaeZmv00l2ZEZpX0xB~xiRhq6xakgLmmhYwVsLL06igxOZYlDA5IVSB5SDc2UsQlxiz1E8asbcILPRSqoi0dORHbUwd7ANMNPUiINo6GwGZHl3ujlKvpWC7G3wDwNxUb6iSWrYlsaflDeu5Mglplu3W3xagtht0Ato0GE7HfSRGg9~vgJoAgk~ty~u8hy54A870b8by4slQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" fluid style={{ width: "60%" }} /></Nav.Link>
                                <Nav.Link href="/" className='pt-4'>Trang chủ</Nav.Link>
                                <Nav.Link href="/" className='pt-4'>Giới thiệu</Nav.Link>
                                <Nav.Link href="/course" className='pt-4'>Khóa học</Nav.Link>
                                <Nav.Link href="/contact" className='pt-4'>Liên hệ</Nav.Link>
                            </Nav>

                        }
                        {localStorage.getItem('apitoken') ?
                            <Nav className="d-flex">
                                <Nav.Item className="pt-4 me-3" >
                                    <box-icon name='search-alt-2' ></box-icon>
                                </Nav.Item>
                                <Nav.Item className="pt-4 me-3" >
                                    <box-icon name='bell' ></box-icon>
                                </Nav.Item>
                                <Nav.Item className="pt-4 me-2" >
                                    <box-icon name='message-rounded' ></box-icon>
                                </Nav.Item>
                                <NavDropdown title={<box-icon name='user-circle'></box-icon>} className='pt-3' id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={() => (
                                        localStorage.getItem('apitoken') ? handleShow() : window.location.replace("/login")
                                    )}>Tài khoản</NavDropdown.Item >
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            :
                            <Nav className="d-flex">
                                <Nav.Item className="pt-1 me-3" >
                                    <box-icon name='search-alt-2' ></box-icon>
                                </Nav.Item>
                                <Nav.Item>
                                    <Button className="me-3" loading={loadings[1]} onClick={() => { enterLoading(1) }}>Đăng ký</Button>
                                </Nav.Item>
                                <Nav.Item>
                                    <Button loading={loadings[2]} onClick={() => { login(); enterLoading(2) }}>Đăng nhập</Button>
                                </Nav.Item>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header