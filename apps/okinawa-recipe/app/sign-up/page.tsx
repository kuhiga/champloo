'use client';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
type FormData = {
  email: string;
  username: string;
  password: string;
};
export default function SignUp() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    username: '',
    password: '',
  });
  const createUser = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('users')
        .insert({ id: userId, username: formData.username });
      if (error) throw error;
    } catch (e) {
      throw new Error('Error creating user ' + e);
    }
  };
  const handleSignUp = async () => {
    if (
      formData.username !== '' &&
      formData.email !== '' &&
      formData.password !== ''
    ) {
      const { error, data } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (error) throw new Error(`Error signing up ${error}`);
      const userId = data.user?.id;
      if (userId) {
        createUser(userId);
      }
      router.refresh();
      setFormData({ email: '', password: '', username: '' });
    }
  };
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
            value={formData?.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Username
        </label>
        <div className="mt-5">
          <input
            type="text"
            name="username"
            id="username"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="sobalover123"
            value={formData?.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="mt-2">
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="secretlylovesgoya123"
            value={formData?.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSignUp}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
