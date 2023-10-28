import React from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Course from '../components/Course';
function Coursepage() {
    return (
        <div>
            <Container style={{ width: '80%', padding: 0 }} >
                <Header />
            </Container>
            <Course />
            <Footer />
        </div>
    )

}


export default Coursepage