import React, { useState } from "react";

interface FormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  numberOfGuests: string;
  date: string;
  time: string;
  message: string;
}

export default function ReservationForm({
  onCancel,
  onSubmitSuccess,
}: {
  onCancel: () => void;
  onSubmitSuccess: () => void;
}) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    numberOfGuests: "",
    date: "",
    time: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
    // You can call an API here
    onSubmitSuccess(); // close dialog
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="fullName"
          placeholder="FULL NAME*"
          value={formData.fullName}
          onChange={handleInputChange}
          required
          className="bg-transparent border border-gray-600 px-4 py-2 text-white"
        />
        <input
          name="phoneNumber"
          placeholder="PHONE NUMBER*"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
          className="bg-transparent border border-gray-600 px-4 py-2 text-white"
        />
      </div>

      <input
        name="emailAddress"
        placeholder="EMAIL ADDRESS*"
        type="email"
        value={formData.emailAddress}
        onChange={handleInputChange}
        required
        className="bg-transparent border border-gray-600 px-4 py-2 text-white w-full"
      />

      <select
        name="numberOfGuests"
        value={formData.numberOfGuests}
        onChange={handleInputChange}
        required
        className="bg-transparent border border-gray-600 px-4 py-2 text-white w-full"
      >
        <option value="">NUMBER OF GUESTS</option>
        {[...Array(8)].map((_, i) => (
          <option key={i + 1} value={i + 1} className="bg-gray-800">
            {i + 1} Guest{i > 0 ? "s" : ""}
          </option>
        ))}
        <option value="8+" className="bg-gray-800">
          8+ Guests
        </option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
          className="bg-transparent border border-gray-600 px-4 py-2 text-white"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
          className="bg-transparent border border-gray-600 px-4 py-2 text-white"
        />
      </div>

      <textarea
        name="message"
        placeholder="MESSAGE..."
        value={formData.message}
        onChange={handleInputChange}
        className="bg-transparent border border-gray-600 px-4 py-2 text-white w-full"
        rows={4}
      />

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-400 text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white hover:bg-red-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
