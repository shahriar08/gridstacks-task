import React from 'react';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Navber from '../Navber/Navber';

const Home = () => {
    return (
        <div>
            <Navber/>
            <Banner/>
            <Form/>
            <Benefits/>
            <Footer/>
        </div>
    );
};

export default Home;