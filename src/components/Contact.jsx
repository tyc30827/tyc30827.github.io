'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react'; // Changed Phone to Linkedin
import portfolioData from '../data/portfolio.json';

const Contact = () => {
    const { email, socials } = portfolioData.personalInfo; // Added socials

    return (
        <section id="contact" className="py-20 px-4 bg-ocean-dark text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-ocean-accent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-ocean-light rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-ocean-accent mx-auto rounded-full"></div>
                    <p className="mt-6 text-ocean-light/80 text-lg max-w-2xl mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm min-w-[300px] md:min-w-[400px]"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-lg">
                                <Mail className="text-ocean-accent" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email</h3>
                                <a href={`mailto:${email}`} className="text-ocean-light/70 hover:text-white transition-colors">
                                    {email}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-lg">
                                <MapPin className="text-ocean-accent" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Location</h3>
                                <p className="text-ocean-light/70">Taipei, Taiwan</p>
                            </div>
                        </div>
                        {/* Replaced Phone with LinkedIn */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-lg">
                                <Linkedin className="text-ocean-accent" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
                                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-ocean-light/70 hover:text-white transition-colors">
                                    {socials.linkedin.replace('https://www.linkedin.com/in/willie-huang-ba79a9199/', 'Willie Huang')}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;