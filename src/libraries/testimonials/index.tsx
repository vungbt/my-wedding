'use client';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from 'react-slick';

export default function Testimonials() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => <div className="slick-dot"></div>,
    dotsClass: 'slick-dots slick-thumb',
    arrows: false
  };

  const quotes = [
    {
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius ante libero, a sollicitudin elit malesuada et. Nulla facilisi. Pellentesque magna diam, mattis a gravida eget, lobortis ut velit. Nam interdum hendrerit nisl et malesuada. Nulla facilisis velit neque, sed ultrices nibh facilisis non.',
      authorName: 'John Doe'
    },
    {
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius ante libero, a sollicitudin elit malesuada et. Nulla facilisi. Pellentesque magna diam, mattis a gravida eget, lobortis ut velit. Nam interdum hendrerit nisl et malesuada. Nulla facilisis velit neque, sed ultrices nibh facilisis non.',
      authorName: 'John Doe'
    },
    {
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius ante libero, a sollicitudin elit malesuada et. Nulla facilisi. Pellentesque magna diam, mattis a gravida eget, lobortis ut velit. Nam interdum hendrerit nisl et malesuada. Nulla facilisis velit neque, sed ultrices nibh facilisis non.',
      authorName: 'John Doe'
    }
  ];

  return (
    <section className="testimonials bg-secondary text-white py-16">
      <div className="container">
        <Slider {...settings}>
          {quotes.map((item, index) => (
            <div key={index} className="item">
              <blockquote className="blockquote text-lg text-center leading-[1.6] font-light">
                {item.message}
              </blockquote>
              <p className="mt-8 mb-5 text-white font-secondary text-[30pt] text-center">
                {item.authorName}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
