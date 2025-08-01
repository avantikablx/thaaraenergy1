import { Sun, Zap, Settings, Users, ArrowRight, CheckCircle, Battery, Target, Award, TrendingUp, Wind, Globe } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: 'Utility-Scale Solar Parks',
      description: 'We identify, develop, and deliver bankable solar projects with strong returns and long-term viability.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      features: [
        'Land acquisition and development',
        'Turnkey park infrastructure',
        'Corporate PPA facilitation',
        'Multi-MW scale projects',
        'Grid integration and O&M'
      ],
      highlight: 'Currently executing 10 MW Solar Park'
    },
    {
      title: 'EPCM for Renewable Infrastructure',
      description: 'From engineering to procurement and construction management, we offer turnkey solutions optimized for efficiency, quality, and ROI.',
      image: 'https://media.licdn.com/dms/image/sync/v2/D4D27AQF87qj3VBMLgw/articleshare-shrink_800/articleshare-shrink_800/0/1712011594663?e=2147483647&v=beta&t=SibHYnNjtwpziuCX-2wNzXE0YN9_SfY5Bi0rBCgAJL8',
      features: [
        'End-to-end execution',
        'Design optimization',
        'Tier-1 module & inverter supply',
        'BOS, civil and electrical works',
        'Quality control and commissioning'
      ]
    },
    {
      title: 'Strategic Advisory in Renewables',
      description: 'Our expertise supports governments, corporations, and investors in navigating the energy transition.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
      features: [
        'Policy and subsidy navigation',
        'Technical guidance',
        'Financial advisory',
        'Investment planning',
        'Regulatory compliance'
      ]
    },
    {
      title: 'EV Charging Infrastructure',
      description: 'We enable the shift to electric mobility by deploying reliable, smart charging networks.',
      image: 'https://www.aant.com.au/sites/default/files/styles/frontpage_liftup_link_images/public/2024-01/Picture1.jpg?h=1e3205a3&itok=Sjt3xUNg',
      features: [
        'Urban charging hubs',
        'Commercial charging solutions',
        'Smart charging networks',
        'Fleet charging infrastructure',
        'Maintenance and support'
      ]
    },
    {
      title: 'Green Hydrogen Initiatives',
      description: 'We are advancing early-stage development of green hydrogen as a key pillar of deep decarbonization.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
      features: [
        'Industrial hydrogen solutions',
        'Energy sector applications',
        'Electrolyzer deployment',
        'Storage and distribution',
        'Pilot project development'
      ]
    }
  ];

  const detailedOfferings = [
    {
      title: 'Rooftop Solar Solutions',
      subtitle: 'Clean Power, Right Above You',
      icon: Sun,
      features: [
        'Residential – Grid-tied and hybrid systems',
        'Commercial & Industrial – CAPEX & OPEX models',
        'Net metering assistance',
        'AMC and remote monitoring',
        'Reduce grid dependency up to 90%',
        'Payback in 3–5 years | 25+ years of energy savings'
      ],
      benefits: 'Save up to 90% on electricity bills'
    },
    {
      title: 'Solar Parks',
      subtitle: 'Scale Up with Utility-Grade Infrastructure',
      icon: Globe,
      features: [
        'Land assessment and development',
        'Design and deployment of large-scale solar farms',
        'Grid integration and long-term O&M',
        'Ideal for IPPs, DISCOMs, and institutional clients',
        'MW-scale development with efficiency-focused engineering'
      ],
      benefits: 'Utility-scale renewable energy generation'
    },
    {
      title: 'EPC Services',
      subtitle: 'From Blueprint to Bright Light',
      icon: Settings,
      features: [
        'Complete Engineering, Procurement & Construction',
        'In-house technical expertise',
        'Procurement leverage and strict quality control',
        'On-time, on-budget project delivery',
        'Built for performance. Designed for scale.'
      ],
      benefits: 'Turnkey project delivery with guaranteed performance'
    },
    {
      title: 'Subsidy Optimization',
      subtitle: 'Turn Subsidies Into Savings',
      icon: TrendingUp,
      features: [
        'Navigate complex government schemes with ease',
        'Maximize financial returns through subsidies',
        'State and central subsidies, tax breaks, net metering',
        'Full documentation and compliance support',
        'Get back up to 30–70% of project cost in incentives'
      ],
      benefits: 'Maximize project ROI through subsidy optimization'
    }
  ];

  const subsidyPrograms = [
    {
      category: 'Central Subsidies',
      programs: [
        'MNRE rooftop subsidy (up to 40% for residential)',
        'PM-KUSUM for agri-feeders and standalone pumps',
        'ALMM compliance and VGF schemes for solar parks'
      ]
    },
    {
      category: 'State Incentives',
      programs: [
        'Gujarat: Surya Urja Rooftop Yojana',
        'Maharashtra: Net metering & capital subsidy',
        'Tamil Nadu: TANGEDCO-driven solar rooftop benefits'
      ]
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center bg-cover bg-full"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20231004/pngtree-illustrated-3d-render-of-solar-cell-industrial-technology-harnessing-clean-energy-image_13558074.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/80 text-lg">
            Comprehensive renewable energy solutions designed to accelerate your transition
            to sustainable and efficient energy systems across the entire value chain.          </p>
        </div>
      </section>

             {/* Main Services Grid */}
       <section className="bg-white">
   {mainServices.map((service, index) => (
     <div key={index}>
       {/* CARD SECTION */}
       <div className="flex flex-col lg:flex-row min-h-[80vh]">
          
                   {/* Left: Text Content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gray-50">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 mb-4 sm:mb-6">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
              {service.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              {service.description}
            </p>
            <a href="#" className="inline-flex items-center text-black font-semibold text-base sm:text-lg transition-colors group">
              Explore <span className="ml-2 group-hover:translate-x-1 transition-transform">{'>'}</span>
            </a>
          </div>

         {/* Right: Image */}
         <div className="w-full lg:w-2/3 flex items-center justify-center bg-white">
           <img
             src={service.image}
             alt={service.title}
             className="object-cover h-64 sm:h-80 lg:h-full w-full"
           />
         </div>
       </div>

               {/* BOTTOM DESCRIPTION */}
        <div className="bg-gray-900 py-8 sm:py-12 px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4">
            {service.title === 'Utility-Scale Solar Parks' && 'Bankable Solar Solutions'}
            {service.title === 'EPCM for Renewable Infrastructure' && 'Turnkey Excellence'}
            {service.title === 'Strategic Advisory in Renewables' && 'Expert Guidance'}
            {service.title === 'EV Charging Infrastructure' && 'Smart Mobility Future'}
            {service.title === 'Green Hydrogen Initiatives' && 'Next-Gen Energy'}
          </h3>
          <p className="text-gray-300 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            {service.title === 'Utility-Scale Solar Parks' && 'Delivering 10+ MW projects with proven ROI. Our solar parks generate clean energy at scale while maximizing investor returns through strategic development and operational excellence.'}
            {service.title === 'EPCM for Renewable Infrastructure' && 'From concept to commissioning, we ensure on-time, on-budget delivery. Our EPCM expertise guarantees quality, efficiency, and long-term performance for your renewable energy investments.'}
            {service.title === 'Strategic Advisory in Renewables' && 'Navigate complex energy transitions with confidence. Our advisory services help governments and corporations make informed decisions for sustainable, profitable energy futures.'}
            {service.title === 'EV Charging Infrastructure' && 'Accelerating the electric mobility revolution. We deploy smart, reliable charging networks that support the growing EV ecosystem with cutting-edge technology and seamless user experience.'}
            {service.title === 'Green Hydrogen Initiatives' && 'Pioneering the future of clean energy. Our green hydrogen solutions drive deep decarbonization across industries, creating sustainable pathways for tomorrow\'s energy needs.'}
          </p>
        </div>
     </div>
   ))}
 </section>



      {/* Detailed Offerings */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-8">
              Our Offerings
            </h2>
            <p className="text-xl text-gray-400">
              We offer partners and clients a strategic advantage in the clean energy transition
            </p>
          </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
             {detailedOfferings.map((offering, index) => (
               <div
                 key={index}
                 className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-gray-300 transform hover:-translate-y-2"
               >
                                   {/* Icon Header with Professional Gradient */}
                  <div className="relative h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-white/20">
                      <offering.icon className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-white" />
                    </div>
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                        <span className="text-white text-xs sm:text-sm font-semibold">#{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{offering.title}</h3>
                      <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 font-medium mb-4 sm:mb-6 text-base sm:text-lg">{offering.subtitle}</p>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {offering.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2 sm:space-x-3 group/item">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-600 rounded-full"></div>
                        <p className="text-gray-900 font-bold text-base sm:text-lg">{offering.benefits}</p>
                      </div>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Subsidy Strategy */}
      <section id="subsidy" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-8">
              Subsidy Strategy
            </h2>
            <p className="text-xl text-gray-400">
              Maximize your project returns through comprehensive subsidy optimization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {subsidyPrograms.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-gray-800">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">{category.category}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {category.programs.map((program, programIndex) => (
                    <div key={programIndex} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="bg-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
                      </div>
                      <span className="text-gray-300 text-sm sm:text-base">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-12 text-white text-center border border-gray-800">
            <h3 className="text-3xl font-bold mb-8">Our Role in Subsidy Optimization</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white/10 p-6 rounded-lg mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Award className="h-12 w-12 mx-auto" />
                </div>
                <p className="font-semibold text-lg">Identify Applicable Subsidies</p>
              </div>
              <div className="group">
                <div className="bg-white/10 p-6 rounded-lg mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Settings className="h-12 w-12 mx-auto" />
                </div>
                <p className="font-semibold text-lg">Handle Documentation & Approvals</p>
              </div>
              <div className="group">
                <div className="bg-white/10 p-6 rounded-lg mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <TrendingUp className="h-12 w-12 mx-auto" />
                </div>
                <p className="font-semibold text-lg">Optimize Project IRR Using Subsidy Stacking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-8">
              Why Choose Thaara Energy?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                title: 'Proven Track Record',
                description: 'Proven track record across 10 MW+ of installations with successful project delivery.',
                icon: Award
              },
              {
                title: 'Expert Team',
                description: 'Team of solar engineers, policy experts, and project managers with deep industry knowledge.',
                icon: Users
              },
              {
                title: 'Best-in-Class Components',
                description: 'Best-in-class components and warranties ensuring long-term performance and reliability.',
                icon: CheckCircle
              },
              {
                title: 'Client-First Approach',
                description: 'Client-first approach with dedicated post-installation support and maintenance services.',
                icon: Target
              },
              {
                title: 'Reliable & Scalable',
                description: 'Reliable, scalable, and profitable solutions designed for long-term success.',
                icon: TrendingUp
              },
              {
                title: 'Full-Service Provider',
                description: 'Complete end-to-end solutions from planning and design to installation and maintenance.',
                icon: Settings
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-600"
              >
                {/* Icon Header */}
                <div className="h-24 sm:h-28 lg:h-32 bg-gray-800 flex items-center justify-center">
                  <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center shadow-lg">
                    <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-black" />
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Contact us today to discuss your renewable energy requirements and discover how we can help
            you achieve your sustainability and financial goals.
          </p>
          <button className="bg-white text-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-200 transition-all duration-300 inline-flex items-center shadow-lg">
            Get Started Today
            <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;