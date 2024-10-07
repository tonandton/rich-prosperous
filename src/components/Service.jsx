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
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    Couple Counseling
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consectetur incidunt eligendi eum libero sequi repellendus,
                    culpa quia ullam aliquam quas atque ducimus nostrum commodi
                    qui adipisci! Quae officia similique voluptatem!
                  </p>
                  <h4 className="text-xl font-medium text-black md-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-insides space-y-3">
                    <li>Understring Relationship Dynamics</li>
                    <li>Understring Relationship Dynamics</li>
                    <li>Understring Relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="meeting"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    Parenting Skills
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consectetur incidunt eligendi eum libero sequi repellendus,
                    culpa quia ullam aliquam quas atque ducimus nostrum commodi
                    qui adipisci! Quae officia similique voluptatem!
                  </p>
                  <h4 className="text-xl font-medium text-black md-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-insides space-y-3">
                    <li>Understring Relationship Dynamics</li>
                    <li>Understring Relationship Dynamics</li>
                    <li>Understring Relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661302828763-4ec9b91d9ce3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="meeting"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    Feeling Stuck
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consectetur incidunt eligendi eum libero sequi repellendus,
                    culpa quia ullam aliquam quas atque ducimus nostrum commodi
                    qui adipisci! Quae officia similique voluptatem!
                  </p>
                  <h4 className="text-xl font-medium text-black md-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-insides space-y-3">
                    <li>Understring Relationship Dynamics</li>
                    <li>Understring Relationship Dynamics</li>
                    <li>Understring Relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661962911608-ea55ac7785da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="meeting"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    Self-Confidence
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consectetur incidunt eligendi eum libero sequi repellendus,
                    culpa quia ullam aliquam quas atque ducimus nostrum commodi
                    qui adipisci! Quae officia similique voluptatem!
                  </p>
                  <h4 className="text-xl font-medium text-black md-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-insides space-y-3">
                    <li>Understring Relationship Dynamics</li>
                    <li>Understring Relationship Dynamics</li>
                    <li>Understring Relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="meeting"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Service;
