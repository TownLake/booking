// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Home() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const checkAvailability = () => {
    // This is a mock function. In a real app, you'd call an API to check availability.
    const isAvailable = Math.random() < 0.5;
    setAvailability(isAvailable);
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    if (availability) {
      setConfirmed(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Booking App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-8">
        <h1 className="text-4xl font-bold text-center">Welcome to Our Booking App</h1>
        
        <div className="space-y-4">
          <p className="text-xl text-center">Please select your desired dates:</p>
          <div className="flex justify-center space-x-4">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="p-2 border rounded"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="End Date"
              className="p-2 border rounded"
            />
          </div>
          <div className="text-center">
            <button
              onClick={checkAvailability}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={!startDate || !endDate}
            >
              Check Availability
            </button>
          </div>
        </div>

        {availability !== null && (
          <div className="text-center">
            <p className="text-xl">
              {availability ? "Dates are available!" : "Sorry, these dates are not available."}
            </p>
            {availability && (
              <form onSubmit={handleConfirmation} className="mt-4 space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="p-2 border rounded w-full max-w-md"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        )}

        {confirmed && (
          <div className="text-center text-green-600 text-xl">
            Your booking has been confirmed! Check your email for details.
          </div>
        )}
      </main>
    </div>
  );
}