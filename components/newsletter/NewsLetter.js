import working from "public/assets/gif/working.gif"
import Image from "next/image";

const NewsLetter = () => {
    return (
        <section className="flex flex-col gap-8 px-20">
            <div className="bg-gradient-to-r from-[#4098F8] to-[#E82BCD] p-1 rounded-2xl">
                <div className="flex flex-col sm:flex-row bg-[#010120] rounded-2xl p-2">
                    <div className="sm:w-96 lg:w-[35vw]">
                        <Image objectFit="cover" alt="working" src={working}/>
                    </div>
                    <div className="flex flex-col flex-grow gap-4 justify-center items-center text-white text-lg sm:text-2xl font-bold text-center">
                        <div>
                            <p>We are recruiting!</p>
                            <p>Join us to be a part of TPHxSRMIST</p>
                        </div>

                        
                        <a href="https://lu.ma/gerc8cle" className="rounded-full border-2 border-white py-2 px-3 bg-gradient-to-r from-[#16EE97] to-[#AA66FE]">
                                Apply Now
                        </a>
                       

                    </div>
                </div>
            </div>

            <div className="grid grid-rows-2 lg:grid-cols-2 items-center pb-8">
                <div className="lg:w-96">
                    <p className="font-bold text-xl">Join our newsletter</p>
                    <p>Get all the latest TPHxSRMIST news delivered to your inbox</p>
                </div>
                <div className="flex flex-grow gap-2 items-center">
                    <input className="flex items-center indent-2 w-full h-fit rounded-xl p-2 bg-white text-[#7B7B7B]" placeholder="email@tphsrmist.app" />
                    <button className="whitespace-nowrap rounded-xl border-2 border-white py-2 px-3 bg-gradient-to-r from-[#16EE97] to-[#AA66FE] ">
                        Sign Up
                    </button>
                </div>
            </div>
        </section>
    );
}

export default NewsLetter;