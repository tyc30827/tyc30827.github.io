import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <main className="min-h-screen bg-ocean-bg overflow-x-hidden font-sans">
            <Header />
            <Hero />
            <About />
            <Experience />
            <Education />
            <TechStack />
            <Projects />
            <Contact />
        </main>
    );
}
