'use client';

import { Github, Linkedin, Mail, Twitter, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Footer() {
  const [textColors, setTextColors] = useState([
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-purple-500',
    'text-pink-500',
  ]);
  const [imageRotation, setImageRotation] = useState(0);
  const [profileGlow, setProfileGlow] = useState(0);
  const [contributorScales, setContributorScales] = useState([1, 1, 1]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setTextColors((prevColors) => [...prevColors.slice(1), prevColors[0]]);
    }, 2000);

    const rotationInterval = setInterval(() => {
      setImageRotation((prev) => (prev + 5) % 360);
    }, 100);

    const glowInterval = setInterval(() => {
      setProfileGlow((prev) => (prev + 1) % 6);
    }, 1000);

    const scaleInterval = setInterval(() => {
      setContributorScales((prev) => [
        1 + Math.sin(Date.now() / 1000) * 0.2,
        1 + Math.sin(Date.now() / 800) * 0.2,
        1 + Math.sin(Date.now() / 600) * 0.2,
      ]);
    }, 50);

    return () => {
      clearInterval(colorInterval);
      clearInterval(rotationInterval);
      clearInterval(glowInterval);
      clearInterval(scaleInterval);
    };
  }, []);

  const glowColors = [
    'from-blue-400 via-green-400 to-purple-400',
    'from-red-400 via-yellow-400 to-green-400',
    'from-pink-400 via-purple-400 to-indigo-400',
    'from-yellow-400 via-red-400 to-pink-400',
    'from-green-400 via-blue-400 to-indigo-400',
    'from-purple-400 via-pink-400 to-red-400',
  ];

  return (
    <footer className="w-full border-t bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">

          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/mathewleland',
                  color: 'text-purple-500',
                },
                {
                  icon: Linkedin,
                  href: 'https://linkedin.com/in/mathewleland',
                  color: 'text-blue-500',
                },
                {
                  icon: Mail,
                  href: 'mailto:mathewhleland@gmail.com',
                  color: 'text-red-500',
                },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`group transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${social.color} hover:bg-${social.color}/10`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative"
                  >
                    <social.icon
                      className={`h-5 w-5 transition-all duration-300 ${social.color}`}
                    />
                    <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping bg-current"></span>
                    <span className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-current blur-sm"></span>
                  </a>
                </Button>
              ))}
            </div>

          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </footer>
  );
}
