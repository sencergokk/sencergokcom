'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_ITEMS } from '@/lib/constants';
import { ThemeSwitcher } from '../common/ThemeSwitcher';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transition-all">
              <span className="text-white font-black text-xl lg:text-2xl transition-all">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-800 dark:text-white hidden sm:inline-block">
              {COMPANY_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Theme Switcher - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold cursor-pointer"
              >
                İletişime Geç
              </Button>
            </Link>
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white dark:bg-slate-950/95 backdrop-blur-xl border-l border-gray-200 dark:border-white/10 text-gray-800 dark:text-white p-0">
              <SheetHeader className="p-6 border-b border-gray-200 dark:border-white/10">
                <SheetTitle className="flex items-center space-x-2 text-gray-800 dark:text-white">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span>Menü</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-2 p-6">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left text-lg text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium p-3 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-8 flex items-center justify-between">
                  <Link href="/contact" className="w-full">
                    <Button
                      onClick={() => setIsMenuOpen(false)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full py-4 text-base rounded-xl cursor-pointer"
                    >
                      İletişime Geç
                    </Button>
                  </Link>
                  <ThemeSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 