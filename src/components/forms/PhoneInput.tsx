'use client';

import { Input } from "@/components/ui/input";
import { isValidIranianMobile } from "@/lib/utils";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function PhoneInput({ value, onChange, error }: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleaned = inputValue.replace(/[^0-9+\s()-]/g, '');
    onChange(cleaned);
  };

  const isInvalid = value.length > 0 && !isValidIranianMobile(value);
  const isValid = value.length > 0 && isValidIranianMobile(value);

  return (
    <div className="space-y-2">
      <Input
        type="tel"
        placeholder="09123456789"
        value={value}
        onChange={handleChange}
        className={`
          ${isInvalid ? 'border-red-500 focus-visible:ring-red-500' : ''}
          ${isValid ? 'border-green-500 focus-visible:ring-green-500' : ''}
          transition-colors duration-200
        `}
      />
      {isInvalid && (
        <p className="text-sm text-red-500">
          Please enter a valid Iranian mobile number
        </p>
      )}
      {isValid && (
        <p className="text-sm text-green-500">
          ✓ Valid mobile number
        </p>
      )}
    </div>
  );
}
