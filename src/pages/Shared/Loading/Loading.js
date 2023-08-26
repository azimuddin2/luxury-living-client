import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-6'>
            <ReactLoading
                type='bars'
                color='#251D58'
                height='60px'
                width='60px'
            />
        </div>
    );
};

export default Loading;