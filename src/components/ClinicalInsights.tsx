import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Settings, 
  Activity, 
  Layers, 
  Database, 
  Key, 
  Smartphone, 
  Eye, 
  Lock, 
  RefreshCw, 
  Heart, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  LineChart,
  Grid
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Import the high-fidelity generated image securely
// @ts-ignore
import dashboardImg from "../assets/images/provider_dashboard_1779979068275.png";
// @ts-ignore
import home2Img from "../assets/images/home/home_2.png";
// @ts-ignore
import home1Img from "../assets/images/home/home_1.jpeg";

type OperationsKey = "mitigation" | "optimization" | "continuity";

interface DataPoint {
  label: string;
  value: number;
}

export const ClinicalInsights = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<OperationsKey>("mitigation");
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [authStatus, setAuthStatus] = useState<"idle" | "decrypting" | "verified">("idle");
  const [authLogs, setAuthLogs] = useState<string[]>([]);

  // Localization Dictionary
  const translations = {
    en: {
      sectionBadge: "CLINICAL DATA ENGINES",
      sectionTitle: "Operations & Data Spine",
      sectionSubtitle: "Empowering maternal health providers with longitudinal clarity and actionable clinical insights.",
      
      // Trio Navigation Buttons
      mitigationLabel: "Risk Mitigation",
      optimizationLabel: "Workflow Optimization",
      continuityLabel: "Continuity of Care",

      // Risk Mitigation Text
      mitigationTitle: "Proactive Risk Mitigation",
      mitigationDesc: "Access comprehensive history (allergies, prior complications, genetic markers) instantly to reduce clinical error.",
      mitigationMetric: "99.4% Alert Accuracy",

      // Workflow Optimization Text
      optimizationTitle: "Algorithmic Workflow Optimization",
      optimizationDesc: "Spend less time chasing paper records and more time on high-value clinical intervention.",
      optimizationMetric: "45% Intake Time Saved",

      // Continuity of Care Text
      continuityTitle: "Seamless Continuity of Care",
      continuityDesc: "Seamlessly hand off or receive patients within the EVE platform.",
      continuityMetric: "Zero Data Gap Transfers",

      // Section 2: Interactive Data Orchestration
      dataTitle: "Clinical Hub Data Pipeline",
      dataSubtitle: "Inspect how data enters, gets secured through authorized consent, and serves the care team.",

      // Column 1: Input source (Data In)
      inputTitle: "1. Input Source (Data In)",
      inputDesc: "Telemetry streams in from disconnected streams into the unified spine. Click a source to filter simulated live bandwidth:",
      sourceAll: "All Ingestion",
      sourceEhr: "EHR APIs",
      sourcePatient: "EVE Patient App",
      sourceLabs: "Lab PDFs/FHIR",
      sourceDevices: "Portable Vitals",
      chartVolumeLabel: "Spine Data Bandwidth (kb/s)",

      // Column 2: Authorization Clarity
      authTitle: "2. Authorization Data Clarity",
      authDesc: "Real-time compliance validation. All data undergoes secure cryptographic validation before provider access is provisioned.",
      btnSimulateAuth: "Initialize Clearance Audit",
      authStatusIdle: "System Awaiting Authorization Request",
      authStatusActive: "Reconciling cryptographic handshake with user consents...",
      authStatusCompleted: "Access Granted. Longitudinal record decrypted with complete clinical audit trail.",
      authTermVerification: "Audit Logs",

      // Column 3: Provider Dashboard
      dashboardTitle: "3. Provider Dashboard",
      dashboardDesc: "Live presentation inside the clinic. Medical professionals access clean, longitudinal summaries with zero fragmented silos.",
      dashboardOverlayStatus: "LIVE PATIENT LOGGED IN",
      dashboardHighlight1: "Dynamic Telemetry Graphing",
      dashboardHighlight2: "Clinical Risk Indicator Alerts",
      longitudinalTitle: "Longitudinal Patient Record",
      longitudinalDesc1: "significantly mitigates risk for both mother and baby through a unified, persistent record.",
      longitudinalDesc2: "unlocks scalable intelligence and system-wide health insights, positioning the platform as a powerful PaaS essential for modernizing the maternal and fertility care ecosystem",
      diagramBadge: "INTERCONNECTED PLATFORM ECOSYSTEM",
      diagramTitle: "Ecosystem Interconnectivity",
      diagramSubtitle: "See how all key stakeholders and architectures sync seamlessly into EVE's central spine.",
      user1Title: "Healthcare Provider",
      user1Value: "Integrated clinical data for precise, efficient decisions",
      user2Title: "Partners / Institutions",
      user2Value: "Broad Insights and seamless compliance across settings",
      user3Title: "Mothers",
      user3Value: "Own your comprehensive record and ensure smooth hand-offs.",
      outputTitle: "System Output",
      outputValue: "Unified Record. Optimize Outcomes",
      architectureTitle: "Maternal Data Spine Architecture",
      architectureValue: "Maternal Health Record Integration",
      centralHubTitle: "EVE Data Spine Core",
      centralHubStatus: "SECURE INGESTION ACTIVE"
    },
    ms: {
      sectionBadge: "ENJIN DATA KLINIKAL",
      sectionTitle: "Operasi & Tulang Belakang Data",
      sectionSubtitle: "Memperkasakan penyedia kesihatan ibu bersalin dengan kejelasan membujur dan pandangan klinikal yang boleh diambil tindakan.",
      
      mitigationLabel: "Pengurangan Risiko",
      optimizationLabel: "Pengoptimuman Aliran Kerja",
      continuityLabel: "Kesinambungan Penjagaan",

      mitigationTitle: "Pengurangan Risiko Proaktif",
      mitigationDesc: "Akses kepada sejarah klinikal yang lengkap (alahan, komplikasi terdahulu, penanda genetik) dengan cepat untuk mengurangkan ralat klinikal.",
      mitigationMetric: "Akurasi Amaran 99.4%",

      optimizationTitle: "Pengoptimuman Kerja Berasaskan Algoritma",
      optimizationDesc: "Mengurangkan masa yang dihabiskan untuk mencari rekod berasaskan kertas dan boleh tumpukan lebih banyak masa untuk intervensi klinikal.",
      optimizationMetric: "45% Penjimatan Masa",

      continuityTitle: "Kesinambungan Penjagaan Yang Lancar",
      continuityDesc: "Memudahkan proses pemindahan atau penerimaan pesakit secara lancar dalam platform EVE.",
      continuityMetric: "Pemindahan Tanpa Jurang Data",

      dataTitle: "Saluran Saluran Data Hab Klinikal",
      dataSubtitle: "Lihat cara data masuk, dikawal melalui kebenaran selamat, dan membantu pasukan penjagaan.",

      inputTitle: "1. Sumber Input (Data Masuk)",
      inputDesc: "Aliran telemetri masuk daripada sumber terasing ke dalam tulang belakang bersatu. Klik sumber untuk menapis had lebar jalur:",
      sourceAll: "Semua Pengambilan",
      sourceEhr: "EHR API",
      sourcePatient: "Aplikasi Pesakit",
      sourceLabs: "Makmal PDF/FHIR",
      sourceDevices: "Vitals Mudah Alih",
      chartVolumeLabel: "Lebar Jalur Data (kb/s)",

      authTitle: "2. Kejelasan Data Kebenaran (Sahkan)",
      authDesc: "Pengesahan pematuhan masa nyata. Semua data menjalani pengesahan kriptografi yang selamat sebelum akses diberikan.",
      btnSimulateAuth: "Mulakan Audit Pelepasan",
      authStatusIdle: "Sistem Menunggu Permintaan Kebenaran",
      authStatusActive: "Menyelaraskan jabat tangan kriptografi dengan kebenaran pesakit...",
      authStatusCompleted: "Akses Diberikan. Rekod dinyahsulit dengan audit klinikal yang lengkap.",
      authTermVerification: "Log Audit",

      dashboardTitle: "3. Papan Pemuka Penyedia",
      dashboardDesc: "Pembentangan langsung dalam klinik. Pakar perubatan mengakses ringkasan membujur yang bersih tanpa sekat-sekat data asing.",
      dashboardOverlayStatus: "PESAKIT LANGSUNG LOG MASUK",
      dashboardHighlight1: "Graf Telemetri Dinamik",
      dashboardHighlight2: "Isyarat Petunjuk Risiko Klinikal",
      longitudinalTitle: "Rekod Pesakit Longitudinal",
      longitudinalDesc1: "dengan ketara mengurangkan risiko untuk ibu dan bayi melalui rekod yang bersatu dan berterusan.",
      longitudinalDesc2: "membuka kunci kecerdasan berskala dan pandangan kesihatan menyeluruh sistem, menjadikan platform sebagai PaaS berkuasa yang penting untuk memodenkan ekosistem penjagaan ibu dan kesuburan",
      diagramBadge: "EKOSISTEM PLATFORM TERHUBUNG",
      diagramTitle: "Kesalinghubungan Ekosistem",
      diagramSubtitle: "Lihat bagaimana semua pihak berkepentingan dan seni bina disegerakkan ke tulang belakang EVE.",
      user1Title: "Penyedia Penjagaan Kesihatan",
      user1Value: "Data klinikal bersepadu untuk keputusan yang tepat dan cekap",
      user2Title: "Rakan Kongsi / Institusi",
      user2Value: "Wawasan luas dan pematuhan lancar merentas pelbagai tetapan",
      user3Title: "Ibu Bersalin",
      user3Value: "Miliki rekod komprehensif anda dan pastikan pemindahan yang lancar.",
      outputTitle: "Hasil Sistem",
      outputValue: "Rekod Bersatu. Mengoptimumkan Hasil Keputusan",
      architectureTitle: "Seni Bina Tulang Belakang Data Ibu",
      architectureValue: "Integrasi Rekod Kesihatan Ibu",
      centralHubTitle: "Teras Tulang Belakang Data EVE",
      centralHubStatus: "INGESTI SELAMAT AKTIF"
    },
    id: {
      sectionBadge: "MESIN DATA KLINIS",
      sectionTitle: "Operasi & Tulang Punggung Data",
      sectionSubtitle: "Memberdayakan penyedia kesehatan ibu dengan kejelasan longitudinal dan wawasan klinis yang dapat ditindaklanjuti.",
      
      mitigationLabel: "Mitigasi Risiko",
      optimizationLabel: "Optimalisasi Alur Kerja",
      continuityLabel: "Kontinuitas Perawatan",

      mitigationTitle: "Mitigasi Risiko Proaktif",
      mitigationDesc: "Akses riwayat klinis yang lengkap (alergi, komplikasi sebelumnya, penanda genetik) untuk mengurangi kesalahan klinis secara langsung.",
      mitigationMetric: "Akurasi Peringatan 99.4%",

      optimizationTitle: "Optimalisasi Alur Kerja Algoritmik",
      optimizationDesc: "Kurangi waktu yang dihabiskan untuk mencari rekam medis berbasis kertas dan fokus lebih banyak pada intervensi klinis yang bernilai tinggi.",
      optimizationMetric: "45% Waktu Hemat",

      continuityTitle: "Kontinuitas Perawatan yang Sempurna",
      continuityDesc: "Memungkinkan proses rujukan dan penerimaan pasien secara mulus di dalam platform EVE.",
      continuityMetric: "Transfer Tanpa Hambatan Data",

      /* sample comments */

      dataTitle: "Pipa Data Hub Klinis",
      dataSubtitle: "Pelajari bagaimana data masuk, diamankan melalui izin otorisasi yang jelas, hingga tersaji di panel pemantauan dokter.",

      inputTitle: "1. Sumber Input (Data Masuk)",
      inputDesc: "Aliran telemetri masuk dari berbagai sumber klinis terpisah ke dalam tulang punggung sistem. Klik sumber untuk memfilter bandwidth:",
      sourceAll: "Semua Ingesti",
      sourceEhr: "Integrasi EHR",
      sourcePatient: "Aplikasi Pasien EVE",
      sourceLabs: "Lab FHIR PDF",
      sourceDevices: "Perangkat Medis",
      chartVolumeLabel: "Bandwidth Data Spine (kb/s)",

      authTitle: "2. Kejelasan Otorisasi Data",
      authDesc: "Validasi kepatuhan HIPAA & persetujuan pasien. Data divalidasi dengan enkripsi ujung-ke-ujung sebelum disajikan di dasbor.",
      btnSimulateAuth: "Mulai Audit Otorisasi",
      authStatusIdle: "Sistem Menunggu Permintaan Akses",
      authStatusActive: "Menyelaraskan kunci enkripsi dengan izin konsen pasien...",
      authStatusCompleted: "Akses Disetujui. Rekor didekripsi dengan jejak audit klinis yang mematuhi standar hukum.",
      authTermVerification: "Log audit otomatis",

      dashboardTitle: "3. Dasbor Tim Medis (Provider Dashboard)",
      dashboardDesc: "Penyajian antarmuka langsung bagi dokter di ruang perawatan. Menyajikan visualisasi rekam medis secara menyeluruh.",
      dashboardOverlayStatus: "MONITOR PASIEN AKTIF",
      dashboardHighlight1: "Grafik Tekanan & Telemetri Real-time",
      dashboardHighlight2: "Sinyal Peringatan Risiko Otomatis",
      longitudinalTitle: "Rekam Medis Pasien Longitudinal",
      longitudinalDesc1: "secara signifikan mengurangi risiko bagi ibu dan bayi melalui rekam medis yang terpadu dan persisten.",
      longitudinalDesc2: "membuka kecerdasan yang skalabel dan wawasan kesehatan di seluruh sistem, memposisikan platform ini sebagai PaaS yang kuat dan esensial untuk memodernisasi ekosistem perawatan ibu melahirkan dan kesuburan",
      diagramBadge: "EKOSISTEM PLATFORM TERINTEGRASI",
      diagramTitle: "Interkonektivitas Ekosistem",
      diagramSubtitle: "Lihat bagaimana seluruh pemangku kepentingan dan arsitektur tersinkronisasi sempurna dalam tulang punggung EVE.",
      user1Title: "Penyedia Layanan Kesehatan",
      user1Value: "Data klinis terintegrasi untuk pengambilan keputusan yang tepat dan efisien",
      user2Title: "Mitra / Institusi",
      user2Value: "Wawasan luas dan kepatuhan yang lancar di berbagai pengaturan klinis",
      user3Title: "Ibu Hamil",
      user3Value: "Miliki rekam medis lengkap Anda sendiri dan pastikan rujukan yang mulus.",
      outputTitle: "Output Sistem",
      outputValue: "Rekor Terpadu. Mengoptimalkan Hasil Klinis",
      architectureTitle: "Arsitektur Tulang Punggung Data Kesehatan Ibu",
      architectureValue: "Integrasi Rekam Medis Kesehatan Ibu",
      centralHubTitle: "Inti Tulang Punggung Data EVE",
      centralHubStatus: "INGESTI AMAN AKTIF"
    },
    zh: {
      sectionBadge: "临床数字化运作中枢",
      sectionTitle: "临床运营与数据中枢",
      sectionSubtitle: "通过全景纵向健康数据与极简临床系统，赋予孕产妇医护团队更强的临床决策力。",
      
      mitigationLabel: "风险缓释",
      optimizationLabel: "工作流优化",
      continuityLabel: "无缝持续护理",

      mitigationTitle: "前瞻性临床风险缓释",
      mitigationDesc: "EVE 系统智能分析实时流入的母婴 telemetries 遥测数据，并同步比对历史病例画像，自动标记先兆子痫病征或异常的心血管指标。助力医师在症状恶化前精准施策。",
      mitigationMetric: "99.4% 预警准确率",

      optimizationTitle: "算法化临床工作流优化",
      optimizationDesc: "通过自动化打通跨机构临床数据的智能对账，完美省去重复手工录入。帮助护理人员显著缓解冗余录入引发的认知疲劳，单名患者就诊录入省时高达 14.5 分钟。",
      optimizationMetric: "节省 45% 接诊耗时",

      continuityTitle: "无缝持续性母婴监护",
      continuityDesc: "在孕妇从地方妇产诊所紧急转诊至大型医院的重症流转场景下，EVE 维持唯一且不受割裂的纵向数据中枢。确保介入的核心会诊团队在几秒内全面同步了解患者体征。",
      continuityMetric: "数据流转零缺口",

      dataTitle: "临床数据管道吞吐",
      dataSubtitle: "现场探索临床数据是如何摄入、如何经过授权加密、并在专业医生面板端安全展示的。",

      inputTitle: "1. 输入源(数据流入)",
      inputDesc: "各路离散母婴流数据被吞吐至统一的数据中枢。点击节点过滤观察对应的实时链路带宽量:",
      sourceAll: "全源吞吐",
      sourceEhr: "EHR 机构接口",
      sourcePatient: "EVE 孕期应用",
      sourceLabs: "实验室 FHIR 文档",
      sourceDevices: "可穿戴医疗设备",
      chartVolumeLabel: "数据中枢带宽速率 (kb/s)",

      authTitle: "2. 授权明确性与安全性",
      authDesc: "实时合规核验。所有入驻数据均须经过深度加密指纹鉴权，且必须取得患者主动签署的隐私安全授权。",
      btnSimulateAuth: "初始化合规安全校验",
      authStatusIdle: "系统处于待解密鉴权状态",
      authStatusActive: "正在发起安全指纹签名与隐私授信库匹配...",
      authStatusCompleted: "鉴权成功。纵向数字生命体征历史记录已解密展示，并已留存合法审计链。",
      authTermVerification: "自动化安全审计日志",

      dashboardTitle: "3. 临床专科医生工作站",
      dashboardDesc: "临床环境下的极简大屏呈现。允许妇产核心团队摒弃传统的碎片孤岛信息，一键透析全局纵向走势。",
      dashboardOverlayStatus: "活动病监患者已登录",
      dashboardHighlight1: "动态核心体征折线走势",
      dashboardHighlight2: "AI 异常临床指征亮色警示",
      longitudinalTitle: "纵向患者健康档案 (Longitudinal Patient Record)",
      longitudinalDesc1: "通过统一、持久的健康记录，显著降低母亲和婴儿的安全风险。",
      longitudinalDesc2: "解锁可大规模扩展的数据智能域与系统级健康洞察，将平台定位为现代化孕产妇与生育保健生态系统所必需的强大 PaaS 服务质量体系。",
      diagramBadge: "生态系统整合互联",
      diagramTitle: "多维生态互联架构",
      diagramSubtitle: "透视多方关键角色与系统架构如何完美同步融入 EVE 核心数据中枢。",
      user1Title: "医疗机构与医师",
      user1Value: "集成化的完整临床数据，助力精确且高效的临床决策",
      user2Title: "企业合作伙伴 / 诊所机构",
      user2Value: "全局健康大洞察与跨场景无缝合规运行",
      user3Title: "孕产妇",
      user3Value: "掌控个人完整的健康档案，确保每一次转诊与流转顺畅无阻。",
      outputTitle: "核心价值输出",
      outputValue: "统一健康记录，优化母婴生存质量",
      architectureTitle: "母婴数据中枢架构",
      architectureValue: "母婴专属健康记录深度整合",
      centralHubTitle: "EVE 核心数据脊柱",
      centralHubStatus: "安全摄入引擎运行中"
    }
  };

  const text = translations[language] || translations.en;

  // Interactive Operations Data Display mapping
  const operationsContent = {
    mitigation: {
      title: text.mitigationTitle,
      desc: text.mitigationDesc,
      metric: text.mitigationMetric,
      icon: <ShieldCheck className="text-pink-500" size={36} />,
      color: "border-pink-500/30",
      accent: "text-pink-400"
    },
    optimization: {
      title: text.optimizationTitle,
      desc: text.optimizationDesc,
      metric: text.optimizationMetric,
      icon: <Settings className="text-indigo-500" size={36} />,
      color: "border-indigo-500/30",
      accent: "text-indigo-400"
    },
    continuity: {
      title: text.continuityTitle,
      desc: text.continuityDesc,
      metric: text.continuityMetric,
      icon: <Activity className="text-emerald-500" size={36} />,
      color: "border-emerald-500/30",
      accent: "text-emerald-400"
    }
  };

  // Interactive Input Source Chart Details (Simulated flow values for SVG charts)
  const chartData: Record<string, DataPoint[]> = {
    all: [
      { label: "00:00", value: 45 },
      { label: "04:00", value: 38 },
      { label: "08:00", value: 85 },
      { label: "12:00", value: 120 },
      { label: "16:00", value: 95 },
      { label: "20:00", value: 110 },
      { label: "24:00", value: 65 },
    ],
    ehr: [
      { label: "00:00", value: 10 },
      { label: "04:00", value: 5 },
      { label: "08:00", value: 40 },
      { label: "12:00", value: 65 },
      { label: "16:00", value: 30 },
      { label: "20:00", value: 55 },
      { label: "24:00", value: 20 },
    ],
    patient: [
      { label: "00:00", value: 15 },
      { label: "04:00", value: 20 },
      { label: "08:00", value: 25 },
      { label: "12:00", value: 30 },
      { label: "16:00", value: 45 },
      { label: "20:00", value: 35 },
      { label: "24:00", value: 25 },
    ],
    labs: [
      { label: "00:00", value: 5 },
      { label: "04:00", value: 3 },
      { label: "08:00", value: 10 },
      { label: "12:00", value: 15 },
      { label: "16:00", value: 8 },
      { label: "20:00", value: 12 },
      { label: "24:00", value: 5 },
    ],
    devices: [
      { label: "00:00", value: 15 },
      { label: "04:00", value: 10 },
      { label: "08:00", value: 10 },
      { label: "12:00", value: 10 },
      { label: "16:00", value: 12 },
      { label: "20:00", value: 8 },
      { label: "24:00", value: 15 },
    ],
  };

  const activePoints = chartData[selectedSource] || chartData.all;
  const maxValue = Math.max(...activePoints.map(p => p.value));

  // Run a cryptographic audit verification simulation
  const handleAuthSimulation = () => {
    setAuthStatus("decrypting");
    setAuthLogs([]);
    
    const steps = [
      "⚡ Establishing connection to secured patient spine server...",
      "🔑 Validating patient consent signature against OAuth profile...",
      "🛡️ Success. Verified HIPAA encryption tunnel with SHA-256 hash...",
      "🌐 Longitudinal patient records extracted successfully. Loading logs."
    ];

    steps.forEach((line, index) => {
      setTimeout(() => {
        setAuthLogs(prev => [...prev, line]);
        if (index === steps.length - 1) {
          setAuthStatus("verified");
        }
      }, (index + 1) * 600);
    });
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-zinc-950/80 border-t border-white/5 overflow-hidden">
      {/* Dynamic light visual backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1 text-[10px] tracking-[0.3em] font-mono text-indigo-400 font-extrabold uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 mb-4 block mx-auto w-fit">
            <Layers size={11} />
            {text.sectionBadge}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
            {text.sectionTitle}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {text.sectionSubtitle}
          </p>
        </div>

        {/* Part 1: Risk Mitigation, Workflow Optimization, and Continuity of Care Trio Tabs */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-28">
          
          {/* Left Column: Vertical Segment Controls */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <button
              onClick={() => setActiveTab("mitigation")}
              className={`p-5 rounded-3xl text-left border transition-all cursor-pointer flex items-center justify-between ${activeTab === 'mitigation' ? 'bg-white/5 border-pink-500/30 text-white shadow-lg' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <div className="flex items-center gap-4">
                <ShieldCheck className={`${activeTab === 'mitigation' ? 'text-pink-400' : 'text-gray-500'}`} size={24} />
                <span className="font-bold text-sm tracking-tight uppercase">{text.mitigationLabel}</span>
              </div>
              <span className={`w-2 h-2 rounded-full ${activeTab === 'mitigation' ? 'bg-pink-400' : 'bg-transparent'}`} />
            </button>

            <button
              onClick={() => setActiveTab("optimization")}
              className={`p-5 rounded-3xl text-left border transition-all cursor-pointer flex items-center justify-between ${activeTab === 'optimization' ? 'bg-white/5 border-indigo-500/30 text-white shadow-lg' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <div className="flex items-center gap-4">
                <Settings className={`${activeTab === 'optimization' ? 'text-indigo-400' : 'text-gray-500'}`} size={24} />
                <span className="font-bold text-sm tracking-tight uppercase">{text.optimizationLabel}</span>
              </div>
              <span className={`w-2 h-2 rounded-full ${activeTab === 'optimization' ? 'bg-indigo-400' : 'bg-transparent'}`} />
            </button>

            <button
              onClick={() => setActiveTab("continuity")}
              className={`p-5 rounded-3xl text-left border transition-all cursor-pointer flex items-center justify-between ${activeTab === 'continuity' ? 'bg-white/5 border-emerald-500/30 text-white shadow-lg' : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <div className="flex items-center gap-4">
                <Activity className={`${activeTab === 'continuity' ? 'text-emerald-400' : 'text-gray-500'}`} size={24} />
                <span className="font-bold text-sm tracking-tight uppercase">{text.continuityLabel}</span>
              </div>
              <span className={`w-2 h-2 rounded-full ${activeTab === 'continuity' ? 'bg-emerald-400' : 'bg-transparent'}`} />
            </button>
          </div>

          {/* Right Column: Interactive Highlight Display Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className={`p-10 rounded-[40px] bg-gradient-to-br from-white/5 via-black/30 to-zinc-950 border ${operationsContent[activeTab].color} relative overflow-hidden flex flex-col justify-between min-h-[320px]`}
              >
                {/* Background decorative glowing dot */}
                <div className="absolute top-4 right-4 text-white/5 animate-pulse">
                  {operationsContent[activeTab].icon}
                </div>

                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {operationsContent[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase">
                      {operationsContent[activeTab].title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4 font-normal">
                      {operationsContent[activeTab].desc}
                    </p>
                  </div>
                </div>

                {/* Operations Metric Display */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">

                  <div className={`flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-xl font-bold font-mono text-xs ${operationsContent[activeTab].accent}`}>
                    <Sparkles size={12} className="animate-spin" />
                    <span>{operationsContent[activeTab].metric}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Section 2: Clinical Data Pipeline (Three interactive panels in column grids) */}
        <div>
          <div className="mb-14 text-center md:text-left">
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-2 flex items-center gap-2 justify-center md:justify-start">
              <RefreshCw size={24} className="text-indigo-400 animate-spin-slow" />
              {text.dataTitle}
            </h3>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
              {text.dataSubtitle}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center mt-6"
          >
            <div className="relative w-full max-w-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950/40 p-4">
              <img 
                src={home1Img} 
                alt="Clinical Hub Data Pipeline Flow Diagram" 
                className="w-full h-auto object-cover rounded-2xl"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  console.error("Failed to load home_1 image");
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Longitudinal Patient Record Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 p-8 md:p-14 rounded-[40px] bg-gradient-to-r from-indigo-950/20 via-zinc-950/40 to-black border border-white/10 relative overflow-hidden text-center md:text-left shadow-2xl"
        >
          {/* Decorative floating grids/visual dots */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-12 gap-10 items-center">
            {/* Title Block */}
            <div className="md:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                <Sparkles size={11} className="animate-pulse" />
                PaaS Innovation
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter uppercase leading-none">
                {text.longitudinalTitle}
              </h3>
            </div>

            {/* Content description columns */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  <span className="font-extrabold text-white uppercase tracking-tight block text-xs mb-1 text-emerald-400">Risk Mitigation</span>
                  {text.longitudinalDesc1}
                </p>
              </div>

              <div className="flex gap-4 items-start border-t border-white/5 pt-6">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <TrendingUp size={16} className="animate-pulse" />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  <span className="font-extrabold text-white uppercase tracking-tight block text-xs mb-1 text-indigo-400">Platform-As-A-Service (PaaS)</span>
                  {text.longitudinalDesc2}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stakeholder Ecosystem Connector Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 w-full flex justify-center"
        >
          <div className="relative w-full max-w-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950/40 p-4">
            <img 
              src={home2Img} 
              alt="Ecosystem Connectivity and Central Spine Architecture" 
              className="w-full h-auto object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
