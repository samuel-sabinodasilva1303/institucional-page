"use client";
import Image from 'next/image';
import styles from './Components.module.css';

export default function Newsletter() {
    return(
        <div className={styles.newsletter}>
            <div className={styles.newslettermain}>
                <a className={styles.newslettertext}>
                    <Image 
                        src="/images/newsletter1.png" 
                        alt="Logo"
                        width={495}
                        height={345} 
                    />
                    <span>Lorem Ipsum is simply dummy text of the printing </span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d...</p>
                </a>

                <a className={styles.newslettertext}>
                    <Image 
                        src="/images/newsletter2.png" 
                        alt="Logo"
                        width={495}
                        height={345} 
                    />
                    <span>Lorem Ipsum is simply dummy text of the printing </span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d...</p>
                </a>

                <a className={styles.newslettertext}>
                    <Image 
                        src="/images/newsletter3.png" 
                        alt="Logo"
                        width={495}
                        height={345} 
                    />
                    <span>Lorem Ipsum is simply dummy text of the printing </span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d...</p>
                </a>

            </div>
            <a className={styles.newsredirect}>read more</a>
        </div>
    );
}
