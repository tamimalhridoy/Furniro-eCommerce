import React from "react";
import Disply from "./Disply";
const DarItems = () => {
  return (
    <section className="pt-12 border-t">
      <div className="flex justify-center gap-[52px] font-primary font-medium text-2xl text-[#9F9F9F]">
        <button>Description</button>
        <button>Additional Information</button>
        <button>Reviews [5]</button>
      </div>
      <div>
        <div className="container">
          <div>
            <div className="font-primary text-base text-[#9F9F9F] w-[1026px] m-auto flex flex-col gap-4 my-9">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <span>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </span>
            </div>
          </div>
          <div className="flex justify-between pb-16">
            <Disply />
            <Disply />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarItems;
