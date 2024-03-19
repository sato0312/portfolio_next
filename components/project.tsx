"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-0 last:mb-0 w-full my-10 sm:mx-10 sm:my-5 sm:m-1 h-100 sm:w-[25%] sm:mb-3"
    >
      <section className="portfolio">
        <a href={link} className="">

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className=""
          />
          <div className="blackcover">
              <p className="text-2xl font-semibold flex justify-center content-center viewwebsite">View Website</p>
                <ul className="flex flex-wrap self-center gap-2 z-10 tags">
                  {tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
          </div>
          </a>
      </section>
    </motion.div>
  );
}
