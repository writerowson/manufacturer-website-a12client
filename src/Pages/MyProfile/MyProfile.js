import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    return (
        <div className='mx-28 my-20 text-accent'>
            <p><b>Name:</b> Rowshon Ara</p>
            <p><b>Email Address: </b>runurowson@gmail.com</p>
            <p><b>Educational background:</b> MBA from National University</p>
            <p><b>Technologies and Skills :</b>
                <li>Browser format- chrome, firefox, microsoft edge </li>
                <li>Framwork- BootStrap, tailwind and nodejs</li>
                <li>Core language- HTML, CSS, JavaScript</li>
                <li>Databases- MongoDB</li>
                <li>Data formats - json</li>
                <li>Protocols - http</li>
                <li>Libraries - jQuery</li>
                <li>Computer literacy, Database knowledge, Data structures and algorithms,<br /> Application Programming Interface, Authentication, Problem Solving and Searching</li>


            </p>
            <p><b>Educational background:</b>MBA from National University</p>
            <p><b>My projects:</b>
                <li> <a href="https://assignment12-2fdc9.web.app/" target='_blank'>Project 01</a></li>
                <li> <a href="https://assignment11-8f26c.web.app/" target='_blank'>Project 02</a></li>
                <li> <a href="https://stirring-babka-beca85.netlify.app/" target='_blank'>Project 03</a></li>

            </p>

        </div>
    );
};

export default MyProfile;