import { Heart, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-brand-blue-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Welcome to 2 Friends Coaching & Consulting!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are passionate about empowering individuals to unlock their full potential, achieve remarkable success, and find joy, purpose and meaning in their lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At 2 Friends Coaching & Consulting, we understand that the key to thriving in business and life isn't just about strategies and techniques; it's about building the right mindset and cultivating productive habits that lead to consistent growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue rounded-full mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Passion
              </h3>
              <p className="text-gray-600">
                We're passionate about helping you unlock your full potential and achieve remarkable success.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue-lighter rounded-full mb-6">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Mindset
              </h3>
              <p className="text-gray-600">
                Building the right mindset is essential for thriving in both business and life.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue rounded-full mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Growth
              </h3>
              <p className="text-gray-600">
                Cultivating productive habits leads to consistent growth and lasting transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="assets\image\About-Us_HollyZachman.png"
                alt="HollyZachman"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that true success comes from understanding and transforming the patterns that shape your daily life. Our coaching methodology focuses on identifying and reshaping the habitual thoughts and actions that may be holding you back.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With dedicated support from someone invested in your success, trained in proven success principles, you'll gain the clarity and momentum needed to achieve your most ambitious goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">
                    Personalized coaching tailored to your unique goals and challenges
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">
                    Proven methodologies grounded in success principles
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">
                    Supportive partnership focused on sustainable transformation
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">
                    Focus on both mindset and actionable strategies
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="assets\image\About-Us_Bob-Proctor.png"
                alt="Bob"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
