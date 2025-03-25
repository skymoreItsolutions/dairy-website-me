import Image from 'next/image';
import Link from 'next/link';
import { FaTruck, FaArrowRight } from 'react-icons/fa';

const ServiceArea = () => {
  return (
    <div className="service-area relative bg-[#62371f] z-[1] sa-bg  px-5 lg:px-24  py-20">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-center text-white animate-fadeInDown">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-white text-white rounded-full p-[2px] mb-0">
              <FaTruck className="bg-white text-white text-3xl rounded-full p-1" />
              <span className="text-lg font-semibold pr-3">Services</span>
            </div>
            <h2 className="font-bold capitalize text-4xl lg:text-[45px] lg:leading-[1.2] text-dark mt-2 mb-0">
              What Services we are <span className="text-white">provide</span> to you
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className='text-[17px] leading-[1.8] text-justify'>
              It's a stressful thing to move out of the country, but US Cargo Packers and Movers certainly made that part so much easier for us. They handled paperwork, customs clearances, moved our car, and so on. Everything arrived as per schedule - on time and safe, too.
            </p>
          </div>
          <div className="lg:col-span-2">
            <Link href="/services" className="text-white text-center  inline-flex items-center text-base font-semibold capitalize px-5 py-2.5 rounded-lg cursor-pointer  overflow-hidden bg-white shadow transition-all duration-500">
              All Services <FaArrowRight className="ml-2  rotate-[-40deg] transition-all" />
            </Link>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { id: '01', icon: '/images/air.svg', link: '/local-shifting-service', title: 'Local Shifting Service', para: "Trust our local shifting services for a hassle-free move. Our expert packers and movers ensure safe, efficient transport." },
            { id: '02', icon: '/images/ocean.svg', link: '/domestic-shifting-service', title: 'Domestic Shifting Service', para: "Packers and Movers provide hassle-free domestic shifting services, ensuring safe packing, timely transportation." },
            { id: '03', icon: '/images/road.svg', link: '/loading-unloading-service', title: 'Loading Unloading Service', para: "Our loading and unloading services at US Cargo Packers and Movers ensure safe, efficient handling of your belongings." },
            { id: '04', icon: '/images/warehouse.svg', link: '/international-shifting-service', title: 'International Shifting', para: "US Cargo Packers and Movers offers reliable international shifting services, ensuring safe, efficient relocation with experts." },
            { id: '05', icon: '/images/package.svg', link: '/office-shifting-service', title: 'Office Shifting Service', para: "Service US Cargo Packers and Movers offer efficient office shifting services, safe, and hassle-free relocation for businesses." },
            { id: '06', icon: '/images/shipping.svg', link: '/packing-unpacking-service', title: 'Packing Unpacking Service', para: "US Cargo Packers and Movers offer professional packing and unpacking services are safely handled and efficiently relocated." },
            { id: '07', icon: '/images/supply.svg', link: '/car-transportation-services', title: 'Car & Bike Transportation ', para: "US Cargo Packers and Movers offer reliable car and bike transportation services, ensuring safe, timely delivery with care." },
            { id: '08', icon: '/images/commercial.svg', link: '/warehouse-service', title: 'Warehouse Service', para: "Our warehouse service offers secure storage solutions, efficient relocation for your belongings." },
          ].map((service) => (
            <div key={service.id} className="service-item">
              <div className="card-num">{service.id}</div>
              <div className="service-icon relative">
                <img src={service.icon} alt={service.title} className='absolute top-4 left-3' />
              </div>
              <div className="">
                <h4 className="text-xl font-semibold mb-2">
                  <Link href={service.link} className="text-[#62371f]">{service.title}</Link>
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {service.para}
                </p>
                <Link href={service.link} className="text-white text-center  inline-flex items-center text-base font-semibold capitalize px-5 py-2.5 rounded-lg cursor-pointer  overflow-hidden bg-white shadow transition-all duration-500">
                  Learn More <FaArrowRight className="ml-2  rotate-[-40deg] transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceArea;
