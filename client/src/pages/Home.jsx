import React from 'react'
import Header from '../components/Header'

import Introduction from '../components/Introduction'
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
function Home() {
    return (
        <div>
            <Container style={{ width: '80%', padding: 0 }} >
                <Header />
            </Container>
            <Introduction />
            <Footer />
        </div>
    )

}


export default Home