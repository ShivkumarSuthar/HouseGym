import React from 'react'


function home() {
  
  return (
  <section className="home-wrapper bg-black text-white sm:h-screen px-5 tracking-widest  container h-screen md:px-40">
    <section className="container  px-5 md:h-20 md:py-10 ">
<nav className="md:flex justify-between items-center text-white">
    <div>
        <span className="font-Silkscreen font-bold text-[15px]"><span className="pr-1"><i className="border-[1px] rounded-full p-[2px] border-white fa-solid fa-dumbbell"></i></span>HOUSEGYM</span>
    </div>

    <ul className="flex gap-12 font-hertical text-white">
        <li className="tabs"><a href="/" className="uppercase  tracking-[2px] md:text-[12px] tabs">Membership Area</a></li>
        <li><a href="/" className="uppercase tracking-[2px] md:text-[12px] ">products</a></li>
        <li><a href="/" className="uppercase tracking-[2px] md:text-[12px] tabs">trainers</a></li>
        <li><a href="/" className="uppercase tracking-[2px] md:text-[12px] tabs">About</a></li>
        <li><a href="/" className="uppercase tracking-[2px] md:text-[12px] tabs">contact</a></li>
    </ul>
<div className="md:flex md:justify-evenly item font-hertical px-0 md:items-center">
<span className='px-2'><i className="fa-solid fa-magnifying-glass"></i></span>
<span className="px-5"><i className="fa-regular fa-user border-[1px] border-slate-100 p-3 rounded-full"></i></span>
<span className="px-2"><i className="fa-regular fa-envelope"></i></span>
</div>
</nav>
    </section>
    <div className="md:flex">
<div className="md:flex md:flex-col md:font-hertical md:pt-44">
  <div className="md:text-[60px] leading-[64px] home-text">Your Home,<br/>Your rules.</div>
  <div className="md:py-5"><p className="tracking-[3px]">Gyms may be closed but you always<br/> have the ability to more.</p></div>
  <div className="md: flex ">
    <button className="border-[1px] text-[13px] py-3 px-5 border-white md:mr-8">Shop products</button>
    <span className="text-[12px] underline leading-6">start<br/>your workout<span className="no-underline pl-3"><i className="fa-solid fa-arrow-right-long"></i></span></span>
  </div>
<div className="md:flex md:justify-start md:items-center md:pt-5 md:text-[18px]">
  <span><i className="fa-brands fa-facebook-f"></i></span>
  <span className="md:px-5"><i className="fa-brands fa-instagram"></i></span>
  <span><i className="fa-brands fa-twitter"></i></span>
</div>

<div className="md:flex  items-center mouse">
  <span className="flex justify-center items-center text-center "><i className="fa-solid fa-arrow-down-long py-3 rounded-full w-10 h-10 border-[1px]"></i></span>
</div>
</div>
<div></div>
    </div>

  </section>
  )
}

export default home