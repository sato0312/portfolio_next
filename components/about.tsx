"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>私について</SectionHeading>
      <p className="mb-3 text-lg font-medium ">
        ご覧頂きありがとうございます。
        </p>
        <p>IT業界で<span className="font-medium">7年</span>以上の経験があります。
        <span className="font-medium">Webサイト作成、Web系システム</span>構築を得意としてます。</p>
        <p>Webサイトでは会員管理、EC、マッチングサイト、マーケットプレイスのデザイン作成からコーディング、WordPress構築まで対応可能です。
        HTML/CSSのみの静的サイトはもちろん、アニメーションのあるWebサイトを作成することが可能です。
        </p>
        <p>
        Web系システムの構築において、フロントエンドとバックエンドの両方に精通しており、ユーザーインターフェースからデータベースまで幅広いスキルを持っています。プロジェクトでのチームワークやコミュニケーション能力も高く評価されています。テストと品質管理にも重点を置き、高品質なウェブシステムを提供することに注力しています。柔軟性と効率性を考慮しながら、使いやすく安全なウェブシステム開発に参加します。
        </p>
        <p>
        業務の価格や難易度が基本的な問題ではなく、<span className="font-medium">顧客の最大の満足</span>を醸し出し出せる見事結果が優先だと思いながら、すべての仕事を丁寧な姿勢で行っています。
        作って終わりではなく、貴社事業の発展に少しでも力になれるような行動と提案します。
        Crowdworksの出会いを機に継続的なお付き合いができればと思っております。よろしくお願いします。
        </p>
    </motion.section>
  );
}
