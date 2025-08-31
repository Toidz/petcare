"use client"
import { FaPlayCircle } from "react-icons/fa";
import { BoxCommit } from "../box-commit/boxCommit";
import { ListCategory } from "../list-pets/listCategorys";
import { ListBlog } from "../list-blog/listBlog";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { ListPetsHome } from "../list-pets/listPetsHome";
import '../../../app/swiper/swiper-comment.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from 'react';

export const HomePage = ()=> {;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);


  return (
    <>
      <div className="xl:py-[60px] py-[45px] bg-[var(--third)]">
          <div className="xl:px-[60px] lg:px-[30px] px-[16px] container mx-auto">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[60px] md:text-start text-center">
                  <div data-aos="fade-right" className="flex flex-col">
                      <span className="xl:text-[60px] lg:text-[55px] text-[40px] text-[var(--pri)] font-[700] capitalize">Thêm một bạn</span>
                      <span className="lg:mt-[-15px] mt-[-10px] xl:text-[48px] lg:text-[40px] text-[33px] text-[var(--pri)] font-[700] capitalize">Thêm ngàn niềm vui</span>
                      <span className="mt-[10px] xl:pr-[100px] pr-[50] text-[17px] text-[var(--pri)] "> Có một con thú cưng đồng nghĩa với việc bạn có thêm niềm vui mới. Chúng tôi có nhiều lại con thú cưng, nhiều dịch vụ chăm sóc, nhiều sản phẩm chăm sóc thú cưng có thể đáp ứng nhu cầu của bạn!</span>
                      <div className="flex items-center gap-[17px] md:justify-start justify-center" >
                          <a href="/" className="mt-[20px] w-[140px] flex justify-center items-center gap-[10px] px-[5px] py-[10px] rounded-[20px] bg-transparent border border-[var(--pri)] text-[var(--pri)]"><span>Giới thiệu</span> <FaPlayCircle /></a>
                          <a href="" className="mt-[20px] w-[150px] flex justify-center items-center gap-[10px] px-[5px] py-[10px] rounded-[20px] bg-[var(--pri)] text-white">Khám phá ngay</a>
                      </div>
                  </div>
                  <div data-aos="fade-left"> 
                    <div className="xl:mt-0 lg:mt-[20px] mt-[36px] xl:w-[670px] lg:w-[475px] xl:h-[390px] lg:h-[310px] md:w-[350px] w-full overflow-hidden rounded-[30px]">
                        <img src="/client/images/bg-dog-cat.jpg" alt="bg-dog-cat"></img>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="py-[20px]">
          <div className="px-[16px] container mx-auto">
              <div className=" px-[60px] py-[20px] rounded-[90px] mx-auto lg:w-[930px] md:w-[700px] sm:w-[500px] w-auto  flex flex-col gap-y-[10px] bg-[var(--second)] text-center  text-[var(--pri)]">
                  <div data-aos="fade-down" className="text-[28px] font-[600]">Sơ lược về Pet Care</div>
                  <div data-aos="fade-right" >Pet House là trại nhân giống thú cảnh lớn tại Việt Nam và đồng thời là hệ thống cửa hàng cung cấp phụ kiện, dịch vụ chăm sóc làm đẹp thú cưng & khách sạn thú cưng.</div>
                  <div data-aos="fade-left">Với sự đa dạng về các giống chó mèo cảnh, chúng tôi đảm bảo chất lượng con giống, nguồn gen chuẩn cùng quy trình nhân giống chuyên nghiệp. Tại Pet House, các con giống đều là dòng thuần chủng, được chăm sóc kỹ lưỡng và có sức khỏe tốt, sẵn sàng về nhà mới.</div>
                  <a data-aos="flip-left"  href="/" className="mx-auto flex items-center justify-center mt-[20px] w-[170px] gap-[7px] px-[10px] py-[10px] rounded-[20px] bg-[var(--pri)] text-white">
                      <span>Tìm hiểu chi tiết</span>
                      <FaPlayCircle />
                  </a>
              </div>
          </div>
      </div>
      <BoxCommit/>
      <div className="py-[20px] lg:px-[60px] md:px-[40px] px-[16px]">
        <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col justify-center text-center">
          <div className="text-[var(--pri)] text-[21px] font-[600] uppercase mb-[10px]">Giống chó cảnh</div> 
          <div className="flex justify-center">
            <button className="uppercase text-black hover:text-black md:md:text-[13px] sm:text-[10px] text-[8px] font-[600] border px-[13px] border-r-0 py-[9px]">Giống phổ biến</button>
            <button className="uppercase text-gray-400 hover:text-black md:text-[13px] sm:text-[10px] text-[8px] font-[600] border px-[13px] border-r-0 py-[9px]">Thân thiện nhỏ xinh</button>
            <button className="uppercase text-gray-400 hover:text-black md:text-[13px] sm:text-[10px] text-[8px] font-[600] border px-[13px] border-r-0 py-[9px]">Giống phổ biến</button>
            <button className="uppercase text-gray-400 hover:text-black md:text-[13px] sm:text-[10px] text-[8px] font-[600] border px-[13px] py-[9px]">Giống phổ biến</button>
          </div>
        </div>
        <ListCategory/>
        <a href="" className="capitalize text-[17px] mx-auto w-[190px] flex justify-center items-center gap-[10px] py-[10px] rounded-[20px] bg-[var(--pri)] text-white">Xem thêm tất cả</a>
      </div>
      <div className="w-full h-[2px] bg-[var(--pri)]"></div>
      <div className="py-[20px] lg:px-[60px] md:px-[40px] px-[16px]">
        <div data-aos="fade-up" data-aos-duration="600" className="flex flex-col justify-center text-center">
          <div className="text-[var(--pri)] text-[21px] font-[600] uppercase mb-[10px]">Giống chó cảnh</div> 
          <div className="flex justify-center">
            <button className="uppercase text-black hover:text-black md:md:text-[13px] sm:text-[10px] text-[8px] font-[600] border px-[13px] border-r-0 py-[9px]">Giống phổ biến</button>
            <button className="uppercase text-gray-400 hover:text-black md:text-[13px] sm:text-[10px] text-[8px] font-[600] border px-[13px] border-r-0 py-[9px]">Thân thiện nhỏ xinh</button>
            <button className="uppercase text-gray-400 hover:text-black md:text-[13px] sm:text-[10px] text-[8px] font-[600] border px-[13px] border-r-0 py-[9px]">Giống phổ biến</button>
            <button className="uppercase text-gray-400 hover:text-black md:text-[13px] sm:text-[10px] text-[8px] font-[600] border px-[13px] py-[9px]">Giống phổ biến</button>
          </div>
        </div>
        <ListCategory/>
        <a href="" className="capitalize text-[17px] mx-auto w-[190px] flex justify-center items-center gap-[10px] py-[10px] rounded-[20px] bg-[var(--pri)] text-white">Xem thêm tất cả</a>
      </div>
      <div className="w-full h-[2px] bg-[var(--pri)]"></div>
      <ListPetsHome title ="Một số thú cưng dễ thương"/>
      <div className="w-full h-[2px] bg-[var(--pri)]"></div>
      <ListPetsHome title ="Một số vật phẩm dành cho thú cưng"/>
      <div className="w-full h-[2px] bg-[var(--pri)]"></div>
      <ListBlog title="Một số bài viết về thú cưng có ích" />
      <div className="w-full h-[2px] bg-[var(--pri)] mb-[20px]"></div>
      <div className="uppercase text-center mb-[20px] md:text-[20px] sm:text-[18px] text-[16px] text-[var(--pri)] font-[600]">Khách hàng checkin tại pet care</div>
      <div className="lg:px-[120px] md:px-[100px]  bg-[var(--second)] py-[20px]">
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="!w-[250px] mr-5 shrink-0">
                <img
                  src="/client/images/demoDog.jpg"
                  alt="demo"
                  className="w-full h-[260px] object-cover rounded-[15px]"
                />
               </div>
            ))}
          </div>
        </div>
      </div>
      <Swiper
        data-aos="fade-up"
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="swiper-comment"
      >
        <SwiperSlide className="swiper-comment-slide">
          <div className="flex gap-[5px]">
            <img src="/client/images/userDat.jpg" className="w-[50px] h-[50px] rounded-[100px]"></img>
            <div className="flex flex-col gap-y-[10px] mt-[20px]">
              <div className="flex gap-[2px]">
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
              </div>
              <div className="line-clamp-2 text-start text-[15px]">Em cảm ơn ạ! Cún rất dễ thương quá trừi, nó cứ quấn lấy em hoài. Dịch vụ tốt quá ạ. Sau em sẽ giới thiệu shop mình cho bạn bè</div>
              <div className="text-start text-[16px]"><span className="font-[600]">User</span> / Zalo</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-comment-slide">
          <div className="flex gap-[5px]">
            <img src="/client/images/userDat.jpg" className="w-[50px] h-[50px] rounded-[100px]"></img>
            <div className="flex flex-col gap-y-[10px] mt-[20px]">
              <div className="flex gap-[2px]">
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
              </div>
              <div className="line-clamp-2 text-start text-[15px]">Em cảm ơn ạ! Cún rất dễ thương quá trừi, nó cứ quấn lấy em hoài. Dịch vụ tốt quá ạ. Sau em sẽ giới thiệu shop mình cho bạn bè</div>
              <div className="text-start text-[16px]"><span className="font-[600]">User</span> / Zalo</div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="swiper-comment-slide">
          <div className="flex gap-[5px]">
            <img src="/client/images/userDat.jpg" className="w-[50px] h-[50px] rounded-[100px]"></img>
            <div className="flex flex-col gap-y-[10px] mt-[20px]">
              <div className="flex gap-[2px]">
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
              </div>
              <div className="line-clamp-2 text-start text-[15px]">Em cảm ơn ạ! Cún rất dễ thương quá trừi, nó cứ quấn lấy em hoài. Dịch vụ tốt quá ạ. Sau em sẽ giới thiệu shop mình cho bạn bè</div>
              <div className="text-start text-[16px]"><span className="font-[600]">User</span> / Zalo</div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="swiper-comment-slide">
          <div className="flex gap-[5px]">
            <img src="/client/images/userDat.jpg" className="w-[50px] h-[50px] rounded-[100px]"></img>
            <div className="flex flex-col gap-y-[10px] mt-[20px]">
              <div className="flex gap-[2px]">
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
              </div>
              <div className="line-clamp-2 text-start text-[15px]">Em cảm ơn ạ! Cún rất dễ thương quá trừi, nó cứ quấn lấy em hoài. Dịch vụ tốt quá ạ. Sau em sẽ giới thiệu shop mình cho bạn bè</div>
              <div className="text-start text-[16px]"><span className="font-[600]">User</span> / Zalo</div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="swiper-comment-slide">
          <div className="flex gap-[5px]">
            <img src="/client/images/userDat.jpg" className="w-[50px] h-[50px] rounded-[100px]"></img>
            <div className="flex flex-col gap-y-[10px] mt-[20px]">
              <div className="flex gap-[2px]">
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
                <FaStar  className="text-[yellow]"/>
              </div>
              <div className="line-clamp-2 text-start text-[15px]">Em cảm ơn ạ! Cún rất dễ thương quá trừi, nó cứ quấn lấy em hoài. Dịch vụ tốt quá ạ. Sau em sẽ giới thiệu shop mình cho bạn bè</div>
              <div className="text-start text-[16px]"><span className="font-[600]">User</span> / Zalo</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
