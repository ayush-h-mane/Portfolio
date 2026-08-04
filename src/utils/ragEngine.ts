import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, REAL_CERTIFICATIONS, REAL_LEADERSHIP } from '../data/portfolioData';

export const AYUSH_PORTFOLIO_SYSTEM_INSTRUCTION = `
You are Mane AI, an intelligent AI assistant powered by Gemini for Ayush H Mane's software engineering portfolio.
Your role is to answer questions about Ayush accurately, professionally, and engagingly.

VERIFIED PROFILE OF AYUSH H MANE:
- Name: ${PERSONAL_INFO.name}
- Role: Full-Stack Developer & AI Specialist
- Location: ${PERSONAL_INFO.location}
- Email: ${PERSONAL_INFO.email}
- Phone & WhatsApp: ${PERSONAL_INFO.phone} (WhatsApp: https://wa.me/919535174767)
- Instagram: ${PERSONAL_INFO.instagram} (Handle: @ayush_h_mane)
- GitHub: ${PERSONAL_INFO.github}
- LinkedIn: ${PERSONAL_INFO.linkedin}
- Summary: ${PERSONAL_INFO.aboutBio.join(' ')}
- Comprehensive Education & Schooling:
  1. B.E. in Artificial Intelligence & Machine Learning at Acharya Institute of Technology, Bengaluru (2023 – 2027) | CGPA: 7.0 / 10
  2. Pre-University Course (PUC 12th Grade Science - PCMB) at S.A.V Composite PU College (2021 – 2023) | Percentage: 82.32%
  3. Secondary School Leaving Certificate (SSLC 10th Grade) at St. Dominic's High School (2020 – 2021) | Percentage: 88.32%
- Industry Internship: AI Intern at GlowLogics Solutions Pvt. Ltd., Bengaluru (Sep 2024 – Dec 2025) (Python, Scikit-learn, ML data pipelines, feature engineering, model hyperparameter tuning).
- Flagship Monorepos & Real-World Projects:
  1. VTON – Full-Stack Virtual Try-On Platform (FastAPI, React.js, OpenCV, Docker, MediaPipe 3D Pose Warping, Thin-Plate Spline garment warping).
  2. Multilingual Sarcasm-Aware Toxicity Detection (DeBERTa transformers, PyTorch, Streamlit).
  3. ML-Enhanced Suspicious URL Detection for Cybersecurity (Scikit-Learn, Pandas, NumPy, Flask).
- Verified Professional Certifications (${REAL_CERTIFICATIONS.length} Credentials):
${REAL_CERTIFICATIONS.map((c, i) => `  ${i + 1}. ${c.title} by ${c.issuer}`).join('\n')}
- Leadership & Extra-Curriculars:
  1. Joined Utkarsh-Abhinaya Theatre Club in 2024 (National & State-Level Winner in Theatre Performing Arts).
  2. Head of Promotions & Content at Acharya Kannada Vedike.
  3. Events Coordinator at Srishti 2026 Innovation Exchange.
- Technical Stack: Python, JavaScript, SQL, C, React.js, Next.js, FastAPI, Flask, Node.js, Express.js, PyTorch, TensorFlow, Scikit-learn, OpenCV, MediaPipe, Docker, Git, GitHub, VS Code, Tableau, Power BI, Vercel, Cursor, MCP.

RESPONSE RULES:
- Use markdown formatting with bullet points and emojis.
- Be concise, direct, helpful, and polite.
- Keep answers brief, structured, and focused strictly on what was asked.
`;

export async function askGeminiAI(userQuery: string, customApiKey?: string): Promise<string> {
  const apiKey = (customApiKey && customApiKey.trim() !== '') 
    ? customApiKey 
    : (import.meta.env.VITE_GEMINI_API_KEY || '');

  if (apiKey && apiKey.trim() !== '') {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userQuery,
        config: {
          systemInstruction: AYUSH_PORTFOLIO_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      if (response && response.text && response.text.trim().length > 0) {
        return response.text.trim();
      }
    } catch (err) {
      console.warn('Gemini API call warning, falling back to neural RAG engine:', err);
    }
  }

  // Fall back to local neural RAG engine
  return generateRAGResponse(userQuery);
}

export function generateRAGResponse(query: string): string {
  const q = query.toLowerCase().trim();

  // 1. SPECIFIC PROJECT: VTON Virtual Try-On
  if (q.includes('vton') || q.includes('try-on') || q.includes('try on') || q.includes('virtual fitting') || q.includes('garment') || q.includes('pose')) {
    return `👕 **VTON – Full-Stack Virtual Try-On Platform**\n\n• **Overview**: An AI-powered virtual fitting engine enabling users to digitally overlay garments onto body photos in real time.\n• **Key Features**: MediaPipe 3D pose keypoint estimation, landmark joint alignment, and geometric thin-plate spline garment warping.\n• **Tech Stack**: FastAPI (Python), React.js, OpenCV, Docker Compose, REST APIs.`;
  }

  // 2. SPECIFIC PROJECT: Multilingual Toxicity Detection
  if (q.includes('toxicity') || q.includes('deberta') || q.includes('sarcasm') || q.includes('multilingual')) {
    return `🛡️ **Multilingual Sarcasm-Aware Toxicity Detection**\n\n• **Overview**: An advanced NLP pipeline detecting subtle toxicity and sarcasm across multiple languages in real time.\n• **Key Features**: DeBERTa transformer fine-tuning, custom tokenization pipelines, and instant sentence scoring.\n• **Tech Stack**: Python, PyTorch, DeBERTa, Streamlit, HuggingFace.`;
  }

  // 3. SPECIFIC PROJECT: Cyber Threat Detection
  if (q.includes('cyber') || q.includes('threat') || q.includes('url') || q.includes('security')) {
    return `🔒 **ML-Enhanced Suspicious URL Detection for Cybersecurity**\n\n• **Overview**: A machine learning classification engine analyzing URL lexical features, domain entropy, and host characteristics to classify suspicious URLs.\n• **Key Features**: Feature extraction, domain entropy calculation, and a live prediction endpoint.\n• **Tech Stack**: Python, Scikit-Learn, Flask, Pandas, NumPy.`;
  }

  // 4. GENERAL PROJECTS QUERY
  if (q.includes('project') || q.includes('repo') || q.includes('built') || q.includes('code') || q.includes('work')) {
    return `🚀 **Ayush's Featured Engineering Projects**:\n\n1. 👕 **VTON Virtual Try-On Engine** (FastAPI, React.js, OpenCV, Docker)\n2. 🛡️ **Multilingual Toxicity & Sarcasm Detector** (DeBERTa, PyTorch, Streamlit)\n3. 🔒 **ML Cybersecurity Suspicious URL Detector** (Scikit-Learn, Flask, Pandas)\n\n*Ask me about any specific project for a deep dive!*`;
  }

  // 5. ABOUT / BIO / WHO IS AYUSH / OVERVIEW
  if (q.includes('who') || q.includes('about') || q.includes('bio') || q.includes('yourself') || q.includes('ayush') || q.includes('summary') || q.includes('intro') || q.includes('background')) {
    return `👨‍💻 **Ayush H Mane — Full-Stack Developer & AI Engineer**\n\n• **Role**: AI & ML Engineering Student | Full-Stack Developer\n• **Education**: B.E. in AI & ML at **Acharya Institute of Technology, Bengaluru** (**7.0 / 10 CGPA**, 2023–2027)\n• **Schooling**: PUC Science (**82.32%**) | SSLC High School (**88.32%**)\n• **Experience**: AI Intern at **GlowLogics Solutions Pvt. Ltd.** (Sep 2024 – Dec 2025)\n• **Theatre**: Joined Utkarsh-Abhinaya Theatre Club in 2024 (National & State Winner)\n• **Location**: Bengaluru, Karnataka, India`;
  }

  // 6. EDUCATION / COLLEGE / CGPA / SCHOOLING
  if (q.includes('education') || q.includes('cgpa') || q.includes('college') || q.includes('university') || q.includes('degree') || q.includes('marks') || q.includes('acharya') || q.includes('puc') || q.includes('sslc') || q.includes('school')) {
    return `🎓 **Education & Schooling History**:\n\n1. 🎓 **Undergraduate B.E. (AI & ML)**: Acharya Institute of Technology, Bengaluru (2023 – 2027) — **CGPA: 7.0 / 10**\n2. 🏫 **Senior Secondary (PUC 12th)**: S.A.V Composite PU College (2021 – 2023) — **82.32%** (Science PCMB)\n3. 🏫 **Secondary School (SSLC 10th)**: St. Dominic's High School (2020 – 2021) — **88.32%**`;
  }

  // 7. EXPERIENCE / INTERNSHIP / GLOWLOGICS
  if (q.includes('experience') || q.includes('intern') || q.includes('glowlogics') || q.includes('job') || q.includes('career')) {
    return `💼 **Professional Experience**:\n\n**GlowLogics Solutions Pvt. Ltd.** — *AI Intern (Bengaluru, India | Sep 2024 – Dec 2025)*\n• Developed AI/ML solutions using Python-based machine learning frameworks.\n• Performed data preprocessing, feature engineering, model evaluation, and hyperparameter optimization.\n• Collaborated on real-world AI software integration and backend REST API data workflows.`;
  }

  // 8. SKILLS / TECH STACK
  if (q.includes('skill') || q.includes('stack') || q.includes('python') || q.includes('react') || q.includes('fastapi') || q.includes('opencv') || q.includes('docker') || q.includes('language')) {
    return `🛠️ **Technical Stack & Skills Matrix**:\n\n• 💻 **Languages**: Python, JavaScript (ES6+), SQL, C\n• 🎨 **Frontend**: React.js, Next.js, HTML5, CSS3, Bootstrap\n• ⚡ **Backend**: FastAPI, Node.js, Express.js, REST APIs\n• 🧠 **AI/ML & Vision**: PyTorch, TensorFlow, Scikit-learn, OpenCV, MediaPipe, Pandas, NumPy\n• 📦 **Tools & Databases**: MySQL, MongoDB, Docker, Git, GitHub, VS Code, Vercel, Tableau, Power BI`;
  }

  // 9. INSTAGRAM
  if (q.includes('instagram') || q.includes('ig') || q.includes('insta')) {
    return `📷 **Ayush's Official Instagram Profile**:\n\n• **Handle**: [@ayush_h_mane](https://www.instagram.com/ayush_h_mane/?hl=en)\n• **Direct Link**: [instagram.com/ayush_h_mane](https://www.instagram.com/ayush_h_mane/?hl=en)`;
  }

  // 10. WHATSAPP
  if (q.includes('whatsapp') || q.includes('wa') || q.includes('chat') || q.includes('message')) {
    return `💬 **Ayush's Official WhatsApp Contact**:\n\n• **Number**: [+91 9535174767](https://wa.me/919535174767)\n• **Direct Chat**: [Click here to chat on WhatsApp](https://wa.me/919535174767)`;
  }

  // 11. CONTACT / EMAIL / PHONE / LINKEDIN / GITHUB
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire') || q.includes('github') || q.includes('linkedin') || q.includes('number')) {
    return `📬 **Get in Touch with Ayush H Mane**:\n\n• ✉️ **Email**: [ayushhmane@gmail.com](mailto:ayushhmane@gmail.com)\n• 📞 **Phone & WhatsApp**: [+91 9535174767](https://wa.me/919535174767)\n• 🐙 **GitHub**: [github.com/ayush-h-mane](https://github.com/ayush-h-mane)\n• 💼 **LinkedIn**: [linkedin.com/in/ayush-h-mane](https://linkedin.com/in/ayush-h-mane)\n• 📷 **Instagram**: [@ayush_h_mane](https://www.instagram.com/ayush_h_mane/?hl=en)\n• 📍 **Location**: Bengaluru, Karnataka, India`;
  }

  // 12. CERTIFICATIONS
  if (q.includes('certif') || q.includes('google') || q.includes('microsoft') || q.includes('coursera') || q.includes('anaconda') || q.includes('ibm') || q.includes('linkedin learning')) {
    return `🏆 **Verified Professional Certifications (${REAL_CERTIFICATIONS.length} Total)**:\n\n${REAL_CERTIFICATIONS.slice(0, 8).map((c, i) => `${i + 1}. 📜 **${c.title}** (*${c.issuer}*)`).join('\n')}\n...and 5 more! View the Achievements section to open direct PDF documents.`;
  }

  // 13. LEADERSHIP & EXTRACURRICULAR & THEATRE
  if (q.includes('leadership') || q.includes('kannada') || q.includes('theatre') || q.includes('utkarsh') || q.includes('vedike') || q.includes('srishti') || q.includes('journey')) {
    return `🌟 **Leadership, Theatre & Extracurriculars**:\n\n• 🎭 **Utkarsh-Abhinaya Theatre Club**: Joined in 2024 — State & National Level Winner in Performing Arts\n• 📢 **Acharya Kannada Vedike**: Head of Promotions & Content\n• ⚡ **Srishti 2026 Innovation Exchange**: Events Coordinator`;
  }

  // Default Comprehensive Profile Answer
  return `👋 **I am Mane AI**, Ayush H Mane's intelligent profile assistant.\n\nHere is a quick overview of **Ayush H Mane**:\n• **Role**: AI & ML Software Engineer | Full-Stack Developer\n• **Education**: B.E. in AI & ML (**7.0 CGPA**) | PUC (**82.32%**) | SSLC (**88.32%**)\n• **Experience**: AI Intern at GlowLogics Solutions Pvt. Ltd. (Sep 2024 – Dec 2025)\n• **Theatre**: Joined Utkarsh-Abhinaya Theatre Club in 2024 (National/State Winner)\n• **Certifications**: 13 Verified Coursera & LinkedIn Learning Credentials\n• **Contact**: [ayushhmane@gmail.com](mailto:ayushhmane@gmail.com) | [+91 9535174767](https://wa.me/919535174767)\n\nAsk me about **VTON**, **Skills**, **Education**, **Theatre**, **Instagram**, or **Contact**!`;
}
