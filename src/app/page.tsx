'use client';
import Image from 'next/image';

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
        <button className="font-mono bg-white text-black border border-black px-6 py-2">
          Sign Up
        </button>
      </div>

      {/* If LoginWithGoogle is the actual sign-up component, use styling there instead */}
      {/* <LoginWithGoogle /> */}
    </main>
  );
}
