import React from "react";
import NewsSection from "../commonSections/NewsSection";
import RequestFormCard from "@/components/cards/RequestFormCard";
import { requestList } from "@/constDatas/requestList";

const PoliciesSection = () => {
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div>
            <div className="flex flex-col gap-[32px] lg:gap-[44px]">
              <div className="pt-[12vh] lg:pt-[8vh]">
                <div className="text-center">
                  <h3 className="font-bold text-[20px]">{`Home > About`}</h3>
                  <h3 className="font-bold text-[36px] text-[#2C2B4B]">
                    Policies and Procedure
                  </h3>
                </div>                
              </div>
              <div>
              <div className="flex flex-col gap-5">
                {requestList?.map((item, index) => (
                  <RequestFormCard
                    key={index}
                    icon={item?.icon}
                    menuTitle={item?.menuTitle}
                    slug={`/policies/${item?.slug}`}
                    subTitle={item?.subTitle}
                    btnTitle={"View"}
                  />
                ))}
              </div>
              </div>
            </div>
          </div>
          <div>
            <NewsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliciesSection;
