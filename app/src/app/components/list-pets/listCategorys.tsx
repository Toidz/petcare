"use client"
import { CategoryPet } from "../pet/categoryPet"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const ListCategory = () =>{
    useEffect(() => {
    AOS.init({
        easing: "ease-in-out",
        once: false,
    });
    }, []);
    return(
        <>
            <div data-aos="fade-up" data-aos-duration="800" className="py-[20px] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 place-items-center gap-x-[20px] md:gap-y-[20px] gap-y-[15px]">
                <CategoryPet/>
                <CategoryPet/>
                <CategoryPet/>
                <CategoryPet/>
                <CategoryPet/>
                <CategoryPet/>
            </div>  
        </>
    )
}