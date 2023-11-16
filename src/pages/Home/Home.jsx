import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Shared/Banner/Banner';
import Phones from '../../components/Shared/Phones/Phones';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <Banner/>
            <Phones phones={phones}/>
        </div>
    );
};

export default Home;