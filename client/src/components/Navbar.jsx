/**
 * Navbar Component
 * 
 * Responsive navigation bar with glassmorphism effect on scroll.
 * Handles mobile menu toggling and smooth scrolling to sections.
 */
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container navbar-content">
                <div className="logo">
                    Dilina<span className="dot">.</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu-container">
                    <ul className="nav-links desktop-menu">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="nav-link"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <ul className="mobile-nav-list">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                                <li className="mobile-theme-toggle">
                                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                                        {theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <style>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1000;
                    padding: 1.5rem 0;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    background: transparent;
                }
                .navbar.scrolled {
                    padding: 1rem 0;
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-bottom: 1px solid var(--glass-border);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                }
                .navbar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                }
                .logo {
                    font-size: 1.8rem;
                    font-weight: 700;
                    font-family: var(--font-heading);
                    color: var(--text-color);
                    letter-spacing: -1px;
                }
                .logo .dot {
                    color: var(--primary-color);
                    text-shadow: 0 0 10px var(--primary-color);
                }
                .desktop-menu-container {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }
                .desktop-menu {
                    display: flex;
                    gap: 3rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .nav-link {
                    cursor: pointer;
                    font-weight: 500;
                    color: var(--text-dim);
                    transition: all 0.3s;
                    position: relative;
                    padding: 5px 0;
                    font-size: 0.95rem;
                }
                .nav-link:hover {
                    color: var(--text-color);
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background: var(--accent-gradient);
                    transition: width 0.3s ease;
                    border-radius: 2px;
                    box-shadow: 0 0 10px var(--primary-color);
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .theme-toggle {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--text-color);
                    padding: 0.6rem;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    font-size: 1.1rem;
                }
                .theme-toggle:hover {
                    background: var(--primary-color);
                    color: white;
                    transform: rotate(15deg);
                }
                .hamburger {
                    display: none;
                    font-size: 1.5rem;
                    color: var(--text-color);
                    cursor: pointer;
                    transition: color 0.3s;
                }
                .hamburger:hover {
                    color: var(--primary-color);
                }
                .mobile-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: var(--bg-color);
                    backdrop-filter: blur(15px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    overflow: hidden;
                    border-radius: 0 0 20px 20px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .mobile-nav-list {
                    display: flex;
                    flex-direction: column;
                    padding: 2rem 0;
                    gap: 2rem;
                    text-align: center;
                    list-style: none;
                    margin: 0;
                }
                .mobile-menu a {
                    font-size: 1.2rem;
                    color: var(--text-muted);
                    font-weight: 500;
                    transition: all 0.3s;
                    display: block;
                }
                .mobile-menu a:hover {
                    color: var(--primary-color);
                    transform: translateX(5px);
                }
                .mobile-theme-toggle {
                    display: flex;
                    justify-content: center;
                }
                .mobile-theme-toggle .theme-toggle {
                    border-radius: 50px;
                    padding: 0.8rem 1.5rem;
                    gap: 0.8rem;
                    width: auto;
                }
                
                @media (max-width: 768px) {
                    .desktop-menu-container {
                        display: none;
                    }
                    .hamburger {
                        display: block;
                    }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
// Update 35 - 1845777899
// Update 36 - 745530132
// Update 52 - 1442753145
// Update 60 - 537324384
// Update 35 - 1887666464
// Update 39 - 648619846
// Update 40 - 848195371
// Update 42 - 600188044
// Update 52 - 465794959
// Update 59 - 433961303
// Update 68 - 57620965
// Update 71 - 1313842933
// Update 82 - 746873915
// Update 85 - 1126839732
