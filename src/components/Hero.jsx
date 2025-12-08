'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
    const { name, role, bio, profilePicture, socials, email } = portfolioData.personalInfo;

    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden text-center px-4 py-16 md:py-20">
            {/* Background Wave Animation - Optimized */}
            <div className="absolute inset-0 z-0 opacity-25">
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-64 bg-ocean-accent blur-xl rounded-t-full will-change-transform"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-[-50px] left-0 right-0 h-64 bg-ocean-light blur-xl rounded-t-full will-change-transform"
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full">
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
                    <div className="absolute inset-0 bg-ocean-accent/20 blur-lg rounded-full -z-10 scale-110 will-change-transform" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-ocean-accent font-semibold tracking-wider uppercase text-sm md:text-base mb-4"
                >
                    Hello, I'm Willie Huang
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-4xl font-bold text-ocean-dark tracking-tight mb-6"
                >
                    {role}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-ocean-dark/80 leading-relaxed max-w-2xl mb-8"
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
                        className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-ocean-dark hover:text-ocean-accent hover:scale-110 hover:shadow-lg transition-all duration-300 border border-ocean-dark/10"
                        title="LinkedIn"
                    >
                        <Linkedin size={28} />
                    </a>
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-ocean-dark hover:text-ocean-accent hover:scale-110 hover:shadow-lg transition-all duration-300 border border-ocean-dark/10"
                        title="GitHub"
                    >
                        <Github size={28} />
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-ocean-dark hover:text-ocean-accent hover:scale-110 hover:shadow-lg transition-all duration-300 border border-ocean-dark/10"
                        title="Email"
                    >
                        <Mail size={28} />
                    </a>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-ocean-accent text-white font-semibold rounded-full hover:bg-ocean-dark hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        View My Projects
                    </a>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
