'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import { useState, useEffect } from 'react';

const Hero = () => {
    const { name, role, bio, profilePicture, socials, email } = portfolioData.personalInfo;

    // Multiple roles to cycle through
    const roles = [
        'Data Engineer',
        'MLOps Engineer',
        'Software Engineer'
    ];

    const [typedRole, setTypedRole] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && typedRole === currentRole) {
                // Finished typing, pause then start deleting
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && typedRole === '') {
                // Finished deleting, move to next role
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                // Continue typing or deleting
                setTypedRole(
                    isDeleting
                        ? currentRole.substring(0, typedRole.length - 1)
                        : currentRole.substring(0, typedRole.length + 1)
                );
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [typedRole, isDeleting, roleIndex]);

    return (
        <section className="relative flex flex-col items-center justify-center text-center px-4 py-16 md:py-20">
            {/* Content */}
            <div className="flex flex-col items-center max-w-4xl mx-auto w-full">
                {/* Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 relative"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-xl relative z-10">
                        <img
                            src={profilePicture}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Glow Effect - Optimized */}
                    <div className="absolute inset-0 bg-ocean-accent/20 blur-lg rounded-full -z-10 scale-110 will-change-transform" style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-ocean-accent font-normal text-lg md:text-xl mb-4 tracking-tight"
                    style={{
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                        letterSpacing: '0.01em'
                    }}
                >
                    Wei-Chia (Willie) Huang
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-3xl font-semibold text-ocean-dark tracking-tight mb-4 min-h-[2.5rem] md:min-h-[3rem]"
                >
                    <span>{typedRole}</span>
                    <span className="inline-block w-0.5 h-6 md:h-7 bg-ocean-accent ml-1 animate-pulse"></span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-base md:text-lg text-ocean-dark/80 leading-relaxed max-w-2xl mb-8"
                >
                    {bio}
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex items-center gap-6 mb-8"
                >
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-ocean-dark hover:text-ocean-accent hover:scale-105 hover:shadow-md transition-all duration-300 border border-ocean-dark/10"
                        title="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </a>
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-ocean-dark hover:text-ocean-accent hover:scale-105 hover:shadow-md transition-all duration-300 border border-ocean-dark/10"
                        title="GitHub"
                    >
                        <Github size={22} />
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-ocean-dark hover:text-ocean-accent hover:scale-105 hover:shadow-md transition-all duration-300 border border-ocean-dark/10"
                        title="Email"
                    >
                        <Mail size={22} />
                    </a>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full px-4"
                >
                    <a
                        href="#projects"
                        className="px-10 py-3.5 bg-white text-ocean-dark/80 text-sm font-bold rounded-full border border-ocean-dark/10 hover:bg-ocean-accent hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg text-center min-w-[200px]"
                    >
                        View My Projects
                    </a>
                    <a
                        href="/Willie_Huang_Resume.pdf"
                        download
                        className="px-10 py-3.5 bg-white text-ocean-dark/80 text-sm font-bold rounded-full border border-ocean-dark/10 hover:bg-ocean-accent hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg text-center min-w-[200px]"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
