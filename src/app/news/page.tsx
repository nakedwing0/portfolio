import type { Metadata } from "next";
import { NewsClient } from "./NewsClient";

export const metadata: Metadata = {
  title: "뉴스",
  description: "벤처투자·스타트업 생태계의 주요 소식과 정책 변화를 모아 전달합니다.",
};

export default function NewsPage() {
  return <NewsClient />;
}
