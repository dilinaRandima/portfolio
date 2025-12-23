/**
 * Projects Component
 * 
 * Showcases featured projects with images, descriptions, and tech stacks.
 * Cards are hoverable and link to GitHub repositories.
 */
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
    const projectList = [
        {
            title: "Fruit Supply Chain Management System",
            category: "IT Project Management",
            description: "A comprehensive platform for managing the fruit supply chain, featuring full CRUD operations for fruit collection, grading, inventory, and orders. Integrated AI-powered fruit grading functionality.",
            tech: ["JavaScript", "Express", "React", "MongoDB"],
            link: "https://github.com/dilinaRandima/ITPM-Fruit-Management-System/tree/dilina",
            featured: true,
            image: "/assets/project1.png"
        },
        {
            title: "Recipe Sharing Platform",
            category: "Web Application Frameworks",
            description: "Full-stack platform for sharing and discovering recipes. Features Google authentication, media uploads, YouTube integration, and real-time community interactions.",
            tech: ["React.js", "Spring Boot", "MongoDB"],
            link: "https://github.com/dilinaRandima/Recipe-Sharing-Platform",
            featured: false,
            image: "/assets/project2.png"
        },
        {
            title: "Pet Ambulance Service",
            category: "Mern Stack",
            description: "A real-time emergency response system assisting pet owners. Enables users to request ambulances and access pet health records instantly.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
            link: "https://github.com/dilinaRandima/Pet-Ambulance-Service",
            featured: false,
            image: "/assets/project3.png"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Something I've built lately</p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projectList.map((project, index) => (
                        <motion.div className="project-card glass-card" key={index} variants={item}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="image-overlay"></div>
                            </div>
                            <div className="card-top">
                                <div className="card-header-row">
                                    <span className="folder-icon"><FaCode /></span>
                                    <div className="project-links">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                            <FaGithub />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-category">{project.category}</div>

                                <div className="project-desc-box">
                                    <p>{project.description}</p>
                                </div>
                            </div>

                            <div className="card-bottom">
                                <ul className="tech-list">
                                    {project.tech.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <style>{`
                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .section-subtitle {
                    color: var(--primary-color);
                    font-family: 'Fira Code', monospace;
                    font-size: 1rem;
                    margin-top: -3rem;
                    margin-bottom: 3rem;
                }
                
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2.5rem;
                }
                
                .project-card {
                    padding: 0; /* Changed from 2rem to allow full-width image */
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    position: relative;
                    z-index: 1;
                }

                .card-top {
                    padding: 1.5rem 2rem 0 2rem;
                    flex-grow: 1;
                }

                .card-bottom {
                    padding: 1.5rem 2rem 2rem 2rem;
                }
                
                .project-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--primary-color);
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
                }
                
                .card-header-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                
                .folder-icon {
                    color: var(--primary-color);
                    font-size: 2.5rem;
                }
                
                .project-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .project-links a {
                    color: var(--text-dim);
                    font-size: 1.4rem;
                    transition: all 0.2s;
                }
                
                .project-links a:hover {
                    color: var(--accent-color);
                    transform: translateY(-2px);
                }
                
                .project-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: var(--text-color);
                    transition: color 0.3s;
                }
                
                .project-card:hover .project-title {
                    color: var(--primary-color);
                }
                
                .project-category {
                    font-size: 0.85rem;
                    color: var(--accent-color);
                    font-family: 'Fira Code', monospace;
                    margin-bottom: 1.5rem;
                }
                
                .project-desc-box p {
                    color: var(--text-muted);
                    font-size: 1rem;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }
                
                .tech-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .tech-list li {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.85rem;
                    color: var(--text-dim);
                }
                
                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
// Update 31 - 1966713086
// Update 33 - 1345198885
// Update 54 - 1889644304
// Update 66 - 503412430
// Update 32 - 1785795499
// Update 33 - 872969878
// Update 44 - 1036297182
// Update 62 - 614731760
// Update 64 - 1333196182
// Update 65 - 1218022310
// Update 66 - 1427942536
// Update 79 - 1121937199
// Update 83 - 245415431
// Update 84 - 341923169
// Update 40 - 1556807280
// Update 53 - 813471006
