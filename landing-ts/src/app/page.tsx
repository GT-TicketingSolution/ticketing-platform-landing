import type { Metadata } from "next";
import { PAGE_TITLES, META_DESCRIPTIONS, SITE_METADATA } from "@/constant/metaConstant";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: PAGE_TITLES.HOME,
  description: META_DESCRIPTIONS.HOME,
  icons: SITE_METADATA.icons,
};

export default function Home() {
  return <HomePage />;
}
