"use client";
import { useState } from "react";
import { Input } from "antd";
import { Button, Flex } from "antd";
import { ConvertToUnicode } from "@/components/Features/unicode/bijoy2uni";
import { ConvertToASCII } from "@/components/Features/unicode/uni2bijoy";

const { TextArea } = Input;


const Features = (props) => {
  const [textValue1, setTextValue1] = useState("");
  const [textValue2, setTextValue2] = useState("");

  const handleTextChange1 = (e) => {
    setTextValue1(e.target.value);
  };

  const convertToUnicode = (e) => {
    setTextValue2(ConvertToUnicode("bijoy", textValue1));
  };
  const convertToASCII = (e) => {
    setTextValue2(ConvertToASCII("bijoy", textValue1));
  };

  return (
    <>
      <section id="features-unicode"
               className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[150px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp mx-auto max-w-[800px] text-center" data-wow-delay=".2s">
              <h1
                className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {props.data.title}
              </h1>
              <p
                className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  {props.data.description}</p>
            </div>
          </div>
        </div>
        <div className="features-unicode">
          <div className="responsive-flex">
            <div className="flex-item"><TextArea value={textValue1}
                                                 onChange={handleTextChange1}
                                                 rows={4} placeholder="maxLength is 6" maxLength={6} /></div>
            <div className="flex-item"><TextArea rows={4}
                                                 value={textValue2}
                                                 placeholder="maxLength is 6" maxLength={6} /></div>
          </div>
          <Flex gap="small" wrap="wrap" className="operation">
            <Button type="primary" onClick={convertToUnicode}>Convert Unicode</Button>
            <Button onClick={convertToASCII}>Convert Bijoy </Button>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Features;
