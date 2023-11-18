import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SinglePhone from '../../SinglePhone/SinglePhone';

const Details = () => {
    const [phone, setPhone] = useState();
    const {id}= useParams();
    const phones = useLoaderData();
    console.log(phone);
   useEffect(() => {
    const findPhone = phones?.find(phone => phone.id === id);
    
    setPhone(findPhone);
    
   },[ id, phones])




    return (
        <div>
            <SinglePhone phone={phone}/>
        </div>
    );
};

export default Details;