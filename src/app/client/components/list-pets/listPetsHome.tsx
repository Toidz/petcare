import { MdNavigateNext } from "react-icons/md";
import { ItemPet } from "../pet/itemPet"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../../../swiper/swiper-home.css'


export const ListPetsHome = ({title}:any) =>{
    return(
        <>
            <div className="py-[20px] px-[60px]">
                <div className="flex justify-between text-center">
                    <div className="text-[var(--pri)] text-[21px] font-[600] uppercase mb-[10px]">{title}</div> 
                        <a href="" className="hover:text-[var(--second)] flex items-center capitalize text-[18px] font-[600] gap-[5px] py-[10px] text-[var(--pri)]">
                            <span>Xem thêm tất cả</span>
                            <MdNavigateNext />
                        </a>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={true}
                    pagination={false}
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