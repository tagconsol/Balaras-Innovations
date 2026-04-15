'use client';

import { useState } from 'react';
import { Waves, Droplets, FlaskConical } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from '@/lib/utils';

const solutions = [
  {
    id: "environmental",
    title: "Environmental Analysis",
    description: "Monitoring water quality in natural ecosystems, lakes, and rivers with precision field equipment.",
    icon: Waves,
    imageId: "environmental-analysis"
  },
  {
    id: "industrial",
    title: "Industrial & Process",
    description: "Optimizing industrial water treatment and manufacturing processes with continuous online monitors.",
    icon: Droplets,
    imageId: "fintech"
  },
  {
    id: "laboratory",
    title: "Lab & Research",
    description: "Equipping high-end laboratories with professional-grade reagents, test kits, and analytical tools.",
    icon: FlaskConical,
    imageId: "laboratory-research"
  },
];

export default function DomainSolutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id);
  const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);
  
  return (
    <section id="solutions" className="py-20 sm:py-32 bg-[#f3f4f6] text-neutral-900">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-neutral-800">
            Sectors We Serve
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Providing specialized water testing solutions tailored to the unique demands of every sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div className="flex flex-col gap-6">
                {solutions.map((solution) => {
                    const Icon = solution.icon;
                    const isActive = activeSolution === solution.id;
                    return (
                        <div 
                            key={solution.id}
                            onMouseEnter={() => setActiveSolution(solution.id)}
                            onClick={() => setActiveSolution(solution.id)}
                            className={cn(
                                "p-8 rounded-sm border transition-all duration-300 group cursor-pointer",
                                isActive 
                                    ? "bg-white border-primary shadow-xl shadow-primary/5" 
                                    : "bg-white/40 border-neutral-200 hover:bg-white hover:border-neutral-300"
                            )}
                        >
                            <div className="flex items-center gap-5">
                                <div className={cn(
                                    "p-3 rounded-sm transition-all duration-300", 
                                    isActive ? "bg-primary text-white scale-110" : "bg-neutral-100 text-neutral-400 group-hover:text-primary"
                                )}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className={cn("text-xl font-extrabold tracking-tight transition-colors", isActive ? "text-neutral-900" : "text-neutral-700")}>
                                    {solution.title}
                                </h3>
                            </div>
                            <p className="mt-4 text-neutral-600 pl-16 leading-relaxed">
                                {solution.description}
                            </p>
                        </div>
                    );
                })}
            </div>

             <div className="relative min-h-[500px] lg:min-h-[600px] rounded-sm overflow-hidden order-first lg:order-last border border-neutral-200 shadow-sm">
                {solutions.map(solution => {
                    const image = getImage(solution.imageId);
                    return image && (
                        <div
                            key={solution.id}
                            className={cn(
                                "absolute inset-0 transition-all duration-700 ease-in-out",
                                activeSolution === solution.id ? "opacity-100 scale-100" : "opacity-0 scale-105"
                            )}
                        >
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover"
                                data-ai-hint={image.imageHint}
                                sizes="(max-width: 1023px) 100vw, 50vw"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </section>
  );
}
