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

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    numberOfGuests: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Add actual submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left side - Form */}
      <div className="flex-1 bg-gray-900 p-8 lg:p-16 flex items-center">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="mb-8">
            <p className="text-red-500 font-medium text-sm tracking-wide uppercase mb-2">
              RESERVATION FORM
            </p>
            <h1 className="text-white text-4xl lg:text-5xl font-light leading-tight">
              Book Your Table
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Full Name, Phone, Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="FULL NAME*"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 transition-colors"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="PHONE NUMBER*"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 transition-colors"
                required
              />
              <input
                type="email"
                name="emailAddress"
                placeholder="EMAIL ADDRESS*"
                value={formData.emailAddress}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>

            {/* Row 2: Guests, Date, Time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-gray-800">NUMBER OF GUESTS</option>
                <option value="1" className="bg-gray-800">1 Guest</option>
                <option value="2" className="bg-gray-800">2 Guests</option>
                <option value="3" className="bg-gray-800">3 Guests</option>
                <option value="4" className="bg-gray-800">4 Guests</option>
                <option value="5" className="bg-gray-800">5 Guests</option>
                <option value="6" className="bg-gray-800">6 Guests</option>
                <option value="7" className="bg-gray-800">7 Guests</option>
                <option value="8" className="bg-gray-800">8+ Guests</option>
              </select>

              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors [color-scheme:dark]"
                  required
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500 pointer-events-none" />
              </div>

              <div className="relative">
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors [color-scheme:dark]"
                  required
                />
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500 pointer-events-none" />
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="MESSAGE..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-transparent border border-gray-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
            />

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 uppercase tracking-wide text-sm"
              >
                RESERVATION NOW
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side image simulation */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-200 to-purple-300">
          {/* Table simulation, lights, etc. */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-purple-600 via-purple-400 to-purple-200">
            <div className="absolute bottom-32 left-1/4 w-16 h-24 bg-amber-700 rounded-lg shadow-xl transform -rotate-3">
              <div className="absolute -top-8 left-2 right-2 h-12 bg-amber-800 rounded-t-lg" />
            </div>
            <div className="absolute bottom-32 right-1/4 w-16 h-24 bg-amber-700 rounded-lg shadow-xl transform rotate-2">
              <div className="absolute -top-8 left-2 right-2 h-12 bg-amber-800 rounded-t-lg" />
            </div>

            <div className="absolute bottom-48 left-1/3 w-8 h-12 bg-amber-600 rounded-lg shadow-lg">
              <div className="absolute top-2 left-1 right-1 h-8 bg-amber-300 rounded-sm opacity-60" />
            </div>
            <div className="absolute bottom-52 right-1/3 w-6 h-8 bg-amber-700 rounded-lg shadow-lg">
              <div className="absolute top-1 left-1 right-1 h-6 bg-amber-400 rounded-sm opacity-60" />
            </div>

            <div className="absolute bottom-44 left-1/2 w-1 h-8 bg-gray-400 rounded-full transform -rotate-12" />
            <div className="absolute bottom-44 left-1/2 ml-2 w-1 h-8 bg-gray-400 rounded-full transform rotate-12" />

            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-white rounded-full shadow-lg opacity-80" />
            <div className="absolute bottom-48 left-1/4 w-10 h-2 bg-white rounded-full shadow-lg opacity-70" />
            <div className="absolute bottom-46 right-1/4 w-10 h-2 bg-white rounded-full shadow-lg opacity-70" />
          </div>

          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-gray-200 to-transparent">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-1 bg-amber-800 opacity-30"
                style={{ top: `${i * 12 + 20}px` }}
              />
            ))}
          </div>

          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-200 rounded-full opacity-30 blur-2xl" />
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-300 rounded-full opacity-40 blur-xl" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-900/30 to-purple-900/60" />
      </div>
    </div>
  );
}
