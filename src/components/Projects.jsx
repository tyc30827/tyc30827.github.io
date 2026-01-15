'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Search, X, Code2, Database, Cpu, Wrench, Sparkles, Server, Cloud, Brain, Package, Filter } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import { useState, useMemo } from 'react';

// Helper function to render text with **highlighted** parts
const renderHighlightedText = (text) => {
    if (!text) return text;
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <span key={index} className="text-ocean-accent font-medium">
                    {part.slice(2, -2)}
                </span>
            );
        }
        return part;
    });
};

const Projects = () => {
    const { projects, techStack } = portfolioData;
    const [selectedTechs, setSelectedTechs] = useState([]);
    const [expandedCategories, setExpandedCategories] = useState(new Set());
    const [showFilters, setShowFilters] = useState(false);
    const [expandedProjects, setExpandedProjects] = useState(new Set());

    // Category icon mapping
    const categoryIcons = {
        'Programming Languages': Code2,
        'Databases / Data Warehouse': Database,
        'Data Engineering': Cpu,
        'Data Visualization & BI': Sparkles,
        'Backend': Server,
        'Infrastructure': Wrench,
        'AWS Services': Cloud,
        'GenAI / RAG / MLOps': Brain,
        'Machine Learning': Brain,
        'Package dependencies management': Package,
    };

    // Create a mapping from tech to category
    const techToCategory = useMemo(() => {
        const mapping = {};
        techStack.forEach(category => {
            category.skills.forEach(skill => {
                mapping[skill] = category.category;
            });
        });
        return mapping;
    }, [techStack]);

    // Extract all unique tech tags from projects and group by category
    const categorizedTechs = useMemo(() => {
        const techSet = new Set();
        projects.forEach(project => {
            project.tech.forEach(tech => techSet.add(tech));
        });

        const categorized = {};
        const uncategorized = [];

        Array.from(techSet).forEach(tech => {
            const category = techToCategory[tech];
            if (category) {
                if (!categorized[category]) {
                    categorized[category] = [];
                }
                categorized[category].push(tech);
            } else {
                uncategorized.push(tech);
            }
        });

        // Sort techs within each category
        Object.keys(categorized).forEach(category => {
            categorized[category].sort();
        });

        return { categorized, uncategorized: uncategorized.sort() };
    }, [projects, techToCategory]);

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

    // Toggle category expansion
    const toggleCategory = (category) => {
        setExpandedCategories(prev => {
            const newSet = new Set(prev);
            if (newSet.has(category)) {
                newSet.delete(category);
            } else {
                newSet.add(category);
            }
            return newSet;
        });
    };

    // Toggle project description expansion
    const toggleProject = (projectId) => {
        setExpandedProjects(prev => {
            const newSet = new Set(prev);
            if (newSet.has(projectId)) {
                newSet.delete(projectId);
            } else {
                newSet.add(projectId);
            }
            return newSet;
        });
    };


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

                {/* Tech Filter - Minimalist Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12 max-w-2xl mx-auto"
                >
                    {/* Filter Header */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="w-full flex items-center justify-between px-6 py-3.5 bg-white/80 rounded-xl border border-ocean-dark/[0.06] hover:border-ocean-accent/30 hover:bg-white transition-all duration-300 mb-3 group cursor-pointer"
                    >
                        <div className="flex items-center gap-2">
                            <Filter className="text-ocean-accent/70 group-hover:text-ocean-accent transition-colors" size={16} />
                            <span className="text-ocean-dark/40 font-medium text-xs tracking-[0.12em] uppercase group-hover:text-ocean-dark/60 transition-colors">
                                Filter by Technology
                            </span>
                        </div>
                        {showFilters ? (
                            <ChevronUp className="text-ocean-dark/25 group-hover:text-ocean-accent transition-colors" size={16} />
                        ) : (
                            <ChevronDown className="text-ocean-dark/25 group-hover:text-ocean-accent transition-colors" size={16} />
                        )}
                    </button>

                    {/* Filters Content */}
                    <AnimatePresence initial={false}>
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, maxHeight: 0 }}
                                animate={{ opacity: 1, maxHeight: '2000px' }}
                                exit={{ opacity: 0, maxHeight: 0 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                    maxHeight: { duration: 0.4 }
                                }}
                                className="overflow-hidden bg-white/80 rounded-xl border border-ocean-dark/[0.06]"
                            >
                                {/* All Button */}
                                <button
                                    onClick={() => handleTechToggle('All')}
                                    className={`w-full px-8 py-4 text-left font-medium transition-all duration-200 border-b border-ocean-dark/[0.08] group cursor-pointer ${selectedTechs.length === 0
                                        ? 'bg-ocean-accent/[0.08] text-ocean-accent'
                                        : 'text-ocean-dark/60 hover:bg-ocean-accent/[0.03] hover:text-ocean-dark'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className={`text-sm transition-colors ${selectedTechs.length === 0 ? 'font-semibold' : 'group-hover:font-semibold'
                                            }`}>All Projects</span>
                                        {selectedTechs.length === 0 && (
                                            <span className="text-xs text-ocean-accent/70">✓</span>
                                        )}
                                    </div>
                                </button>

                                {/* Categories */}
                                {Object.entries(categorizedTechs.categorized).map(([category, techs]) => {
                                    const isExpanded = expandedCategories.has(category);
                                    const CategoryIcon = categoryIcons[category] || Code2;
                                    const selectedInCategory = techs.filter(tech => selectedTechs.includes(tech)).length;

                                    return (
                                        <div key={category} className="border-b border-ocean-dark/[0.08] last:border-b-0">
                                            {/* Category Header */}
                                            <button
                                                onClick={() => toggleCategory(category)}
                                                className="w-full px-8 py-4 flex items-center justify-between hover:bg-ocean-dark/[0.02] transition-all duration-200 group"
                                            >
                                                <div className="flex items-center gap-3.5">
                                                    <CategoryIcon
                                                        size={17}
                                                        strokeWidth={2}
                                                        className={`transition-colors ${selectedInCategory > 0 ? 'text-ocean-accent' : 'text-ocean-dark/35'}`}
                                                    />
                                                    <span className={`font-medium text-sm transition-colors ${selectedInCategory > 0 ? 'text-ocean-dark' : 'text-ocean-dark/60'}`}>
                                                        {category}
                                                    </span>
                                                    <span className="text-ocean-dark/30 text-xs font-medium">({techs.length})</span>
                                                </div>
                                                {isExpanded ? (
                                                    <ChevronUp className="text-ocean-dark/30 group-hover:text-ocean-accent transition-colors" size={17} strokeWidth={2} />
                                                ) : (
                                                    <ChevronDown className="text-ocean-dark/30 group-hover:text-ocean-accent transition-colors" size={17} strokeWidth={2} />
                                                )}
                                            </button>

                                            {/* Category Techs */}
                                            <AnimatePresence initial={false}>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ opacity: 0, maxHeight: 0 }}
                                                        animate={{ opacity: 1, maxHeight: '800px' }}
                                                        exit={{ opacity: 0, maxHeight: 0 }}
                                                        transition={{
                                                            duration: 0.25,
                                                            ease: 'easeInOut'
                                                        }}
                                                        className="overflow-hidden px-8 pb-5 bg-gradient-to-b from-ocean-dark/[0.01] to-transparent"
                                                    >
                                                        <div className="flex flex-wrap gap-2 pt-3">
                                                            {techs.map((tech) => {
                                                                const isSelected = selectedTechs.includes(tech);
                                                                return (
                                                                    <motion.button
                                                                        key={tech}
                                                                        onClick={() => handleTechToggle(tech)}
                                                                        whileHover={{ scale: 1.02 }}
                                                                        whileTap={{ scale: 0.98 }}
                                                                        className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${isSelected
                                                                            ? 'bg-ocean-accent text-white shadow-sm'
                                                                            : 'bg-white text-ocean-dark/60 hover:text-ocean-dark hover:bg-ocean-dark/[0.04] border border-ocean-dark/[0.12] hover:border-ocean-dark/20'
                                                                            }`}
                                                                    >
                                                                        {tech}
                                                                    </motion.button>
                                                                );
                                                            })}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}

                                {/* Uncategorized techs if any */}
                                {categorizedTechs.uncategorized.length > 0 && (
                                    <div className="border-b border-ocean-dark/[0.08] last:border-b-0">
                                        <button
                                            onClick={() => toggleCategory('Other')}
                                            className="w-full px-8 py-4 flex items-center justify-between hover:bg-ocean-dark/[0.02] transition-all duration-200 group"
                                        >
                                            <div className="flex items-center gap-3.5">
                                                <Wrench size={17} strokeWidth={2} className="text-ocean-dark/35 transition-colors" />
                                                <span className="font-medium text-sm text-ocean-dark/60 transition-colors">Other</span>
                                                <span className="text-ocean-dark/30 text-xs font-medium">({categorizedTechs.uncategorized.length})</span>
                                            </div>
                                            {expandedCategories.has('Other') ? (
                                                <ChevronUp className="text-ocean-dark/30 group-hover:text-ocean-accent transition-colors" size={17} strokeWidth={2} />
                                            ) : (
                                                <ChevronDown className="text-ocean-dark/30 group-hover:text-ocean-accent transition-colors" size={17} strokeWidth={2} />
                                            )}
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {expandedCategories.has('Other') && (
                                                <motion.div
                                                    initial={{ opacity: 0, maxHeight: 0 }}
                                                    animate={{ opacity: 1, maxHeight: '800px' }}
                                                    exit={{ opacity: 0, maxHeight: 0 }}
                                                    transition={{
                                                        duration: 0.25,
                                                        ease: 'easeInOut'
                                                    }}
                                                    className="overflow-hidden px-8 pb-5 bg-gradient-to-b from-ocean-dark/[0.01] to-transparent"
                                                >
                                                    <div className="flex flex-wrap gap-2 pt-3">
                                                        {categorizedTechs.uncategorized.map((tech) => {
                                                            const isSelected = selectedTechs.includes(tech);
                                                            return (
                                                                <motion.button
                                                                    key={tech}
                                                                    onClick={() => handleTechToggle(tech)}
                                                                    whileHover={{ scale: 1.02 }}
                                                                    whileTap={{ scale: 0.98 }}
                                                                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${isSelected
                                                                        ? 'bg-ocean-accent text-white shadow-sm'
                                                                        : 'bg-white text-ocean-dark/60 hover:text-ocean-dark hover:bg-ocean-dark/[0.04] border border-ocean-dark/[0.12] hover:border-ocean-dark/20'
                                                                        }`}
                                                                >
                                                                    {tech}
                                                                </motion.button>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Filter Summary */}
                    <AnimatePresence mode="wait">
                        {selectedTechs.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="mt-6 text-center"
                            >
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-accent/[0.04] rounded-xl border border-ocean-accent/10">
                                    <p className="text-ocean-dark/60 text-xs">
                                        Showing{' '}
                                        <span className="font-bold text-ocean-accent">{filteredProjects.length}</span>
                                        {' '}of{' '}
                                        <span className="font-semibold text-ocean-dark/80">{projects.length}</span>
                                        {' '}projects
                                    </p>
                                    <span className="text-ocean-dark/20">•</span>
                                    <button
                                        onClick={() => setSelectedTechs([])}
                                        className="text-ocean-accent hover:text-ocean-accent/70 text-xs font-semibold transition-colors"
                                    >
                                        Clear all
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* All Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Featured Project (with image) - horizontal layout */}
                    {filteredProjects.filter(p => p.image).map((project) => {
                        const isExpanded = expandedProjects.has(project.id);
                        return (
                            <div
                                key={project.id}
                                className="md:col-span-2 lg:col-span-3 bg-white/60 backdrop-blur-md rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-white/60 group flex flex-col lg:flex-row transition-shadow duration-300 relative"
                                style={{
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                }}
                            >
                                {/* Project Image - clickable with link */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative w-full lg:w-1/2 py-4 px-4 lg:py-5 lg:px-5 overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center self-start cursor-pointer hover:opacity-90 transition-opacity duration-200"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-contain rounded-lg"
                                    />
                                </a>
                                {/* Content - right side */}
                                <div className="p-5 flex flex-col flex-1 relative z-10">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-ocean-dark group-hover:text-ocean-accent transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="mb-3 flex-1">
                                        <p className={`text-ocean-dark/70 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                                            {renderHighlightedText(project.description)}
                                        </p>
                                        <button
                                            onClick={() => toggleProject(project.id)}
                                            className="text-ocean-accent hover:text-ocean-dark text-xs font-medium mt-1 transition-colors duration-200"
                                        >
                                            {isExpanded ? 'Less' : 'More'}
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2 py-0.5 bg-ocean-accent/10 text-ocean-dark/80 rounded-full text-xs font-medium hover:bg-ocean-accent/20 hover:scale-105 transition-all duration-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Regular Projects */}
                    {filteredProjects.filter(p => !p.image).map((project) => {
                        const isExpanded = expandedProjects.has(project.id);
                        return (
                            <div
                                key={project.id}
                                className="bg-white/60 backdrop-blur-md rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-white/60 group flex flex-col h-full transition-shadow duration-300 relative"
                                style={{
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                }}
                            >
                                <div className="p-5 flex flex-col flex-1 relative z-10">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-ocean-dark group-hover:text-ocean-accent transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="shrink-0 p-1.5 rounded-lg bg-ocean-accent/10 text-ocean-accent hover:bg-ocean-accent hover:text-white transition-all duration-200"
                                                title="View Project"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                    <div className="mb-3 flex-1">
                                        <p className={`text-ocean-dark/70 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                                            {project.description}
                                        </p>
                                        <button
                                            onClick={() => toggleProject(project.id)}
                                            className="text-ocean-accent hover:text-ocean-dark text-xs font-medium mt-1 transition-colors duration-200"
                                        >
                                            {isExpanded ? 'Less' : 'More'}
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2 py-0.5 bg-ocean-accent/10 text-ocean-dark/80 rounded-full text-xs font-medium hover:bg-ocean-accent/20 hover:scale-105 transition-all duration-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
