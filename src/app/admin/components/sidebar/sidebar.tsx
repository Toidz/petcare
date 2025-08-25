import { MdSpaceDashboard } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaUserCog } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
export const Sidebar = ()=>{
    return(
        <>
            <div menu-view="true" className="lg:z-90 z-120 lg:flex hidden fixed top-0 left-0 custom-scroll overflow-y-auto pl-[20px] lg:pt-[100px] pt-[20px] bg-[white] sm:w-[250px] w-[220px] h-full border-r border-r-gray-200">
                <div className="flex flex-col ">
                    <div className=" active flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <MdSpaceDashboard className="text-[20px]" />
                        <a href="/" className="sm:text-[14px] text-[12px]"> Tổng quan</a>
                    </div>
                    <div className=" flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <MdCategory className="text-[20px]" />
                        <a href="/" className="sm:text-[14px] text-[12px]"> Quản lý danh mục</a>
                    </div>
                    <div className=" flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <MdOutlinePets className="text-[20px]" />
                        <a href="/" className="sm:text-[14px] text-[12px]"> Quản lý pet</a>
                    </div>
                    <div className=" flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <FaProductHunt className="text-[20px]" />
                        <a href="/" className="sm:text-[14px] text-[12px]"> Quản lý sản phẩm</a>
                    </div>
                    <div className=" flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <IoIosListBox className="text-[20px]" />
                        <a href="/" className="sm:text-[14px] text-[12px]"> Quản lý đơn hàng</a>
                    </div>
                    <div className=" flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <IoMdSettings  className="text-[20px]" />
                        <a href="/" className="sm:text-[14px] text-[12px]"> Cài đặt chung</a>
                    </div>
                    <div className=" flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <FaUserCog className="text-[20px]" />
                        <a href="/" className="sm:text-[14px] text-[12px]"> Thông tin cá nhân</a>
                    </div>
                    <div className=" flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <GrPowerShutdown className="text-[red] text-[20px]" />
                        <a href="/" className="text-[red] sm:text-[14px] text-[12px]"> Đăng xuất</a>
                    </div>
                </div>
            </div>
        </>
    )
}