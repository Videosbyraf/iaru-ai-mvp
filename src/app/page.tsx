'use client';
import Image from 'next/image';
import LoginWithGoogle from '@/components/LoginWithGoogle';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-black text-center">
      <Image
        src="/logo.png"
        alt="IARU Logo"
        width={100}
        height={100}
        className="mb-6"
        priority
      />
      <h1 className="text-3xl font-bold mb-4">Welcome to IARU.AI</h1>
      <p className="text-lg mb-6">Get your free AI-powered estimate</p>
      <LoginWithGoogle />
    </main>
  );
}
