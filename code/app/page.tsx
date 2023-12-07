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
  return (
    <>
      <ScrollUp />
      <Unicode />
      <Features />
    </>
  );
}
