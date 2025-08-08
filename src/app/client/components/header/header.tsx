"use client"
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuChevronDown } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaSortUp } from "react-icons/fa6";
export const Header = () =>{
    const handleSearch =(event:any)=>{
        const iconSearch = document.querySelector("[icon-search]")
        const iconClose = document.querySelector("[icon-close]")
        if(event.target.value){
            iconSearch?.classList.add("hidden")
            iconClose?.classList.remove("hidden")
        }
        else{
            iconSearch?.classList.remove("hidden")
            iconClose?.classList.add("hidden")
        }
    }
    const handleClose =()=>{
        console.log(1)
        const inputSearch = document.querySelector("[input-seach]") as HTMLInputElement;
        const iconSearch = document.querySelector("[icon-search]")
        const iconClose = document.querySelector("[icon-close]")
        if(inputSearch){
            inputSearch.value = "";
            iconSearch?.classList.remove("hidden")
            iconClose?.classList.add("hidden")
        }
    }  
    return (
    <>
        <div className="bg-[var(--pri)]">
            <div className="container mx-auto px-[5px] flex justify-end">
                <div className="flex gap-[3px] items-center text-[12px] text-white">
                    <FaLocationDot className="text-white"/>
                    <span>Cửa hàng tại: Khương Đình - Thanh Xuân - Hà Nội</span>
                </div>
            </div>
        </div>
        <div className="bg-[var(--second)]">
            <div className="container mx-auto py-[10px]">
                <div className="flex items-center justify-between gap-[20px]">
                        <a href="/" className=" w-[70px] rounded-[99px] overflow-hidden flex items-center justify-center">
                            <img src="/client/images/logo.jpg" className="h-[70px] object-cover" alt="logo" ></img>
                        </a>
                    <div>
                        <ul className="flex gap-[20px]">
                            <li className="relative group h-[70px] flex items-center">
                                <a href="/" className="flex items-center gap-[3px] capitalize text-[white]">
                                    <span>Trang chủ</span>
                                    <LuChevronDown className="mt-[4px]"/>
                                </a>
                                <ul className="hidden rounded-[10px] bg-[var(--pri)] py-[10px] px-[20px] absolute top-[70px] left-[-30px] group-hover:grid grid-cols-3 w-[600px]">
                                    <FaSortUp className="absolute top-[-6px] left-[65px] text-[var(--pri)]"/>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Về chúng tôi</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Dịch vụ Spa&Hotel</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chính sách bảo hành</a>
                                    </li>
                                     <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chính sách hoàn trả</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Tin tức</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Liên hệ</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group h-[70px] flex items-center">
                                <a href="/" className="flex items-center gap-[3px] capitalize text-[white]">
                                    <span>Chó cảnh</span>
                                    <LuChevronDown className="mt-[4px]"/>
                                </a>
                                <ul className="hidden rounded-[10px] bg-[var(--pri)] py-[10px] px-[20px] absolute top-[70px] left-[-30px] group-hover:grid grid-cols-3 w-[570px]">
                                     <FaSortUp className="absolute top-[-6px] left-[65px] text-[var(--pri)]"/>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chó Phốc</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chó Alaska</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chó Alaska</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chó Alaska</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chó Alaska</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chó Alaska</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chó Alaska</a>
                                    </li>
                                    <li>
                                        <a href="/" className="uppercase text-[13px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">Chó Alaska</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group h-[70px] flex items-center">
                                <a href="/" className="flex items-center gap-[3px] capitalize text-[white]">
                                    <span>Mèo cảnh</span>
                                    <LuChevronDown className="mt-[4px]"/>
                                </a>
                            </li>
                            <li className="relative group h-[70px] flex items-center">
                                <a href="/" className="flex items-center gap-[3px] capitalize text-[white]">
                                    <span>Phụ kiện</span>
                                    <LuChevronDown className="mt-[4px]"/>
                                </a>
                            </li>
                            <li className="relative group h-[70px] flex items-center">
                                <a href="/" className="flex items-center gap-[2px] capitalize text-[white]">
                                    <span>Đồ ăn</span>
                                    <LuChevronDown className="mt-[4px]"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-[35px] items-center ">
                        <div className="flex-1 flex items-center px-[10px] py-[5px] h-[34px] bg-[white] rounded-[5px]">
                            <input input-seach="true" onChange={handleSearch} type="text" placeholder="Bạn muốn tìm gì?" className="ml-[5px] pr-[10px] outline-none flex-1 placeholder:font-[550] placeholder:text-[13px] text-[13px] w-[180px]"></input>
                            <button icon-search="true" className="bg-transparent border-none">
                                <CiSearch className="text-[18px]" />
                            </button>
                            <button icon-close="true" onClick={handleClose} className="bg-transparent border-none hidden">
                                <IoCloseOutline className="text-[18px]"/>
                            </button>
                        </div>
                        <div className="flex justify-center gap-[15px] items-center">
                            <FaPhoneAlt className="text-[white]"/>
                            <div className="text-[white] text-[14px] flex flex-col">
                                <span>HotLine</span>
                                <span>0914913491</span>
                            </div>
                        </div>
                        <div className="relative">
                            <FaCartShopping className="text-[30px] text-[white]"/>
                            <div className="text-white text-[12px] absolute top-[-5px] right-[-6px] w-[20px] h-[20px] bg-[var(--pri)] flex items-center justify-center rounded-[50px]" >
                            0
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
       
    </>
  );
}
