export const CategoryPet = ()=>{
    return(
        <>
            <a href="/" className="group relative lg:w-[290px] lg:h-[290px] md:w-[290px] md:h-[290px] sm:w-[250px] sm:h-[250px] w-[170px] h-[170px] shadow-lg shadow-gray-200 rounded-[1000px] overflow-hidden">
                <img src="/client/images/demoDog.jpg" className="absolute h-full transition-transform duration-1100 ease-in-out group-hover:scale-130" alt="demo-dog" ></img>
                <div className="relative top-[40%] group-hover:translate-y-[-20%] duration-1100">
                    <div className="uppercase text-center text-white lg:text-[24px] md:text-[20px] sm:text-[16px] text-[12px] font-[700] sm:mt-[15px] mt-[10px] mb-[15px] duration-1100">Chó Phốc Sóc</div>
                    <div className="mt-[-20px] text-center text-white lg:text-[18px] md:text-[16px] sm:text-[14px] text-[10px] font-[600] opacity-0 group-hover:opacity-100 transition-opacity duration-1100">
                        Số lượng: 3
                    </div>
                </div>
            </a>
            
        </>
    )
}