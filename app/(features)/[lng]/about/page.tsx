
import { Metadata } from "next";
import React from 'react';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { i18n, languages } from '@/lib/i18n/i18n'


export const metadata: Metadata = {
    title: "About Page | Free Next.js Template for Startup and SaaS",
    description: "This is About Page for Startup Nextjs Template",
    // other metadata
};
interface LangPageProps {
    params: {
        lng: string
    }
}

export async function generateStaticParams(): Promise<LangPageProps["params"][]> {
    return Object.keys(languages).map((l) => ({ lng: l }))
}


export default async function AboutPage({ params }: LangPageProps) {
    i18n.locale(params.lng);
    return (
        <>
            <Breadcrumb
                pageName="About Page"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            />
            <AboutSectionOne />
            <AboutSectionTwo />

        </>
    );
};
