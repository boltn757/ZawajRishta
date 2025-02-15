import React from 'react';
import { Star } from 'lucide-react';

const FeaturedMembers = () => {
  const members = [
    {
      id: 1,
      name: 'Sarah A.',
      age: 28,
      location: 'Oslo, Norway',
      occupation: 'Medical Doctor',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 2,
      name: 'Ahmed M.',
      age: 32,
      location: 'Stockholm, Sweden',
      occupation: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 3,
      name: 'Fatima H.',
      age: 26,
      location: 'Copenhagen, Denmark',
      occupation: 'Teacher',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 4,
      name: 'Omar K.',
      age: 30,
      location: 'Bergen, Norway',
      occupation: 'Business Analyst',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Members
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Meet some of our verified members looking for their life partner
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  className="h-48 w-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute top-2 right-2">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.age} years • {member.location}</p>
                <p className="mt-2 text-sm text-emerald-600">{member.occupation}</p>
                <button className="mt-4 w-full px-4 py-2 border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMembers;