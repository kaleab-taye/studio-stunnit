/* eslint-disable @next/next/no-img-element */
import React from "react";
import RatingStars from "./rating-stars";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="grid flex-col md:flex-row md:gap-x-5 lg2:gap-x-2 items-center justify-evenly w-full h-fit md:h-full rounded-md bg-surface scroll">
      <div className="grid flex-col h-[100%] md:h-[60%] w-[100%] my-auto md:min-w-[400px] lg:min-w-[700px]">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center max-md:gap-4">
          <div className="flex flex-col md:flex-row  items-center gap-2 md:gap-2">
            <h3 className="font-bold text-xl md:text-lg lg2:text-xl">
              {testimonial.name}
            </h3>
            <h5 className="text-xs md:text-xs text-primary max-md:text-center">
              {testimonial.occupation}
            </h5>
          </div>
          <div>
            <RatingStars ratingCount={testimonial.rating} />
          </div>
        </div>
        <div className="overflow-auto h-fit text-xs  leading-8  md:h-full max-md:text-center font-common_font scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-200 md:pr-7">
          {'"' + testimonial.description + '"'}
        </div>
      </div>
    </div>
  );
}
