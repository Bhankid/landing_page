// components/ContactForm.tsx
import React from "react";

type ContactFormProps = object

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <form className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700/50">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className="w-full px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full transition-all transform hover:scale-105"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
