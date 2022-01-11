import React, { Component } from "react";
import "../App.css"
import b1 from "./b1.png";
import b2 from "./b2.png";
import b3 from "./b3.png";

const to_map = [
  { benefit: "Great Deals" },
  { benefit: "Fast Serve" },
  { benefit: "Great Support" },
];
const WhyItem = (props) => {
  return (
      <>
      <div className="border-4 border-gray-400 m-4 MyClass1">
      <div className="m-2 mt-5 text-4xl text-bold p-2 text-center MyClass1">Why iBox</div>
    <div className="flex flex-wrap justify-evenly p-2 m-2 MyClass1">
      <div className="flex flex-col flex-wrap m-2 MyClass1">
        <div className="flex justify-center flex-wrap MyClass1">
        <div className="basis-2/5 MyClass1">
          <img src={b1} alt="" />
          </div>
        </div>
        <div className="MyClass1 text-center text-2xl">{to_map[0].benefit}</div>
      </div>

      <div className="flex flex-col flex-wrap m-2 MyClass1">
        <div className="flex justify-center flex-wrap MyClass1">
            <div className="basis-2/5 MyClass1">
          <img src={b2} alt="" />
          </div>
        </div>
        <div className="text-center text-2xl MyClass1">{to_map[1].benefit}</div>
      </div>

      <div className="flex flex-col flex-wrap m-2 MyClass1">
        <div className="flex justify-center flex-wrap MyClass1">
        <div className="basis-2/5 MyClass1">
          <img src={b3} alt="" />
          </div>
        </div>
        <div className="text-center text-2xl MyClass1">{to_map[2].benefit}</div>
      </div>
    </div>
    </div>
    </>
  );
};
export default WhyItem;
