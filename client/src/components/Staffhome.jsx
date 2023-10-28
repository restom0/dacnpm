import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { Col, Container, Image, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';

const { Header, Sider, Content } = Layout;

const Staffhome = () => {
    const [collapsed, setCollapsed] = useState(false);
    const items = [
        {
            key: 'g1',
            label: 'QUẢN LÝ HỌC VIÊN',
            children: [
                { key: '1', href: "/staffinfo", icon: <box-icon type='solid' name='edit'></box-icon>, label: 'Thông tin học viên' },
                { key: '2', href: "/attend", icon: <box-icon type='solid' name='edit'></box-icon>, label: 'Điểm danh hằng ngày' },
                { key: '3', href: "/mark", icon: <box-icon type='solid' name='edit'></box-icon>, label: 'Điểm của học viên' },
                { key: '4', href: "/cashin", icon: <box-icon type='solid' name='edit'></box-icon>, label: 'Học phí và học bổng' },
            ],
            type: 'group',
        },
        {
            key: 'g2',
            label: 'QUẢN LÝ GIẢNG VIÊN',
            children: [
                { key: '5', href: "/staffinfo", icon: <box-icon type='solid' name='edit'></box-icon>, label: 'Thông tin giảng viên' },
                { key: '6', href: "/attend", icon: <box-icon type='solid' name='edit'></box-icon>, label: 'Chấm công' },
                { key: '7', href: "/rate", icon: <box-icon type='solid' name='edit'></box-icon>, label: 'Đánh giá giảng viên' },
                { key: '8', href: "/cashin", icon: <box-icon type='solid' name='edit'></box-icon>, label: 'Lương và thưởng' },
                { key: '9', href: "/file", icon: <box-icon type='solid' name='edit'></box-icon>, label: 'Tài liệu' },
            ],
            type: 'group',
        },
    ];
    const changepage = (key) => {
        items.map((item) => {
            item.children.map((child) => {
                if (child.key === key) {
                    if (item.key === 'g1') localStorage.setItem("manageIdRole", 1)
                    else localStorage.setItem("manageIdRole", 2)
                    window.location.replace(child.href);
                }
            })
        })
    }
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
                <div className="demo-logo-vertical" />
                <div className='justify-content-center text-center' style={{ width: "100%", height: "64px", backgroundColor: "white" }}>
                    <Image style={{ height: "64px" }} src="https://s3-alpha-sig.figma.com/img/b456/6545/8b4257a23dc0e8145d1544bbbad74ae6?Expires=1699228800&Signature=G8iOiC1gJqP87c~eXYOJeIBOKqWCG4-cBzXPtI6T5Dd96LVXvD456vA49~daHRSMeLibpx7Hlf6zL-G388csqYuNmAyD3mRvVFFl25p4qYxRjzfNdLMZFS27gK9J2kiockioedv8Yy~GaeZmv00l2ZEZpX0xB~xiRhq6xakgLmmhYwVsLL06igxOZYlDA5IVSB5SDc2UsQlxiz1E8asbcILPRSqoi0dORHbUwd7ANMNPUiINo6GwGZHl3ujlKvpWC7G3wDwNxUb6iSWrYlsaflDeu5Mglplu3W3xagtht0Ato0GE7HfSRGg9~vgJoAgk~ty~u8hy54A870b8by4slQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" fluid />
                </div>
                <Menu
                    mode="inline"
                    items={items}
                    inlineCollapsed={collapsed}
                    onClick={(item) => changepage(item.key)}
                >
                </Menu>
            </Sider>
            <Layout theme="light" style={{ padding: 0, height: "83vh" }}>
                <Navbar expand="lg" data-bs-theme="light" style={{ paddingTop: 0, backgroundColor: "#3C8DBC" }}>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="me-auto" >
                                <Button
                                    type="text"
                                    icon={collapsed ? <MenuUnfoldOutlined style={{ color: "white" }} /> : <MenuFoldOutlined style={{ color: "white" }} />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: '16px',
                                        width: 64,
                                        height: 64,
                                    }}
                                />
                            </Nav>
                            <Nav className="d-flex" theme="light">
                                <Nav.Item className="pt-4 me-3" >
                                    <box-icon name='search-alt-2' color="#ffffff" ></box-icon>
                                </Nav.Item>
                                <Nav.Item className="pt-4 me-3" >
                                    <box-icon name='bell' color="#ffffff" ></box-icon>
                                </Nav.Item>
                                <Nav.Item className="pt-4 me-2" >
                                    <box-icon name='message-rounded' color="#ffffff" ></box-icon>
                                </Nav.Item>
                                <NavDropdown title={<box-icon name='user-circle' color="#ffffff"></box-icon>} className='pt-3' id="basic-nav-dropdown">
                                    {/* <NavDropdown.Item onClick={() => (
                                        localStorage.getItem('apitoken') ? handleShow() : window.location.replace("/login")
                                    )}>Tài khoản</NavDropdown.Item >
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item> */}
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='ms-5 mt-5'>
                    <h5>CÔNG TÁC QUẢN LÝ HỌC VIÊN VÀ GIẢNG VIÊN</h5>
                    <Row className='mt-5'>
                        <Col>
                            <p className='text-center' style={{ fontSize: "18pt" }}>Số lượng học viên</p>
                            <p className='text-center' style={{ fontSize: "40pt" }}>100</p>
                        </Col>
                        <Col>
                            <p className='text-center' style={{ fontSize: "18pt" }}>Số lượng giảng viên</p>
                            <p className='text-center' style={{ fontSize: "40pt" }}>100</p>
                        </Col>
                        <Col>
                            <p className='text-center' style={{ fontSize: "18pt" }}>Số lượng nhân viên</p>
                            <p className='text-center' style={{ fontSize: "40pt" }}>100</p>
                        </Col>
                    </Row>
                </div>
            </Layout>

        </Layout >
    );
};

export default Staffhome;
