"use client"
import { useEffect } from 'react';
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Script from 'next/script';
import Head from 'next/head';

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.prd.heyflow.com/builder/widget/latest/webview.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Ensure the flow-id is correct and matches your Heyflow setup */}
      <div id="heyflow-wrapper">
      <heyflow-wrapper flow-id="solution" dynamic-height scroll-up-on-navigation style-config='{"width": "800px"}'></heyflow-wrapper>
      </div>

    </>
  );
};

export default CallToAction;