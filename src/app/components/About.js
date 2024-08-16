"use client";

import Image from 'next/image';
import styles from './Components.module.css';

export default function AboutHome() {
    return(
        <div className={styles.aboutmain}>
            <div className={styles.aboutcontent}>
                <Image 
                    src="/images/persona.png" 
                    alt="Logo"
                    width={722}
                    height={876} 
                />
                <div className={styles.aboutext}>
                    <strong>Martin Báez</strong>
                    <span>real estate agent</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley</p>
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
