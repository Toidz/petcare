"use client"

import { useEffect, useState } from "react"
import JustValidate from "just-validate"; 
import { useRouter } from "next/navigation"; 
import { pathAdmin } from "@/app/config/api";
export const RegisterPage = ()=>{
    const router = useRouter()
    const [name,SetName] = useState("")
    const [email,SetEmail] = useState("")
    const [password,SetPassword] = useState("")
    const [check,Setcheck] = useState(false)
    useEffect(()=>{
        const validate = new JustValidate("#registerForm", {
            errorLabelCssClass: "text-red-500 text-sm absolute bottom-[-20px]", 
        });
        validate
            .addField('#name', [
                { validator: (value:string) => value.length >= 5,errorMessage: 'Họ và tên chứa ít nhất 5 ký tự!' },
                { rule: 'required', errorMessage: 'Vui lòng nhập tên của bạn!' },
            ])
            .addField('#email', [
                { rule: 'required', errorMessage: 'Vui lòng nhập email của bạn!' },
                { rule: 'email', errorMessage: 'Email không đúng định dạng!' },
            ])
            .addField('#password', [
                { rule: 'required', errorMessage: 'Vui lòng nhập mật khẩu!' },
                { validator: (value:string) => value.length >= 8, errorMessage: 'Mật khẩu phải chứa ít nhất 8 ký tự!' },
                { validator: (value:string) => /[A-Z]/.test(value), errorMessage: 'Mật khẩu phải chứa ít nhất một chữ cái in hoa!' },
                { validator: (value:string) => /[a-z]/.test(value), errorMessage: 'Mật khẩu phải chứa ít nhất một chữ cái thường!' },
                { validator: (value:string) => /\d/.test(value), errorMessage: 'Mật khẩu phải chứa ít nhất một chữ số!' },
                { validator: (value:string) => /[@$!%*?&]/.test(value), errorMessage: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt!' },
            ])
            .addField("#check",[
                { rule: 'required', errorMessage: 'Vui lòng chấp nhận điều khoản và dịch vụ!' },
            ])
            .onSuccess((e:any) => {
                e.preventDefault(); 
                const dataFinal = {
                    name:e.target.name.value,
                    email:e.target.email.value,
                    password:e.target.password.value
                }
                // console.log(dataFinal)
                // console.log(pathAdmin)
                fetch(`${pathAdmin}/account/register`,{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(dataFinal)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.code=="error"){
                        alert(data.message)
                    }
                    else{
                        router.push("/admin/account/initial-register")

                    }
                })
            });
    },[]);

    return(
        <div className="overflow-y-auto bg-[url('/client/images/bg-category-demo.jpg')] bg-cover bg-center h-screen">
            <form id="registerForm" className="relative px-[16px] mx-auto container flex justify-center py-[50px]">
                <div className="flex flex-col w-[700px] bg-[white] h-auto sm:px-[60px] px-[20px] py-[30px] rounded-[20px]">
                    <div className="text-center sm:text-[33px] text-[26px] font-[700] text-[var(--pri)]">Đăng ký</div>
                    <div className=" sm:text-[16px] text-[13px] mt-[10px] text-center text-gray-500 ">Tạo một tài khoản để đăng nhập!</div>
                    <div className="relative flex flex-col">
                        <label htmlFor="name" className="mt-[10px] sm:text-[16px] text-[13px] font-[600] text-[var(--pri)]">Name</label>
                        <input value={name} onChange={(event)=> SetName(event.target.value)} id="name" className="bg-[#F8F8F8] sm:text-[15px] text-[14px] rounded-[5px] px-[20px] py-[12px] border border-[var(--pri)] outline-none sm:placeholder:text-[16px] placeholder:text-[13px]" placeholder="Nhập họ và tên của bạn vào đây ... "></input>
                    </div>
                    <div className="relative flex flex-col">
                        <label htmlFor="email" className="mt-[25px] sm:text-[16px] text-[13px] font-[600] text-[var(--pri)]">Email</label>
                        <input value={email} onChange={(event)=> SetEmail(event.target.value)} id="email" className="bg-[#F8F8F8] sm:text-[15px] text-[14px] rounded-[5px] px-[20px] py-[12px] border border-[var(--pri)] outline-none sm:placeholder:text-[16px] placeholder:text-[13px]" placeholder="Nhập email của bạn vào đây ... "></input>
                    </div>
                    <div className="relative flex flex-col">
                        <label htmlFor="password" className="mt-[25px] sm:text-[16px] text-[13px] font-[600] text-[var(--pri)]">Password</label>
                        <input value={password} onChange={(event)=> SetPassword(event.target.value)} id="password" className="bg-[#F8F8F8] sm:text-[16px] text-[14px] rounded-[5px] px-[20px] py-[12px] border border-[var(--pri)] outline-none" type="password"></input>
                    </div>
                   
                    <div className="relative mt-[30px] flex items-center justify-start gap-[7px] "> 
                        <input onChange={(event)=>Setcheck(event.target.checked)} checked={check} id="check" className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]" type="checkbox"></input>
                        <span className="sm:text-[16px] text-[13px] text-gray-500 ">Tôi chấp nhận các điều khoản và điều kiện</span>
                    </div>
                    <button type="submit" className="sm:text-[18px] text-[14px] hover:bg-[var(--second)] mt-[35px] py-[17px] px-[20px] bg-[var(--pri)] rounded-[10px] text-white font-[700]">Đăng Ký</button>
                    <div className="sm:text-[16px] text-[13px] flex gap-[10px] justify-center mt-[20px]">
                        <span className="text-gray-500"> Bạn đã có tài khoản?</span>
                        <a href="/admin/account/login" className="text-[var(--pri)] hover:text-[var(--second)] ">Đăng nhập</a>
                    </div>
                </div>
            </form>
        </div>
    )
}