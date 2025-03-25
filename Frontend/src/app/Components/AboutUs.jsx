import Image from 'next/image';

const AboutUs = () => {
  return (
    <div>
      
      <section id="aboutus_sec" className="bg-gray-100 py-20 px-5 lg:px-28">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <Image 
                  src="/images/about-us.jpg" 
                  alt="About Us" 
                  width={300} 
                  height={300} 
                  className="w-full h-80 "
                />
              
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="about_content">
                <h2 className="text-3xl font-bold mb-4">Welcome to SwadeshiVip</h2>
                <p className="mb-4">We are the fourth generation dairy farmers aiming to empower your health and well-being by delivering antibiotic-free A2 certified Desi Cow milk and other organic dairy products to your doorstep...</p>
                <p className="mb-4">Since they get natural green fodder and nutritious diets, they give healthy and wholesome milk to you and your family members...</p>
                <p className="mb-4">Our little, innocent herds are raised in a blooming environment and are nurtured ethically...</p>
                <p className="mb-4">We apply desi cow manure in the soil at SwadeshiVIP farm in order to strengthen the soil...</p>
                <p className="mb-4">Besides this, pests and insects are managed with holy cow urine...</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-center px-4 md:px-20">At SwadeshiVIP, we ensure that all personnel and Gausevaks follow the safety protocols and use gloves and masks with utmost care...</p>
            <p className="text-center px-4 md:px-20 mt-4">At SwadeshiVIP, we want to help you in making a deep bond with, caring for, and cherishing organic life...</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision_sec" className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 p-4">
              <div className="vision_content">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p>We are moving ahead with our motto, "Your good health, our utmost priority." In the era of adulteration, we want to become the flag bearer of providing 100% pure and organic desi cow milk...</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <Image 
                src="/assets/img/vision_img.png" 
                alt="Vision" 
                width={500} 
                height={500} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
