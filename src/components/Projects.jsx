'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import { useState, useMemo } from 'react';

const Projects = () => {
    const { projects } = portfolioData;
    const [selectedTechs, setSelectedTechs] = useState([]);

    // Extract all unique tech tags from all projects
    const allTechTags = useMemo(() => {
        const techSet = new Set();
        projects.forEach(project => {
            project.tech.forEach(tech => techSet.add(tech));
        });
        return ['All', ...Array.from(techSet).sort()];
    }, [projects]);

    // Handle tech filter toggle
    const handleTechToggle = (tech) => {
        if (tech === 'All') {
            setSelectedTechs([]);
        } else {
            setSelectedTechs(prev =>
                prev.includes(tech)
                    ? prev.filter(t => t !== tech)
                    : [...prev, tech]
            );
        }
    };

    // Filter projects based on selected techs
    const filteredProjects = useMemo(() => {
        if (selectedTechs.length === 0) return projects;
        return projects.filter(project =>
            selectedTechs.some(tech => project.tech.includes(tech))
        );
    }, [selectedTechs, projects]);

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-ocean-accent mx-auto rounded-full"></div>
                </motion.div>

                {/* Tech Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-3">
                        {allTechTags.map((tech) => {
                            const isSelected = tech === 'All' ? selectedTechs.length === 0 : selectedTechs.includes(tech);
                            return (
                                <motion.button
                                    key={tech}
                                    onClick={() => handleTechToggle(tech)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                        isSelected
                                            ? 'bg-ocean-accent text-white shadow-lg'
                                            : 'bg-white/50 text-ocean-dark/70 hover:bg-white/80 border border-ocean-dark/10'
                                    }`}
                                >
                                    {tech}
                                </motion.button>
                            );
                        })}
                    </div>
                    <p className="text-center mt-4 text-ocean-dark/60 text-sm">
                        {selectedTechs.length === 0
                            ? `Showing all ${projects.length} projects`
                            : `Showing ${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''} with ${selectedTechs.join(', ')}`}
                    </p>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/50 group flex flex-col h-full"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <h3 className="text-xl font-bold text-ocean-dark mb-3 group-hover:text-ocean-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-ocean-dark/70 mb-6 leading-relaxed flex-grow">
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
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
