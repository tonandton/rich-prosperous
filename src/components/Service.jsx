import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
import typeH from "../../public/HW-H.jpg";

const Service = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
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
            รับสร้างดูแลตั้งแต่ต้นจนจบด้วยระบบสำเร็จรูป Pre-Engineered
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
            <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
              <Tab>หัวข้อที่ 1</Tab>
              <Tab>หัวข้อที่ 2</Tab>
              <Tab>หัวข้อที่ 3</Tab>
              <Tab>หัวข้อที่ 4</Tab>
            </TabList>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    หัวข้อที่ 1
                  </h3>
                  <p className="mb-8">
                    Prefabricated Warehouse & Factory รับสร้างโกดัง
                    โรงงานสำเร็จรูปด้วยระบบ Pre-Engineered Building
                    และติดตั้งด้วยระบบ Bolt System มีโครงสร้างให้เลือกมากถึง 5
                    โครงสร้าง
                  </p>
                  <h4 className="text-xl font-medium text-black md-4">
                    Structure Type
                  </h4>
                  <ul className="list-disc list-insides space-y-3">
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
                    alt="meeting"
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
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    หัวข้อที่ 2
                  </h3>
                  <p className="mb-8">
                    แอลมอนด์ โง่เขลารากหญ้า เกย์โบรชัวร์เจไดวินเซ็กซ์
                    ติวซิตี้สเตเดียม งี้แคนูติ่มซำมิลค์เลคเชอร์
                    บอกซ์ภควัมบดีคอร์รัปชันเอ็นจีโอ
                    กระดี๊กระด๊าแหววรายชื่อแรลลีลาติน เบอร์รีคอร์รัปชัน
                    ซิตี้กุนซือ มิลค์ ทัวริสต์นายพรานคอนแท็ค
                    พงษ์ลิมูซีนไนท์มาร์ชโปรเจ็ค ฮาร์ดไฮเวย์ ซูโม่ สติกเกอร์โบว์
                    อัลตราพะเรอ
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
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    หัวข้อที่ 3
                  </h3>
                  <p className="mb-8">
                    ซูโม่เพรียวบางสมิติเวชหมั่นโถว พุทธภูมิ ราเมน
                    อีสต์เอ็นทรานซ์ซานตาคลอสสเตริโอธุรกรรม
                    พอเพียงสแล็กโซลาร์ฮิช็อป ไลน์ไคลแม็กซ์คอร์รัปชันกุนซือ
                    โอยัวะโปรเจคท์สปอต เย้วแดนเซอร์แจ๊กเก็ตยังไง
                    แฟ็กซ์บรรพชนทอร์นาโดทรูหล่อฮังก้วย
                    ปัจฉิมนิเทศสไตล์สเตเดียมเอาท์ดอร์บูม
                    เมจิคเทวาธิราชปิยมิตรสปาย อาข่าฉลุยตัวเองติ๋ม
                    จิ๊กโก๋เซอร์อิ่มแปร้ เห็นด้วยฮาลาลเหี่ยวย่นน็อกคอนโดมิเนียม
                    อุเทนแอโรบิคฟอร์มสะบึมเอสเปรสโซ ซีรีส์คันธาระ
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
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-blue-700 mb-4">
                    หัวที่ 4
                  </h3>
                  <p className="mb-8">
                    ซีดาน เวสต์ เทคโนแอ็กชั่นตังค์ สโลว์เทรนด์วานิลลา
                    เจ๊าะแจ๊ะเซอร์วิสฟลุค เธคสแตนดาร์ดเสือโคร่งไทม์
                    สามช่าเกมส์ไบเบิล คลิปโอเวอร์ช็อปเปอร์แลนด์
                    บู๊สุริยยาตรแฟร์แอสเตอร์ทอร์นาโด รีโมตซาดิสต์ซูฮก โนติส
                    ไฟลท์ไตรมาส แฟรี่แล็บ เอาท์ดอร์ฮิปโปบาร์บี้เยอร์บีราจิตเภท
                    เซ็กซ์แบตไมค์ง่าว มหภาคโปรเจ็กต์
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
              </motion.div>
            </TabPanel>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
