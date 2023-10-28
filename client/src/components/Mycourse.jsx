import "../css/Introduction.css";
import { Col, Container, Form, Image, InputGroup, Modal, Nav, NavDropdown, Pagination, Row } from 'react-bootstrap';
import { Dayjs } from 'dayjs';
import { Calendar, Table } from 'antd';
import { CalendarProps, Button } from 'antd';
import dayjs from 'dayjs';
import { useState } from "react";
const Mycourse = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const [currentPage, setCurrentPage] = useState(-1)
    const [loadings, setLoadings] = useState(false);
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
    const columns = [
        {
            title: 'Khóa học',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Category 1',
                    value: 'Category 1',
                },
                {
                    text: 'Category 2',
                    value: 'Category 2',
                },
            ],
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.name.startsWith(value),
            width: '30%',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            width: '30',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            filters: [
                {
                    text: 'Đã kết thúc',
                    value: 'Đã kết thúc',
                },
                {
                    text: 'Đang học',
                    value: 'Đang học',
                },
                {
                    text: 'Chưa bắt đầu',
                    value: 'Chưa bắt đầu',
                },
            ],
            filterSearch: true,
            onFilter: (value, record) => record.status.startsWith(value),
            width: '30%',
        },
    ];



    const data = [
        {
            key: '1',
            name: 'IELTS',
            description: "Lớp bị dời lịch bắt đầu",
            status: "Chưa bắt đầu"
        },
        {
            key: '2',
            name: 'Tiếng Anh giao tiếp',
            description: "Hoàn thành với 8/10 điểm tổng kết",
            status: "Đã kết thúc"
        },
        {
            key: '3',
            name: 'Tiếng Anh thiếu nhi',
            description: "Hoàn thành với 10/10 điểm tổng kết",
            status: "Đã kết thúc"
        },
        {
            key: '4',
            name: 'TOEIC',
            description: "Chuẩn bị thi kết thúc khóa",
            status: "Đang học"
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div className="mt-5 mb-5">
            <Row style={{ padding: "5vh", backgroundColor: "#249DE3" }} className="d-flex justify-content-center mt-2 mb-2">
                <Col className="col-md-6" ></Col>
                <Col className="col-md-6 justify-content-end">
                    <Row>
                        <Col className="col-md-8">
                            <h1 style={{ color: "white" }} className="text-end">THONG THUONG HA</h1>
                            <hr style={{ color: "white" }} />
                            {
                                localStorage.getItem('idRole') === 1 ?
                                    <h1 style={{ color: "white" }} className="text-end">HỌC VIÊN</h1> :
                                    <h1 style={{ color: "white" }} className="text-end">GIẢNG VIÊN</h1>
                            }

                        </Col>
                        <Col className="col-md-4" >
                            <Row><Image src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{ width: "60%" }} fluid />
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Container>
                <Row className="justify-content-center mt-5">
                    <h1>KHÓA HỌC ĐÃ ĐĂNG KÝ</h1>
                    <Table columns={columns} dataSource={data} onChange={onChange} className="mt-5" />
                </Row>
            </Container>
        </div >
    );
};

export default Mycourse;
