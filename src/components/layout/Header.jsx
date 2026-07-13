import 'react';
import { BiMobile } from 'react-icons/bi';
import { FaFacebook, FaLinkedin, FaTwitter, FaUser, FaUserLock } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {

    const user =true

    return (
        <div className='bg-white w-full'>
            <div className='bg-[#caddff]'>
                 <div className='w-[85%] lg:w-[90%] mx-auto max-md-lg-custom:hidden'>
                    <div className='flex justify-between items-center text-slate-500  h-12.5'>
                        {/* Email & Phone Number */}
                    <ul className='flex justify-start items-center gap-3 text-black font-semibold'>
                        <li className='flex justify-start items-center gap-3 after:h-4.5 after:w-px after:bg-[#afafaf]  text-sm'>
                            <span><MdEmail/></span>
                            <span>Amir@gmail.com</span>
                        </li>
                         <li className='flex justify-start items-center gap-3 '>
                            <span><BiMobile/></span>
                            <span>+989371414035</span>
                        </li>
                    </ul>
                   <div className='flex justify-center items-center gap-7 '>
                    {/* Social Media */}

                     <div className='flex justify-start text-black items-center gap-4.5'>
                    <Link className='text-lg'>
                        <FaFacebook/>
                    </Link>
                    <Link className='text-lg'>
                        <FaTwitter/>
                    </Link>
                    <Link className='text-lg'>
                        <FaLinkedin/>
                    </Link>
                    <Link className='text-lg'>
                        <FaGithub/>
                    </Link>
                    </div>
                    {/* Language */}
                    <div className='flex justify-center items-center group relative'>
                        <span className=' flex gap-6 justify-center items-center after:h-4.5 after:w-px after:bg-slate-500
                        before:h-4.5 before:w-px before:bg-slate-500 cursor-pointer'>
                            <img src="/frontend/images/language.png" alt="" />
                        </span>

                        {/* Hover Box Show */}
                        <div className='bg-black transition-all invisible group-hover:visible text-white absolute top-7 left-0 w-25 justify-center items-center flex flex-col   rounded-md'>
                            <span className='hover:bg-red-500 inline-block w-full py-1 text-center hover:text-black cursor-pointer'>English</span>
                            <span className='hover:bg-red-500 inline-block w-full py-1 text-center hover:text-black cursor-pointer'>Persian</span>

                        </div>
                    </div>
                        {/* User Login & Info */}
                        <Link>
                            {
                                user ? <div className='text-black flex justify-center items-center gap-2'>
                                    <span><FaUser/></span>
                                    <span className='font-bold'>Amir</span>
                                </div> : <div className='flex text-black justify-center items-center gap-2'>
                                    <span><FaUserLock/></span>
                                    <span className='font-semibold'>Login</span>
                                </div>
                            }
                        </Link>
                   </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Header;