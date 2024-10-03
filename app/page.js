import Image from 'next/image';
import BookingForm from './components/BookingForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Guincho 🇵🇹 Camper Retreat
        </h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/portugal.png"
            alt="Scenic view of our camper retreat in Guincho, Portugal"
            width={800}
            height={400}
            layout="responsive"
          />
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Book Your Stay
            </h2>
            
            <p className="text-gray-600 mb-6">
              Welcome to our delightful camper in the Guincho region of Portugal. 
              Nestled in this beautiful coastal area, our camper retreat offers a unique 
              and memorable stay. Fill out the form below with your details and preferred dates, 
              and we&apos;ll contact you back with availability and further information to make 
              your Guincho adventure a reality.
            </p>
            
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}