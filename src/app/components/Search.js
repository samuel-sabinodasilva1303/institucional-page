"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Components.module.css';
import Link from 'next/link';

const SearchButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); 
    };

    handleResize(); // Executa uma vez para verificar o tamanho da tela ao carregar
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cardItems = [
    {
      link: 'https://api.whatsapp.com/send/?phone=13058158131&text=Hello+Martin%21+I+want+to+buy+my+house&type=phone_number&app_absent=0',
      imgSrc: '/images/bubble-chat.png',
      imgAlt: 'Logo',
      title: 'I want to buy my house',
      description: 'Find your home and make your dreams come true in Miami!',
    },
    {
      link: 'https://api.whatsapp.com/send/?phone=13058158131&text=Hi+Martin%21+I+want+to+sell+my+property&type=phone_number&app_absent=0',
      imgSrc: '/images/money.png',
      imgAlt: 'Logo',
      title: 'I want to sell my property',
      description: "I'm interested in selling my property.",
    },
    {
      link: 'https://api.whatsapp.com/send/?phone=13058158131&text=Hello+Martin%21+I+want+to+rent+my+property&type=phone_number&app_absent=0',
      imgSrc: '/images/location.png',
      imgAlt: 'Logo',
      title: 'I want to rent my property',
      description: 'I own a property that can be rented.',
    },
  ];

  return (
    <div>
      <div className={styles.cardsmain}>
        {isMobile ? (
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {cardItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.cardsitem}>
                  <Link target='_blank' href={item.link}>
                    <div className={styles.cardsitens}>
                      <Image 
                        src={item.imgSrc} 
                        alt={item.imgAlt}
                        width={104}
                        height={104} 
                      />
                      <span>{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          cardItems.map((item, index) => (
            <div key={index} className={styles.cardsitem}>
              <Link target='_blank' href={item.link}>
                <div className={styles.cardsitens}>
                  <Image 
                    src={item.imgSrc} 
                    alt={item.imgAlt}
                    width={104}
                    height={104} 
                  />
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchButton;
