"use client"
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import {useState} from 'react'
export const CartPage = ()=>{
    const [quantity,SetQuantity] = useState(1)
    const [amount,SetAmount] = useState(5000000)
    const ChangeNumber = (event:any)=>{
        const value = parseInt(event.target.value)
        const pricePet = 5000000;
        SetQuantity(value);
        SetAmount(value*pricePet);
    }
    return(
        <div className="bg-[#F8F8F8]">
            <div className=" xl:px-[100px] py-[20px] container mx-auto">
                <div className="flex flex-col gap-y-[40px]">
                    <div className="py-[20px] bg-[white] shadow-lg shadow-gray-300 rounded-[15px]">
                        <div className="flex-col">
                            <div className="flex justify-between items-center px-[20px]">
                                <span className="text-[var(--pri)] sm:text-[25px] text-[20px] font-[700]">Giỏ hàng của bạn</span>
                                <a className="hover:text-[var(--second)] text-[var(--pri)] flex sm:gap-[1px] gap-0 sm:text-[16px] text-[13px] mr-[-8px] items-center" href="/">Quay lại trang chủ <MdOutlineNavigateNext className="text-[18px]"/></a>
                            </div>
                            <div className="mt-[10px] w-full h-[1px] bg-[var(--pri)]"></div>
                            <div item-cart="true">
                                <div className="mt-[30px] px-[20px] flex gap-[10px] ">
                                    <div className="">
                                        <IoCloseOutline className="sm:text-[25px] text-[20px] sm:mb-[30px] mb-[20px]"/>
                                        <input className="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]" type="checkbox"></input>
                                    </div>
                                    <div className="flex-1 flex gap-[10px] items-center lg:flex-nowrap flex-wrap">    
                                        <img src="/client/images/demoDog.jpg" className="sm:h-[130px] sm:w-[170px] h-[90px] w-[120px] rounded-[10px]" alt="demo-dog" ></img>
                                        <div className="lg:w-[39%] w-[52%] flex flex-col">
                                            <div className="sm:text-[20px] text-[14px] text-[var(--pri)] font-[700]">
                                                Chó phốc lông vàng
                                            </div>
                                            <div className="flex gap-[5px] sm:text-[16px] text-[13px] ">
                                                <span className="text-[var(--pri)] font-[700]">Mã thú cưng:</span> 
                                                <span>BH1232</span>
                                            </div>
                                            <div className="sm:text-[16px] text-[13px]">
                                                <span className="text-[var(--pri)] font-[700] mr-[5px]">Giới tính:</span> 
                                                <span>Đực</span>
                                            </div>
                                            <div className="sm:text-[16px] text-[13px]">
                                                <span className="text-[var(--pri)] font-[700] mr-[5px]">Tháng tuổi:</span> 
                                                <span>7</span>
                                            </div>
                                        </div>
                                        <div className="sm:mt-0 mt-[10px] sm:ml-0 ml-[-10px] lg:w-auto w-full flex justify-between sm:text-[16px] text-[12px]">
                                            <div className="flex gap-[5px] items-center mr-[40px]">
                                                <span className="text-[var(--pri)] font-[700]">Số lượng mua:</span> 
                                                <input onChange={ChangeNumber} type="number" min="1" value={quantity}  className="outline-none border-b border-b-gray-400 w-[60px] text-center"></input>
                                            </div>
                                            <div className="flex gap-[5px] items-center">
                                                <span>{quantity} x</span> 
                                                <span>5.000.000 ₫</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[30px] w-full h-[1px] bg-[var(--pri)]"></div>
                            <div className="flex flex-col p-[20px] gap-y-[10px]">
                                <div className="flex justify-end">
                                    <input className="rounded-l-[5px] outline-none sm:placeholder:text-[14px] placeholder:text-[12px] border border-[var(--pri)] sm:py-[8px] sm:px-[16px] py-[5px] px-[12px]" placeholder="Nhập mã giảm giá..."></input>
                                    <div className="cursor-pointer flex items-center sm:py-[8px] sm:px-[16px] py-[5px] px-[12px] text-white bg-[var(--pri)] rounded-r-[5px] sm:text-[16px] text-[14px]">Dùng mã</div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="">Tổng tiền:</span>
                                    <span className="">{amount.toLocaleString("vi-Vn")} VNĐ</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="">Giảm:</span>
                                    <span className="">0 VNĐ</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="">Thanh toán:</span>
                                    <span className="text-[20px] text-[var(--pri)] font-[700]">{(amount-0).toLocaleString("vi-Vn")} VNĐ</span>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="px-[20px] py-[20px] bg-[white] shadow-lg shadow-gray-300 rounded-[15px]">
                        <div className="text-[var(--pri)] sm:text-[22px] text-[20px] font-[700]">Thông tin khách hàng</div>
                        <div className="grid grid-cols-2 gap-[30px]">
                            <input className="placeholder:text-[14px] mt-[10px] py-[12px] px-[20px] outline-none rounded-[5px] border border-gray-300" placeholder="Họ và tên"></input>
                            <input className="placeholder:text-[14px] mt-[10px] py-[12px] px-[20px] outline-none rounded-[5px] border border-gray-300" placeholder="Số điện thoại"></input>
                        </div>
                        <input className="w-full mt-[20px] placeholder:text-[14px] py-[12px] px-[20px] outline-none rounded-[5px] border border-gray-300" placeholder="Địa chỉ nhận hàng"></input>
                        <div className="mt-[20px] text-[var(--pri)] sm:text-[20px] text-[18px] font-[700]">Chọn phương thức thanh toán</div>
                        <div className="mt-[10px] flex gap-[5px]">
                            <input className="w-[20px] h-[20xp]"  name="check-method" type="radio" value="money"/>
                            <span>Thanh toán tiền mặt</span>
                        </div>
                        <div className="mt-[10px] flex gap-[5px]">
                            <input className="w-[20px] h-[20xp]" name="check-method" type="radio" value="zalopay"/>
                            <span>Thanh toán Zalopay</span>
                        </div>
                        <div className="mt-[10px] flex gap-[5px]">
                            <input className="w-[20px] h-[20xp]"  name="check-method" type="radio" value="bank"/>
                            <span>Thanh toán chuyển khoản ngân hàng</span>
                        </div>
                        <div className="flex justify-center">
                            <div className=" cursor-pointer text-[18px] mt-[20px] px-[16px] py-[12px] bg-[var(--pri)] rounded-[10px] w-[150px] text-center text-white hover:bg-[var(--second)]">Đặt hàng</div>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>
    )
}