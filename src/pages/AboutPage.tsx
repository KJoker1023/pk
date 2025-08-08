import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We put our customers at the center of everything we do, ensuring their financial needs are met with care and respect.'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Clear, honest communication with no hidden fees or surprise charges. What you see is what you get.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every interaction, continuously improving our services and technology.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'We believe in supporting our community and helping individuals achieve their financial goals.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Pesa Kwanza
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Revolutionizing access to quick, reliable financial solutions 
              for individuals and families across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At Pesa Kwanza, we're dedicated to providing fast, fair, and 
                accessible financial solutions. We understand that life doesn't 
                wait for paperwork, which is why we've streamlined the lending 
                process to get you the funds you need, when you need them.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our innovative technology platform combined with human-centered 
                customer service ensures that every customer receives personalized 
                attention while benefiting from the speed and efficiency of modern 
                digital lending.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and accessible financial partner, 
                empowering individuals to overcome financial challenges and 
                achieve their goals with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg prose-blue max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Pesa Kwanza was founded with a simple belief: everyone deserves 
                access to fair and fast financial solutions. Our founders, having 
                experienced the frustration of traditional lending processes, set 
                out to create a better way.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Starting with a small team of financial experts and technology 
                innovators, we built a platform that puts customers first. We 
                eliminated unnecessary bureaucracy, reduced processing times, 
                and created transparent pricing that customers can trust.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Today, we're proud to have helped thousands of customers navigate 
                financial challenges, from unexpected expenses to planned investments. 
                Our commitment to responsible lending and customer satisfaction 
                continues to drive our growth and innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As we look to the future, we remain focused on our core mission: 
                making financial services more accessible, transparent, and 
                customer-friendly for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust Pesa Kwanza.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};