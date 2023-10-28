import React from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';
function Mypage() {
    return (
        <div>
            <Container style={{ width: '80%', padding: 0 }} >
                <Header />
            </Container>
            <Calendar />
            <Footer />
        </div>
    )

}


export default Mypage;