import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "AI-Assisted 3D Virtual Museum",
    description:
      "An immersive first-person virtual museum tour featuring an intelligent robot guide powered by Gemini AI for real-time interaction and voice synthesis.",
    image: "/projects/project_robot.png", 
    tags: ["Java 21", "JMonkeyEngine", "Gemini API", "Docker", "PostgreSQL"],
    github: "https://github.com/mohamedbenzraidi/robot-3d-java/tree/ayoub's_branch",
  },
//   {
//     title: "Real-Time Face & Age Recognition",
//     description:
//       "A real-time deep learning application capable of detecting faces and estimating age using OpenCV and a custom-trained MobileNetV2 model.",
//     image: "/projects/ml_proj.jpg",
//     tags: ["Python", "TensorFlow", "OpenCV", "Keras", "CNN"],
//     github: "https://github.com/AyoubGourstane04/Facial-Expression-age-Recognition-System",
//   },
  {
    title: "Smart E-Commerce with Visual Search",
    description:
      "A full-stack marketplace featuring Content-Based Image Retrieval (CBIR). Users can search for products by uploading images, leveraging MobileNetV2 for intelligent feature extraction and matching.",
    image: "/projects/cibr_proj.png",
    tags: ["React", "Flask", "TensorFlow", "MobileNetV2", "Python", "PostgreSQL", "Docker"],
    github: "https://github.com/AyoubGourstane04/ecommerce-cbir-project",
  },
//   {
//     title: "Interactive Movie Management Platform",
//     description:
//       "A robust full-stack web application for browsing and managing movies. Features secure JWT authentication, role-based access control (RBAC), and automated security tasks using cron jobs.",
//     image: "/projects/imdb_proj.png",
//     tags: ["Java Spring Boot", "MongoDB", "Docker", "Spring Security", "Bootstrap"],
//     github: "https://github.com/AyoubGourstane04/imdb-spring-boot.git",
//   },
  {
    title: "AI Audio Noise Reduction System",
    description: "A deep learning model based on the U-Net architecture designed for high-fidelity vocal isolation and background noise elimination using STFT spectral masking.",
    image: "/projects/noise-reduction.png", 
    tags: ["Python", "TensorFlow/Keras", "U-Net", "Librosa", "Streamlit"],
    github: "https://github.com/AyoubGourstane04/Noise-Reduction-Project",
  },
  {
    title: "Distributed Student Enrollment Platform",
    description: "A resilient microservices architecture leveraging Spring Cloud Gateway and Eureka for service discovery, featuring isolated MySQL databases, reactive inter-service communication via WebClient, and a React frontend with graceful degradation.",
    image: "/projects/student-enrollment.png", 
    tags: ["Java", "Spring Boot", "Spring Cloud", "Docker", "React", "MySQL"],
    github: "https://github.com/AyoubGourstane04/student-enrollment-system",
  },
];

const linkHandler = () => {
    const link = document.createElement("a");
    link.href = "https://github.com/AyoubGourstane04";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10"> 
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects That
                        <span className="font-serif italic font-normal text-white">
                            {" "} make an impact
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to
                        innovative tools that solve real-world problems.
                    </p>
                </div>
                {/* Section Header */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(index+1)*100} ms`}}>
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div
                                    className="absolute inset-0 
                                    bg-linear-to-t from-card via-card/50
                                    to-transparent opacity-60"
                                />
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary
                                                            group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton onClick={linkHandler}>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
)};