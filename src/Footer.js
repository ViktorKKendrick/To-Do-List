import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function Footer() {
    return (
        <div className='footer py-0' height='30px'>
            <div container className='container-fluid'>
                <div className="row " >
                    <ul className="nav" >
                        <div className="col-sm-1 my-auto">
                            <li className="nav-item">
                                <a className="nav-link text-center" href="https://www.codewars.com/users/ViktorKKendrick" >
                                    <img src="./img/CW.png" alt="CodeWars" height="30px" />
                                </a>
                            </li>
                        </div>
                        <div className="col-sm-1 my-auto">
                            <li className="nav-item">
                                <a className="nav-link text-center" href="https://github.com/ViktorKKendrick">
                                    <img src='./img/GH.png' alt="github" height="42px" />
                                </a>
                            </li>
                        </div>
                        <div className="col-lg-8 text-center mb-5 mb-lg-0 my-auto" >
                            <p className="text-center">©2021 Viktor K. Kendrick. All Rights Reserved.</p>
                        </div>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-1'></div>
                    </ul>
                </div>
            </div>
        </div>

    )
}
