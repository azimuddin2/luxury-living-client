import React from 'react';

const Book = () => {
    return (
        <section style={{ backgroundColor: '#F6F6F6' }} className='h-full p-4 lg:p-10'>
            <h1 className='text-2xl font-medium'>Booking</h1>
            <div className='mt-4'>
                <form>
                    <div className="form-control mb-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input rounded-sm w-full max-w-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <div className="form-control mb-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input rounded-sm w-full max-w-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <div>
                        <select className="select rounded-none w-full max-w-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                            <option disabled selected>Pick your favorite Simpson</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Book;