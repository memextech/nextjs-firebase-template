'use client';

import { useAuth } from './context/AuthContext';
import Hero from './components/Hero';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { AdminProtected } from './components/AdminProtected';

export default function Page() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <AdminProtected>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
      </div>
    </AdminProtected>
  );
}