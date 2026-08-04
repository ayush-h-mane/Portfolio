export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / ML' | 'Full Stack' | 'NLP' | 'Web Apps';
  description: string;
  longDescription?: string;
  technologies: string[];
  keyFeatures?: string[];
  architectureDetails?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
}

export interface SkillCategoryWithProgress {
  title: string;
  skills: { name: string; percentage: number }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  icon: string;
  fileUrl?: string;
  category?: 'AI & Data' | 'Software & Systems' | 'Management & Career';
}

export interface JourneyMilestone {
  year: string;
  description: string;
}

export interface EducationHistoryItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  type: 'degree' | 'puc' | 'sslc';
  details: string;
}

export const getAssetUrl = (path: string | undefined): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.replace(/^\//, '');
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};

export const PERSONAL_INFO = {
  name: 'AYUSH H MANE',
  logoEmblem: 'AHM',
  badge: 'FULL-STACK DEVELOPER | AI & ML ENGINEER',
  headlineIntro: "Hello, I'm",
  headlineName: 'AYUSH H MANE',
  signatureName: 'Ayush',
  subheading: 'Aspiring Full-Stack Software Engineer & AI Specialist. Building scalable web applications, computer vision fitting engines, & cybersecurity threat detectors.',
  email: 'ayushhmane@gmail.com',
  secondaryEmail: 'ayushhmane.dev@gmail.com',
  phone: '+91 9535174767',
  location: 'Bengaluru, Karnataka, India',
  github: 'https://github.com/ayush-h-mane',
  linkedin: 'https://linkedin.com/in/ayush-h-mane',
  twitter: 'https://github.com/ayush-h-mane',
  instagram: 'https://www.instagram.com/ayush_h_mane/?hl=en',
  whatsapp: 'https://wa.me/919535174767',
  avatarImage: getAssetUrl('/ayush_mane.png'),
  aboutWorkspaceImage: getAssetUrl('/workspace_modern.png'),
  experienceGraphic: getAssetUrl('/experience_developer.png'),
  cvUrl: getAssetUrl('/Ayush_H_Mane_Resume.pdf'),

  heroStats: [
    { value: '3+', label: 'Real AI & Cybersecurity Projects', icon: 'Folder' },
    { value: '7.0', label: 'CGPA (B.E. AI & ML)', icon: 'Layers' },
    { value: '15+', label: 'Core Technical Skills', icon: 'Cpu' },
    { value: '13+', label: 'Verified Certifications', icon: 'Award' }
  ],

  aboutBio: [
    "I am an AI & Machine Learning Engineer and Full-Stack Software Developer pursuing B.E. at Acharya Institute of Technology, Bengaluru.",
    "Passionate about bridging complex AI/ML research with high-performance production software, I specialize in building real-time computer vision virtual fitting engines (VTON), transformer-based NLP toxicity models (DeBERTa), and cybersecurity threat detectors.",
    "From architecting asynchronous FastAPI backend microservices to designing responsive React/Next.js interfaces, I write clean, scalable, and maintainable code with a strong focus on security and performance.",
    "Beyond engineering, I am a campus leader and award-winning theatre artist, bringing creative storytelling, clear communication, and high-energy collaboration to every project."
  ],

  aboutHighlights: [
    { label: '🤖 AI & Machine Learning', detail: 'Computer Vision, PyTorch & Scikit-Learn' },
    { label: '⚡ Full-Stack Web Systems', detail: 'React.js, Next.js, FastAPI & REST APIs' },
    { label: '🔒 Cybersecurity Classifiers', detail: 'Domain Entropy & Threat Detection' },
    { label: '🎭 Creative & Leadership', detail: 'State & National Theatre Winner' }
  ],

  services: [
    {
      title: 'Full-Stack Web Development',
      description: 'Building modern, responsive React.js & Next.js web applications with robust Node/Express backends.',
      icon: 'Code'
    },
    {
      title: 'AI & Computer Vision',
      description: 'Real-time pose estimation and virtual garment fitting engines using OpenCV, MediaPipe, & FastAPI.',
      icon: 'Cpu'
    },
    {
      title: 'Cybersecurity & ML Classifiers',
      description: 'Feature extraction, URL entropy analysis, and Scikit-Learn ML threat detection models.',
      icon: 'Sparkles'
    },
    {
      title: 'NLP & Text Classification',
      description: 'Multilingual sarcasm and toxicity detection using DeBERTa transformers, PyTorch, & Streamlit.',
      icon: 'Layers'
    }
  ],

  education: {
    institution: 'Acharya Institute of Technology, Bengaluru',
    degree: 'B.E. in Artificial Intelligence & Machine Learning',
    period: '2023 – 2027',
    cgpa: '7.0 / 10',
    history: [
      {
        institution: 'Acharya Institute of Technology, Bengaluru',
        degree: 'B.E. in Artificial Intelligence & Machine Learning',
        period: '2023 – 2027',
        grade: '7.0 / 10 CGPA',
        type: 'degree' as const,
        details: 'Specializing in Artificial Intelligence, Computer Vision, NLP, Cybersecurity, Data Structures, and Async Full-Stack Web Development.'
      },
      {
        institution: 'S.A.V Composite PU College',
        degree: 'Pre-University Course (PUC 12th Grade - Science Stream)',
        period: '2021 – 2023',
        grade: '82.32%',
        type: 'puc' as const,
        details: 'Completed Senior Secondary Education in Physics, Chemistry, Mathematics, and Biology (PCMB) with analytical focus.'
      },
      {
        institution: "St. Dominic's High School",
        degree: 'Secondary School Leaving Certificate (SSLC 10th Grade)',
        period: '2020 – 2021',
        grade: '88.32%',
        type: 'sslc' as const,
        details: 'Completed High Schooling with distinction and foundational excellence in Mathematics, Science, and English.'
      }
    ]
  }
};

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  { year: '2021', description: "Graduated SSLC (10th Grade) from St. Dominic's High School with 88.32%" },
  { year: '2023', description: 'Graduated PUC (12th Grade Science) from S.A.V Composite PU College with 82.32%' },
  { year: '2023', description: 'Enrolled in B.E. AI & ML at Acharya Institute of Technology, Bengaluru' },
  { year: '2024', description: 'Joined Utkarsh-Abhinaya Theatre Club (National & State Level Winner in Theatre Performing Arts)' },
  { year: '2025', description: 'Joined GlowLogics Solutions Pvt. Ltd. as AI Intern & developed Python ML models' },
  { year: '2025+', description: 'Built many real world AI & full-stack software applications' }
];

export const REAL_CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    icon: 'Award',
    category: 'AI & Data'
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    icon: 'Sparkles',
    fileUrl: getAssetUrl('/certificates/Linkedin Learning/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf'),
    category: 'AI & Data'
  },
  {
    title: 'Anaconda Python for Data Science Professional Certificate',
    issuer: 'Anaconda & LinkedIn Learning',
    icon: 'Code',
    fileUrl: getAssetUrl('/certificates/Linkedin Learning/CertificateOfCompletion_Anaconda Python for Data Science Professional Certificate.pdf'),
    category: 'AI & Data'
  },
  {
    title: 'Data Engineering Foundations Professional Certificate',
    issuer: 'IBM & LinkedIn Learning',
    icon: 'Layers',
    fileUrl: getAssetUrl('/certificates/Linkedin Learning/CertificateOfCompletion_Data Engineering Foundations Professional Certificate by Astronomer.pdf'),
    category: 'AI & Data'
  },
  {
    title: 'Python for Everybody Specialization',
    issuer: 'University of Michigan / Coursera',
    icon: 'Code',
    fileUrl: getAssetUrl('/certificates/Coursera/Python for everybody-Coursera cerificate.jpeg'),
    category: 'AI & Data'
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'University of Michigan / Coursera',
    icon: 'Code',
    fileUrl: getAssetUrl('/certificates/Coursera/Python coursera certificate.jpeg'),
    category: 'AI & Data'
  },
  {
    title: 'Introduction to Data Warehouses',
    issuer: 'LinkedIn Learning',
    icon: 'Layers',
    fileUrl: getAssetUrl('/certificates/Linkedin Learning/CertificateOfCompletion_Introduction to Data Warehouses.pdf'),
    category: 'Software & Systems'
  },
  {
    title: 'Learning Data Governance',
    issuer: 'LinkedIn Learning',
    icon: 'Award',
    fileUrl: getAssetUrl('/certificates/Linkedin Learning/CertificateOfCompletion_Learning Data Governance.pdf'),
    category: 'Software & Systems'
  },
  {
    title: 'Learning Virtualization & Cloud Systems',
    issuer: 'LinkedIn Learning',
    icon: 'Layers',
    fileUrl: getAssetUrl('/certificates/Linkedin Learning/CertificateOfCompletion_Learning Virtualization.pdf'),
    category: 'Software & Systems'
  },
  {
    title: 'Networking & Systems Administration Fundamentals',
    issuer: 'LinkedIn Learning',
    icon: 'Layers',
    fileUrl: getAssetUrl('/certificates/Linkedin Learning/CertificateOfCompletion_Networking and Administration Fundamentals.pdf'),
    category: 'Software & Systems'
  },
  {
    title: 'English for Career Development',
    issuer: 'University of Pennsylvania / Coursera',
    icon: 'Sparkles',
    fileUrl: getAssetUrl('/certificates/Coursera/English For Career Development-Coursera cetificate.jpeg'),
    category: 'Management & Career'
  },
  {
    title: 'Introduction to Project Management',
    issuer: 'Coursera',
    icon: 'Award',
    fileUrl: getAssetUrl('/certificates/Coursera/Introduction to Project Management-Coursera certificate.jpeg'),
    category: 'Management & Career'
  },
  {
    title: 'Workplace Productivity & MS Word',
    issuer: 'Coursera',
    icon: 'Code',
    fileUrl: getAssetUrl('/certificates/Coursera/MS-Word-Coursera certificcate.jpeg'),
    category: 'Management & Career'
  }
];

export const REAL_LEADERSHIP = [
  {
    role: 'Head of Promotions & Content',
    organization: 'Acharya Kannada Vedike',
    achievement: 'Led promotional strategy, marketing campaigns, and content creation for campus cultural events.'
  },
  {
    role: 'National & State Theatre Winner',
    organization: 'Utkarsh-Abhinaya Theatre Club',
    achievement: 'Participant and winner in state and national-level drama and performing arts competitions.'
  },
  {
    role: 'Events Coordinator',
    organization: 'Srishti 2025 Innovation Exchange',
    achievement: 'Coordinated inter-college technical project exchange and student innovation exhibitions.'
  }
];

export const REAL_HONORS_ACHIEVEMENTS = [
  {
    title: 'National & State-Level Theatre Winner',
    organization: 'Utkarsh-Abhinaya Theatre Club',
    year: '2024 – 2026',
    category: 'Performing Arts & Leadership',
    description: 'Secured top honors and first-place awards in street play and stage theatre competitions across Karnataka and national college cultural festivals. Certified from NSD (Nation School of Drama)'
  },
  {
    title: 'Head of Promotions & Content Strategy',
    organization: 'Acharya Kannada Vedike',
    year: '2024 – 2026',
    category: 'Leadership & Marketing',
    description: 'Led promotional strategy, official branding, press communications, and content creation for major campus initiatives and cultural summits.'
  },
  {
    title: 'Events Coordinator',
    organization: 'Srishti 2025 Innovation Exchange',
    year: '2025',
    category: 'Leadership',
    description: 'Coordinated inter-college technical project exchanges, student innovation exhibitions, hackathons, and AI showcase events.'
  },
  {
    title: 'Academic Performance(CGPA: 7.0/10)',
    organization: 'Acharya Institute of Technology',
    year: '2023 – 2027',
    category: 'Academic Excellence',
    description: 'Maintained strong academic standing in B.E. Artificial Intelligence & Machine Learning with specializations in CV, NLP, and Web Architecture.'
  },
  {
    title: 'Pre-University & Schooling Excellence (88.32% SSLC / 82.32% PUC)',
    organization: 'St. Dominic\'s High School & S.A.V PU College',
    year: '2021 – 2023',
    category: 'Academic Distinction',
    description: 'Achieved 88.32% in SSLC 10th Grade and 82.32% in Senior Secondary PUC 12th Grade (Science PCMB).'
  }
];


export const TECH_STRIP_SKILLS = [
  { name: 'Python', iconKey: 'python' },
  { name: 'React', iconKey: 'react' },
  { name: 'Next.js', iconKey: 'nextjs' },
  { name: 'FastAPI', iconKey: 'fastapi' },
  { name: 'Node.js', iconKey: 'nodejs' },
  { name: 'Express.js', iconKey: 'express' },
  { name: 'PyTorch', iconKey: 'pytorch' },
  { name: 'OpenCV', iconKey: 'opencv' },
  { name: 'SQL', iconKey: 'sql' },
  { name: 'MySQL', iconKey: 'mysql' },
  { name: 'MongoDB', iconKey: 'mongodb' },
  { name: 'Git', iconKey: 'git' }
];

export const SKILL_CATEGORIES_PROGRESS: SkillCategoryWithProgress[] = [
  {
    title: 'Programming & Languages',
    skills: [
      { name: 'Python', percentage: 95 },
      { name: 'JavaScript (ES6+)', percentage: 90 },
      { name: 'SQL', percentage: 85 },
      { name: 'C', percentage: 80 }
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', percentage: 90 },
      { name: 'Next.js', percentage: 85 },
      { name: 'HTML5 / CSS3', percentage: 95 },
      { name: 'Bootstrap', percentage: 85 }
    ]
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'FastAPI', percentage: 90 },
      { name: 'Node.js', percentage: 85 },
      { name: 'Express.js', percentage: 85 },
      { name: 'REST APIs', percentage: 95 }
    ]
  },
  {
    title: 'AI / ML & Data Science',
    skills: [
      { name: 'TensorFlow / PyTorch', percentage: 85 },
      { name: 'Scikit-Learn', percentage: 90 },
      { name: 'OpenCV / MediaPipe', percentage: 90 },
      { name: 'Pandas & NumPy', percentage: 90 }
    ]
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL & MongoDB', percentage: 85 },
      { name: 'Git & GitHub', percentage: 90 },
      { name: 'VS Code & Vercel', percentage: 95 },
      { name: 'Tableau & Power BI', percentage: 85 }
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'vton-try-on',
    title: 'VTON – Full-Stack Virtual Try-On Platform',
    subtitle: 'AI-Powered Virtual Fitting Engine with Pose Estimation',
    category: 'AI / ML',
    description: 'Developed a full-stack AI-powered virtual try-on platform that enables users to visualize garments on uploaded images using computer vision and pose estimation.',
    longDescription: 'VTON is a full-stack AI platform enabling users to digitally fit garments onto body photos in real time powered by MediaPipe/OpenCV pose keypoint estimation, geometric warping, and FastAPI backend APIs.',
    technologies: ['Python', 'FastAPI', 'React.js', 'OpenCV', 'REST APIs', 'XAMPP'],
    keyFeatures: [
      'Implemented real-time 3D pose estimation and landmark joint alignment',
      'Engineered geometric garment fitting algorithms for realistic try-on',
      'Optimized image processing pipeline for fast, high-accuracy virtual try-on',
      'Built scalable RESTful backend microservices with FastAPI and Docker'
    ],
    architectureDetails: 'React.js Web App → FastAPI REST Gateway → OpenCV/MediaPipe Pose Estimator → Garment Warper → Docker Runtime',
    githubUrl: 'https://github.com/ayush-h-mane/VTON-Virtual-Try-On',
    liveUrl: '#',
    featured: true,
    image: getAssetUrl('/vton_cover.png')
  },
  {
    id: 'multilingual-toxicity',
    title: 'Multilingual Sarcasm-Aware Toxicity Detection',
    subtitle: 'DeBERTa & Streamlit NLP Text Classification Pipeline',
    category: 'NLP',
    description: 'Built a multilingual NLP application to detect sarcasm and toxic content across multiple languages using DeBERTa transformer model and Streamlit UI.',
    longDescription: 'An advanced NLP pipeline capable of analyzing multilingual text for subtle toxicity and sarcasm using fine-tuned DeBERTa transformers and a real-time Streamlit dashboard.',
    technologies: ['Python', 'PyTorch', 'DeBERTa', 'Streamlit', 'NLP', 'Scikit-Learn'],
    keyFeatures: [
      'Trained DeBERTa transformer models for sarcasm-aware toxicity identification',
      'Performed complex multilingual text preprocessing, tokenization, and vectorization',
      'Enabled real-time prediction through a user-friendly Streamlit web interface'
    ],
    architectureDetails: 'Streamlit UI → Tokenizer & Text Preprocessor → Fine-Tuned DeBERTa Transformer → Toxicity Probability & Sarcasm Classification',
    githubUrl: 'https://github.com/ayush-h-mane/Multilingual-Sarcasm-Aware-Toxicity-Detection',
    liveUrl: '#',
    featured: true,
    image: getAssetUrl('/deberta_cover.png')
  },
  {
    id: 'suspicious-url-detection',
    title: 'ML-Enhanced Suspicious URL Detection for Cybersecurity',
    subtitle: 'Machine Learning & Feature Extraction Cyber Threat Classifier',
    category: 'AI / ML',
    description: 'Developed an ML-enhanced cybersecurity detection system for analyzing URL lexical features, domain entropy, and host characteristics to classify suspicious URLs in real time.',
    longDescription: 'Engineered an end-to-end ML-enhanced cybersecurity detection pipeline that extracts lexical URL properties, length metrics, and domain entropy to detect phishing and suspicious URLs using trained Scikit-Learn models with RESTful inference endpoints.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Flask', 'Cybersecurity'],
    keyFeatures: [
      'Extracted lexical, length, and domain entropy features from web URLs',
      'Trained Scikit-Learn machine learning classifiers for suspicious URL detection',
      'Built RESTful inference endpoints for real-time cybersecurity threat scoring'
    ],
    architectureDetails: 'URL Input → Feature Extractor (Lexical & Domain Entropy) → Trained Scikit-Learn ML Classifier → Threat Score & Classification Gateway',
    githubUrl: 'https://github.com/ayush-h-mane/ML-Enhanced-Suspicious-URL-Detection-for-Cybersecurity',
    liveUrl: '#',
    featured: true,
    image: getAssetUrl('/cyber_cover.png')
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'exp-glowlogics',
    role: 'AI Intern',
    company: 'GlowLogics Solutions Pvt. Ltd.',
    period: 'Sep 2024 - Dec 2025',
    description: 'Developed AI/ML solutions using Python-based machine learning frameworks. Performed data preprocessing, model evaluation, hyperparameter optimization, and REST API integrations.',
    bullets: [
      'Developed AI/ML solutions using Python-based machine learning frameworks.',
      'Performed data preprocessing, feature engineering, model evaluation, and hyperparameter optimization.',
      'Collaborated on real-world AI software integration and backend REST API data workflows.'
    ]
  }
];

// Compatibility exports
export const PROJECTS = FEATURED_PROJECTS;
export const SKILL_GROUPS = SKILL_CATEGORIES_PROGRESS.map(c => ({
  category: c.title,
  skills: c.skills.map(s => ({ name: s.name, iconKey: s.name.toLowerCase().replace(/[^a-z]/g, '') }))
}));
export const CERTIFICATIONS = REAL_CERTIFICATIONS;
export const LEADERSHIP_ACTIVITIES = REAL_LEADERSHIP;
