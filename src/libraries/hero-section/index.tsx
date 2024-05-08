'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RenderIcon } from '../icons';
import Button from '../common/button';

export default function HeroSection() {
  const [active, setActive] = useState<number>(0);
  const images = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://buffer.com/library/content/images/2023/10/free-images.jpg',
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863'
  ];
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setActive(prevActive => (prevActive === images.length - 1 ? 0 : prevActive + 1));
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [active, images.length]);

  return (
    <div className="hero-section pt-16">
      {/* slideshow */}
      <div className="slideshow">
        <div className="slides">
          {images.map((item, index) => (
            <div
              key={index}
              className={clsx('zs-slide', {
                active: active === index
              })}
              style={{
                backgroundImage: `url(${item})`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* info */}
      <div className="container relative z-[2] mt-32">
        <div className="w-full flex items-center justify-center flex-col flex-wrap py-24">
          <p className="uppercase text-white text-xl mb-4">SAVE THE DATE</p>
          <p className="text-6xl font-secondary text-white font-medium mb-7">
            Isabella <span className="text-2xl">&</span> Andrew
          </p>
          <div className="h-[1px] w-28 bg-white"></div>
          <p className="text-xl text-white mt-4">
            SEPT <span className="font-secondary text-5xl font-medium mx-4">24</span> 2022
          </p>
          {/* <Button title='RSVP' /> */}
          <Button title="Test asdasdasd" />
        </div>

        {/* decor */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-11">
          <RenderIcon
            name="flower-hero"
            className="text-secondary opacity-60 w-[278px] h-[503px]"
          />
        </div>
        <div className="absolute rotate-180 top-1/2 -translate-y-1/2 -right-11">
          <RenderIcon
            name="flower-hero"
            className="text-secondary opacity-60 w-[278px] h-[503px]"
          />
        </div>
      </div>
    </div>
  );
}
