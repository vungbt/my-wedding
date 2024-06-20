import React from 'react';
import { RenderIcon } from '../icons';
import Button from '../common/button';
import { TemplateOne, TemplateThree, TemplateTwo } from './templates';

export default function OutStory() {
  return (
    <section className="out-story bg-white">
      {/* title */}
      <div
        id="our-story-title"
        className="out-story__title parallax-background bg-color-overlay section-divider-bottom-2 padding-divider-top"
      >
        <div className="section-divider-top-1 off-section"></div>
        <div className="container flex items-center justify-center flex-col">
          <h1 className="text-4xl text-white font-secondary text-center">Our love story</h1>
          <RenderIcon name="line" className="!w-[189px] !h-6 text-gray mt-4" />
        </div>
      </div>

      {/* timeline */}
      <div className="py-16">
        <div className="timeline relative">
          <div className="year">
            <Button className="!text-4xl font-secondary" btnStyle="secondary" label="2018" />
          </div>

          {/* template 1 */}
          <TemplateOne />

          <div className="year">
            <Button className="!text-4xl font-secondary" btnStyle="secondary" label="2019" />
          </div>

          {/* template 2 */}
          <TemplateTwo />

          {/* description */}
          <div className="box-content">
            <div className="description-wrap visible">
              <div className="description visible">
                <div className="neela-style">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <h4 className="description-title">
                    Some of our most memorable moments
                    <RenderIcon name="line" className="!w-[189px] !h-6 text-gray-100 mt-4" />
                  </h4>
                  <p>
                    They had taken overnight trips before, but this was their first huge vacations
                    outside the USA. Isabella and Andrew travelled to the Baltic region and visited
                    a number of countries including Iceland, Finland, Denmark, Russia, Poland and
                    Germany.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="year">
            <Button className="!text-4xl font-secondary" btnStyle="secondary" label="2021" />
          </div>

          {/* template 3 */}
          <TemplateThree />

          <div className="w-full bg-white flex justify-center items-center relative z-[2]">
            <RenderIcon
              name="ring"
              className="text-secondary !w-[80px] !h-[92px] mt-5 opacity-50"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full py-2 font-secondary text-secondary text-5xl relative bg-white z-[2] uppercase">
            <p className="text-lg font-medium">This is where our</p>
            <span className="font-medium">forever</span>
            <span className="font-medium">begins</span>
          </div>
        </div>
      </div>
    </section>
  );
}
