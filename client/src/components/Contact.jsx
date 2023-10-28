import "../css/Introduction.css";
import { Col, Container, Form, Image, InputGroup, Modal, NavDropdown, Row } from 'react-bootstrap';
import { Avatar, Button, Card, Skeleton, Switch } from 'antd';
import { useState } from "react";
const Contact = () => {
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
    return (
        <Row className="justify-content-center">
            <Image src="https://s3-alpha-sig.figma.com/img/9553/4308/027cb875b7b95b829a2fc732cfe94586?Expires=1699228800&Signature=adAsQyUbhbyfo3I6-4NwrEnX6g7dVivHAYk~itIcL3ACW7C~kjDU-~UC5C1JAoZENRNby2~A5z99EndLCGW3DQ3R6s1T~-qtNQ9IINAHpHeOjZEuynLFMwOJQWSwiHbuWOJdXm9CzIvHkQGkMBHj6z6NgMbhV2ZFV0UDDiMNt0q~M0ueqHzsVdhu1ojaeU7aljFzLR1T0fqrN5M1QcaFB9CBkQWd7XXV8IJYM3Ur39fIJmUyUUAicwoiT~~W5b6y7P3RQoCO2kGqVJVJO6uu12wG3zerwkSkftjqk80Y5yTzAKodpnKRctI~7Wr0ORAQnOgRmKlN6qn2V-24DNGgLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{ width: "80%" }} fluid />
        </Row>
    );
};

export default Contact;
