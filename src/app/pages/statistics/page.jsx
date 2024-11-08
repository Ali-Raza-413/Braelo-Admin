"use client";
import React from "react";
import UserStatistics from "@/app/components/statistics/UserStatistics";
import BusinessStatistics from "@/app/components/statistics/BusinessStatistics";
import ListingCategorystats from "@/app/components/statistics/ListingCategorystats";
import BackButton from "@/app/components/BackButton";

const Statistics = () => {
  return (
    <>
      <div className="p-5">
        <div className="flex items-center gap-2">
          <BackButton/>
          <h3 className="text-[#78828A] text-[24px] font-[500] ">
          Statistics
      </h3>
        </div>
        </div>
        <div className="flex flex-col gap-5">
        <div>
          <UserStatistics />
      </div>
        {/* Reduce the gap */}
        <div>
          <BusinessStatistics />
        </div>
        <div >
          <ListingCategorystats />
        </div>
        </div>
    </>
  );
};

export default Statistics;
