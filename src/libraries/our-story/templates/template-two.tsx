'use client';
import Button from '@/libraries/common/button';
import { RenderIcon } from '@/libraries/icons';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

export function TemplateTwo() {
  const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <span className="chevron-shadow chevron-next">
        <span onClick={onClick} className={clsx('chevron')}>
          <RenderIcon name="chevron-right" className="!w-[7px] !h-12" />
        </span>
      </span>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <span className="chevron-shadow chevron-prev">
        <span onClick={onClick} className={clsx('chevron')}>
          <RenderIcon name="chevron-left" className="!w-[7px] !h-12" />
        </span>
      </span>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

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

  return (
    <div className="template-2">
      <div className="image-wrap">
        <Slider {...settings} className="image-slider">
          {images.map((item, index) => (
            <div key={index} className="image-view">
              <Image
                src={item}
                width={620}
                height={431}
                loading="lazy"
                alt="wedding-image"
                className="image-item"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
