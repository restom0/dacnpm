import "../css/Introduction.css";
import { Col, Container, Form, Image, InputGroup, Modal, Nav, NavDropdown, Pagination, Row } from 'react-bootstrap';
import { Dayjs } from 'dayjs';
import { Calendar, Table } from 'antd';
import { CalendarProps, Button } from 'antd';
import dayjs from 'dayjs';
import { useState } from "react";
import 'boxicons'

const Contact = () => {
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
            title: 'Mã đơn',
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
            width: '25%',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'date',
        },
        {
            title: 'Thành tiền',
            dataIndex: 'cash',
            sorter: (a, b) => a.cash - b.cash,
            width: '25%',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            filters: [
                {
                    text: 'Đã thanh toán',
                    value: 'Đã thanh toán',
                },
                {
                    text: 'Chưa thanh toán',
                    value: 'Chưa thanh toán',
                },
            ],
            filterSearch: true,
            onFilter: (value, record) => record.status.startsWith(value),
            width: '25%',
        },
    ];



    const data = [
        {
            key: '1',
            name: 'MT0001',
            date: dayjs('2023-10-10').format('DD-MM-YYYY'),
            cash: 300000,
            status: "Đã thanh toán"
        },
        {
            key: '2',
            name: 'MT0002',
            date: dayjs('2023-10-12').format('DD-MM-YYYY'),
            cash: 400000,
            status: "Đã thanh toán"
        },
        {
            key: '3',
            name: 'MT0003',
            date: dayjs('2023-10-15').format('DD-MM-YYYY'),
            cash: 200000,
            status: "Chưa thanh toán"
        },
        {
            key: '4',
            name: 'MT0004',
            date: dayjs('2023-10-20').format('DD-MM-YYYY'),
            cash: 100000,
            status: "Chưa thanh toán"
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div className="mt-5 mb-5">
            <Container >
                <Row className="justify-content-center">
                    <h1>LỊCH CỦA TÔI</h1>
                    <Calendar onPanelChange={onPanelChange} style={{ width: "50%" }} className="mt-3" />
                </Row>
                <Row className="justify-content-center">
                    {localStorage.getItem('idRole') === 1 ?
                        <h1>HÓA ĐƠN VÀ THANH TOÁN</h1> :
                        <h1>HÓA ĐƠN VÀ LƯƠNG THƯỞNG</h1>
                    }
                    <Row>
                        <Table columns={columns} dataSource={data} onChange={onChange} className="mt-5" />
                        <Row className="justify-content-end">
                            <Button type="primary" style={{ width: "10%" }} className="me-3">Xem chi tiết</Button>
                            <Button type="primary" style={{ width: "10%" }}>Thanh toán</Button>
                        </Row>
                    </Row>
                </Row>
            </Container>
        </div >
    );
};

export default Contact;
