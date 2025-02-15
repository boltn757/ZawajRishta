import React from 'react';
import { ShieldCheck, Lock, UserCheck, AlertCircle } from 'lucide-react';

const TrustAndSafety = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-emerald-600" />,
      title: 'Profile Verification',
      description: 'Every profile is verified through phone number authentication.'
    },
    {
      icon: <Lock className="h-10 w-10 text-emerald-600" />,
      title: 'Data Security',
      description: 'Your personal information is protected with end-to-end encryption.'
    },
    {
      icon: <UserCheck className="h-10 w-10 text-emerald-600" />,
      title: 'Moderated Content',
      description: 'Our team ensures all profiles follow Islamic guidelines.'
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-emerald-600" />,
      title: '24/7 Support',
      description: 'Get help anytime with our dedicated support team.'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trust & Safety
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Your security and privacy are our top priorities
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
            Learn More About Our Safety Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustAndSafety;