import React from "react";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";
import Head from "../components/common/Head";
import Layout from "../components/layout/Layout";

const ContactUs = () => {
  const contactData = [
    {
      id: 1,
      title: "Email Us",
      info: "Interactively grow empowered for process-centric total linkage.",
      icon: FiMail,
      contact: "huulai2510@gmail.com",
    },
    {
      id: 2,
      title: "Call Us",
      info: "Distinctively disseminate focused solutions clicks-and-mortar ministate.",
      icon: FiPhoneCall,
      contact: "+84 97 111 2946",
    },
    {
      id: 3,
      title: "Location",
      info: "109 Van Tien Dung, Quy Nhon",
      icon: FiMapPin,
      contact: "",
      mail: false,
    },
  ];
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <Head title="Contact us" />
        <div className="grid md:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8">
          {contactData.map((data) => (
            <div key={data.id} className="border p-10 rounded-lg text-center">
              <span className="flex justify-center text-4xl text-subMain mb-4">
                <data.icon />
              </span>
              <h5 className="text-xl mb-2 font-bold">{data.title}</h5>
              <p className="mb-0 text-base opacity-90 leading-7">
                <a href={`mailto:${data.contact}`} className="text-main">
                  {data.contact}
                </a>{" "}
                {data.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
