import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Nextjs Template",
  description: "This is Contact Page for Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="This is Contact Page for Nextjs Template."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
