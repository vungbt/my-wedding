import Button from '@/libraries/common/button';
import { RenderIcon } from '@/libraries/icons';
import Image from 'next/image';
import React from 'react';

export function TemplateThree() {
  return (
    <div className="template-3">
      <div className="date visible">
        <Button label="15 July" />
      </div>
      {/* video */}
      <div className="video-wrap">
        <iframe
          width="560"
          height="315"
          className="video w-[287px] h-[169px]"
          src="https://www.youtube.com/embed/L7HDg4D7LRE?si=QC8MTR_0J65qRsE0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      {/* image */}
      <div className="image-1 visible">
        <Image
          alt="template 3 image 1"
          src="https://www.wiselythemes.com/html/neela/images/timeline-proposal-img1.jpg"
          width={600}
          height={818}
        />
      </div>

      {/* image */}
      <div className="image-2 visible">
        <Image
          alt="template 3 image 2"
          src="https://www.wiselythemes.com/html/neela/images/timeline-proposal-img2.jpg"
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
              She said Yes!{' '}
              <RenderIcon name="line" className="!w-[189px] !h-6 text-gray-100 mt-4" />
            </h4>
            <p>
              So how did Mark pop the question? On a Cruise ... off the shore ... of the Cayman
              Islands! (YES!) On their way down to dinner with the Ship's Captain, Mark's nerves got
              the best of him and he pulled Sarah back to the room and straight onto the balcony for
              the best proposal a girl could ask for!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
