'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Certifications = () => {
    const { certifications } = portfolioData;

    return (
        <section id="certifications" className="py-20 px-4 bg-ocean-light/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-ocean-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
                        >
                            <div className="p-3 bg-ocean-accent/10 rounded-lg shrink-0">
                                <Award className="text-ocean-accent" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-ocean-dark">{cert.title}</h3>
                                <p className="text-ocean-dark/70 text-sm mb-1">{cert.issuer}</p>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="text-ocean-dark/60">{cert.date}</span>
                                    {cert.score && (
                                        <span className="px-2 py-0.5 bg-ocean-accent/20 text-ocean-dark rounded text-xs font-medium">
                                            Score: {cert.score}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
