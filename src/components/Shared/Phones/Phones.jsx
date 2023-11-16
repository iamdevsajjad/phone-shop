import React from 'react';
import Phone from './Phone/Phone';

const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div>
            <h1 className='text-3xl my-5 text-center'>All Categories phones</h1>
            <span className='grid grid-cols-3 gap-4'>
                {
                    phones?.map((phone) => <Phone
                    key={phone.id}
                    phone={phone}
                    /> )
                }
            </span>
        </div>
    );
};

export default Phones;