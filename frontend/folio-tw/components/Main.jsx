import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.jpg";
import { Element } from "react-scroll";
import Typed from 'react-typed';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoNewspaperOutline } from "react-icons/io5"
import Link  from 'next/link';
function HomePage() {
	return (
		<Element id="home" name="home">
			<div>
				<div className='flex flex-col items-center justify-center w-full h-auto p-2lg:h-screen"'>
					<div className="flex flex-col mx-10 mt-10 md:ml-20">
						<h1 className="m-20 mb-5 font-bold text-center text-1xl">
							Hey there, I'm </h1>
							<Typed
							className="mb-5 text-5xl font-bold text-center text-blue-600 "
							strings={['Lamar G.','Lambo']}
							typeSpeed={120}
							backspeed={140}
							loop /> 
							<br />
						<p className="flex-wrap px-2 mb-5 font-serif text-lg leading-10 tracking-wide text-center">
						I'm a <span className='font-bold tracking-wide text-blue-600'>Software Engineer</span> that specializes in <span className='font-bold'>Web Design</span> & <span className='font-bold'>Fullstack Development</span>
						</p>
						
						{/*Social Links*/}
						
						<div className='flex justify-between max-w-[330px] m-auto py-4 space-x-4 mt-2'>
						<a
						  href='https://www.linkedin.com/in/lamar-gillespie-678a56b1/'
						  target='_blank'
						  rel='noreferrer'
						>
						  <div className='p-6 duration-300 ease-in bg-blue-500 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<FaLinkedinIn />
						  </div>
						</a>
						<a
						  href='https://github.com/lamboprogramming'
						  target='_blank'
						  rel='noreferrer'
						>
						  <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer bg-slate-300 shadow-gray-400 hover:scale-110'>
							<FaGithub />
						  </div>
						</a>
						<Link href='mailto:gillespielamar@gmail.com'>
						  <div className='p-6 duration-300 ease-in bg-yellow-300 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<AiOutlineMail />
						  </div>
						</Link>
						<Link href="">
						  <div className='p-6 duration-300 ease-in bg-teal-400 rounded-full shadow-lg cursor-pointer hover:scale-110'>
							<IoNewspaperOutline />
						  </div>
						</Link>
					  </div>
					</div>
					{/* Social Links End*/}
				
				  </div>
				
					</div>
		</Element>
	);
}

export default HomePage;
