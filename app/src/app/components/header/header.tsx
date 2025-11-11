"use client"
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuChevronDown } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaSortUp } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
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
    const iconSearchClick = ()=>{
        const iconLogo = document.querySelector("[icon-logo]")
        const listMenu = document.querySelector("[list-menu]")
        const searchClick = document.querySelector("[search-click]")
        iconLogo?.classList.add("hidden")
        listMenu?.classList.add("hidden")
        searchClick?.classList.remove("hidden")
        searchClick?.classList.add("flex")
    }
    const deleteSearch = ()=>{
        const iconLogo = document.querySelector("[icon-logo]")
        const listMenu = document.querySelector("[list-menu]")
        const searchClick = document.querySelector("[search-click]")
        iconLogo?.classList.remove("hidden")
        listMenu?.classList.remove("hidden")
        searchClick?.classList.add("hidden")
        searchClick?.classList.remove("flex")
    }
    const openMenu =()=>{
        const menuFormat = document.querySelector("[menu-format]")
        const overLay = document.querySelector("[over-lay]")
        menuFormat?.classList.remove("-translate-x-full");
        menuFormat?.classList.add("translate-x-0");
        overLay?.classList.remove("hidden")
    }
    const closeMenuOpened = ()=>{
        const menuFormat = document.querySelector("[menu-format]")
        const overLay = document.querySelector("[over-lay]")
        menuFormat?.classList.add("-translate-x-full");
        menuFormat?.classList.remove("translate-x-0");
        overLay?.classList.add("hidden")
    }
    const itemMenu = (event:any)=>{
        const index = event.currentTarget.getAttribute("data-key");
        const itemMenu = document.querySelectorAll("[item-menu]")
        itemMenu.forEach((menu, i) => {
            if (String(i) === index) {
       
                menu.classList.toggle("hidden");
            }
            else{
                menu.classList.add("hidden")
            }

        });
    }
    const arrayMenu= [
        {
            parent:"Trang chủ",
            childs :["Về chúng tôi","Dịch vụ Spa&Hotel","Chính sách bảo hành","Chính sách hoàn trả","Tin tức","Liên hệ"]
        },
        {
            parent:"Chó cảnh",
            childs: ["Chó PHỐC SÓC","Chó POODLE","Chó CHIHUAHUA","Chó CORGI CHÂN LÙN","Chó GOLDEN","Chó LABRADOR","Chó ALASKA","Chó HUSKY","Chó AKITA","Chó SHIBA","Chó SAMOYED","Chó CHOW CHOW","Chó PUG MẶT XỆ","Chó BULL PHÁP","Chó BULL ANH"]
        },
        {
            parent:"Mèo cảnh",
            childs: ["Mèo ANH LÔNG NGẮN","Mèo MUNCHKIN","Mèo SCOTTISH FOLD","Mèo ANH LÔNG DÀI","Mèo BA TƯ","Mèo BENGAL","Mèo HIMALAYA","Mèo MAINE COON","Mèo MỸ TAI XOẮN","Mèo RAGDOLL","Mèo SPHYNX","Mèo GOLDEN"]
        },
        {
            parent:"Phụ kiện",
            childs:[
                {
                    parent:"Phụ kiện cho chó",
                    childs:["Đệm cho chó", "Balo cho chó", "Đồ chơi cho chó"]
                }
                ,
                {
                    parent:"Phụ kiện cho mèo",
                    childs:["Đệm cho mèo", "Balo cho mèo", "Đồ chơi cho mèo"]
                }
            ]
        },
        {
            parent:"Thực phẩm",
            childs:[
                {
                    parent:"Thực phẩm cho chó",
                    childs:["Thức ăn cho chó","Thuốc cho chó","Thực phẩm bổ xung cho chó"]
                }
                ,
                {
                    parent:"Thực phẩm cho mèo",
                    childs:["Thức ăn cho mèo","Thuốc cho mèo","Thực phẩm bổ xung cho mèo"]
                }
            ]
        }
    ]
    return (
    <div>
        <div className="bg-[var(--pri)]">
            <div className="xl:px-[60px] lg:px-[30px] px-[16px] container mx-auto flex justify-end">
                <div className="flex gap-[3px] items-center text-[12px] text-white">
                    <FaLocationDot className="text-white"/>
                    <span>Cửa hàng tại: Khương Đình - Thanh Xuân - Hà Nội</span>
                </div>
            </div>
        </div>
        <div className="bg-[var(--second)] ">
            <div className="xl:px-[60px] lg:px-[30px] px-[16px] md:py-0 py-[5px] container mx-auto">
                <div className="flex items-center justify-between gap-[20px]">
                    <a icon-logo="true" href="/" className="md:order-0 md:mr-0 mr-[-40px] order-1 w-[70px] rounded-[99px] overflow-hidden flex items-center justify-center">
                        <img src="/client/images/logo.jpg" className="h-[70px] object-cover" alt="logo" ></img>
                    </a>
                    <div list-menu="true">
                        <IoMdMenu onClick={openMenu} className="md:order-1 order-0 md:hidden block text-[33px] text-white"/>
                        <div onClick={closeMenuOpened} over-lay="true" className="hidden z-70 fixed inset-0">
                            <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
                            <button 
                                icon-close="true" 
                                className="absolute top-[20px] right-[10px] bg-transparent border-none z-10">
                                <IoCloseOutline className="text-[35px] font-[700] text-[var(--pri)] opacity-100"/>
                            </button>
                        </div>
                        <ul menu-format="true" className="custom-scroll md:overflow-visible overflow-y-auto overflow-x-hidden z-100 md:pl-0 pl-[20px] md:h-auto h-full md:relative fixed top-0 left-0 md:w-auto w-[230px]  md:bg-transparent bg-[var(--pri)] md:flex  gap-[20px]  transform md:-translate-x-0 -translate-x-full transition-transform duration-600 ease-in-out">
                            {arrayMenu.map((item,i) =>(
                                <li key={i}  className="py-[30px] md:ml-0 ml-[-20px] md:pl-0 pl-[20px] md:border-none border-b border-gray-400 relative group flex items-center md:flex-none flex-col justify-center">
                                    <div className="h-full w-full relative flex md:items-center justify-between gap-[3px] capitalize text-[white]">
                                        <a href="/">{item.parent?item.parent:""}</a>
                                        <LuChevronDown data-key={i} onClick={itemMenu} className="md:mt-[4px] mr-0  md:text-[16px] text-[23px]"/>
                                    </div>
                                    {item.childs.length>0?
                                        <ul key={i} item-menu="true" className="hidden rounded-[10px] bg-[var(--pri)] py-[10px] px-[20px] md:absolute relative md:top-[80px] md:left-[-30px] top-0 left-0 md:group-hover:grid grid-cols-2 md:w-[500px] ">
                                            <FaSortUp className="absolute top-[-6px] left-[65px] text-[var(--pri)]"/>
                                            {item.childs.map((child,index) =>{
                                                if (typeof child === "string") {
                                                    return(
                                                        <li key={index} className="">
                                                            <a href="/" className="uppercase md:text-[13px] text-[10px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">{child}</a>
                                                        </li>
                                                    )
                                                }
                                                else{
                                                   return(
                                                        <li key={index} className="mt-[10px]">
                                                            <span className="uppercase font-[600] text-white text-[14px]">{child.parent}</span>
                                                            <ul className="pl-[10px]">
                                                                {child.childs.map((childSub,sub) =>(
                                                                    <li key={sub}>
                                                                        <a href="/" className="uppercase md:text-[13px] text-[10px] font-[600] whitespace-nowrap text-white w-[170px] p-[13px] block hover:rounded-[10px] hover:bg-[var(--second)]">{childSub}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                   )
                                                }             
                                            })}
                                        </ul>                                        
                                        : ""
                                    }
                                </li>
                            ))}  
                        </ul>
                    </div>
                    <div className="md:order-2 order-2  flex lg:gap-[35px] gap-[20px] items-center ">
                        <CiSearch onClick={iconSearchClick} className="lg:hidden text-white text-[33px]" />
                        <div className="flex-1 lg:flex hidden  items-center px-[10px] py-[5px] h-[34px] bg-[white] rounded-[5px]">
                            <input input-seach="true" onChange={handleSearch} type="text" placeholder="Bạn muốn tìm gì?" className="ml-[5px] pr-[10px] outline-none flex-1 placeholder:font-[550] placeholder:text-[13px] text-[13px] w-[180px]"></input>
                            <button icon-search="true" className="bg-transparent border-none">
                                <CiSearch className="text-[18px]" />
                            </button>
                            <button icon-close="true" onClick={handleClose} className="bg-transparent border-none hidden">
                                <IoCloseOutline className="text-[18px]"/>
                            </button>
                        </div>
                        <div className="order-3 xl:flex hidden justify-center gap-[15px] items-center">
                            <FaPhoneAlt className="text-[white]"/>
                            <div className="text-[white] text-[14px] flex flex-col">
                                <span>HotLine</span>
                                <span>0914913491</span>
                            </div>
                        </div>
                        <div search-click="true" className="my-[18px] hidden border-b border-b-white flex-1 items-center px-[10px] py-[5px] h-[34px] bg-transparent rounded-[5px]">
                            <input input-seach="true" type="text" placeholder="Bạn muốn tìm gì?" className="bg-transparent flex-1 ml-[5px] pr-[10px] outline-none  placeholder:text-white placeholder:font-[550] placeholder:text-[13px] text-[13px] "></input>
                            <button icon-close="true" onClick={deleteSearch} className="bg-transparent border-none">
                                <IoCloseOutline className="text-[28px] text-white"/>
                            </button>
                        </div>
                        <div className="md:order-6 relative">
                            <FaCartShopping className="text-[30px] text-[white]"/>
                            <div className="text-white text-[10px] absolute top-[-5px] right-[-6px] w-[20px] h-[20px] bg-[var(--pri)] flex items-center justify-center rounded-[50px]" >
                            0
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
       
    </div>
  );
}
