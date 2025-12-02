'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Certifications = () => {
    const { certifications } = portfolioData;

    return (
        <section id="certifications" className="py-20 px-4 bg-ocean-light/30">
            <div className="max-w-3xl mx-auto">
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

                <div className="flex justify-center">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-white/50 shadow-md hover:shadow-lg hover:border-ocean-accent/30 transition-all duration-300 flex items-center gap-6 w-full max-w-2xl"
                        >
                            <div className="p-4 bg-ocean-accent/10 rounded-lg shrink-0">
                                <Award className="text-ocean-accent" size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-ocean-dark mb-1">{cert.title}</h3>
                                <p className="text-ocean-dark/70 text-base mb-2">{cert.issuer}</p>
                                <div className="flex items-center gap-3 text-sm">
                                    {cert.date && <span className="text-ocean-dark/60">{cert.date}</span>}
                                    {cert.score && (
                                        <span className="px-3 py-1 bg-ocean-accent/20 text-ocean-dark rounded-full text-sm font-medium">
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
