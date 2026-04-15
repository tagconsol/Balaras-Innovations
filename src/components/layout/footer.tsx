"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="md:col-span-1">
             <div className="flex items-center mb-4">
              <Link href="/">
                <Image 
                  src="/logo2.png" 
                  alt="Balaras Technologies Logo" 
                  width={400} 
                  height={120} 
                  className="h-20 w-auto object-contain"
                  suppressHydrationWarning
                />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Pioneering Technological Innovation for a cleaner, safer world.
            </p>
          </div>
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
             <div>
              <h3 className="font-semibold text-foreground">Explore</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/supply" className="text-muted-foreground hover:text-foreground">Supply</Link></li>
                <li><Link href="/solutions" className="text-muted-foreground hover:text-foreground">Solutions</Link></li>
                <li><Link href="/#our-approach" className="text-muted-foreground hover:text-foreground">Our Approach</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="/#consultation" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Connect</h3>
              <ul className="mt-4 space-y-3 text-sm">
                 <li><Link href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Twitter</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 border-t">
           <p className="text-sm text-muted-foreground text-center" suppressHydrationWarning>
              © {year ?? '2025'} Balaras Innovations. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
