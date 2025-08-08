import { MdNavigateNext } from "react-icons/md";
import { ItemPet } from "../pet/itemPet"

export const ListPet = ({title}:any) =>{
    return(
        <>
            <div className="py-[20px] px-[60px]">
                <div className="flex justify-between text-center">
                    <div className="text-[var(--pri)] text-[21px] font-[600] uppercase mb-[10px]">{title}</div> 
                        <a href="" className="hover:text-[var(--second)] flex items-center capitalize text-[18px] font-[600] gap-[5px] py-[10px] text-[var(--pri)]">
                            <span>Xem thêm tất cả</span>
                            <MdNavigateNext />
                        </a>
                </div>
                <div className="py-[20px] grid grid-cols-5 gap-x-[25px] gap-y-[18px]">
                    <ItemPet/>
                    <ItemPet/>
                    <ItemPet/>
                    <ItemPet/>
                    <ItemPet/>
                    <ItemPet/>
                </div>  
            </div>
        </>
    )
}