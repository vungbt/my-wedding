import React from 'react';
import { RenderIcon } from '../icons';

export default function OutStory() {
  return (
    <section
      id="our-story-title"
      className="out-story parallax-background bg-color-overlay section-divider-bottom-2 padding-divider-top"
    >
      <div className="section-divider-top-1 off-section"></div>
      <div className="container flex items-center justify-center flex-col">
        <h1 className="text-4xl text-white font-secondary text-center">Our love story</h1>
        <RenderIcon name="line" className="!w-[189px] !h-6 text-gray mt-4" />
      </div>
    </section>
  );
}
