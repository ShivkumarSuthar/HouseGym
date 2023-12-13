import React from 'react'
import aboutimg from '../images/459661.jpg'

function about() {
    return (
        <section className="h-screen flex justify-start relative py-20 top-[70vh] bg-black text-gray-500 font-thin">
         
                <img src={aboutimg} alt="" className="w-[50%] opacity-50 relative" />
                <div className="text-box absolute top-[40%] left-[20%]">
                    <span className="font-hertical text-[18px]">Housegym</span>
                    <p className="font-libre text-[60px]">Your House,<br />Your Rules</p>
               
            </div>
            <div className="flex flex-col pl-32 pt-10">
                <div className="flex flex-col justify-center items-start">
                    <div className="text-2xl font-libre pb-3"><span className="pr-3"><i className="fa-brands fa-youtube text-3xl"></i></span>Premium Circuit videos</div>
                    <div className="text-xl font-libre tracking-wider  flex items-center"><span className="divider-3 mb-2"></span>A full categeoug of videos dedicated twords<br /> one simple goal. Helping you archieve<br />
                        freedom throught your Housegym.</div>
                </div>
                <div className="flex flex-col justify-center items-start py-10">
                    <div className="text-2xl font-libre pb-3"><span className="pr-3"><i className="fa-brands fa-youtube text-3xl"></i></span>Exclusive Housegym Products</div>
                    <div className="text-xl font-libre tracking-wider  flex items-center"><span className="divider-3 mb-2"></span>Purchase our assortment of products that<br />
                        upgrade the quality and intensity of your<br /> workouts.</div>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <div className="text-2xl font-libre pb-3"><span className="pr-3"><i className="fa-brands fa-youtube text-3xl"></i></span>Incredible Customer Support</div>
                    <div className="text-xl font-libre tracking-wider  flex items-center"><span className="divider-3 mb-2"></span>Our team is here 24/7 on all social channels<br />
                        and email ready to answer you questions<br /> and concerns.</div>
                </div>
            </div>
        </section>
    );
}

export default about