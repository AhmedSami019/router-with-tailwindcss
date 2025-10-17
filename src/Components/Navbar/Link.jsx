import React from 'react';

const Link = ({item}) => {
    return (
        <li className='mr-5 text-lg px-5   bg-black md:bg-transparent rounded text-center '>
            <a href={item.path}>{item.name}</a>
        </li>
    );
};

export default Link;