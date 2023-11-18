import React, { useEffect, useState } from 'react';
import Banner from '../../components/Shared/Banner/Banner';
import Phones from '../../components/Shared/Phones/Phones';

const Home = () => {
    const [phones, setPhones] = useState()
    useEffect(() => {
        fetch("phones.json")
        .then(res => res.json())
        .then(data => setPhones(data))
    }, []);


    
    console.log(phones);
    return (
        <div>
            <Banner/>
            <Phones phones={phones}/>
        </div>
    );
};

export default Home;