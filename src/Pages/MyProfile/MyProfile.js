import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    return (
        <div className=' bg-accent'>
            <div className='mx-28 py-12 text-white bg-accent'>
                <h3 className='text-6xl font-semibold text-white Plus'>I'm    <span className='text-secondary ml-10 '>  Rowshon Ara</span></h3>

                <p className='mt-8'><b className='text-secondary'>Email Address: </b>runurowson@gmail.com</p>
                <p ><b className='text-secondary'>Educational background:</b> MBA from National University</p>
                <p><b className='text-secondary '>Technologies and Skills :</b>
                    <li>Browser format- chrome, firefox, microsoft edge </li>
                    <li>Framwork- BootStrap, tailwind and nodejs</li>
                    <li>Core language- HTML, CSS, JavaScript</li>
                    <li>Databases- MongoDB</li>
                    <li>Data formats - json</li>
                    <li>Protocols - http</li>
                    <li>Libraries - jQuery</li>
                    <li>Computer literacy, Database knowledge, Data structures and algorithms,<br />git  Application Programming Interface, Authentication, Problem Solving and Searching</li>


                </p>

                <p><b className='text-secondary'>My projects:</b>
                    <li> <a href="https://assignment12-2fdc9.web.app/" target='_blank'>Project 01</a></li>
                    <li> <a href="https://assignment11-8f26c.web.app/" target='_blank'>Project 02</a></li>
                    <li> <a href="https://stirring-babka-beca85.netlify.app/" target='_blank'>Project 03</a></li>

                </p>

            </div>
        </div>
    );
};

export default MyProfile;