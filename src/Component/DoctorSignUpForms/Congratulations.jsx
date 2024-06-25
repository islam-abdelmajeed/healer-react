import React from "react";

const Congratulations = () => {
  return (
    <div className="flex items-center flex-col justify-center space-y-2">
      <img
        src="../../../public/assets/icon-park-solid_success.png"
        alt="icon-park-solid_success"
      />
      <p
        className="text-4xl font-bold"
        style={{
          color: "#1aa182",
        }}
      >
        Congratulations You Finished
      </p>
      <p className="text-3xl font-bold">Now ,we check your license</p>
      <p className="text-xl font-semibold">Wait Email from us after 24 hours</p>
    </div>
  );
};

export default Congratulations;
