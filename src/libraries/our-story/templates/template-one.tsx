/* eslint-disable react/no-unescaped-entities */
import Button from '@/libraries/common/button';
import { RenderIcon } from '@/libraries/icons';
import Image from 'next/image';
import React from 'react';

export function TemplateOne() {
  return (
    <div className="template-1">
      <div className="date visible">
        <Button label="22 September" />
      </div>
      {/* image */}
      <div className="image-1 visible">
        <Image
          alt="template 1 image 1"
          src="https://www.wiselythemes.com/html/neela/images/timeline-first-date.jpg"
          width={600}
          height={600}
        />
      </div>
      {/* image */}
      <div className="image-2 visible">
        <Image
          alt="template 1 image 1"
          src="https://www.wiselythemes.com/html/neela/images/timeline-first-kiss.jpg"
          width={600}
          height={818}
        />
      </div>
      {/* description */}
      <div className="description-wrap visible">
        <div className="description visible">
          <div className="neela-style">
            <span className="h-lines"></span>
            <span className="v-lines"></span>
            <h4 className="description-title">
              Our first date & kiss
              <RenderIcon name="line" className="!w-[189px] !h-6 text-gray-100 mt-4" />
            </h4>
            <p>
              Andrew was extremely nervous. He was afraid to expose his feelings to Isabella, but
              didn’t want to risk staying in the friend zone. So it was now or never! After all,
              Isabella was the one. "It was about time!" she said. It was...PERFECT!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
