import React from 'react';

const Button = ({text}) => {
    return (
        <div>
            <button className='px-8 py-3 text-[16px] font-roboto font-bold uppercase bg-secondary'>{text}</button>
        </div>
    );
};

export default Button;