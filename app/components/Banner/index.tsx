import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    {/*<div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>DESIGN AGENCY</button>
                  </div>*/}
                    <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Image src="/images/banner/check.svg" alt="check-image" width={20} height={20} />
                            <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Goverment Approved</h3>
                        </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                        Montessori <br />  Careland <br /> Schools.
                              
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                    <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src="/images/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Toddler</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/images/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Preschool</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/images/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Elementary</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/images/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Secondary</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:ml-24 lg:pt-20 hidden lg:block pl-100 '>
                    
                    <Image src="/images/banner/pic6.jpg" alt="hero-image" width={600} height={450} className='rounded-lg'/>
                </div>

            </div>
        </div>
    )
}

export default Banner;
