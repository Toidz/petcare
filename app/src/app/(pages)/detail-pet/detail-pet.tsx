"use client"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const DetailPage = ()=>{
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const readMore = ()=>{
        const descriptionInfo = document.querySelector("[description-info]")
        descriptionInfo?.classList.toggle("line-clamp-none")
    };
    const [quantity,SetQuantity] = useState(1)
    const [amount,SetAmount] =useState(5000000)
    const ChangeNumber = (event:any)=>{
        const value = parseInt(event.target.value)
        const pricePet = 5000000;
        SetQuantity(value);
        SetAmount(value*pricePet);
    }
    return(
        <div className="bg-[#F8F8F8]">
            <div className="relative w-full lg:h-[210px] md:h-[200px] sm:h-[170px] h-[130px]">
                <img className="object-cover w-full h-full" src="/client/images/bg-category-demo.jpg" />
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-[red] opacity-20"></div>
                <div className="relative sm:bottom-[60px] bottom-[51px]">
                    <div className="2xl:px-[60px] lg:px-[40px] sm:px-[20px] px-[16px] container mx-auto flex flex-col ">
                        <div className="flex gap-[5px] flex-wrap ">
                            <a href="/" className="sm:text-[16px] text-[14px] text-[var(--pri)] flex gap-[1px] items-center"><span>Trang chủ</span> <MdKeyboardDoubleArrowRight /></a>
                            <a href="/" className="sm:text-[16px] text-[14px] text-[var(--pri)] flex gap-[1px] items-center"><span>Chó cảnh</span> <MdKeyboardDoubleArrowRight /></a>
                            <a href="/" className="sm:text-[16px] text-[14px] text-[var(--pri)] flex gap-[1px] items-center"><span>Chó Phốc</span></a>
                        </div>
                        <a href="/" className="sm:text-[20px] text-[18px] text-[var(--pri)] font-[700]">Chó Phốc lông vàng</a>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="xl:px-[60px] lg:px-[40px] sm:px-[20px] px-[16px] py-[20px] container mx-auto">
                    <div className="flex lg:gap-[60px] md:gap-[40px] gap-[30px] items-start lg:flex-nowrap flex-wrap">
                        <div className="lg:order-1 order-2 lg:w-[57%] w-full">
                            <Swiper
                                spaceBetween={10}
                                navigation={false}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                <img  src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper>
                            <div className="bg-[white] p-[20px] mt-[27px] rounded-[20px] shadow-lg shadow-gray-300">
                                <div className="mb-[8px] text-[26px] text-[var(--pri)] font-[700]">Thông tin chi tiết</div>
                                <span description-info="true" className="sm:text-[16px] text-[14px]  text-gray-600 line-clamp-4">
                                    Chó Phốc sóc mini màu trắng mã PS3268 là một bé chó nhỏ xíu nhưng vô cùng nổi bật với bộ lông trắng muốt, dày và xù như một cục bông gòn di động. Gương mặt tròn trịa với đôi mắt đen long lanh, chiếc mũi nhỏ xinh và đôi tai vểnh cao tạo nên vẻ ngoài lanh lợi, dễ thương và luôn tươi tắn. Thân hình bé tuy nhỏ nhắn nhưng lại nhanh nhẹn, linh hoạt và luôn tràn đầy năng lượng. Phốc Sóc mini trắng rất tình cảm, quấn chủ và thích được vuốt ve, bế bồng. Với ngoại hình xinh xắn cùng tính cách hoạt bát, thân thiện, bé là người bạn đồng hành lý tưởng cho những ai yêu thích thú cưng nhỏ gọn và đáng yêu.
                                    Quyền lợi có được khi mua Chó Phốc sóc mini màu trắng mã PS3268 tại Pet House
                                    Bảo hành thuần chủng trọn đời.
                                    Bảo hành bệnh truyền nhiễm nguy hiểm ở chó là Care và Parvo 7 ngày đầu về nhà mới. Ngoài ra, quý khách có thể mua thêm gói bảo hiểm sức khỏe 1 năm nếu có nhu cầu. (Thú cưng là động vật sống, nhạy cảm với môi trường sống, thức ăn… bởi vậy hãy chăm sóc theo hướng dẫn của PetHouse hướng dẫn nhé)
                                    Miễn phí vận chuyển toàn quốc (đối với tàu hỏa và xe khách, taxi) – hỗ trợ 50-80% chi phí vận chuyển máy bay.
                                    Tặng kèm phụ kiện cho thú cưng gồm: Dây dắt cún, Vòng cổ, Bát ăn, Bình nước thông minh, Đồ chơi, Lược chải cho bé, Túi vận chuyển cho thú cảnh nhỏ.
                                    Giấy tờ đi kèm: Sổ theo dõi sức khoẻ (sổ tiêm phòng vacxin), hợp đồng mua bán, hướng dẫn chăm sóc, giấy chứng nhận nguồn gốc của trại cung cấp, thiệp cảm ơn.
                                    Giảm giá 10% cho các lần mua thú cưng tiếp theo.
                                    Giảm 20% cho các dịch vụ Spa cắt tỉa trọn đời, giảm 10% dịch vụ trông giữ cún tại cửa hàng. Giảm 5% mua phụ kiện trọn đời.
                                    Hỗ trợ bảo hiểm sức khỏe 1.000.000 Vnđ (trong trường hợp cún bị ốm và trong thời gian bảo hành theo điều khoản trong hợp đồng mua bán.)
                                    Tặng quà tặng trị giá 500.000 Vnđ khi giới thiệu bạn bè mua thú cưng tại Pet House. (Có thể quy đổi thành tiền mặt)
                                    Nói không với chó tàu bệnh, chó thải loại.
                                    Đồng hành cùng khách chăm sóc cún trọn đời.
                                    Hỗ trợ thu mua thú cưng khi sinh sản ra đời con với giá tốt nhất.
                                </span>
                                <div onClick={readMore} className="bg-[var(--pri)] hover:bg-[var(--second)] mx-auto w-[140px] text-center px-[20px] py-[10px] mt-[10px] text-[white] rounded-[10px]">Xem Thêm</div>
                            </div>
                        </div>
                        <div className="lg:order-2 order-1 lg:sticky top-0 relative lg:w-[43%] w-full">
                            <div className="flex flex-col gap-y-[1px] bg-white p-[24px] rounded-[20px] shadow-lg shadow-gray-300">
                                <div className="mb-[5px] flex gap-[10px] items-center">
                                    <img src="/client/images/demoDog.jpg" className="h-[90px] w-[130px] rounded-[10px]" alt="demo-dog" ></img>
                                    <div className="sm:text-[20px] text-[18px] text-[var(--pri)] font-[700]">
                                        Chó phốc lông vàng
                                    </div>
                                </div>
                                <div className="flex gap-[5px] sm:text-[16px] text-[14px] ">
                                    <span className="text-[var(--pri)] font-[700]">Mã:</span> 
                                    <span>BH12342</span>
                                </div>
                                <div className="flex gap-[5px] sm:text-[16px] text-[14px] ">
                                    <span className="text-[var(--pri)] font-[700]">Tháng tuổi:</span> 
                                    <span>7</span>
                                </div>
                                <div className="flex gap-[5px] sm:text-[16px] text-[14px]">
                                    <span className="text-[var(--pri)] font-[700]">Giới tính:</span> 
                                    <span>Đực</span>
                                </div>
                                <div className="flex gap-[5px] sm:text-[16px] text-[14px]">
                                    <span className="text-[var(--pri)] font-[700]">Màu:</span> 
                                    <span>Vàng</span>
                                </div>
                                <div className="flex gap-[5px] sm:text-[16px] text-[14px]">
                                    <span className="text-[var(--pri)] font-[700]">Số lượng còn:</span> 
                                    <span>3</span>
                                </div>
                                <div className="sm:text-[16px] text-[14px]">
                                    <span className="text-[var(--pri)] font-[700] mr-[5px]">Đặc điểm:</span> 
                                    <span>Nhanh nhẹn, ăn uống tốt, hiền lành</span>
                                </div>
                                <div className="sm:text-[16px] text-[14px]">
                                    <span className="text-[var(--pri)] font-[700] mr-[5px]">Nguồn gốc:</span> 
                                    <span>Thuần chủng, sinh sản tại Pet Care</span>
                                </div>
                                <div className="flex justify-between sm:text-[16px] text-[14px]">
                                    <div className="flex gap-[5px] items-center">
                                        <span className="text-[var(--pri)] font-[700]">Số lượng mua:</span> 
                                        <input onChange={ChangeNumber} type="number" min="1" value={quantity}  className="outline-none border-b border-b-gray-400 text-center w-[60px]"></input>
                                    </div>
                                    <div className="flex gap-[5px] items-center">
                                        <span>{quantity} x</span> 
                                        <span>5.000.000 ₫</span>
                                    </div>
                                </div>
                                <div className="mt-[10px] flex gap-[5px] items-center justify-end">
                                    <span className="md:text-[20px] text-[18px] text-[var(--pri)] font-[700] ">Tổng tiền:</span> 
                                    <span total-amount="true" className="md:text-[20px] text-[18px] text-[var(--pri)] font-[700]">{amount.toLocaleString("vi-Vn")} VNĐ</span>
                                </div>
                                <button className="rounded-[10px] mt-[10px] bg-[var(--pri)] py-[12px] px-[10px] text-white hover:bg-[var(--second)]">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}