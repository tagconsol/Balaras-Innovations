
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Handheld Meters & Sensors",
    description: "Portable precision for on-site water quality analysis.",
    className: "bg-white",
    titleClass: "text-neutral-800",
    descriptionClass: "text-neutral-500",
  },
  {
    title: "Multiparameter Sondes",
    description: "Advanced probes for comprehensive water profiling.",
    className: "bg-neutral-900",
    titleClass: "text-white",
    descriptionClass: "text-neutral-400",
  },
  {
    title: "Automatic Water Samplers",
    description: "Reliable automated sampling for compliance and research.",
    className: "bg-[#4aa1e0]",
    titleClass: "text-white",
    descriptionClass: "text-blue-50",
  },
  {
    title: "Online / Process Monitors",
    description: "Continuous monitoring for industrial and municipal water.",
    className: "bg-neutral-100",
    titleClass: "text-neutral-800",
    descriptionClass: "text-neutral-500",
  },
];

export default function Services() {
  const image = PlaceHolderImages.find((p) => p.id === 'services-grid');

  return (
    <section id="services" className="py-20 sm:py-32 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Visual */}
          <div className="relative min-h-[480px] lg:min-h-full rounded-sm overflow-hidden shadow-sm border border-neutral-100 group">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700" />
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={cn(
                  "p-10 rounded-sm flex flex-col justify-center transition-all duration-300 border border-transparent hover:shadow-2xl hover:-translate-y-1",
                  service.className,
                  index === 0 ? "sm:col-span-3" : 
                  index === 1 ? "sm:col-span-2" :
                  index === 2 ? "sm:col-span-2" : "sm:col-span-3"
                )}
              >
                <h3 className={cn(
                  "text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-3",
                  service.titleClass
                )}>
                  {service.title}
                </h3>
                <p className={cn(
                  "text-lg leading-relaxed",
                  service.descriptionClass
                )}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

    