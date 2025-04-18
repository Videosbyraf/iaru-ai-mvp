'use client';

import { supabase } from '@/lib/supabaseClient';

export default function LoginWithGoogle() {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="mt-1">
      <button
        onClick={handleLogin}
        className="font-mono bg-white text-black border border-black px-6 py-2"
      >
        Sign Up
      </button>
    </div>
  );
}
