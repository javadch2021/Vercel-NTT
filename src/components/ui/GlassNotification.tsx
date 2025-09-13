'use client';

import { useState, useEffect } from 'react';

interface GlassNotificationProps {
  title: string;
  description?: string;
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'purple';
  duration?: number;
  onClose?: () => void;
}

export function GlassNotification({
  title,
  description,
  color = 'blue',
  duration = 3000,
  onClose,
}: GlassNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Trigger fade-in animation
    setTimeout(() => setIsVisible(true), 10);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
        if (onClose) onClose();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);
  const colorClasses = {
    red: 'bg-red-300/30 border-red-400/50 text-red-100',
    green: 'bg-green-300/30 border-green-400/50 text-green-100',
    blue: 'bg-blue-300/30 border-blue-400/50 text-blue-100',
    yellow: 'bg-yellow-300/30 border-yellow-400/50 text-yellow-100',
    purple: 'bg-purple-300/30 border-purple-400/50 text-purple-100',
  };

  const textClasses = {
    red: 'text-red-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    yellow: 'text-yellow-500',
    purple: 'text-purple-500',
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed top-4 left-4 z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <div className={`
  backdrop-blur-md border rounded-lg p-4 shadow-xl
  ${colorClasses[color]}
  min-w-[300px] max-w-sm
  transition-all duration-300 ease-out
  ${isVisible
            ? 'opacity-100 translate-x-0 translate-y-0'
            : 'opacity-0 -translate-x-4 translate-y-0'
          }
`}>
          <div className="flex items-start space-x-3">
            <div className="flex-1">
              <h3 className={`font-semibold text-lg ${textClasses[color]}`}>
                {title}
              </h3>
              {description && (
                <p className={`text-sm opacity-90 mt-1 ${textClasses[color]}`}>
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
