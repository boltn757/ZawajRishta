import React from 'react';
import { Heart, Shield, Users, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: 'Islamic Values',
      description: 'Our platform is built on Islamic principles, ensuring a halal way to find your life partner.'
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: 'Verified Profiles',
      description: 'Every profile is verified through phone number authentication for your safety and security.'
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: 'Family Involvement',
      description: 'Include your family in the matchmaking process, respecting traditional Islamic values.'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-emerald-600" />,
      title: 'AI Matchmaking',
      description: 'Advanced AI technology to find compatible matches based on your preferences and values.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose HalalMatch?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find your perfect match with our unique features and Islamic values
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;