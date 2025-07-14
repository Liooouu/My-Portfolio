import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground} from "@/components/StarBackgrounds"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactsSection } from "@/components/ContactsSection"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme toggle*/}
            <ThemeToggle/>

            {/*Background*/}
            <StarBackground />

            {/*Navbar*/}
            <Navbar />

            {/*Main content*/}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactsSection/>
            </main>

            {/*Footer*/}
        </div>
    )
}