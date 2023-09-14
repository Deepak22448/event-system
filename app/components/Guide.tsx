import React from "react";
import GuideStepsList from "./GuideStepsList";

const Guide = () => {
  return (
    <section className="text guide py-5 bg-black">
      <h4 className="text-orange-400 text-center text-xl md:text-3xl mb-8">
        How it workds?
      </h4>
      <GuideStepsList />
    </section>
  );
};

export default Guide;
