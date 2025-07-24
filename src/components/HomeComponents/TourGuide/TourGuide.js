"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import TourGuideItem from "./TourGuideItem";
import tourGuides from "./tourGuidesData";

const TourGuide = () => {
    return (
        <section className="TourGuide w-full relative bg-white sectionPadding overflow-hidden">
            <div className="custom-container relative flex flex-col items-center justify-center md:gap-[4.8rem] gap-[1.5rem]">
                <div className="Heading text-center flex flex-col items-center justify-center gap-[2rem]">
                    <span className="text-primary ButtonFont text-[4rem] leading-[1] font-medium tracking-wide">
                        Meet with Guide
                    </span>
                    <h2 className="text-heading-color font-semibold">
                        Meet with <span className="text-secondary"> Tour Guide</span>
                    </h2>
                </div>
                <div className="teamsslider w-full flex items-center justify-center">
                    <style>{`
                        .TourGuide .swiper-pagination-bullets {
                            display: flex;
                            gap: 0.5rem;
                            align-items: center;
                            justify-content: center;
                        }
                        .TourGuide .swiper-pagination-bullet {
                            border-radius: 5rem;
                            background: transparent;
                            border: 2px solid #73b458;
                            width: 1.2rem;
                            height: 1.2rem;
                            opacity: 1;
                            transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
                            margin: 0;
                        }
                        .TourGuide .swiper-pagination-bullet-active {
                            background: #73b458 !important;
                            width: 5rem !important;
                            border-radius: 15rem !important;
                            border: 2px solid #73b458 !important;
                        }
                    `}</style>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        speed={1000}
                        loop={true}
                        navigation={false}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1400: { slidesPerView: 4 },
                        }}
                        className="w-full pb-[5rem]! "
                    >
                        {tourGuides.map((guide, idx) => (
                            <SwiperSlide key={idx} className="flex items-center justify-center">
                                <TourGuideItem {...guide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TourGuide;