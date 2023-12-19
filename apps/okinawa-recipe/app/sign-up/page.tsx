'use client';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Sign up for an account</h1>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          placeholder="soba@okinawa.com"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="label">
          <span className="label-text">Username</span>
        </div>
        <input
          type="text"
          placeholder="sobalover123"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="password"
          placeholder="very-secret-password"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </div>
  );
}
