import Link from 'next/link';
import React from 'react';
import { IconName, RenderIcon } from '../icons';
import Image from 'next/image';

export default function AboutUs() {
  const aboutUs = [
    {
      name: 'Andrew Miller',
      type: 'THE GROOM',
      image: '/assets/avatars/male.jpg',
      des: 'I am so incredibly blessed and excited to spend everyday for the rest of my life with my best friend!',
      socials: [
        { icon: 'instagram', url: '/' },
        { icon: 'facebook', url: '/' },
        { icon: 'tiktok', url: '/' }
      ]
    },
    {
      name: 'Andrew Miller',
      type: 'divider',
      image: '/assets/avatars/male.jpg',
      des: 'I am so incredibly blessed and excited to spend everyday for the rest of my life with my best friend!',
      socials: [
        { icon: 'instagram', url: '/' },
        { icon: 'facebook', url: '/' },
        { icon: 'tiktok', url: '/' }
      ]
    },
    {
      name: 'Isabella Walker',
      type: 'THE BRIDE',
      des: "She's everything I've always dreamed of and I'm so excited to spend the rest of my life with her!",
      image: '/assets/avatars/female.jpg',
      socials: [
        { icon: 'instagram', url: '/' },
        { icon: 'facebook', url: '/' },
        { icon: 'tiktok', url: '/' }
      ]
    }
  ];
  return (
    <section className="flex items-center gap-12 py-16 bg-white flex-col">
      <div className="container about-us relative">
        {aboutUs.map((item) => {
          const isDivider = item.type === 'divider';
          if (isDivider) return <Divider key={item.type} />;
          return (
            <div
              key={item.type}
              className="element relative"
              data-animation-direction="from-left"
              data-animation-delay="300"
            >
              <div className="element-flip relative overflow-hidden w-full">
                <Image
                  className="element-avatar"
                  src={item.image}
                  alt="avatar"
                  width={600}
                  height={714}
                  loading="lazy"
                />
                <div className="element-overlay"></div>

                {/* info */}
                <div className="element-info flex flex-col items-center justify-center">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <div>
                    <h3 className="text-3xl font-secondary text-secondary capitalize text-center">
                      {item.name}
                    </h3>
                    <h2 className="text-center uppercase mt-1 text-secondary">{item.type}</h2>
                    <p className="text-center mt-3">{item.des}</p>

                    {/* socials */}
                    <div className="flex items-center justify-center gap-3 mt-3">
                      {item.socials.map((item) => (
                        <Link key={item.icon} href={item.url} target="_blank">
                          <RenderIcon name={item.icon as IconName} className="text-secondary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container">
        <div className="px-6">
          <h3 className="text-2xl text-secondary font-secondary text-center">We are</h3>
          <h4 className="text-4xl font-bold font-secondary text-secondary text-center">
            Getting Married
          </h4>
          <p className="text-center mt-10 mb-5">
            Today and always, beyond tomorrow, I need you beside me, always as my best friend, lover
            and forever soul mate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt porttitor venenatis. Vestibulum sit amet est nisl. Vestibulum iaculis finibus
            sem nec condimentum. Quisque nulla orci, aliquet sit amet sem eget, pellentesque euismod
            enim. Aenean quis nisl at est consequat elementum sed vel turpis. Phasellus dignissim
            sit amet orci vitae mattis. Phasellus a imperdiet ligula, efficitur dignissim ex. Mauris
            placerat aliquet sem commodo molestie.
          </p>
          {/* signature */}
          <div className="w-[300px] h-[60px] bg-secondary"></div>
        </div>
      </div>
    </section>
  );
}

const Divider = () => {
  return (
    <div className="divider-about-us flex items-center justify-center">
      <RenderIcon name="two-heart" className="text-secondary !w-14 !h-14" />
    </div>
  );
};
