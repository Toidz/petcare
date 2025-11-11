"use client"
import { FaFilter } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
export const PetPage = ()=>{
    return(
        <> 
            <div className="xl:w-[calc(100%-240px)] lg:w-[calc(100%-220px)] w-full absolute top-[100px] xl:left-[240px] lg:left-[220px] left-0 flex flex-col xl:px-[40px] mx-[16px] xl:pr-[55px] pr-[26px]">
                <div className="sm:text-[30px] text-[20px] font-[700] mb-[30px]">Quản lý thú cưng</div>
                <div className="inline-flex xl:w-[1000px] lg:w-[740px] w-full flex-wrap gap-[20px] bg-[white] items-center rounded-[10px] border-[1px] border-gray-300">
                    <div className="py-[20px] px-[30px] flex gap-[5px] items-center border-r-[1px] border-r-gray-300">
                        <FaFilter className="text-[18px]"/>
                        <span className="font-[700] text-[14px]">Bộ lọc</span>
                    </div>
                    <div className="py-[20px] px-[20px] border-r-[1px] border-r-gray-300">
                        <select className="font-[700] outline-none text-[14px] mr-[7px] w-[120px] ">
                            <option value="">Người tạo</option>
                            <option>Nguyễn Đạt</option>
                            <option>Nguyễn Đạt</option>
                        </select>
                    </div>
                    <div className="py-[20px] px-[23px] border-r-[1px] border-r-gray-300">
                        <select className="font-[700] outline-none text-[14px] mr-[5px] w-[125px] ">
                            <option value="">Danh mục</option>
                            <option>Chó cảnh</option>
                            <option>Mèo cảnh</option>
                        </select>
                    </div>
                        <div className="py-[20px] px-[23px] border-r-[1px] border-r-gray-300">
                        <select className="font-[700] outline-none text-[14px] mr-[5px] w-[125px] ">
                            <option value="">Giá tiền</option>
                            <option>Dưới 1 triệu</option>
                            <option>Từ 1 triệu - 3 triệu</option>
                            <option>Từ 3 triệu - 5 triệu</option>
                            <option>Trên 5 triệu</option>
                        </select>
                    </div>
                    <div className="py-[20px] px-[20px] border-r-[1px] border-r-gray-300 flex items-center">
                        <input type="date" className="font-[700] text-[14px] outline-none"/>
                        <span className="mx-[10px]">-</span>
                        <input type="date" className="font-[700] text-[14px] outline-none" />
                    </div>
                    <div className="w-[150px] py-[20px] pl-[10px] pr-[30px] flex gap-[5px] items-center text-[red] font-[700] text-[14px]">
                        <MdDelete className="text-[16px]" />
                        <div>Xóa lọc</div>
                    </div>
                </div>
                <div className="flex gap-[20px] items-center mt-[20px] flex-wrap">
                    <div className="flex items-center bg-[white] rounded-[10px] border border-gray-300">
                        <div className="py-[20px] px-[20px] border-r border-r-gray-300">
                            <select className="outline-none text-[14px] ">
                                <option>-- Hành động --</option>
                                <option>Xóa</option>
                            </select>
                        </div>
                        <div className="text-[14px] text-[red] px-[20px]">
                            Áp dụng
                        </div>
                    </div>
                    <div className="flex gap-[10px] items-center bg-[white] py-[20px] px-[20px] rounded-[10px] border border-gray-300">
                        <CiSearch />
                        <input className="placeholder:text-[14px] text-[14px] outline-none w-[300px]" placeholder="Tìm kiếm"></input>
                    </div>
                    <a href="/admin/pet/create" className="text-[white] text-[14px] hover:bg-[var(--second)] bg-[var(--pri)] py-[20px] px-[25px] rounded-[10px] border border-gray-300">+ Tạo mới</a>
                </div>
                <div className="mt-[20px]">
                    <div className="flex flex-col px-[30px] bg-[white] py-[30px] rounded-[20px]" >
                        <div className="overflow-x-auto">
                            <table className="w-[1400px]">
                                <thead className="bg-[#e5e1e1] ">
                                    <tr className="">
                                        <td className="p-[15px] text-[14px] font-[600] rounded-l-[10px] w-[70px]">
                                            <input type="checkbox" className="w-[20px] h-[20px]"></input>
                                        </td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[180px]">Tên thú cưng</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[250px]">Ảnh đại diện</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[90px]">Tuổi</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[120px]">Giới tính</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[120px]">Màu sắc</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[120px]">Số lượng</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[180px]">Giá tiền</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[100px]">Vị trí</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[180px]">Tạo bởi</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] py-[10px] w-[180px]">Cập nhật bởi</td>
                                        <td className="p-[15px] md:text-[14px] text-[12px] font-[600] rounded-r-[10px] py-[10px]">Hành động</td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td className="p-[15px] text-[14px] w-[40px]">
                                            <input type="checkbox" className="w-[20px] h-[20px]"></input>
                                        </td>
                                        <td className="p-[15px] text-[14px] ">
                                            <div >Chó cảnh</div>
                                        </td>
                                        <td className="p-[15px] ">
                                            <img className="rounded-[10px] w-[130px] h-[100px]" src="/client/images/demoDog.jpg"></img>
                                        </td>
                                        <td className="p-[15px] text-[14px] ">
                                            <div >7 Tháng</div>
                                        </td>
                                        <td className="p-[15px] text-[14px] ">
                                            <div >Đực</div>
                                        </td>
                                        <td className="p-[15px] text-[14px] ">
                                            <div >Vàng nâu</div>
                                        </td>
                                        <td className="p-[15px] text-[14px] ">
                                            <div >3</div>
                                        </td>
                                        <td className="p-[15px] text-[14px] ">
                                            <div >3.000.000 VNĐ</div>
                                        </td>
                                        <td className="p-[15px] text-[14px]">
                                            <div className="text-[14px] ml-[10px]">1</div>
                                        </td>
                                        <td className="p-[15px]  pr-[25px]">
                                            <div className="flex flex-col gap-y-[1px]">
                                                <div className="text-[14px]">Nguyễn Tiến Đạt</div>
                                                <div className="text-[12px]">16:04 - 27/03/2025</div>
                                            </div>
                                        </td>
                                        <td className="p-[15px] w-[160px] pr-[25px]">
                                            <div className="flex flex-col gap-y-[1px]">
                                                <div className="text-[14px]">Nguyễn Tiến Đạt</div>
                                                <div className="text-[12px]">16:04 - 27/03/2025</div>
                                            </div>
                                        </td>
                                        <td className="p-[15px]">
                                            <div className="flex">
                                                <a href="/admin/pet/edit" className="rounded-l-[10px] text-[14px] p-[15px] bg-[white] border-y border-l border-gray-300">
                                                    <FaRegEdit  className="text-[16px] font-[700]"/>
                                                </a>
                                                <div className="rounded-r-[10px] text-[14px] p-[15px] bg-[white] border border-gray-300">
                                                    <FaRegTrashCan className="text-[16px] text-[red] font-[700]" />
                                                </div>
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