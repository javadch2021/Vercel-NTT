import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isValidIranianMobile = (phone: string): boolean => {
  const cleaned = phone.replace(/[^0-9]/g, '');
  const regex = /^(\+98|98|0)?9[0-9]{9}$/;
  return regex.test(cleaned);
};

export const formatPhoneForAPI = (phone: string): string => {
  const cleaned = phone.replace(/[^0-9]/g, '');

  // Format as +98XXXXXXXXXX
  if (cleaned.startsWith('0')) {
    return '+98' + cleaned.substring(1);
  }

  return cleaned;
};
