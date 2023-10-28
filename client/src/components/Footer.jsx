import React from 'react'
import { Row } from 'react-bootstrap'

function Footer() {
    return (
        <Row style={{ padding: "5vh", backgroundColor: "#125380", color: "white" }} className="d-flex justify-content-center">
            <p style={{ width: "42%", marginBottom: 0 }} className="text-center">Copyright 2023 Trường Đại Học Bách Khoa - ĐHQG TP.HCM. All Rights Reserved.</p>
            <p style={{ width: "60%", marginBottom: 0 }} className="text-center">Địa chỉ: Đông Hòa, TP Dĩ An, Bình Dương. </p>
            <p style={{ width: "60%", marginBottom: 0 }} className="text-center">Email: sepenglish@gmail.com.</p>
        </Row >
    )
}

export default Footer