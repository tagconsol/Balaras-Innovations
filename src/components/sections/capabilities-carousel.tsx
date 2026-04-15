'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const slideContent = [
  {
    id: "hero-carousel-1",
    title: "Water Quality Solutions",
    subtitle: "We supply comprehensive water quality testing equipment including handheld meters, multiparameter sondes, CTDs, and automatic water samplers.",
    link: "/#services"
  },
  {
    id: "hero-carousel-2",
    title: "Laboratory Accessories",
    subtitle: "Our precision laboratory equipment encompasses desiccators, hotplates, micropipettes, pipetting aids, circulating baths, and weighing balances.",
    link: "/#solutions"
  },
  {
    id: "hero-carousel-3",
    title: "Laboratory Consumables",
    subtitle: "Premium wholesale laboratory consumables. High-quality, precisely manufactured plastic consumables with fast and reliable delivery.",
    link: "/#about-us"
  },
];

const slides = slideContent.map(content => {
    const image = PlaceHolderImages.find(p => p.id === content.id);
    return {
        ...content,
        imageUrl: image?.imageUrl || '',
        imageDescription: image?.description || '',
        imageHint: image?.imageHint || '',
    };
});

export default function CapabilitiesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="relative z-10 lg:pr-4">
                <div className="relative min-h-[200px] flex flex-col justify-center">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={cn(
                            'transition-all duration-700 ease-in-out',
                            index === currentSlide 
                              ? 'opacity-100 translate-y-0 pointer-events-auto' 
                              : 'opacity-0 translate-y-4 absolute top-0 left-0 w-full pointer-events-none'
                            )}
                        >
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-800 leading-tight">
                                {slide.title}
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[480px]">
                                {slide.subtitle}
                            </p>
                            <div className="mt-8">
                                <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-6">
                                    <Link href={slide.link}>
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots - Positioned below text for better flow */}
                <div className="mt-8 flex space-x-2">
                    {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                        'w-2 h-2 rounded-full transition-all duration-300',
                        index === currentSlide ? 'w-8 bg-primary' : 'bg-neutral-300 hover:bg-neutral-400'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                        suppressHydrationWarning
                    />
                    ))}
                </div>
            </div>
            
            {/* Image */}
            <div className="relative h-80 lg:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-border/40">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={cn(
                            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        )}
                    >
                        {slide.imageUrl && (
                            <Image
                                src={slide.imageUrl}
                                alt={slide.imageDescription}
                                fill
                                className="object-cover"
                                data-ai-hint={slide.imageHint}
                                sizes="(max-width: 1023px) 100vw, 50vw"
                                priority={index === 0}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
