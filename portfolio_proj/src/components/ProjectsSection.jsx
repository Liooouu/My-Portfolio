import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "History about the Philippine Colonialism",
        description: "A background about the philippines during  World War 2, invaded by japanese soldiers.",
        image: "/projects/Project1.png",
        tags: ["Html","Css","JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/MichaelHans32116/GEHISTO_FinalProject",
    },
    {
        id: 2,
        title: "Mini project word counter",
        description: "My first mini project that counts word automatically.",
        image: "/projects/Project2.png",
        tags: ["ReactJs","tailwindCss","JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/Liooouu/Word-Count",
    },
    {
        id: 3,
        title: "Mini project word counter",
        description: "My Qr code generator that navigates the user base on their search and has to scan it.",
        image: "/projects/Qr.png",
        tags: ["ReactJs","tailwindCss","JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/Liooouu/PersonalProj",
    },

];

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className=" text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    here are some of my recent projects that i have made with 
                    efficiency and creative analytical thinking
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                        key={key} 
                        className="group bg-card rounded-all overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-all bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-1xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoUrl}
                                    target="_blank" 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                              </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Liooouu">
                        check my github <ArrowRight size={16}/>
                    </a>
                </div>
                
            </div>
        </section>
    );
}