import { Building2, Factory, Home, Zap, Truck, Sun, Battery, Leaf } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: 'Residential Solar',
      description: 'Clean energy solutions for homes and residential communities with grid-tied and hybrid systems.',
      icon: Home,
      image: 'https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Residential Solar Systems', 'Grid-tied Solutions', 'Hybrid Systems', 'Net Metering', 'Home Energy Storage'],
      benefits: 'Save up to 90% on electricity bills with 3-5 year payback'
    },
    {
      title: 'Commercial & Industrial',
      description: 'Comprehensive solar solutions for businesses with CAPEX and OPEX models to reduce operational costs.',
      icon: Building2,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Commercial Rooftop Solar', 'Industrial Solar Systems', 'CAPEX & OPEX Models', 'Energy Management', 'Corporate PPAs'],
      benefits: 'Reduce energy costs and meet ESG mandates'
    },
    {
      title: 'Manufacturing',
      description: 'Industrial sustainability solutions to reduce operational costs and carbon footprint for manufacturing facilities.',
      icon: Factory,
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Process Optimization', 'Waste Heat Recovery', 'Cogeneration Systems', 'Energy Audits', 'Sustainability Consulting'],
      benefits: 'Optimize energy consumption and reduce carbon emissions'
    },
    {
      title: 'Utilities & IPPs',
      description: 'Large-scale solar park development and grid integration solutions for utilities and independent power producers.',
      icon: Zap,
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Utility-Scale Solar Parks', 'Grid Integration', 'Power Purchase Agreements', 'O&M Services', 'Asset Management'],
      benefits: 'MW-scale renewable energy generation with long-term contracts'
    },
    {
      title: 'Transportation & Logistics',
      description: 'Electric mobility infrastructure for fleets and transportation companies transitioning to clean energy.',
      icon: Truck,
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Fleet Electrification', 'Charging Infrastructure', 'Route Optimization', 'Maintenance Services', 'Energy Management'],
      benefits: 'Reduce fuel costs by 50% and improve sustainability ratings'
    },
    {
      title: 'Agriculture',
      description: 'Solar solutions for agricultural applications including irrigation pumps and agri-feeders under PM-KUSUM scheme.',
      icon: Leaf,
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Solar Water Pumps', 'Agri-Feeder Solarization', 'PM-KUSUM Implementation', 'Grid-Connected Systems', 'Subsidy Optimization'],
      benefits: 'Reduce irrigation costs and increase farm productivity'
    }
  ];

  const caseStudies = [
    {
      industry: 'Commercial',
      client: 'Office Complex - 500 kW Installation',
      challenge: 'Reduce electricity costs by 40% while maintaining operations',
      solution: 'Rooftop solar system with net metering and energy management',
      result: '45% reduction in energy costs, 3.5-year payback period',
      savings: '₹15 lakhs annual savings',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      industry: 'Industrial',
      client: 'Manufacturing Plant - 2 MW Installation',
      challenge: 'Meet ESG targets while reducing operational expenses',
      solution: 'Large-scale rooftop solar with OPEX model and monitoring',
      result: '50% renewable energy mix, carbon neutral operations',
      savings: '₹60 lakhs annual savings',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      industry: 'Agriculture',
      client: 'Farmer Cooperative - PM-KUSUM Project',
      challenge: 'Reduce irrigation costs for 100+ farmers',
      solution: 'Solar water pumps and feeder solarization with subsidies',
      result: '70% reduction in irrigation costs, improved crop yield',
      savings: '₹2 lakhs per farmer annually',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const marketOpportunities = [
    {
      sector: 'Residential',
      potential: '40 GW by 2026',
      drivers: ['MNRE subsidies up to 40%', 'Net metering policies', 'Rising electricity tariffs'],
      icon: Home
    },
    {
      sector: 'Commercial & Industrial',
      potential: '60 GW by 2030',
      drivers: ['Corporate ESG mandates', 'Open access regulations', 'Tax benefits'],
      icon: Building2
    },
    {
      sector: 'Utility Scale',
      potential: '280 GW by 2030',
      drivers: ['Government tenders', 'Falling solar costs', 'Grid parity achievement'],
      icon: Sun
    },
    {
      sector: 'Agriculture',
      potential: '25 GW by 2026',
      drivers: ['PM-KUSUM scheme', 'Feeder separation', 'Water security needs'],
      icon: Leaf
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}


      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20230626/pngtree-sustainable-energy-at-industrial-green-field-3d-render-illustration-of-solar-image_3683718.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h1>
          <p className="text-white/80 text-lg">
            Delivering tailored renewable energy solutions across diverse industry sectors
            to drive efficiency, reduce costs, and accelerate the clean energy transition.
          </p>
        </div>
      </section>


      {/* Industries Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-800 hover:border-gray-600 cursor-pointer transform hover:scale-105"
              >
                {/* Card Image with Icon */}
                <div className="relative h-80">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>



                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg text-center">{industry.title}</h3>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">{industry.description}</p>

                    {/* Solutions */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Key Solutions:</h4>
                      <div className="space-y-2">
                        {industry.solutions.slice(0, 3).map((solution, solutionIndex) => (
                          <div key={solutionIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 text-xs">{solution}</span>
                          </div>
                        ))}
                        {industry.solutions.length > 3 && (
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 text-xs">+{industry.solutions.length - 3} more solutions</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <p className="text-white font-semibold text-xs leading-relaxed">{industry.benefits}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-8">
              Market Opportunities
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              India's renewable energy sector presents unprecedented growth opportunities across all segments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {marketOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-800 hover:border-gray-600"
              >
                <div className="h-2 bg-white"></div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <opportunity.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{opportunity.sector}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{opportunity.potential}</div>
                  <div className="space-y-2">
                    {opportunity.drivers.map((driver, driverIndex) => (
                      <div key={driverIndex} className="text-xs sm:text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full mr-2"></div>
                        {driver}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-8">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Real-world examples of how we've helped businesses across different industries
              achieve their sustainability and cost reduction goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-800 hover:border-gray-600 cursor-pointer transform hover:scale-105"
              >
                {/* Card Image */}
                <div className="relative h-80">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {study.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg text-center">{study.client}</h3>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-2">Solution:</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Result */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-2">Result:</h4>
                      <p className="text-white text-xs font-medium">{study.result}</p>
                    </div>

                    {/* Savings */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <p className="text-white font-semibold text-xs leading-relaxed">{study.savings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-8">
              Why Choose Thaara Energy?
            </h2>
            <p className="text-xl text-gray-400">
              Proven expertise across industries with a track record of successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Deep understanding of sector-specific energy challenges and regulatory requirements.',
                number: '01'
              },
              {
                title: 'Proven Track Record',
                description: 'Successful project delivery across 10+ MW of installations with guaranteed performance.',
                number: '02'
              },
              {
                title: 'End-to-End Solutions',
                description: 'Complete project lifecycle management from planning and design to installation and maintenance.',
                number: '03'
              },
              {
                title: 'Subsidy Optimization',
                description: 'Maximize project returns through comprehensive subsidy navigation and documentation support.',
                number: '04'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-black w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6">
                  {benefit.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{benefit.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
            Ready to Transform Your Industry with Clean Energy?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Contact us today to discuss your specific industry requirements and discover how we can help
            you achieve significant cost savings while meeting your sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a href="/contact.html" className="bg-white text-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center shadow-lg">
              Get Industry-Specific Quote
              <Battery className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </a>
            
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;