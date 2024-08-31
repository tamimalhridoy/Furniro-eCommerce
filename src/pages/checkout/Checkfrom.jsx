import React from "react";
import Input from "../../components/unilist/Input";
import Selectbox from "../../components/unilist/Selectbox";

const Checkfrom = () => {
  return (
    <section className="pt-24 pb-32">
      <div className="container">
        <h2 className="font-semibold font-primary text-4xl">Billing details</h2>
        <div
          className="w-2/6
        "
        >
          <div className="flex gap-8">
            <Input title="First Name" />
            <Input title="Last Name" />
          </div>
          <Input title="Company Name (Optional)" />
          <Selectbox title="Country / Region" />
          <Input title="Street address" />
          <Input title="Town / City" />
          <Selectbox title="Province" />
          <Input title="ZIP code" type="number" />
          <Input title="Phone" type="number" />
          <Input title="Email" />
          <Input  type="number" />
        </div>
      </div>
    </section>
  );
};

export default Checkfrom;
