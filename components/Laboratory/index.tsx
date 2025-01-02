import React from "react";
import SectionHeader from "../Common/SectionHeader";
import LaboratoryItem from "./LaboratoryItem";
import LaboratoryData from "./laboratoryData";

const Laboratory = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `LABORATORIUM`,
              subtitle: `Daftar Laboratorium yang Sering Digunakan`,
              description: `Berikut adalah berbagai laboratorium yang kami sediakan untuk mendukung kegiatan pendidikan, penelitian, dan pengabdian masyarakat.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {LaboratoryData.slice(0, 3).map((laboratory, key) => (
            <LaboratoryItem laboratory={laboratory} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Laboratory;
