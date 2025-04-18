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
    <div className="text-center mt-10">
      <button
        onClick={handleLogin}
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
      >
        Sign up with Google to get your free estimate
      </button>
    </div>
  );
}
