import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Sparkles, Leaf, Wind } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Hyderabad, India', 'Serving India & Europe']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9966886880']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['rajeev@thaaraenergy.com', 'amrithaa@thaaraenergy.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM']
    }
  ];

  const services = [
    'Renewable Energy Solutions',
    'Electric Mobility Infrastructure',
    'Industrial Sustainability',
    'Clean-Tech Advisory',
    'Energy Audits',
    'Project Consulting',
    'Other'
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-gray-900"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Ready to transform your energy future? Contact us to discuss your clean energy
            and sustainability requirements. We're here to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
            {/* Contact Information */}
            <div className="space-y-8 max-w-2xl">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Contact Information
                </h2>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  We're here to help you with your clean energy and sustainability needs.
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 lg:p-8">
                      <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-400 font-medium text-sm sm:text-base">
                            {info.title === 'Email' ? (
                              <a 
                                href={`mailto:${detail}`}
                                className="hover:text-white transition-colors duration-200"
                              >
                                {detail}
                              </a>
                            ) : info.title === 'Phone' ? (
                              <a 
                                href={`tel:${detail}`}
                                className="hover:text-white transition-colors duration-200"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white p-3 rounded-lg">
                    <Sparkles className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Quick Response</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
              Our Location
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 px-2 sm:px-0">
              Headquartered in Hyderabad, India, serving emerging markets across India and Europe.
            </p>
          </div>

          <div className="bg-black rounded-lg shadow-xl border border-gray-800">
            {/* Map Header */}
            <div className="relative h-64">
              <img
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Hyderabad Solar Infrastructure"
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="bg-white/20 p-6 rounded-lg mb-4 backdrop-blur-sm">
                    <MapPin className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Hyderabad, India</h3>
                  <p className="text-gray-300 text-lg">
                    Strategic location for serving emerging markets in India and expanding to Europe
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="group">
                  <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Globe className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-black" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Global Reach</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Serving India & Europe</p>
                </div>
                <div className="group">
                  <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Wind className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-black" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Clean Energy Hub</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Renewable Energy Focus</p>
                </div>
                <div className="group">
                  <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Leaf className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-black" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Sustainable Future</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Green Technology Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;