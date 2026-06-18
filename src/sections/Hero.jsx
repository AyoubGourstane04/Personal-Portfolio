import {Button} from "@/components/Button"
import{ArrowRight, Github,  Linkedin, ChevronDown, Download} from 'lucide-react'
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton"

const skills = [
  "Java (Spring Boot, JavaFX, JMonkeyEngine)",
  "Python (TensorFlow, OpenCV, Flask)",
  "JavaScript & TypeScript (React)",
  "C & C++ (Arduino, Qt)",
  "Docker",
  "Ansible",
  "MongoDB & PostgreSQL & MySQL",
  "Oracle (PL/SQL)",
  "Git & Linux",
  "Prometheus & Grafana"
];

const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/CV_Ayoub_Gourstane.pdf";
    link.download = "Ayoub_Gourstane_CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img src="/bg_img.jpg" alt="hero bg" className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/* Red Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: `#c1121f`,
                        left: `${Math.random()*100}%`,
                        top: `${Math.random()*100}%`,
                        animation: `slow-dirft ${15 + Math.random()*20}s ease-in-out infinite`,
                        animationDelay: `${Math.random()*5}s`
                    }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* text Content left cioumn */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass test-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                            Software Engineering Student
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">scalable software</span>
                            <br />
                            and 
                            <br />
                            <span className="font-serif italic font-normal text-white">
                            user-focused digital experiences.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I'm Ayoub Gourstane, a software engineering student passionate about designing and building scalable, high-performance web applications. I enjoy transforming ideas into efficient, user-friendly digital solutions while continuously learning new technologies.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg" onClick={() => {
                            document.getElementById("contact").scrollIntoView({behavior: "smooth"})
                        }}>
                            Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton onClick={downloadCv}>
                            <Download className="w-5 h-5"/>
                            Download CV
                        </AnimatedBorderButton>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foregroud">Socials : </span>
                        {[
                            {icon: Github, href: "https://github.com/AyoubGourstane04"},
                            {icon: Linkedin, href: "https://www.linkedin.com/in/ayoub-gourstane-545308363/"}
                        ].map((social, index) => (
                            <a 
                            href={social.href} 
                            key={index}
                            className="p-2 rounded-full glass hover:bg-primary/10 hover: text-primary transition-all duration-300"
                            >
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right coll */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div
                            className="absolute inset-0 
                            rounded-3xl bg-linear-to-br 
                            from-primary/30 via-transparent 
                            to-primary/10 blur-2xl animate-pulse"
                        />    
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/profile.jpeg" alt="Ayoub Gourstane" className="w-full aspect-4/5 object-cover rounded-2xl" />
                            
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500  rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available for a summer internship (PFA)</span>
                                </div>
                            </div>
                        
                            {/* Stats badge */}
                            {/* <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary"></div>
                                <div className="text-xs text-muted-foreground">
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="test-sm text-muted-foreground mb-6 text-center">
                    Technologies I work with
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, index) => (
                            <div className="shrink-0 px-8 py-4" key={index}>
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce"/>
            </a>
        </div>
    </section>
)};