import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";

const Service = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-secondary text-black">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod
            sint repudiandae. Corporis unde dicta tempore numquam nihil
            doloribus sequi, aut corrupti iste, ullam ab alias aspernatur
            nesciunt eum quisquam!
          </p>
        </div>
        {/* service category */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </TabList>
            <TabPanel>
              <h2>Any content 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sint exercitationem facere consequatur asperiores fuga! Error
                doloribus corrupti hic, expedita, maxime dicta corporis eligendi
                eveniet qui atque tempore maiores consectetur!
              </p>
            </TabPanel>
            <TabPanel>
              <h2>Any Content 2</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit quisquam iste adipisci alias placeat consectetur,
                laborum fugiat vel natus? Quo rerum voluptas ea a illum modi
                porro molestias corrupti hic.
              </p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Service;
//
