import { Laboratory } from "@/types/laboratory";
import {
  lab
} from "@/public/images/laboratory"

const LaboratoryData: Laboratory[] = [
  {
    _id: 1,
    mainImage: lab,
    title: "G101 Layanan Mesin Listrik",
    metadata: "Laboratorium untuk layanan penelitian dan pengujian mesin listrik.",
  },
  {
    _id: 2,
    mainImage: lab,
    title: "G102 Layanan Ketenagaan Listrik",
    metadata: "Laboratorium yang mendukung studi dan pengujian sistem ketenagaan listrik.",
  },
  {
    _id: 3,
    mainImage: lab,
    title: "G103 Layanan Listrik Dasar",
    metadata: "Laboratorium untuk pembelajaran dan pengujian dasar-dasar listrik.",
  },
  {
    _id: 4,
    mainImage: lab,
    title: "G104 Layanan Instalasi Listrik",
    metadata: "Fasilitas untuk simulasi dan praktik instalasi listrik.",
  },
  {
    _id: 5,
    mainImage: lab,
    title: "G201 Layanan Telekomunikasi",
    metadata: "Laboratorium untuk pengujian dan penelitian di bidang telekomunikasi.",
  },
  {
    _id: 6,
    mainImage: lab,
    title: "G204 Layanan Robotika & Kendali",
    metadata: "Fasilitas untuk studi robotika dan sistem kendali otomatis.",
  },
  {
    _id: 7,
    mainImage: lab,
    title: "G205 Layanan Otomasi Industri",
    metadata: "Laboratorium untuk mendukung otomasi dalam dunia industri.",
  },
  {
    _id: 8,
    mainImage: lab,
    title: "G303 Layanan Simulasi Ketenagaan",
    metadata: "Fasilitas untuk simulasi sistem ketenagaan listrik.",
  },
  {
    _id: 9,
    mainImage: lab,
    title: "HS105 Layanan Energi Terbarukan",
    metadata: "Laboratorium untuk penelitian dan pengembangan energi terbarukan.",
  },
];

export default LaboratoryData;