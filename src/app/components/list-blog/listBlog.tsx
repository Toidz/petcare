"use client"
import { MdNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import "../../swiper/swiper-home.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const ListBlog = ({title}:any) =>{
    const array = [
        {
            title :"10 dấu hiệu cho thấy thú cưng của bạn đang bị street",
            discription:"Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc "
        },
         {
            title :"10 dấu hiệu cho thấy thú cưng của bạn đang bị street",
            discription:"Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc "
        },
         {
            title :"10 dấu hiệu cho thấy thú cưng của bạn đang bị street",
            discription:"Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc "
        },
         {
            title :"10 dấu hiệu cho thấy thú cưng của bạn đang bị street",
            discription:"Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc "
        },
         {
            title :"10 dấu hiệu cho thấy thú cưng của bạn đang bị street",
            discription:"Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc "
        },
         {
            title :"10 dấu hiệu cho thấy thú cưng của bạn đang bị street",
            discription:"Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc "
        },
         {
            title :"10 dấu hiệu cho thấy thú cưng của bạn đang bị street",
            discription:"Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc "
        },
         {
            title :"10 dấu hiệu cho thấy thú cưng của bạn đang bị street",
            discription:"Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc "
        },
    ]
    useEffect(() => {
    AOS.init({
        easing: "ease-in-out",
        once: false,
    });
    }, []);
    return(
        <>
            <div className="py-[20px] md:px-[60px] px-[16px]">
                <div data-aos="fade-up" data-aos-duration="600"  className="flex justify-between items-center text-center">
                    <div className="text-[var(--pri)] md:text-[21px] sm:text-[18px] text-[10px] font-[600] uppercase mb-[10px]">{title}</div> 
                        <a href="" className="mt-[-10px] hover:text-[var(--second)] flex items-center capitalize md:text-[18px] sm:text-[14px] text-[10px] font-[600] gap-[5px] py-[10px] text-[var(--pri)]">
                            <span>Xem thêm tất cả</span>
                            <MdNavigateNext />
                        </a>
                </div>
                
                <Swiper
                  data-aos="fade-up" 
                  data-aos-duration="800"
                  slidesPerView={1}
                  spaceBetween={30}
                  navigation={true}
                  pagination={false}
                  breakpoints={{
                    500: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1250: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },  
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                    {array.map((item, index) => (
                        <SwiperSlide key={index}> 
                            <a href="/" className="flex flex-col shadow-lg shadow-gray-200 rounded-[10px] overflow-hidden">
                                <div className="overflow-hidden">
                                    <img src="/client/images/demo-blog.jpg" className="h-[240px] w-[500px] transition-transform duration-1100 ease-in-out hover:scale-125" alt="demo-dog"></img>
                                </div>
                                <div className="px-[20px] flex flex-col items-center">
                                    <div className="text-center md:text-[16px] sm:text-[14px] text-[12px] font-[600] mt-[15px] mb-[5px] hover:text-[var(--second)] ">{item.title}</div>
                                    <div className="text-center md:text-[14px] mb-[5px] ms:text-[12px] text-[10px] line-clamp-2">{item.discription}</div>
                                    <div className="md:text-[16px] text-[12px] mt-[7px] mb-[15px] bg-[var(--pri)] w-[170px] text-center py-[8px] px-[20px] text-white rounded-[10px] hover:bg-[var(--second)]">Đọc Chi tiết</div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>  
            </div>
        </>
    )
}