
export const DashBoardPage = async ()=>{
    return(
        <> 
            <div className="xl:w-[calc(100%-240px)] lg:w-[calc(100%-220px)] w-full absolute top-[100px] xl:left-[240px] lg:left-[220px] left-0  flex justify-center flex-col">
                <div className="w-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-[20px] xl:gap-x-[40px] gap-x-[20px] md:px-[30px] px-[16px]">
                    <div className="bg-[white] flex items-center gap-[20px] justify-center py-[20px] rounded-[20px]">
                        <img src="/admin/images/user.png" className="w-[70px] " />
                        <div className="flex flex-col">
                            <span className="text-[14px] font-[500]">Nhân viên</span>
                            <span className="md:text-[26px] text-[20px] text-[var(--pri)] font-[700]">3</span>
                        </div>
                    </div>
                    <div className="bg-[white] flex items-center gap-[20px] justify-center py-[20px] rounded-[20px]">
                        <img src="/admin/images/order.png" className="w-[70px]" />
                        <div className="flex flex-col">
                            <span className="text-[14px] font-[500]">Đơn hàng</span>
                            <span className="md:text-[26px] text-[20px] text-[var(--pri)] font-[700]">3</span>
                        </div>
                    </div>
                    <div className="bg-[white] flex items-center gap-[20px] justify-center py-[20px] rounded-[20px]">
                        <img src="/admin/images/revenue.png" className="w-[70px]" />
                        <div className="flex flex-col">
                            <span className="text-[14px] font-[500]">Doanh thu</span>
                            <span className="md:text-[26px] text-[20px] text-[var(--pri)] font-[700]">30.000.000 VNĐ</span>
                        </div>
                    </div>
                </div>
                <div className="md:px-[30px] px-[16px] mt-[20px] py-[20px]">
                    <div className="flex flex-col px-[30px] bg-[white] py-[30px] rounded-[20px]" >
                        <div className="mb-[20px] text-[23px] font-[700]">Đơn hàng mới</div>
                        <div className="overflow-x-auto">
                            <table className="">
                                <thead className="bg-[#e5e1e1] ">
                                    <tr className=" ">
                                        <td className="p-[15px] text-[14px] font-[600] rounded-l-[10px] ">Mã</td>
                                        <td className="p-[15px] text-[14px] font-[600] py-[10px]">Thông tin khách</td>
                                        <td className="p-[15px] text-[14px] font-[600] py-[10px] w-[400px]">Danh sách sản phẩm</td>
                                        <td className="p-[15px] text-[14px] font-[600] py-[10px] ">Thanh toán</td>
                                        <td className="p-[15px] text-[14px] font-[600] py-[10px]">Trạng thái</td>
                                        <td className="p-[15px] text-[14px] font-[600] rounded-r-[10px] py-[10px]">Ngày đặt</td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="border-b border-gray-300">
                                        <td className="font-[700] text-[var(--pri)] p-[15px] text-[14px] w-[100px]">OD0218312</td>
                                        <td className="p-[15px] text-[14px]">
                                            <div className="w-[150px]">Nguyễn Tiến Đạt</div>
                                            <div>SĐT: 0914913491</div>
                                            <div className="">Địa chỉ: 320 - Khương Đình - Hà Nội</div>
                                        </td>
                                        <td className="p-[15px] flex flex-col gap-y-[10px] w-[300px]">
                                            <div className="flex items-center gap-[10px]">
                                                <img className="rounded-[10px] w-[120px]" src="/client/images/demoDog.jpg"></img>
                                                <div className="flex flex-col">
                                                    <div className="text-[14px]">Chó phốc Trắng</div>
                                                    <div className="text-[12px]">Số lượng: 2 x 3.000.000đ</div>
                                                </div>   
                                            </div>
                                            <div className="flex items-center gap-[10px]">
                                                <img className="rounded-[10px] w-[120px]" src="/client/images/demoDog.jpg"></img>
                                                <div className="flex flex-col">
                                                    <div className="text-[14px]">Chó phốc Trắng</div>
                                                    <div className="text-[12px]">Số lượng: 2 x 3.000.000đ</div>
                                                </div>   
                                            </div>              
                                        </td>
                                        <td className="p-[15px] text-[14px]">
                                            <div className="text-[14px] w-[170px]" >Tổng tiền: 12.000.000đ</div>
                                            <div className="text-[14px]" >Giảm: 2.000.000đ</div>
                                            <div className="text-[14px]" >Thanh toán: 10.000.000đ</div>
                                            <div className="text-[14px]" >PTTT: Thanh toán tiền mặt</div>
                                            <div className="text-[14px]" >TTTT: Chưa thanh toán</div>
                                        </td>
                                        <td className="p-[15px] w-[170px] pr-[25px]">
                                            <div className="w-[120px] bg-[#FFEEDD] text-[#FFA956] text-[14px] font-[700]  text-center py-[10px] rounded-[10px]">Khởi tạo</div>
                                        </td>
                                        <td className="p-[15px] ">
                                            <div className="text-[14px]">22:10</div>
                                            <div className="text-[14px]">26/08/2025</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-[15px] text-[14px] w-[100px]">OD0218312</td>
                                        <td className="p-[15px] text-[14px] w-[220px]">
                                            <div >Nguyễn Tiến Đạt</div>
                                            <div>SĐT: 0914913491</div>
                                            <div className="">Địa chỉ: 320 - Khương Đình - Hà Nội</div>
                                        </td>
                                        <td className="p-[15px] flex flex-col gap-y-[10px]">
                                            <div className="flex items-center gap-[10px]">
                                                <img className="rounded-[10px] w-[120px]" src="/client/images/demoDog.jpg"></img>
                                                <div className="flex flex-col">
                                                    <div className="text-[14px]">Chó phốc Trắng</div>
                                                    <div className="text-[12px]">Số lượng: 2 x 3.000.000đ</div>
                                                </div>   
                                            </div>
                                            <div className="flex items-center gap-[10px]">
                                                <img className="rounded-[10px] w-[120px]" src="/client/images/demoDog.jpg"></img>
                                                <div className="flex flex-col">
                                                    <div className="text-[14px]">Chó phốc Trắng</div>
                                                    <div className="text-[12px]">Số lượng: 2 x 3.000.000đ</div>
                                                </div>   
                                            </div>              
                                        </td>
                                        <td className="p-[15px] text-[14px] w-[220px]">
                                            <div className="text-[14px]" >Tổng tiền: 12.000.000đ</div>
                                            <div className="text-[14px]" >Giảm: 2.000.000đ</div>
                                            <div className="text-[14px]" >Thanh toán: 10.000.000đ</div>
                                            <div className="text-[14px]" >PTTT: Thanh toán tiền mặt</div>
                                            <div className="text-[14px]" >TTTT: Chưa thanh toán</div>
                                        </td>
                                        <td className="p-[15px] w-[170px] pr-[25px]">
                                            <div className="bg-[#FFEEDD] text-[#FFA956] text-[14px] font-[700]  text-center py-[10px] rounded-[10px]">Khởi tạo</div>
                                        </td>
                                        <td className="p-[15px]">
                                            <div className="text-[14px]">22:10</div>
                                            <div className="text-[14px]">26/08/2025</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}