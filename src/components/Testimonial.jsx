import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";

const Testimonial = () => {
  const testimoials = [
    {
      name: "Jane Doe",
      location: "New York, NY",
      review:
        "This service has been life-changing for me. The mental wellness resources and personalized support have make a huge differnce in my dialy life. Higly recommended!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John Smith",
      location: "Los Angles, CA",
      review:
        "I've tried many wellness programs, but this one stands out. The export webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div id="testimonial" className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3">
            Prefect for Small & Large Brands
          </h2>
          <p className="text-lg mb-12 md:w-1/2 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            nam in explicabo a quas dignissimos totam. Repellat,
          </p>
        </div>

        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {testimoials.map((testimoial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1 shadow-lg"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 ">
                <BsFillChatQuoteFill className="size-12 text-blue-700" />
              </div>
              <div className="flex flex-col space-y-3 mb-4">
                <p className="text-lg mb-2">{testimoial.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimoial.image}
                    alt="reviewer image"
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimoial.name}</p>
                    <p className="text-gray-600">{testimoial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
