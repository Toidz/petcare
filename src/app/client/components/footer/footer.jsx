import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
export const Footer = () =>{
    return(
        <>
            <div className="pt-[60px] pb-[20px] bg-[var(--second)]">
                <div className="container mx-auto">
                    <div className="flex flex-col px-[30px]">
                        <div className="flex gap-[30px] justify-between bg-[var(--pri)] px-[70px] py-[30px] rounded-[20px]">
                            <div className="flex flex-col gap-y-[5px]">
                                <div className="capitalize text-white text-[22px] font-[700]">Đăng ký ngay để không bỏ lỡ các</div>
                                <div className="capitalize text-white text-[22px] font-[700]">Chương trình - Mã giảm giá của Pet Care</div>
                            </div> 
                            <div className="flex-1 flex gap-[10px] bg-white py-[12px] px-[20px] rounded-[10px]">
                                <input className="flex-1 placeholder:text-[14px] outline-none border border-gray-400 px-[22px] rounded-[10px]" placeholder="Nhập email của bạn..."></input>
                                <button className="capitalizea bg-[var(--pri)] text-white text-[16px] px-[25px] rounded-[10px]">Đăng ký ngay</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-x-[30px] mt-[30px]
                        after:content-[''] after:w-full after:h-[1px] after:bg-[var(--pri)] relative after:absolute after:bottom-[-15px] after:left-0
                        ">
                            <div>
                                <div className="uppercase text-[var(--pri)] font-[700] relative after:content-[''] after:w-1/5 after:h-[3px] after:bg-[var(--pri)] after:absolute after:bottom-[-10px] after:left-0">Liên hệ pet care</div>
                                <div className="text-[var(--pri)] mt-[18px] flex flex-col gap-y-[5px]"> 
                                    <div className="flex gap-[5px] items-center"> 
                                        <FaLocationDot className="text-[16px]"/> 
                                        <span className="">Khương Đình - Thanh Xuân - Hà Nội</span>
                                    </div>
                                    <div className="flex gap-[5px] items-center"> 
                                        <FaPhoneAlt className="text-[14px]" />
                                        <span>Hotline: 0914913491</span>
                                    </div>
                                    <div className="flex gap-[5px] items-center"> 
                                        <MdEmail className="text-[15px]" />
                                        <span>Email: contact@petcare.com.vn</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-[20px] ">
                                <div className="uppercase text-[var(--pri)] font-[700] relative after:content-[''] after:w-1/5 after:h-[3px] after:bg-[var(--pri)] after:absolute after:bottom-[-10px] after:left-0">SƠ LƯỢC VỀ PET Care</div>
                                <div className="text-[var(--pri)] mt-[18px]"> Pet Care là trại nhân giống cung cấp thú cảnh lớn tại Việt Nam. Pet House hiện tại có một số cơ sở ở các thành phố như Hà Nội, tp. Hồ Chí Minh. Các cơ sở đang sở hữu nhiều con giống với các loại thú cảnh lớn nhỏ khác nhau.</div>
                            </div>
                            <div className="ml-[70px]">
                                <div className="uppercase text-[var(--pri)] font-[700] relative after:content-[''] after:w-1/5 after:h-[3px] after:bg-[var(--pri)] after:absolute after:bottom-[-10px] after:left-0">Chính sách mua hàng</div>
                                <div className="text-[var(--pri)] mt-[18px] flex flex-col gap-y-[5px]"> 
                                    <div className="flex flex-col gap-y-[5px]"> 
                                        <a className="hover:transition-transform hover:translate-x-[20px] duration-700 hover:text-white" href="/">Nhận hàng - Thanh toán</a>
                                        <a className="hover:transition-transform hover:translate-x-[20px] duration-700 hover:text-white" href="/">Chính sách bảo hành</a>
                                        <a className="hover:transition-transform hover:translate-x-[20px] duration-700 hover:text-white" href="/">Chính sách bảo mật</a>
                                        <a className="hover:transition-transform hover:translate-x-[20px] duration-700 hover:text-white" href="/">Điều khoản dịch vụ</a>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-[50px]">
                                <div className="uppercase text-[var(--pri)] font-[700] relative after:content-[''] after:w-1/5 after:h-[3px] after:bg-[var(--pri)] after:absolute after:bottom-[-10px] after:left-0">Kết nối - Thanh toán</div>
                                <div className="mt-[18px] flex flex-col gap-y-[5px]"> 
                                    <div className="flex gap-[10px]">
                                        <div className="bg-[red] w-[33px] h-[33px] rounded-[99px] flex justify-center items-center">
                                            <FaYoutube className="text-[20px] text-white"/>
                                        </div>
                                        <div className="bg-[blue] w-[33px] h-[33px] rounded-[99px] flex justify-center items-center">
                                            <FaFacebookF className="text-[16px] text-white"/>
                                        </div>
                                        <div className="bg-[blue] w-[33px] h-[33px] rounded-[99px] flex justify-center items-center">
                                            <SiZalo className="text-[22px] text-white"/>
                                        </div>                              
                                    </div>
                                    <div className="flex gap-[15px] items-center mt-[10px]">
                                        <img src="/client/images/icon-visa.svg"></img>
                                        <img src="/client/images/icon-master-card.svg"></img>
                                        <img src="/client/images/zalopay-logo.png" className="w-[20px] h-[20px]"></img>
                                        <img src="/client/images/Momo_logo.png" className="w-[20px] h-[20px]"></img>
                                        <img src="/client/images/icon-google-pay.svg"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-[27px]">
                            <div className="text-[gray] text-[14px]">
                                Copyright 2025 @ PetCare
                            </div>
                            <div className="text-[gray] text-[14px] flex gap-[15px]">
                                <a href="/" className="hover:text-white"> Điều khoản dịch vụ</a>
                                <a href="/" className="hover:text-white">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}