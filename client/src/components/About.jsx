import { motion } from 'framer-motion';
import { FaGraduationCap, FaUser, FaCodeBranch, FaDownload } from 'react-icons/fa';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="about-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Bio Section */}
                    <motion.div
                        className="about-card glass-card"
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="card-decoration"></div>
                        <div className="card-header">
                            <div className="icon-box">
                                <FaUser className="card-icon" />
                            </div>
                            <h3>Who I Am</h3>
                        </div>
                        <div className="card-content">
                            <p>
                                I am an <strong className="highlight">IT Undergraduate</strong> at the <strong className="highlight">Sri Lanka Institute of Information Technology (SLIIT)</strong> with a strong enthusiasm for innovative technologies and problem-solving.
                            </p>
                            <p>
                                Skilled in <strong className="highlight">Java</strong> and <strong className="highlight">JavaScript</strong>, with hands-on experience in full-stack development and database management. I bring adaptability, teamwork, and resilience under pressure.
                            </p>
                            <p>
                                My goal is to contribute effectively to impactful software solutions in a fast-evolving tech landscape.
                            </p>
                            <motion.a
                                href="/assets/Dilina_Randima_CV.pdf"
                                download="Dilina_Randima_CV.pdf"
                                className="download-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download CV <FaDownload />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        className="about-card glass-card"
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="card-decoration"></div>
                        <div className="card-header">
                            <div className="icon-box">
                                <FaGraduationCap className="card-icon" />
                            </div>
                            <h3>Education</h3>
                        </div>
                        <div className="education-timeline">
                            <div className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <span className="year">Sep 2022 - Present</span>
                                    <h4>BSc (Hons) in Information Technology</h4>
                                    <p className="sub-text">Specializing in Information Technology</p>
                                    <p className="institution">Sri Lanka Institute of Information Technology (SLIIT)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <style>{`
                .section-padding {
                    padding: 8rem 0;
                    position: relative;
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2.5rem;
                }

                @media (min-width: 992px) {
                    .about-grid {
                        grid-template-columns: 1.2fr 0.8fr;
                    }
                }

                .about-card {
                    padding: 3rem;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    transition: box-shadow 0.3s ease;
                }

                .about-card:hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                    border-color: rgba(139, 92, 246, 0.3);
                }

                .card-decoration {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 150px;
                    height: 150px;
                    background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent 70%);
                    border-radius: 0 0 0 100%;
                    pointer-events: none;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                    margin-bottom: 2rem;
                    border-bottom: 1px solid var(--glass-border);
                    padding-bottom: 1.5rem;
                    position: relative;
                }

                .icon-box {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    background: rgba(139, 92, 246, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .card-icon {
                    font-size: 1.5rem;
                    color: var(--primary-color);
                }

                .card-header h3 {
                    font-size: 1.8rem;
                    color: var(--text-color);
                    margin: 0;
                    font-weight: 600;
                }

                .card-content p {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                }

                .card-content p:last-child {
                    margin-bottom: 0;
                }

                .highlight {
                    color: var(--text-color);
                    background: linear-gradient(120deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
                    padding: 0 5px;
                    border-radius: 4px;
                    font-weight: 600;
                }

                .education-timeline {
                    position: relative;
                    padding-left: 1rem;
                    margin-top: 1rem;
                }

                .timeline-item {
                    position: relative;
                    padding-left: 2.5rem;
                    border-left: 2px solid var(--glass-border);
                    padding-bottom: 2rem;
                    transition: all 0.3s ease;
                }
                
                .timeline-item:hover {
                    border-left-color: var(--primary-color);
                }

                .timeline-marker {
                    position: absolute;
                    left: -6px;
                    top: 0;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: var(--secondary-color);
                    box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.2);
                    transition: all 0.3s ease;
                }

                .timeline-item:hover .timeline-marker {
                    background: var(--primary-color);
                    box-shadow: 0 0 0 6px rgba(139, 92, 246, 0.2);
                    transform: scale(1.2);
                }

                .timeline-content .year {
                    display: inline-block;
                    padding: 0.3rem 0.8rem;
                    background: rgba(139, 92, 246, 0.1);
                    border-radius: 20px;
                    font-size: 0.85rem;
                    color: var(--primary-color);
                    margin-bottom: 1rem;
                    font-family: 'Fira Code', monospace;
                    border: 1px solid rgba(139, 92, 246, 0.2);
                }

                .timeline-content h4 {
                    font-size: 1.3rem;
                    color: var(--text-color);
                    margin-bottom: 0.5rem;
                }

                .sub-text {
                    color: var(--text-muted);
                    font-style: italic;
                    margin-bottom: 0.5rem;
                }

                .institution {
                    color: var(--text-dim);
                    font-weight: 500;
                }

                .download-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-top: 2rem;
                    padding: 1rem 2rem;
                    background: var(--accent-gradient);
                    color: white;
                    font-weight: 600;
                    border-radius: 30px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
                }

                .download-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.5);
                }
            `}</style>
        </section >
    );
};

export default About;
// Update 34 - 1156539204
// Update 38 - 2034055333
// Update 41 - 822672748
// Update 43 - 1223473040
// Update 50 - 226291753
// Update 57 - 1077650848
// Update 59 - 665512029
// Update 63 - 1186253701
// Update 78 - 2142280597
// Update 88 - 1921996253
// Update 31 - 554141789
// Update 34 - 695131962
// Update 37 - 1977321439
// Update 38 - 702522577
// Update 41 - 578049373
// Update 67 - 248207782
// Update 70 - 22888967
// Update 77 - 1145181874
// Update 78 - 1048114389
// Update 41 - 1851284800
// Update 44 - 198519915
// Update 46 - 745175161
// Update 55 - 1166318516
// Update 64 - 1688585143
// Update 66 - 89612990
// Update 88 - 1980410666
