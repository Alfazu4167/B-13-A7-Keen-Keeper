import React from 'react';
import footerLogo from "../../assets/logo-xl.png"
import x from "../../assets/twitter.png"
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png'

const Footer = () => {
    return (
        <div className='bg-[#244d3f]'>
            <footer className="footer footer-horizontal footer-center  text-white rounded px-10 py-5">
                <nav>
                    <img src={footerLogo} alt="" />
                </nav>
                <p className='text-white opacity-70'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <h2 className='text-2xl text-center font-bold '>Social Links</h2>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <img src={instagram} alt="" />
                        </a>
                        <a>
                            <img src={facebook} alt="" />
                        </a>
                        <a>
                            <img src={x} alt="" />
                        </a>

                    </div>
                </nav>

            </footer>
            <div className='flex justify-between p-3 text-[#64748b]'>
                <p >Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                <ul className='flex gap-5'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;