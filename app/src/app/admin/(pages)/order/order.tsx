"use client"
import { FaFilter } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
export const OrderPage = ()=>{
    return(
        <> 
            <div className="xl:w-[calc(100%-240px)] lg:w-[calc(100%-220px)] w-full absolute top-[100px] xl:left-[240px] lg:left-[220px] left-0 flex flex-col xl:px-[40px] mx-[16px] xl:pr-[55px] pr-[26px]">
                <div className="sm:text-[30px] text-[20px] font-[700] mb-[30px]">Quản lý đơn hàng</div>
                <div className="inline-flex xl:w-[1000px] lg:w-[740px] w-full flex-wrap gap-[20px] bg-[white] items-center rounded-[10px] border-[1px] border-gray-300">
                    <div className="py-[20px] px-[30px] flex gap-[5px] items-center border-r-[1px] border-r-gray-300">
                        <FaFilter className="text-[18px]"/>
                        <span className="font-[700] text-[14px]">Bộ lọc</span>
                    </div>
                    <div className="py-[20px] px-[20px] border-r-[1px] border-r-gray-300 flex items-center">
                        <input type="date" className="font-[700] text-[14px] outline-none" />
                        <span className="mx-[10px]">-</span>
                        <input type="date" className="font-[700] text-[14px] outline-none" />
                    </div>
                    <div className=" py-[20px] px-[20px] border-r-[1px] border-r-gray-300">
                        <select className="font-[700] outline-none text-[14px] mr-[7px] w-[220px] ">
                            <option value="">Phương thức thanh toán</option>
                            <option>Tiền mặt</option>
                            <option>Chuyển khoản</option>
                            <option>Zalo pay</option>
                        </select>
                    </div>
                    <div className="py-[20px] px-[23px] border-r-[1px] border-r-gray-300">
                        <select className="font-[700] outline-none text-[14px] mr-[5px] w-[190px] ">
                            <option value="">Trạng thái thanh toán</option>
                            <option>Đã thanh toán</option>
                            <option>Chưa thanh toán</option>
                        </select>
                    </div>
                    <div className="py-[20px] px-[23px] border-r-[1px] border-r-gray-300">
                        <select className="font-[700] outline-none text-[14px] mr-[5px] w-[190px] ">
                            <option value="">Trạng thái đơn hàng</option>
                            <option>Khởi tạo</option>
                            <option>Thành công</option>
                            <option>Hủy</option>
                        </select>
                    </div>
            
                    <div className="w-[150px] py-[20px] pl-[10px] pr-[30px] flex gap-[5px] items-center text-[red] font-[700] text-[14px]">
                        <MdDelete className="text-[16px]" />
                        <div>Xóa lọc</div>
                    </div>
                </div>
                <div className="flex gap-[20px] items-center mt-[20px] flex-wrap">
                    <div className="flex gap-[10px] items-center bg-[white] py-[20px] px-[20px] rounded-[10px] border border-gray-300">
                        <CiSearch />
                        <input className="placeholder:text-[14px] text-[14px] outline-none w-[300px]" placeholder="Tìm kiếm"></input>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <div className="flex flex-col px-[30px] bg-[white] py-[30px] rounded-[20px]" >
                        <div className="overflow-x-auto">
                            <table className="w-[1200px]">
                                <thead className="bg-[#e5e1e1]">
                                    <tr className="">
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] rounded-l-[10px] ">Mã</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px]">Thông tin khách</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[400px]">Danh sách sản phẩm</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] ">Thanh toán</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px]">Trạng thái</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px]">Ngày đặt</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] rounded-r-[10px] py-[10px]">Hành động</td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td className="font-[700] text-[var(--pri)] p-[15px] text-[14px] w-[100px]">OD0218312</td>
                                        <td className="p-[15px] text-[14px]">
                                            <div className="w-[150px]">Nguyễn Tiến Đạt</div>
                                            <div>SĐT: 0914913491</div>
                                            <div className="">Địa chỉ: 320 - Khương Đình - Hà Nội</div>
                                        </td>
                                        <td className="p-[15px] flex flex-col gap-y-[10px] w-[300px]">
                                            <div className="flex items-center gap-[10px]">
                                                <img className="rounded-[10px] w-[120px]" src="/client/images/demoDog.jpg"></img>
                                                <div className="flex flex-col">
                                                    <div className="text-[14px]">Chó phốc Trắng</div>
                                                    <div className="text-[12px]">Số lượng: 2 x 3.000.000đ</div>
                                                </div>   
                                            </div>
                                            <div className="flex items-center gap-[10px]">
                                                <img className="rounded-[10px] w-[120px]" src="/client/images/demoDog.jpg"></img>
                                                <div className="flex flex-col">
                                                    <div className="text-[14px]">Chó phốc Trắng</div>
                                                    <div className="text-[12px]">Số lượng: 2 x 3.000.000đ</div>
                                                </div>   
                                            </div>              
                                        </td>
                                        <td className="p-[15px] text-[14px]">
                                            <div className="text-[14px] w-[170px]" >Tổng tiền: 12.000.000đ</div>
                                            <div className="text-[14px]" >Giảm: 2.000.000đ</div>
                                            <div className="text-[14px]" >Thanh toán: 10.000.000đ</div>
                                            <div className="text-[14px]" >PTTT: Thanh toán tiền mặt</div>
                                            <div className="text-[14px]" >TTTT: Chưa thanh toán</div>
                                        </td>
                                        <td className="p-[15px] w-[170px] pr-[25px]">
                                            <div className="w-[120px] bg-[#FFEEDD] text-[#FFA956] text-[14px] font-[700]  text-center py-[10px] rounded-[10px]">Khởi tạo</div>
                                        </td>
                                        <td className="p-[15px] ">
                                            <div className="text-[14px]">22:10</div>
                                            <div className="text-[14px]">26/08/2025</div>
                                        </td>
                                        <td className="p-[15px]">
                                            <div className="flex">
                                                <a href="/admin/order/edit" className="rounded-[10px] text-[14px] p-[15px] bg-[white] border border-gray-300">
                                                    <FaRegEdit  className="text-[16px] font-[700]"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="mt-[30px] flex items-center gap-[10px] text-[14px]">
                    <span>Hiển thị 1 - 4 của 11</span>
                    <div className="bg-[white] p-[7px] rounded-[10px] border border-gray-300">
                        <select className="outline-none ">
                            <option>Trang 1</option>
                            <option>Trang 2</option>
                            <option>Trang 3</option>
                            <option>Trang 4</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}