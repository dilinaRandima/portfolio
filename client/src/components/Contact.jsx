import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="section-title">Let's Connect</h2>
                </motion.div>

                <div className="contact-content-centered">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="contact-info-card glass-card"
                    >



                        <div className="info-list">
                            <motion.div
                                className="info-item"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="icon-box">
                                    <FaEnvelope />
                                </div>
                                <div className="info-text">
                                    <span>Email Me</span>
                                    <a
                                        href="mailto:dilinarandima333@gmail.com"
                                    >
                                        dilinarandima333@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="info-item"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="icon-box">
                                    <FaPhone />
                                </div>
                                <div className="info-text">
                                    <span>Call Me</span>
                                    <a href="tel:0719128219">071-9128219</a>
                                </div>
                            </motion.div>


                            <motion.div
                                className="info-item"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="icon-box">
                                    <FaLinkedin />
                                </div>
                                <div className="info-text">
                                    <span>LinkedIn</span>
                                    <a href="https://www.linkedin.com/in/dilina-randima-3375bb230" target="_blank" rel="noopener noreferrer">Dilina Randima</a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="info-item"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="icon-box">
                                    <FaGithub />
                                </div>
                                <div className="info-text">
                                    <span>GitHub</span>
                                    <a href="https://github.com/dilinaRandima" target="_blank" rel="noopener noreferrer">dilinaRandima</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding: 6rem 0;
                    position: relative;
                }

                .contact-content-centered {
                    display: flex;
                    justify-content: center;
                    padding: 0 1rem;
                }

                .contact-info-card {
                    padding: 3rem 2rem;
                    max-width: 1000px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    border-radius: 30px; /* Round Shape */
                    border: 1px solid rgba(255, 255, 255, 0.5); /* 3D Top Highlight */
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 
                        0 20px 40px -10px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.6); /* Inner Top Light */
                    backdrop-filter: blur(20px);
                }

                .contact-info-card h3 {
                    font-size: 2rem;
                    font-family: var(--font-heading);
                    color: var(--text-color);
                    margin-bottom: 0.5rem;
                }

                .contact-desc {
                    color: var(--text-muted);
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 3rem;
                    max-width: 600px;
                }

                .info-list {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                    width: 100%;
                }
                
                @media (max-width: 768px) {
                    .info-list {
                        grid-template-columns: 1fr;
                    }
                }

                .info-item {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    background: var(--glass-bg);
                    padding: 1.5rem;
                    border-radius: 20px;
                    border: 1px solid var(--glass-border);
                    box-shadow: var(--glass-shadow);
                    transition: all 0.3s ease;
                }

                .info-item:hover {
                    transform: translateY(-5px);
                    background: var(--surface-hover);
                    border-color: var(--primary-color);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                }

                .icon-box {
                    min-width: 50px;
                    height: 50px;
                    border-radius: 14px;
                    background: rgba(139, 92, 246, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary-color);
                    font-size: 1.4rem;
                    border: 1px solid rgba(139, 92, 246, 0.2);
                }

                .info-text {
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                }
                
                .info-text a {
                    word-break: break-all;
                }

                .info-text span {
                    font-size: 0.8rem;
                    color: var(--text-dim);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 600;
                }

                .info-text a, .info-text p {
                    color: var(--text-color);
                    font-size: 1.1rem;
                    font-weight: 500;
                    text-decoration: none;
                }
            `}</style>
        </section>
    );
};

export default Contact;
// Update 48 - 1768623132
// Update 64 - 1562537058
// Update 74 - 1171595375
// Update 80 - 2054438382
// Update 84 - 710458500
// Update 86 - 800038659
// Update 49 - 381441335
// Update 50 - 650684230
// Update 55 - 865426481
// Update 61 - 970072291
