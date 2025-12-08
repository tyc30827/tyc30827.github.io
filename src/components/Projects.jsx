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

    // Calculate which tech tags should be enabled based on current selection
    const availableTechs = useMemo(() => {
        if (selectedTechs.length === 0) {
            // If nothing is selected, all techs are available
            return new Set(allTechTags);
        }

        // Find all techs that appear in projects that match current selection
        const availableSet = new Set(['All']);
        filteredProjects.forEach(project => {
            project.tech.forEach(tech => availableSet.add(tech));
        });

        return availableSet;
    }, [selectedTechs, filteredProjects, allTechTags]);

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
                    <div className="w-20 h-1 bg-gradient-to-r from-ocean-accent/50 via-ocean-accent to-ocean-accent/50 mx-auto rounded-full shadow-lg shadow-ocean-accent/20"></div>
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
                            const isAvailable = availableTechs.has(tech);
                            const isDisabled = !isAvailable && !isSelected;

                            return (
                                <motion.button
                                    key={tech}
                                    onClick={() => !isDisabled && handleTechToggle(tech)}
                                    whileHover={!isDisabled ? { scale: 1.05, y: -2 } : {}}
                                    whileTap={!isDisabled ? { scale: 0.95 } : {}}
                                    disabled={isDisabled}
                                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                                        isSelected
                                            ? 'bg-gradient-to-br from-ocean-accent to-ocean-accent/80 text-white shadow-xl shadow-ocean-accent/30 border border-white/20'
                                            : isDisabled
                                            ? 'bg-white/20 text-ocean-dark/25 cursor-not-allowed border border-white/10 backdrop-blur-sm'
                                            : 'bg-white/60 text-ocean-dark/80 hover:bg-white/80 border border-white/40 cursor-pointer backdrop-blur-md shadow-md hover:shadow-lg'
                                    }`}
                                    style={!isDisabled ? {
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                    } : {}}
                                >
                                    {/* Glass shine effect */}
                                    {!isDisabled && (
                                        <span className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></span>
                                    )}

                                    {/* Disabled pattern */}
                                    {isDisabled && (
                                        <>
                                            <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></span>
                                            <span className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none"
                                                  style={{
                                                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
                                                  }}>
                                            </span>
                                        </>
                                    )}

                                    <span className="relative z-10">{tech}</span>
                                </motion.button>
                            );
                        })}
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="px-6 py-3 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-md">
                            <p className="text-ocean-dark/70 text-sm font-medium">
                                {selectedTechs.length === 0
                                    ? `Showing all ${projects.length} projects`
                                    : `Showing ${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''} with ${selectedTechs.join(', ')}`}
                            </p>
                        </div>
                    </div>
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
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-white/60 group flex flex-col h-full transition-all duration-300 relative"
                            style={{
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                            }}
                        >
                            {/* Glass shine effect */}
                            <span className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></span>

                            <div className="p-8 flex flex-col h-full relative z-10">
                                <h3 className="text-xl font-bold text-ocean-dark mb-3 group-hover:text-ocean-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-ocean-dark/70 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium px-3 py-1.5 bg-white/50 backdrop-blur-sm text-ocean-dark/70 rounded-full border border-white/40 shadow-sm">
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
