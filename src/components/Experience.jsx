'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-20 px-4 bg-ocean-bg">
            <div className="max-w-4xl mx-auto">
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

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-ocean-accent/50 before:to-transparent">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-ocean-accent bg-ocean-bg shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Briefcase size={18} className="text-ocean-dark" />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/50 hover:shadow-md transition-shadow duration-300">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                    <h3 className="font-bold text-lg text-ocean-dark">{job.role}</h3>
                                    <span className="text-sm text-ocean-accent font-medium bg-ocean-accent/10 px-3 py-1 rounded-full mt-2 sm:mt-0">
                                        {job.duration}
                                    </span>
                                </div>
                                <h4 className="text-ocean-dark/80 font-medium mb-3">{job.company}</h4>
                                <p className="text-ocean-dark/70 text-sm leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
