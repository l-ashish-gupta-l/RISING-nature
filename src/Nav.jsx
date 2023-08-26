import React from 'react'
import logo from './asset/logo.png'
import Dropdown from 'react-bootstrap/Dropdown';


const Nav = () => {

    return (
        <div className='w-full flex items-center justify-between  h-[17vh] px-[6vw]'>
            <div className='w-3/12 h-full  flex items-center justify-center'>
                <a href='./Home'> <img src={logo} className='w-[100px] h-[100px]' /></a>
            </div>
            <div className='w-3/5 h-full  flex justify-between items-center px-[2vw]'>

                <a href='./Home' className='font-bold hover:text-[#FAB915]'>HOME</a>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <a className='font-bold hover:text-[#FAB915]'>ABOUT</a>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className=' dropdown  absolute mt-5 border-2 border-black px-5 py-3 -ml-10 rounded-2xl'>
                        <Dropdown.Item href="./ourstory">Our Story</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='./ourapproach'>Our Approach</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>






                <a href='./Programs' className='font-bold hover:text-[#FAB915]'>PROGRAMS</a>
                {/* <a href='./Resoureces' className='font-bold hover:text-[#FAB915]'>RESOURCES</a> */}
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <a className='font-bold hover:text-[#FAB915]'>RESOURCES</a>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className=' dropdown  absolute  mt-5 border-2 border-black px-5 py-3 -ml-10 rounded-2xl'>
                        <Dropdown.Item   href="./ourstory">News And Events</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='./ourapproach'>Newsletters</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="./ourstory">Contact</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='./ourapproach'>ITR Reports</Dropdown.Item>


                    </Dropdown.Menu>
                </Dropdown>

                <div className='flex gap-5'>

                    <button className=' text-sm hover:bg-[#4eae3a] p-2 rounded-2xl hover:text-white text-black bg-white border-[1px] border-black'><a href='./Login'>LOG IN</a></button>
                    <button className=' text-sm hover:bg-[#4eae3a] p-2 rounded-2xl hover:text-white text-black bg-white border-[1px] border-black'><a href='./Login'>SIGN IN</a></button>
                </div>


            </div>


        </div>
    )
}

export default Nav