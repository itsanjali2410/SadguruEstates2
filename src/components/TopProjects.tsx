
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Autoplay } from "swiper/modules"; // NEW
import "swiper/css";

const cityList = [
    "Nerul", "Seawooods", "Turbhe", "Juinagar",
];

const projects = [
    {
        name: "Godrej Central",
        location: "Chembur, Mumbai",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/26/full/1724663041-3874.jpg?im=FeatureCrop,size=(826,465)",
        thumbnail: "https://qobrix.com/wp-content/uploads/elenih/2020/12/office-building1.jpg",
        bhk: "1, 2 & 3 BHK",
        size: "481 - 961 sqft",
        possession: "Mar 2027",
        price: "Price on request"
    },
    {
        name: "Proviso Galaxy Maplewoods",
        location: "Kharghar, Mumbai",
        image: "https://qobrix.com/wp-content/uploads/elenih/2020/12/office-building1.jpg",
        thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/26/full/1724663041-3874.jpg?im=FeatureCrop,size=(826,465)",
        bhk: "2 BHK",
        size: "700 - 850 sqft",
        possession: "Dec 2026",
        price: "₹95 Lakhs onwards"
    },
    {
        name: "L&T Elixir Reserve",
        location: "Powai, Mumbai",
        image: "https://www.livemint.com/lm-img/img/2025/04/13/600x338/IMG_6189_1736860051606_1744532696858.jpg",
        thumbnail: "https://www.livemint.com/lm-img/img/2025/04/13/600x338/IMG_6189_1736860051606_1744532696858.jpg",
        bhk: "2, 3 BHK",
        size: "850 - 1250 sqft",
        possession: "Jun 2025",
        price: "₹1.8 Cr onwards"
    },
];

const TopProjectsSlider = () => {
    const [selectedCity, setSelectedCity] = useState("Mumbai");
    const [activeIndex, setActiveIndex] = useState(0);

    const selectedProjects = projects; // later filter based on city

    return (
        <section className="bg-white py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Top Projects</h2>

            {/* City Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
                {cityList.map((city) => (
                    <button
                        key={city}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition ${city === selectedCity
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
                            }`}
                        onClick={() => {
                            setSelectedCity(city);
                            setActiveIndex(0); // Reset project
                        }}
                    >
                        {city}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-5 gap-6 items-start">
                {/* Thumbnails */}
                {/* Thumbnails */}
                <div className="hidden md:grid grid-rows-3 gap-4 h-[600px]">
                    {selectedProjects.map((project, i) => (
                        <img
                            key={i}
                            src={project.thumbnail}
                            alt={project.name}
                            className={`rounded-md w-full h-full object-cover cursor-pointer border-2 ${i === activeIndex ? "border-orange-500" : "border-transparent"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>


                {/* Main Image Slider */}
                <div className="col-span-3">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1} // 👈 only one image at a time
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="rounded-lg overflow-hidden shadow-md"
                    >
                        {selectedProjects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-[600px] object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

                {/* Right Project Details */}
                {/* Right Project Details */}
                <div className="bg-white p-4 rounded-lg shadow-md h-[600px] flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold">{selectedProjects[activeIndex].name}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            {selectedProjects[activeIndex].location}
                        </p>
                        <ul className="text-sm mb-4 space-y-1 text-gray-700">
                            <li>🛏 {selectedProjects[activeIndex].bhk}</li>
                            <li>📐 {selectedProjects[activeIndex].size}</li>
                            <li>📆 {selectedProjects[activeIndex].possession}</li>
                            <li>💰 {selectedProjects[activeIndex].price}</li>
                        </ul>
                    </div>
                    <button className="bg-orange-500 text-white w-full py-2 rounded-md font-medium hover:bg-orange-600">
                        📞 Contact Now
                    </button>
                </div>

            </div>
        </section>
    );
};

export default TopProjectsSlider;
