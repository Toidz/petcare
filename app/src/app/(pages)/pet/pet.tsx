"use client"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";
import { FaCaretSquareDown } from "react-icons/fa";
import { FaCaretSquareUp } from "react-icons/fa";
import { Filter } from "@/app/components/filter/filer";
import { CategoryPet } from "@/app/components/pet/categoryPet";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IoCloseOutline } from "react-icons/io5";
import { ItemPet } from "@/app/components/pet/itemPet";
export const Pet = ()=>{
    const openFilter = ()=>{
        const sideFilter = document.querySelector("[side-filter]")
        const overLay = document.querySelector("[over-lay-filter]")
        sideFilter?.classList.remove("-translate-x-full");
        sideFilter?.classList.add("translate-x-0");
        overLay?.classList.remove("hidden")
    }
    const closeFilter = ()=>{
        const sideFilter = document.querySelector("[side-filter]")
        const overLay = document.querySelector("[over-lay-filter]")
        sideFilter?.classList.add("hello");
        sideFilter?.classList.add("-translate-x-full");
        sideFilter?.classList.remove("translate-x-0");
        overLay?.classList.add("hidden")
     
    }
    return(
        <>
            <div className="relative w-full lg:h-[210px] md:h-[200px] sm:h-[170px] h-[130px]">
                <img className="object-cover w-full h-full" src="/client/images/bg-category-demo.jpg" />
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-[red] opacity-20"></div>
                <div className="relative bottom-[74px]">
                    <div className="2xl:px-[60px] sm:px-[0] px-[16px] container mx-auto flex flex-col ">
                        <a href="/" className="text-[30px] text-[var(--pri)] font-[700]">Chó Phốc </a>
                        <div className="flex gap-[5px]">
                            <a href="/" className="text-[17px] text-[var(--pri)] flex gap-[1px] items-center"><span>Trang chủ</span> <MdKeyboardDoubleArrowRight /></a>
                            <a href="/" className="text-[17px] text-[var(--pri)] flex gap-[1px] items-center"><span>Chó cảnh</span>  <MdKeyboardDoubleArrowRight /></a>
                            <a href="/" className="text-[17px] text-[var(--pri)] flex gap-[1px] items-center"><span>Chó Phốc</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:px-[60px] lg:px-[40px] sm:px-[20px] px-[16px] py-[20px] ">
                <div className=" container mx-auto">
                    <div className="flex gap-[60px]">
                         <div onClick={closeFilter} over-lay-filter="true" className=" hidden z-70 fixed inset-0">
                            <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
                            <button 
                                icon-close="true" 
                                className="absolute top-[20px] right-[10px] bg-transparent border-none z-10">
                                <IoCloseOutline className="text-[35px] font-[700] text-[var(--pri)] opacity-100"/>
                            </button>
                        </div>
                        <div side-filter="true" className="lg:relative fixed top-0 left-0 lg:translate-x-0 -translate-x-full transition-transform duration-600 ease-in-out h-full z-120">
                            <Filter />
                        </div>
     
                        <div className="flex-1 flex flex-col">
                            <div className="lg:text-[36px] xd:text-[30px] text-[26px] text-[var(--pri)] font-[700]">Chó Phốc</div>
                            <div className="text-gray-500 md:text-[16px] text-[14px]">
                                Mô tả, thông tin chó Phốc
                            </div>
                            <div onClick={openFilter} className="hover:cursor-pointer hover:text-[var(--second)] lg:hidden flex gap-[5px] items-center mt-[5px]">
                                <FaFilter /> 
                                Lọc thú cưng theo thông tin 
                            </div>
                            <div className="mt-[10px] flex gap-[20px] lex items-center text-[14px] text-gray-500">
                                <div className="font-[700]">Sắp xếp:</div>
                                <div className="flex items-center gap-[3px] hover:text-[var(--second)]">
                                    <span>Giá giảm dần</span>
                                    <FaCaretSquareDown />
                                </div>
                                <div className="flex items-center gap-[3px] hover:text-[var(--second)]">
                                    <span>Giá tăng dần</span>
                                    <FaCaretSquareUp />
                                </div>
                            </div>
                            <div className="mb-[10px] py-[20px] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2 place-items-center gap-x-[20px] md:gap-y-[20px] gap-y-[15px]">
                                <ItemPet/>
                                <ItemPet/> 
                                <ItemPet/> 
                                <ItemPet/>
                                <ItemPet/>
                            </div>  
                            <Stack spacing={2} className="items-center">
                                <Pagination count={10} color="primary" size="medium" />
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}