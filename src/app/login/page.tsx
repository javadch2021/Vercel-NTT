'use client';
import { PhoneInput } from "@/components/forms/PhoneInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { isValidIranianMobile, formatPhoneForAPI } from "@/lib/utils";
import type { User } from "@/types";

export default function LoginPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidIranianMobile(phoneNumber)) {
      setError("Please enter a valid Iranian mobile number (e.g., 09123456789)");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const formattedPhone = formatPhoneForAPI(phoneNumber);

      // Fetch user data from randomuser.me
      const response = await fetch(
        `https://randomuser.me/api/?results=1&nat=us`
      );

      if (!response.ok) throw new Error("Failed to fetch user");

      const data = await response.json();
      const user = data.results[0];

      // Save user data to localStorage
      const userData: User = {
        phoneNumber: formattedPhone,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        picture: user.picture.large,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <h1 className="text-2xl font-bold text-center ">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Mobile Number (Iran format)
            </label>
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <Button
            type="submit"
            disabled={loading || !isValidIranianMobile(phoneNumber)}
            className="w-full cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
