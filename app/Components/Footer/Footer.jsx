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
<footer className="text-foreground py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* <!-- Column 1: About Us --> */}
      <div>
        {/* <h3 className="text-lg font-semibold mb-4">About Us</h3> */}
        <Image
          alt=""
          src={logo}
          className="w-auto"
          width={120}
          height={120}
        />
        <p className="text-sm mt-4">
         شركة متخصصة في مجال تصميم المواقع الإلكترونية والتطبيقات الهاتفية للشركات و المنشأت الكبيرة، وهدفنا هو تحويل كل هدف إلى واقع رقمي.
        </p>
        <ul className="flex items-center gap-5 w-full mt-5">
          {social.map((item, idx) => (
            <li key={idx}>
              <a href={item.href} className="bg-foreground">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* <!-- Column 2: Quick Links --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
        <ul>
          {links.map((items) => (
            <li key={items.title} className="mb-2">
              <a href={items.href} className="hover:border-b capitalize border-foreground transition duration-700 ease-in-out">
                {items.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* <!-- Column 3: Contact Information --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
        <ul>
          <li className="mb-2">الهاتف: +123 456 789</li>
          <li className="mb-2">البريد الإلكتروني: info@company.com</li>
          <li className="mb-2">العنوان: 123 اسم الشارع، المدينة، الدولة</li>
        </ul>
      </div>
    </div>
  </div>

  {/* <!-- Footer Bottom --> */}
  <div className="mt-8 border-t border-foreground pt-4">
    <p className="text-center text-sm text-foreground">
      © 2024 شركة Ace Soft. جميع الحقوق محفوظة.
    </p>
  </div>
</footer>


  )
}
