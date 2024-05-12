import React from 'react';
import { RenderIcon } from '../icons';

export default function Invitation() {
  return (
    <section
      id="invitation"
      className="invitation parallax-background bg-color-overlay padding-divider-top section-divider-bottom-1"
    >
      <div className="section-divider-top-1 off-section"></div>
      <div className="container flex items-center justify-center flex-col">
        <h1 className="text-4xl text-white font-secondary text-center">Invitation</h1>
        <RenderIcon name="line" className="!w-[189px] !h-6 text-gray mt-4" />
      </div>

      {/* invitation content */}
      <div className="container">
        <div className="px-5">
          <div className="invite neela-style ">
            <span className="h-lines"></span>
            <span className="v-lines"></span>
            <div className="invite-title">
              <div className="text">
                Save <span>the</span> Date
              </div>
            </div>

            {/* info */}
            <div className="invite-info w-full bg-secondary py-10 px-8 text-white">
              <h2 className="text-[38px] md:text-6xl font-secondary text-white mb-7 leading-[1.2]">
                Isabella <span className="text-2xl">&</span> Andrew
              </h2>
              <p className="uppercase">Request the honor of your presence on their wedding day</p>

              {/* date */}
              <div className="my-5">
                <div className="flex justify-center items-center w-full mb-4">
                  <RenderIcon name="line-two" className="!w-full h-[19px] text-gray-100" />
                </div>
                <p className="text-[20pt] font-bold font-secondary">September 24, 2022</p>
                <p className="text-[18pt] font-secondary font-normal">at 03:00 pm</p>
                <div className="flex justify-center items-center w-full mt-5">
                  <RenderIcon
                    name="line-two"
                    className="!w-full h-[19px] text-gray-100 scale-y-[-1]"
                  />
                </div>
                <p className="mt-4 uppercase">At Birchwood Church</p>
                <p className="uppercase">4181 Birchwood Ave Seal Beach, CA</p>
                <p className="mt-3 font-secondary font-medium text-[16pt]">Reception to follow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
