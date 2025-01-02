import LaboratoryData from "@/components/Laboratory/laboratoryData";
import LaboratoryItem from "@/components/Laboratory/LaboratoryItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory - Laboratorium Sistem Tenaga Listrik",
  description: "This is Laboratory page for Laboratorium Sistem Tenaga Listrik",
  // other metadata
};

const LaboratoryPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {LaboratoryData.map((post, key) => (
              <LaboratoryItem key={key} laboratory={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default LaboratoryPage;
