'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Code, Rocket, Award, Users, TrendingUp } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const About = () => {
    const { description } = portfolioData.about;

    const quickFacts = [
        { icon: Calendar, label: 'Experience', value: '5.5+ Years', color: 'text-blue-600', bgColor: 'bg-blue-50' },
        { icon: Briefcase, label: 'Current Role', value: 'Senior Data/MLOps Engineer', color: 'text-purple-600', bgColor: 'bg-purple-50' },
        { icon: MapPin, label: 'Location', value: 'Taipei, Taiwan', color: 'text-green-600', bgColor: 'bg-green-50' },
        { icon: Code, label: 'Core Focus', value: 'Data Engineering • MLOps • GenAI', color: 'text-orange-600', bgColor: 'bg-orange-50' },
    ];

    const coreStrengths = [
        {
            icon: Rocket,
            title: 'End-to-End Pipeline Expert',
            description: 'Building scalable data infrastructures from ingestion to insights with Airflow, Dagster, Kafka',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            icon: Award,
            title: 'Proven Impact',
            description: '90% cost reduction in BigQuery, published in top-tier journal with 50+ citations',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            icon: Users,
            title: 'Technical Leadership',
            description: 'Led and mentored junior engineers, driving team capability and delivery excellence',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        },
        {
            icon: TrendingUp,
            title: 'GenAI/RAG Pioneer',
            description: 'Cutting-edge experience in AI Agent Integration, expert in combating hallucinations and reducing system uncertainty',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50'
        },
    ];

    return (
        <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
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

                {/* Main Content: Left (Bio) + Right (Quick Facts) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Left: Personal Introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 bg-white/60 p-5 rounded-xl shadow-sm border border-white/50"
                    >
                        <h3 className="text-lg font-semibold text-ocean-dark mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-ocean-accent rounded-full"></span>
                            Professional Summary
                        </h3>
                        <p className="text-base text-ocean-dark/80 leading-relaxed space-y-4">
                            <span>
                                Senior Data and MLOps Engineer with over 5.5 years of experience in implementing production-grade data infrastructures and AI-driven applications.
                                My work focuses on the practical lifecycle of data delivery, from building automated AI-driven pipelines with Dagster and Kafka to
                                optimizing cloud warehouse performance, including a documented 90% reduction in BigQuery operational costs.
                            </span>
                            <br /><br />
                            <span>
                                I specialize in landing GenAI solutions by implementing various RAG architectures designed to improve retrieval performance and
                                minimize hallucinations within complex knowledge systems. By designing AI Agent frameworks with practical long/short-term memory layers
                                (conversation vs. customer summaries), I ensure reliable and deterministic user interactions. My approach combines engineering rigor with
                                academic insights to deliver scalable AI systems for real-world business needs.
                            </span>
                        </p>
                    </motion.div>

                    {/* Right: Quick Facts */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-ocean-accent/10 to-ocean-light/10 p-5 rounded-xl shadow-sm border border-ocean-accent/20"
                    >
                        <h3 className="text-lg font-bold text-ocean-dark mb-4">Quick Facts</h3>
                        <div className="space-y-4">
                            {quickFacts.map((fact, index) => (
                                <motion.div
                                    key={fact.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className={`${fact.bgColor} p-3 rounded-xl`}
                                >
                                    <div className="flex items-start gap-3">
                                        <fact.icon className={`${fact.color} shrink-0 mt-0.5`} size={20} />
                                        <div>
                                            <p className="text-xs text-ocean-dark/60 font-medium">{fact.label}</p>
                                            <p className={`${fact.color} font-bold text-sm mt-0.5`}>{fact.value}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Core Strengths */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-ocean-dark mb-6 text-center">Core Strengths</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coreStrengths.map((strength, index) => (
                            <motion.div
                                key={strength.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                whileHover={{ y: -3 }}
                                className="bg-white/70 p-5 rounded-xl shadow-sm border border-white/50 hover:shadow-md transition-all duration-300"
                            >
                                <div className={`${strength.bgColor} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                                    <strength.icon className={strength.color} size={20} />
                                </div>
                                <h4 className="text-base font-semibold text-ocean-dark mb-2">{strength.title}</h4>
                                <p className="text-ocean-dark/70 text-sm leading-relaxed">{strength.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
