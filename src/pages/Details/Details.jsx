import React from 'react';
import { useLocation } from 'react-router-dom';
import SinglePhone from '../../SinglePhone/SinglePhone';

const Details = () => {
    const location = useLocation();
    const phone = location.state;
  



    return (
        <div>
            <SinglePhone phone={phone}/>
        </div>
    );
};

export default Details;