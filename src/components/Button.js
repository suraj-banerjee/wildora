import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const baseClass =
    "w-fit bg-primary NewFont text-white flex items-center justify-center gap-[20px] rounded-full xl:pl-[3rem] pl-[15px] pr-[0.8rem] py-[0.8rem] 2xl:text-[2rem] md:text-[2rem] text-[1.6rem] text-center leading-[1] shadow-[2px_5px_5px_rgba(0,0,0,0.2)] font-medium transition-all duration-300 ease-in-out group hover:bg-secondary";

const iconClass =
    "text-[1.4rem] xl:h-[3.5rem] xl:w-[3.5rem] h-[3rem] w-[3rem] rounded-full bg-white text-primary group-hover:text-secondary flex justify-center items-center group-hover:rotate-[-50deg]";

export function AppButton({ classes = "", children, href, onClick, type = "button" }) {
    if (href) {
        return (
            <Link href={href} className={`${baseClass} ${classes}`}>
                {children}
                <span className={iconClass}>
                    <Icon icon="formkit:arrowright" />
                </span>
            </Link>
        );
    }
    return (
        <button type={type} onClick={onClick} className={`${baseClass} ${classes}`}>
            {children}
            <span className={iconClass}>
                <Icon icon="formkit:arrowright" />
            </span>
        </button>
    );
}
