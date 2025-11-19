'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
    const { name, role, bio, profilePicture } = portfolioData.personalInfo;

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4 pt-20">
            {/* Background Wave Animation */}
            <div className="absolute inset-0 z-0 opacity-30">
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-64 bg-ocean-accent blur-3xl rounded-t-full"
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
                    className="absolute bottom-[-50px] left-0 right-0 h-64 bg-ocean-light blur-3xl rounded-t-full"
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
                    className="mb-8 relative"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-xl relative z-10">
                        <img
                            src={profilePicture}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-ocean-accent/30 blur-2xl rounded-full -z-10 scale-110 animate-pulse"></div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-ocean-accent font-semibold tracking-wider uppercase text-sm md:text-base mb-4"
                >
                    Hello, I'm a
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold text-ocean-dark tracking-tight mb-6"
                >
                    {role}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-ocean-dark/80 leading-relaxed max-w-2xl mb-10"
                >
                    {bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="#projects"
                        className="inline-block px-8 py-3 rounded-xl bg-ocean-accent/20 hover:bg-ocean-accent/30 text-ocean-dark font-medium backdrop-blur-sm border border-ocean-accent/30 transition-all duration-300 shadow-lg hover:shadow-ocean-accent/20"
                    >
                        View My Work
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 z-10 text-ocean-dark/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
