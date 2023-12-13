import React from 'react'
import men from '../images/men.png'
import girls from '../images/girl2.png'

function exercise() {
  return (
    <section className="h-screen justify-around items-center bg-black md:px-28 flex relative pt-2 top-[700px] text-white">
<div className="flex flex-col items-start">
<span className="font-hertical text-gray-500 text-3xl">HouseGym</span>
<p className="text-[40px] font-libre font-bold text-left py-3">Free & Premium<br/> Workout Series</p>
<p className="text-left text-lg font-libre tracking-wider">Licensed professionals from Housegym<br/> are dedicated towards providing</p>
<button className="py-5 px-10 bg-slate-200 border-none font-hertical text-black mt-5 text-xl">start your workout</button>
</div>
<div>
    <img src={men} alt="" className="w-80"/>
</div>
<div>
    <img src={girls} alt="" className="w-96 mt-12" />
</div>
    </section>
  )
}

export default exercise