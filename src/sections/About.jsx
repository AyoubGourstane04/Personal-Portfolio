import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Ready",
    description:
      "Versatile in Java Spring Boot, React, and Python for end-to-end development.",
  },
  {
    icon: Rocket,
    title: "DevOps Mindset",
    description:
      "Experience with Docker, Ansible, and CI/CD pipelines to streamline deployment.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Effective communicator with internship experience in agile environments.",
  },
  {
    icon: Lightbulb,
    title: "AI & Innovation",
    description:
      "Integrating Machine Learning (TensorFlow/OpenCV) into practical web solutions.",
  },
];

export const About = () => {
    return(
         <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Aspiring Software Engineer,
                            <span className="font-serif italic font-normal text-white"> crafting scalable solutions.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a final-year Software Engineering student at ENSA Al-Hoceima, passionate about building robust architectures and intelligent systems. My academic journey is fueled by a hands-on approach to Computer Science, ranging from distributed systems to AI integration.
                            </p>
                            <p>
                                With practical experience spanning IT Service Management automation and full-stack web development, my portfolio includes everything from distributed microservices to 3D virtual tours. I specialize in the <strong>Java ecosystem (Spring Boot), React, and Cloud technologies</strong>. I focus on writing clean, efficient code that bridges the gap between complex backend logic and seamless user experiences.
                            </p>
                            <p>
                                <strong>I am actively seeking a 4-month end-of-studies internship (PFE) starting in February 2027</strong>, where I can apply my expertise in full-stack development, distributed architectures, and automation to solve real-world technical challenges.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to apply engineering rigor to creative problems, delivering software that is not just functional, but reliable, secure, and future-proof."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-2">
                        {highlights.map((item, index) => (
                            <div key={index} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(index+1)*100} ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
)};