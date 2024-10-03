import BookingForm from './components/BookingForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Rural Portuguese Cabin Retreat
        </h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="/api/placeholder/800/400"
            alt="Cabin in rural Portugal"
          />
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Book Your Stay
            </h2>
            
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}