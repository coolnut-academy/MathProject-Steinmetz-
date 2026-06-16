const placeholderParagraph =
  "ยังไม่มีเอกสารต้นฉบับที่ผ่านการตรวจทานสำหรับส่วนนี้ จึงแสดงเป็น placeholder เพื่อรักษาโครงสร้างรายงานโดยไม่สร้างเนื้อหาวิชาการขึ้นเอง";

function placeholderRoute(id, label, shortLabel, title, englishTitle, chapterNumber) {
  return {
    id,
    label,
    shortLabel,
    title,
    englishTitle,
    chapter: chapterNumber,
    status: "placeholder",
    source: "plan (1).md",
    blocks: [
      {
        id: `${id}-placeholder`,
        type: "placeholder",
        status: "placeholder",
        title: "รอเนื้อหาต้นฉบับ",
        content: [
          {
            id: `${id}-placeholder-p`,
            type: "paragraph",
            status: "placeholder",
            text: placeholderParagraph
          }
        ]
      }
    ]
  };
}

export const abstractThaiRoute = {
  id: "abstract-thai",
  label: "บทคัดย่อ",
  shortLabel: "TH Abstract",
  title: "บทคัดย่อภาษาไทย",
  englishTitle: "Thai Abstract",
  status: "placeholder",
  source: "plan (1).md section 12E",
  blocks: [
    {
      id: "abstract-thai-placeholder",
      type: "placeholder",
      status: "placeholder",
      title: "เขียนหลังบทที่ 1-5 เสถียรแล้ว",
      content: [
        {
          id: "abstract-thai-placeholder-p",
          type: "paragraph",
          status: "placeholder",
          text:
            "ตามแผนการทำงาน บทคัดย่อจะเขียนหลังจากบทที่ 1-5 และผลการคำนวณได้รับการตรวจสอบแล้ว เพื่อหลีกเลี่ยงการอ้างผลที่ยังไม่เสร็จสมบูรณ์"
        }
      ]
    }
  ]
};

export const abstractEnglishRoute = {
  id: "abstract-english",
  label: "English Abstract",
  shortLabel: "EN Abstract",
  title: "English Abstract",
  englishTitle: "English Abstract",
  status: "placeholder",
  source: "plan (1).md section 12E",
  blocks: [
    {
      id: "abstract-english-placeholder",
      type: "placeholder",
      status: "placeholder",
      title: "Pending final report results",
      content: [
        {
          id: "abstract-english-placeholder-p",
          type: "paragraph",
          status: "placeholder",
          text:
            "The English abstract is intentionally deferred until Chapters 1-5, verified formulas, and numerical results are stable."
        }
      ]
    }
  ]
};

const chapter3Route = {
  id: "chapter-3",
  label: "บทที่ 3",
  shortLabel: "Methodology",
  title: "บทที่ 3 วิธีดำเนินการและบทพิสูจน์ทางคณิตศาสตร์",
  englishTitle: "Chapter 3 - Methodology and Mathematical Proofs",
  chapter: 3,
  status: "needs-review",
  source: "plan (1).md; reviewed Chapter 3 source not found",
  blocks: [
    {
      id: "ch3-method-overview",
      type: "heading",
      level: 2,
      section: "3.1",
      status: "needs-review",
      title: "ภาพรวมของวิธีการ",
      content: [
        {
          id: "ch3-method-overview-p",
          type: "paragraph",
          status: "needs-review",
          text:
            "โครงสร้างต้นแบบนี้เตรียมพื้นที่สำหรับนำเข้าบทพิสูจน์ฉบับเต็มจากเอกสารต้นฉบับ เมื่อมีไฟล์ 03_Steinmetz_Chapter3_Full_Proof.md ระบบจะต้องแปลงแต่ละหัวข้อเป็นบล็อกข้อมูลโดยรักษาลำดับและสมการเดิม"
        },
        {
          id: "ch3-method-overview-note",
          type: "note",
          status: "needs-review",
          title: "ข้อจำกัดของต้นแบบ",
          content: [
            {
              id: "ch3-method-overview-note-p",
              type: "paragraph",
              status: "needs-review",
              text:
                "ยังไม่มีบทพิสูจน์ที่ผ่านการตรวจทานใน repository จึงไม่เติมขั้นตอนพิสูจน์ขึ้นเอง"
            }
          ]
        }
      ]
    },
    {
      id: "ch3-assumptions-notation",
      type: "heading",
      level: 2,
      section: "3.2",
      status: "needs-review",
      title: "สมมติฐานและสัญลักษณ์",
      content: [
        {
          id: "ch3-domain-assumption",
          type: "assumption",
          status: "needs-review",
          title: "โดเมนของพารามิเตอร์",
          source: "plan (1).md section 7.1",
          content: [
            {
              id: "ch3-domain-eq",
              type: "equation",
              number: "3.1",
              status: "needs-review",
              source: "plan (1).md section 7.1",
              title: "Parameter domain",
              description: "Core parameter convention planned for the report.",
              latex: String.raw`0<r_1\le r_2,\qquad
0<\beta\le\frac{\pi}{2},\qquad
k=\frac{r_1}{r_2}`
            }
          ]
        },
        {
          id: "ch3-elliptic-convention",
          type: "definition",
          status: "needs-review",
          title: "นิยามของ complete elliptic integrals",
          source: "plan (1).md section 7.2",
          content: [
            {
              id: "eq-elliptic-k",
              type: "equation",
              number: "3.2",
              status: "needs-review",
              source: "plan (1).md section 7.2",
              title: "Complete elliptic integral of the first kind",
              description: "Definition using modulus k.",
              latex: String.raw`K(k)=\int_0^{\pi/2}
\frac{d\theta}{\sqrt{1-k^2\sin^2\theta}}`
            },
            {
              id: "eq-elliptic-e",
              type: "equation",
              number: "3.3",
              status: "needs-review",
              source: "plan (1).md section 7.2",
              title: "Complete elliptic integral of the second kind",
              description: "Definition using modulus k.",
              latex: String.raw`E(k)=\int_0^{\pi/2}
\sqrt{1-k^2\sin^2\theta}\,d\theta`
            },
            {
              id: "ch3-library-warning",
              type: "warning",
              status: "needs-review",
              title: "Software convention warning",
              content: [
                {
                  id: "ch3-library-warning-p",
                  type: "paragraph",
                  status: "needs-review",
                  text:
                    "บาง library ใช้ parameter m แทน modulus k ดังนั้นต้องตรวจสอบว่า m=k^2 ก่อนใช้ผลเชิงตัวเลข"
                },
                {
                  id: "eq-library-parameter",
                  type: "equation",
                  number: "3.4",
                  status: "needs-review",
                  source: "plan (1).md section 7.2",
                  title: "Library parameter convention",
                  description: "Parameter used by some elliptic-integral software APIs.",
                  latex: String.raw`m=k^2`
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ch3-cross-section",
      type: "heading",
      level: 2,
      section: "3.3",
      status: "needs-review",
      title: "พื้นที่หน้าตัด",
      relatedIds: ["simulation-cross-section"],
      content: [
        {
          id: "ch3-cross-section-theorem",
          type: "theorem",
          number: "3.1",
          status: "needs-review",
          title: "Planned cross-section area formula",
          source: "plan (1).md section 12.4",
          content: [
            {
              id: "eq-cross-section-area",
              type: "equation",
              number: "3.5",
              status: "needs-review",
              source: "plan (1).md section 12.4",
              title: "Cross-section area",
              description: "Formula displayed in the planned 2D simulation.",
              latex: String.raw`A(x)=
\frac{4\sqrt{r_1^2-x^2}\sqrt{r_2^2-x^2}}
{\sin\beta}`
            }
          ]
        },
        {
          id: "ch3-cross-section-proof",
          type: "proof",
          status: "placeholder",
          proves: "ch3-cross-section-theorem",
          title: "Proof source pending",
          content: [
            {
              id: "ch3-cross-section-proof-p",
              type: "paragraph",
              status: "placeholder",
              text:
                "ตำแหน่งนี้สงวนไว้สำหรับบทพิสูจน์ฉบับเต็มจากเอกสาร Chapter 3 ที่ผ่านการตรวจทาน ระบบจะไม่สร้างขั้นตอนพิสูจน์แทนแหล่งอ้างอิงจริง"
            }
          ]
        }
      ]
    },
    {
      id: "ch3-volume-theorem-section",
      type: "heading",
      level: 2,
      section: "3.4",
      status: "needs-review",
      title: "ทฤษฎีบทปริมาตร",
      content: [
        {
          id: "thm-volume-general",
          type: "theorem",
          number: "3.2",
          status: "needs-review",
          title: "Planned general volume formula",
          source: "plan (1).md section 12.6",
          content: [
            {
              id: "eq-volume-closed-form",
              type: "equation",
              number: "3.6",
              status: "needs-review",
              source: "plan (1).md section 12.6",
              title: "General volume formula",
              description: "Closed-form volume formula supplied by the plan.",
              latex: String.raw`V=
\frac{8r_2^3}{3\sin\beta}
\left[
(1+k^2)E(k)
-(1-k^2)K(k)
\right]`
            }
          ]
        },
        {
          id: "proof-volume-general",
          type: "proof",
          status: "placeholder",
          proves: "thm-volume-general",
          title: "Proof source pending",
          content: [
            {
              id: "proof-volume-general-p",
              type: "paragraph",
              status: "placeholder",
              text:
                "บทพิสูจน์ฉบับเต็มต้องนำเข้าจาก source document เท่านั้น เพื่อไม่ให้เกิดการย่อ ตัดขั้นตอน หรือเปลี่ยนสูตรโดยไม่ผ่านการตรวจทาน"
            }
          ]
        }
      ]
    },
    {
      id: "ch3-surface-area-section",
      type: "heading",
      level: 2,
      section: "3.5",
      status: "needs-review",
      title: "พื้นที่ผิวขอบเขต",
      content: [
        {
          id: "ch3-surface-formulas",
          type: "proposition",
          number: "3.3",
          status: "needs-review",
          title: "Planned surface-area components",
          source: "plan (1).md section 12.6",
          content: [
            {
              id: "eq-surface-small",
              type: "equation",
              number: "3.7",
              status: "needs-review",
              source: "plan (1).md section 12.6",
              title: "Smaller-cylinder contribution",
              description: "Planned formula for smaller-cylinder boundary surface contribution.",
              latex: String.raw`S_{\mathrm{small}}
=
\frac{8r_1r_2}{\sin\beta}E(k)`
            },
            {
              id: "eq-surface-large",
              type: "equation",
              number: "3.8",
              status: "needs-review",
              source: "plan (1).md section 12.6",
              title: "Larger-cylinder contribution",
              description: "Planned formula for larger-cylinder boundary surface contribution.",
              latex: String.raw`S_{\mathrm{large}}
=
\frac{8r_2^2}{\sin\beta}
\left[
E(k)-(1-k^2)K(k)
\right]`
            },
            {
              id: "eq-surface-total",
              type: "equation",
              number: "3.9",
              status: "needs-review",
              source: "plan (1).md section 12.6",
              title: "Total boundary surface area",
              description: "Planned total boundary surface formula.",
              latex: String.raw`S=
\frac{8r_2^2}{\sin\beta}
\left[
(1+k)E(k)-(1-k^2)K(k)
\right]`
            }
          ]
        }
      ]
    },
    {
      id: "ch3-numerical-check-section",
      type: "heading",
      level: 2,
      section: "3.6",
      status: "draft",
      title: "การตรวจสอบเชิงตัวเลข",
      content: [
        {
          id: "ch3-numerical-check-placeholder",
          type: "numerical-check",
          status: "placeholder",
          title: "Numerical verification scaffold",
          content: [
            {
              id: "ch3-numerical-check-p",
              type: "paragraph",
              status: "placeholder",
              text:
                "ส่วนนี้เตรียมไว้สำหรับ direct quadrature, closed-form comparison และ optional Monte Carlo หลังจากมีสูตรและ tolerance ที่ตรวจสอบแล้ว"
            }
          ]
        }
      ]
    }
  ]
};

export const chapterRoutes = [
  placeholderRoute("chapter-1", "บทที่ 1", "Introduction", "บทที่ 1 บทนำ", "Chapter 1 - Introduction", 1),
  placeholderRoute("chapter-2", "บทที่ 2", "Theory", "บทที่ 2 ทฤษฎีและงานที่เกี่ยวข้อง", "Chapter 2 - Theory and Related Literature", 2),
  chapter3Route,
  placeholderRoute("chapter-4", "บทที่ 4", "Results", "บทที่ 4 ผลการศึกษา", "Chapter 4 - Results", 4),
  placeholderRoute("chapter-5", "บทที่ 5", "Discussion", "บทที่ 5 สรุป อภิปรายผล และข้อเสนอแนะ", "Chapter 5 - Summary, Discussion, and Recommendations", 5)
];
