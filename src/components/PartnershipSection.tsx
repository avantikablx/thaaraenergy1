import { Handshake, Globe, Sparkles, ExternalLink } from 'lucide-react';

const PartnershipSection = () => {
    const partners = [
        {
            name: 'ETO Motors',
            logoUrl: '/eto.jpg',
            website: 'https://www.etomotors.com/',
            description: 'Leader in electric mobility solutions',
            category: 'Electric Vehicles',
            tagline: 'The Good Move'
        },
        {
            name: 'Thunder+',
            logoUrl: '/thunder.jpg',
            website: 'https://www.thunderplus.io/',
            description: 'EV Chargers: Faster. Smarter. Better',
            category: 'Charging Infrastructure',
            tagline: 'Next-Gen EV Solutions'
        },
        {
            name: 'SAERA KETO',
            logoUrl: '/saera_keto.jpg',
            website: 'https://www.ketomotors.com/',
            description: 'Electric vehicle manufacturing excellence',
            category: 'Vehicle Manufacturing',
            tagline: 'Sustainable Mobility'
        },
        {
            name: 'ME Energy',
            logoUrl: '/me.jpg',
            website: 'https://meenergy.earth/en/',
            description: 'Sustainable energy solutions',
            category: 'Energy Solutions',
            tagline: 'Clean Energy Future'
        }
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-black relative w-screen">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Title and Description */}
               
                <div className="mb-8 sm:mb-10 md:mb-12 text-left mt-2 sm:mt-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    Our Partners
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white text-nowrap max-w-5xl leading-relaxed">
                    We collaborate with industry leaders to deliver comprehensive renewable energy and electric mobility solutions.
                    </p>
                </div>

                                {/* Partners Grid */}
                <div className="py-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex flex-col items-start gap-3 sm:gap-4">
                                {/* Logo */}
                                <img 
                                    src={partner.logoUrl} 
                                    alt={`${partner.name} logo`}
                                    className="w-32 h-32 sm:w-24 sm:h-24 object-contain"
                                    onError={(e) => {
                                        // Fallback to text if image fails to load
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const fallback = target.nextSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'block';
                                    }}
                                />
                                <div className="text-white font-bold text-xs hidden">
                                    {partner.name.split(' ').map(word => word[0]).join('')}
                                </div>
                               
                                {/* Partner Info */}
                                <div>
                                    <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white">{partner.name}</p>
                                    <p className="text-sm sm:text-base text-white leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">{partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;