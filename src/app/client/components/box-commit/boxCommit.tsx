export const BoxCommit  =() =>{
    return (
        <>
            <div className="px-[130px] bg-[var(--pri)] pb-[40px]">
                <div className="flex flex-cols-4 text-white justify-center">
                    <div className="flex flex-col border-dotted border-l border-l-gray-50 border-r border-r-gray-50 border-b border-b-gray-50 items-center px-[20px] py-[20px]">
                        <img src="./client/images/iconDelivery.png" className="w-[140px] h-[140px]"></img>
                        <div className="uppercase text-[12px] mt-[-30px] mb-[5px]">Miễn phí vận chuyển</div>
                        <div className="uppercase text-[10px]">Giao hàng toàn quốc: Máy bay, tàu hỏa, taxi...</div>
                    </div>
                    <div className="flex flex-col border-dotted border-r border-r-gray-50 border-b border-b-gray-50 items-center px-[20px] py-[20px]">
                        <img src="./client/images/iconGift.png" className="w-[110px] h-[110px]"></img>
                        <div className="uppercase text-[12px] mb-[5px]">Qùa tặng hấp đẫn </div>
                        <div className="uppercase text-[10px]">Tặng kèm phụ kiện cần thiết cho thú cưng</div>
                    </div>
                    <div className="flex flex-col border-dotted border-r border-r-gray-50 border-b border-b-gray-50 items-center px-[20px] py-[20px]">
                        <img src="./client/images/commit.png" className="w-[100px] h-[100px]"></img>
                        <div className="uppercase text-[12px] mt-[10px] mb-[5px]">Cam kết thuần chủng 100%</div>
                        <div className="uppercase text-[10px]">Cam kết thú cưng thuần chủng không lai tạp.</div>
                    </div>
                    <div className="flex flex-col border-dotted border-r border-r-gray-50 border-b border-b-gray-50 items-center px-[20px] py-[20px]">
                        <img src="./client/images/healthy.png" className="w-[90px] h-[90px] mt-[10px]"></img>
                        <div className="uppercase text-[12px] mt-[10px] mb-[5px]">BẢO HÀNH SỨC KHỎE TOÀN DIỆN</div>
                        <div className="uppercase text-[10px]">Bàn giao tới khách hàng thú cưng khỏe mạnh</div>
                    </div>
                </div>
                <a href="/" className="mx-auto mt-[20px] w-[200px] flex justify-center items-center gap-[10px] px-[5px] py-[10px] rounded-[20px] bg-[var(--second)]  text-[var(--pri)] font-[700]">HotLine 0914913491</a>
            </div>
        </>
    )
}   