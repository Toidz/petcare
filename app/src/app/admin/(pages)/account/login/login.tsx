"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import JustValidate from "just-validate"; 
import { pathAdmin } from "@/app/config/api";
export const LoginPage = ()=>{
    const router = useRouter()
    const [email,SetEmail] = useState("")
    const [password,SetPassword] = useState("")
    useEffect(()=>{
        const validate = new JustValidate("#loginForm", {
            errorLabelCssClass: "text-red-500 text-sm absolute bottom-[-20px]", 
        });
        validate
            .addField('#email', [
                { rule: 'required', errorMessage: 'Vui lòng nhập email của bạn!' },
            ])
            .addField('#password', [
                { rule: 'required', errorMessage: 'Vui lòng nhập mật khẩu!' },
                
            ])
            .onSuccess((e:any) => {
                e.preventDefault(); 
                const dataFinal = {
                    email:e.target.email.value,
                    password:e.target.password.value
                }
                fetch(`${pathAdmin}/account/login`,{
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
                    }
                    else{
                        router.push("/admin/dashboard")

                    }
                })
            });
    },[]);
    return(
         <div className="overflow-y-auto bg-[url('/client/images/bg-category-demo.jpg')] bg-cover bg-center h-screen">
            <form id="loginForm" className="px-[16px] mx-auto container flex justify-center py-[50px]">
                <div className="flex flex-col w-[700px] bg-[white] h-auto sm:px-[60px] px-[20px] py-[30px] rounded-[20px]">
                    <div className="text-center sm:text-[33px] text-[26px] font-[700] text-[var(--pri)]">Đăng nhập</div>
                    <div className=" sm:text-[16px] text-[13px] mt-[10px] text-center text-gray-500 ">Vui lòng nhập email và mật khẩu để đăng nhập!</div>
                    <div className="flex flex-col relative">
                        <label htmlFor="email" className="mt-[10px] sm:text-[16px] text-[13px] font-[600] text-[var(--pri)]">Email</label>
                        <input id="email" value={email} onChange={(event)=>SetEmail(event.target.value)} className="bg-[rgb(248,248,248)] sm:text-[15px] text-[14px] rounded-[5px] px-[20px] py-[12px] border border-[var(--pri)] outline-none sm:placeholder:text-[16px] placeholder:text-[13px]" placeholder="Nhập email của bạn vào đây ... "></input>
                    </div>
                    <div className="flex flex-col relative">
                        <label htmlFor="password" className="mt-[30px] sm:text-[16px] text-[13px] font-[600] text-[var(--pri)]">Password</label >
                        <input id="password" value={password} onChange={(event)=>SetPassword(event.target.value)} className="bg-[#F8F8F8] sm:text-[16px] text-[14px] rounded-[5px] px-[20px] py-[12px] border border-[var(--pri)] outline-none" type="password"></input>
                    </div>
                    <a href="/admin/account/forgot-password" className="sm:text-[16px] text-[14px] flex justify-end mt-[10px] text-[var(--pri)] hover:text-[var(--second)]">Quên mật khẩu</a>
                    <button className="sm:text-[18px] text-[14px] hover:bg-[var(--second)] mt-[10px] py-[17px] px-[20px] bg-[var(--pri)] rounded-[10px] text-white font-[700]">Đăng Nhập</button>
                    <div className="sm:text-[16px] text-[13px] flex gap-[10px] justify-center mt-[20px]">
                        <span className="text-gray-500"> Bạn chưa có tài khoản?</span>
                        <a href="/admin/account/register" className="text-[var(--pri)] hover:text-[var(--second)] ">Tạo tài khoản mới</a>
                    </div>
                </div>
            </form>
        </div>
    )
}