import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/imgs/acelogo.png'
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export const Footer = ({ links }) => {
  const social = [

    {
      href: '#',
      icon: <>
        <FaFacebookSquare className='text-2xl text-foreground hover:shadow-lg hover:shadow-foreground transition-all duration-300'/>


      </>,
    },
    {
      href: '#',
      icon: <>
        <FaLinkedin className='text-2xl text-foreground hover:shadow-lg hover:shadow-foreground transition-all duration-300'/>


      </>,
    },
    {
      href: '#',
      icon: <>

        <FaInstagram className='text-2xl text-foreground hover:shadow-lg hover:shadow-foreground transition-all duration-300'/>
      </>,
    },
    {
      href: '#',
      icon: <>
 <FaSquareXTwitter className='text-2xl text-foreground hover:shadow-lg hover:shadow-foreground transition-all duration-300'/>

      </>,
    },
    
  ]
  return (

    <footer class=" text-foreground py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* <!-- Column 1: About Us --> */}
          <div>
            {/* <h3 class="text-lg font-semibold mb-4">About Us</h3> */}
            <Image
              alt=""
              src={logo}
              className=" w-auto"
              width={120}
              hight={120}
            />
            <p class="text-sm mt-4">
              We are committed to delivering the best solutions to our customers. Our team is dedicated to innovation and excellence in everything we do.
            </p>
            <ul className='flex items-center gap-5  w-full mt-5'>
              {social.map((item,idx)=>{

                return<>
                  <li key={idx}><a href={item.href} 
                   className="bg-foreground"

                  >
                  {item.icon}
              </a></li>
                </>
              })}
            
            </ul>
          </div>

          {/* <!-- Column 2: Quick Links --> */}
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              {links.map((items) => {
                return (<>
                  <li key={items.title} class="mb-2">
                    <a href={items.href} class="hover:border-b capitalize border-foreground transition duration-700 ease-in-out">{items.title}</a>
                  </li>
                </>)
              })}


            </ul>
          </div>

          {/* <!-- Column 3: Contact Information --> */}
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li class="mb-2">Phone: +123 456 789</li>
              <li class="mb-2">Email: info@company.com</li>
              <li class="mb-2">Address: 123 Street Name, City, Country</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Footer Bottom --> */}
      <div class="mt-8 border-t border-foregraound pt-4">
        <p class="text-center text-sm text-foreground">
          © 2024 Company Ace Soft. All rights reserved.
        </p>
      </div>
    </footer>

  )
}
