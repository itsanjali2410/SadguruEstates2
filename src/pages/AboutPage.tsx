import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative py-16 sm:py-24 bg-neutral-800">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-30" 
            src="https://picsum.photos/seed/aboutus-banner/1600/500" 
            alt="Office building" 
          />
           <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/60 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Sadguru<span className="text-blue-600">Estate</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-neutral-300">
            Your trusted partner in navigating the world of real estate.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">Our Mission</h2>
              <p className="mt-4 text-lg text-neutral-600">
                At SadguruEstate, our mission is to simplify the property buying, selling, and renting process. We leverage technology and expert knowledge to provide unparalleled service, ensuring our clients achieve their real estate goals with confidence and ease.
              </p>
              <p className="mt-4 text-lg text-neutral-600">
                We believe in transparency, integrity, and building long-lasting relationships. Whether you're a first-time homebuyer, a seasoned investor, or looking for your dream rental, we're here to guide you every step of the way.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                className="rounded-lg shadow-xl" 
                src="https://picsum.photos/seed/team-meeting/600/450" 
                alt="Team meeting" 
              />
            </div>
          </div>

          <div className="mt-16 lg:mt-24">
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl text-center">Our Values</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0112 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0021 12c0 .778-.099 1.533-.284 2.253M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800">Client-Centric</h3>
                <p className="mt-2 text-base text-neutral-600">
                  Our clients are at the heart of everything we do. We listen, understand, and tailor our services to meet your unique needs.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800">Innovation</h3>
                <p className="mt-2 text-base text-neutral-600">
                  We embrace cutting-edge technology and innovative solutions to enhance your real estate journey and provide market-leading insights.
                </p>
              </div>
              <div className="text-center">
                 <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800">Integrity</h3>
                <p className="mt-2 text-base text-neutral-600">
                  We operate with the highest ethical standards, ensuring honesty, transparency, and fairness in all our dealings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;