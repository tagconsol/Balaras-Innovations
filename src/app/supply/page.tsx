import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Beaker, Droplet, TestTube, Zap, Shield, Radio, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";

const supplyCategories = [
  {
    id: "glassware",
    title: "Life Science / Glassware",
    description: "Precision-engineered laboratory glassware for critical analysis and research applications.",
    icon: Beaker,
    imageId: "glassware-category",
    items: [
      "Adapters", "Beakers", "Bottles", "Burettes", "Columns", "Condensers", 
      "Crucibles", "Dessicators", "Dishes", "Distillations", "Flasks", 
      "Glass Hydrometer", "Joints", "Pipettes", "Reagent Bottles", "Tubes", "Volumetric Flask"
    ]
  },
  {
    id: "plastics",
    title: "Life Science / Plastics & Media",
    description: "High-quality plastic consumables and culture media for biological and chemical laboratories.",
    icon: TestTube,
    imageId: "plastics-category",
    items: [
      "Cell Culture", "Cryogenic", "Cryogenic Boxes", "CryoKing Combo", 
      "Drosophila", "Freezer Racks", "Instruments", "Liquid", 
      "Microbiology", "Reagent", "Sample"
    ]
  },
  {
    id: "watertreatment",
    title: "Life Science / Water Treatment",
    description: "Comprehensive solutions for industrial, municipal, and laboratory water purification.",
    icon: Droplet,
    imageId: "watertreatment-category",
    items: [
      "Coagulants & Flocculants", 
      "pH Management & Descaling", 
      "Disinfection & Conditioning", 
      "Right Purity Grade"
    ]
  }
];

const mepSections = [
  {
    title: "Electrical Engineering",
    description: "Robust power systems and lighting design for mission-critical facilities.",
    icon: Zap,
    accent: "border-yellow-400",
    bg: "bg-yellow-400/10",
    text: "text-yellow-600",
    items: ["Power Distribution", "Lighting Systems", "Earthing & Protection", "UPS & Power Backup"]
  },
  {
    title: "Life Safety & Security",
    description: "Comprehensive fire detection and surveillance for ultimate infrastructure protection.",
    icon: Shield,
    accent: "border-red-500",
    bg: "bg-red-500/10",
    text: "text-red-600",
    items: ["Fire Alarm Systems", "Fire Fighting", "Smoke Management", "Access Control & CCTV"]
  },
  {
    title: "Communication Systems",
    description: "Scalable data and voice infrastructure for seamless enterprise connectivity.",
    icon: Radio,
    accent: "border-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-600",
    items: ["Data & Voice Systems", "Public Address", "PABX Infrastructure", "Structured Cabling"]
  },
  {
    title: "Public Health Engineering",
    description: "Efficient water and drainage systems designed for sustainability and health.",
    icon: Droplet,
    accent: "border-cyan-500",
    bg: "bg-cyan-500/10",
    text: "text-cyan-600",
    items: ["Water Supply", "Drainage & Sewerage", "Storm Water", "Solar Water Heating"]
  }
];

export default function SupplyPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'supply-hero');
  const mepImage = PlaceHolderImages.find(p => p.id === 'mep-category');

  return (
    <div className="pt-20 bg-neutral-50 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[500px] flex items-center justify-center bg-neutral-900 overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-40 scale-105"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Professional Equipment & Supplies
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight animate-hero-text-1">
            Global Supply <br/><span className="text-primary">Ecosystem</span>
          </h1>
          <p className="mt-8 text-xl text-neutral-300 max-w-2xl mx-auto font-medium animate-hero-text-2">
            Engineering excellence delivered through high-precision laboratory tools and industrial infrastructure solutions.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-neutral-900/80" />
      </section>

      {/* Life Science Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-screen-2xl">
           <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-neutral-900 mb-4">Life Science Solutions</h2>
            <p className="text-lg text-neutral-500">Premium laboratory consumables and water treatment technology for research and industry.</p>
          </div>

          <div className="grid gap-24 lg:gap-32">
            {supplyCategories.map((category, index) => (
              <div 
                key={category.id} 
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content Column */}
                <div className={cn(
                  "space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both",
                  index % 2 !== 0 ? 'lg:order-last' : 'lg:order-first'
                )}>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold tracking-wider uppercase text-xs">
                    <category.icon className="h-4 w-4" />
                    {category.id}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
                    {category.title}
                  </h2>
                  <p className="text-lg text-neutral-500 leading-relaxed max-w-prose">
                    {category.description}
                  </p>
                  
                  {/* Item Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.items.map((item, i) => (
                      <div 
                        key={item} 
                        className="flex items-center gap-2.5 p-3.5 bg-white rounded-sm border border-neutral-100 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md group"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 transition-transform group-hover:scale-110" />
                        <span className="text-sm font-bold text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Column */}
                <div className="relative h-[450px] lg:h-[550px] rounded-sm overflow-hidden shadow-2xl group animate-in zoom-in-95 duration-1000">
                  {PlaceHolderImages.find(p => p.id === category.imageId) && (
                    <Image
                      src={PlaceHolderImages.find(p => p.id === category.imageId)!.imageUrl}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint={PlaceHolderImages.find(p => p.id === category.imageId)!.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEP Engineering Section */}
      <section className="py-24 bg-white text-neutral-900 relative overflow-hidden border-t border-neutral-100">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 max-w-screen-2xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <HardHat className="h-4 w-4" />
                        Engineering Infrastructure
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-8">
                        MEP <span className="text-primary">Engineering</span> <br/>Solutions
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-xl leading-relaxed font-medium">
                        Setting the gold standard in Mechanical, Electrical, and Plumbing systems. We deliver integrated engineering solutions that power the modern world with precision and reliability.
                    </p>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-100">
                         {mepImage && (
                            <Image
                                src={mepImage.imageUrl}
                                alt={mepImage.description}
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-110"
                                data-ai-hint={mepImage.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mepSections.map((section, idx) => (
                    <div 
                        key={section.title} 
                        className={cn(
                            "group relative p-8 bg-neutral-50 border border-neutral-200 rounded-2xl transition-all duration-500 hover:bg-white hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8",
                        )}
                        style={{ animationDelay: `${idx * 150}ms` }}
                    >
                        <div className={cn("p-4 rounded-xl inline-flex mb-6 transition-colors", section.bg)}>
                            <section.icon className={cn("h-8 w-8", section.text)} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-neutral-800">{section.title}</h3>
                        <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
                            {section.description}
                        </p>
                        <ul className="space-y-3 border-t border-neutral-100 pt-6">
                            {section.items.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-neutral-600 font-medium group/item hover:text-primary transition-colors">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary/60 group-hover/item:scale-150 group-hover/item:bg-primary transition-all" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}