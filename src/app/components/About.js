"use client";

import Image from 'next/image';
import styles from './Components.module.css';
import { useInView } from 'react-intersection-observer';

export default function AboutHome() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    return(
        <div ref={ref} className={`${styles.aboutmain} ${inView ? styles.fadeIn : styles.fadeOut}`}
      >
            <div className={styles.aboutcontent}>
                <Image 
                    src="/images/martinpersona.png" 
                    alt="Logo"
                    width={722}
                    height={876} 
                />
                <div className={styles.aboutext}>
                    <strong>Martin Báez</strong>
                    <span>real estate agent</span>
                    <p>
                        I’m Martin Báez, a Miami real estate agent offering personalized VIP service. I speak Spanish, English, and Portuguese, and I’m dedicated to helping you find your dream home with satisfaction in buying, selling, renting, or investing.
                    </p>
                    <div className={styles.aboutinfos}>
                        <p>
                            <Image 
                                src="/images/verifica.png" 
                                alt="Logo"
                                width={29}
                                height={29} 
                            />
                            Discover the best tourist attractions in Miami
                        </p>
                        <p>
                            <Image 
                                src="/images/verifica.png" 
                                alt="Logo"
                                width={29}
                                height={29} 
                            />
                            Be invited to experience the best events
                        </p>
                        <p>
                            <Image 
                                src="/images/verifica.png" 
                                alt="Logo"
                                width={29}
                                height={29} 
                            />
                            Seeing your dream come true
                        </p>
                    </div>
                    <a className={styles.aboutredirect}>Find out more</a>
                </div>
            </div>
        </div>
    );
}
