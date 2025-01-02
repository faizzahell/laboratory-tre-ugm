import SidebarLink from "@/components/Rules/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules - Laboratorium Sistem Tenaga Listrik",
  description: "This is Docs page for Laboratorium Sistem Tenaga Listrik",
  // other metadata
};

export default function RulesPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                  Peraturan Laboratorium
                </h1>

                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  Peraturan ini bertujuan untuk menjaga keamanan, kenyamanan, dan efisiensi
                  kerja di dalam laboratorium. Mohon untuk membaca dan mematuhi aturan
                  berikut:
                </p>

                <ul className="list-disc pl-5 mt-4 text-body-color dark:text-body-color-dark text-base">
                  <li>Setiap pengguna wajib menggunakan kartu identitas saat memasuki laboratorium.</li>
                  <li>Dilarang membawa makanan atau minuman ke dalam laboratorium.</li>
                  <li>Selalu gunakan peralatan pelindung seperti sarung tangan dan masker jika diperlukan.</li>
                  <li>Hindari penggunaan alat-alat tanpa izin dari petugas laboratorium.</li>
                  <li>Laporkan segera jika terjadi kerusakan atau kecelakaan.</li>
                  <li>Jaga kebersihan dan kerapihan ruang laboratorium setelah selesai menggunakan.</li>
                </ul>

                <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                  Dengan memasuki laboratorium, Anda dianggap telah memahami dan menyetujui
                  peraturan yang berlaku. Terima kasih atas kerjasamanya.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
