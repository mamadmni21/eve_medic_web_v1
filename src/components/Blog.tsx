import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./Section";
import { SECTIONS } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { BookOpen, ArrowLeft, Calendar, User, Clock, ChevronRight, Search, X } from "lucide-react";

// @ts-ignore
import about7Img from "../assets/images/about/about_7.png";
// @ts-ignore
import about8Img from "../assets/images/about/about_8.png";
// @ts-ignore
import about9Img from "../assets/images/about/about_9.png";
// @ts-ignore
import about10Img from "../assets/images/about/about_10.png";
// @ts-ignore
import about11Img from "../assets/images/about/about_11.png";
// @ts-ignore
import about12Img from "../assets/images/about/about_12.png";
// @ts-ignore
import about13Img from "../assets/images/about/about_13.png";
// @ts-ignore
import about14Img from "../assets/images/about/about_14.png";

type SubMenu = "insights" | "services" | "solutions";

interface Article {
  id: string;
  category: string;
  title: Record<string, string>;
  description: Record<string, string>;
  content: Record<string, string>;
  image: string;
  date: string;
  author: Record<string, string>;
  readTime: string;
  clinicalTakeaway: Record<string, string>;
  practicalTips: Record<string, string[]>;
}

export const Blog = () => {
  const { language } = useLanguage();
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenu>("insights");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // 5 Custom Categories for the "Insights" tab
  const categories = useMemo(() => [
    {
      id: "all",
      name: {
        en: "ALL CATEGORIES",
        ms: "SEMUA KATEGORI",
        id: "SEMUA KATEGORI",
        zh: "全部学术文献分类"
      }
    },
    {
      id: "clinical-tech",
      name: {
        en: "CLINICAL TECH & SECURITY",
        ms: "TEKNOLOGI KLINIKAL & SEKURITI",
        id: "TEKNOLOGI & KEAMANAN",
        zh: "临床医学技术与信息安全"
      }
    },
    {
      id: "maternal-phys",
      name: {
        en: "MATERNAL PHYSIOLOGY",
        ms: "FISIOLOGI IBU",
        id: "FISIOLOGI IBU HAMIL",
        zh: "孕妇与围产期母体生理学"
      }
    },
    {
      id: "labor-prep",
      name: {
        en: "LABOR & PREPARATION",
        ms: "PROSES & PERSEDIAAN BERSALIN",
        id: "PERSALINAN & PERSIAPAN",
        zh: "心理与骨骼力学临产分娩准备"
      }
    },
    {
      id: "neonatal-growth",
      name: {
        en: "NEONATAL & FETAL MILESTONES",
        ms: "PERKEMBANGAN JANIN & NEONATAL",
        id: "PERKEMBANGAN JANIN & REPRODUKSI",
        zh: "胎儿脑神经发育与新生儿健康"
      }
    },
    {
      id: "postpartum-support",
      name: {
        en: "POSTPARTUM RECOVERY",
        ms: "PEMULIHAN SELEPAS BERSALIN",
        id: "PEMULIHAN PASCA MELAHIRKAN",
        zh: "黄金产褥期休整与产后复健支持"
      }
    }
  ], []);

  // Comprehensive Clinical Articles Database for "Insights", "Services", and "Solutions"
  const articles: Article[] = useMemo(() => [
    // 1. Clinical Tech Category
    {
      id: "decentralized-ledgers",
      category: "clinical-tech",
      title: {
        en: "Decentralized Clinical Ledgers in Modern Obstetrics",
        ms: "Lejar Klinikal Terpencar dalam Obstetrik Moden",
        id: "Buku Besar Klinis Terdesentralisasi dalam Obstetri Modern"
      },
      description: {
        en: "How cryptographic ledgers and secure data protocols solve the maternal health record fragmentation problem.",
        ms: "Bagaimana lejar kriptografi dan protokol data selamat menyelesaikan masalah pecahan rekod kesihatan ibu.",
        id: "Bagaimana buku besar kriptografi dan protokol data yang aman memecahkan masalah fragmentasi rekam medis ibu."
      },
      content: {
        en: "In modern obstetrics, maternal and infant health data is frequently scattered across various clinics, lab networks, and specialist offices. A decentralized clinical ledger acts as a single, uncorrupted 'clinical spine.' EVE uses secure cryptography to enable immutable transactions of health updates—ensuring that whether a Mother visits a local midwife or a tertiary hospital during live labor, the attending clinicians have instant, identical medical histories. This drastically reduces diagnostic delays, prevents medication errors, and saves critical transition times.",
        ms: "Dalam obstetrik moden, data kesihatan ibu dan bayi kerap bertaburan di pelbagai klinik, rangkaian makmal, dan pejabat pakar. Lejar klinikal terpencar bertindak sebagai 'tulang belakang klinikal' yang tunggal dan tidak rosak. EVE menggunakan kriptografi selamat untuk membolehkan transaksi kemas kini kesihatan yang tidak boleh diubah—memastikan sama ada Ibu melawat bidan tempatan atau hospital tertiari semasa bersalin, doktor yang merawat mempunyai sejarah perubatan yang sama serta-merta. Ini mengurangkan kelewatan diagnostik secara drastik, mencegah kesilapan ubat, dan menjimatkan masa peralihan yang kritikal.",
        id: "Dalam obstetri modern, data kesehatan ibu dan bayi sering kali tersebar di berbagai klinik, laboratorium, dan spesialis. Buku besar klinis terdesentralisasi bertindak sebagai 'tulang punggung klinis' tunggal yang tidak dapat dimanipulasi. EVE menggunakan kriptografi tingkat tinggi untuk memastikan setiap pembaruan rekam medis bersifat permanen dan aman—menjamin bahwa ketika seorang Ibu dirujuk ke rumah sakit darurat saat proses melahirkan, tim medis di sana langsung menerima riwayat klinis yang lengkap dan akurat. Ini secara instan mengurangi kesalahan diagnostik serta mempercepat penanganan darurat secara signifikan."
      },
      image: about7Img,
      date: "2026-06-08",
      author: { en: "Dr. Arifah Hamim", ms: "Dr. Arifah Hamim", id: "Dr. Arifah Hamim" },
      readTime: "5 min read",
      clinicalTakeaway: {
        en: "Ensuring identical records during rapid transfers prevents redundant tests and clinical delay.",
        ms: "Memastikan rekod yang sama semasa pemindahan pantas dapat mengelakkan ujian bertindan dan kelewatan rawatan.",
        id: "Memastikan catatan medis yang identik selama transfer cepat mencegah tes berulang dan keterlambatan penanganan klinis."
      },
      practicalTips: {
        en: [
          "Always confirm that your clinic integrates into a unified EVE platform ledger.",
          "Check your patient portal before any inter-facility transfer.",
          "Provide secure cryptographic consent to your primary care practitioner."
        ],
        ms: [
          "Sentiasa sahkan bahawa klinik anda disepadukan dengan sistem lejar platform EVE.",
          "Semak portal pesakit anda sebelum melakukan sebarang perpindahan antara faskes.",
          "Sediakan kebenaran kriptografi yang selamat kepada pengamal kesihatan utama anda."
        ],
        id: [
          "Pastikan klinik bersalin Anda terintegrasi penuh ke dalam sistem rekam medis EVE.",
          "Periksa portal pasien mandiri Anda sebelum proses rujukan rumah sakit.",
          "Berika izin akses otorisasi digital kepada dokter pilihan Anda secara aman."
        ]
      }
    },
    {
      id: "longitudinal-telemetry",
      category: "clinical-tech",
      title: {
        en: "Longitudinal Telemetry in Preeclampsia Screening",
        ms: "Telemetri Longitudinal dalam Saringan Preeklampsia",
        id: "Telemetri Longitudinal untuk Skrining Dini Preeklampsia"
      },
      description: {
        en: "Using continuous blood pressure and cardiovascular telemetry for predictive clinical alerts.",
        ms: "Menggunakan tekanan darah berterusan dan telemetri kardiovaskular untuk amaran klinikal ramalan.",
        id: "Memanfaatkan pemantauan tekanan darah dan telemetri kardiovaskular secara terus-menerus untuk peringatan dini."
      },
      content: {
        en: "Preeclampsia remains one of the leading causes of preventable maternal morbidity worldwide. Standard prenatal care relies on sporadic office readings, which often miss the early signs of rapid onset. By implementing longitudinal, secure patient tracking connected directly to a doctor's portal, clinical teams can receive algorithmic alerts if mean arterial pressure or home urinalysis metrics show anomalous trends. This proactive approach allows clinical interventions days before life-threatening symptoms manifest.",
        ms: "Preeklampsia kekal sebagai salah satu punca utama morbiditi ibu yang boleh dicegah di seluruh dunia. Penjagaan pranatal standard bergantung pada bacaan pejabat secara berkala, yang selalunya terlepas tanda-tanda awal serangan pantas. Dengan melaksanakan penjejakan pesakit membujur (longitudinal) dan selamat yang disambungkan terus ke portal doktor, pasukan klinikal boleh menerima amaran algoritma jika tekanan arteri min atau metrik analisis kencing di rumah menunjukkan trend luar biasa.",
        id: "Preeklampsia adalah salah satu penyebab utama komplikasi persalinan yang sebenarnya dapat dicegah. Pemeriksaan konvensional yang bersifat periodik sering kali terlambat mendeteksi gejalanya yang fluktuatif. Melalui pemantauan longitudinal real-time yang terhubung langsung ke dasbor dokter, algoritma EVE dapat langsung memberikan sinyal peringatan jika terdapat kenaikan tekanan arteri rata-rata atau anomali kardiovaskular lainnya, memberikan waktu berharga bagi dokter untuk melakukan intervensi."
      },
      image: about8Img,
      date: "2026-06-05",
      author: { en: "Dr. Arifah Hamim", ms: "Dr. Arifah Hamim", id: "Dr. Arifah Hamim" },
      readTime: "6 min read",
      clinicalTakeaway: {
        en: "Algorithmic screening of longitudinal values yields higher precision than isolated clinic records.",
        ms: "Saringan algoritma bagi nilai membujur memberikan ketepatan yang lebih tinggi berbanding rekod klinik sahaja.",
        id: "Skrining berbasis algoritma dari data longitudinal memberikan presisi jauh lebih tinggi dibanding pemeriksaan klinis sporadis."
      },
      practicalTips: {
        en: [
          "Take resting home blood pressure readings at consistent times using certified devices.",
          "Understand the warning symptoms: sudden visual changes, persistent headaches, or severe bloating.",
          "Keep automatic logs active throughout the third trimester."
        ],
        ms: [
          "Ambil bacaan tekanan darah di rumah semasa berehat pada masa yang konsisten menggunakan peranti disahkan.",
          "Fahami simptom amaran: perubahan penglihatan mengejut, sakit kepala berterusan, atau bengkak yang teruk.",
          "Pastikan pengisian log automatik sentiasa aktif sepanjang trimester ketiga."
        ],
        id: [
          "Lakukan pengukuran tekanan darah secara rutin di rumah pada jam yang sama.",
          "Waspadai gejala peringatan: pandangan kabur mendadak, sakit kepala hebat, atau pembengkakan berlebih pada kaki/tangan.",
          "Gunakan aplikasi pendamping pasien untuk mencatat data vital harian Anda."
        ]
      }
    },

    // 2. Maternal Physiology Category
    {
      id: "hemodynamic-adaptations",
      category: "maternal-phys",
      title: {
        en: "Cardiovascular Adaptations During the Second Trimester",
        ms: "Adaptasi Kardiovaskular Semasa Trimester Kedua",
        id: "Adaptasi Kardiovaskular Selama Trimester Kedua Kehamilan"
      },
      description: {
        en: "An in-depth look at maternal hemodynamic changes and tracking cardiovascular safety.",
        ms: "Tinjauan mendalam tentang perubahan hemodinamik ibu dan penjejakan keselamatan kardiovaskular.",
        id: "Kajian mendalam tentang perubahan hemodinamik ibu serta pemantauan kestabilan jantung."
      },
      content: {
        en: "The maternal cardiovascular system undergoes profound changes during pregnancy, including a 40% to 50% increase in blood volume and a rise in cardiac output. These adaptations are essential to support fetal growth but can unmask underlying cardiovascular vulnerabilities. Monitoring blood pressure, oxygenation, and general maternal vitality through non-invasive telemetry provides clinical teams with the longitudinal data necessary to differentiate between physiological adaptations and pathological changes.",
        ms: "Sistem kardiovaskular ibu mengalami perubahan besar semasa kehamilan, termasuk peningkatan 40% hingga 50% dalam jumlah darah dan peningkatan output jantung. Adaptasi ini penting untuk menyokong pertumbuhan janin tetapi boleh membuka kelemahan kardiovaskular yang tersirat. Memantau tekanan darah dan kecergasan am ibu melalui telemetri menyediakan data yang mencukupi untuk membezakan adaptasi fisiologi biasa dan perubahan patologi merbahaya.",
        id: "Sistem kardiovaskular ibu hamil mengalami perubahan drastis, termasuk lonjakan volume darah sebesar 40% hingga 50% serta peningkatan beban pompa jantung. Adaptasi fisiologis ini krusial untuk menyokong nutrisi janin, namun juga dapat memicu stres fisik jika terdapat riwayat kardiovaskular sebelumnya. Penyelarasan data vital berkala membantu dokter mendeteksi dini apakah sesak nafas atau denyut nadi cepat yang dirasakan ibu berasal dari adaptasi normal atau kondisi medis yang memerlukan penanganan khusus."
      },
      image: about9Img,
      date: "2026-06-01",
      author: { en: "Dr. Arifah Hamim", ms: "Dr. Arifah Hamim", id: "Dr. Arifah Hamim" },
      readTime: "4 min read",
      clinicalTakeaway: {
        en: "Hemodynamic fluctuations peak in the late second trimester, demanding vigilant baseline checks.",
        ms: "Turun naik hemodinamik memuncak pada akhir trimester kedua, memerlukan pemeriksaan asas yang kerap.",
        id: "Fluktuasi hemodinamik mencapai puncak pada akhir trimester kedua, sehingga pemantauan data dasar sangat dianjurkan."
      },
      practicalTips: {
        en: [
          "Ensure adequate hydration to support expanded blood volume health.",
          "Engage in low-impact prenatal physical routines such as swimming or daily walking.",
          "Notify your care team if resting heart rate climbs unpredictably."
        ],
        ms: [
          "Pastikan hidrasi yang mencukupi untuk menyokong kesihatan isipadu darah yang berkembang.",
          "Lakukan rutin fizikal pranatal yang rendah impak seperti berenang atau berjalan kaki setiap hari.",
          "Maklumkan kepada pasukan penjagaan anda sekiranya kadar degupan jantung semasa berehat meningkat secara mendadak."
        ],
        id: [
          "Minum air putih yang cukup untuk mendukung pengenceran plasma darah alami tubuh Anda.",
          "Lakukan olahraga ringan yang aman secara teratur, seperti berjalan santai atau yoga pranatal.",
          "Laporkan segera jika Anda merasakan jantung berdebar-debar tidak wajar saat beristirahat."
        ]
      }
    },
    {
      id: "biochemical-surges",
      category: "maternal-phys",
      title: {
        en: "Biochemical Milestones and Micronutrient Surges",
        ms: "Pencapaian Biokimia dan Lonjakan Mikronutrien",
        id: "Tonggak Biokimiawi dan Lonjakan Kebutuhan Mikronutrien"
      },
      description: {
        en: "How maternal metabolic markers guide personalized nutrition and support fetal development.",
        ms: "Bagaimana penanda metabolik ibu membimbing pemakanan peribadi dan menyokong pertumbuhan janin.",
        id: "Bagaimana penanda metabolisme ibu memandu nutrisi personal dan mendukung perkembangan janin."
      },
      content: {
        en: "Proper bone mineralization and gestational vitality depend on a delicate hormonal coordinate system. Folic acid, Vitamin D, and iron demand rise dramatically across the trimesters. Understanding biochemical milestones through comprehensive record tracking allows clinicians to prescribe bespoke prenatal regimens, resolving deficiencies before child development is impacted.",
        ms: "Mineralisasi tulang janin yang betul dan kecergasan gestasi bergantung kepada koordinasi hormon yang sensitif. Keperluan asid folik, Vitamin D, dan zat besi meningkat secara mendadak merentasi trimester. Memahami pencapaian biokimia ini membolehkan pakar menetapkan suplemen pranatal tersua, menyelesaikan kekurangan sebelum perkembangan anak terjejas.",
        id: "Pertumbuhan organ vital dan kekuatan tulang janin sangat bergantung pada asupan gizi mikro yang optimal. Kadar asam folat, zat besi, kalsium, dan Vitamin D harus selalu tercukupi untuk mencegah anemia kehamilan dan stunting perkembangan. Penelusuran riwayat laboratorium terintegrasi membantu mendeteksi defisiensi nutrisi secara presisi sebelum memicu komplikasi pertumbuhan."
      },
      image: about10Img,
      date: "2026-05-28",
      author: { en: "Dr. Arifah Hamim", ms: "Dr. Arifah Hamim", id: "Dr. Arifah Hamim" },
      readTime: "4 min read",
      clinicalTakeaway: {
        en: "Personalized nutritional prescribing improves clinical safety over generic prenatal supplements.",
        ms: "Preskripsi pemakanan yang disesuaikan meningkatkan keselamatan klinikal berbanding suplemen pranatal generik.",
        id: "Rencana nutrisi yang dipersonalisasi memberikan efektivitas klinis jauh lebih baik dibanding suplemen generik."
      },
      practicalTips: {
        en: [
          "Take folic acid preconceptionally and until at least week 12 of pregnancy.",
          "Incorporate iron-rich foods paired with Vitamin C to optimize absorption.",
          "Request regular hemoglobin level screenings."
        ],
        ms: [
          "Ambil asid folik sebelum persenyawaan dan sehingga sekurang-kurangnya minggu ke-12 kehamilan.",
          "Sertakan makanan kaya zat besi dipasangkan dengan Vitamin C untuk mengoptimumkan penyerapan.",
          "Minta ujian saringan tahap hemoglobin secara berkala."
        ],
        id: [
          "Konsumsi asam folat secara konsisten, idealnya sejak fase merencanakan kehamilan.",
          "Makanlah makanan sumber zat besi (daging merah, bayam) bersamaan dengan Vitamin C untuk penyerapan optimal.",
          "Lakukan tes darah rutin untuk memantau kadar hemoglobin Anda."
        ]
      }
    },

    // 3. Labor Category
    {
      id: "biomechanics-labor",
      category: "labor-prep",
      title: {
        en: "Biomechanical Preparation for Active Labor",
        ms: "Persediaan Biomekanikal untuk Bersalin Aktif",
        id: "Persiapan Biomekanis Menghadapi Persalinan Aktif"
      },
      description: {
        en: "Clinical strategies for optimal fetal positioning and pelvic mobility prior to week 38.",
        ms: "Strategi klinikal untuk kedudukan janin yang optimum dan pergerakan pelvis sebelum minggu ke-38.",
        id: "Strategi klinis untuk optimalisasi posisi janin serta fleksibilitas panggul menjelang minggu ke-38 kehamilan."
      },
      content: {
        en: "Active labor is a high-intensity biomechanical event. Engaging in evidence-based exercises, such as deep squats, side-lying release, and gentle pelvic tilts, helps encourage the fetus to enter the optimal anterior position. Documenting these physical activities and counseling sessions within the EVE Patient Companion app keeps both mothers and midwives aligned, optimizing chances for a spontaneous, uncomplicated vaginal delivery.",
        ms: "Proses bersalin aktif ialah peristiwa biomekanikal intensiti tinggi. Melakukan senaman berasaskan bukti, seperti mencangkung, pelepasan baring sisi, dan condong pelvis, membantu mendorong janin ke kedudukan anterior optimum. Merekod aktiviti fizikal ini membolehkan bidan mengikuti perkembangan anda dengan harmoni.",
        id: "Melahirkan secara normal merupakan proses fisik yang menuntut mobilitas panggul yang prima. Gerakan panggul terukur, seperti deep squats, katak posisi, dan jalan santai mendukung kepala janin turun ke rongga panggul dengan sudut optimal (posisi anterior). Menjaga fleksibilitas otot panggul sejak trimester ketiga terbukti mempermudah pembukaan jalan lahir dan membantu mengurangi rasa nyeri berlebih saat kontraksi aktif dimulai."
      },
      image: about11Img,
      date: "2026-05-20",
      author: { en: "Dr. Arifah Hamim", ms: "Dr. Arifah Hamim", id: "Dr. Arifah Hamim" },
      readTime: "5 min read",
      clinicalTakeaway: {
        en: "Structured movement plans directly correlate with a reduced rate of unplanned cesarean sections.",
        ms: "Pelan senaman berstruktur berkait rapat dengan pengurangan kadar pembedahan kecemasan yang tidak dirancang.",
        id: "Persiapan otot panggul yang terencana berkorelasi langsung dengan berkurangnya risiko operasi sesar darurat."
      },
      practicalTips: {
        en: [
          "Commit to 20 minutes of pelvic mobility exercises daily starting from week 34.",
          "Utilize birthing balls for sitting and rotating to relieve lower spine strain.",
          "Review fetal engagement status with your midwife during weekly visits."
        ],
        ms: [
          "Luangkan masa 20 minit untuk senaman mobiliti pelvis setiap hari bermula minggu ke-34.",
          "Gunakan bola bersalin (exercise ball) untuk duduk dan berpusing bagi melegakan ketegangan tulang belakang.",
          "Semak status kedudukan janin bersama bidan setiap lawatan mingguan."
        ],
        id: [
          "Lakukan latihan mobilitas panggul selama 20 menit sehari mulai minggu ke-34.",
          "Gunakan gym ball (bola bersalin) saat duduk santai untuk meredakan nyeri punggung bawah.",
          "Konsultasikan posisi optimal bayi Anda kepada dokter atau bidan Anda di setiap pemeriksaan mingguan."
        ]
      }
    },
    {
      id: "deciphering-contraction",
      category: "labor-prep",
      title: {
        en: "Deciphering Braxton Hicks vs. True Labor Transitions",
        ms: "Membezakan Braxton Hicks lwn. Transisi Bersalin Sebenar",
        id: "Membedakan Braxton Hicks dengan Kontraksi Persalinan Asli"
      },
      description: {
        en: "How to use contraction tracking and physiological biomarkers to identify true delivery transitions.",
        ms: "Bagaimana menggunakan penjejakan kontraksi dan penanda biologi untuk mengenal pasti transisi bersalin yang sebenar.",
        id: "Bagaimana menggunakan pencatat pola kontraksi harian untuk mencegah kepanikan persalinan palsu."
      },
      content: {
        en: "Braxton Hicks contractions are common during the third trimester, representing the body's natural practice sessions. However, distinguishing them from true labor is vital to prevent unnecessary hospitalizations or dangerous delays. True labor contractions follow a pattern: they grow progressively longer, stronger, and closer together, enduring even as the mother shifts positions or drinks water. Utilizing simple, in-app trackers creates an objective data record that can be instantly shared with clinical teams.",
        ms: "Kontraksi Braxton Hicks biasa berlaku pada trimester ketiga, mewakili sesi latihan semula jadi badan anda. Bagaimanapun, membezakannya dengan sakit bersalin sebenar amat penting bagi mengelakkan kemasukan hospital yang tidak perlu atau kelewatan melahirkan yang merbahaya. Sakit bersalin sebenar mempunyai corak: semakin kuat, lebih lama, dan lebih rapat jaraknya, walaupun anda menukar kedudukan atau minum air.",
        id: "Kontraksi palsu (Braxton Hicks) kerap muncul di trimester akhir untuk melatih rahim Anda. Namun, membedakannya dengan kontraksi asli sangat menentukan ketepatan jam keberangkatan Anda ke rumah sakit. Kontraksi asli memiliki ciri khas: teratur, semakin lama semakin intens, terasa dari punggung bawah menjalar ke perut depan, dan tidak reda saat Anda beristirahat atau berganti posisi. Memantau interval kontraksi secara teratur membantu memberi kepastian yang menenangkan."
      },
      image: about12Img,
      date: "2026-05-15",
      author: { en: "Dr. Arifah Hamim", ms: "Dr. Arifah Hamim", id: "Dr. Arifah Hamim" },
      readTime: "5 min read",
      clinicalTakeaway: {
        en: "Accurate contraction pattern telemetry prevents premature hospital presentation, saving resource capacity.",
        ms: "Telemetri corak kontraksi yang tepat menghalang kehadiran awal ke hospital yang tidak perlu.",
        id: "Analisis interval kontraksi yang objektif menghindarkan kedatangan terlalu awal ke ruang bersalin yang memicu kecemasan medis."
      },
      practicalTips: {
        en: [
          "Apply the clinical 5-1-1 rule: contractions every 5 mins, lasting 1 min, for 1 full hour.",
          "Observe changes in vaginal discharges; a sudden release of watery fluid requires immediate check-up.",
          "Rest during irregular tightening sessions to evaluate if pain resolves with hydration."
        ],
        ms: [
          "Gunakan peraturan klinikal 5-1-1: kontraksi setiap 5 minit, bertahan 1 minit, selama 1 jam penuh.",
          "Perhatikan limpahan cecair faraj; pembebasan air ketuban memerlukan pemeriksaan segera.",
          "Berehat semasa sesi pengetatan perut yang tidak teratur untuk menilai jika sakit berkurangan selepas minum air."
        ],
        id: [
          "Gunakan rumus 5-1-1: kontraksi terjadi setiap 5 menit, berdurasi minimal 1 menit, konisten selama 1 jam penuh.",
          "Bila merasakan rembesan air ketuban mendadak, segera temui dokter Anda, jangan ditunda.",
          "Cobalah berbaring santai di sisi kiri dan amati apakah intensitas kontraksi menurun dengan istirahat."
        ]
      }
    },

    // 4. Neonatal Category
    {
      id: "fetal-neurology",
      category: "neonatal-growth",
      title: {
        en: "Neurological Milestones in the Third Trimester",
        ms: "Pencapaian Neurologi Janin di Trimester Ketiga",
        id: "Keajaiban Perkembangan Otak Janin di Trimester Ketiga"
      },
      description: {
        en: "Tracing structural brain surges, sensory system development, and resting cycles of the fetus.",
        ms: "Menjejaki lonjakan struktur otak, perkembangan deria, dan kitaran rehat janin.",
        id: "Menelusuri ledakan saraf otak, kepekaan panca indra janin, dan siklus tidurnya."
      },
      content: {
        en: "By week 28, the fetal brain begins developing deep sulci and gyri to increase surface area, leading to rapid cognitive and sensory activation. The fetus can perceive external light, respond to paternal voices, and establish clear sleep-wake cycles. Clinical monitoring of daily fetal kick cycles and move frequencies provides indirect, reassuring confirmation of nervous system integrity, keeping expectant families deeply connected and reassured.",
        ms: "Menjelang minggu ke-28, otak janin mula membentuk lingkaran sulkus dan girus yang mendalam untuk meluaskan permukaan saraf, membawa kepada pengaktifan kognitif dan deria yang pantas. Janin kini boleh mengesan cahaya luar, bertindak balas kepada suara ibu bapa, dan menetapkan kitaran tidur. Pemantauan pergerakan harian yang konsisten menjadi isyarat kecergasan otak janin yang melegakan.",
        id: "Memasuki minggu ke-28, otak janin berkembang pesat dengan pembentukan lipatan-lipatan saraf korteks yang menjadikannya peka terhadap dunia luar. Bayi dalam kandungan Anda kini dapat mendengar suara percakapan Anda, merespons cahaya terang melalui dinding perut, menggenggam, dan mulai memiliki jadwal tidur yang teratur. Rutinitas memantau 'kick count' (hitungan tendangan) harian merupakan cara non-invasif paling andal untuk memvalidasi suplai oksigen dan saraf janin aktif optimal."
      },
      image: about13Img,
      date: "2026-05-10",
      author: { en: "Dr. Arifah Hamim", ms: "Dr. Arifah Hamim", id: "Dr. Arifah Hamim" },
      readTime: "4 min read",
      clinicalTakeaway: {
        en: "Fetal sensory response matches gestational milestones, making voice interaction clinically positive.",
        ms: "Tindak balas deria janin sepadan dengan peristiwa penting kandungan, menjadikan interaksi suara sangat positif secara klinikal.",
        id: "Interaksi suara dan stimulus sentuhan luar berkorelasi positif dengan perkembangan motorik awal janin."
      },
      practicalTips: {
        en: [
          "Engage in daily calm speaking or music exposure sessions to stimulate auditory responses.",
          "Keep kick counting logs updated at post-meal highactivity times.",
          "Practice deep breathing when the baby goes quiet during its normal 20-minute rest intervals."
        ],
        ms: [
          "Lakukan sesi komunikasi lembut atau perdengarkan muzik tenang setiap hari untuk merangsang tindak balas pendengaran janin.",
          "Kemaskini log perkiraan tendangan bayi terutamanya selepas anda makan.",
          "Amalkan pernafasan dalam sekiranya bayi tidak bergerak yang selalunya disebabkan oleh kitaran tidur normal 20-minit."
        ],
        id: [
          "Luangkan waktu mengajak bayi mengobrol dengan lembut atau menyanyikan lagu rileks untuk melatih saraf pendengaran janin.",
          "Lakukan pencatatan gerak tendangan di sore atau malam hari setelah Anda makan kenyang.",
          "Pahami bahwa bayi tidur secara berkala sekitar 20-40 menit di dalam rahim, hal ini sangat normal."
        ]
      }
    },

    // 5. Postpartum Category
    {
      id: "fourth-trimester-hemodynamics",
      category: "postpartum-support",
      title: {
        en: "The First 40 Days: Recovering Hemodynamics and Hormonal Balance",
        ms: "40 Hariah Pertama: Keseimbangan Hemodinamik dan Hormon Ibu",
        id: "Fase Nifas: Rekonstruksi Hormonal dan Kestabilan Tubuh Ibu"
      },
      description: {
        en: "Addressing the 'fourth trimester' physical recovery, mental wellness, and postpartum safety milestones.",
        ms: "Menguruskan fasa pemulihan fizikal trimester keempat, kesihatan mental, dan pencapaian keselamatan.",
        id: "Mengelola pemulihan fisik masa nifas, kesehatan mental postpartum, dan target pemulihan vital."
      },
      content: {
        en: "The post-natal recovery phase is crucial. As levels of progesterone and estrogen drop precipitously post-birth, the maternal body undergoes a rapid fluid shift. Regular blood pressure check-ups and mental health screenings during the fourth trimester are vital to detect silent issues like postpartum hypertension or postpartum depression. Providing a supportive digital spine keeps mothers connected to clinicians during this vulnerable, transformative time.",
        ms: "Fasa berpantang (trimester keempat) adalah tempoh pemulihan yang sangat kritikal. Berikutan penurunan mendadak hormon progesteron dan estrogen selepas melahirkan anak, badan mengalami perubahan drastik cecair badan. Pemeriksaan tekanan darah dan kesejahteraan emosi secara kerap adalah mustahak bagi mengesan sebarang tanda kemurungan bersalin atau hipertensi postpartum secara selamat.",
        id: "Proses pemulihan pasca melahirkan (masa nifas) menuntut perhatian medis tak kalah intensif. Kejatuhan hormon estrogen dan progesteron yang sangat drastik setelah plasenta lahir memicu perubahan psikologis yang rapuh. Selain menjaga kebersihan luka jahitan, ibu baru sangat dianjurkan untuk terus dipantau tekanan darahnya untuk menghindari risiko hipertensi postpartum yang lambat muncul, sekaligus didampingi emosinya dari sindrom baby blues."
      },
      image: about14Img,
      date: "2026-05-02",
      author: { en: "Dr. Ainil Fariha", ms: "Dr. Ainil Fariha", id: "Dr. Ainil Fariha" },
      readTime: "5 min read",
      clinicalTakeaway: {
        en: "Systemic monitoring during the first 6 weeks reduces readmission and mental health vulnerability.",
        ms: "Pemantauan sistematik dalam tempoh 6 minggu pertama mengurangkan kemasukan semula wad dan masalah emosi.",
        id: "Pendampingan digital klinis selama 6 minggu masa nifas menurunkan risiko depresi postpartum secara signifikan."
      },
      practicalTips: {
        en: [
          "Check blood pressure twice weekly at home even if labor was uncomplicated.",
          "Build a robust emotional support registry and enlist help for sleeping shifts.",
          "Complete post-natal checkups by week 2 and week 6."
        ],
        ms: [
          "Periksa tekanan darah dua kali seminggu di rumah walaupun bersalin berjalan dengan lancar.",
          "Bina rangkaian sokongan emosi keluarga dan jadual giliran tidur bagi mengekalkan rehat.",
          "Selesaikan pemeriksaan posnatal wajib pada minggu ke-2 dan minggu ke-6."
        ],
        id: [
          "Pantau tekanan darah di rumah secara mandiri minimal satu kali seminggu selama masa nifas.",
          "Jangan ragu meminta bantuan suami atau kerabat terdekat untuk membagi waktu menyusui dan merawat bayi agar istirahat cukup.",
          "Lakukan konsultasi lanjutan pasca melahirkan ke klinik pada minggu kedua dan keenam."
        ]
      }
    },

    // 6. Services Articles
    {
      id: "remote-obstet-monitoring",
      category: "services",
      title: {
        en: "Remote Obstetric Tele-monitoring Services",
        ms: "Perkhidmatan Tele-pemantauan Obstetrik Jauh",
        id: "Layanan Pemantauan Jarak Jauh Obstetrik"
      },
      description: {
        en: "How EVE's virtual care-bridges connect remote clinics with board-certified maternal specialists.",
        ms: "Bagaimana jambatan maya EVE menghubungkan klinik jauh dengan pakar maternal yang bertauliah.",
        id: "Bagaimana sistem terintegrasi EVE menghubungkan faskes daerah dengan dokter spesialis di pusat."
      },
      content: {
        en: "Obstetric care is unevenly distributed across geographical lines. Our remote tele-monitoring services resolve this by transmitting patient telemetry (fetal heart rate, blood pressure, kick logs) to specialized hubs in real-time. This virtual safety net ensures high-risk pregnancies receive premium specialist surveillance, regardless of clinic location. Clinics can seamlessly query specialists, and specialist medical officers can guide care protocols proactively.",
        ms: "Penjagaan obstetrik tidak tersebar secara sekata mengikut kawasan. Perkhidmatan tele-pemantauan jarak jauh kami menyelesaikan perkara ini dengan menghantar data harian penting (degupan jantung janin, tekanan darah, log pergerakan) ke pusat pakar kami secara langsung. Rangkaian keselamatan maya ini memastikan kehamilan berisiko tinggi menerima tumpuan pakar perubatan, tanpa mengira lokasi klinik.",
        id: "Distribusi dokter kandungan dan spesialis obstetri sering kali tidak merata ke berbagai wilayah pedalaman. EVE menjembatani kesenjangan ini dengan mentransmisikan data maternal real-time—termasuk detak jantung janin (dopler), tekanan darah, dan hitungan tendangan secara otomatis dari klinik daerah langsung ke rumah sakit rujukan utama. Hal ini memungkinkan ibu hamil berisiko tinggi mendapat penanganan spesialis tingkat lanjut tanpa kendala jarak."
      },
      image: about11Img,
      date: "2026-06-09",
      author: { en: "Ainil Fariha", ms: "Ainil Fariha", id: "Ainil Fariha" },
      readTime: "7 min read",
      clinicalTakeaway: {
        en: "Integrated live interfaces convert local rural clinics into high-capability obstetric nodes.",
        ms: "Antaramuka langsung menukar klinik luar bandar biasa menjadi nod obstetrik yang berkeupayaan tinggi.",
        id: "Tautan sistem cloud terenkripsi mengubah klinik bersalin terpencil menjadi unit obstetri berkemampuan tinggi secara instan."
      },
      practicalTips: {
        en: [
          "Inquire with your clinic regarding active EVE live specialists connection packages.",
          "Synchronize home companion health peripherals with your provider portal.",
          "Check telehealth options for urgent check-ins before making physical hospital trips."
        ],
        ms: [
          "Tanyakan kepada klinik anda mengenai pakej interkoneksi pakar EVE yang aktif.",
          "Hubungkan peranti perubatan di rumah (penyukat tekanan darah) secara automatik ke profil di klinik.",
          "Gunakan pilihan tele-konsultasi untuk semakan kecemasan awal sebelum bertolak ke hospital."
        ],
        id: [
          "Tanyakan kepada faskes langganan Anda mengenai ketersediaan paket pemantauan jarak jauh EVE.",
          "Hubungkan alat tensimeter rumah Anda langsung ke profil akun medis di klinik.",
          "Manfaatkan fitur konsultasi virtual darurat sebelum memutuskan pergi jauh ke rumah sakit pusat."
        ]
      }
    },
    {
      id: "collaborative-care-framework",
      category: "services",
      title: {
        en: "Care Team Coordination & Support Network Integration",
        ms: "Program Integrasi Kolaborasi Bidan & Doula",
        id: "Integrasi Layanan Kolaboratif Bidan, Doula & Dokter Spesialis"
      },
      description: {
        en: "Enabling secure, patient-authorized information sharing between healthcare providers and trusted support persons.",
        ms: "Membolehkan penyerahan data pesakit secara lancar antara pegawai perubatan dan penjaga bersalin komuniti.",
        id: "Menyelaraskan komunikasi data pasien antara bidan puskesmas, pendamping persalinan, dan dokter kandungan."
      },
      content: {
          en: "Pregnancy and postpartum care often involve multiple stakeholders, including obstetricians, family physicians, nurses, lactation consultants, physiotherapists, caregivers and family members.\n\nEVE's permission-based sharing framework allows patients to securely grant view access to selected individuals within their support network, ensuring everyone remains aligned throughout the care journey.\n\nBy improving communication and continuity of information, EVE helps reduce fragmented care, supports informed decision-making, and promotes a more coordinated patient experience.\n\nAll data access remains under the patient's control and can be modified or revoked at any time through a simple dashboard.",
        ms: "Keputusan kesihatan ibu bertambah baik secara drastik apabila pasukan pakar bekerjasama secara harmoni dengan doula dan bidan komuniti. Kebenaran perkongsian data EVE yang selamat membolehkan pesakit berkongsi akses rekod pranatal kepada pembela bersalin pilihan mereka secara telus. Ini mewujudkan lingkaran sokongan bersepadu di sekeliling ibu, menggabungkan kepakaran perubatan dan sokongan moral.",
        id: "Angka keselamatan ibu melahirkan melonjak naik ketika bidan komunitas, pendamping persalinan (doula), dan dokter rumah sakit bekerja dengan satu data yang sama. Kontrol izin akses mandiri EVE memberikan kendali penuh kepada ibu hamil untuk mempercayakan catatan pemeriksaannya dibaca oleh pendamping pilihannya. Ini memastikan kebersamaan, rasa aman, dan integrasi penanganan yang humanis dari awal kehamilan sampai bersalin."
      },
      image: about13Img,
      date: "2026-06-03",
      author: { en: "Ainil Fariha", ms: "Ainil Fariha", id: "Ainil Fariha" },
      readTime: "5 min read",
      clinicalTakeaway: {
        en: "Facilitates patient-centred care by improving coordination between healthcare providers and authorised support persons, reducing information gaps and enhancing continuity throughout pregnancy, birth and postpartum recovery.",
        ms: "Penyelarasan sokongan bukan klinikal dengan kakitangan perubatan mengurangkan tahap stres dan mengawal masa bersalin.",
        id: "Harmonisasi data antara tenaga medis dan pendamping kehamilan mengurangi stres mental ibu, memperlancar kelahiran."
      },
      practicalTips: {
        en: [
          "Add authrorised healthcare professionals and trusted support persons through EVE's secure sharing permissions.",
          "Review care plans, appointments and relevant health records with your healthcare team within the platform.",
          "Manage, update or revoke access permissions instantly through the patient dashboard."
        ],
        ms: [
          "Tambah bidan atau penyedia penjagaan berlesen anda ke dalam senarai kebenaran akses EVE.",
          "Semak pelan kelahiran (birth plan) bersama-sama doula dan doktor pakar anda di dalam sistem EVE.",
          "Urus penarikan semula keizinan akses dengan mudah menggunakan butang kawalan ringkas."
        ],
        id: [
          "Tambahkan penyedia layanan bersertifikat Anda ke dalam daftar izin baca profil medis EVE.",
          "Diskusikan rencana persalinan (birth plan) secara langsung di aplikasi bersama dokter dan bidan.",
          "Anda dapat membatalkan izin akses pendamping kapan saja dengan satu sentuhan jari."
        ]
      }
    },

    // 7. Solutions Articles
    {
      id: "securing-data-integrity",
      category: "solutions",
      title: {
        en: "Securing Data Integrity: The EVE Decentralized Core",
        ms: "Menjamin Kesihatan Data: Tunjang Terpencar EVE",
        id: "Menjamin Integritas Data Medis: Arsitektur Inti EVE"
      },
      description: {
        en: "Implementing HIPAA-compliant decentralized ledgers to eliminate clinical blind spots permanently.",
        ms: "Melaksanakan lejar terpencar patuh HIPAA untuk menghapuskan titik buta maklumat klinikal selama-lamanya.",
        id: "Menerapkan teknologi proteksi medis standar HIPAA untuk menghilangkan 'titik buta' catatan klinis selamanya."
      },
      content: {
        en: "Enterprise hospital networks suffer from segmented data silos that threaten maternal lives during emergencies. EVE's cloud-deployed ledger solution resolves this by providing a single, verifiable, and permissioned longitudinal history sheet. Our platform integrates with standard Epic, Cerner, and OpenEMR systems via HL7 and FHIR protocols, preserving security while facilitating fluid data liquidity across primary and tertiary centers.",
        ms: "Hospital besar sering mengalami pemisahan data (silo) yang boleh mengancam nyawa ibu ketika kecemasan berlaku. Penyelesaian lejar terpencar EVE menyelesaikan isu ini dengan membekalkan rekod sejarah longitudinal tunggal yang boleh disahkan dan dikawal. Platform kami berintegrasi lancar dengan sistem hospital standard seperti Epic, Cerner dan OpenEMR melalui protokol HL7 dan FHIR.",
        id: "Rantai rumah sakit seringkali kesulitan mencocokkan rekam medis pasien rujukan dengan cepat di tengah kondisi darurat persalinan. Solusi PaaS EVE menstandarisasikan pertukaran data ini melalui integrasi tingkat lanjut HL7 dan FHIR dengan sistem besar seperti Epic, Cerner, atau darmas lainnya. Tulang punggung digital EVE menciptakan sistem catatan satu pintu yang aman, terverifikasi, dan sangat cepat diakses, memangkas proses administrasi darurat."
      },
      image: about10Img,
      date: "2026-06-08",
      author: { en: "Ainil Fariha", ms: "Ainil Fariha", id: "Ainil Fariha" },
      readTime: "6 min read",
      clinicalTakeaway: {
        en: "HL7/FHIR cross-compatibility is key to scalable national maternal data health initiatives.",
        ms: "Kesesuaian silang HL7/FHIR adalah tonggak kejayaan pengurusan data kesihatan ibu di peringkat nasional.",
        id: "Kombinasi kompatibilitas HL7/FHIR adalah pilar krusial untuk kesuksesan integrasi data kesehatan nasional."
      },
      practicalTips: {
        en: [
          "Validate if your local hospital has active HL7/FHIR EVE bridge connectors.",
          "Keep biometric identification tokens securely kept for clinical logins.",
          "Ensure secondary specialist clinics have permission tokens before check-ins."
        ],
        ms: [
          "Sahkan jika hospital tempatan anda dilengkapi sistem jambatan interkoneksi HL7/FHIR EVE.",
          "Simpan token pengenalan biometrik anda dengan selamat untuk kemasukan peranti klinik.",
          "Pastikan klinik pakar sekunder diberikan token akses sebelum pendaftaran."
        ],
        id: [
          "Periksa apakah rumah sakit rujukan terdekat telah mengaktifkan interkoneksi FHIR EVE.",
          "Simpan kode otentikasi akun medis Anda secara aman untuk login mesin klinik.",
          "Amati apakah seluruh klinik utama dan rujukan Anda melihat data harian yang sinkron."
        ]
      }
    },
    {
      id: "paas-sovereign-networks",
      category: "solutions",
      title: {
        en: "PaaS for Sovereign Maternity Centers",
        ms: "PaaS untuk Rangkaian Klinik Bersalin Berdaulat",
        id: "PaaS Berkuasa Tinggi untuk Jaringan Faskes Nasional"
      },
      description: {
        en: "Empowering regional health networks with developer-friendly APIs to construct local clinic portals.",
        ms: "Memperkasakan rangkaian kesihatan wilayah dengan API mesra pemaju untuk membina portal klinik tempatan.",
        id: "Memberdayakan pusat layanan kesehatan daerah dengan API siap pakai untuk portal klinik mandiri."
      },
      content: {
        en: "Our Platform-as-a-Service (PaaS) layout provides ready-to-deploy backends, analytics dashboards, and mobile companion configurations for healthcare operators. We handle the heavy lifting of compliance, encrypted database scaling, and device integrations, permitting regional networks to deploy customized portals within weeks, optimizing their local workflows instantly.",
        ms: "Struktur Platform-as-a-Service (PaaS) kami membekalkan pangkalan data siap pakai, papan pemuka analitik, dan aplikasi harian mesra pengguna untuk pengendali kesihatan. Kami menguruskan kepatuhan keselamatan yang ketat, penskalaan pangkalan data tersusun, dan integrasi peranti automatik, membolehkan wilayah membina portal klinik mandiri dalam masa beberapa minggu sahaja.",
        id: "Platform-as-a-Service (PaaS) EVE didesain untuk operator daerah yang ingin segera mendirikan sistem monitoring mandiri. Kami menyediakan backend handal yang siap pakai, mesin analitik data, serta kerangka aplikasi pasien dengan standarisasi regulasi kesehatan ketat. Rumah sakit atau faskes daerah kini dapat meluncurkan portal rekam medis miliknya sendiri dalam hitungan minggu tanpa perlu investasi infrastruktur digital dari nol."
      },
      image: about14Img,
      date: "2026-05-30",
      author: { en: "Ainil Fariha", ms: "Ainil Fariha", id: "Ainil Fariha" },
      readTime: "5 min read",
      clinicalTakeaway: {
        en: "Pre-assembled compliant backends compress integration expense by up to 70%.",
        ms: "Sistem pangkalan data patuh standard sedia ada menjimatkan kos pembangunan sehingga 70%.",
        id: "Arsitektur database siap pakai bersertifikat menghemat biaya operasional IT hingga 70%."
      },
      practicalTips: {
        en: [
          "Request customized API sandbox trial credentials from EVE development support.",
          "Evaluate regional privacy standards inside the compliance control dash.",
          "Onboard local medical database administrators with automated tutorial streams."
        ],
        ms: [
          "Minta kelayakan percubaan API mesra pemaju daripada pasukan sokongan teknikal EVE.",
          "Lihat tetapan keselamatan maklumat setempat di panel pematuhan utama.",
          "Latih pentadbir data perubatan setempat anda dengan program tutorial automatik kami."
        ],
        id: [
          "Hubungi tim pengembang EVE untuk mendapatkan kredensial uji coba (sandbox) API.",
          "Harmonisasikan kepatuhan privasi rekaman medis lewat panel kepatuhan pusat kami.",
          "Latih staf administrator IT di klinik Anda melalui paket demonstrasi mandiri EVE."
        ]
      }
    }
  ], []);

  // Filter articles based on active submenu and selected category filter, plus query search across all contents
  const filteredArticles = useMemo(() => {
    let list = articles;
    const isSearching = !!searchQuery.trim();

    if (isSearching) {
      // Search across ALL articles irrespective of the active tab for maximum discoverability
      const q = searchQuery.toLowerCase().trim();
      list = articles.filter(art => {
        const titleMatch = Object.values(art.title).some(val => val.toLowerCase().includes(q));
        const descMatch = Object.values(art.description).some(val => val.toLowerCase().includes(q));
        const contentMatch = Object.values(art.content).some(val => val.toLowerCase().includes(q));
        return titleMatch || descMatch || contentMatch;
      });
      return list;
    }

    // Default behavior when NOT searching (partitioned by active tabs)
    if (activeSubMenu !== "insights") {
      // Services or Solutions are stored directly in their respective category names
      list = articles.filter(art => art.category === activeSubMenu);
    } else {
      // For insights filter by sub-category
      if (selectedCategory === "all") {
        list = articles.filter(art => art.category !== "services" && art.category !== "solutions");
      } else {
        list = articles.filter(art => art.category === selectedCategory);
      }
    }

    return list;
  }, [activeSubMenu, selectedCategory, articles, searchQuery]);

  const localizedText = {
    en: {
      badge: "KNOWLEDGE COMMONS",
      title: "Insight & Analysis",
      subtitle: "Advancing clinical workflows, patient equity, and software reliability in maternal healthcare.",
      categoriesTitle: "INSIGHT CATEGORIES",
      backToBlog: "Back to Insight list",
      readArticle: "Read Analysis",
      authorLabel: "Author",
      dateLabel: "Published",
      timeLabel: "Reading",
      takeawayTitle: "Clinical Value-Proposition:",
      tipsTitle: "Actionable Operational Guidelines:",
      noArticles: "No case documents currently match this category filter.",
      allCategoriesDesc: "Reviewing all curated medical insights and pregnancy timelines.",
      tabInsights: "Insights",
      tabServices: "Services",
      tabSolutions: "Solutions",
      servicesHeading: "EVE SERVICES PORTFOLIO & SPECIFICATIONS",
      solutionsHeading: "EVE SOLUTIONS PORTFOLIO & SPECIFICATIONS",
      searchPlaceholder: "Search insights, services, and solutions...",
      searchClear: "Clear Search",
      searchResultsFound: "Found {count} results for \"{query}\"",
      noResults: "No results matched your search query."
    },
    ms: {
      badge: "PUSAT PENGETAHUAN KLINIKAL",
      title: "Wawasan & Analisis",
      subtitle: "Mempertingkatkan aliran kerja klinikal, keadilan penjagaan pesakit, dan keselamatan perisian obstetrik.",
      categoriesTitle: "KATEGORI WAWASAN",
      backToBlog: "Kembali ke Senarai",
      readArticle: "Baca Analisis",
      authorLabel: "Penulis",
      dateLabel: "Diterbitkan",
      timeLabel: "Masa Membaca",
      takeawayTitle: "Cadangan Nilai Klinikal:",
      tipsTitle: "Garis Panduan Amalan Praktikal:",
      noArticles: "Tiada dokumen klinikal padan dengan penapis kategori ini.",
      allCategoriesDesc: "Meneliti semua wawasan perubatan kurasi dan garis masa kehamilan.",
      tabInsights: "Wawasan",
      tabServices: "Perkhidmatan",
      tabSolutions: "Penyelesaian",
      servicesHeading: "PORTFOLIO & SPESIFIKASI PERKHIDMATAN EVE",
      solutionsHeading: "PORTFOLIO & SPESIFIKASI PENYELESAIAN EVE",
      searchPlaceholder: "Cari wawasan, perkhidmatan dan penyelesaian...",
      searchClear: "Padam Carian",
      searchResultsFound: "Menemui {count} keputusan carian bagi \"{query}\"",
      noResults: "Tiada rekod padan dengan carian anda."
    },
    id: {
      badge: "PUSAT ILMU PENGETAHUAN KLINIKAL",
      title: "Wawasan & Analisis",
      subtitle: "Mengoptimalkan alur kerja klinis, kesetaraan pasien, dan keandalan sistem bersalin modern.",
      categoriesTitle: "KATEGORI WAWASAN",
      backToBlog: "Kembali ke Daftar",
      readArticle: "Baca Analisis",
      authorLabel: "Penulis",
      dateLabel: "Terbit",
      timeLabel: "Waktu Baca",
      takeawayTitle: "Proposisi Nilai Klinis:",
      tipsTitle: "Panduan Operasional Praktis Kehamilan:",
      noArticles: "Tidak ada dokumen analisis yang cocok dengan kategori ini.",
      allCategoriesDesc: "Melihat semua panduan kehamilan terverifikasi klinis.",
      tabInsights: "Wawasan",
      tabServices: "Layanan",
      tabSolutions: "Solusi",
      servicesHeading: "PORTOFOLIO & SPESIFIKASI LAYANAN EVE",
      solutionsHeading: "PORTOFOLIO & SPESIFIKASI SOLUSI EVE",
      searchPlaceholder: "Cari analisis, layanan, dan solusi EVE...",
      searchClear: "Bersihkan Carian",
      searchResultsFound: "Menampilkan {count} rujukan untuk \"{query}\"",
      noResults: "Hasil pencarian tidak ditemukan."
    },
    zh: {
      badge: "权威临床知识库",
      title: "前沿洞察与临床解析",
      subtitle: "致力于在孕产妇生命监护中，稳健推动临床工作流标准化、病患平权照护与数字系统高可靠性步伐。",
      categoriesTitle: "学术与科普洞察板块分类",
      backToBlog: "返回洞察研究列表",
      readArticle: "查阅深度解析",
      authorLabel: "研究学者",
      dateLabel: "发布日期",
      timeLabel: "建议阅读用时",
      takeawayTitle: "核心临床医疗价值主张：",
      tipsTitle: "循证家庭及临床实操指南：",
      noArticles: "非常抱歉，当前暂无匹配此学术分类的存档文献与案例文件。",
      allCategoriesDesc: "正在检索与查看所有精心编纂、经临床实证的母婴学识及孕期发展脉络。",
      tabInsights: "临床洞察",
      tabServices: "专业服务",
      tabSolutions: "解决方案",
      servicesHeading: "EVE 临床服务项目组合与技术规范编制",
      solutionsHeading: "EVE 行业解决方案技术指标与参考范式",
      searchPlaceholder: "搜寻医学洞察、临床服务或解决方案...",
      searchClear: "清空输入",
      searchResultsFound: "共发现与 \"{query}\" 相关的结果数为: {count} 个",
      noResults: "未找到符合检索条件的文章记录。"
    }
  };

  const currentLang = (language === "ms" || language === "id" || language === "zh") ? language : "en";
  const texts = localizedText[currentLang];

  return (
    <Section id={SECTIONS.BLOG} dark className="pt-28" gradientPlacement="top-left">
      {/* Article Detail View Screen */}
      <AnimatePresence mode="wait">
        {selectedArticle ? (
          <motion.div
            key="article-detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-zinc-950 border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl relative"
          >
            {/* Top Back Nav Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {texts.backToBlog}
            </button>

            {/* Sub-Header Metadata Banner */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 mb-6 font-mono tracking-wider uppercase border-b border-white/5 pb-6">
              <div className="flex items-center gap-2 text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20">
                <BookOpen className="w-3.5 h-3.5" />
                {categories.find(c => c.id === selectedArticle.category)?.name[currentLang] || selectedArticle.category.toUpperCase()}
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>{texts.authorLabel}: <strong>{selectedArticle.author[currentLang] || selectedArticle.author["en"]}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{texts.dateLabel}: <strong>{selectedArticle.date}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span><strong>{selectedArticle.readTime}</strong></span>
              </div>
            </div>

            {/* Split Header Layout: Image & Title */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-10 items-start">
              <div className="lg:col-span-8">
                <h1 className="text-2.5xl md:text-4.5xl font-black text-white tracking-tight uppercase leading-tight">
                  {selectedArticle.title[currentLang] || selectedArticle.title["en"]}
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed mt-4 font-light italic">
                  {selectedArticle.description[currentLang] || selectedArticle.description["en"]}
                </p>
              </div>

              {/* Large Image Frame */}
              <div className="lg:col-span-4 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl aspect-square flex items-center justify-center p-6 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title[currentLang] || selectedArticle.title["en"]}
                  className="w-full h-full object-contain max-h-[220px] filter drop-shadow-[0_10px_20px_rgba(79,70,229,0.15)] group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Rich Content Area */}
            <div className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed mb-10 text-sm md:text-base border-t border-white/5 pt-8 select-text">
              {(selectedArticle.content[currentLang] || selectedArticle.content["en"])
                .split("\n")
                .map((para: string) => para.trim())
                .filter(Boolean)
                .map((para: string, idx: number) => (
                  <p key={idx} className="text-gray-300 font-light text-justify select-text">
                    {para}
                  </p>
                ))}
            </div>

            {/* Clinical Value Box */}
            <div className="bg-gradient-to-r from-emerald-505/10 to-transparent border-l-4 border-emerald-500 rounded-r-2xl p-6 mb-8 bg-emerald-950/20">
              <h3 className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-2">
                {texts.takeawayTitle}
              </h3>
              <p className="text-emerald-100 text-sm leading-relaxed">
                {selectedArticle.clinicalTakeaway[currentLang] || selectedArticle.clinicalTakeaway["en"]}
              </p>
            </div>

            {/* Practical operational tip items list */}
            {(selectedArticle.practicalTips[currentLang] || selectedArticle.practicalTips["en"]) && (
              <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-indigo-500 rounded-full" />
                  {texts.tipsTitle}
                </h3>
                <ul className="space-y-3">
                  {(selectedArticle.practicalTips[currentLang] || selectedArticle.practicalTips["en"]).map((tip, i) => (
                    <li key={i} className="flex gap-3 text-xs md:text-sm text-gray-300 items-start leading-relaxed">
                      <span className="text-indigo-400 font-bold font-mono shrink-0 mt-0.5">{i + 1}.</span>
                      <span className="select-text">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Post-reading return arrow */}
            <div className="mt-12 flex justify-start">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-zinc-900 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-zinc-800 transition-all shadow-md flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                {texts.backToBlog}
              </button>
            </div>

          </motion.div>
        ) : (
          <div className="w-full">
            {/* Front Header Section */}
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs font-black tracking-[0.35em] text-indigo-400 uppercase bg-indigo-950/40 border border-indigo-500/20 px-4 py-2 rounded-full inline-block mb-3 shadow-md font-mono"
              >
                {texts.badge}
              </motion.span>
              <h2 className="text-2.5xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                {texts.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                {texts.subtitle}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto mt-6 rounded-full" />
            </div>

            {/* Elegant Search Form */}
            <div className="max-w-2xl mx-auto mb-12 px-4 animate-fade-in">
              <form onSubmit={(e) => e.preventDefault()} className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-400 transition-colors">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={texts.searchPlaceholder}
                  className="w-full pl-12 pr-12 py-4 bg-zinc-900/60 border border-white/10 rounded-2xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 backdrop-blur-md transition-all group-hover:border-white/20"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4 bg-white/5 p-0.5 rounded-full" />
                  </button>
                )}
              </form>
              
              {/* Search Info overlay */}
              {searchQuery && (
                <div className="text-center mt-3 text-xs font-mono text-indigo-400 flex items-center justify-center gap-2">
                  <span>
                    {texts.searchResultsFound
                      .replace("{count}", filteredArticles.length.toString())
                      .replace("{query}", searchQuery)}
                  </span>
                  <button 
                    onClick={() => setSearchQuery("")} 
                    className="underline text-gray-400 hover:text-white"
                  >
                    {texts.searchClear}
                  </button>
                </div>
              )}
            </div>

            {/* Submenus - Navigation tabs: Insights, Services, Solutions */}
            <div className="flex justify-center border-b border-white/10 max-w-md mx-auto mb-12">
              <div className="flex gap-6 w-full justify-between px-2">
                {(["insights", "services", "solutions"] as SubMenu[]).map((tab) => {
                  const isActive = activeSubMenu === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveSubMenu(tab);
                        setSelectedCategory("all"); // reset categories filter of insights
                      }}
                      className="text-sm font-bold uppercase tracking-wider relative py-3 px-1 transition-colors outline-none shrink-0"
                    >
                      <span className={isActive ? "text-white font-black" : "text-gray-500 hover:text-gray-300"}>
                        {tab === "insights" ? texts.tabInsights : tab === "services" ? texts.tabServices : texts.tabSolutions}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeSubMenuIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Core Submenu Views */}
            <div className="w-full">
              {searchQuery.trim() ? (
                /* UNIFIED SEARCH RESULTS BOARD */
                <div className="mt-4">
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono border-b border-white/5 pb-3">
                    <span className="text-gray-400 uppercase tracking-widest font-bold text-left">
                      {texts.searchResultsFound
                        .replace("{count}", filteredArticles.length.toString())
                        .replace("{query}", searchQuery)}
                    </span>
                    <span className="text-zinc-500 font-bold text-right uppercase tracking-[0.2em] hidden sm:inline">
                      {currentLang === "zh" ? "全局库分析匹配结果" : "GLOBAL SEARCH MATCHES"}
                    </span>
                  </div>

                  {filteredArticles.length === 0 ? (
                    <div className="text-center py-24 bg-zinc-900/20 border border-dashed border-white/10 rounded-3xl p-6">
                      <p className="text-gray-500 text-sm">{texts.noResults}</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                      {filteredArticles.map((art) => (
                        <motion.div
                          key={art.id}
                          layout
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          onClick={() => setSelectedArticle(art)}
                          className="bg-zinc-900/30 rounded-3xl border border-white/5 hover:border-indigo-500/30 hover:bg-zinc-900/40 transition-all duration-300 p-6 flex flex-col group justify-between cursor-pointer relative shadow-lg"
                        >
                          <div>
                            {/* Display category tag/badge based on main type */}
                            <div className="mb-4">
                              <span className={`text-[9px] font-mono font-black tracking-widest px-2.5 py-1 rounded-full border uppercase ${
                                art.category === "services" 
                                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                                  : art.category === "solutions"
                                  ? "bg-purple-500/10 border-purple-500/20 text-purple-300"
                                  : "bg-indigo-500/10 border-indigo-500/20 text-indigo-300"
                              }`}>
                                {art.category === "services" ? texts.tabServices : art.category === "solutions" ? texts.tabSolutions : texts.tabInsights}
                              </span>
                            </div>

                            {/* Thumbnail display box with onError safety */}
                            <div className="w-full h-40 rounded-2xl bg-zinc-950 overflow-hidden border border-white/5 mb-4 group-hover:border-indigo-500/10 transition-colors flex items-center justify-center p-3 relative">
                              <img
                                src={art.image}
                                alt={art.title[currentLang] || art.title["en"]}
                                className="h-full object-contain max-h-[120px] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter drop-shadow-[0_8px_16px_rgba(79,70,229,0.1)]"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                }}
                              />
                            </div>

                            <h3 className="text-base font-black text-white leading-snug tracking-tight mb-2 group-hover:text-indigo-300 transition-colors uppercase">
                              {art.title[currentLang] || art.title["en"]}
                            </h3>

                            <p className="text-gray-400 text-xs leading-relaxed mb-4 font-light line-clamp-3">
                              {art.description[currentLang] || art.description["en"]}
                            </p>
                          </div>

                          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                            <span className="text-[10px] text-gray-500 font-mono tracking-wider">
                              {art.date}
                            </span>
                            <span className="text-xs font-black text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 transition-colors uppercase tracking-widest">
                              {texts.readArticle}
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ) : activeSubMenu === "insights" ? (
                /* INSIGHTS SPLIT VIEW: Left Category Sidebar, Right Galleries Grid */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-4">
                  
                  {/* Left Side: List of Categories */}
                  <div className="lg:col-span-3 flex flex-col gap-2.5">
                    <h4 className="text-xs font-black tracking-widest text-indigo-400 uppercase font-mono mb-3 px-1 border-b border-white/5 pb-2">
                      {texts.categoriesTitle}
                    </h4>
                    <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2 shrink-0 scrollbar-none">
                      {categories.map((cat) => {
                        const isCatActive = selectedCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-3 rounded-2xl text-xs font-bold tracking-tight text-left uppercase transition-all duration-300 shrink-0 select-none border whitespace-nowrap ${
                              isCatActive
                                ? "bg-indigo-600/10 border-indigo-500/30 text-indigo-300 font-black shadow-lg shadow-indigo-500/5 translate-x-1 lg:translate-x-2"
                                : "bg-zinc-900/40 border-white/5 text-gray-400 hover:border-white/10 hover:text-white"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${isCatActive ? "bg-indigo-400" : "bg-gray-700"}`} />
                              {cat.name[currentLang]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Side: Image Galleries & Descriptions based on selected Categories */}
                  <div className="lg:col-span-9">
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono border-b border-white/5 pb-3">
                      <span className="text-gray-400 uppercase tracking-widest text-left">
                        {selectedCategory === "all" ? texts.allCategoriesDesc : categories.find(c => c.id === selectedCategory)?.name[currentLang]}
                      </span>
                      <span className="text-indigo-400 font-bold text-right">
                        {currentLang === "zh" ? `共检索到 ${filteredArticles.length} 篇学术文献` :
                         currentLang === "ms" ? `${filteredArticles.length} ARTIKEL DIJUMPAI` :
                         currentLang === "id" ? `${filteredArticles.length} ARTIKEL DITEMUKAN` :
                         `${filteredArticles.length} ARTICLE${filteredArticles.length !== 1 ? "S" : ""} FOUND`}
                      </span>
                    </div>

                    {filteredArticles.length === 0 ? (
                      <div className="text-center py-24 bg-zinc-900/20 border border-dashed border-white/10 rounded-3xl p-6">
                        <p className="text-gray-500 text-sm">{searchQuery ? texts.noResults : texts.noArticles}</p>
                      </div>
                    ) : (
                      /* GALLERIES CARD GRID */
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                        <AnimatePresence mode="popLayout">
                          {filteredArticles.map((art) => (
                            <motion.div
                              layout
                              key={art.id}
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                              onClick={() => setSelectedArticle(art)}
                              className="bg-zinc-900/30 rounded-3xl border border-white/5 hover:border-indigo-500/35 hover:bg-zinc-900/40 transition-all duration-300 p-6 flex flex-col group justify-between cursor-pointer relative shadow-lg overflow-hidden"
                            >
                              <div className="flex flex-col">
                                {/* Thumbnail Header Card */}
                                <div className="w-full h-44 rounded-2xl bg-zinc-950 overflow-hidden border border-white/5 mb-4 group-hover:border-indigo-500/20 transition-colors flex items-center justify-center p-4 relative">
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />
                                  <img
                                    src={art.image}
                                    alt={art.title[currentLang] || art.title["en"]}
                                    className="h-full object-contain max-h-[140px] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter drop-shadow-[0_8px_16px_rgba(79,70,229,0.15)]"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                      e.currentTarget.style.display = "none";
                                    }}
                                  />
                                </div>

                                {/* Label category tag */}
                                <div className="text-[10px] font-black tracking-widest text-indigo-400 uppercase font-mono mb-2">
                                  {categories.find(c => c.id === art.category)?.name[currentLang] || art.category}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-black text-white leading-snug tracking-tight mb-2 group-hover:text-indigo-300 transition-colors">
                                  {art.title[currentLang] || art.title["en"]}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                                  {art.description[currentLang] || art.description["en"]}
                                </p>
                              </div>

                              {/* Footer block buttons */}
                              <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                                <span className="text-xs text-gray-500 font-mono tracking-wider">
                                  {art.date}
                                </span>
                                <span className="text-xs font-black text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 transition-colors uppercase tracking-widest">
                                  {texts.readArticle}
                                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                </div>
              ) : (
                /* SERVICES OR SOLUTIONS SINGLE PAGES */
                <div className="mt-4">
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono border-b border-white/5 pb-3">
                    <span className="text-gray-400 uppercase tracking-widest font-bold text-left">
                      {activeSubMenu === "services" ? texts.servicesHeading : texts.solutionsHeading}
                    </span>
                    <span className="text-indigo-400 font-bold text-right">
                      {currentLang === "zh" ? `${filteredArticles.length} 篇存档文献资料` :
                       currentLang === "ms" ? `${filteredArticles.length} DOKUMEN DIKAYAKAN` :
                       currentLang === "id" ? `${filteredArticles.length} DOKUMEN TERKURASI` :
                       `${filteredArticles.length} DOCUMENTS CURATOR`}
                    </span>
                  </div>

                  {filteredArticles.length === 0 ? (
                    <div className="text-center py-24 bg-zinc-900/20 border border-dashed border-white/10 rounded-3xl p-6">
                      <p className="text-gray-500 text-sm">{searchQuery ? texts.noResults : texts.noArticles}</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                      {filteredArticles.map((art) => (
                        <motion.div
                          key={art.id}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          onClick={() => setSelectedArticle(art)}
                          className="bg-zinc-900/30 rounded-3xl border border-white/5 hover:border-emerald-500/30 hover:bg-zinc-900/40 transition-all duration-300 p-8 flex flex-col group justify-between cursor-pointer relative shadow-lg"
                        >
                          <div>
                            {/* Centered Image display for Service/Solution */}
                            <div className="w-full h-44 rounded-2xl bg-zinc-950 overflow-hidden border border-white/5 mb-6 group-hover:border-emerald-500/20 transition-colors flex items-center justify-center p-4">
                              <img
                                src={art.image}
                                alt={art.title[currentLang] || art.title["en"]}
                                className="h-full object-contain max-h-[140px] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter drop-shadow-[0_8px_16px_rgba(16,185,129,0.1)]"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                }}
                              />
                            </div>

                            <h3 className="text-xl font-black text-white leading-snug tracking-tight mb-3 group-hover:text-emerald-400 transition-colors uppercase">
                              {art.title[currentLang] || art.title["en"]}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                              {art.description[currentLang] || art.description["en"]}
                            </p>
                          </div>

                          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                            <span className="text-xs text-gray-500 font-mono tracking-wider">
                              SPEC: #{art.id.toUpperCase().substring(0, 10)}
                            </span>
                            <span className="text-xs font-black text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1 transition-colors uppercase tracking-widest">
                              {texts.readArticle}
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};
