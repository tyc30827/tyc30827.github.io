'use client';

import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const TechStack = () => {
    const { techStack } = portfolioData;

    return (
        <section id="tech-stack" className="py-20 px-4 bg-ocean-light/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">Tech Stack</h2>
                    <div className="w-20 h-1 bg-ocean-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/40 backdrop-blur-md p-4 rounded-xl border border-white/50 hover:shadow-md hover:border-ocean-accent/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <h3 className="text-base font-semibold text-ocean-dark mb-2.5 border-b border-ocean-dark/10 pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-0.5 bg-ocean-accent/10 text-ocean-dark/80 rounded-full text-xs font-medium hover:bg-ocean-accent/20 hover:scale-105 transition-all duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
