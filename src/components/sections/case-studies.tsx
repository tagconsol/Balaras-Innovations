import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CaseStudies() {
  const image = PlaceHolderImages.find(p => p.id === 'innovation-banner');

  return (
    <section id="our-approach" className="relative w-full bg-white overflow-hidden border-t border-neutral-100">
      <div className="container mx-auto max-w-screen-2xl px-0 lg:px-4">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[450px] lg:min-h-[550px]">
          {/* Right Content (Flipped for variety) */}
          <div className="flex flex-col justify-center p-8 lg:p-16 xl:p-24 z-10 bg-white order-last lg:order-first">
             <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-800 leading-tight">
              <span className="font-light block">Innovative Strategies</span>
              <span className="font-extrabold block">Exceptional Service</span>
            </h2>
            <p className="mt-6 text-neutral-500 text-lg max-w-prose">
              Our approach integrates cutting-edge technology with deep industry expertise. We pride ourselves on our commitment to customer satisfaction and operational excellence, providing tailored solutions to drive your success.
            </p>
          </div>

          {/* Left Image - No overlays as requested */}
          <div className="relative h-[400px] lg:h-auto order-first lg:order-last">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
