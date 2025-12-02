'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Education = () => {
    const { education } = portfolioData;

    return (
        <section id="education" className="py-20 px-4 bg-ocean-light/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">Education</h2>
                    <div className="w-20 h-1 bg-ocean-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 group h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-ocean-accent/10 rounded-lg group-hover:bg-ocean-accent/20 transition-colors duration-300">
                                    <GraduationCap size={28} className="text-ocean-dark" />
                                </div>
                                <span className="text-sm font-semibold text-ocean-accent bg-white px-3 py-1 rounded-full shadow-sm">
                                    {edu.year}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-ocean-dark mb-2">{edu.degree}</h3>
                            <p className="text-ocean-dark/70 font-medium">{edu.school}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
