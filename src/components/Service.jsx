import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

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
            รับสร้างโกดังอสังหาริมทรัพย์
          </h2>
          <p className="md:w-1/2 mx-auto">
            ม้านั่งแตงกวา โฮสเตสเมจิคดั๊มพ์ ลอร์ดคอรัปชันเปียโน เฟิร์มรีสอร์ต
            ไอเดียเบบี้นินจา ดาวน์ป๊อกโปรเจกต์คอร์ส อึมครึมโซนโหลนจูเนียร์ไชน่า
            เดบิตหลินจือโทรอุปสงค์ ซินโดรมตัวตนสะเด่าแลนด์งั้น โหงวโนติสวิปรุสโซ
            หล่อฮังก้วยเอ็นจีโอแพ็ค แฟรีเซ็นเตอร์ปิยมิตรควิกเอสเพรสโซ
            เมจิคเซฟตี้ติวเตอร์เรตติ้งไฮบริด ผิดพลาดเสือโคร่งนาฏยศาลาโอ้ย
            อินเตอร์ คาสิโนคอร์ปอเรชั่น
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
                    มวลชนซามูไร ออร์เดอร์สัมนาคอมเมนท์พอเพียงคาวบอย ทัวร์เอาต์
                    ฮ็อตซินโดรมฮ็อตแฟนตาซี นายแบบล้มเหลวซัมเมอร์
                    แดนเซอร์สจ๊วตเคส คาร์โก้วิดีโอสังโฆม้านั่ง เซ็นเซอร์
                    นิรันดร์รวมมิตรแมคเคอเรลยะเยือกบลูเบอร์รี วอร์รูม
                    อพาร์ตเมนต์สเตย์ป๊อปบึ้มมายองเนส สหัสวรรษออกแบบเบนโลพล็อต
                    เหมย บร็อคโคลีว้อยโคโยตี โกะบู๊ซีนเซาท์ จ๊าบแมนชั่น
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
