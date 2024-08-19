"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Components.module.css';


export default function Footer() {
    return (
            <footer>
              <div className={styles.footermain}>
              <Image 
                    src="/images/logo-martinD.png" 
                    alt="Logo"
                    width={150}
                    height={30} 
                />
                <div className={styles.footersocial}>
                  <Link href='https://www.tiktok.com/@martinbaezz' target='_blank'>
                    <Image 
                      src="/images/tik-tokb.png" 
                      alt="Logo"
                      width={42}
                      height={42} 
                    />
                  </Link>

                  <Link href='https://www.instagram.com/martinbaezz/' target='_blank'>
                    <Image 
                      src="/images/instagrambranco.png" 
                      alt="Logo"
                      width={42}
                      height={42} 
                    />
                  </Link>

                  <Link href='https://api.whatsapp.com/send/?phone=13058158131' target='_blank'>
                    <Image 
                      src="/images/whatsappbranco.png" 
                      alt="Logo"
                      width={42}
                      height={42} 
                    />
                  </Link>
                </div>
                <div className={styles.footerlinks}>
                  <Link href="/">Home</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/about">About</Link>
                </div>
                <div className={styles.footercopy}>
                  <p>2024 MartinBaez All rights reserved | Privacy policies</p>
                  <p>Developed by the <Link href="https://algoritmux.com/">Algoritmux agency</Link></p>
                </div>
              </div>
            </footer>
    );
}
