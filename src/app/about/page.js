import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../components/Components.module.css"
import Image from 'next/image';


export default function About() {
    return (
        <div>
            <Header />
                <div className={styles.aboutmainpage}>
                    
                    <div className={styles.aboutmainpageimage}>
                        <Image 
                            src="/images/fundo-about.png" 
                            alt="Logo"
                            width={1300}
                            height={700}
                            className={styles.aboutmainpageimageone}
                            
                        /> 
                        <Image 
                            src="/images/peronsa3.png" 
                            alt="Logo"
                            width={722}
                            height={750}
                            className={styles.aboutmainpageimagetwo}
                        />
                    </div>

                    <div className={styles.aboutmainpagetext}>
                        <div className={styles.aboutmainpageinfos}>
                            <h1>Martin Báez</h1>
                            <p>
                                <strong>My name is Martin Báez, and I am a real estate agent in Miami.</strong>
                                I am here to help you find the home of your dreams, offering you the best attention and quality. I speak Spanish, English, and Portuguese. With my services, you will enjoy the privileges of being a VIP client, as I am dedicated to my work with passion and care.
                                It is an honor for me to introduce you to the wonderful city of Miami, as well as the numerous advantages it offers, including the surrounding cities. My greatest satisfaction is seeing my clients happy and satisfied with my work.Are you looking to buy, sell, rent, or invest? I have the best options for you.
                            </p>
                        </div>

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
                            <p>
                                <Image 
                                    src="/images/verifica.png" 
                                    alt="Logo"
                                    width={29}
                                    height={29} 
                                />
                                network and make contacts
                            </p>
                        </div>
                        
                    </div>
                </div>
            <Footer />
        </div>
    );
}