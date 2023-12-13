import React from 'react'
import trainers from '../images/image_search_1702354217450 (1).jpg'

function trainer() {
  return (
    <>

  <section className=" bg-blend-screen bg-black md:h-screen md:w-100  md:px-28  md:justify-center flex flex-col items-center pt-10 pb-10">
<div className="mentor"><span><i className="fa-solid fa-quote-left"></i></span><span className="text-[100px]">Meet your</span><br/>mentor <span><i className="fa-solid fa-quote-right"></i></span></div>
<img src={trainers} alt="trainers" className="w-screen h-screen" />
<div className="mentor-text">operate on your time.<br/>Take back control!</div>
  </section>
    </>
  )
}

export default trainer