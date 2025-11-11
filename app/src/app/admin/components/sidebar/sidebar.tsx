
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
import { pathAdmin } from "@/app/config/api";
import { useRouter } from "next/navigation";
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
            icon:FaBlog,
            href:"/admin/blog",
            title:"Quản lý bài viết"
        },
        {
            icon:IoIosListBox,
            href:"/admin/order",
            title:"Quản lý đơn hàng"
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
    const router = useRouter()
    const pathName = usePathname();
    const logout = async ()=>{
        fetch(`${pathAdmin}/account/logout`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:"",
            credentials: "include" 
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(12123)
            if(data.code=="success") router.push("/admin/account/login")
        })
    }
    return(
        <>
            <div menu-view="true" className="lg:z-90 z-120 lg:flex  transform lg:-translate-x-0 -translate-x-full transition-transform duration-600 ease-in-out  fixed top-0 left-0 custom-scroll overflow-y-auto sm:pl-[20px] pl-[10px] lg:pt-[100px] pt-[20px] bg-[white] sm:w-[250px] w-[230px] h-full border-r border-r-gray-200">
                <div className="flex flex-col ">
                    {
                        arrayLink.map((item,index)=>{
                            const Icon= item.icon
                            const isPathName = pathName.includes(item.href)
                            return(        
                                <div key={index} className={isPathName?"active mb-[10px] flex gap-[5px] items-center py-[13px] pl-[20px] pr-[50px] mr-[10px] rounded-[8px] hover:bg-[var(--pri)] hover:text-[white]":"mb-[10px] hover:text-[white] hover:bg-[var(--pri)] flex gap-[5px] items-center py-[13px] pl-[20px] pr-[50px] mr-[10px] rounded-[8px]"}>
                                    <Icon className="sm:text-[20px] text-[16px]" />
                                    <a href={item.href} className="sm:text-[14px] text-[12px]"> {item.title}</a>
                                </div>
                            )
                        }
                    )}
                    <div className=" flex gap-[5px] items-center py-[13px] px-[20px] mr-[10px] rounded-[8px]">
                        <GrPowerShutdown className="text-[red] text-[20px]" />
                        <div onClick={logout} className="text-[red] sm:text-[14px] text-[12px]"> Đăng xuất</div>
                    </div>
                </div>
            </div>
        </>
    )
}