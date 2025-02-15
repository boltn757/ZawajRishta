import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const QuickSearch = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useState({
    gender: 'any',
    ageFrom: '',
    ageTo: '',
    location: '',
    sect: 'any'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('search.title')}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              {t('search.lookingFor')}
            </label>
            <select
              id="gender"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 bg-white/90"
              value={searchParams.gender}
              onChange={(e) => setSearchParams({ ...searchParams, gender: e.target.value })}
            >
              <option value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="ageFrom" className="block text-sm font-medium text-gray-700">
              {t('search.ageFrom')}
            </label>
            <input
              type="number"
              id="ageFrom"
              min="18"
              max="80"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 bg-white/90"
              value={searchParams.ageFrom}
              onChange={(e) => setSearchParams({ ...searchParams, ageFrom: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="ageTo" className="block text-sm font-medium text-gray-700">
              {t('search.ageTo')}
            </label>
            <input
              type="number"
              id="ageTo"
              min="18"
              max="80"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 bg-white/90"
              value={searchParams.ageTo}
              onChange={(e) => setSearchParams({ ...searchParams, ageTo: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              {t('search.location')}
            </label>
            <input
              type="text"
              id="location"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 bg-white/90"
              value={searchParams.location}
              onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="sect" className="block text-sm font-medium text-gray-700">
              {t('search.sect')}
            </label>
            <select
              id="sect"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 bg-white/90"
              value={searchParams.sect}
              onChange={(e) => setSearchParams({ ...searchParams, sect: e.target.value })}
            >
              <option value="any">Any</option>
              <option value="sunni">Sunni</option>
              <option value="shia">Shia</option>
            </select>
          </div>

          <div className="md:col-span-3 lg:col-span-5">
            <button
              type="submit"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
            >
              <Search className="h-5 w-5 mr-2" />
              {t('search.searchButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickSearch;