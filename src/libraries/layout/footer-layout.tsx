import Link from 'next/link';
import React from 'react';

export default function FooterLayout() {
  return (
    <footer className="footer bg-secondary relative text-white">
      <div className="footer-widget-area py-6 w-full relative text-center bg-transparent">
        <div className="container relative z-[1]">
          <p className="italic text-center">Saturday, 24 September 2022 at 03:00 pm</p>
          <p className="italic text-center">4181 Birchwood Ave Seal Beach, CA</p>

          <div className="footer-logo">
            <div className="flex flex-col w-fit">
              Isabella <span className="text-base">&</span> Andrew
            </div>
          </div>

          <div className="text-white italic text-base">
            <span>Tel:</span>
            <Link href="tel:+84383007243"> +84 383007243</Link>
          </div>
          <div className="text-white italic text-base">
            <span>Mail:</span>
            <Link href="mailto:vungbt1999@gmail.com"> vungbt1999@gmail.com</Link>
          </div>
        </div>
      </div>
      <div className="container text-center py-4 bg-transparent text-base">
        © 2024{' '}
        <Link target="_blank" href="https://www.facebook.com/stableisme" className="no-underline">
          Facebook
        </Link>
        , All Rights Reserved.
      </div>
    </footer>
  );
}
