import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Unicode from "@/components/Features/unicode/unicode";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "unicode to bijoy converter ",
  description: "Encoding changes between unicode and bijoy"
};

export default function Home() {
  let data = {
    "title": "unicode to bijoy converter",
    "description": "Helps you convert between Unicode and Bijoy via: unicode to bijoy converter ."
  }
  let FeaturesData = [{
    title: "unicode convert bijoy",
    paragraph: "This converter will help you convert Unicode text to bijoy Ascii."
  },
  {
    title: "bijoy convert unicode",
    paragraph: "Bijoy to Unicode converter is the best and most accurate encoder in worldwide."
  },
  {
    title: "Feature-rich",
    paragraph: "Unicode Converter can convert Unicode to multiple encodings, such as: UTF-8, UTF-16,and UTF-32 formats"
  }]

  return (
    <>
      <ScrollUp />
      <Unicode data={data} />
      <Features
        paragraph="Why choose unicode to bijoy online converter?"
        data={FeaturesData} />
    </>
  );
}
