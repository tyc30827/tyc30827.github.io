import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Publications from '@/components/Publications';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
    return (
        <main className="min-h-screen bg-ocean-bg overflow-x-hidden font-sans">
            <Header />
            <Hero />
            <About />
            <Experience />
            <Education />
            <Certifications />
            <Publications />
            <TechStack />
            <Projects />
            <Contact />
            <ScrollToTop />
        </main>
    );
}
