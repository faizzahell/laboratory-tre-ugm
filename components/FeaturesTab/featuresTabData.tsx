import { FeatureTab } from "@/types/featureTab";
import {
  features,
  featuresDark,
} from "@/public/images/features"

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Simulasi Ketenagaan yang Komprehensif",
    desc1: `Laboratorium ini menyediakan fasilitas simulasi jaringan listrik untuk memahami distribusi energi dan analisis efisiensi sistem tenaga.`,
    desc2: `Dirancang untuk mendukung riset dan pengembangan solusi ketenagaan yang berkelanjutan dan efisien.`,
    image: features,
    imageDark: featuresDark,
  },
  {
    id: "tabTwo",
    title: "Inovasi Energi Terbarukan untuk Masa Depan",
    desc1: `HS105 berfokus pada studi dan penerapan energi ramah lingkungan seperti panel surya, turbin angin, dan solusi hybrid.`,
    desc2: `Laboratorium ini mendukung transisi menuju sistem energi yang lebih bersih dan berkelanjutan.`,
    image: features,
    imageDark: featuresDark,
  },
  {
    id: "tabThree",
    title: "Pendukung Riset dan Pengembangan",
    desc1: `Laboratorium kami dilengkapi dengan perangkat terkini untuk mendukung penelitian akademik dan industri.`,
    desc2: `Solusi layanan dirancang untuk menjawab tantangan global dalam bidang energi dan ketenagaan.`,
    image: features,
    imageDark: featuresDark,
  },
];

export default featuresTabData;