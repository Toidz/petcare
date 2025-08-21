export const Header = ()=>{
    return(
        <>
            <div className="z-100 fixed top-0 left-0 right-0 px-[60px] bg-white flex justify-between border-b border-b-gray-300">
                <img className="w-[100px]" src="/client/images/logo.jpg" alt="" />
                <div className="flex items-center gap-[10px]">
                    <img className="w-[50px] h-[50px]" src="/client/images/userDat.jpg" alt="" />
                    <div className="flex flex-col">
                        <span className="text-[14px] font-[700]">Nguyễn Tiến Đạt</span>
                        <span className="text-[14px]">Quản trị viên</span>
                    </div>
                </div>
            </div>
        </>
    )
}