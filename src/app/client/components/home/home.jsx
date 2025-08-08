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
import '../../../../app/swiper/swiper-comment.css'

export const HomePage = ()=> {

  return (
    <>
      <div className="py-[60px] bg-[var(--third)]">
          <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-x-[60px]">
                  <div className="flex flex-col">
                      <span className="text-[60px] text-[var(--pri)] font-[700] capitalize">Thêm một bạn</span>
                      <span className="mt-[-15px] text-[48px] text-[var(--pri)] font-[700] capitalize">Thêm ngàn niềm vui</span>
                      <span className="mt-[10px] pr-[100px] text-[17px] text-[var(--pri)] "> Có một con thú cưng đồng nghĩa với việc bạn có thêm niềm vui mới. Chúng tôi có nhiều lại con thú cưng, nhiều dịch vụ chăm sóc, nhiều sản phẩm chăm sóc thú cưng có thể đáp ứng nhu cầu của bạn!</span>
                      <div className="flex items-center gap-[17px]">
                          <a href="/" className="mt-[20px] w-[140px] flex justify-center items-center gap-[10px] px-[5px] py-[10px] rounded-[20px] bg-transparent border border-[var(--pri)] text-[var(--pri)]"><span>Giới thiệu</span> <FaPlayCircle /></a>
                          <a href="" className="mt-[20px] w-[150px] flex justify-center items-center gap-[10px] px-[5px] py-[10px] rounded-[20px] bg-[var(--pri)] text-white">Khám phá ngay</a>
                      </div>
                  </div>
                  <div>
                    <div className="w-[620px] h-[420px] overflow-hidden rounded-[30px]">
                        <img src="/client/images/bg-dog-cat.jpg" alt="bg-dog-cat"></img>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="py-[20px]">
          <div className="container mx-auto">
              <div className=" px-[60px] py-[20px] rounded-[90px] mx-auto w-[930px] flex flex-col gap-y-[10px] bg-[var(--second)] text-center  text-[var(--pri)]">
                  <div className="text-[28px] font-[600]">Sơ lược về Pet Care</div>
                  <div >Pet House là trại nhân giống thú cảnh lớn tại Việt Nam và đồng thời là hệ thống cửa hàng cung cấp phụ kiện, dịch vụ chăm sóc làm đẹp thú cưng & khách sạn thú cưng.</div>
                  <div>Với sự đa dạng về các giống chó mèo cảnh, chúng tôi đảm bảo chất lượng con giống, nguồn gen chuẩn cùng quy trình nhân giống chuyên nghiệp. Tại Pet House, các con giống đều là dòng thuần chủng, được chăm sóc kỹ lưỡng và có sức khỏe tốt, sẵn sàng về nhà mới.</div>
                  <a href="/" className="mx-auto flex items-center justify-center mt-[20px] w-[170px] gap-[7px] px-[10px] py-[10px] rounded-[20px] bg-[var(--pri)] text-white">
                      <span>Tìm hiểu chi tiết</span>
                      <FaPlayCircle />
                  </a>
              </div>
          </div>
      </div>
      <BoxCommit/>
      <ListCategory/>
      <div className="w-full h-[2px] bg-[var(--pri)]"></div>
      <ListCategory/>
      <div className="w-full h-[2px] bg-[var(--pri)]"></div>
      <ListPetsHome title ="Một số thú cưng dễ thương"/>
      <div className="w-full h-[2px] bg-[var(--pri)]"></div>
      <ListPetsHome title ="Một số vật phẩm dành cho thú cưng"/>
      <div className="w-full h-[2px] bg-[var(--pri)]"></div>
      <ListBlog title="Một số bài viết về thú cưng có ích" />
      <div className="uppercase text-center mb-[20px] text-[20px] text-[var(--pri)] font-[600]">Khách hàng checkin tại pet care</div>
      <div className="px-[200px] bg-[var(--second)] py-[20px]">
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="!w-[250px] mr-5 shrink-0">
                <img
                  src="/client/images/demoDog.jpg"
                  alt={`dog-${i}`}
                  className="w-full h-[260px] object-cover rounded-[15px]"
                />
               </div>
            ))}
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
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
