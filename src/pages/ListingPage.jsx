import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../assets/hero.svg";

const ListingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] flex bg-celestial-blue h-[416px]">
        <div className="w-1/2 p-6">
          <h1 className="text-3xl w-[518px] pt-[63px] text-white font-bold mb-4">
            Hackathon Submissions
          </h1>
          <p className="text-white text-lg mb-4 pt-[15px]">
            Lorem ipsum dolor sit amet consectetur. Urna cursus amet
            pellentesque in parturient purus feugiat faucibus. Congue laoreet
            duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus
            nec vitae.{" "}
          </p>
          <button className="bg-celestial-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload Submission
          </button>
        </div>
        <div class="w-1/2 p-6">
          <img className="w-[199.89px] h-[300px]" src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
