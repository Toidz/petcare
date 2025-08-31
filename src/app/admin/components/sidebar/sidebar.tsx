import { MdSpaceDashboard } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaUserCog } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { AiFillProduct } from "react-icons/ai";
export const Sidebar = ()=>{
    const arrayLink = [
        {
            icon:MdSpaceDashboard,
            href:"/admin/dashboard",
            title:"Tổng quan"
        },
        {
            icon:MdCategory,
            href:"/admin/category",
            title:"Quản lý danh mục"
        },
        {
            icon:MdOutlinePets,
            href:"/admin/pet",
            title:"Quản lý thú cưng"
        },
        {
            icon:AiFillProduct,
            href:"/admin/product",
            title:"Quản lý sản phẩm"
        },
        {
            icon:IoIosListBox,
            href:"/admin/order",
            title:"Quản lý đơn hàng"
        },
        {
            icon:FaBlog,
            href:"/admin/blog",
            title:"Quản lý bài viết"
        },
        {
            icon:IoMdSettings,
            href:"/admin/setting",
            title:"Cài đặt chung"
        },
        {
            icon:FaUserCog,
            href:"/admin/profile",
            title:"Thông tin cá nhân"
        }
    ]
    const pathName = usePathname();
 
    return(
        <>
            <div menu-view="true" className="lg:z-90 z-120 lg:flex hidden fixed top-0 left-0 custom-scroll overflow-y-auto pl-[20px] lg:pt-[100px] pt-[20px] bg-[white] sm:w-[250px] w-[220px] h-full border-r border-r-gray-200">
                <div className="flex flex-col ">
                    {
                        arrayLink.map((item,index)=>{
                            const Icon= item.icon
                            const isPathName = pathName.includes(item.href)
                            return(        
                                <div key={index} className={isPathName?"active mb-[10px] flex gap-[5px] items-center py-[13px] pl-[20px] pr-[50px] mr-[10px] rounded-[8px] hover:bg-[var(--pri)] hover:text-[white]":"mb-[10px] hover:text-[white] hover:bg-[var(--pri)] flex gap-[5px] items-center py-[13px] pl-[20px] pr-[50px] mr-[10px] rounded-[8px]"}>
                                    <Icon className="text-[20px]" />
                                    <a href={item.href} className="sm:text-[14px] text-[12px]"> {item.title}</a>
                                </div>
                            )
                        }
                    )}
                    <div className=" flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <GrPowerShutdown className="text-[red] text-[20px]" />
                        <a href="/" className="text-[red] sm:text-[14px] text-[12px]"> Đăng xuất</a>
                    </div>
                </div>
            </div>
        </>
    )
}