"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Components.module.css';


export default function Footer() {
    return (
            <footer>
              <div className={styles.footermain}>
              <Image 
                    src="/images/martin_logo.png" 
                    alt="Logo"
                    width={150}
                    height={30} 
                />
                <div className={styles.footersocial}>
                  <a>
                    <Image 
                      src="/images/footerTikitok.png" 
                      alt="Logo"
                      width={42}
                      height={42} 
                    />
                  </a>
                  <a>
                    <Image 
                      src="/images/logotipo-do-instagram.png" 
                      alt="Logo"
                      width={42}
                      height={42} 
                    />
                  </a>
                  <a>
                    <Image 
                      src="/images/footerwhatsapp.png" 
                      alt="Logo"
                      width={42}
                      height={42} 
                    />
                  </a>
                </div>
                <div className={styles.footerlinks}>
                  <Link href="/">Home</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/about">About</Link>
                </div>
                <div className={styles.footercopy}>
                  <p>2024 MartinBaez All rights reserved | Privacy policies</p>
                  <p>Developed by the <a>Algoritmux agency</a></p>
                </div>
              </div>
            </footer>
    );
}
