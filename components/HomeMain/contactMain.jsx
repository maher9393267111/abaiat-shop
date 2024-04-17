"use client";
import React, { useRef, useState } from "react";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import HoverButton from "./reusableComponent/hoverButton";

// import { socialMediaRedirect } from "@/constants";

import { useTranslation } from "next-i18next";
import { Zoom ,Fade } from "react-awesome-reveal";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation("common");

  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const mobileRef = useRef(null);
  const descriptionRef = useRef(null);

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const name = nameRef?.current?.value;
    const phone = mobileRef?.current?.value;
    const email = mailRef?.current?.value;
    const desc = descriptionRef?.current?.value;

    console.log(name, phone, email, desc);

    // pushing data to google sheet

    // const formDatab = new FormData(formEle);
    const formDatab = formEle;
    console.log(formDatab, "body");

    const data = {
      name: name,
      phone: phone,
      email: email,
      desc: desc,
    };

    setLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        name: name,
        email: email,
        desc: desc,

        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        alert("Thank you for contacting us. We will get back to you soon.");
        // clear the form
        try {
          nameRef.current.value = "";
          mailRef.current.value = "";
          if (mobileRef.current) mobileRef.current.value = "";
          descriptionRef.current.value = "";
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  return (
    <div
  
      className="w-full h-fit arabic md:h-[650px] my-12 text-black px-10 !bg-white"
      id="contactUs"
    >
      
      <div className="m-auto w-[90%] !bg-white h-full flex flex-col md:flex-row items-center justify-center rounded-2xl">
      
    


       
        <div className="h-fit md:h-full w-full md:w-[90%] gil-reg">
          <div className="h-full w-full m-auto p-4 md:p-8">
          {/* <Fade direction="right"> */}
            <form
              className="flex flex-col items-center justify-between form"
              onSubmit={(e) => Submit(e)}
            >
              <div className="flex flex-co items-star  w-[99%] md:w-[99%]">
                
              <h1 className="arabic w-full text-3xl md:text-4xl font-semibold shimmer  text-center ">
          {t("contactTitle")}
        </h1>
                
              </div>
              <div className="w-[99%] flex flex-row items-center justify-between pt-6">
           
                  <div className="relative mb-6 w-[100%]">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <AiOutlineUser />
                    </div>
                    <input
                      name="name"
                      ref={nameRef}
                      required={true}
                      type="text"
                      id="input-group-1"
                      className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                      placeholder={t("name")}
                    />
                  </div>
                
                {/* <div className="relative mb-6 w-[45%]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineUser />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                    placeholder="Last name"
                  />
                </div> */}
              </div>
              {/* <Fade bottom> */}
                <div className="relative mb-6 w-[99%]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineMail />
                  </div>
                  <input
                    name="Email"
                    ref={mailRef}
                    required={true}
                    type="email"
                    id="input-group-1"
                    className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                    placeholder={t("email")}
                  />
                </div>
              {/* </Fade> */}
              {/* <Fade bottom> */}
                <div className="relative mb-6 w-[99%]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineMobile />
                  </div>
                  <input
                    name="Phone"
                    ref={mobileRef}
                    type="text"
                    id="input-group-1"
                    className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                    placeholder={t("phone")}
                  />
                </div>
              {/* </Fade> */}
              {/* <Fade bottom> */}
                <div className="relative mb-6 w-[99%]">
                  <textarea
                    name="Message"
                    ref={descriptionRef}
                    required={true}
                    rows={5}
                    type="text"
                    id="input-group-1"
                    className="outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 "
                    placeholder={t("message")}
                  />
                  <input
                    hidden
                    type="date"
                    name="Date"
                    defaultValue={new Date().toISOString().substring(0, 10)}
                  />
                </div>
              {/* </Fade> */}

              {/* <Fade bottom> */}
                <div className="flex flex-row justify-end w-[99%]">
                  <button className="gil-reg  lg:text-lg flex flex-row items-center justify-center hover:bg-gold hover:text-white  min-w-[120px] lg:min-w-[140px] lg:min-h-[50px] min-h-[40px] mt-4   border shimme !bg-gold border-gold w-full h-12 !rounded-xl text-xl text-white">
                    {t("send")}
                  </button>
                  {/* <HoverButton
                    text="Submit"
                    type="submit"
                    className="w-full h-12 rounded-xl text-2xl"
                    loading={loading}
                  /> */}
                </div>
              {/* </Fade> */}
            </form>
{/* </Fade> */}


          </div>
        </div>




      </div>
      
    </div>
  );
}
