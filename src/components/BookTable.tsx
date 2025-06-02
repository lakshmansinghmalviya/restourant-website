'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from 'lucide-react'

interface FormData {
  fullName: string
  phoneNumber: string
  emailAddress: string
  numberOfGuests: string
  date: string
  time: string
  message: string
}

export default function ReservationDialog() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    numberOfGuests: '',
    date: '',
    time: '',
    message: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Reservation submitted:', formData)
    // You can make an API call here
  }

  return (
    <Dialog>
      {/* Trigger Button in the header */}
      <DialogTrigger asChild>
        <Button variant="outline" className="text-white bg-red-600 hover:bg-red-700">
          Reservation
        </Button>
      </DialogTrigger>

      {/* The Dialog Content */}
      <DialogContent className="max-w-3xl bg-gray-900 text-white px-6 py-8">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white mb-2">Book Your Table</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="FULL NAME*"
              value={formData.fullName}
              onChange={handleInputChange}
              className="bg-transparent border border-gray-600 px-4 py-3 text-white text-sm rounded-sm focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="PHONE NUMBER*"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="bg-transparent border border-gray-600 px-4 py-3 text-white text-sm rounded-sm focus:outline-none"
              required
            />
          </div>

          <input
            type="email"
            name="emailAddress"
            placeholder="EMAIL ADDRESS*"
            value={formData.emailAddress}
            onChange={handleInputChange}
            className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white text-sm rounded-sm focus:outline-none"
            required
          />

          <select
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleInputChange}
            className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white text-sm rounded-sm focus:outline-none"
            required
          >
            <option value="">NUMBER OF GUESTS</option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1} className="bg-gray-800 text-white">
                {i + 1} Guest{i > 0 ? 's' : ''}
              </option>
            ))}
            <option value="8+" className="bg-gray-800 text-white">8+ Guests</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="bg-transparent border border-gray-600 px-4 py-3 text-white text-sm rounded-sm focus:outline-none [color-scheme:dark]"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="bg-transparent border border-gray-600 px-4 py-3 text-white text-sm rounded-sm focus:outline-none [color-scheme:dark]"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="MESSAGE..."
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white text-sm rounded-sm resize-none focus:outline-none"
          />

          <div className="flex justify-end space-x-3 pt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="text-white border-gray-600">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
              Reserve Now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
