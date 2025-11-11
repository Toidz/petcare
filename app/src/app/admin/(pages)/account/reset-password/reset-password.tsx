"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import JustValidate from "just-validate"
import { pathAdmin } from "@/app/config/api";

export const ResetPasswordPage = ()=>{
    const router = useRouter()
    const [newPass,SetNewPass] = useState("")
    const [confirmPass,SetConfirmPass] = useState("")
    useEffect(()=>{
        const validate = new JustValidate("#resetPasswordForm", {
            errorLabelCssClass: "text-red-500 text-sm absolute bottom-[-20px]", 
        });
        validate
            .addField('#newPass', [
                { rule: 'required', errorMessage: 'Vui lòng nhập mật khẩu mới!' },
                { validator: (value:string) => value.length >= 8, errorMessage: 'Mật khẩu phải chứa ít nhất 8 ký tự!' },
                { validator: (value:string) => /[A-Z]/.test(value), errorMessage: 'Mật khẩu phải chứa ít nhất một chữ cái in hoa!' },
                { validator: (value:string) => /[a-z]/.test(value), errorMessage: 'Mật khẩu phải chứa ít nhất một chữ cái thường!' },
                { validator: (value:string) => /\d/.test(value), errorMessage: 'Mật khẩu phải chứa ít nhất một chữ số!' },
                { validator: (value:string) => /[@$!%*?&]/.test(value), errorMessage: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt!' },
            ])
            .addField('#confirmPass', [
                { rule: 'required', errorMessage: 'Vui lòng xác nhận mật khẩu!' },
                {
                    validator: (value: string) => {
                    const newPass = document.getElementById("newPass") as HTMLInputElement | null;
                        const valuePass = newPass?.value;
                        return value == valuePass;
                    },
                    errorMessage: 'Mật khẩu xác nhận không khớp!',
                },
            ])
            .onSuccess((e:any) => {
                e.preventDefault(); 
                const dataFinal = {
                    confirmPass:e.target.confirmPass.value
                }

                fetch(`${pathAdmin}/account/reset-password`,{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(dataFinal),
                    credentials: "include"
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.code=="error"){
                        alert(data.message)
                        router.push("/admin/account/login")
                    }
                    else{
                        router.push("/admin/account/login")
                    }
                })
            });
    },[]);
    return(
        <div className="overflow-y-auto bg-[url('/client/images/bg-category-demo.jpg')] bg-cover bg-center h-screen">
            <form id="resetPasswordForm" className="px-[16px] mx-auto container flex justify-center py-[50px]">
                <div className="flex flex-col w-[700px] bg-[white] h-auto sm:px-[60px] px-[20px] py-[30px] rounded-[20px]">
                    <div className="text-center sm:text-[33px] text-[26px] font-[700] text-[var(--pri)]">Đổi mật khẩu</div>
                    <div className=" sm:text-[16px] text-[13px] mt-[10px] text-center text-gray-500 ">Vui lòng nhập mật khẩu mới để thay đổi!</div>
                    <div className="flex flex-col relative">
                        <label htmlFor="newPass" className="mt-[15px] sm:text-[16px] text-[13px] font-[600] text-[var(--pri)]">Mật khẩu mới</label>
                        <input id="newPass" onChange={(e)=>SetNewPass(e.target.value)} value={newPass} className="bg-[#F8F8F8] sm:text-[16px] text-[14px] rounded-[5px] px-[20px] py-[12px] border border-[var(--pri)] outline-none" type="password"></input>
                    </div>
                    <div className="flex flex-col relative">
                        <label htmlFor="confirmPass" className="mt-[25px] sm:text-[16px] text-[13px] font-[600] text-[var(--pri)]">Xác nhận mật khẩu mới</label >
                        <input id="confirmPass" onChange={(e)=>SetConfirmPass(e.target.value)} value={confirmPass} className="bg-[#F8F8F8] sm:text-[16px] text-[14px] rounded-[5px] px-[20px] py-[12px] border border-[var(--pri)] outline-none" type="password"></input>
                    </div>
                   
                    <button className="sm:text-[18px] text-[14px] hover:bg-[var(--second)] mt-[30px] py-[17px] px-[20px] bg-[var(--pri)] rounded-[10px] text-white font-[700]">Cập nhật</button>
                    <div className="sm:text-[16px] text-[13px] flex gap-[10px] justify-center mt-[20px]">
                        <span className="text-gray-500"> Bạn đã nhớ mật khẩu?</span>
                        <a href="/admin/account/login" className="text-[var(--pri)] hover:text-[var(--second)] ">Đăng nhập</a>
                    </div>
                </div>
            </form>
        </div>
    )
}