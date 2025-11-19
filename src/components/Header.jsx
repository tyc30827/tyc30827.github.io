'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { socials, email } = portfolioData.personalInfo;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
                    WL<span className="text-ocean-accent">.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-ocean-dark/80 hover:text-ocean-accent font-medium transition-colors duration-300 text-sm uppercase tracking-wide"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="h-6 w-px bg-ocean-dark/10 mx-4"></div>

                    <div className="flex items-center space-x-4">
                        {socials.linkedin && <SocialIcon name="linkedin" url={socials.linkedin} />}
                        {socials.github && <SocialIcon name="github" url={socials.github} />}
                        {email && <SocialIcon name="email" url={email} />}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-ocean-dark"
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
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-ocean-light overflow-hidden"
                    >
                        <ul className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="block text-ocean-dark hover:text-ocean-accent font-medium py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-ocean-dark/10 flex space-x-6">
                                {socials.linkedin && <SocialIcon name="linkedin" url={socials.linkedin} />}
                                {socials.github && <SocialIcon name="github" url={socials.github} />}
                                {email && <SocialIcon name="email" url={email} />}
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
