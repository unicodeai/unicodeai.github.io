import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Unicode from "@/components/Features/unicode/unicode";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free and SEO-friendly blog template for programmer",
  description: "Free and SEO-friendly blog template supports multiple languages to help you create an amazing and diverse blog experience!"
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
