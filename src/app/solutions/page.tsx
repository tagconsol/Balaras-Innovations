
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Search, 
  PencilRuler, 
  Cpu, 
  HardDrive, 
  Monitor, 
  Network, 
  Users, 
  Activity,
  CheckCircle2,
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Wrench,
  BookOpen,
  Layout,
  Calculator,
  Truck,
  ShieldAlert,
  Database,
  Scan,
  Target,
  Key,
  BarChart,
  FileText,
  RefreshCcw,
  Shield,
  Map,
  UserPlus,
  Lock,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const avWorkflowSteps = [
  {
    number: "1",
    title: "Requirement Analysis & Needs Assessment",
    icon: Search,
    items: [
      "Detailed understanding of client objectives, venue, and use-cases",
      "Assessment of existing audio-video infrastructure and gaps",
      "Identification of performance, acoustics, and visual quality requirements"
    ]
  },
  {
    number: "2",
    title: "Solution Design & Architecture Planning",
    icon: PencilRuler,
    items: [
      "Design of scalable AV systems (conference rooms, auditoriums, classrooms)",
      "Selection of AV technologies, components, and devices",
      "Integration planning with IT, network, and control systems"
    ]
  },
  {
    number: "3",
    title: "System Specification & Vendor Selection",
    icon: Cpu,
    items: [
      "Finalization of audio video solutions equipment specifications",
      "Evaluation of compatible brands and technologies",
      "Vendor procurement planning and licensing considerations"
    ]
  },
  {
    number: "4",
    title: "Infrastructure Preparation & Pre-Deployment",
    icon: HardDrive,
    items: [
      "Site surveys for cable routing, power, and mounting requirements",
      "Rack, cabling, and network infrastructure readiness",
      "Pre-configuration of AV devices and control systems"
    ]
  },
  {
    number: "5",
    title: "AV System Deployment & Installation",
    icon: Monitor,
    items: [
      "Installation of displays, projectors, screens, and audio systems",
      "Mounting and alignment of cameras, speakers, and microphones",
      "Integration of hardware with control and automation systems"
    ]
  },
  {
    number: "6",
    title: "Integration & Interconnectivity Testing",
    icon: Network,
    items: [
      "Configuration of audio-video devices with streaming platforms",
      "Testing interoperability with video conferencing and recording systems",
      "Calibration of sound, video quality, and system synchronization"
    ]
  },
  {
    number: "7",
    title: "Training, User Acceptance & Optimization",
    icon: Users,
    items: [
      "User training on AV control interfaces and operational workflows",
      "Pilot runs and user acceptance testing (UAT)",
      "Optimization of audio levels, video clarity, and automation"
    ]
  },
  {
    number: "8",
    title: "Go-Live, Monitoring & Managed Support",
    icon: Activity,
    items: [
      "Production rollout and full operationalization of AV systems",
      "Ongoing monitoring, troubleshooting, and preventive maintenance",
      "SLA-based support, upgrades, and continuous improvement"
    ]
  }
];

const fireDetectionOffers = [
  {
    title: "Fire Safety Risk Assessment & Site Survey",
    icon: ShieldCheck,
    color: "bg-emerald-50 border-emerald-200",
    items: [
      "Evaluate building layout, occupancy type, and fire risk zones",
      "Assess compliance requirements as per NBC, NFPA, and local fire norms"
    ]
  },
  {
    title: "Fire Detection Consulting & Solution Design",
    icon: PencilRuler,
    color: "bg-blue-50 border-blue-200",
    items: [
      "Recommend conventional, addressable, or intelligent fire alarm systems",
      "Design solutions tailored for offices, factories, data centers, and warehouses"
    ]
  },
  {
    title: "OEM & Technology Selection Advisory",
    icon: ClipboardCheck,
    color: "bg-slate-50 border-slate-200",
    items: [
      "Guide selection of certified fire detection brands and components",
      "Ensure UL/FM/CE-approved devices for long-term reliability"
    ]
  },
  {
    title: "System Engineering & Layout Planning",
    icon: Layout,
    color: "bg-indigo-50 border-indigo-200",
    items: [
      "Design detector placement, zoning, and loop architecture",
      "Plan integration with PA systems, BMS, HVAC shutdown, and access control"
    ]
  },
  {
    title: "BOQ Preparation & Commercial Optimization",
    icon: Calculator,
    color: "bg-yellow-50 border-yellow-200",
    items: [
      "Prepare detailed BOQ covering panels, detectors, and cabling",
      "Optimize cost without compromising safety or compliance"
    ]
  },
  {
    title: "Supply of Fire Detection Equipment",
    icon: Truck,
    color: "bg-teal-50 border-teal-200",
    items: [
      "Supply genuine fire alarm panels, smoke/heat detectors, and MCPs",
      "Ensure manufacturer warranty and compliance documentation"
    ]
  },
  {
    title: "Professional Installation & Integration",
    icon: Wrench,
    color: "bg-green-100 border-green-300",
    items: [
      "Install devices, panels, cabling, and control units as per drawings",
      "Integrate fire detection with suppression systems and emergency alerts"
    ]
  },
  {
    title: "Testing, Commissioning & Compliance",
    icon: Activity,
    color: "bg-cyan-50 border-cyan-200",
    items: [
      "Conduct functional testing, loop checks, and alarm simulations",
      "Support fire authority inspections and certification approvals"
    ]
  },
  {
    title: "Training, Documentation & AMC Support",
    icon: BookOpen,
    color: "bg-orange-50 border-orange-200",
    items: [
      "Provide user training, as-built drawings, and O&M manuals",
      "Offer AMC, preventive maintenance, and system upgrades"
    ]
  }
];

const cyberSecuritySteps = [
  {
    number: "1",
    title: "Scope Definition & Requirement Analysis",
    icon: ShieldAlert,
    items: [
      "Understanding business objectives, compliance needs, and risk appetite",
      "Defining scope covering networks, applications, servers, and cloud assets",
      "Finalizing testing methodology and engagement rules"
    ]
  },
  {
    number: "2",
    title: "Asset Discovery & Information Gathering",
    icon: Database,
    items: [
      "Mapping licenses to architecture: clusters, domains, and cloud extensions",
      "Alignment of VVF & VCF requirements with modernization goals",
      "Advisory on best-fit editions, SKUs, and subscription models"
    ]
  },
  {
    number: "3",
    title: "Vulnerability Assessment",
    icon: Scan,
    items: [
      "Automated and manual scanning of systems and applications",
      "Identification of known vulnerabilities, misconfigurations, and weaknesses",
      "Risk classification based on severity and exploitability"
    ]
  },
  {
    number: "4",
    title: "Penetration Testing Execution",
    icon: Target,
    items: [
      "Controlled exploitation of identified vulnerabilities",
      "Simulation of real-world attack scenarios",
      "Validation of security control effectiveness"
    ]
  },
  {
    number: "5",
    title: "Privilege Escalation & Lateral Movement",
    icon: Key,
    items: [
      "Testing of access control weaknesses and privilege misuse",
      "Evaluation of lateral movement possibilities within the environment",
      "Assessment of data access and system compromise impact"
    ]
  },
  {
    number: "6",
    title: "Impact Analysis & Risk Evaluation",
    icon: BarChart,
    items: [
      "Analysis of potential business impact of successful attacks",
      "Mapping vulnerabilities to business-critical assets",
      "Risk prioritization for remediation planning"
    ]
  },
  {
    number: "7",
    title: "Reporting & Remediation Guidance",
    icon: FileText,
    items: [
      "Detailed VAPT and security audit reports with findings and evidence",
      "Actionable remediation recommendations and best practices",
      "Executive summary for management and compliance teams"
    ]
  },
  {
    number: "8",
    title: "Re-Testing & Ongoing Support",
    icon: RefreshCcw,
    items: [
      "Verification of remediation effectiveness through re-testing",
      "Support for regulatory and audit compliance requirements",
      "Continuous security advisory and improvement roadmap"
    ]
  }
];

const accessControlOffers = [
  {
    title: "Access Control Consultation & Requirement Analysis",
    icon: ShieldCheck,
    color: "bg-slate-100 border-slate-300",
    items: [
      "Assessment of physical and logical access security requirements",
      "Understanding compliance, audit, and operational needs",
      "Recommendation of appropriate access control technologies"
    ]
  },
  {
    title: "Site Survey & Infrastructure Assessment",
    icon: Map,
    color: "bg-sky-50 border-sky-200",
    items: [
      "Evaluation of entry points, server rooms, and restricted zones",
      "Assessment of network, power, and cabling readiness",
      "Identification of integration and scalability considerations"
    ]
  },
  {
    title: "Access Control System Design & Architecture",
    icon: Layout,
    color: "bg-orange-50 border-orange-200",
    items: [
      "Design of centralized access control architecture",
      "Planning for role-based access, zoning, and policy enforcement",
      "Alignment with security and compliance standards"
    ]
  },
  {
    title: "Authorized Supply of Access Control Solutions",
    icon: Package,
    color: "bg-purple-50 border-purple-200",
    items: [
      "Supply of biometric systems, RFID/card readers, and controllers",
      "Provision of access management software and licenses",
      "OEM-backed warranties and certified products"
    ]
  },
  {
    title: "Professional Installation & System Integration",
    icon: Wrench,
    color: "bg-yellow-50 border-yellow-200",
    items: [
      "Installation of readers, controllers, locks, and sensors",
      "Integration with network, servers, and existing security systems",
      "Secure cabling, mounting, and device labeling"
    ]
  },
  {
    title: "Configuration, Policy Setup & User Management",
    icon: UserPlus,
    color: "bg-emerald-50 border-emerald-200",
    items: [
      "Configuration of access rules, schedules, and authorization levels",
      "User enrollment, credential management, and audit logging",
      "Setup of alerts and real-time monitoring"
    ]
  },
  {
    title: "Testing, Validation & Compliance Readiness",
    icon: ShieldAlert,
    color: "bg-yellow-100 border-yellow-300",
    items: [
      "Functional testing of access points and fail-safe mechanisms",
      "Validation of system performance and security policies",
      "Compliance checks and audit readiness"
    ]
  },
  {
    title: "Documentation, Training & Handover",
    icon: BookOpen,
    color: "bg-indigo-100 border-indigo-200",
    items: [
      "Delivery of system diagrams, configuration documents, and SOPs",
      "Administrator and user training for system operation",
      "Secure handover of credentials and controls"
    ]
  },
  {
    title: "Maintenance, Support & System Optimization",
    icon: RefreshCcw,
    color: "bg-amber-100 border-amber-200",
    items: [
      "Preventive maintenance and health monitoring",
      "SLA/AMC-backed technical support and troubleshooting",
      "Continuous optimization and system upgrades"
    ]
  }
];

export default function SolutionsPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'solutions-hero');

  return (
    <div className="pt-20 bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center bg-neutral-900 overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-60 scale-105"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight animate-hero-text-1">
            Enterprise Solutions
          </h1>
          <p className="mt-6 text-xl text-neutral-200 max-w-3xl mx-auto animate-hero-text-2">
            Integrated technological excellence across Audio-Visual, Fire Safety, and Cyber Security.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/40" />
      </section>

      {/* Main Solutions Section with Tabs */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-screen-2xl">
          <Tabs defaultValue="electronics" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="bg-white border p-1 rounded-sm shadow-sm h-auto flex flex-wrap justify-center gap-1">
                <TabsTrigger value="electronics" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-sm">
                  Electronics / AV
                </TabsTrigger>
                <TabsTrigger value="fire" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-sm">
                  Fire Detection
                </TabsTrigger>
                <TabsTrigger value="cyber" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-sm">
                  Cyber Security
                </TabsTrigger>
                <TabsTrigger value="access" className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-sm">
                  Access Control
                </TabsTrigger>
              </TabsList>
            </div>

            {/* AV Systems Tab */}
            <TabsContent value="electronics" className="animate-in fade-in duration-500">
              <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
                  End-to-End Audio-Video Solutions Workflow
                </h2>
                <div className="mt-4 h-1 w-24 bg-primary mx-auto" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {avWorkflowSteps.map((step) => (
                  <div key={step.number} className="bg-white p-8 rounded-sm border-2 border-transparent border-t-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="mb-4 p-4 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors">
                        <step.icon className="h-10 w-10 text-orange-500" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-800 leading-tight">
                        {step.number}. {step.title}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Fire Detection Tab */}
            <TabsContent value="fire" className="animate-in fade-in duration-500">
              <div className="text-center max-w-4xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Flame className="h-8 w-8 text-red-600" />
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                    Electronics / Fire Detection
                  </h2>
                </div>
                <div className="flex items-center gap-4 max-w-md mx-auto">
                  <div className="h-px flex-1 bg-green-600" />
                  <span className="text-sm font-bold text-green-600 uppercase tracking-widest">What We Offer</span>
                  <div className="h-px flex-1 bg-green-600" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-neutral-100 shadow-2xl rounded-sm overflow-hidden">
                {fireDetectionOffers.map((offer, index) => (
                  <div key={index} className={cn("p-8 lg:p-12 border-neutral-200 transition-all duration-300 hover:brightness-95", offer.color, "border-b border-r")}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/60 rounded-sm">
                        <offer.icon className="h-6 w-6 text-neutral-800" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 leading-snug">{offer.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {offer.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Cyber Security Tab */}
            <TabsContent value="cyber" className="animate-in fade-in duration-500">
              <div className="text-center max-w-4xl mx-auto mb-20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
                    VAPT & Security Audit Workflow
                  </h2>
                </div>
                <div className="mt-4 h-1 w-24 bg-primary mx-auto" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cyberSecuritySteps.map((step) => (
                  <div key={step.number} className="bg-white p-8 rounded-sm border-2 border-transparent border-t-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="mb-4 p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                        <step.icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-800 leading-tight">
                        {step.number}. {step.title}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Access Control Tab */}
            <TabsContent value="access" className="animate-in fade-in duration-500">
              <div className="text-center max-w-4xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Lock className="h-8 w-8 text-green-700" />
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                    Access Control Solutions
                  </h2>
                </div>
                <div className="flex items-center gap-4 max-w-md mx-auto">
                  <div className="h-px flex-1 bg-green-600" />
                  <span className="text-sm font-bold text-green-600 uppercase tracking-widest">What We Offer</span>
                  <div className="h-px flex-1 bg-green-600" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-neutral-100 shadow-2xl rounded-sm overflow-hidden">
                {accessControlOffers.map((offer, index) => (
                  <div key={index} className={cn("p-8 lg:p-12 border-neutral-200 transition-all duration-300 hover:brightness-95", offer.color, "border-b border-r")}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/60 rounded-sm">
                        <offer.icon className="h-6 w-6 text-neutral-800" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 leading-snug">{offer.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {offer.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-neutral-900 py-24 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold mb-6">Ready to Secure Your Infrastructure?</h2>
          <p className="text-lg text-neutral-400 mb-10">
            From architecture planning to managed support, Balaras Technologies provides the expertise you need for seamless system integration and robust security.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="flex items-center gap-3 px-6 py-3 border border-neutral-700 rounded-sm">
                <CheckCircle2 className="text-green-500 h-5 w-5" />
                <span className="font-semibold">Precision Engineering</span>
             </div>
             <div className="flex items-center gap-3 px-6 py-3 border border-neutral-700 rounded-sm">
                <CheckCircle2 className="text-green-500 h-5 w-5" />
                <span className="font-semibold">Compliance Validation</span>
             </div>
             <div className="flex items-center gap-3 px-6 py-3 border border-neutral-700 rounded-sm">
                <CheckCircle2 className="text-green-500 h-5 w-5" />
                <span className="font-semibold">Managed Support</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
