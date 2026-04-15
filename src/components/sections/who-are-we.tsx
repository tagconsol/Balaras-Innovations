'use client';

export default function WhoAreWe() {
  return (
    <section className="py-16 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Label with Vertical Line */}
          <div className="flex items-center gap-6 shrink-0 min-w-[200px] justify-center md:justify-end">
            <h2 className="text-2xl font-medium tracking-widest text-neutral-700 text-right">
              WHO ARE <br />
              <span className="font-black text-3xl">WE?</span>
            </h2>
            <div className="hidden md:block w-1.5 h-24 bg-[#4aa1e0]" />
          </div>

          {/* Description */}
          <div className="flex-1">
            <p className="text-neutral-500 leading-relaxed text-base md:text-lg">
              We are a team of specialized professionals with extensive expertise in Coal, Mineral, Material, Water Analysis, Environmental Analysis, Medical, Biotechnology, Laboratory and Educational Sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
