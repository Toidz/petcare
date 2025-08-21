import { FaFilter } from "react-icons/fa6";
export const Filter = ()=>{
    return(
        <>
            <div className="bg-white h-full flex flex-col gap-y-[10px] text-[var(--pri)] font-[700] py-[15px] px-[15px] border border-[var(--pri)] lg:rounded-[10px] sm:w-[280px] w-[220px]">
                <div className="flex gap-[5px] items-center text-[22px]">
                    <FaFilter /> 
                    <div>Bộ lọc</div>             
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-500 text-[12px]">Thể loại</label>
                    <select className="text-[14px] border border-[var(--pri)] px-[20px] py-[10px] rounded-[5px] outline-none">
                        <option className="text-[12px]">-- Chọn thể loại --</option>
                        <option className="text-[12px]">--Cho Shiba--</option>
                        <option className="text-[12px]">--Cho Shiba--</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-500 text-[12px]">Màu sắc</label>
                    <select className="text-[14px] border border-[var(--pri)] px-[20px] py-[10px] rounded-[5px] outline-none">
                        <option className="text-[12px]">-- Chọn màu sắc --</option>
                        <option className="text-[12px]">--Cho Shiba--</option>
                        <option className="text-[12px]">--Cho Shiba--</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-500 text-[12px]">Kích cỡ</label>
                    <select className="text-[14px] border border-[var(--pri)] px-[20px] py-[10px] rounded-[5px] outline-none">
                        <option className="text-[12px]">-- Chọn kích cỡ --</option>
                        <option className="text-[12px]">Khích cỡ nhỏ</option>
                        <option className="text-[12px]">Kích cỡ to</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-500 text-[12px]">Giá tiền</label>
                    <select className="text-[14px] border border-[var(--pri)] px-[20px] py-[10px] rounded-[5px] outline-none">
                        <option className="text-[12px]">-- Chọn giá tiền --</option>
                        <option className="text-[12px]">1trệu đến 3triệu</option>
                        <option className="text-[12px]">--Cho Shiba--</option>
                    </select>
                </div>
                <button className="rounded-[5px] py-[12px] bg-[var(--pri)] text-white text-[14px] hover:bg-[var(--second)]">Lọc thú cưng</button>
            </div>
        </>
    )
}