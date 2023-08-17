import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Heading from "../heading";
import LeftRightAligner from "../left-right-aligner";
import PrimaryLinkButton from "../primaryLinkButton";
import TestimonialCard from "../testimonial-card";

export default function HomeTestimonialSection({ testimonials }) {
  return (
    <LeftRightAligner>
      <div className="grid md:gap-6 my-16">
        <div className="grid text-center gap-2">
          <Heading heading="Testimonials" />
          <div className="font-light text-sm">
            Here are some of our honest endorsement of our service that comes
            from our previous customers.
          </div>
        </div>
        <div className="grid gap-2">
          <div className="min-h-[200px] md:min-h-[350px] grid">
            <Carousel
              slideInterval={5000}
              leftControl={
                <MdArrowBackIosNew className="text-4xl text-darkGray hover:text-onSurface" />
              }
              rightControl={
                <MdArrowForwardIos className="text-4xl text-darkGray hover:text-onSurface" />
              }
              className="m-auto"
              indicators={false}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-[92%] md:w-[80%] xl:w-[70%] max-w-[1026px] h-[100px] md:h-[200px]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="text-center m-auto">
            <Link href="/testimonials">
              <PrimaryLinkButton text="See more" />
            </Link>
          </div>
        </div>
      </div>
    </LeftRightAligner>
  );
}
