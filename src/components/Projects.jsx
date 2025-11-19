'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-ocean-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/50 group"
                        >
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-ocean-dark mb-3 group-hover:text-ocean-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-ocean-dark/70 mb-6 leading-relaxed h-24 overflow-hidden">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium px-2 py-1 bg-ocean-dark/5 text-ocean-dark/70 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        className="flex items-center gap-2 text-sm font-medium text-ocean-dark hover:text-ocean-accent transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-sm font-medium text-ocean-dark hover:text-ocean-accent transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
