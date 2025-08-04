import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Sparkles, Leaf, Wind, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree to send emails directly to Gmail
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_subject', `ThaaraEnergy.com Enquiry - ${formData.name}`);

      const response = await fetch('https://formspree.io/f/mjkoenjd', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800">
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="bg-white p-2 sm:p-3 rounded-lg">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-900/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  We're here to help you with your clean energy and sustainability needs.
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6">
                      <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-400 font-medium text-sm">
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
              <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-800">
                <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                  <div className="bg-white p-2 rounded-lg">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">Quick Response</h4>
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
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
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