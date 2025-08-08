import { MdNavigateNext } from "react-icons/md";

export const ListBlog = ({title}:any) =>{
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
                <div className="py-[20px] px-[90px] grid grid-cols-3 gap-x-[25px] gap-y-[18px]">
                    <a href="/" className="flex flex-col shadow-lg shadow-gray-200 rounded-[10px] overflow-hidden">
                        <div className="overflow-hidden">
                            <img src="/client/images/demo-blog.jpg" className="h-[240px] w-[500px] transition-transform duration-1100 ease-in-out hover:scale-125" alt="demo-dog"></img>
                        </div>
                        <div className="px-[20px] flex flex-col items-center">
                            <div className="text-center text-[16px] font-[600] mt-[15px] mb-[5px] hover:text-[var(--second)] ">10 dấu hiệu cho thấy thú cưng của bạn đang bị street</div>
                            <div className="text-center text-[14px] mb-[5px] line-clamp-2">Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc </div>
                                <div className="mt-[7px] mb-[15px] bg-[var(--pri)] w-[170px] text-center py-[8px] px-[20px] text-white rounded-[10px] hover:bg-[var(--second)]">Đọc Chi tiết</div>
                        </div>
                    </a>
                     <a href="/" className="flex flex-col shadow-lg shadow-gray-200 rounded-[10px] overflow-hidden">
                        <div className="overflow-hidden">
                            <img src="/client/images/demo-blog.jpg" className="h-[240px] w-[500px] transition-transform duration-1100 ease-in-out hover:scale-125" alt="demo-dog"></img>
                        </div>
                        <div className="px-[20px] flex flex-col items-center">
                            <div className="text-center text-[16px] font-[600] mt-[15px] mb-[5px] hover:text-[var(--second)] ">10 dấu hiệu cho thấy thú cưng của bạn đang bị street</div>
                            <div className="text-center text-[14px] mb-[5px] line-clamp-2">Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc </div>
                                <div className="mt-[7px] mb-[15px] bg-[var(--pri)] w-[170px] text-center py-[8px] px-[20px] text-white rounded-[10px] hover:bg-[var(--second)]">Đọc Chi tiết</div>
                        </div>
                    </a>
                     <a href="/" className="flex flex-col shadow-lg shadow-gray-200 rounded-[10px] overflow-hidden">
                        <div className="overflow-hidden">
                            <img src="/client/images/demo-blog.jpg" className="h-[240px] w-[500px] transition-transform duration-1100 ease-in-out hover:scale-125" alt="demo-dog"></img>
                        </div>
                        <div className="px-[20px] flex flex-col items-center">
                            <div className="text-center text-[16px] font-[600] mt-[15px] mb-[5px] hover:text-[var(--second)] ">10 dấu hiệu cho thấy thú cưng của bạn đang bị street</div>
                            <div className="text-center text-[14px] mb-[5px] line-clamp-2">Với tư cách là người nuôi thú cưng, chúng ta thường tập trung vào việc </div>
                                <div className="mt-[7px] mb-[15px] bg-[var(--pri)] w-[170px] text-center py-[8px] px-[20px] text-white rounded-[10px] hover:bg-[var(--second)]">Đọc Chi tiết</div>
                        </div>
                    </a>
                </div>  
            </div>
        </>
    )
}