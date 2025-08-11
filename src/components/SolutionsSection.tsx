const SolutionsSection = () => {
    const galleryImages = [
        {
            src: '/WhatsApp Image 2025-07-01 at 1.01.34 PM.jpeg',
            title: 'Solar Park Development',
            description: 'We identify, develop, and deliver bankable solar projects with strong returns and long-term viability. Currently executing a 50 MW Solar Park with full EPC scope.',
        },
        {
            src: '/WhatsApp Image 2025-07-01 at 1.01.35 PM.webp',
            title: 'Rooftop Solar Systems',
            description: 'Complete rooftop solar solutions for commercial and residential properties, including design, installation, and maintenance. Reduce electricity bills by up to 90% with grid-tied and off-grid systems.'
        },
        {
            src: 'https://media.istockphoto.com/id/1339079398/photo/agrivoltaic.jpg?s=612x612&w=0&k=20&c=TNMuoNoANhWmkIhr5FMxvw0Vb0Aq2Ufsem4Esra8S2A=',
            title: 'Agrivoltaics',
            description: 'We integrate agriculture with solar power systems to maximize land productivity, ensuring renewable energy generation and food cultivation coexist efficiently.',
        },
        {
            src: 'https://media.wired.com/photos/63bc816a995aa119ba7ba802/3:2/w_2560%2Cc_limit/Biz-ev-charger-1242853588.jpg',
            title: 'EV Charging Infrastructure',
            description: 'Comprehensive electric vehicle charging solutions including fast chargers, smart charging stations, and grid integration. Support the transition to sustainable transportation with reliable charging infrastructure.'
        },
        {
            src: '/storage.jpg',
            title: 'Energy Storage Solutions',
            description: 'Advanced energy storage systems including lithium-ion batteries, flow batteries, and green hydrogen solutions. Enable grid stability, peak shaving, and renewable energy integration for industrial and commercial applications.',
        },
        {
            src: "./portable.jpg",
            title: "Portable Substation",
            description: "A solar portable substation is a self-contained, transportable unit that integrates solar power generation with electrical distribution equipment, often housed within a container or trailer for easy relocation."
        },
        {
            src: 'https://shiva-engineering.com/wp-content/uploads/2024/09/solar-eps-scaled.jpg',
            title: 'EPCM for Renewable Infrastructure',
            description: 'End-to-end Engineering, Procurement, Construction, and Management services for renewable energy projects. We handle project planning, equipment sourcing, construction oversight, and commissioning to ensure optimal performance and returns.',
        },
        {
            src: 'https://rural.us/wp-content/uploads/2022/08/rsw_1280-1.webp',
            title: "Aquavoltaics",
            description: 'Helping people build resilient communities through local and sustainable solutions that reduce poverty, strengthen self-reliance, and protect natural resources.',
        },
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white relative w-screen">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Title and Description */}
                <div className="mb-8 sm:mb-10 md:mb-12 text-left mt-2 sm:mt-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                        Solutions
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-black max-w-5xl leading-relaxed">
                        Explore our diverse portfolio of renewable energy projects across different sectors and applications
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Container */}
                                <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[480px] overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>

                                    {/* Hover tint */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-auto"></div>

                                    {/* Top Gradient with Title */}
                                    <div className="absolute top-0 left-0 right-0 z-10">
                                        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 lg:h-36 bg-gradient-to-b from-black via-black/60 to-transparent transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0 will-change-transform"></div>
                                        <div className="relative px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
                                            <h3
                                                className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold leading-tight"
                                                style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}
                                            >
                                                {image.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Bottom Description and Button */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-300">
                                        <p
                                            className="text-sm sm:text-base lg:text-m opacity-0 group-hover:opacity-100 leading-relaxed text-white mb-3 sm:mb-4"
                                            style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}
                                        >
                                            {image.description}
                                        </p>
                                        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection; 