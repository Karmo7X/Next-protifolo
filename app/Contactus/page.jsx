
import React from "react";
import { FaBuilding ,FaPhoneAlt} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const page = () => {
   
  return (
    <div className="contact_us flex mt-10 mb-10  justify-center">
      <div className="container px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col   lg:flex-row xl:flex-row 2xl:flex-row lg:mt-20 xl:mt-20 2xl:mt-20  lg:mb-20 xl:mb-20 2xl:mb-20 px-3 lg:px-10 w-full ">
        
          <div className="">
           
          <h3 className="text-lg w-full  lg:w-60 xl:w-60  2xl:w-60 uppercase font-bold  md:text-lg mt-10 mb-10 lg:-rotate-90 xl:-rotate-90 2xl:-rotate-90  lg:text-3xl xl:text-3xl 2xl:text-3xl">
          Get in touch
          </h3>
          </div>
           <div className="grid grid-cols-1 lg:grid-cols-2	 xl:grid-cols-2	 2xl:grid-cols-2    w-full  mb-10  ">
            <div>
                <p>
                Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                </p>

                <div className="mt-7">
                 <div className="flex gap-5 mt-5">
                 <FaBuilding className="text-lg text-foreground"/>
                    <span>545 Mavis Island<br/>Chicago, IL 99191</span>
                 </div>
                 <div className="flex gap-5 mt-5">
                 <FaPhoneAlt className="text-lg text-foreground"/>
                    <span><a href="tel:+1 (555) 234-5678" >+1 (555) 234-5678</a></span>
                 </div>
                 <div className="flex gap-5 mt-5">
                 <MdEmail  className="text-lg text-foreground"/>
                    <span><a href="mailto:hello@example.com" >hello@example.com</a></span>
                 </div>
                </div>
                <div className="mt-7">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27627.906954308084!2d31.3851904!3d30.051532799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1725865739450!5m2!1sar!2seg" width="80%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div>
            <div className=" w-full mt-8 ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center mb-10">
        <h2 className="text-3xl  tracking-tight text-foreground uppercase font-bold sm:text-4xl">Contact </h2>
    
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-foreground">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full bg-transparent  rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 rign-foreground ring-inset ring-foreground placeholder:text-foreground focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-foreground">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full bg-transparent  rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 rign-foreground ring-inset ring-foreground placeholder:text-foreground focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-foreground">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-foreground focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full bg-transparent  rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 rign-foreground ring-inset ring-foreground placeholder:text-foreground focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-foreground">
              Phone number
            </label>
            {/* <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="block w-full bg-transparent  rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 rign-foreground ring-inset ring-foreground placeholder:text-foreground focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6"
                  >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-foreground"
                />
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-foreground focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6"
              />
            </div> */}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full bg-transparent  rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 rign-foreground ring-inset ring-foreground placeholder:text-foreground focus:ring-2 focus:ring-inset focus:ring-foreground sm:text-sm sm:leading-6"

                defaultValue={''}
              />
            </div>
          </div>
          
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-foreground px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
