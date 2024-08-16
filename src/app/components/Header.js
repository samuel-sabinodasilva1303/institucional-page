"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Components.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image 
                    src="/images/martin_logo.png" 
                    alt="Logo"
                    width={150}
                    height={30} 
                />
                <Link href="/about">About</Link>
                <Link href="/residences">Residences</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/newsletter">Newsletter</Link>
                <select>
                    <option>Language</option>
                    <option>Português</option>
                    <option>Espanhol</option>
                </select>
            </div>
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
                        src="/images/Rectangle1.png"
                        alt="Banner 2"
                        layout="responsive"
                        width={1920}
                        height={1080}
                        className={styles.banner}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image 
                        src="/images/Rectangle1.png"
                        alt="Banner 3"
                        layout="responsive"
                        width={1920}
                        height={1080}
                        className={styles.banner}
                    />
                </SwiperSlide>
            </Swiper>
        </header>
    );
}
