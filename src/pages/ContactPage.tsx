import React from 'react';
import ContactForm from '../components/ContactForm';
import { submitContactForm } from '../../services/propertyService';
import { ContactMessage } from '../../types';

const ContactPage: React.FC = () => {
  const handleFormSubmit = async (data: ContactMessage) => {
    // This function will be passed to ContactForm and will call the service
    return await submitContactForm(data);
  };

  return (
    <div className="bg-neutral-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-neutral-600">
            We'd love to hear from you. Whether you have a question about properties, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Send Us a Message</h2>
            <ContactForm onSubmitForm={handleFormSubmit} />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Contact Information</h2>
            <div className="space-y-6 text-neutral-700">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Our Office
                </h3>
                <p className="mt-1">Nerul, Navi Mumbai</p>
                {/* <p>Metropolis, ST 12345</p> */}
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Us
                </h3>
                <p className="mt-1">(+91)8454057780</p>
                <p className="mt-1">(+91)9867984977</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Email Us
                </h3>
                <p className="mt-1">info@Sadguruestate.com</p>
                <p>support@Sadguruestate.com</p>
              </div>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Business Hours</h3>
                <p className="text-neutral-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-neutral-700">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-neutral-700">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;