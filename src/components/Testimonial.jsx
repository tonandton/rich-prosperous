import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";

const Testimonial = () => {
  const testimoials = [
    {
      name: "Jane Doe",
      location: "New York, NY",
      reviews:
        "This service has been life-changing for me. The mental wellness resources and personalized support have make a huge differnce in my dialy life. Higly recommended!",
      image: "",
    },
    {
      name: "John Smith",
      location: "Los Angles, CA",
      review:
        "I've tried many wellness programs, but this one stands out. The export webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
      image: "",
    },
  ];

  return (
    <div id="testimonial" className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3">
            Prefect for Small & Large Brands
          </h2>
          <p className="text-lg mb-12 md:w-1/2 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            nam in explicabo a quas dignissimos totam. Repellat,
          </p>
        </div>

        <div>
          {testimoials.map((testimoial, index) => (
            <div key={index}>
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsFillChatQuoteFill className="size-12 bg-blue-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
