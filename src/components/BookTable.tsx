'use client';

import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface FormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  numberOfGuests: string;
  date: string;
  time: string;
  message: string;
}

export default function ReservationForm({ onClose }) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    numberOfGuests: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // API call logic can go here
  };

  return (
    <div className="max-h-screen bg-gray-900 flex flex-col lg:flex-row overflow-y-auto rounded-md">
      {/* Left - Form */}
      <div className="w-full lg:w-1/2 bg-gray-900 p-6 sm:p-10 lg:p-16 flex items-center">
        <div className="w-full max-w-lg">
          <div className="mb-8">
            <p className="text-red-500 font-medium text-sm tracking-wide uppercase mb-2">
              RESERVATION FORM
            </p>
            <h1 className="text-white text-4xl lg:text-5xl font-light leading-tight">
              Book Your Table
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-4xl mx-auto px-4">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="FULL NAME*"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="PHONE NUMBER*"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="emailAddress"
                placeholder="EMAIL ADDRESS*"
                value={formData.emailAddress}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Guests */}
            <div>
              <select
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500"
                required
              >
                <option value="">NUMBER OF GUESTS</option>
                {[...Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1} className="bg-gray-800">
                    {i + 1} Guest{i > 0 ? 's' : ''}
                  </option>
                ))}
                <option value="8+" className="bg-gray-800">8+ Guests</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 [color-scheme:dark]"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 [color-scheme:dark]"
                required
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="MESSAGE..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end  items-center gap-2">
              <div className="">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-8 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 uppercase tracking-wide text-sm w-full md:w-auto"
                >
                  RESERVATION NOW
                </button>
              </div>
              <div>
                <button
                  onClick={onClose}
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>

      {/* Right - Image */}
      <div className="w-full hidden lg:block lg:w-1/2 h-64 lg:h-auto relative">
        <img
          src="/table/t1.png" // 👈 Place your image in /public directory as "reservation.jpg"
          alt="Reservation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </div>
  );
}