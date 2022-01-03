import React from 'react';
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';

const Icon = (
    { name }) =>
{

    switch (name)
    {
        case 'circle':
            return <FaRegCircle className='icon' />
            break;
        case 'cross':
            return <FaTimes className='icon' />
        default:
            return <FaPen className='icon' />
            break;
    }




}

export default Icon;