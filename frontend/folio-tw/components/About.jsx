import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import heroImage from "../public/images/heroimage.jpg";

const About = () => {
  return (
    <div id='about' className='flex items-center w-full p-2 py-8 md:h-screen'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 text-center'>
        <p className='mb-3 text-5xl font-bold tracking-widest text-left text-indigo-900 underline uppercase '>
        about me
      </p>
          <p className='py-3 font-serif tracking-wide text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 font-serif tracking-wide text-gray-600'>
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105'>
        <Image
        src={heroImage}
        alt="heroImage"
        layout=""
        objectFit=""
        className="hidden rounded-full cursor-pointer md:block"
    />
        </div>
      </div>
    </div>
  );
};

export default About;