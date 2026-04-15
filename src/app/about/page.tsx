import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Target, Eye, ShieldCheck, Users2 } from "lucide-react";

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const secondaryImage = PlaceHolderImages.find(p => p.id === 'innovation-banner');

  const values = [
    {
      title: "Quality Excellence",
      description: "We never compromise on the precision and reliability of our testing equipment and reagents.",
      icon: ShieldCheck
    },
    {
      title: "Customer Centric",
      description: "Our solutions are tailored to the specific operational needs of our diverse clientele.",
      icon: Users2
    },
    {
      title: "Continuous Innovation",
      description: "We stay ahead of industry trends to provide the most advanced monitoring technologies.",
      icon: Target
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-neutral-900">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-80"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Our Story & Mission</h1>
          <p className="mt-6 text-xl text-neutral-200 max-w-2xl mx-auto">
            Pioneering technological innovation in water testing with a focus on precision and excellence.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-6">Expertise Driven by Research</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Balaras Technologies is a team of dedicated professionals driven by intensive field research and practical application. Our journey is fueled by a focus on specialized analysis in sectors ranging from Coal and Minerals to Biotechnology and Medicine.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Today, we are a forward-thinking manufacturer and supplier of water testing equipment, chemicals, and reagents, serving environmental, industrial, and educational sectors globally.
              </p>
              <ul className="space-y-4">
                {[
                  "Global standards of precision",
                  "Expert technical consultation",
                  "Comprehensive after-sales support",
                  "Sustainable and efficient solutions"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-700 font-medium">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              {secondaryImage && (
                <Image
                  src={secondaryImage.imageUrl}
                  alt={secondaryImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={secondaryImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-sm shadow-sm border border-neutral-100">
              <div className="inline-flex p-4 bg-primary/10 rounded-sm mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To empower industries and environmental researchers with the most reliable water analysis tools, ensuring safe water and sustainable operations through technological excellence and superior service.
              </p>
            </div>
            <div className="bg-white p-12 rounded-sm shadow-sm border border-neutral-100">
              <div className="inline-flex p-4 bg-primary/10 rounded-sm mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To be the global benchmark for innovation in water quality monitoring, recognized for our commitment to precision, environmental stewardship, and customer-focused technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center">
                <div className="mb-6 p-6 bg-secondary rounded-full">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}