import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function Header() {
    return (
        <div container className='container-fluid'>
            <div className='row text-center'>
                <div className='col'>
                    <h1 className='text-center bg-success'>TO-DO</h1>
                </div>
            </div>
        </div>

    )
}
