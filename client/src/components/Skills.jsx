/**
 * Skills Component
 * 
 * Displays technical skills in a responsive grid.
 * Features a spotlight hover effect for enhanced interactivity.
 */
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoJavascript } from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';
import ColoredFigmaIcon from './ColoredFigmaIcon';

const Skills = () => {
    const skills = [
        { name: "React", icon: <FaReact />, color: "#61dafb" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
        { name: "MongoDB", icon: <BiLogoMongodb />, color: "#47A248" },
        { name: "JavaScript", icon: <BiLogoJavascript />, color: "#f7df1e" },
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#2965f1" },
        { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#6e5494" },
        { name: "VS Code", icon: <VscVscode />, color: "#007acc" },
        { name: "Figma", icon: <ColoredFigmaIcon />, color: "transparent" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">My technical toolbox</p>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            className="skill-item glass-card"
                            key={index}
                            variants={item}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                            }}
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                            }}
                        >
                            {/* Spotlight Hover Effect Layer */}
                            <div className="spotlight-overlay" />

                            <div className="icon-wrapper" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="additional-skills">

                </div>
            </div>
            <style>{`
                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 10px;
                }

                @media (min-width: 640px) {
                    .skills-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                    }
                }

                @media (min-width: 1024px) {
                    .skills-grid {
                        grid-template-columns: repeat(6, 1fr);
                    }
                }

                .skill-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 2.5rem 1.5rem;
                    gap: 1.2rem;
                    border: 1px solid rgba(255, 255, 255, 0.4); /* Glassy Highlight Border */
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px; /* Round Shape */
                    background: var(--glass-bg);
                    position: relative;
                    overflow: hidden;
                    cursor: default;
                    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
                    box-shadow: 
                        0 10px 20px -5px rgba(0, 0, 0, 0.1),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.2); /* Inner 3D rim */
                }

                .spotlight-overlay {
                    pointer-events: none;
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(
                        600px circle at var(--mouse-x) var(--mouse-y),
                        rgba(15, 23, 42, 0.1), /* Darker spotlight for contrast */
                        transparent 40%
                    );
                    opacity: 0;
                    transition: opacity 0.3s;
                    z-index: 0;
                }

                .skill-item:hover .spotlight-overlay {
                    opacity: 1;
                }

                /* Border Glow Gradient */
                .skill-item::before {
                    content: "";
                    position: absolute;
                    inset: -1px;
                    z-index: -1;
                    background: radial-gradient(
                        400px circle at var(--mouse-x) var(--mouse-y),
                        rgba(139, 92, 246, 0.6),
                        transparent 40%
                    );
                    opacity: 0;
                    transition: opacity 0.3s;
                    border-radius: inherit;
                }

                .skill-item:hover::before {
                    opacity: 1;
                }

                /* Inner Content Layer to sit above spotlight */
                .skill-item > * {
                    position: relative;
                    z-index: 1;
                }

                .icon-wrapper {
                    font-size: 3.5rem;
                    transition: transform 0.4s ease;
                    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .skill-item:hover .icon-wrapper {
                    transform: scale(1.15) translateZ(20px);
                }

                .skill-name {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--text-color);
                    font-family: var(--font-heading);
                    letter-spacing: 0.5px;
                }
                
                .section-subtitle {
                    color: var(--primary-color);
                    font-family: 'Fira Code', monospace;
                    font-size: 1.1rem;
                    margin-top: -3rem;
                    margin-bottom: 3rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    opacity: 0.9;
                }
            `}</style>
        </section>
    );
};

export default Skills;
