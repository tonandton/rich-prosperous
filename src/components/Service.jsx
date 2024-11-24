import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
import typeH from "../../public/typeH.jpg";
import modular from "../../public/modular-house.jpg";
import realEstate from "../../public/realestate.jpg";
import precast from "../../public/precast.jpg";

const Service = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-1"
        >
          <h2 className="text-4xl font-bold font-secondary text-black">
            Rich Prosperous Service
          </h2>
          <p className="md:w-1/2 mx-auto">
            บริการครบวงจร ให้คำปรึกษา แนะนำ ออกแบบโกดัง โรงงานเบื้องต้น
            พร้อมลงพื้นที่หน้างานฟรี
            ทางเราร่วมวางแผนการก่อสร้างให้สอดคล้องกับระบบการผลิตของแต่ละโกดังหรือโรงงาน
            มีบริการเขียนแบบขออนุญาตด้วยสถาปนิกมืออาชีพ
            มีระบบใบเสนอราคางบประมาณไม่บานปลาย
            รับสร้างดูแลตั้งแต่ต้นจนจบด้วยระบบสำเร็จรูป PRE-Engineered
          </p>
        </motion.div>
        {/* service category */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="py-12 md:w-4/5 mx-auto"
        >
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-4 gap-4 sm:gap-1 md:text-xs">
              <Tab>Prefabricated Warehouse</Tab>
              <Tab>Modular House </Tab>
              <Tab>Real Estate</Tab>
              <Tab>Precast </Tab>
            </TabList>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-4 mt-2"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-6 font-secondary">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Prefabricated Warehouse & Factory
                  </h3>
                  <p className="mb-3">
                    รับสร้างโกดัง โรงงานสำเร็จรูปด้วยระบบ PRE-Engineered
                    Building และติดตั้งด้วยระบบ Bolt System
                    มีโครงสร้างให้เลือกมากถึง 5 โครงสร้าง
                  </p>
                  <h4 className="text-xl font-medium text-black mb-2">
                    Structure Type
                  </h4>
                  <ul className="list-disc list-insides space-y-1">
                    <li>Build-up beam โครงสร้างเหล็กขนาดใหญ่</li>
                    <li>Wide Flange โครงสร้างเหล็ก H-Beam </li>
                    <li>H-Cruve โครงสร้างเหล็ก H-Beam หลังคาโค้ง</li>
                    <li>H-Cold form โครงสร้างเสา H-Beam หลังคาโครงถัก</li>
                    <li>Galvanized โครงสร้างเหล็กกล่องกัลวาไนซ์</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={typeH}
                    alt="typeH"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-4 mt-2"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Modular House
                  </h3>
                  <p className="mb-3">
                    รับสร้างบ้านสำเร็จรูป
                    วัสดุที่ใช้ในการสร้างเป็นวัสดุกันความร้อน แข็งแรง
                    หลังคาและผนังเป็น EPS
                    มีน้ำหนักเบาสามารถติดตั้งและประกอบใหม่ได้ไม่จำกัดจำนวนครั้ง
                    สามารถออกแบบให้เหมาะสมกับความต้องการขอลูกค้าได้
                  </p>
                  <h4 className="text-xl font-medium text-black mb-2">
                    Modular Style
                  </h4>
                  <ul className="list-disc list-insides space-y-1">
                    <li>American Style บ้านสำเร็จรูปสไตล์อเมริกัน</li>
                    <li>Office Style สำนักงานสำเร็จรูป</li>
                    <li>Sanitary Room ห้องน้ำสำเร็จรูป </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={modular}
                    alt="modular"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-4 mt-2"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Real Estate
                  </h3>
                  <p className="mb-3">
                    รับดูแลและบริหารโครงการโกดังเช่าสำหรับผู้ที่มีที่ดินเปล่าแต่ไม่ได้มีการใช้สอย
                    ทางเราพร้อมดูแลให้ตั้งแต่ต้นน้ำ จนถึงปลายน้ำ
                    มากไปกว่านั้นทางเรายังมีบริการอสังหาริมทรัพย์เพื่อขาย
                    และให้เช่ามากกว่า 30 โครงการ
                  </p>
                  {/* <h4 className="text-xl font-medium text-black md-4">
                    Benefits
                  </h4> */}
                  <ul className="list-disc list-insides space-y-1">
                    <li>บริหารโครงการโกดังให้เช่าสำหรับนักลงทุน</li>
                    <li>
                      โครงการโกดังเช่ากรุงเทพมหานคร และปริมณฑล EEC รวมกว่า 20
                      โครงการ{" "}
                    </li>
                    <li>
                      โครงการอสังหาริมทรัพย์ฝากขาย-เช่า มากกว่า 10 โครงการ
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={realEstate}
                    alt="realEstate"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-4 mt-2"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    Precast
                  </h3>
                  <p className="mb-3">
                    จำหน่ายชิ้นส่วนคอนกรีตสำเร็จรูป
                    พร้อมบริการให้คำปรึกษาแนะนำการใช้
                    ติดตั้งชิ้นส่วนคอนกรีตสำเร็จของแต่ละพื้นที่หน้างาน
                    คอนกรีตสำเร็จรูปได้รับการตรวจมาตราฐานก่อนออกจำหน่าย
                    เพื่อช่วยลดระยะเวลาในการก่อสร้างและติดตั้งงานพื้นงานฐานราก
                  </p>
                  <h4 className="text-xl font-medium text-black mb-2">
                    {/* ตัวอย่างสินค้า Precast Concrete */}
                    Precast Concrete
                  </h4>
                  <ul className="list-disc list-insides space-y-1">
                    <li>ฐานรากสำเร็จรูป</li>
                    <li>คานคอดิน</li>
                    <li>รั้วสำเร็จรูป</li>
                    <li>กำแพงกันดิน</li>
                    <li>เสารั้วสำเร็จรูป</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={precast}
                    alt="precast"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
