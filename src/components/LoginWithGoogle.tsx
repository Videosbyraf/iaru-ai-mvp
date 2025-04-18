'use client';

import { supabase } from '@/lib/supabaseClient';

export default function LoginWithGoogle() {
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin, // make sure this is allowed in Supabase
        },
      });

      console.log('Login data:', data);
      if (error) {
        console.error('Login error:', error.message);
        alert('Login failed: ' + error.message);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="mt-1">
      <button
  onClick={handleLogin}
  className="font-mono bg-white text-black border border-black px-6 py-2 transition-colors duration-200 hover:bg-black hover:text-white"
>
  SIGN UP FOR YOUR FREE AI VIDEO ESTIMATE
</button>
    </div>
  );
}
