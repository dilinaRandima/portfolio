/**
 * Hero Component
 * 
 * The main landing section of the portfolio.
 * Features a staggered animation entrance, a 3D code block visual,
 * and quick access to social links and CV.
 */
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaLaptopCode } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="absolute-bg"></div>
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <FaCode className="badge-icon" /> Available for Hire
                    </motion.div>

                    <motion.h2
                        className="greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.h2>
                    <motion.h1
                        className="name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Dilina Randima
                    </motion.h1>
                    <motion.h3
                        className="role"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="gradient-text">Full Stack Developer</span>
                    </motion.h3>
                    <motion.p
                        className="description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Passionate about crafting exceptional digital experiences.
                        Specializing in building scalable web applications with modern technologies
                        like React, Node.js, and MongoDB.
                    </motion.p>

                    <motion.div
                        className="cta-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link to="projects" smooth={true} duration={500} className="btn primary-btn">
                            View Work <FaArrowRight />
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="btn secondary-btn">
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        className="social-icons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="https://github.com/dilinaRandima" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/dilina-randima-3375bb230" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="glow-circle"></div>
                    <div className="visual-wrapper">
                        <div className="tech-badge react">React</div>
                        <div className="tech-badge node">Node</div>
                        <div className="tech-badge js">JS</div>

                        <div className="code-card glass-card">
                            <div className="card-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                                <span className="filename">developer.js</span>
                            </div>
                            <pre>
                                <code>
                                    <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                                    {'\n'}  name: <span className="string">"Dilina Randima"</span>,
                                    {'\n'}  role: <span className="string">"Full Stack Dev"</span>,
                                    {'\n'}  skills: [
                                    {'\n'}    <span className="string">"React.js"</span>,
                                    {'\n'}    <span className="string">"Node.js"</span>,
                                    {'\n'}    <span className="string">"MongoDB"</span>
                                    {'\n'}  ],
                                    {'\n'}  hardWorker: <span className="boolean">true</span>
                                    {'\n'}{'}'};
                                </code>
                            </pre>
                            <div className="code-footer">
                                <FaLaptopCode className="footer-icon" />
                                <span>Compiling fabulous code...</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <style>{`
                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    padding-top: 80px;
                    position: relative;
                    overflow: hidden;
                }
                .absolute-bg {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 50%;
                    height: 100%;
                    background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05), transparent 70%);
                    z-index: -1;
                }
                .hero-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    gap: 4rem;
                }
                .hero-text {
                    flex: 1;
                    max-width: 650px;
                    z-index: 10;
                }
                .badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(99, 102, 241, 0.1);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 50px;
                    color: var(--accent-color);
                    font-size: 0.9rem;
                    font-weight: 500;
                    margin-bottom: 2rem;
                }
                .greeting {
                    color: var(--text-color);
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }
                .name {
                    font-size: 5rem;
                    font-weight: 800;
                    line-height: 1.1;
                    margin-bottom: 1rem;
                    letter-spacing: -2px;
                    background: var(--name-gradient);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .role {
                    font-size: 2.2rem;
                    color: var(--text-muted);
                    margin-bottom: 1.5rem;
                    font-weight: 400;
                }
                .description {
                    font-size: 1.15rem;
                    color: var(--text-dim);
                    margin-bottom: 3rem;
                    max-width: 550px;
                    line-height: 1.8;
                }
                .cta-buttons {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                }
                .social-icons {
                    display: flex;
                    gap: 1.5rem;
                }
                .social-link {
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;
                    background: var(--glass-bg);
                    border: 1px solid var(--glass-border);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    color: var(--text-color);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(5px);
                }
                .social-link:hover {
                    background: var(--surface-hover);
                    color: var(--primary-color);
                    transform: translateY(-5px) scale(1.1);
                    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
                    border-color: var(--primary-color);
                }
                
                .hero-visual {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    position: relative;
                }
                .visual-wrapper {
                    position: relative;
                    perspective: 1000px;
                }
                .glow-circle {
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    background: var(--accent-gradient);
                    border-radius: 50%;
                    filter: blur(120px);
                    opacity: 0.15;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 0;
                }
                .code-card {
                    padding: 2.5rem;
                    width: 450px;
                    transform-style: preserve-3d;
                    transform: rotateY(-10deg) rotateX(5deg);
                    transition: transform 0.5s ease;
                    position: relative;
                    z-index: 2;
                }
                .visual-wrapper:hover .code-card {
                    transform: rotateY(0) rotateX(0) scale(1.02);
                }
                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                .dot { width: 12px; height: 12px; border-radius: 50%; }
                .red { background: #ef4444; }
                .yellow { background: #eab308; }
                .green { background: #22c55e; }
                .filename {
                    margin-left: auto;
                    font-family: 'Fira Code', monospace;
                    font-size: 0.9rem;
                    color: var(--text-dim);
                }
                
                pre {
                    font-family: 'Fira Code', monospace;
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--code-text);
                }
                .keyword { color: var(--code-keyword); font-style: italic; }
                .variable { color: var(--code-variable); }
                .string { color: var(--code-string); }
                .boolean { color: var(--code-boolean); }
                
                .code-footer {
                    margin-top: 2rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    color: var(--text-dim);
                    font-size: 0.9rem;
                    font-family: 'Fira Code', monospace;
                }
                .tech-badge {
                    position: absolute;
                    padding: 0.8rem 1.5rem;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(5px);
                    border: 2px solid rgba(168, 85, 247, 0.4);
                    color: var(--text-color);
                    font-weight: 600;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    z-index: 5;
                    animation: float 6s ease-in-out infinite;
                }
                .react { top: -20px; right: -20px; animation-delay: 0s; color: #61dafb; }
                .node { bottom: 40px; left: -30px; animation-delay: 2s; color: #68a063; }
                .js { bottom: -20px; right: 40px; animation-delay: 4s; color: #f7df1e; }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                @media (max-width: 1024px) {
                    .name { font-size: 4rem; }
                    .code-card { width: 100%; max-width: 400px; }
                }
                
                @media (max-width: 768px) {
                    .hero-content {
                        flex-direction: column-reverse;
                        text-align: center;
                        padding-top: 2rem;
                        gap: 3rem;
                    }
                    .hero-text { margin-top: 1rem; }
                    .cta-buttons { justify-content: center; }
                    .social-icons { justify-content: center; }
                    .name { font-size: 3rem; }
                    .badge { margin: 0 auto 2rem; }
                    .code-card { transform: none; }
                    .visual-wrapper:hover .code-card { transform: scale(1.02); }
                    .tech-badge { display: none; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
// Update 40 - 50704664
// Update 42 - 1958699698
// Update 51 - 782313297
// Update 68 - 825113593
// Update 79 - 756379718
// Update 53 - 1115895661
// Update 69 - 316453780
// Update 72 - 1415758561
// Update 73 - 1507803006
// Update 74 - 398841943
// Update 88 - 1455121537
// Update 31 - 1568961096
// Update 35 - 506332739
// Update 42 - 941571997
