import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  const image = PlaceHolderImages.find(p => p.id === 'partnership-banner');

  return (
    <section id="about-us" className="relative w-full bg-white overflow-hidden border-t border-neutral-100">
      <div className="container mx-auto max-w-screen-2xl px-0 lg:px-4">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[600px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-8 lg:p-16 xl:p-24 z-10 bg-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-800 leading-tight">
              <span className="font-light block">Your Partner for</span>
              <span className="font-extrabold block">Strategic Innovation</span>
            </h2>
            <p className="mt-6 text-neutral-500 text-lg max-w-prose">
              We go beyond supply. We build long-term partnerships, offering strategic guidance and unwavering technical support to help your business achieve its quality and environmental goals.
            </p>
            <div className="mt-10">
              <Button asChild variant="outline" size="lg" className="rounded-sm border-primary text-primary hover:bg-primary hover:text-white transition-colors" suppressHydrationWarning>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-auto min-h-full bg-neutral-100">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                data-ai-hint={image.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}