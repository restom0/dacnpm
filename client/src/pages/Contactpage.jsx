import React from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
function Contactpage() {
    return (
        <div>
            <Container style={{ width: '80%', padding: 0 }} >
                <Header />
            </Container>
            <Contact />
            <Footer />
        </div>
    )

}


export default Contactpage;