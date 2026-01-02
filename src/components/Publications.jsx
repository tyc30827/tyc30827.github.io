'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Publications = () => {
    const { publications } = portfolioData;

    return (
        <section id="publications" className="py-20 px-4 bg-ocean-bg">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">Publications</h2>
                    <div className="w-20 h-1 bg-ocean-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-6">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={pub.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-ocean-dark/5 rounded-lg mt-0.5 shrink-0">
                                        <BookOpen className="text-ocean-dark" size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-ocean-dark group-hover:text-ocean-accent transition-colors">
                                            {pub.title}
                                        </h3>
                                        <p className="text-ocean-dark/70 text-sm font-medium mt-1">{pub.conference}</p>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold text-ocean-dark/60 bg-white px-3 py-1 rounded-full shadow-sm self-start whitespace-nowrap">
                                    {pub.date}
                                </span>
                            </div>

                            <p className="text-ocean-dark/80 leading-relaxed mb-4 pl-0 md:pl-14">
                                {pub.description}
                            </p>

                            {pub.link && (
                                <div className="pl-0 md:pl-14">
                                    <a
                                        href={pub.link}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-ocean-accent hover:text-ocean-dark transition-colors"
                                    >
                                        Read Paper <ExternalLink size={14} />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
