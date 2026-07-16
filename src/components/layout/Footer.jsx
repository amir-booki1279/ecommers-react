import  'react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#f3f6fa]'>
            <div className='w-[85%] flex flex-wrap mx-auto border-b border-slate-300 py-16 max-md-lg-custom:pb-10 max-sm-custom:pb-6'>
                    <div className='w-3/12 max-lg-custom:w-4/12 max-sm-custom:w-full'>
                        <div className='flex flex-col gap-6'>
                                <img className='w-47.5 h-17.5' src="/frontend/images/logo.png" alt="logo" />
                                <ul className='flex flex-col gap-2 text-slate-600'>
                                        <li>Adderss : 2504 Lvins Avunue , Egg Harbor</li>
                                        <li>Phone : +989371414035</li>
                                        <li>Email : Amir@gmail.com</li>
                                </ul>
                        </div>
                    </div>
                    <div className='w-5/12 max-lg-custom:w-8/12 max-sm-custom:w-full'>
                          <div className="flex justify-center max-sm-custom:justify-start max-sm-custom:mt-6 w-full">
                               <div>
                                <h2 className='font-bold text-lg mb-2'>Usefull Links</h2>
                                <div className="flex justify-between gap-20 max-lg-custom:gap-10">
                                     <ul className="flex flex-col gap-2 to-slate-600 text-sm font-semibold">
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>About Us</Link>
                                            </li>
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>About Our Shop</Link>
                                            </li >
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>Delivary Information</Link>
                                            </li>
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>Privacy Policy</Link>
                                            </li>
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>Blogs</Link>
                                            </li>                           
                                     </ul>

                                      <ul className="flex flex-col gap-2 to-slate-600 text-sm font-semibold">
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>Our Service</Link>
                                            </li>
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>Company Profile</Link>
                                            </li>
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>Delivary Information</Link>
                                            </li>
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>Privacy Policy</Link>
                                            </li>
                                            <li className='hover:pl-1 transition-all'>
                                                <Link>Blogs</Link>
                                            </li>                           
                                     </ul>
                                </div>
                               </div>
                          </div>
                    </div>

                    <div className='w-4/12 max-lg-custom:w-full max-lg-custom:mt-6'>
                            <div className='flex w-full flex-col justify-start gap-5'>
                                    <h2 className='font-bold text-lg mb-2'>Join Our Shop</h2>
                                    <span>Get Emaill Updates About Tour Latest And Shop Special Offers</span>
                                    <div className='h-12.5 w-full bg-white relative border border-slate-300'>
                                        <input type="text" className='h-full bg-white w-full px-3 outline-0' placeholder='Enter Your Email' />
                                        <button className='h-full bg-[#059473] absolute uppercase px-4 font-bold text-sm text-white right-0'>Subscribe</button>
                                    </div>
                                    <ul className='flex justify-start items-center gap-3'>
                                        <li>
                                            <Link><FaFacebookF className='w-8 h-8 hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full'/></Link>
                                        </li>
                                        <li>
                                            <Link><FaTwitter className='w-8 h-8 hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full'/></Link>
                                        </li>
                                        <li>
                                            <Link><FaLinkedin className='w-8 h-8 hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full'/></Link>
                                        </li>
                                        <li>
                                            <Link><FaGithub className='w-8 h-8 hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full'/></Link>
                                        </li>
                                    </ul>
                            </div>
                    </div>
            </div>

                <div className="flex w-[90%] flex-wrap justify-center items-center mx-auto py-5 text-center text-slate-600">
                    <span>Copyright @ 2026 All Right Reseverd</span>
                </div>


        </footer>
    );
};

export default Footer;