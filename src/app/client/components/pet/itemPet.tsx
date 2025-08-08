export const ItemPet = ()=>{
    return(
        <>
            <a href="/" className="flex flex-col shadow-lg shadow-gray-200 rounded-[10px] overflow-hidden">
                <div className="overflow-hidden">
                    <img src="/client/images/demoDog.jpg" className="h-full transition-transform duration-1100 ease-in-out hover:scale-125" alt="demo-dog"></img>
                </div>
                <div className="uppercase text-center text-[14px] font-[600] mt-[15px] mb-[5px] hover:text-[var(--second)] ">Chó Phốc Sóc</div>
                <div className="uppercase text-center text-[14px] font-[600] mb-[5px]">Mã: PD08632</div>
                <div className="uppercase text-center text-[14px] font-[600] mb-[10px]">Giá: 3.000.000 VNĐ</div>
            </a>
        </>
    )
}