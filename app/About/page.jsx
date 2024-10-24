"use client"
import React from 'react'

const Page = () => {
  return (
    <section className="About flex items-center justify-center mt-10 mb-10">
    <div className="container px-3 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row   mt-10 lg:mt-20 xl:mt-20 2xl:mt-20 lg:mb-20 xl:mb-20 2xl:mb-20 px-3 lg:px-10 w-full ">
        <div>
          <h3 className="text-lg w-max uppercase font-bold md:text-lg mt-10 mb-10 lg:-rotate-90 xl:-rotate-90 2xl:-rotate-90 lg:text-3xl xl:text-3xl 2xl:text-3xl">
            من نحن
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 w-full lg:px-5 xl:px-5 2xl:px-5">
          <div>
            <p className="text-lg w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4">
            نحن شركة متخصصة في تصميم وتطوير المواقع الإلكترونية والتطبيقات الهاتفية للشركات والمنشآت الكبيرة، ونسعى إلى تحويل أفكار وأهداف عملائنا إلى واقع رقمي مبتكر ومتميز. نلتزم بتقديم حلول تقنية متكاملة تتميز بالكفاءة والمرونة، مع التركيز على تحقيق أفضل تجربة مستخدم لضمان رضا العملاء وتقديم قيمة حقيقية لمشاريعهم.

فريقنا يضم مجموعة من الخبراء المتخصصين في تصميم واجهات المستخدم وتجربة المستخدم (UI/UX)، وتطوير البرمجيات باستخدام أحدث التقنيات، مثل React وNode.js وLaravel. نستخدم Laravel كإطار عمل رئيسي لتطوير أنظمة قوية، آمنة، وسهلة الاستخدام، مما يتيح لنا توفير حلول عالية الأداء وقابلة للتوسع، مما يجعلها مثالية للمشاريع الكبيرة والمتطورة.

إلى جانب تطوير البرمجيات، نقدم خدمات شاملة لتحسين محركات البحث (SEO)، بما يضمن تعزيز ظهور مواقع عملائنا على الإنترنت والوصول إلى جمهور أوسع. كما نركز على تطوير الأنظمة الخلفية المتكاملة باستخدام تقنيات حديثة لضمان استجابة سريعة وأداء فعال. نهتم كذلك بتقديم حلول الأمان الرقمي المتطورة لحماية بيانات المستخدمين وتأمين المنصات من أي تهديدات.

نحن نؤمن بأن التكنولوجيا يجب أن تخدم أهداف العمل وتحقق النمو المستدام، ولهذا نلتزم بتقديم حلول مرنة وقابلة للتكيف مع تطلعات عملائنا، مما يساهم في نجاحهم في السوق الرقمي المتسارع.            </p>
            <br />
            {/* <p className="text-lg w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4">
              تم استخدام النص الشكلي لوريم إيبسوم منذ العصور القديمة كنموذج في الطباعة والنشر. ومنذ ذلك الوقت، أصبح
              استخدامه معيارًا للتصميم، حيث يوفر نصًا بديلًا لملء الفراغات في التصاميم الجديدة.
            </p> */}
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg font-bold">
              
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