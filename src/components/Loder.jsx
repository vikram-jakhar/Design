import React, { useEffect, useState } from "react";
const Loder = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => { setloader(false); }, 2000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    className="bg-black top-0 start-0 fixed w-full flex flex-col z-30 justify-center items-center   min-h-screen"
                >
                    <div className=" content text-center ">
                        <h2 className="text-white text-5xl sm:text-[100px] font-ff-mont absolute mt-10 ">Design_Furniture</h2>
                        <h2 className="text-white text-5xl sm:text-[100px] font-ff-mont absolute mt-10">Design_Furniture</h2>
                    </div>

                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Loder