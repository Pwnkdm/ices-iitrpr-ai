import React from "react";
import "./feeStructure.css";

export const FeeStructure: React.FC = () => {
  return (
    <div className="feeScomponent_Parent">
      <div className="feeHeading">
        <span>Fee</span> <span> Structure</span>
      </div>
      <br></br>
      <div className="feesTableHeadingRows">
        <div className="rows-eachFees">
          <div className="columnOne">
            <div>Registration Fees</div>
            <span>(Non-Refundable)</span>
          </div>
          <div className="columnTwo">INR 500</div>
        </div>

        <div className="rows-eachFees">
          <div className="columnOne">
            <div>Program Fees</div>
            <span>(Non-Refundable)</span>
          </div>
          <div className="columnTwo">INR 60,000</div>
        </div>
        <div className="rows-eachFees">
          <div className="columnOne">Total</div>
          <div className="columnTwo">INR 60,500</div>
        </div>
        <div className="rows-eachFees feetermparent"></div>
      </div>
    </div>
  );
};
