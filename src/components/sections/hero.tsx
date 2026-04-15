
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Droplets, Beaker, FlaskConical, Sparkles } from 'lucide-react';

export default function Hero() {
  const image = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <section className="relative w-full bg-white pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/30 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-[20%] left-[20%] w-1 h-20 bg-primary/20 rounded-full hidden lg:block" />
        <div className="absolute top-[40%] left-[15%] w-1 h-10 bg-primary/10 rounded-full hidden lg:block" />
      </div>

      <div className="container mx-auto max-w-screen-2xl px-0 lg:px-4 relative">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[700px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-8 lg:p-16 xl:p-24 z-10 relative">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 bg-primary/10 border border-primary/20 rounded-full w-fit animate-in fade-in slide-in-from-left-4 duration-700">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary">
                Pioneering Water Testing Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl text-neutral-800 leading-[1.1] tracking-tight">
              <span className="font-light block opacity-90">Precision Water</span>
              <span className="font-extrabold block text-primary lg:text-neutral-800">Testing Equipment</span>
            </h1>
            
            <p className="mt-8 text-neutral-500 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
            A trusted manufacturer and supplier of high-precision water testing equipment, chemicals, and reagents.            </p>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#4aa1e0] hover:bg-[#3d8bc4] text-white rounded-sm px-10 h-14 uppercase tracking-widest font-bold text-xs transition-all hover:shadow-xl hover:-translate-y-1">
                <Link href="/#services">
                  Read More
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-sm px-10 h-14 uppercase tracking-widest font-bold text-xs border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-all">
                <Link href="/solutions">
                  Our Solutions
                </Link>
              </Button>
            </div>

            {/* Floating Decorative Icons for Content Area */}
            <div className="absolute top-1/4 right-0 opacity-10 animate-float-1 hidden xl:block">
              <Droplets className="h-20 w-20 text-primary" />
            </div>
            <div className="absolute bottom-1/4 left-10 opacity-10 animate-float-2 hidden xl:block">
              <FlaskConical className="h-16 w-16 text-primary" />
            </div>
          </div>

          {/* Right Image with Enhanced UI */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            {image && (
              <div className="relative w-full h-full group">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                  priority
                />
                
                {/* Technical Overlay Elements */}
                <div className="absolute top-10 right-10 p-4 bg-white/80 backdrop-blur-md border border-white/40 rounded-sm shadow-2xl hidden lg:block animate-in zoom-in-95 duration-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-full">
                      <Beaker className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-neutral-400">Analysis Grade</span>
                      <span className="text-sm font-black text-neutral-800 uppercase">Pro-Series 2025</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 p-4 bg-primary/90 backdrop-blur-md border border-primary/20 rounded-sm shadow-2xl hidden lg:block animate-in slide-in-from-bottom-4 duration-700">
                   <div className="text-white">
                      <div className="text-2xl font-black">100%</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">Precision Compliance</div>
                   </div>
                </div>
              </div>
            )}
            
            {/* The white-to-transparent gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent hidden lg:block pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
