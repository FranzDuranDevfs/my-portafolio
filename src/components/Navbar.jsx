"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import logoImg from "../../public/assets/logoo.png";
import { Link } from "react-scroll";

const Navbar = ({ itemsNav }) => {
  const [isSticky, setIsSticky] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuItemClickClose = () => {
    // Close the mobile menu when a menu item is clicked
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.logo}>
        <Link
          activeClass={styles.active}
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={styles.link}
        >
          <Image src={logoImg} alt="Picture of the author" loading="eager" />
        </Link>
      </div>
      <ul className={styles.menu}>
        {itemsNav.map((item, index) => (
          <li key={index}>
            <Link
              activeClass={styles.active}
              to={item.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={styles.link}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        {!isMobileMenuOpen ? (
          <i className="ri-menu-line"></i>
        ) : (
          <i className="ri-close-line" id={styles.close}></i>
        )}
      </div>

      {isMobileMenuOpen && (
        <ul className={styles.mobileMenu} style={{ textDecoration: "none" }}>
          {itemsNav.map((item, index) => (
            <li key={index}>
              <Link
                activeClass={styles.active}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={styles.link}
                onClick={handleMenuItemClickClose}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
