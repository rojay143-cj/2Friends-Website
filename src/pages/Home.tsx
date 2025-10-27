import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const beliefs = [
    'Everyone can be, do, or have anything they want',
    'Our history does not define us or our potential',
    'You become what you think about throughout the day',
    'Almost all our actions are habitual and require very little thinking',
    'Having someone invested in your success, trained in the principles of success, who can point out subtle patterns in your thoughts and actions',
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-brand-blue-light to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Success Journey Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              However you define success, you are the only one who can take the necessary steps to achieve it. But, you don't have to go through the journey alone.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Partner with a Friend
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At 2 Friends Coaching & Consulting, we're here to support you in achieving your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-blue-light rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue rounded-full mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Financial Wealth
              </h3>
              <p className="text-gray-600">
                Build sustainable wealth and achieve your financial aspirations with proven strategies.
              </p>
            </div>

            <div className="bg-brand-blue-light rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue-lighter rounded-full mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Improved Health
              </h3>
              <p className="text-gray-600">
                Transform your health and well-being through mindset shifts and positive habits.
              </p>
            </div>

            <div className="bg-brand-blue-light rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Better Relationships
              </h3>
              <p className="text-gray-600">
                Enhance your connections and achieve work-life balance with expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Believe
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg flex-1">{belief}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you seek greater financial wealth, improved health, better relationships, or an enhanced work-life balance, we're here to support you.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-4 bg-white text-brand-blue font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
