import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const Pricing = () => {
  return (
    <div className="max-w-[1200px] m-auto p-10 sm:p-0">
      <h1 className="text-lg font-bold mb-5 text-center sm:text-left text-white" >
        Pricing
      </h1>
      <p className="text-primary text-sm w-full sm:w-[400px]  text-center sm:text-left">
        Take a look at some of our recent projects to see how we&apos;ve helped
        businesses like yours succeed online.
      </p>
      <div className="mt-10 p-0 sm:p-10   bg-transparent rounded-xl gap-10 sm:gap-0 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between ">
        <div
          className="p-10 w-full sm:w-auto  text-primary sm:bg-transparent transition-all duration-300 border border-[#2B2B2B] group hover:bg-blue hover:text-white rounded-xl"
          style={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 className="text-md font-bold mb-5">
              $20<sub className="text-sm">/month</sub>
            </h1>
            <h3 className="text-[28px] mb-3">Starter</h3>
            <p className="text-sm mb-3">Perfect for small businesses.</p>
            <div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                Customizable templates

              </div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                Basic analytics
              </div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                Email support
              </div>
            </div>
          </div>
          <button className="px-10 mt-10 p-3 group-hover:bg-white group-hover:text-blue bg-blue text-white rounded-full">
            Choose plan
          </button>
        </div>

        <div
          className=" p-10  transition-all duration-300 border border-[#2B2B2B] group hover:bg-white text-primary hover:text-blue w-full sm:w-auto   rounded-xl  "
          style={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 className="text-md font-bold mb-5">
              $50<sub className="text-sm">/month</sub>
            </h1>
            <h3 className="text-[28px] mb-3">Professional</h3>
            <p className="text-sm mb-3">Ideal for growing businesses.</p>
            <div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                Advanced analytics
              </div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                Priority support
              </div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                CRM integration
              </div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                24/7 live chat
              </div>
              <div className="text-sm flex  ">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                Multi-step Zapps
              </div>
            </div>
          </div>
          <button className="px-10 mt-10 p-3 group-hover:bg-blue group-hover:text-white bg-blue text-white  rounded-full">
            Choose plan
          </button>
        </div>

        <div
          className="p-10 w-full sm:w-auto  text-white  bg-transparent  transition-all duration-300 border border-[#2B2B2B] group hover:bg-blue hover:text-white  rounded-xl"
          style={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 className="text-md font-bold mb-5">
              $100<sub className="text-sm">/month</sub>
            </h1>
            <h3 className="text-[28px] mb-3">Enterprise</h3>
            <p className="text-sm mb-3"> For established businesses.</p>
            <div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                Custom solutions
              </div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
               Account manager
              </div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                API access
              </div>
              <div className="text-sm flex mb-2">
                <IoCheckmarkCircle className="me-4" size={"24px"} />
                Premium support
              </div>
            </div>
          </div>
          <button className="px-10 mt-10 p-3 group-hover:bg-white group-hover:text-blue bg-blue text-white rounded-full">
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
