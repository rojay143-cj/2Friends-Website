interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/image/2Friends-Logo Blue.png"
              alt="2 Friends Coaching"
              className="h-52 w-auto mb-4 rounded-[5px] cursor-pointer"
              onClick={() => onNavigate('home')}
            />
            <p className="text-gray-300 text-sm">
              Empowering individuals to unlock their full potential and achieve remarkable success.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li
                className="cursor-pointer hover:text-[#2660a4] transition-colors"
                onClick={() => onNavigate('home')}
              >
                Home
              </li>
              <li
                className="cursor-pointer hover:text-[#2660a4] transition-colors"
                onClick={() => onNavigate('about')}
              >
                About Us
              </li>
              <li
                className="cursor-pointer hover:text-[#2660a4] transition-colors"
                onClick={() => onNavigate('services')}
              >
                Services
              </li>
              <li
                className="cursor-pointer hover:text-[#2660a4] transition-colors"
                onClick={() => onNavigate('contact')}
              >
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Two Friends Coaching & Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
