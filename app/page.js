import Image from 'next/image';
import BookingForm from './components/BookingForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Rural Portuguese Cabin Retreat
        </h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/portugal.png"
            alt="Scenic view of our cabin in rural Portugal"
            width={800}
            height={400}
            layout="responsive"
          />
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Book Your Stay
            </h2>
            
            <BookingForm />
          </div>
        </div>
        
        {/* Debugging information */}
        <div className="mt-4 p-4 bg-gray-200 rounded">
          <p>Image path: /images/cabin.jpg</p>
          <p>Public directory contents:</p>
          <pre>{JSON.stringify(process.env.PUBLIC_DIR_CONTENTS, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');

  const publicDir = path.join(process.cwd(), 'public');
  const contents = fs.readdirSync(publicDir, { withFileTypes: true });

  return {
    props: {
      PUBLIC_DIR_CONTENTS: contents.map(dirent => ({
        name: dirent.name,
        isDirectory: dirent.isDirectory()
      }))
    }
  };
}