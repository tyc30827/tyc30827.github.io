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
                            className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 group h-full"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="p-2 bg-ocean-accent/10 rounded-lg group-hover:bg-ocean-accent/20 transition-colors duration-300">
                                    <GraduationCap size={24} className="text-ocean-dark" />
                                </div>
                                <span className="text-xs font-semibold text-ocean-accent bg-white px-2.5 py-1 rounded-full shadow-sm">
                                    {edu.year}
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-ocean-dark mb-1">{edu.degree}</h3>
                            <p className="text-ocean-dark/70 text-sm font-medium">{edu.school}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
