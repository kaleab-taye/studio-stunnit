import React from "react";
import Heading from "../heading";

export default function GetInTouchSection() {
  return (
    <div className="text-center grid gap-7">
      <Heading heading="get in touch" />
      <div className="font-light">
        <div>
          Take some of the informations below to talk to one of our partners
          about your project,{" "}
        </div>
        <div>learn more about our services or discuss fees and budgets.</div>
      </div>
      <div className="grid gap-1">
        <div className="text-lg font-medium">Phone Number</div>
        <div className="grid sm:grid-flow-col mx-auto gap- sm:gap-5 sm:gap-24">
          <div className="font-light">+919573523467</div>
        </div>
      </div>
      <div>
        <div className="text-lg font-medium">Email</div>
        <div className="font-light">namaste@studiostunnit.com</div>
      </div>

      <div></div>
    </div>
  );
}
