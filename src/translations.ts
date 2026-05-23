export type Language = "en" | "ms" | "id" | "zh";

export interface ArticleTranslation {
  title: string;
  excerpt: string;
  content: string;
  spiritualNote: string;
  tips: string[];
}

export interface TranslationSet {
  nav: {
    home: string;
    about: string;
    product: string;
    contact: string;
    sendMessage: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleAccent: string;
    title2: string;
    desc: string;
    exploreBtn: string;
    messageBtn: string;
    accuracy: string;
    support: string;
    patients: string;
  };
  about: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    missionTitle: string;
    missionDesc: string;
    patientTitle: string;
    patientDesc: string;
    excellenceTitle: string;
    excellenceDesc: string;
    cmo: string;
  };
  product: {
    badge: string;
    title: string;
    systemTab: string;
    educationTab: string;
    systemTitle: string;
    systemDesc: string;
    systemF1: string;
    systemF2: string;
    systemF3: string;
    systemF4: string;
    highlight1: string;
    highlight2: string;
    statusActive: string;
    statusLabel: string;
    visitWebBtn: string;
  };
  education: {
    livePortal: string;
    title: string;
    officialWebBtn: string;
    slogan: string;
    quote: string;
    quoteDesc: string;
    searchPlaceholder: string;
    catAll: string;
    catPre: string;
    catPreg: string;
    catLabor: string;
    catDelivery: string;
    readArticle: string;
    noResults: string;
    clearFilters: string;
    // Tracker
    trackerTitle: string;
    trackerDesc: string;
    sessionKicks: string;
    kickGoal: string;
    btnRecord: string;
    btnReset: string;
    btnSaveLog: string;
    historyTitle: string;
    movements: string;
    // Checklist
    checklistTitle: string;
    checklistDesc: string;
    // Dialog
    closeArticle: string;
    readFullCopy: string;
    keyTipsTitle: string;
  };
  contact: {
    badge: string;
    title: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    sendBtn: string;
    socialTitle: string;
    officialChannels: string;
  };
  popup: {
    successTitle: string;
    successDesc: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitting: string;
    submitBtn: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
  articles: Record<string, ArticleTranslation>;
  checklistItems: string[];
}

export const translations: Record<Language, TranslationSet> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      product: "Product",
      contact: "Contact Us",
      sendMessage: "Send Message",
    },
    hero: {
      badge: "Professional Medical Solutions",
      title1: "ADVANCING",
      titleAccent: "HEALTHCARE",
      title2: "TOGETHER",
      desc: "EVE Medic provides clinical clarity and a seamless care experience from first kick to birth. Explore our platform for cutting-edge medical systems and education.",
      exploreBtn: "Explore the Platform",
      messageBtn: "Send Message",
      accuracy: "Accuracy",
      support: "Support",
      patients: "Patients",
    },
    about: {
      badge: "About EVE Medic",
      title1: "REDEFINING THE",
      title2: "MEDICAL EXPERIENCE.",
      desc: "At EVE Medic, we believe in the power of clarity. Our systems are designed to provide a comprehensive snapshot of a patient's health, allowing doctors to make informed decisions faster and with more confidence than ever before.",
      missionTitle: "Our Mission",
      missionDesc: "To empower healthcare professionals with clinical clarity and seamless digital tools that prioritize patient outcomes.",
      patientTitle: "Patient Focused",
      patientDesc: "From the first kick to birth, we ensure a safe and monitored journey for every patient through data-driven insights.",
      excellenceTitle: "Excellence",
      excellenceDesc: "EVE System represents the pinnacle of medical technology, integrating education and practice into one unified platform.",
      cmo: "Chief Medical Officer",
    },
    product: {
      badge: "Our Offering",
      title: "THE PLATFORM.",
      systemTab: "EVE System",
      educationTab: "EVE Education",
      systemTitle: "EVE System",
      systemDesc: "A revolutionary health monitoring ecosystem for precision medicine.",
      systemF1: "Doctor can only access a snapshot of a patient's health condition",
      systemF2: "Clinical Clarity at a Glance",
      systemF3: "Seamless Care from First Kick to Birth",
      systemF4: "Real-time health telemetry integration",
      highlight1: "Health Snapshot",
      highlight2: "Instant Clarity",
      statusActive: "ACTIVE",
      statusLabel: "Status",
      visitWebBtn: "Visit evemedic.co",
    },
    education: {
      livePortal: "Live Portal: evemedic.co",
      title: "EVE Education Hub",
      officialWebBtn: "Go to official Website",
      slogan: "Care • Connect • Empower",
      quote: "With Every Mother, Every Step — Towards a Better Beginning",
      quoteDesc: "Diving deep into the world of maternal clarity, fetal health tracking, and interactive community guides compiled directly from the certified evemedic.co platform.",
      searchPlaceholder: "Search pregnancy insights, labour, delivery preparation...",
      catAll: "All Insights",
      catPre: "Pre-Pregnancy",
      catPreg: "Pregnancy",
      catLabor: "Labor",
      catDelivery: "Delivery",
      readArticle: "Read Article",
      noResults: "No medical insights matched your search terms.",
      clearFilters: "Clear Filters",
      trackerTitle: "Mummy's Kick Tracker",
      trackerDesc: "Every movement matters, every kick counts. Count 10 baby movements in an active session.",
      sessionKicks: "Session Kicks",
      kickGoal: "Goal: 10 kicks",
      btnRecord: "Record Kick +1",
      btnReset: "Reset",
      btnSaveLog: "Save to Daily Log",
      historyTitle: "Saved Session History:",
      movements: "movements",
      checklistTitle: "Delivery Bag Essentials",
      checklistDesc: "Pack your labor room toolkit by week 36 to reduce last minute stress.",
      closeArticle: "Close Article",
      readFullCopy: "Read full copy at evemedic.co",
      keyTipsTitle: "Key Clinical & Practical Tips:",
    },
    contact: {
      badge: "Connect With Us",
      title: "GET IN TOUCH.",
      emailLabel: "Email Address",
      locationLabel: "Location",
      locationValue: "Global Medical Network",
      sendBtn: "Send Application Message",
      socialTitle: "Social Platforms",
      officialChannels: "Official EVE Medic Channels",
    },
    popup: {
      successTitle: "SUCCESS!",
      successDesc: "Your message has been sent. We'll contact you soon.",
      title: "SEND MESSAGE.",
      subtitle: "We'd love to hear from you.",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "How can we help?",
      submitting: "Sending...",
      submitBtn: "Send Message",
    },
    footer: {
      rights: "EVE Medic. All rights reserved. Professional Healthcare Platform.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    checklistItems: [
      "Identity cards / medical booklets",
      "Comfortable nightgowns & nursing bras",
      "Newborn outfits & baby swaddle blankets",
      "Maternity pads & personal toiletries",
      "Slippers & warm cozy socks",
      "Phone, camera & extra-long chargers"
    ],
    articles: {
      "preparing-body": {
        title: "Preparing Your Body for Pregnancy",
        excerpt: "Preparing your body for pregnancy is more than physical readiness—it is a holistic journey of nourishing your body, tending to emotions, and welcoming new life.",
        content: "Preparing your body for pregnancy is a sacred, holistic journey. It begins with physical readiness but extends deeply into nurturing your emotional well-being, creating a calm/stable environment, and aligning your spiritual energy. Focus on whole-food nutrition, preconception healthcare, adequate folic acid intake, and surrendering outcomes with mindfulness and faith. By welcoming these changes intentionally, you align your body, heart, and soul to nurture a miraculous new beginning.",
        spiritualNote: "By taking intentional steps with love and mindfulness, you align your body, heart, and soul to welcome new life.",
        tips: [
          "Schedule a preconception check-up with your OB-GYN",
          "Begin taking a prenatal vitamin with at least 400mcg of Folic Acid",
          "Adopt a nutrition-dense diet full of leafy greens, lean proteins, and healthy fats",
          "Foster emotional stillness and reduce environmental stress",
        ]
      },
      "kick-counting": {
        title: "Kick Counting : Why It Matters",
        excerpt: "Your baby’s kicks are vital signals of health and safety. Every movement matters, every kick counts — and you are never alone on this journey.",
        content: "Your baby's fetal movements are more than just reassuring bonding moments; they are official, biological indicators of wellness in the womb. Standard clinical practice recommends established tracking parameters (such as the 'count to 10' method) where you record how long it takes to feel 10 clear movements. A sudden decrease or change in the baby's regular movement pattern is a signal to consult your doctor immediately. Tracking daily empowers you to be your baby's strongest guardian.",
        spiritualNote: "By paying attention, tracking daily, and acting quickly if something feels different... you’re giving your baby the best chance to thrive.",
        tips: [
          "Find a quiet room, lie on your left side to maximize placental blood flow",
          "Set aside the same times daily, ideally after meals when the baby is active",
          "Count kicks, flutters, swishes, and rolls — anything except hiccups",
          "Aim to record 10 movements within a maximum of 2 hours",
        ]
      },
      "checklist-delivery": {
        title: "Checklist for Delivery",
        excerpt: "Being well-prepared for labor and delivery helps reduce stress and allows you to focus on what truly matters — welcoming your baby safely.",
        content: "A well-packaged hospital bag removes a layer of logistical anxiety when it's time to head to the delivery room. Prepare your hospital bag around week 36 of your pregnancy to ensure readiness. Divide your checklist into essential documents, items for the mother's comfort during active labor, newborn essentials, and support partner materials. Having your bag packed and placed by the front door is a powerful mental milestone of preparedness.",
        spiritualNote: "Packing your essentials in advance ensures both you and your little one have everything needed for a smooth, peaceful hospital stay.",
        tips: [
          "Keep your maternal health record, IDs, and hospital forms neatly in a folder",
          "Pack loose, breathable button-front nursing gowns and postpartum support clothes",
          "Include high-absorption maternity pads and organic baby swaddle blankets",
          "Don't forget extra-long charging cables, lip balm, and massage oils for relaxing pressure therapy",
        ]
      },
      "signs-labour": {
        title: "Signs for Labour",
        excerpt: "Recognising the signs of labour early helps you feel more confident and prepared for the big moment. Learn when to contact your provider.",
        content: "Every birth experience is a custom, unique journey. However, certain hallmark metabolic and mechanical events herald the true onset of labor. Recognizing the difference between Braxton Hicks (practice contractions) and true labor contractions is critical. True contractions become progressively stronger, longer, and closer together, and do not ease when you shift positions or walk. Other signs include the mucus plug release (bloody show) and the rupture of membranes (water breaking).",
        spiritualNote: "While every birth experience is unique, paying attention to your body’s changes ensures you know exactly when it’s time.",
        tips: [
          "Monitor the 5-1-1 rule: contractions 5 minutes apart, lasting 1 minute, for at least 1 hour",
          "Note the color and consistency of water breaking; it should be clear (report immediately to OB-GYN)",
          "Differentiate Braxton Hicks: false contractions are irregular and stop with hydration or rest",
          "Trust your instincts — if you feel something is starting, call your birthing team immediately",
        ]
      },
      "induction-labour": {
        title: "Induction of Labour",
        excerpt: "Understanding the clinical procedures and indications for induction helps reduce anxiety and prepare for a safe birth experience.",
        content: "Labor induction is the stimulation of uterine contractions during pregnancy before labor begins on its own to achieve a vaginal birth. It is recommended when a health practitioner determines that a baby or mother's safety is better served by birth than by continuing the pregnancy. Common physiological indicators include preeclampsia, gestational diabetes, prolonged rupture of membranes without naturally commencing labor, or post-dates (beyond 41-42 weeks). Understanding pharmacological and mechanical triggers (like membrane sweeping, balloon catheters, and oxytocin) transforms fear into empowerment.",
        spiritualNote: "Always discuss your options with your healthcare provider, so you feel supported and confident as you prepare to welcome your little one.",
        tips: [
          "Discuss your bishop score (cervical ripeness) ahead of your scheduled induction date",
          "Understand that medical induction often produces more intense contractions than custom onset",
          "Ask about non-pharmacological comfort alternatives and portable monitoring options",
          "Stay active and upright during early induction stages if medically permitted",
        ]
      }
    }
  },
  ms: {
    nav: {
      home: "Laman Utama",
      about: "Tentang Kami",
      product: "Produk",
      contact: "Hubungi Kami",
      sendMessage: "Hantar Mesej",
    },
    hero: {
      badge: "Penyelesaian Perubatan Profesional",
      title1: "MEMACU",
      titleAccent: "KESIHATAN",
      title2: "BERSAMA",
      desc: "EVE Medic menyediakan kejelasan klinikal dan pengalaman penjagaan yang lancar dari tendangan pertama hingga kelahiran. Terokai platform kami untuk sistem perubatan dan pendidikan terkini.",
      exploreBtn: "Terokai Platform",
      messageBtn: "Hantar Mesej",
      accuracy: "Ketepatan",
      support: "Sokongan",
      patients: "Pesakit",
    },
    about: {
      badge: "Mengenai EVE Medic",
      title1: "MEMBERI DEFINISI BARU",
      title2: "PENGALAMAN PERUBATAN.",
      desc: "Di EVE Medic, kami mempercayai kuasa kejelasan. Sistem kami direka untuk menyediakan gambaran menyeluruh tentang kesihatan pesakit, membolehkan doktor membuat keputusan termaklum dengan lebih cepat dan yakin.",
      missionTitle: "Misi Kami",
      missionDesc: "Memperkasakan profesional penjagaan kesihatan dengan kejelasan klinikal dan alat digital lancar yang mengutamakan hasil pesakit.",
      patientTitle: "Fokus Pesakit",
      patientDesc: "Dari tendangan pertama hingga kelahiran, kami memastikan perjalanan yang selamat dan dipantau untuk setiap pesakit melalui pandangan berasaskan data.",
      excellenceTitle: "Kecemerlangan",
      excellenceDesc: "Sistem EVE mewakili kemuncak teknologi perubatan, menyepadukan pendidikan dan amalan ke dalam satu platform bersatu.",
      cmo: "Ketua Pegawai Perubatan",
    },
    product: {
      badge: "Tawaran Kami",
      title: "PLATFORM KAMI.",
      systemTab: "Sistem EVE",
      educationTab: "Pendidikan EVE",
      systemTitle: "Sistem EVE",
      systemDesc: "Ekosistem pemantauan kesihatan revolusioner untuk perubatan ketepatan.",
      systemF1: "Doktor hanya boleh mengakses gambaran ringkas keadaan kesihatan pesakit",
      systemF2: "Kejelasan Klinikal Sepintas Lalu",
      systemF3: "Penjagaan Lancar Dari Tendangan Pertama Hingga Kelahiran",
      systemF4: "Integrasi telemetri kesihatan masa nyata",
      highlight1: "Gambaran Kesihatan",
      highlight2: "Kejelasan Segera",
      statusActive: "AKTIF",
      statusLabel: "Status",
      visitWebBtn: "Layari evemedic.co",
    },
    education: {
      livePortal: "Portal Langsung: evemedic.co",
      title: "Hub Pendidikan EVE",
      officialWebBtn: "Layari Laman Web Rasmi",
      slogan: "Sokongan • Hubungan • Pemerkasaan",
      quote: "Bersama Setiap Ibu, Setiap Langkah — Ke Arah Permulaan Yang Lebih Baik",
      quoteDesc: "Meneroka dunia kejelasan keibuan, penjejakan kesihatan janin, dan panduan komuniti interaktif yang disusun terus dari platform disahkan evemedic.co.",
      searchPlaceholder: "Cari maklumat kehamilan, bersalin, persediaan kelahiran...",
      catAll: "Semua Maklumat",
      catPre: "Pra-Kehamilan",
      catPreg: "Kehamilan",
      catLabor: "Kelahiran",
      catDelivery: "Bersalin",
      readArticle: "Baca Artikel",
      noResults: "Tiada maklumat perubatan yang sepadan dengan carian anda.",
      clearFilters: "Kosongkan Penapis",
      trackerTitle: "Penjejak Tendangan Ibu",
      trackerDesc: "Setiap pergerakan penting, setiap tendangan dikira. Kira 10 pergerakan bayi dalam sesi aktif.",
      sessionKicks: "Tendangan Sesi",
      kickGoal: "Sasaran: 10 tendangan",
      btnRecord: "Rekod Tendangan +1",
      btnReset: "Set Semula",
      btnSaveLog: "Simpan ke Log Harian",
      historyTitle: "Sejarah Sesi Disimpan:",
      movements: "pergerakan",
      checklistTitle: "Barangan Penting Beg Bersalin",
      checklistDesc: "Sediakan beg hospital anda menjelang minggu ke-36 untuk mengurangkan tekanan saat-saat akhir.",
      closeArticle: "Tutup Artikel",
      readFullCopy: "Baca salinan penuh di evemedic.co",
      keyTipsTitle: "Tip Klinikal & Praktikal Utama:",
    },
    contact: {
      badge: "Hubungi Kami",
      title: "HUBUNGI SIKAP KAMI.",
      emailLabel: "Alamat E-mel",
      locationLabel: "Lokasi",
      locationValue: "Rangkaian Perubatan Global",
      sendBtn: "Hantar Mesej Permohonan",
      socialTitle: "Platform Sosial",
      officialChannels: "Saluran Rasmi EVE Medic",
    },
    popup: {
      successTitle: "BERJAYA!",
      successDesc: "Mesej anda telah dihantar. Kami akan menghubungi anda tidak lama lagi.",
      title: "HANTAR MESEJ.",
      subtitle: "Kami ingin mendengar daripada anda.",
      nameLabel: "Nama Penuh",
      namePlaceholder: "Masukkan nama anda",
      emailLabel: "Alamat E-mel",
      emailPlaceholder: "emel@example.com",
      messageLabel: "Mesej",
      messagePlaceholder: "Bagaimana kami boleh membantu Anda?",
      submitting: "Menghantar...",
      submitBtn: "Hantar Mesej",
    },
    footer: {
      rights: "EVE Medic. Hak cipta terpelihara. Platform Penjagaan Kesihatan Profesional.",
      privacy: "Dasar Privasi",
      terms: "Syarat Perkhidmatan",
    },
    checklistItems: [
      "Kad pengenalan / buku rawatan perubatan",
      "Baju tidur selesa & coli menyusu",
      "Pakaian bayi baru lahir & kain bedung",
      "Tuala wanita bersalin & barangan rias diri",
      "Selipar rumah & stoking selesa",
      "Telefon, kamera & kabel pengecas panjang"
    ],
    articles: {
      "preparing-body": {
        title: "Menyediakan Tubuh Anda untuk Kehamilan",
        excerpt: "Menyediakan badan anda untuk kehamilan adalah lebih daripada persediaan fizikal—ia adalah perjalanan holistik menyuburkan badan, emosi, dan menyambut kehidupan baru.",
        content: "Menyediakan badan anda untuk kehamilan adalah perjalanan holistik yang suci. Ia bermula dengan kesediaan fizikal tetapi meluas secara mendalam untuk memupuk kesejahteraan emosi anda, mewujudkan persekitaran yang tenang/stabil, dan menyelaraskan tenaga jasmani. Fokus pada pemakanan makanan holistik, penjagaan kesihatan prapengasuhan, pengambilan asid folik yang mencukupi, dan berserah diri dengan penuh kesedaran dan keyakinan.",
        spiritualNote: "Dengan mengambil langkah yang disengajakan dengan kasih sayang dan kesedaran, anda menyelaraskan badan, hati, dan jiwa anda untuk menyambut kehidupan baru.",
        tips: [
          "Jadualkan pemeriksaan prapengasuhan dengan OB-GYN anda",
          "Mula mengambil vitamin pranatal dengan sekurang-kurangnya 400mcg Asid Folik",
          "Amalkan diet padat nutrisi yang penuh dengan sayuran hijau, protein tanpa lemak, dan lemak sihat",
          "Pupuk ketenangan emosi dan kurangkan tekanan persekitaran",
        ]
      },
      "kick-counting": {
        title: "Mengira Tendangan : Mengapa Ia Penting",
        excerpt: "Tendangan bayi anda adalah isyarat penting kesihatan dan keselamatan diri di dalam rahim. Setiap pergerakan adalah penting.",
        content: "Pergerakan janin bayi anda adalah lebih daripada sekadar detik ikatan yang meyakinkan; ia adalah petunjuk kesihatan biologi rasmi dalam rahim. Amalan klinikal standard mencadangkan parameter penjejakan yang ditetapkan (seperti kaedah 'kiraan hingga 10') di mana anda merekodkan masa yang diambil untuk merasakan 10 pergerakan yang jelas. Penurunan mendadak adalah isyarat penting untuk berunding segera.",
        spiritualNote: "Dengan memberi perhatian secara harian, anda memberi bayi anda peluang terbaik untuk berkembang maju dengan selamat.",
        tips: [
          "Cari bilik yang sunyi, berbaring di sebelah kiri untuk memaksimumkan aliran darah plasenta",
          "Tetapkan masa yang sama setiap hari, sebaik-baiknya selepas makan apabila bayi aktif",
          "Kira tendangan, kibasan, pusingan, dan gulungan — semuanya kecuali cegukan",
          "Sasar untuk merekodkan 10 pergerakan dalam tempoh maksimum 2 jam",
        ]
      },
      "checklist-delivery": {
        title: "Senarai Semak Persediaan Bersalin",
        excerpt: "Bersedia dengan baik untuk melahirkan dan bersalin membantu mengurangkan tekanan dan membolehkan anda fokus pada keselamatan bayi.",
        content: "Beg hospital yang dikemas rapi menghilangkan kebimbangan logistik apabila tiba masanya untuk ke bilik bersalin. Sediakan beg hospital anda sekitar minggu ke-36 kehamilan anda untuk memastikan kesediaan penuh. Bahagikan senarai semak anda kepada dokumen penting, barangan keselesaan ibu, produk bayi baru lahir, dan bahan sokongan pasangan.",
        spiritualNote: "Mengemas barangan penting anda lebih awal memastikan anda dan anak damit anda mempunyai semua yang diperlukan untuk penginapan hospital yang aman.",
        tips: [
          "Simpan rekod kesihatan ibu, kad pengenalan, dan borang hospital dengan kemas di dalam fail",
          "Kemaskan pakaian tidur menyusu yang longgar serta pakaian sokongan bersalin",
          "Masukkan pad wanita bersalin berdaya serap tinggi dan kain bedung bayi organik",
          "Jangan lupa kabel pengecasan ekstra panjang, pelembap bibir, dan minyak urut",
        ]
      },
      "signs-labour": {
        title: "Tanda-Tanda Ingin Bersalin",
        excerpt: "Mengenali tanda-tanda bersalin lebih awal membantu anda berasa lebih yakin dan bersedia untuk detik yang besar.",
        content: "Setiap pengalaman kelahiran adalah perjalanan tersendiri. Walau bagaimanapun, peristiwa metabolik dan mekanikal tertentu menandakan bermulanya proses kelahiran yang sebenar. Memahami perbezaan antara Braxton Hicks (kontraksi palsu) dan kontraksi bersalin sebenar adalah kritikal. Kontraksi sebenar menjadi semakin kuat, panjang, dan rapat selang masanya.",
        spiritualNote: "Walaupun pengalaman kelahiran setiap ibu adalah unik, memberi perhatian kepada perubahan badan anda memastikan anda bersedia.",
        tips: [
          "Pantau peraturan 5-1-1: kontraksi selang 5 minit, selama 1 minit, untuk sekurang-kurangnya 1 jam",
          "Ambil perhatian warna cecair air ketuban pecah; ia mestilah jernih (laporkan segera kepada doktor)",
          "Bezakan Braxton Hicks: kontraksi palsu tidak teratur dan berhenti dengan rehat atau air minuman",
          "Percayai naluri anda — jika anda rasa proses bersalin bermula, hubungi pasukan bidan anda segera",
        ]
      },
      "induction-labour": {
        title: "Induksi Proses Bersalin",
        excerpt: "Memahami prosedur klinikal dan petunjuk induksi membantu mengurangkan kebimbangan dan bersiap sedia untuk kelahiran yang selamat.",
        content: "Induksi bersalin adalah rangsangan kontraksi rahim semasa kehamilan sebelum bersalin bermula secara sendiri untuk mencapai kelahiran normal. Ia disyorkan apabila doktor menentukan keselamatan bayi atau ibu lebih terjamin melalui kelahiran segera. Memahami kaedah penukaran mekanikal dan ubat meringankan ketakutan anda.",
        spiritualNote: "Sentiasa bincangkan pilihan anda dengan doktor penjagaan kesihatan anda, supaya anda berasa disokong dan yakin.",
        tips: [
          "Bincangkan skor Bishop (kematangan serviks) anda sebelum tarikh induksi",
          "Fahami bahawa induksi perubatan sering menghasilkan kontraksi yang lebih sengit daripada biasa",
          "Tanya tentang alternatif keselesaan tanpa ubat dan pilihan pemantauan mudah alih",
          "Kekal aktif dan tegak semasa peringkat awal induksi jika dibenarkan secara perubatan",
        ]
      }
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      product: "Produk",
      contact: "Hubungi Kami",
      sendMessage: "Kirim Pesan",
    },
    hero: {
      badge: "Solusi Medis Profesional",
      title1: "MEMAJUKAN",
      titleAccent: "KESEHATAN",
      title2: "BERSAMA",
      desc: "EVE Medic memberikan kejelasan klinis and pengalaman perawatan yang mulus dari tendangan pertama hingga melahirkan. Jelajahi platform kami untuk sistem medis dan edukasi mutakhir.",
      exploreBtn: "Jelajahi Platform",
      messageBtn: "Kirim Pesan",
      accuracy: "Akurasi",
      support: "Dukungan",
      patients: "Pasien",
    },
    about: {
      badge: "Tentang EVE Medic",
      title1: "MENGARTIKAN ULANG",
      title2: "PENGALAMAN MEDIS.",
      desc: "Di EVE Medic, kami percaya akan kekuatan kejelasan. Sistem kami dirancang untuk memberikan gambaran komprehensif tentang kesehatan pasien, memungkinkan dokter membuat keputusan yang tepat dengan lebih cepat dan percaya diri.",
      missionTitle: "Misi Kami",
      missionDesc: "Memberdayakan profesional kesehatan dengan kejelasan klinis dan alat digital mulus yang memprioritaskan keselamatan pasien.",
      patientTitle: "Fokus Pasien",
      patientDesc: "Dari tendangan pertama hingga melahirkan, kami memastikan perjalanan yang aman dan terpantau untuk setiap pasien melalui wawasan berbasis data.",
      excellenceTitle: "Keunggulan",
      excellenceDesc: "Sistem EVE mewakili puncak teknologi medis, mengintegrasikan edukasi dan praktik ke dalam satu platform yang terpadu.",
      cmo: "Kepala Pejabat Medis",
    },
    product: {
      badge: "Penawaran Kami",
      title: "PLATFORM KAMI.",
      systemTab: "Sistem EVE",
      educationTab: "Edukasi EVE",
      systemTitle: "Sistem EVE",
      systemDesc: "Ekosistem pemantauan kesehatan revolusioner untuk pengobatan presisi.",
      systemF1: "Dokter hanya dapat mengakses snapshot singkat dari kondisi kesehatan pasien",
      systemF2: "Kejelasan Klinis dalam Sekilas",
      systemF3: "Perawatan Mulus Dari Tendangan Pertama Hingga Kelahiran",
      systemF4: "Integrasi telemetri kesehatan waktu nyata",
      highlight1: "Snapshot Kesehatan",
      highlight2: "Kejelasan Instan",
      statusActive: "AKTIF",
      statusLabel: "Status",
      visitWebBtn: "Kunjungi evemedic.co",
    },
    education: {
      livePortal: "Portal Langsung: evemedic.co",
      title: "Pusat Edukasi EVE",
      officialWebBtn: "Kunjungi Situs Resmi",
      slogan: "Asuhan • Koneksi • Pemberdayaan",
      quote: "Bersama Setiap Ibu, Setiap Langkah — Menuju Awal Yang Lebih Baik",
      quoteDesc: "Menyelami dunia kejelasan keibuan, pelacakan kesehatan esensial janin, dan panduan komunitas interaktif yang disusun langsung dari platform resmi evemedic.co.",
      searchPlaceholder: "Cari wawasan kehamilan, persalinan, persiapan kelahiran...",
      catAll: "Semua Informasi",
      catPre: "Pra-Kehamilan",
      catPreg: "Kehamilan",
      catLabor: "Persalinan",
      catDelivery: "Kelahiran",
      readArticle: "Baca Artikel",
      noResults: "Tidak ada wawasan medis yang cocok dengan pencarian Anda.",
      clearFilters: "Bersihkan Filter",
      trackerTitle: "Pelacak Tendangan Bayi",
      trackerDesc: "Setiap gerakan penting, setiap tendangan berarti. Hitung 10 gerakan bayi dalam satu sesi aktif.",
      sessionKicks: "Tendangan Sesi",
      kickGoal: "Target: 10 gerakan",
      btnRecord: "Catat Tendangan +1",
      btnReset: "Reset",
      btnSaveLog: "Simpan ke Log Harian",
      historyTitle: "Riwayat Sesi Tersimpan:",
      movements: "gerakan",
      checklistTitle: "Perlengkapan Tas Melahirkan",
      checklistDesc: "Siapkan tas rumah sakit Anda pada minggu ke-36 untuk menghindari stres menjelang persalinan.",
      closeArticle: "Tutup Artikel",
      readFullCopy: "Baca artikel lengkap di evemedic.co",
      keyTipsTitle: "Tips Klinis & Praktis Utama:",
    },
    contact: {
      badge: "Hubungi Kami",
      title: "HUBUNGI KAMI.",
      emailLabel: "Alamat Email",
      locationLabel: "Lokasi",
      locationValue: "Jaringan Medis Global",
      sendBtn: "Kirim Pesan Aplikasi",
      socialTitle: "Media Sosial",
      officialChannels: "Saluran Resmi EVE Medic",
    },
    popup: {
      successTitle: "BERHASIL!",
      successDesc: "Pesan Anda telah dikirim. Kami akan segera menghubungi Anda kembali.",
      title: "KIRIM PESAN.",
      subtitle: "Hubungi tim dukungan kami kapan saja.",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Masukkan nama Anda",
      emailLabel: "Alamat Email",
      emailPlaceholder: "email@example.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Bagaimana kami dapat membantu Anda?",
      submitting: "Mengirim...",
      submitBtn: "Kirim Pesan",
    },
    footer: {
      rights: "EVE Medic. Hak cipta dilindungi undang-undang. Platform Layanan Kesehatan Profesional.",
      privacy: "Kebijakan Privasi",
      terms: "Syarat dan Ketentuan",
    },
    checklistItems: [
      "Kartu identitas / buku pemeriksaan medis resmi",
      "Baju tidur longgar & bra menyusui",
      "Pakaian bayi baru lahir & popok kain bedung",
      "Pembalut bersalin & perlengkapan mandi pribadi",
      "Sandal kamar tidur & kaus kaki hangat",
      "Ponsel, kamera & pengisi daya kabel panjang"
    ],
    articles: {
      "preparing-body": {
        title: "Mempersiapkan Tubuh Anda untuk Kehamilan",
        excerpt: "Mempersiapkan tubuh untuk kehamilan lebih dari sekadar kesiapan fisik—ini adalah perjalanan holistik untuk menyehatkan tubuh, emosi, dan menyambut kehidupan baru.",
        content: "Mempersiapkan tubuh untuk kehamilan adalah perjalanan holistik yang suci. Ini dimulai dengan kesiapan fisik tetapi meluas secara mendalam ke kesehatan emosional Anda, menciptakan lingkungan yang tenang/stabil, dan menyelaraskan energi spiritual Anda. Fokus pada nutrisi makanan utuh, perawatan kesehatan prakonsepsi, asupan asam folat yang cukup, dan kepasrahan atas hasil akhir dengan perhatian penuh dan keyakinan.",
        spiritualNote: "Dengan mengambil langkah terencana dengan cinta dan perhatian penuh, Anda menyelaraskan tubuh, hati, dan jiwa Anda untuk menyambut kehidupan baru.",
        tips: [
          "Jadwalkan pemeriksaan prakonsepsi dengan dokter kandungan Anda",
          "Mulai konsumsi vitamin prenatal dengan minimal 400mcg Asam Folat",
          "Terapkan diet padat nutrisi penuh sayuran hijau, protein tanpa lemak, dan lemak sehat",
          "Rawat ketenangan emosional dan kurangkan stres lingkungan sekitar",
        ]
      },
      "kick-counting": {
        title: "Menghitung Tendangan : Mengapa Ini Penting",
        excerpt: "Tendangan bayi Anda adalah isyarat penting untuk memantau kesehatan dan keselamatannya di dalam rahim.",
        content: "Gerakan janin bayi Anda lebih dari sekadar momen kedekatan yang menenangkan; gerakan tersebut adalah indikator biologis resmi dari kesejahteraan di dalam rahim. Praktik klinis standar merekomendasikan metode pelacakan terukur (seperti cara 'hitung sampai 10') di mana Anda mencatat waktu yang dibutuhkan untuk merasakan 10 gerakan jelas. Penurunan mendadak adalah sinyal untuk segera berkonsultasi.",
        spiritualNote: "Dengan memperhatikan dengan saksama dan mencatat setiap hari, Anda memberi bayi Anda peluang terbaik untuk tumbuh dengan sehat.",
        tips: [
          "Temukan ruangan yang tenang, berbaring di sisi kiri untuk memaksimalkan aliran darah plasenta",
          "Sediakan waktu yang sama setiap hari, idealnya setelah makan saat bayi aktif",
          "Hitung tendangan, getaran, liukan, dan putaran — apa saja kecuali cegukan",
          "Targetkan mencatat 10 gerakan dalam waktu maksimal 2 jam",
        ]
      },
      "checklist-delivery": {
        title: "Daftar Perlengkapan untuk Persalinan",
        excerpt: "Mempersiapkan kebutuhan melahirkan dengan matang membantu mengurangi stres menjelang persalinan.",
        content: "Tas rumah sakit yang dikemas dengan rapi menghilangkan kecemasan logistik saat tiba saatnya menuju ke ruang persalinan. Siapkan tas rumah sakit Anda sekitar minggu ke-36 kehamilan Anda untuk memastikan kesiapan penuh. Bagilah kebutuhan Anda menjadi dokumen penting, kenyamanan ibu, produk bayi baru lahir, dan bekal pasangan.",
        spiritualNote: "Mempersiapkan tas mandi Anda jauh-jauh hari memberi kepastian bagi Anda dan buah hati selama tinggal di rumah sakit.",
        tips: [
          "Simpan catatan kesehatan ibu, kartu identitas, dan formulir rumah sakit dengan rapi dalam satu map",
          "Kemas baju tidur kancing depan yang longgar untuk menyusui dan pakaian pascamelahirkan",
          "Sertakan pembalut melahirkan dengan daya serap tinggi dan kain bedung bayi organik",
          "Jangan lupa kabel pengisi daya yang ekstra panjang, balsem bibir, dan minyak pijat relaksasi",
        ]
      },
      "signs-labour": {
        title: "Tanda-Tanda Menjelang Persalinan",
        excerpt: "Mengenali tanda-tanda persalinan lebih awal membantu Anda merasa lebih percaya diri dan siap menghadapi momen besar.",
        content: "Setiap pengalaman kelahiran adalah perjalanan unik. Memahami perbedaan antara Braxton Hicks (kontraksi palsu) dan kontraksi persalinan yang sebenarnya adalah hal yang sangat kritis. Kontraksi persalinan sejati akan berjalan lebih kuat, lebih lama, dan berdekatan selang waktunya.",
        spiritualNote: "Meskipun proses persalinan setiap ibu unik, memperhatikan perubahan fisik tubuh Anda memastikan Anda tahu kapan waktunya.",
        tips: [
          "Pantau aturan 5-1-1: kontraksi terjadi setiap 5 menit, berlangsung selama 1 menit, selama minimal 1 jam",
          "Catat warna air ketuban pecah; harus berwarna jernih (hubungi dokter kandungan segera)",
          "Bedakan Braxton Hicks: kontraksi palsu biasanya tidak teratur dan mereda setelah minum air atau istirahat",
          "Percayai insting Anda — jika Anda merasa melahirkan dimulai, segera hubungi tim medis Anda",
        ]
      },
      "induction-labour": {
        title: "Induksi Persalinan secara Klinis",
        excerpt: "Memahami prosedur dan indikasi induksi membantu mengurangi kekhawatiran dan mempersiapkan persalinan aman.",
        content: "Induksi persalinan adalah perangsangan kontraksi rahim selama kehamilan sebelum proses melahirkan dimulai secara alami untuk mencapai persalinan vaginal. Ini direkomendasikan ketika dokter menentukan kesehatan ibu atau bayi lebih baik dilahirkan segera. Memahami induksi medis mengganti ketakutan dengan ketenangan.",
        spiritualNote: "Diskusikan setiap opsi dengan dokter kandungan Anda agar Anda merasa didukung dan percaya diri.",
        tips: [
          "Diskusikan skor Bishop (kematangan leher rahim) sebelum tanggal jadwal induksi Anda",
          "Pahami bahwa induksi medis sering menghasilkan kontraksi yang lebih intens daripada timbul alami",
          "Tanyakan tentang opsi kenyamanan non-medis dan alternatif pemantauan portabel",
          "Tetap aktif dan tegak selama tahap awal induksi jika diperbolehkan secara medis",
        ]
      }
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      product: "解决方案",
      contact: "联系我们",
      sendMessage: "发送消息",
    },
    hero: {
      badge: "专业医疗数字化解决方案",
      title1: "共同推动",
      titleAccent: "医疗健康",
      title2: "未来发展",
      desc: "EVE Medic 为您提供卓越的临床清晰度，以及从第胎动开始到顺利分娩的无缝监护体验。立即探索先进的数字化医疗生态系统与专业医学教育。",
      exploreBtn: "探索平台",
      messageBtn: "发送消息",
      accuracy: "准确率",
      support: "服务支持",
      patients: "服务患者",
    },
    about: {
      badge: "关于 EVE Medic",
      title1: "重新定义",
      title2: "数字化临床医疗体验。",
      desc: "在 EVE Medic，我们深知临床真相的力量。我们的智能系统旨在提供全面的患者健康状态画像，赋予医生前所未有的决策敏捷度与把握。",
      missionTitle: "我们的使命",
      missionDesc: "以精准的临床洞察和无缝数字工具赋能医务工作者，将患者生命安全放在首位。",
      patientTitle: "以患者为中心",
      patientDesc: "从宝宝第一声心跳到诞生，我们通过数据驱动的追踪模型，为孕产妇护航全过程安全。",
      excellenceTitle: "卓越技术",
      excellenceDesc: "EVE System 代表了母婴医疗科技的行业顶峰，将全场景临床医学实践和培训系统无缝整合。",
      cmo: "首席医疗官",
    },
    product: {
      badge: "核心服务",
      title: "平台方案体系。",
      systemTab: "EVE 临床系统",
      educationTab: "EVE 孕育教育",
      systemTitle: "EVE 临床系统",
      systemDesc: "专为精准孕产妇监护打造的革命性医学监测系统。",
      systemF1: "医生仅需调取便可获取孕妇健康状况的清晰瞬态画像",
      systemF2: "一目了然的临床清晰度",
      systemF3: "从胎动初现到顺利分娩的全程无缝呵护",
      systemF4: "实时生命体征 telemetry 高速整合",
      highlight1: "健康瞬态画像",
      highlight2: "即时洞察",
      statusActive: "运行正常",
      statusLabel: "系统状态",
      visitWebBtn: "访问 evemedic.co 官网",
    },
    education: {
      livePortal: "实时官网同步: evemedic.co",
      title: "EVE 孕育知识与教育中心",
      officialWebBtn: "访问官方网站",
      slogan: "关爱 • 链接 • 赋能",
      quote: "携手每一位母亲，走好每一步 — 迈向更美好的新生命起点",
      quoteDesc: "深度了解母婴健康指标、胎动监测以及由 evemedic.co 临床平台专业认证的多维度互助社区指南。",
      searchPlaceholder: "搜索备孕、怀孕、分娩动向或科学干货...",
      catAll: "全部资讯",
      catPre: "备孕期",
      catPreg: "怀孕期",
      catLabor: "临产动向",
      catDelivery: "新生儿分娩",
      readArticle: "阅读文章",
      noResults: "未找到符合您搜索条件的医疗资讯。",
      clearFilters: "重置筛选条件",
      trackerTitle: "妈妈胎动计数器",
      trackerDesc: "每一次舒展，每一次胎动都至关重要。在一个监测会话内计满 10 次胎动。",
      sessionKicks: "本次会话胎动数",
      kickGoal: "会话目标：10次",
      btnRecord: "记录胎动 +1",
      btnReset: "重置",
      btnSaveLog: "保存到每日记录",
      historyTitle: "已保存的胎动历史：",
      movements: "次胎动",
      checklistTitle: "待产包必备清单",
      checklistDesc: "建议在怀孕第 36 周前准备就绪，减缓临产时的焦虑情绪。",
      closeArticle: "关闭文章",
      readFullCopy: "访问 evemedic.co 查阅官方原件",
      keyTipsTitle: "关键医学研究与实用提示：",
    },
    contact: {
      badge: "联系我们",
      title: "期待与您的合作。",
      emailLabel: "邮箱地址",
      locationLabel: "总部地点",
      locationValue: "全球临床数字医学服务网络",
      sendBtn: "发送合作申请",
      socialTitle: "社交媒体平台",
      officialChannels: "EVE Medic 官方联络渠道",
    },
    popup: {
      successTitle: "发送成功！",
      successDesc: "我们已收到您的联络邮件，工作人员将尽快回复您。",
      title: "发送消息给我。",
      subtitle: "随时听候您的临床反馈与咨询。",
      nameLabel: "您的姓名",
      namePlaceholder: "请输入您的尊称",
      emailLabel: "邮箱地址",
      emailPlaceholder: "email@example.com",
      messageLabel: "留言详情",
      messagePlaceholder: "我们能为您做些什么？",
      submitting: "正在发送...",
      submitBtn: "提交消息",
    },
    footer: {
      rights: "EVE Medic. 保留所有权利。专业母婴医疗数字平台。",
      privacy: "隐私政策",
      terms: "服务条款",
    },
    checklistItems: [
      "身份证件 / 孕产妇健康医疗档案册",
      "宽松透气的睡衣与哺乳内衣",
      "新生儿衣服与纯棉婴儿包单",
      "产后专用卫生巾与个人洗洗用品",
      "舒适室内拖鞋与保暖棉袜",
      "手机、相机以及超长充电线"
    ],
    articles: {
      "preparing-body": {
        title: "为怀孕做好身体调理与准备",
        excerpt: "孕前准备不仅仅是身体上的调试，更是一场滋养身心、调和情绪并迎接新生命的全面洗礼。",
        content: "为怀孕做准备是一段神圣而纯洁的旅程。它始于身体上的调试，延展至情绪、起居环境与信念的结合。注重高营养全食物摄入，配合科学的孕前体检，每日补充足量的叶酸，并在顺其自然中，调养体内孕育新生命的温床，静候天职悄然而至。",
        spiritualNote: "通过充满关爱与正能量的生活小习惯，将身体、心灵和环境连成一线，热诚拥抱科学新孕育。",
        tips: [
          "预约专业妇产科医院进行全面的孕前健康筛查与咨询",
          "每日早餐后按时服用含有至少400微克活性叶酸的复合维生素",
          "调整饮食结构，多摄入深绿色叶菜、优质白肉蛋白及抗高氧脂肪酸",
          "保障深度睡眠，掌握呼吸调息，远离环境污染与不稳定的负面情绪",
        ]
      },
      "kick-counting": {
        title: "科学胎动计数：为何它是黄金金标准",
        excerpt: "宝宝的胎动是他们在子宫内的健康晴雨表。每一次轻抚、每一次胎动都牵动着全家的安全监测。",
        content: "子宫内的胎动不仅仅是温馨的亲子羁绊，更是胎儿生长活力和宫内安全最关键、最直观的生物学指标。临床上通常推荐经典的“数到10法”：记录胎儿计满 10 次明显胎动所消耗的时长。胎动次数出现断崖式下跌或节奏突变是首要警醒信号，应立刻前往妇产紧急诊治。",
        spiritualNote: "建立每日数胎动、了解胎动规律的好习惯，能给宝宝提供最好的母婴全景呵护。",
        tips: [
          "择安静环境，朝左侧卧，以最大化胎盘血氧供给和舒张度",
          "固定每日的监测会话（如饭后胎动活跃期），减少漏测",
          "记录翻滚、波浪、踢踹等任何显著大动作（打嗝除外）",
          "在2小时的黄金监测范围内集满10次以上优秀胎动",
        ]
      },
      "checklist-delivery": {
        title: "轻松待产包黄金必备清单",
        excerpt: "提前整理好入院所需的母婴必备待产包，能在临产时大步舒缓最后的心慌与杂乱。",
        content: "一个规划有序的入院待产包能完全切断您临产分娩那一刻的物资慌乱。建议在孕36周左右物归原处。我们将清单严谨划分为：核心证件卷、母亲产褥期恢复用品、新生儿基础护理套装，以及陪产家属物资。预备入院包并摆在玄关，是科学备孕的极佳里程碑。",
        spiritualNote: "将必需用品提前打包置办，能为您的入院和顺利出院打下井井有条的舒适基础。",
        tips: [
          "将母子健康档案册、夫妻证件、病历夹与银行卡统一收纳至密封档案袋",
          "备足透气的棉质前扣开衫、防滑软拖鞋以及贴身哺乳高弹内衣",
          "准备进口大吸收防漏产褥期卫生巾和医用棉柔巾、婴儿防惊蝉包裹巾",
          "随包携带超长原厂手机线、滋润唇膏、舒缓压力的按摩精油",
        ]
      },
      "signs-labour": {
        title: "识别四大临产征兆",
        excerpt: "及早准确识别真正的临产动向，帮助您消除分娩未知的心理负担。清晰了解何时应立刻联系产房。",
        content: "尽管每一位孕妇的分娩感觉都截然不同，但一些标志性的力学和代谢现象预示着真正临盆的到来。首先要细致区分假宫缩（不规律无痛）与真宫缩：真宫缩痛感会随着时间不断增强、缩短间隔、延长单次时长，且通过变换体位也绝不缓解，伴随破水或见红等生理特征。",
        spiritualNote: "多倾听身体给您的临盆提示，做好深呼吸，您和宝宝就能自信踏入崭新的里程。",
        tips: [
          "谨记 5-1-1 临产法则：宫缩至少每5分钟一次，单次规律阵痛达1分钟，匀速持续1小时以上",
          "仔细辨别破水性状（透明、温热、不自主外流且不可憋住），遇到此等情况应立刻平卧入院",
          "区分真假宫缩：假性宫缩在多温水补水、起立踱步或静卧后会自行平复",
          "信任内心的天然直觉，一旦发觉产程已经萌动，立刻联系您的专属助产照护小组",
        ]
      },
      "induction-labour": {
        title: "了解催产素与临床医学引产",
        excerpt: "揭秘医学引产的常规诱导流程与指征，把对未知的担忧转变为沉着应对的能量。",
        content: "引产（医学催生）是指在胎儿发育达标、自然产程爆发前，通过临床干预刺激子宫收缩，实现经阴道分娩的过程。当医生判定继续保留 pregnancy 将危及孕妇或宝宝的健康（如重度子痫前期、过期妊娠超41周等）时将采用该技术。了解人工破膜、水囊扩张以及静滴缩宫素等常见催生方法，有助于消除分娩顾虑，科学配合医嘱。",
        spiritualNote: "在催产品质决策上，多听取专业产科医生的评测，用开放沉着的心态护航宝宝平安问世。",
        tips: [
          "向主治医师了解您的 Bishop 评分（宫颈成熟度），推算引产过程的顺畅程度",
          "理性认知催产引产所引起的收缩痛会相比自发更加集中、紧凑，提前做好无痛镇痛规划",
          "可询问陪产助产士关于移动式胎心监护与水疗、摇椅舒缓阵痛的可行性",
          "在引产前、后期（破水前），在医护认可的前提下积极走动，运用重力促使胎头下降",
        ]
      }
    }
  }
};
