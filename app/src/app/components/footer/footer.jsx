import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
export const Footer = () =>{
    return(
        <>
            <div className="md:pt-[50px] pt-[20px] md:pb-[20px] pb-0 bg-[var(--second)]">
                <div className="px-[16px] container mx-auto">
                    <div className="flex flex-col lg:px-[30px] px-0 ">
                        <div className="md:flex grid grid-cols-1 lg:gap-[30px] gap-[10px] justify-between bg-[var(--pri)] xl:px-[70px] xl:py-[30px] lg:px-[50px] px-[30px] py-[20px] rounded-[20px]">
                            <div className="flex md:flex-col sm:flex-row flex-col justify-center gap-y-[5px] xl:pt-0 lg:pt-[10px] pt-[5px]">
                                <div className="sm:text-left text-center capitalize text-white xl:text-[22px] lg:text-[18px] sm:text-[14px] text-[13px] font-[700]">Đăng ký ngay để không bỏ lỡ các</div>
                                <div className="sm:text-left text-center md:ml-0 sm:ml-[4px] ml-0 capitalize text-white xl:text-[22px] lg:text-[18px] sm:text-[14px] text-[13px] font-[700]">Chương trình - Mã giảm giá của Pet Care</div>
                            </div> 
                            <div className="flex-1 flex sm:flex-row flex-col gap-[10px] bg-white lg:py-[12px] lg:px-[20px] md:px-[8px] md:py-[7px] py-[14px] px-[20px] rounded-[10px]">
                                <input className="flex-1 md:text-[14px] text-[12px] sm:placeholder:text-[14px] placeholder:text-[12px] outline-none border border-gray-400 px-[22px] rounded-[10px] sm:py-0 py-[10px]" placeholder="Nhập email của bạn..."></input>
                                <button className="capitalizea bg-[var(--pri)] text-white lg:text-[16px] text-[12px] lg:px-[25px] md:px-[10px] md:py-0 sm:py-[15px] sm:px-[12px] py-[12px] rounded-[10px]">Đăng ký ngay</button>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-y-0 gap-y-[10px] xl:gap-x-[15px] sm:gap-x-[0px] gap-x-[10px] md:mt-[45px] mt-[20px]
                        after:content-[''] after:w-full after:h-[1px] after:bg-[var(--pri)] relative after:absolute after:bottom-[-15px] after:left-0
                        ">
                            <div>
                                <div className="xl:text-[16px] lg:text-[15px] text-[11px] uppercase text-[var(--pri)] font-[700] relative after:content-[''] after:w-1/5 after:h-[3px] after:bg-[var(--pri)] after:absolute after:bottom-[-10px] after:left-0">Liên hệ pet care</div>
                                <div className="text-[var(--pri)] mt-[18px] flex flex-col gap-y-[5px]"> 
                                    <div className="flex gap-[5px] items-center"> 
                                        <FaLocationDot className="xl:text-[16px] text-[12px]"/> 
                                        <span className="xl:text-[16px] text-[10px]">Khương Đình - Thanh Xuân - Hà Nội</span>
                                    </div>
                                    <div className="flex gap-[5px] items-center"> 
                                        <FaPhoneAlt className="xl:text-[14px] text-[11px]" />
                                        <span className="xl:text-[16px] text-[10px]">Hotline: 0914913491</span>
                                    </div>
                                    <div className="flex gap-[5px] items-center"> 
                                        <MdEmail className="xl:text-[15px] text-[12px] " />
                                        <span className="xl:text-[16px] text-[10px]">Email: contact@petcare.com.vn</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:ml-[20px] ml-0">
                                <div className="xl:text-[16px] lg:text-[15px] text-[11px] uppercase text-[var(--pri)] font-[700] relative after:content-[''] after:w-1/5 after:h-[3px] after:bg-[var(--pri)] after:absolute after:bottom-[-10px] after:left-0">SƠ LƯỢC VỀ PET Care</div>
                                <div className="xl:text-[16px] text-[12px] text-[var(--pri)] mt-[18px] md:line-clamp-none line-clamp-5"> Pet Care là trại nhân giống cung cấp thú cảnh lớn tại Việt Nam. Pet House hiện tại có một số cơ sở ở các thành phố như Hà Nội, tp. Hồ Chí Minh. Các cơ sở đang sở hữu nhiều con giống với các loại thú cảnh lớn nhỏ khác nhau.</div>
                            </div>
                            <div className="xl:ml-[70px] md:ml-[50px] ml-0">
                                <div className="xl:text-[16px] lg:text-[15px] text-[11px] uppercase text-[var(--pri)] font-[700] relative after:content-[''] after:w-1/5 after:h-[3px] after:bg-[var(--pri)] after:absolute after:bottom-[-10px] after:left-0">Chính sách mua hàng</div>
                                <div className="text-[var(--pri)] mt-[18px] flex flex-col gap-y-[5px]"> 
                                    <div className="flex flex-col gap-y-[5px]"> 
                                        <a className="xl:text-[16px] text-[12px] hover:transition-transform hover:translate-x-[20px] duration-700 hover:text-white" href="/">Nhận hàng - Thanh toán</a>
                                        <a className="xl:text-[16px] text-[12px] hover:transition-transform hover:translate-x-[20px] duration-700 hover:text-white" href="/">Chính sách bảo hành</a>
                                        <a className="xl:text-[16px] text-[12px] hover:transition-transform hover:translate-x-[20px] duration-700 hover:text-white" href="/">Chính sách bảo mật</a>
                                        <a className="xl:text-[16px] text-[12px] hover:transition-transform hover:translate-x-[20px] duration-700 hover:text-white" href="/">Điều khoản dịch vụ</a>
                                    </div>
                                </div>
                            </div>
                            <div className="md:ml-[50px] ml-0">
                                <div className="xl:text-[16px] lg:text-[15px] text-[11px] uppercase text-[var(--pri)] font-[700] relative after:content-[''] after:w-1/5 after:h-[3px] after:bg-[var(--pri)] after:absolute after:bottom-[-10px] after:left-0">Kết nối - Thanh toán</div>
                                <div className="mt-[18px] flex flex-col gap-y-[5px]"> 
                                    <div className="flex gap-[10px]">
                                        <div className="bg-[red] xl:w-[33px] xl:h-[33px] h-[25px] w-[25px] rounded-[99px] flex justify-center items-center">
                                            <FaYoutube className="xl:text-[20px] text-[14px] text-white"/>
                                        </div>
                                        <div className="bg-[blue] xl:w-[33px] xl:h-[33px] h-[25px] w-[25px] rounded-[99px] flex justify-center items-center">
                                            <FaFacebookF className="xl:text-[16px] text-[12px] text-white"/>
                                        </div>
                                        <div className="bg-[blue] xl:w-[33px] xl:h-[33px] h-[25px] w-[25px] rounded-[99px] flex justify-center items-center">
                                            <SiZalo className="xl:text-[22px] text-[16px] text-white"/>
                                        </div>                              
                                    </div>
                                    <div className="flex gap-[7px] items-center xl:mt-[10px] mt-[5px]">
                                        <img src="/client/images/icon-visa.svg" className="xl:w-[30px] xl:h-[30px] w-[20px] h-[20px]"></img>                                  
                                        <img src="/client/images/zalopay-logo.png" className="xl:w-[20px] xl:h-[20px] w-[15px] h-[15px]"></img>
                                        <img src="/client/images/Momo_logo.png" className="xl:w-[20px] xl:h-[20px] w-[15px] h-[15px]"></img>
                                        <img src="/client/images/icon-google-pay.svg" className="xl:w-[30px] xl:h-[30px] w-[20px] h-[20px]"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-[27px] md:pb-0 pb-[12px]">
                            <div className="text-[gray] lg:text-[14px] md:text-[12px] text-[8px]">
                                Copyright 2025 @ PetCare
                            </div>
                            <div className="text-[gray] text-[14px] flex gap-[15px]">
                                <a href="/" className="hover:text-white lg:text-[14px] md:text-[12px] text-[8px]"> Điều khoản dịch vụ</a>
                                <a href="/" className="hover:text-white lg:text-[14px] md:text-[12px] text-[8px]" >Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}