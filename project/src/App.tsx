import React, { useState } from 'react';
import { Heart, Shield, Lock, Globe, Star, ChevronRight, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Scale as Male, Scale as Female } from 'lucide-react';
import { LanguageSelector } from './components/LanguageSelector';
import { useLanguage } from './LanguageContext';

function App() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    gender: '',
    lookingFor: '',
    age: '25',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive */}
      <div className="relative min-h-[600px] md:min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        {/* Language Selector - Fixed position on mobile, absolute on desktop */}
        <div className="fixed md:absolute top-4 right-4 z-50">
          <LanguageSelector />
        </div>
        
        <div className="relative min-h-[600px] md:min-h-screen container mx-auto px-4 flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-20 md:py-0">
            {/* Hero Content - Responsive text sizes */}
            <div className="text-white text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('tagline')}</h1>
              <p className="text-lg md:text-xl mb-8">{t('subtitle')}</p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition">
                  {t('joinNow')}
                </button>
                <button className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-3 rounded-full font-semibold transition">
                  {t('browseProfiles')}
                </button>
              </div>
            </div>

            {/* Registration Form - Responsive padding and width */}
            <div className="w-full max-w-md mx-auto md:ml-auto">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('startJourney')}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Gender Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('iAm')}</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, gender: 'male'})}
                        className={`flex items-center justify-center space-x-2 p-3 rounded-lg border ${
                          formData.gender === 'male' ? 'bg-emerald-50 border-emerald-500' : 'border-gray-300'
                        }`}
                      >
                        <Male className="w-5 h-5" />
                        <span>{t('male')}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, gender: 'female'})}
                        className={`flex items-center justify-center space-x-2 p-3 rounded-lg border ${
                          formData.gender === 'female' ? 'bg-emerald-50 border-emerald-500' : 'border-gray-300'
                        }`}
                      >
                        <Female className="w-5 h-5" />
                        <span>{t('female')}</span>
                      </button>
                    </div>
                  </div>

                  {/* Looking For Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('lookingFor')}</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, lookingFor: 'male'})}
                        className={`flex items-center justify-center space-x-2 p-3 rounded-lg border ${
                          formData.lookingFor === 'male' ? 'bg-emerald-50 border-emerald-500' : 'border-gray-300'
                        }`}
                      >
                        <Male className="w-5 h-5" />
                        <span>{t('male')}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, lookingFor: 'female'})}
                        className={`flex items-center justify-center space-x-2 p-3 rounded-lg border ${
                          formData.lookingFor === 'female' ? 'bg-emerald-50 border-emerald-500' : 'border-gray-300'
                        }`}
                      >
                        <Female className="w-5 h-5" />
                        <span>{t('female')}</span>
                      </button>
                    </div>
                  </div>

                  {/* Age Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('age')}</label>
                    <select 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    >
                      {[...Array(82)].map((_, i) => (
                        <option key={i + 18} value={i + 18}>{i + 18}</option>
                      ))}
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition"
                  >
                    {t('startJourney')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Responsive grid */}
      <div className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">{t('features.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Shield, title: t('features.cards.verified') },
              { icon: Lock, title: t('features.cards.privacy') },
              { icon: Heart, title: t('features.cards.ai') },
              { icon: Globe, title: t('features.cards.global') },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories - Responsive grid */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">{t('successStories.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: 'Sara', location: 'Oslo', text: 'I found my perfect match thanks to Zawaj Rishta.' },
              { name: 'Ahmed', location: 'Stockholm', text: 'The AI recommendations were spot on! We\'re happily married now.' },
              { name: 'Aisha', location: 'Copenhagen', text: 'This platform made finding a compatible partner so much easier.' },
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{story.text}"</p>
                <p className="font-semibold">- {story.name}, {story.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works - Responsive steps */}
      <div className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">{t('howItWorks.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { step: 1, title: t('howItWorks.steps.create') },
              { step: 2, title: t('howItWorks.steps.browse') },
              { step: 3, title: t('howItWorks.steps.connect') },
            ].map((step, index) => (
              <div key={index} className="text-center transform hover:-translate-y-1 transition">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Responsive grid */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.about')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition">{t('footer.about')}</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.support')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Safety Tips</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.legal')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.connect')}</h3>
              <div className="flex space-x-4 mb-4">
                <Facebook className="w-6 h-6 hover:text-emerald-400 cursor-pointer transition" />
                <Twitter className="w-6 h-6 hover:text-emerald-400 cursor-pointer transition" />
                <Instagram className="w-6 h-6 hover:text-emerald-400 cursor-pointer transition" />
                <Linkedin className="w-6 h-6 hover:text-emerald-400 cursor-pointer transition" />
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Live Chat Support</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Zawaj Rishta. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;