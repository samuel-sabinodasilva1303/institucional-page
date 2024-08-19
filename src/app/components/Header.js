"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Components.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('en');
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLanguageChange = (lang) => {
        setSelectedLang(lang);
        localStorage.setItem('selectedLang', lang);
        window.location.href = `?lang=${lang}`;
        setMenuVisible(false); // Fecha o menu após a seleção
    };

    useEffect(() => {
        const storedLang = localStorage.getItem('selectedLang') || 'en';
        setSelectedLang(storedLang);

        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en', autoDisplay: false },
                'google_translate_element'
            );
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const translateElement = document.getElementById('google_translate_element');
        if (translateElement) {
            const select = document.querySelector('.goog-te-combo');
            if (select) {
                select.value = selectedLang;
                select.dispatchEvent(new Event('change'));
            }
        }
    }, [selectedLang]);

    const languages = [
        { code: 'en', label: 'Inglish', flag: '/images/estados-unidos.png' },
        { code: 'pt', label: 'Português', flag: '/images/brasil.png' },
        { code: 'es', label: 'Espanhol', flag: '/images/espanha.png' },
    ];

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <Image 
                        src="/images/logo-martinD.png" 
                        alt="Logo"
                        width={250}
                        height={150} 
                    />
                </Link>
                
                {/* Botão do menu mobile */}
                <button 
                    className={styles.hamburger} 
                    onClick={toggleMenu}
                >
                    &#9776;
                </button>

                {/* Menu mobile */}
                <nav className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
                    <Link href="/">Home</Link> 
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    <div className={styles.customSelect}>
                        <button onClick={() => setMenuVisible(!menuVisible)}>
                            <Image 
                                src={languages.find(lang => lang.code === selectedLang).flag} 
                                alt={selectedLang} 
                                width={46}
                                height={46} 
                            />
                            {languages.find(lang => lang.code === selectedLang).label}
                        </button>
                        {menuVisible && (
                            <div className={styles.dropdownMenu}>
                                {languages.map(lang => (
                                    <div 
                                        key={lang.code} 
                                        className={styles.dropdownItem} 
                                        onClick={() => handleLanguageChange(lang.code)}
                                    >
                                        <Image 
                                            src={lang.flag} 
                                            alt={lang.label} 
                                            width={46}
                                            height={46} 
                                        />
                                        {lang.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                {/* Menu desktop */}
                <nav className={styles.desktopMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    <div className={styles.customSelect}>
                        <button onClick={() => setMenuVisible(!menuVisible)}>
                            <Image 
                                src={languages.find(lang => lang.code === selectedLang).flag} 
                                alt={selectedLang} 
                                width={46}
                                height={46} 
                            />
                            {languages.find(lang => lang.code === selectedLang).label}
                        </button>
                        {menuVisible && (
                            <div className={styles.dropdownMenu}>
                                {languages.map(lang => (
                                    <div 
                                        key={lang.code} 
                                        className={styles.dropdownItem} 
                                        onClick={() => handleLanguageChange(lang.code)}
                                    >
                                        <Image 
                                            src={lang.flag} 
                                            alt={lang.label} 
                                            width={46}
                                            height={46} 
                                        />
                                        {lang.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            {/* Swiper banners */}
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation={false}
                loop={true}
                autoplay={{ delay: 5000 }} 
                modules={[Navigation, Pagination, Autoplay]} 
                className={styles.swiperContainer}
            >
                <SwiperSlide>
                    <Image 
                        src="/images/Rectangle1.png"
                        alt="Banner 1"
                        layout="responsive"
                        width={1920}
                        height={1080}
                        className={styles.banner}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image 
                        src="/images/bannercenter.png"
                        alt="Banner 2"
                        layout="responsive"
                        width={1920}
                        height={1080}
                        className={styles.banner}
                    />
                </SwiperSlide>
            </Swiper>

            {/* Div para o widget do Google Translate */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
        </header>
    );
}
