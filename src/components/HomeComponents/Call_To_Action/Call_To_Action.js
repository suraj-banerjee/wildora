"use client";
import TextSlider from "@/components/TextSlider/TextSlider";
import { HERO_IMAGE8, RECTANGLE } from "@/constants/images";
import Image from "next/image";


const Call_To_Action = () => {
    return (
        <section className="WhyChoose w-full relative sectionPadding xl:pt-[15rem] xl:pb-[25rem]  overflow-hidden bg-cover bg-center bg-no-repeat bg-dark  flex items-center justify-center" style={{ backgroundImage: `url(${HERO_IMAGE8})` }}>
            <div className="custom-container relative flex flex-col md:flex-row items-center justify-end md:gap-[6rem] gap-[3rem]">
                {/* marque text here */}
                <div className="absolute 2xl:left-0 xl:left-[3rem] left-[50%] xl:-translate-x-[0%] -translate-x-[50%] xl:top-[65%] md:top-[25%] sm:top-[20%] top-[16%] -translate-y-[-50%] overflow-hidden whitespace-nowrap w-full 2xl:max-w-[40%] lg:max-w-[45%] md:max-w-[60%] max-w-[80%] z-[3]">
                    <TextSlider />
                </div>

                {/* Text Content */}
                <div className="w-full xl:w-[70%] flex flex-col xl:gap-[0rem] md:gap-[5rem] gap-[4rem] xl:items-start items-center xl:justify-start justify-center relative z-[2]">
                    <span className="2xl:text-[7rem] xl:text-[6.5rem] md:text-[6rem] text-[4rem] leading-[1.5] font-medium NewFont2 text-white flex items-end xl:justify-start justify-center gap-[1.5rem]">Wild <span className="text-secondary uppercase 2xl:text-[8.5rem] xl:text-[8rem] md:text-[6.5rem] text-[5rem] leading-[1.5] font-bold">life</span> With</span>
                    <span className="2xl:text-[7rem] xl:text-[6.5rem] md:text-[6rem] text-[4rem] leading-[1.5] font-medium NewFont2 text-white flex items-end gap-[1.5rem] xl:pl-[15rem] relative"><span className="text-secondary uppercase 2xl:text-[8.5rem] xl:text-[8rem] md:text-[6.5rem] text-[5rem] leading-[1.5] font-bold">Wild-dale</span>
                        <Image
                            height={500}
                            width={500}
                            src={RECTANGLE}
                            alt="Wildlife Image"
                            className="absolute right-[-10rem] 2xl:top-[-8rem] xl:top-[-5rem] lg:top-[-4rem] 2xl:w-[16rem] xl:w-[13rem] lg:w-[10rem] xl:block hidden h-auto object-cover"
                            priority
                        />
                    </span>
                </div>

            </div>
        </section>
    );
};

export default Call_To_Action;