'use client';

import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

const About = () => {
    const { description } = portfolioData.about;

    return (
        <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-ocean-accent mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/60 p-8 rounded-2xl shadow-lg border border-white/50 text-lg text-ocean-dark/80 leading-relaxed"
                >
                    <p>
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
