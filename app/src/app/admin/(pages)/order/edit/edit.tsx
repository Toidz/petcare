"use client"

import React from "react";
export const OrderEditPage = ()=>{
    return(
        <>
            <div className="xl:w-[calc(100%-240px)] lg:w-[calc(100%-220px)] w-full absolute top-[100px] xl:left-[240px] lg:left-[220px] left-0 flex flex-col mx-[16px] sm:px-[30px] px-[10px] sm:pr-[55px] pr-[30px]">
                <div className="sm:text-[30px] text-[20px] font-[700] mb-[30px]">Mã đơn hàng OD2348823</div>
                <div className="mb-[30px] grid md:grid-cols-2 grid-cols-1 gap-y-[20px] gap-x-[30px] bg-[white] sm:py-[30px] py-[20px] sm:px-[40px] px-[20px] border border-gray-300 rounded-[15px]">
                    <div className="flex flex-col">
                        <label htmlFor='name' className="text-[13px] mb-[5px]">Tên khách hàng</label>
                        <input id="name" className="px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor='phone' className="text-[13px] mb-[5px]">Số điện thoại</label>
                        <input id="phone" className="px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor='address' className="text-[13px] mb-[5px]">Địa chỉ</label>
                        <input id="address" className="px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[13px] mb-[5px]">Phương thức thanh toán</label>
                        <select className="sm:text-[14px] text-[12px] px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300">
                            <option >Tiền mặt</option>
                            <option>Chuyển khoản</option>
                            <option>Zalo pay</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[13px] mb-[5px]">Trạng thái thanh toán</label>
                        <select className="sm:text-[14px] text-[12px] px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300">
                            <option >Chưa thanh toán</option>
                            <option>Đã thanh toán</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[13px] mb-[5px]">Trạng thái đơn hàng</label>
                        <select className="sm:text-[14px] text-[12px] px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300">
                            <option >Khởi tạo</option>
                            <option>Thành công</option>
                            <option>Hủy</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:col-span-2 col-span-1">
                        <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
                            <div className="flex flex-col gap-y-[10px]">
                                <div className="font-[700]">Danh sách sản phẩm</div>
                                <div className="flex gap-[20px]">
                                    <img className="rounded-[10px] sm:w-[130px] h-[100px] w-[110px]" src="/client/images/demoDog.jpg"></img>
                                    <div className="flex flex-col sm:text-[12px] text-[10px]">
                                        <span>Chó phốc</span>
                                        <span>Số lượng: 1 x 3.000.000 VNĐ</span>
                                    </div>
                                </div>
                                <div className="flex gap-[20px]">
                                    <img className="rounded-[10px] sm:w-[130px] h-[100px] w-[110px]" src="/client/images/demoDog.jpg"></img>
                                    <div className="flex flex-col sm:text-[12px] text-[10px]">
                                        <span>Chó phốc</span>
                                        <span>Số lượng: 1 x 3.000.000 VNĐ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:ml-[70px] text-center font-[700] text-[var(--pri)] sm:mt-0 mt-[30px]">
                                Tổng tiền: 3.000.000 VNĐ
                            </div>
                        </div>
                        <div className="mt-[30px] flex flex-col items-center gap-y-[20px]">
                            <button className="sm:w-[270px] w-[200px] hover:bg-[var(--second)] rounded-[10px] sm:text-[20px] text-[16px] text-white bg-[var(--pri)] px-[20px] py-[20px]">Cập nhật đơn hàng</button>
                            <a href="/admin/order" className="text-[var(--pri)] hover:text-[var(--second)] sm:text-[20px] text-[16px] underline">Quay lại danh sách</a>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}