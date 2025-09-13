'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GlassNotification } from "@/components/ui/GlassNotification";
import type { User } from "@/types";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [showLogoutNotification, setShowLogoutNotification] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const handleLogout = () => {
    setShowLogoutNotification(true);

    // Delay actual logout to show notification
    setTimeout(() => {
      localStorage.removeItem("user");
      router.push("/login");
    }, 2000);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <img
            src={user.picture}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
        <p className="text-center text-lg">
          Welcome, <span className="font-semibold">{user.name}</span>!
        </p>
        <p className="text-center text-sm text-gray-600">
          Email: {user.email}
        </p>
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full mt-4 cursor-pointer"
        >
          Logout
        </Button>
      </div>

      {showLogoutNotification && (
        <GlassNotification
          title="Logging Out"
          description="Please wait while we log you out..."
          color="red"
          duration={2000}
          onClose={() => setShowLogoutNotification(false)}
        />
      )}
    </div>
  );
}
