import React from 'react'
import check from "../assets/check.jpg";
import {MdKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> 
                    I'm a Backend Developer
                </h2>
                <p className=' text-gray-500 py-6 max-w-md'>
                    I am Final Year Student (BE) in Computer Engineering 
                    <br></br>
                    

                    <span className='text-white font-bold text-left '>M.H Saboo Siddik College of Engineering.</span>
                    <br></br>
                    <br></br>
                    
                    Looking forward to a career in an organization where I can use my diverse skills, knowledge, and efforts to add value to the organization. I am eager to contribute my creativity and hard work towards the success of the organization.
                    <br></br>
                    <br></br>
                    <span className='text-white font-bold text-left '>For Contact Me! </span> - Just hit the the contact section and there you go.
                </p>
                <div>
                    <Link 
                    to="portfolio"
                    smooth
                    duration={500}
                     className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r 
                    from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={check} alt="my profile"
                className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
            </div>
        </div>
    </div>
  )
}

export default Home