import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.units import inch

pdf_path = r"d:\Portfolio\public\Ayush_H_Mane_Resume.pdf"
txt_path = r"d:\Portfolio\public\Ayush_H_Mane_Resume.txt"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# Define Custom Styles
title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=24,
    alignment=1, # Center
    textColor=colors.HexColor('#1E3A8A')
)

contact_style = ParagraphStyle(
    'DocContact',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=12,
    alignment=1,
    textColor=colors.HexColor('#334155')
)

section_heading_style = ParagraphStyle(
    'SectionHeading',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=13,
    textColor=colors.HexColor('#1E3A8A'),
    spaceBefore=8,
    spaceAfter=2
)

body_style = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=11.5,
    textColor=colors.HexColor('#1E293B'),
    spaceAfter=3
)

bullet_style = ParagraphStyle(
    'BulletCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=11.5,
    leftIndent=12,
    textColor=colors.HexColor('#1E293B'),
    spaceAfter=2
)

bold_label_style = ParagraphStyle(
    'BoldLabel',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9,
    leading=11.5,
    textColor=colors.HexColor('#0F172A')
)

story = []

# Header
story.append(Paragraph("AYUSH H MANE", title_style))
story.append(Spacer(1, 4))

contact_text = "+91 9535174767 &nbsp;&bull;&nbsp; ayushhmane@gmail.com &nbsp;&bull;&nbsp; LinkedIn: linkedin.com/in/ayush-h-mane &nbsp;&bull;&nbsp; GitHub: github.com/ayush-h-mane &nbsp;&bull;&nbsp; Bengaluru, Karnataka"
story.append(Paragraph(contact_text, contact_style))
story.append(Spacer(1, 6))

def add_section_header(title):
    story.append(Paragraph(title, section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#94A3B8'), spaceBefore=1, spaceAfter=4))

# Summary
add_section_header("Summary")
summary_text = "Aspiring Full-Stack Software Engineer with hands-on experience in designing and developing scalable web applications using React.js, Next.js, FastAPI, Node.js, Python, SQL, and modern development tools. Skilled in building responsive frontends, secure backend APIs, and database-driven applications while following clean coding practices. Experienced in integrating Machine Learning, Computer Vision, and NLP into real-world software solutions. A quick learner with strong analytical, leadership, and problem-solving abilities, passionate about building innovative products that create meaningful user impact."
story.append(Paragraph(summary_text, body_style))

# Education
add_section_header("Education")
edu_header = "<b>Acharya Institute of Technology, Bengaluru</b> <font color='#64748B'>| 2023 – 2027</font>"
story.append(Paragraph(edu_header, body_style))
edu_sub = "B.E. in Artificial Intelligence & Machine Learning &nbsp;&nbsp;&bull;&nbsp;&nbsp; CGPA: 7.0 / 10"
story.append(Paragraph(edu_sub, body_style))

# Technical Skills
add_section_header("Technical Skills")
skills = [
    "<b>Programming:</b> Python, JavaScript, SQL, C",
    "<b>Frontend:</b> React.js, Next.js, HTML, CSS, Bootstrap",
    "<b>Backend:</b> FastAPI, Node.js, Express.js, REST APIs",
    "<b>AI/ML:</b> TensorFlow, PyTorch, Scikit-learn, OpenCV, Pandas, NumPy",
    "<b>Databases:</b> MySQL, MongoDB",
    "<b>Developer Tools:</b> Git, GitHub, Xampp, VS Code, Tableau, Power BI, Vercel, Cursor, MCP, Razorpay"
]
for skill in skills:
    story.append(Paragraph(skill, body_style))

# Experience
add_section_header("Experience")
exp_header = "<b>GlowLogics Solutions Pvt. Ltd.</b> &nbsp;&bull;&nbsp; <i>AI Intern</i> <font color='#64748B'>(Bengaluru)</font>"
story.append(Paragraph(exp_header, body_style))
story.append(Paragraph("&bull; Developed AI/ML solutions using Python-based frameworks.", bullet_style))
story.append(Paragraph("&bull; Performed data preprocessing, model evaluation and optimization.", bullet_style))

# Selected Projects
add_section_header("Selected Projects")

proj1_title = "<b>VTON &ndash; Full-Stack Virtual Try-On Platform</b>"
proj1_stack = "<font color='#475569'><b>Tech Stack:</b> Python, FastAPI, React.js, OpenCV, XAMPP, REST APIs</font>"
proj1_desc = "Developed a full-stack AI-powered virtual try-on platform that enables users to visualize garments on uploaded images using computer vision and pose estimation. Built scalable RESTful APIs with FastAPI, integrated a responsive React.js frontend, and optimized image processing for a smooth user experience."
story.append(Paragraph(proj1_title, body_style))
story.append(Paragraph(proj1_stack, body_style))
story.append(Paragraph(proj1_desc, body_style))
story.append(Spacer(1, 3))

proj2_title = "<b>Multilingual Sarcasm-Aware Toxicity Detection</b>"
proj2_stack = "<font color='#475569'><b>Tech Stack:</b> Python, PyTorch, DeBERTa, Streamlit, NLP</font>"
proj2_desc = "Built a multilingual NLP application to detect sarcasm and toxic content across multiple languages using the DeBERTa transformer model. Implemented text preprocessing, model inference, and a Streamlit-based interface for accurate real-time toxicity detection."
story.append(Paragraph(proj2_title, body_style))
story.append(Paragraph(proj2_stack, body_style))
story.append(Paragraph(proj2_desc, body_style))

# Leadership & Activities
add_section_header("Leadership & Activities")
story.append(Paragraph("&bull; <b>Acharya Kannada Vedike:</b> Head of Promotions & Content", bullet_style))
story.append(Paragraph("&bull; <b>Utkarsh-Abhinaya Theatre Club:</b> National & State-level participant and winner", bullet_style))
story.append(Paragraph("&bull; <b>Events Coordinator:</b> Srishti 2026 Innovation Exchange", bullet_style))

# Certifications
add_section_header("Certifications")
certs = [
    "Google Data Analytics Professional Certificate",
    "Career Essentials in Generative AI (Microsoft & LinkedIn)",
    "Anaconda Python for Data Science Professional Certificate",
    "Data Engineering Foundations Professional Certificate"
]
for cert in certs:
    story.append(Paragraph(f"&bull; {cert}", bullet_style))

doc.build(story)

# Also update text file version
txt_content = """AYUSH H MANE
+91 9535174767 | ayushhmane@gmail.com | LinkedIn: linkedin.com/in/ayush-h-mane | GitHub: github.com/ayush-h-mane | Bengaluru, Karnataka

SUMMARY
Aspiring Full-Stack Software Engineer with hands-on experience in designing and developing scalable web applications using React.js, Next.js, FastAPI, Node.js, Python, SQL, and modern development tools. Skilled in building responsive frontends, secure backend APIs, and database-driven applications while following clean coding practices. Experienced in integrating Machine Learning, Computer Vision, and NLP into real-world software solutions. A quick learner with strong analytical, leadership, and problem-solving abilities, passionate about building innovative products that create meaningful user impact.

EDUCATION
Acharya Institute of Technology, Bengaluru (2023 - 2027)
B.E. in Artificial Intelligence & Machine Learning | CGPA: 7.0/10

TECHNICAL SKILLS
Programming: Python, JavaScript, SQL, C
Frontend: React.js, Next.js, HTML, CSS, Bootstrap
Backend: FastAPI, Node.js, Express.js, REST APIs
AI/ML: TensorFlow, PyTorch, Scikit-learn, OpenCV, Pandas, NumPy
Databases: MySQL, MongoDB
Developer Tools: Git, GitHub, Xampp, VS Code, Tableau, Power BI, Vercel, Cursor, MCP, Razorpay

EXPERIENCE
GlowLogics Solutions Pvt. Ltd. - AI Intern (Bengaluru)
- Developed AI/ML solutions using Python-based frameworks.
- Performed data preprocessing, model evaluation and optimization.

SELECTED PROJECTS
VTON - Full-Stack Virtual Try-On Platform
Tech Stack: Python, FastAPI, React.js, OpenCV, XAMPP, REST APIs
Developed a full-stack AI-powered virtual try-on platform that enables users to visualize garments on uploaded images using computer vision and pose estimation. Built scalable RESTful APIs with FastAPI, integrated a responsive React.js frontend, and optimized image processing for a smooth user experience.

Multilingual Sarcasm-Aware Toxicity Detection
Tech Stack: Python, PyTorch, DeBERTa, Streamlit, NLP
Built a multilingual NLP application to detect sarcasm and toxic content across multiple languages using the DeBERTa transformer model. Implemented text preprocessing, model inference, and a Streamlit-based interface for accurate real-time toxicity detection.

LEADERSHIP & ACTIVITIES
- Acharya Kannada Vedike: Head of Promotions & Content
- Utkarsh-Abhinaya Theatre Club: National & State-level participant and winner
- Events Coordinator: Srishti 2026 Innovation Exchange

CERTIFICATIONS
- Google Data Analytics Professional Certificate
- Career Essentials in Generative AI (Microsoft & LinkedIn)
- Anaconda Python for Data Science Professional Certificate
- Data Engineering Foundations Professional Certificate
"""

with open(txt_path, 'w', encoding='utf-8') as f:
    f.write(txt_content)

print("PDF & TXT successfully generated.")
