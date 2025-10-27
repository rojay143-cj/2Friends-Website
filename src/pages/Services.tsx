import { BookOpen, Calendar, TrendingUp, Users, Target, Sparkles } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'One-on-One Coaching',
      description: 'Personalized coaching sessions tailored to your unique goals, challenges, and aspirations. Work directly with a dedicated coach invested in your success.',
      color: 'bg-brand-blue',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Goal Setting & Achievement',
      description: 'Transform your dreams into actionable plans. Learn proven strategies to set meaningful goals and create sustainable habits for consistent progress.',
      color: 'bg-brand-blue-lighter',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Mindset Transformation',
      description: 'Identify and reshape the thought patterns holding you back. Develop a success-oriented mindset that empowers you to overcome obstacles.',
      color: 'bg-brand-blue',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Business Consulting',
      description: 'Strategic guidance for entrepreneurs and business leaders. Build sustainable growth through mindset shifts and productive business habits.',
      color: 'bg-brand-blue-lighter',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Life Balance Coaching',
      description: 'Create harmony between work, health, relationships, and personal fulfillment. Design a life aligned with your values and priorities.',
      color: 'bg-brand-blue',
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Accountability Partnership',
      description: 'Ongoing support and accountability to keep you on track. Regular check-ins to monitor progress and adjust strategies as needed.',
      color: 'bg-brand-blue-lighter',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-brand-blue-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive coaching and consulting solutions designed to help you achieve remarkable success in every area of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-lg mb-6 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Transform Through Our Proven Process
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h4>
                    <p className="text-gray-600">
                      We begin by understanding your current situation, goals, and challenges to create a personalized roadmap.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue-lighter text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h4>
                    <p className="text-gray-600">
                      Together, we develop actionable strategies and identify the mindset shifts needed for breakthrough results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h4>
                    <p className="text-gray-600">
                      With ongoing support and accountability, you'll take consistent action toward your goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue-lighter text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Transformation</h4>
                    <p className="text-gray-600">
                      Experience lasting change as new habits and mindsets become your natural way of being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-blue-light to-white rounded-2xl p-8 lg:p-12">
              <img
                src="assets\image\2Friends - Webinar.png"
                alt="Webinar"
                className="rounded-xl shadow-lg w-full mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Free Webinar Available
              </h3>
              <p className="text-gray-600 mb-6">
                Learn more about our approach and how coaching can transform your life. Join our upcoming webinar to discover the principles of success.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors"
              >
                Get Access
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step toward achieving your goals. Contact us today to schedule your free consultation.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
