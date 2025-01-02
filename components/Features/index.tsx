"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Fitur Laboratorium Mulai ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Judul Seksi Mulai --> */}
          <SectionHeader
            headerInfo={{
              title: "FITUR LABORATORIUM",
              subtitle: "Layanan dan Fasilitas Laboratorium Sistem Tenaga Listrik",
              description: `Laboratorium Sistem Tenaga Listrik menyediakan layanan praktikum dan fasilitas unggulan untuk mendukung pembelajaran dan penelitian di bidang sistem tenaga listrik.`,
            }}
          />
          {/* <!-- Judul Seksi Selesai --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Item Fitur Mulai --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Item Fitur Selesai --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Fitur Laboratorium Selesai ===== --> */}
    </>
  );
};

export default Feature;
