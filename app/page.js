import Image from 'next/image';
import BookingForm from './components/BookingForm';
import { readdir } from 'fs/promises';
import path from 'path';

export default async function Home() {
  const publicDirContents = await getPublicDirContents();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Rural Portuguese Cabin Retreat
        </h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/portugal.png"
            alt="Scenic view of our retreat in Portugal"
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
          <p>Image path: /portugal.png</p>
          <p>Public directory contents:</p>
          <pre>{JSON.stringify(publicDirContents, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

async function getPublicDirContents() {
  const publicDir = path.join(process.cwd(), 'public');
  try {
    const contents = await readdir(publicDir, { withFileTypes: true });
    return contents.map(dirent => ({
      name: dirent.name,
      isDirectory: dirent.isDirectory()
    }));
  } catch (error) {
    console.error('Error reading public directory:', error);
    return [];
  }
}