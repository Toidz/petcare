import { CategoryPet } from "../pet/categoryPet"

export const ListCategory = () =>{
    return(
        <>
            <div className="py-[20px] px-[60px]">
                <div className="flex flex-col justify-center text-center">
                    <div className="text-[var(--pri)] text-[21px] font-[600] uppercase mb-[10px]">Giống chó cảnh</div> 
                    <div className="flex justify-center">
                        <button className="uppercase text-black hover:text-black text-[13px] font-[600] border px-[13px] border-r-0 py-[9px]">Giống phổ biến</button>
                        <button className="uppercase text-gray-400 hover:text-black text-[13px] font-[600] border px-[13px] border-r-0 py-[9px]">Thân thiện nhỏ xinh</button>
                        <button className="uppercase text-gray-400 hover:text-black text-[13px] font-[600] border px-[13px] border-r-0 py-[9px]">Giống phổ biến</button>
                        <button className="uppercase text-gray-400 hover:text-black text-[13px] font-[600] border px-[13px] py-[9px]">Giống phổ biến</button>
                    </div>
                </div>
                <div className="py-[20px] grid grid-cols-4 gap-x-[20px] gap-y-[12px]">
                    <CategoryPet/>
                    <CategoryPet/>
                    <CategoryPet/>
                    <CategoryPet/>
                    <CategoryPet/>
                    <CategoryPet/>
                </div>  
                <a href="" className="capitalize text-[17px] mx-auto w-[190px] flex justify-center items-center gap-[10px] py-[10px] rounded-[20px] bg-[var(--pri)] text-white">Xem thêm tất cả</a>
            </div>
        </>
    )
}