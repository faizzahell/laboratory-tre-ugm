"use client";
import { Laboratory } from "@/types/laboratory";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LaboratoryItem = ({ laboratory }: { laboratory: Laboratory | undefined }) => {
  if (!laboratory) {
    return <div>Data laboratorium tidak tersedia.</div>;
  }

  const { mainImage, title, metadata } = laboratory;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/laboratory/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/laboratory/laboratory-details`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default LaboratoryItem;
