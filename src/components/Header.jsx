'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const { socials, email } = portfolioData.personalInfo;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Publications', href: '#publications' },
        { name: 'Tech Stack', href: '#tech-stack' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const SocialIcon = ({ name, url }) => {
        const icons = {
            linkedin: Linkedin,
            github: Github,
            email: Mail
        };
        const Icon = icons[name] || Mail;

        return (
            <a
                href={name === 'email' ? `mailto:${url}` : url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocean-dark/70 hover:text-ocean-accent transition-colors duration-300"
            >
                <Icon size={20} />
            </a>
        );
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold text-ocean-dark tracking-tight">
                    Willie<span className="text-ocean-accent">.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-4">
                    <ul className="flex gap-3">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`text-ocean-dark/80 hover:text-ocean-accent font-medium transition-all duration-300 text-xs tracking-wide whitespace-nowrap pb-1 border-b-2 ${
                                            isActive
                                                ? 'border-ocean-accent text-ocean-accent'
                                                : 'border-transparent'
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="h-5 w-px bg-ocean-dark/10"></div>

                    <div className="flex items-center gap-2">
                        {socials.linkedin && <SocialIcon name="linkedin" url={socials.linkedin} />}
                        {socials.github && <SocialIcon name="github" url={socials.github} />}

                        <div className="h-5 w-px bg-ocean-dark/10 mx-1"></div>

                        <a
                            href="/Willie_Huang_Resume.pdf"
                            download="Willie_Huang_Resume.pdf"
                            className="text-ocean-dark/70 hover:text-ocean-accent transition-colors duration-300 flex items-center gap-1"
                            title="Download Resume"
                        >
                            <Download size={16} />
                            <span className="text-xs font-medium hidden xl:inline">Resume</span>
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-ocean-dark"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-md border-t border-ocean-light overflow-hidden"
                    >
                        <ul className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className={`block font-medium py-2 border-l-2 pl-3 transition-all duration-300 ${
                                                isActive
                                                    ? 'border-ocean-accent text-ocean-accent'
                                                    : 'border-transparent text-ocean-dark hover:text-ocean-accent'
                                            }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                );
                            })}
                            <li className="pt-4 border-t border-ocean-dark/10">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex space-x-6">
                                        {socials.linkedin && <SocialIcon name="linkedin" url={socials.linkedin} />}
                                        {socials.github && <SocialIcon name="github" url={socials.github} />}
                                        {email && <SocialIcon name="email" url={email} />}
                                    </div>
                                </div>
                                <a
                                    href="/Willie_Huang_Resume.pdf"
                                    download="Willie_Huang_Resume.pdf"
                                    className="w-full py-3 px-4 bg-ocean-accent text-white rounded-lg hover:bg-ocean-dark transition-colors duration-300 flex items-center justify-center gap-2 font-medium"
                                >
                                    <Download size={18} />
                                    <span>Download Resume</span>
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
