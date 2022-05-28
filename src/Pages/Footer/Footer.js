import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { GrTwitter } from 'react-icons/gr'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className=' bg-secondary text-center'>
            <footer className="footer p-10  text-accent text-center ">
                <div className=''>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-60  text-start pr-16" />
                            <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='  text-center  rounded  border-t'>
                <p className='font-semibold'>© 2022 Pc World. All rights reserved.</p>
                <a className="link link-hover mx-3 text-xs">Terms of use</a>
                <a className="link link-hover mx-3 text-xs">Privacy policy</a>
                <a className="link link-hover mx-3 text-xs">Cookie policy</a>


            </div>
            <div className='footer footer-center '>
                <div className=' grid-flow-col  mb-8 '>
                    <GrTwitter ></GrTwitter>
                    <BsYoutube></BsYoutube>
                    <BsFacebook ></BsFacebook>
                </div>
            </div>






        </div >
    );
};

export default Footer;