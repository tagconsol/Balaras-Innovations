
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/supply', label: 'Supply' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true); 
      } else {
        setIsHidden(false); 
      }
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled || !isHomePage 
        ? "bg-white/95 backdrop-blur-md border-b shadow-sm" 
        : "bg-transparent",
      isHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
    )}>
      <div className="container flex h-24 items-center justify-between max-w-screen-2xl px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/logo1.png" 
            alt="Balaras Technologies Logo" 
            width={420} 
            height={100} 
            className="h-20 w-auto object-contain"
            priority
            suppressHydrationWarning
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors duration-200",
                pathname === link.href 
                  ? "text-primary font-bold" 
                  : (isScrolled || !isHomePage ? "text-neutral-600 hover:text-primary" : "text-neutral-800 hover:text-primary")
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button 
            asChild 
            variant="default"
            className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-sm px-6"
            suppressHydrationWarning
          >
            <Link href="/#consultation">Contact Us</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-800" suppressHydrationWarning>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background p-0">
                <div className="flex h-full flex-col">
                  <div className="flex items-center p-6 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                      <Image 
                        src="/logo1.png" 
                        alt="Balaras Technologies Logo" 
                        width={350} 
                        height={120} 
                        className="h-12 w-auto object-contain"
                      />
                    </Link>
                  </div>
                  <nav className="flex-grow p-6">
                      <div className="flex flex-col space-y-6">
                          {navLinks.map((link) => (
                          <Link
                              key={link.href}
                              href={link.href}
                              className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                              onClick={() => setIsMenuOpen(false)}
                          >
                              {link.label}
                          </Link>
                          ))}
                      </div>
                  </nav>
                  <div className="border-t p-6">
                      <Button asChild className="w-full text-lg" suppressHydrationWarning>
                      <Link href="/#consultation" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                      </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
