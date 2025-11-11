"use client"
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@tinymce/tinymce-react").then(mod => mod.Editor), {
  ssr: false,
});
import React, { useEffect, useState } from 'react'
import { FilePond } from 'react-filepond'
import type { FilePondInitialFile } from "filepond";
import { pathAdmin } from "@/app/config/api";
export const CategoryCreatePage = ()=>{
    const [files, setFiles] = useState<FilePondInitialFile[]>([]);
    const [name,setName] = useState("")
    // const [nameParent,setNameParent] = useState("")
    const [categoryId, setCategoryId] = useState(""); 
    interface Category {
        id: string;
        name: string;
    }

    const [arrayCategory, setArrayCategory] = useState<Category[]>([]);
    
    useEffect(()=>{
        fetch(`${pathAdmin}/category/get`,{
            method:"GET",
            credentials:"include"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.code=="success"){
                setArrayCategory(data.array)
            }
        })
    },[])
    const handlerSubmit = (e:any)=>{
        e.preventDefault();
        console.log(name,nameParent);
        const dataFinal ={
            name:name
        }
        fetch(`${pathAdmin}/category/create`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(dataFinal),
            credentials: "include" 
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.code=="success"){
                console.log("them thanh cong")
            }
        })
    }


    return(
         <>
            <form onSubmit={handlerSubmit} className="xl:w-[calc(100%-240px)] lg:w-[calc(100%-220px)] w-full absolute top-[100px] xl:left-[240px] lg:left-[220px] left-0 flex flex-col mx-[16px] sm:px-[30px] px-[10px] sm:pr-[55px] pr-[30px]">
                <div className="sm:text-[30px] text-[20px] font-[700] mb-[30px]">Tạo danh mục</div>
                <div className="mb-[30px] grid sm:grid-cols-2 grid-cols-1 gap-y-[20px] gap-x-[30px] bg-[white] sm:py-[30px] py-[20px] sm:px-[40px] px-[20px] border border-gray-300 rounded-[15px]">
                    <div className="flex flex-col">
                        <label htmlFor='name' className="text-[13px] mb-[5px]">Tên danh mục</label>
                        <input onChange={(e)=> setName(e.target.value)} value={name} id="name" className="px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[13px] mb-[5px]">Danh mục cha</label>
                        <select 
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="sm:text-[14px] text-[12px]  px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300">
                            <option > -- Chọn danh mục -- </option>
                            {arrayCategory.map(item=>(
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="flex flex-col sm:col-span-2 col-span-1">
                        <label className="text-[13px] mb-[5px]">Ảnh đại diện</label>
                       <FilePond
                            files={files}
                            onupdatefiles={(fileItems) => {  
                                setFiles(fileItems.map(fileItem => fileItem.file as any));
                            }}
                            allowMultiple={true}
                            maxFiles={1}
                            server="/api"
                            name="files" 
                            labelIdle='Chọn ảnh hoặc kéo thả vào dây'
                        />
                    </div>
                    <div className="flex flex-col sm:col-span-2 col-span-1">
                        <label className="text-[13px] mb-[5px]">Vị trí</label>
                        <input className="px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300"></input>
                    </div>
                    <div className="flex flex-col sm:col-span-2 col-span-1">
                        <label htmlFor='description' className="text-[13px] mb-[5px]">Mô tả</label>
                        <Editor
                            id="description"
                            apiKey="4za2bx0zr5zze6b3ux1l4un4bnkypmn6nr1vlsmnhpy3iqrm"
                            init={{
                                plugins: [
                                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons',
                                'link', 'lists', 'media', 'searchreplace', 'table',
                                'visualblocks', 'wordcount'
                                ],
                                toolbar:
                                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | ' +
                                'link media table | align lineheight | numlist bullist indent outdent | ' +
                                'emoticons charmap | removeformat',
                            }}
                            initialValue=""
                        />

                        <div className="mt-[30px] flex flex-col items-center gap-y-[20px]">
                            <button className="sm:w-[270px] w-[200px] hover:bg-[var(--second)] rounded-[10px] sm:text-[20px] text-[16px] text-white bg-[var(--pri)] px-[20px] py-[20px]">Tạo danh mục mới</button>
                            <a href="/admin/category" className="text-[var(--pri)] hover:text-[var(--second)] sm:text-[20px] text-[16px] underline">Quay lại danh sách</a>
                        </div>
                    </div>    
                </div>
            </form>
        </>
    )
}