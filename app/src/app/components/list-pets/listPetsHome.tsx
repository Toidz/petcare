"use client"
import { MdNavigateNext } from "react-icons/md";
import { ItemPet } from "../pet/itemPet"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../../swiper/swiper-home.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const ListPetsHome = ({title}:any) =>{
    useEffect(() => {
    AOS.init({
        easing: "ease-in-out",
        once: false,
    });
      }, []);
    return(
        <>
            <div className="py-[20px] md:px-[56px] px-[16px]">
                <div data-aos="fade-up" data-aos-duration="600"  className="flex justify-between items-center text-center">
                    <div className="text-[var(--pri)] md:text-[21px] sm:text-[18px] text-[12px] font-[600] uppercase mb-[10px]">{title}</div> 
                    <a href="" className="hover:text-[var(--second)] flex items-center capitalize md:text-[18px] sm:text-[14px] text-[10px] font-[600] gap-[5px] mt-[-10px] text-[var(--pri)]">
                        <span>Xem thêm tất cả</span>
                        <MdNavigateNext />
                    </a>
                </div>
                <Swiper
                  data-aos="fade-up" data-aos-duration="800" 
                  slidesPerView={2}
                  spaceBetween={30}
                  navigation={true}
                  pagination={false}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1250: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },  
                    1400: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    }, 
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ItemPet/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ItemPet/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ItemPet/>
                  </SwiperSlide>
                  <SwiperSlide>
                     <ItemPet/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ItemPet/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ItemPet/>
                  </SwiperSlide>
                </Swiper>  
            </div>
        </>
    )
}