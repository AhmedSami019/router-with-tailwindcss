import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingCart = ({ pricing }) => {
  const { name, price, features, popular } = pricing;

  return (
    <div className="w-96 mx-auto card bg-base-300 shadow-sm">
      <div className="card-body flex flex-col justify-between">
        {popular && (
          <span className="badge badge-xs badge-warning">Most Popular</span>
        )}{" "}
        <div>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{name}</h2>
            <span className="text-lg">{price}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-2 items-center">
                {" "}
                <CircleCheckBig size={10} color="blue"></CircleCheckBig>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <button className="btn btn-primary btn-block ">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCart;
