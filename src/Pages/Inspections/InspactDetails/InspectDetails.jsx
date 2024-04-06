import React from "react";
import image from "../../../../src/assets//inspect/1.png";
import avatar from "../../../../src/assets//inspect/avatar.png";
import InspectDetailsTab from "./InspectDetailsTab";

const InspectDetails = () => {
  
  return (
    <div className="bg-white mt-5">
      {/* ----------------------inspect-section------------------------ */}
      <div className="inspect-details-main">
        <h1 className="uppercase py-10">inspect</h1>
      </div>
      {/* ----------------------account-owner-section------------------------ */}
      <div className="grid grid-cols-3 gap-5 py-10">
        <div className="col-span-1">
          <img src={image} alt="" />
        </div>
        <div className="col-span-2">
          <div className="text-end">
            <p className="warning-notification">NO WARNING</p>
          </div>
          <div>
            <h3>Jao Pakhi Bolo Tare Lofi X The Weeknd</h3>
            <ul>
              <li>Release id : 2158584</li>
              <li>Payee id : 480277</li>
            </ul>
            <div className="flex items-center">
              <img className="avater-image-inspect" src={avatar} alt="" />
              <p className="ps-3 underline">AB Media Center</p>
            </div>
            <div>
              <p>Account Owner : abmusicstation90@gmail.com</p>
              <p>Release Created by :legal@ansmusiclimited.com</p>
              <p>Sale Start Date:As soon as possible</p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------tab-section------------------------ */}
      <div>
        <InspectDetailsTab></InspectDetailsTab>
      </div>
    </div>
  );
};

export default InspectDetails;
