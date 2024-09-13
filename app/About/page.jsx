"use client"
import React from 'react'

const Page = () => {
  return (
    <section className="About flex items-center justify-center mt-10 mb-10">
    <div className="container px-3 sm:px-6 lg:px-8">
      <div className="flex flex-col   lg:flex-row xl:flex-row 2xl:flex-row lg:mt-20 xl:mt-20 2xl:mt-20  lg:mb-20 xl:mb-20 2xl:mb-20 px-3 lg:px-10 w-full ">
      <div>
          <h3 className="text-lg uppercase font-bold  md:text-lg mt-10 mb-10 lg:-rotate-90 xl:-rotate-90 2xl:-rotate-90  lg:text-3xl xl:text-3xl 2xl:text-3xl">
          About
      </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 w-full   lg:px-5 xl:px-5 2xl:px-5">
      <div>
        <p className="text-lg w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus, neque consectetur imperdiet euismod, purus risus mattis purus, ac laoreet orci quam ac ante. Vivamus tristique laoreet ex, vel dapibus orci malesuada ut. Integer aliquet vestibulum metus vel efficitur. Vestibulum in dolor metus.

        </p>
        <br/>
        <p className="text-lg w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus, neque consectetur imperdiet euismod, purus risus mattis purus, ac laoreet orci quam ac ante. Vivamus tristique laoreet ex, vel dapibus orci malesuada ut. Integer aliquet vestibulum metus vel efficitur. Vestibulum in dolor metus.

        </p>

      </div>
      <div className="flex flex-col gap-6">
         <p className="text-lg font-bold ">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus, neque consectetur imperdiet euismod

         </p>
       <div className="w-full h-80 aspect-w-1 aspect-h-1">
<img
src="https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
alt=""
className="object-cover w-full h-full"
/>
</div>
      </div>
      </div>
      </div>
    
    </div>
   </section>
       
    
  )
}

export default Page