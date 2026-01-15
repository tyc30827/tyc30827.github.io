'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingDown, Users, Award, Zap } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
    const { experience } = portfolioData;

    // Function to highlight key metrics in text
    const highlightMetrics = (text) => {
        // Pattern to match percentages, numbers with +/-, and key achievements
        const patterns = [
            { regex: /(\d+%)/g, icon: TrendingDown, color: 'text-ocean-accent', bgColor: 'bg-ocean-accent/10' },
            { regex: /(\d+\+?\s*(?:times|engineers|years))/gi, icon: Users, color: 'text-ocean-dark', bgColor: 'bg-ocean-dark/5' },
            { regex: /(combat hallucinations|hallucinations|reducing system uncertainty|uncertainty|core intelligence)/gi, icon: Zap, color: 'text-ocean-accent', bgColor: 'bg-ocean-accent/10' },
            { regex: /(hundreds of millions|GB-level|near real-time|end-to-end|7 cross-functional|2 sprints)/gi, icon: Zap, color: 'text-ocean-accent', bgColor: 'bg-ocean-accent/10' },
        ];

        let result = text;
        const highlights = [];

        patterns.forEach(({ regex, color }) => {
            const matches = text.match(regex);
            if (matches) {
                matches.forEach(match => {
                    if (!highlights.includes(match)) {
                        highlights.push(match);
                        result = result.replace(
                            match,
                            `<span class="font-bold ${color}">${match}</span>`
                        );
                    }
                });
            }
        });

        return result;
    };

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
                                <div className="md:w-2/3 bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300">
                                    <h3 className="text-xl font-semibold text-ocean-dark mb-4">{job.role}</h3>
                                    <ul className="space-y-3">
                                        {Array.isArray(job.description) ? (
                                            job.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-ocean-dark/80 leading-relaxed">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ocean-accent shrink-0"></span>
                                                    <span dangerouslySetInnerHTML={{ __html: highlightMetrics(item) }} />
                                                </li>
                                            ))
                                        ) : (
                                            <li className="text-ocean-dark/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightMetrics(job.description) }} />
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
