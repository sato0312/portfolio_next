import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import teeth from "@/public/teeth.png";
import dental from "@/public/dental.png";
import pet from "@/public/pet.png";
import bufferin from "@/public/bufferin.png";
import gift from "@/public/gift.png";
import tailordesign from "@/public/tailordesign.png";
import allbirds from "@/public/allbirds.png";
import nail from "@/public/nail.png";
import wedding from "@/public/wedding.png";
import watch from "@/public/watch.png";
import citizen from "@/public/citizen.png";
import croissant from "@/public/croissant.png";
import odaevold from "@/public/odaevold.png";
import tomatec from "@/public/tomatec.png";
import kumazawatax from "@/public/kumazawatax.png";
import atoms from "@/public/atoms.png";
import kuryugate from "@/public/kuryugate.png";


export const links = [
  {
    name: "ホーム",
    hash: "#home",
  },
  {
    name: "私について",
    hash: "#about",
  },
  {
    name: "プロジェクト",
    hash: "#projects",
  },
  {
    name: "スキル",
    hash: "#skills",
  },
  {
    name: "キャリア",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "富山県立大学",
    description:
      "情報システム工学科を卒業",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Web デベロッパー",
    location: "Valtech",
    description:
      "ウォーターエイドの定期寄付システムの大部分を設計・実装 \n-EasyJetのインタラクティブなグラフィカルフライト検索ツールの開発チームの一員として活動。  \n Avevaエンジニアリングのインタラクティブなドキュメント検索ツールを設計・構築。  \n Sophosの特注高性能プロキシおよびリダイレクトシステムの開発チームに参加。 \n   ダイソンのモバイルeコマースサイトの大部分を実装。",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2022",
  },
  {
    title: "Full-Stack デベロッパー",
    description:
      "会社を出て、現在までフリーランスとして働いています。Webサイト作成、Web系システム構築を行っています。",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js"],
    imageUrl: teeth,
    link: "https://ozaki-dcb.com/"
  },
  {
    title: "dental",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Wordpress", "Nginx", "PHP", "MySQL"],
    imageUrl: dental,
    link: "https://aihara-dental.jp/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["Wordpress", "Nginx", "PHP", "MySQL"],
    imageUrl:pet,
    link: "https://www.kanakubo-vet.com/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["Open Graph", "jquery"],
    imageUrl:bufferin,
    link: "https://www.bufferin.net/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["AWS", "PHP"],
    imageUrl:gift,
    link: "https://www.starbucks.co.jp/gift/holiday/index.html"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["Wordpress", "PHP", "MySQL"],
    imageUrl:tailordesign,
    link: "https://tailordesign.jp"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Shopify", "HTML", "core.js"],
    imageUrl:allbirds,
    link: "https://www.allbirds.com/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["PHP", "jQuery", "Open Graph"],
    imageUrl:nail,
    link: "https://rifare-nail.com/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Nginx", "AWS", "Day.js"],
    imageUrl:wedding,
    link: "https://theokuratokyo.jp/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Shopify", "Backbone.js", "Core.js", "jQuery"],
    imageUrl:watch,
    link: "https://blokwatches.com/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["ASP.net", "jQuery", "Slick", "Open Graph", "LazySizes"],
    imageUrl:citizen,
    link: "https://citizen.jp"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Wordpress", "PHP", "LottieFIle", "MySQL", "jQuery"],
    imageUrl:croissant,
    link: "https://j-croissant.jp/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["PHP", "jQuery", "Open Graph"],
    imageUrl:odaevold,
    link: "https://oadevold.com/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["PHP", "jQuery", "Open Graph", "Swiper"],
    imageUrl:tomatec,
    link: "https://tomatec.co.jp/recruit/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Wordpress", "Nginx", "PHP", "Open Graph", "Yoast SEO"],
    imageUrl:kumazawatax,
    link: "https://kumazawatax.com/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Sanity", "Shopify", "Remix", "Intercom"],
    imageUrl:atoms,
    link: "https://atoms.com/"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Vue", "Nuxt", "node.js", "STUDIO", "Firebase"],
    imageUrl:kuryugate,
    link: "https://www.kuryugate.com/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
