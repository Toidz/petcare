export const BoxCommit  =() =>{
    return (
        <>
            <div className="xl:px-[100px] lg:px-[70px] md:px-[50px] px-[16px] bg-[var(--pri)] pb-[30px]">
                <div className="flex flex-cols-4 text-white justify-center">
                    <div className="flex flex-col border-dotted border-l border-l-gray-50 border-r border-r-gray-50 border-b border-b-gray-50 items-center px-[20px] py-[20px]">
                        <div className="lg:pt-[40px] md:pt-[40px] sm:pt-[25px] pt-[12px] pb-[10px] md:w-[110px] md:h-[110px] sm:w-[80px] ms:h-[80px] w-[50px] md:mt-0 sm:mt-[5px] mt-[14px]">
                            <img className=" object-contain" src="./client/images/iconDelivery.png" ></img>
                        </div>
                        <div className="uppercase lg:text-[12px] md:text-[7px] sm:text-[6px] text-[4px] mb-[5px]">Miễn phí vận chuyển mọi nơi</div>
                        <div className="uppercase lg:text-[10px] md:text-[6px] text-[4px] ">Giao hàng toàn quốc: Máy bay, tàu hỏa, taxi...</div>
                    </div>
                    <div className="flex flex-col border-dotted border-r border-r-gray-50 border-b border-b-gray-50 items-center px-[20px] py-[20px]">
                        <div className="md:w-[110px] md:h-[110px] sm:w-[80px] ms:h-[80px] w-[50px] md:mt-0 sm:mt-[5px] mt-[14px]">
                            <img className=" object-contain w-full h-full" src="./client/images/iconGift.png" ></img>
                        </div>
                        <div className="uppercase lg:text-[12px] md:text-[7px] sm:text-[6px] text-[4px] mb-[5px]">Qùa tặng hấp dẫn nhất </div>
                        <div className="uppercase lg:text-[10px] md:text-[6px] text-[4px]">Tặng kèm phụ kiện cần thiết cho thú cưng</div>
                    </div>
                    <div className="flex flex-col border-dotted border-r border-r-gray-50 border-b border-b-gray-50 items-center px-[20px] py-[20px]">
                        <div className="p-[10px] md:w-[110px] md:h-[110px] sm:w-[80px] ms:h-[80px] w-[50px] md:mt-0 sm:mt-[5px] mt-[14px]">
                            <img className="w-full h-full object-contain" src="./client/images/commit.png" ></img>
                        </div>
                        <div className="uppercase lg:text-[12px] md:text-[7px] sm:text-[6px] text-[4px] mb-[5px]">Cam kết thuần chủng 100%</div>
                        <div className="uppercase lg:text-[10px] md:text-[6px] text-[4px]">Cam kết thú cưng thuần chủng không lai tạp.</div>
                    </div>
                    <div className="flex flex-col border-dotted border-r border-r-gray-50 border-b border-b-gray-50 items-center px-[20px] py-[20px]">
                        <div className="p-[10px] md:w-[110px] md:h-[110px] sm:w-[80px] ms:h-[80px] w-[50px] md:mt-0 sm:mt-[5px] mt-[14px]">
                            <img className="w-full h-full object-contain" src="./client/images/healthy.png" ></img>
                        </div>
                        <div className="uppercase lg:text-[12px] md:text-[7px] sm:text-[6px] text-[4px] mb-[5px]">BẢO HÀNH SỨC KHỎE TOÀN DIỆN</div>
                        <div className="uppercase lg:text-[10px] md:text-[6px] text-[4px]">Bàn giao tới khách hàng thú cưng khỏe mạnh</div>
                    </div>
                </div>
                <a href="/" className="mx-auto mt-[20px] w-[200px] flex justify-center items-center gap-[10px] px-[5px] py-[10px] rounded-[20px] bg-[var(--second)]  text-[var(--pri)] font-[700]">HotLine 0914913491</a>
            </div>
        </>
    )
}   