import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tài khoản khởi tạo",
  description: "",
};
export default function Initial() {
  return (
    <>
        <div className="overflow-y-auto ">
            <div className="px-[16px] mx-auto container flex justify-center py-[50px]">
                <div className="flex flex-col w-[700px] bg-[white] h-auto sm:px-[60px] px-[20px] py-[30px] rounded-[20px]">
                    <div className="text-center sm:text-[33px] text-[26px] font-[700] text-[var(--pri)]">Đăng ký tài khoản thành công!</div>
                    <div className=" sm:text-[16px] text-[13px] mt-[10px] text-center text-gray-500 ">Vui lòng đợi quản trị viên phê duyệt để bạn có thể đăng nhập!</div>
                 
                 
                    <div className="sm:text-[16px] text-[13px] flex gap-[10px] justify-center mt-[20px]">
                        <span className="text-gray-500">Tài khoản đã được phê duyệt?</span>
                        <a href="/admin/account/login" className="text-[var(--pri)] hover:text-[var(--second)] ">Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
