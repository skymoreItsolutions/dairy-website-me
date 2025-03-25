import Image from "next/image";

const Herotop = () => {
    return (
        <section className="section overview ext-over bg-[#f5f5f5] px-5 lg:px-28 py-20">
            <div className="container mx-auto ">
                <div className="flex flex-wrap items-center section__row">
                    <div className="w-full lg:w-1/2 xl:w-[41.6667%] section__col">
                        <div className="section__content">
                            <p className="block text-sm font-bold lin text-[#62371f] tracking-[2px] uppercase relative opacity-100" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                WELCOME TO Hieq
                            </p>
                            <p className="block text-2xl lg:text-6xl my-3 font-semibold relative opacity-100 " style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                Discover the Hidden Beauty and Rich Heritage of Gaualla
                            </p>

                            <div className="section__content-text text-anim">
                                <p className="block text-xl font-bold relative opacity-100  text-[#62371f]" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                    A Place Where Nature, Culture, and History Seamlessly Blend Together
                                </p>

                                <p className="block mt-5 text-[#7c858c] text-start relative opacity-100" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                    Gaualla is a mesmerizing destination filled with breathtaking landscapes, vibrant traditions, and historical wonders. Whether exploring its scenic beauty, experiencing local customs, or indulging in unique culinary delights, Gaualla offers an unforgettable journey.

                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:ml-[8.3333%] section__col ">
                        <div className="overview__thumb gFadeBottom relative">
                            <Image src="/images/overview-thumb-one.jpg" alt="Image" width={100} height={100} className="w-auto h-[450px] pl-0 lg:pl-[45px] main-thumb" />

                            <Image src="/images/overview-thumb-three.png" alt="Image" width={200} height={200} className="three absolute bottom-0 left-0 w-auto h-auto" />
                            <div className="overview__thumb-content ">
                                <h3 className="font-semibold text-white text-[30px]">Running Gaualla Since 1987</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herotop;
