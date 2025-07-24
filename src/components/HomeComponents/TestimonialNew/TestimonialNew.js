"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import TestimonialSlideItem from "./TestimonialSlideItem";
import TestimonialData from "./TestimonialData"; // Assuming you have a file with testimonial data
import Image from "next/image";
import { TESTIMONIAL_IMAGE } from "@/constants/images";



const TestimonialNew = () => {

    return (
        <section className="TestimonialNewSec relative sectionPadding white-bg-section bg-lightGreen3 overflow-hidden"
            style={{
                backgroundImage: `url(${TESTIMONIAL_IMAGE})`,
                backgroundSize: "45%",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >

            <div className="custom-container relative flex items-center justify-end md:gap-[4.8rem] gap-[1.5rem]">
                <div className="lg:w-1/2 w-full lg:mt-[0] mt-[30px] flex flex-col items-start justify-center h-full gap-8">
                    <span className="text-primary ButtonFont text-[4rem] leading-[1] font-medium tracking-wide">
                        why choose us?
                    </span>
                    <h2 className="text-heading-color font-semibold"> We Make Every Journey <span className="text-secondary"> Seamless & Inspiring</span></h2>
                    {/* testimonial Slider */}
                    <div className="w-full flex items-center justify-center mt-[5rem]">
                        <style>{`
                            .vertical-swiper-container {
                                height: 300px;
                                min-height: 300px;
                                max-height: 100vh;
                                overflow: hidden;
                            }
                            .vertical-swiper-container .swiper-slide {
                                height: 300px !important;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                        `}</style>
                        <Swiper
                            direction="vertical"
                            modules={[Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            loop={true}
                            className="w-full vertical-swiper-container"
                        >
                            {TestimonialData.map((t, idx) => (
                                <SwiperSlide key={idx} className="w-full block!">
                                    <TestimonialSlideItem t={t} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialNew;