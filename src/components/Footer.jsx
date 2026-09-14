"use client"
import 'remixicon/fonts/remixicon.css';
import "../styles/Footer.css";


export default function Footer() {

    const handleClickNav = (scrollToId) => {
        document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='footer'>
            <div className='footer-flecha' onClick={() => handleClickNav("home")}>
                <i className="ri-arrow-up-double-line"></i>
            </div>
            <div className="footer-icons">
                <a href="https://api.whatsapp.com/send?phone=541138771146" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='footer-icons-icon'><i className="ri-whatsapp-line"></i></div>
                    <div className='footer-icons-icon'><i className="ri-whatsapp-line"></i></div>
                </a>
                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='footer-icons-icon'><i className="ri-instagram-line"></i></div>
                    <div className='footer-icons-icon'><i className="ri-instagram-line"></i></div>
                </a>
                <a href="https://www.linkedin.com/in/franz-duran/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='footer-icons-icon'><i className="ri-linkedin-fill"></i></div>
                    <div className='footer-icons-icon'><i className="ri-linkedin-fill"></i></div>
                </a>
                <a href="https://github.com/FranzDuran" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='footer-icons-icon'><i className="ri-github-line"></i></div>
                    <div className='footer-icons-icon'><i className="ri-github-line"></i></div>
                </a>
            </div>
            <div className='footer-autor'>
                <div>FRANZ DURAN <span><i className="ri-copyright-line"></i> 2023</span></div>
            </div>
        </div>
    )
}