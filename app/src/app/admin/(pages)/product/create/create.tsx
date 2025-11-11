"use client"
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@tinymce/tinymce-react").then(mod => mod.Editor), {
  ssr: false,
});

import React from "react";
export const ProductCreatePage = ()=>{
    return(
         <>
            <div className="xl:w-[calc(100%-240px)] lg:w-[calc(100%-220px)] w-full absolute top-[100px] xl:left-[240px] lg:left-[220px] left-0 flex flex-col mx-[16px] px-[30px] pr-[55px]">
                <div className="sm:text-[30px] text-[20px] font-[700] mb-[30px]">Tạo sản phẩm</div>
                <div className="mb-[30px] grid md:grid-cols-2 grid-cols-1 gap-y-[20px] gap-x-[30px] bg-[white] py-[30px] px-[40px] border border-gray-300 rounded-[15px]">
                    <div className="flex flex-col">
                        <label htmlFor='name' className="text-[13px] mb-[5px]">Tên sản phẩm</label>
                        <input id="name" className="px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[13px] mb-[5px]">Danh mục</label>
                        <select className="sm:text-[14px] text-[12px]  px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300">
                            <option > -- Chọn danh mục -- </option>
                            <option>Đồ chơi cho chó</option>
                            <option>Phụ kiện cho chó</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[13px] mb-[5px]">Số lượng</label>
                        <input type="number" className="px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[13px] mb-[5px]">Giá bán</label>
                        <input type="number" className="px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300"></input>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[13px] mb-[5px]">Vị trí</label>
                        <input type="number" className="px-[20px] py-[12px] bg-[#F5F6FA] rounded-[5px] outline-none border border-gray-300"></input>
                    </div>
                    <div className="flex flex-col md:col-span-2 col-span-1">
                        <label htmlFor='description' className="text-[13px] mb-[5px]">Mô tả</label>
                        <Editor
                            id="description"
                            apiKey='4za2bx0zr5zze6b3ux1l4un4bnkypmn6nr1vlsmnhpy3iqrm'
                            init={{
                                plugins: [
                                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons',
                                'link', 'lists', 'media', 'searchreplace', 'table',
                                'visualblocks', 'wordcount', 'checklist', 'mediaembed',
                                'casechange', 'formatpainter', 'pageembed',
                                'permanentpen', 'advtable', 'advcode', 'advtemplate',
                                'mentions', 'tinycomments', 'tableofcontents',
                                'footnotes', 'mergetags', 'autocorrect',
                                'typography', 'inlinecss', 'markdown'
                                ],
                                toolbar:
                                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | ' +
                                'link media table mergetags | addcomment showcomments | ' +
                                'align lineheight | checklist numlist bullist indent outdent | ' +
                                'emoticons charmap | removeformat',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                mergetags_list: [
                                { value: 'First.Name', title: 'First Name' },
                                { value: 'Email', title: 'Email' }
                                ]
                            }}
                            initialValue=""
                        />
                        <div className="mt-[30px] flex flex-col items-center gap-y-[20px]">
                            <button className="w-[270px] hover:bg-[var(--second)] rounded-[10px] text-[20px] text-white bg-[var(--pri)] px-[20px] py-[20px]">Tạo mới sản phẩm</button>
                            <a href="/admin/product" className="text-[var(--pri)] hover:text-[var(--second)] text-[20px] underline">Quay lại danh sách</a>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}