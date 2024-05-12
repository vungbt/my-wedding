import React from 'react';
import { RenderIcon } from '../icons';
import Button from '../common/button';

export default function Location() {
  return (
    <section className="location py-16 bg-white">
      <div className="container flex items-center justify-center flex-col mb-16">
        <h1 className="text-[36pt] text-secondary font-secondary text-center">Location</h1>
        <RenderIcon name="line" className="!w-[189px] !h-6 text-secondary mt-4" />
      </div>

      <div className="container">
        {/* map info */}
        <div className="map-info-container">
          {/* info */}
          <div className="info-wrapper">
            <div className="location-info">
              <div className="neela-style text-white">
                <span className="h-lines"></span>
                <span className="v-lines"></span>

                <div className="flex items-start justify-center gap-4">
                  <RenderIcon name="church" className="!w-[66px] !h-[82px] text-gray-100" />
                  <div className="mt-4 text-[18pt] text-white font-secondary font-bold leading-[1.2]">
                    <p>Ceremony</p>
                    <p className="text-[16pt] font-normal w-fit">03:00pm</p>
                  </div>
                </div>
                <h5 className="text-[13pt] mt-2">Birchwood Church</h5>
                <p className="italic font-light">4181 Birchwood Ave Seal Beach, CA</p>
                <p className="italic font-light">33.776825, -118.059113</p>

                <div className="flex items-center justify-center w-full my-7">
                  <RenderIcon
                    name="line"
                    className="!w-[146px] !h-[19px] text-gray-100"
                    strokeWidth={2}
                  />
                </div>

                <div className="flex items-start justify-center gap-4">
                  <RenderIcon name="cheers" className="!w-[66px] !h-[82px] text-gray-100" />
                  <div className="mt-4 text-[18pt] text-white font-secondary font-bold leading-[1.2]">
                    <p>Reception</p>
                    <p className="text-[16pt] font-normal w-fit">05:30pm</p>
                  </div>
                </div>
                <h5 className="text-[13pt] mt-2">Old Ranch Country Club</h5>
                <p className="italic font-light">29033 West Lake Drive, Agoura Hills, CA</p>
                <p className="italic font-light">33.776025, -118.065314</p>
              </div>
            </div>
          </div>

          {/* map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29943.853782739254!2d106.43188806645892!3d20.25959275283629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313600d9d65e6293%3A0x4604ad1001c3a805!2sGiao%20H%C3%A0%2C%20Giao%20Th%E1%BB%A7y%20District%2C%20Nam%20Dinh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1715497850009!5m2!1sen!2s"
            width="600"
            height="450"
            className="w-full h-auto col-span-12"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* button */}
        <div className="flex items-center justify-center relative z-[1] bg-white py-[5px]">
          <Button btnStyle="secondary" label="RSVP" />
        </div>
      </div>
    </section>
  );
}
