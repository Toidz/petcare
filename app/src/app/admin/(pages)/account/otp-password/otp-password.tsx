"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import JustValidate from "just-validate"; 
import { pathAdmin } from "@/app/config/api";
export const OtpPassWordPage = ()=>{
    const router = useRouter()
    const [otp,SetOtp] = useState("")
    useEffect(()=>{
        const validate = new JustValidate("#forgotPasswordForm", {
            errorLabelCssClass: "text-red-500 text-sm absolute bottom-[-20px]", 
        });
        validate
            .addField('#otp', [
                { rule: 'required', errorMessage: 'Vui lòng nhập mã otp của bạn!' },
            ])
            .onSuccess((e:any) => {
                e.preventDefault(); 
                const dataFinal = {
                    otp:e.target.otp.value,
                }
                
                fetch(`${pathAdmin}/account/otp-password`,{
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
                        router.push("/admin/account/reset-password")
                    }
                })
            });
    },[]);
    const sendAgainOtp =()=>{
       const email = localStorage.getItem("forgotEmail")
       console.log(email)
        fetch(`${pathAdmin}/account/forgot-password`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.code=="error"){
                alert(data.message)
            }
            else{
                router.push("/admin/account/otp-password")
            }
        })
    }
    return(
        <div className="overflow-y-auto bg-[url('/client/images/bg-category-demo.jpg')] bg-cover bg-center h-screen">
            <form id="forgotPasswordForm" className="px-[16px] mx-auto container flex justify-center py-[50px]">
                <div className="flex flex-col w-[700px] bg-[white] h-auto sm:px-[60px] px-[20px] py-[30px] rounded-[20px]">
                    <div className="text-center sm:text-[33px] text-[26px] font-[700] text-[var(--pri)]">Nhập mã otp</div>
                    <div className=" sm:text-[16px] text-[13px] mt-[10px] text-center text-gray-500 ">Vui lòng nhập mã otp để lấy lại mật khẩu!</div>
                    <div className="flex flex-col relative">
                        <label htmlFor="otp" className="mt-[10px] sm:text-[16px] text-[13px] font-[600] text-[var(--pri)]">Mã otp</label>
                        <input id="otp" onChange={(e)=>SetOtp(e.target.value)} value={otp} className="bg-[rgb(248,248,248)] sm:text-[15px] text-[14px] rounded-[5px] px-[20px] py-[12px] border border-[var(--pri)] outline-none sm:placeholder:text-[16px] placeholder:text-[13px]" placeholder="Nhập mã otp vào đây ... "></input>
                    </div>
                    <div className="sm:text-[16px] text-[13px] flex gap-[10px] justify-end pt-[10px]">
                        <span className="text-gray-500"> Bạn chưa nhận được mã?</span>
                        <div onClick={sendAgainOtp}  className="text-[var(--pri)] hover:text-[var(--second)] ">Gửi lại mã otp</div>
                    </div>
                    <button className="sm:text-[18px] text-[14px] hover:bg-[var(--second)] mt-[10px] py-[17px] px-[20px] bg-[var(--pri)] rounded-[10px] text-white font-[700]">Gửi mã otp</button>
                    <div className="sm:text-[16px] text-[13px] flex gap-[10px] justify-center mt-[20px]">
                        <span className="text-gray-500"> Bạn đã nhớ mật khẩu?</span>
                        <a href="/admin/account/login" className="text-[var(--pri)] hover:text-[var(--second)] ">Đăng nhập</a>
                    </div>
                </div>
            </form>
        </div>
    )
}