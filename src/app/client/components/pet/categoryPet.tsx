export const CategoryPet = ()=>{
    return(
        <>
            <a href="/" className="group relative w-[332px] h-[332px] shadow-lg shadow-gray-200 rounded-[1000px] overflow-hidden">
                <img src="/client/images/demoDog.jpg" className="absolute h-full transition-transform duration-1100 ease-in-out group-hover:scale-130" alt="demo-dog" ></img>
                <div className="relative top-[40%] group-hover:translate-y-[-20%] duration-1100">
                    <div className="uppercase text-center text-white text-[24px] font-[700] mt-[15px] mb-[15px] duration-1100">Chó Phốc Sóc</div>
                    <div className="mt-[-20px] text-center text-white text-[18px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-1100">
                        Số lượng: 3
                    </div>
                </div>
            </a>
            
        </>
    )
}