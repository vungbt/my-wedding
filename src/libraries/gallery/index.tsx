'use client';
import React from 'react';
import { RenderIcon } from '../icons';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import clsx from 'clsx';

export default function Gallery() {
  const images = [
    'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe',
    'https://wallpapers.com/images/hd/one-piece-pictures-bjm9tdff9yzguoup.jpg',
    'https://product.hstatic.net/200000343865/product/100_6baa328b2dac4cceba5645c4d405bb47_master.jpg',
    'https://m.media-amazon.com/images/I/91MlhHmkcGL._AC_UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/I/817e7rQeVDL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
    'https://gamek.mediacdn.vn/133514250583805952/2022/4/8/opcd1-16494096678491611629507.jpg',
    'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/one-piece-franchise-poster.jpg',
    'https://images2.thanhnien.vn/528068263637045248/2023/7/5/anime-16885290131791004759743.jpg',
    'https://cdn.sortiraparis.com/images/80/66131/1049067-one-piece-celebrez-les-25-ans-de-l-anime-a-l-hotel-de-la-marine.jpg',
    'https://images.immediate.co.uk/production/volatile/sites/3/2023/08/Nami-one-piece-378d0a0-e1697457406284.jpeg?quality=90&resize=900,600',
    'https://assets-prd.ignimgs.com/2024/03/12/top10opmomentsoo-1710280260191.jpg'
  ];

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <span
        style={{ ...style, display: 'block' }}
        onClick={onClick}
        className={clsx(
          'chevron chevron-next text-secondary hover:text-white transition-all ease-linear z-[1]',
          className
        )}
      >
        <RenderIcon name="chevron-right" className="!w-[30px] !h-12" />
      </span>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <span
        style={{ ...style, display: 'block' }}
        onClick={onClick}
        className={clsx(
          'chevron chevron-next text-secondary hover:text-white transition-all ease-linear z-[1]',
          className
        )}
      >
        <RenderIcon name="chevron-left" className="!w-[30px] !h-12" />
      </span>
    );
  };

  const settings: Settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="gallery bg-[#f9f9f9]">
      <div className="container flex items-center justify-center flex-col mb-16">
        <h1 className="text-[36pt] text-secondary font-secondary">Wedding Gallery</h1>
        <RenderIcon name="line" className="!w-[189px] !h-6 text-secondary mt-4" />
      </div>

      <div className="gallery-wrap overflow-hidden">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="min-w-[250px] w-[250px] h-[250px] aspect-[1/1]">
              <Image
                src={item}
                width={250}
                height={250}
                loading="lazy"
                alt="wedding-image"
                className="aspect-[1/1]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
