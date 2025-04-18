'use client';
import Image from 'next/image';
import LoginWithGoogle from '@/components/LoginWithGoogle';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-black text-center">
      <Image
        src="/logo.png"
        alt="IARU Logo"
        width={200}
        height={200}
        className="mb-2" // Reduced margin below logo
        priority
      />
      
      <div className="mt-1">
        {/* Use LoginWithGoogle component for Google login */}
        <LoginWithGoogle />
      </div>
    </main>
  );
}
