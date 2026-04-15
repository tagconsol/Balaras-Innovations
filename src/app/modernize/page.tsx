import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const jobOpenings = [
    {
        title: "Senior Software Engineer (Backend)",
        location: "New York, USA",
        department: "Engineering",
    },
    {
        title: "Lead Product Designer (UX/UI)",
        location: "London, UK",
        department: "Design",
    },
    {
        title: "AI/ML Research Scientist",
        location: "Singapore",
        department: "Research & Development",
    },
    {
        title: "DevOps Engineer",
        location: "Remote",
        department: "Infrastructure",
    }
];

export default function CareersPage() {
    const image = PlaceHolderImages.find(p => p.id === 'careers-hero');
    
    return (
        <div>
            <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center text-center bg-secondary">
                 {image && (
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative container mx-auto px-4 text-white">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        Shape the Future With Us
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-200">
                        We're looking for passionate innovators to join our mission. Explore our open roles and find your purpose at Balaras Technologies.
                    </p>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Current Openings</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Find your next career opportunity at Balaras Technologies.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 max-w-4xl mx-auto">
                        {jobOpenings.map((job) => (
                            <Card key={job.title} className="bg-card border transition-all duration-300 hover:border-primary/80 hover:shadow-md">
                               <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="h-4 w-4" />
                                                <span>{job.department}</span>
                                            </div>
                                             <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4" />
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button asChild variant="secondary" className="mt-4 sm:mt-0 flex-shrink-0">
                                        <Link href="#">
                                            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                               </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
