'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-20 px-4 bg-ocean-bg">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-ocean-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0 group"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-ocean-dark/10 ml-8"></div>

                            <div className="md:flex gap-10 items-start">
                                {/* Date & Company (Left Side on Desktop) */}
                                <div className="md:w-1/3 md:text-right md:sticky md:top-24 mb-4 md:mb-0">
                                    <div className="inline-block md:block">
                                        <span className="text-ocean-accent font-bold text-lg tracking-wide block mb-1">
                                            {job.duration}
                                        </span>
                                        <h4 className="text-xl font-bold text-ocean-dark">{job.company}</h4>
                                    </div>
                                </div>

                                {/* Icon (Center) */}
                                <div className="absolute left-0 top-1 md:static md:mt-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-ocean-accent border-4 border-ocean-bg shadow-sm z-10 shrink-0">
                                </div>

                                {/* Content (Right Side) */}
                                <div className="md:w-2/3 bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300">
                                    <h3 className="text-2xl font-bold text-ocean-dark mb-6">{job.role}</h3>
                                    <ul className="space-y-3">
                                        {Array.isArray(job.description) ? (
                                            job.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-ocean-dark/80 leading-relaxed">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ocean-accent shrink-0"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="text-ocean-dark/80 leading-relaxed">{job.description}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
