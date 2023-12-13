import React from "react";
import tammer from "../images/training.jpg";
import edgar from "../images/edgar.jpg";


function training() {
    return (
        <section className="data py-24 bg-black  md:h-screen text-white">
            <div className="md:flex md:px-28 items-start justify-evenly">

                <div className="md:flex md:justify-around md:pt-10">
                    <span className="dividers-1"></span>
                    <span className="text-[25px] font-libre pl-8 tracking-widest text-gray-300">
                        We're a nation of fighters.
                        <br />{" "}
                        <span className="text-[15px] leading-1">
                            Teachers, nurses, doctors, parents, students,
                            <br />
                            althetes, and business professionals. The
                            <br /> world is experiencing scary and uncertain
                            <br /> times. In troubled times your
                            <br /> home is your sancuary.
                        </span>
                    </span>
                </div>

                <div className="md:flex md:justify-around md:pt-72">
                    <span className="dividers-1"></span>
                    <span className="text-[25px] font-libre pl-8 tracking-widest text-gray-300">
                        We empower the everyday
                        <br /> heroes to be their best.
                        <br />{" "}
                        <span className="text-[15px]">
                            Housegym believe mental health starts with
                            <br /> physical health We're a group of licenses
                            <br /> professionals dedicated towards Providing
                            <br /> proper nutrition, fitness and accessories to
                            <br /> support that lifelong journey.
                        </span>
                    </span>
                </div>
            </div>
            <div className="h-100 bg-black">

                <div className="flex  md:px-20 justify-between h-screen text-white pb-4">
                    <div className=" w-1/4">

                        <img src={tammer} alt="" className="tammer w-100 h-100" />
                    </div>
                    <div className="text-white flex flex-col justify-start items-center 1/2 md:pt-28">
                        <span className="font-hertical tracking-widest text-gray-500 text-xl">HouseGym</span>
                        <span className="font-libre font-bold text-[50px] tracking-wider py-1">video series</span>
                        <span className="font-hertical font-thin text-[15px] text-gray-500 tracking-widest">4 circuits</span>
                        <div className="flex mt-10">
                            <button className="w-12 h-12 bg-gray-500"><span><i className="fa-solid fa-arrow-left-long"></i></span></button>
                            <button className="w-12 h-12 bg-gray-500 mx-5"><span><i className="fa-solid fa-arrow-right-long"></i></span></button>
                        </div>
                    </div>
                    <div className="1/4">

                        <img src={edgar} alt="" className="edgar" />
                    </div>
                </div>

                <div className="flex md:px-20 bg-black pb-20">
                    <div className="box1"></div>
                    <div className="box2 ml-4"></div>
                </div>
            </div>
        </section>
    );
}

export default training;
