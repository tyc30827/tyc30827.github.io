'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
    const { email } = portfolioData.personalInfo;

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
                        Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
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
                                <p className="text-ocean-light/70">San Francisco, CA</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-lg">
                                <Phone className="text-ocean-accent" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                <p className="text-ocean-light/70">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-ocean-accent/50 focus:bg-white/10 transition-all placeholder:text-white/30"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-ocean-accent/50 focus:bg-white/10 transition-all placeholder:text-white/30"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-ocean-accent/50 focus:bg-white/10 transition-all placeholder:text-white/30 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-ocean-accent text-ocean-dark font-bold rounded-xl hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
