import { chapter3Route as reviewedChapter3Route } from "./chapter3.js";

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

export const chapterRoutes = [
  placeholderRoute("chapter-1", "บทที่ 1", "Introduction", "บทที่ 1 บทนำ", "Chapter 1 - Introduction", 1),
  placeholderRoute("chapter-2", "บทที่ 2", "Theory", "บทที่ 2 ทฤษฎีและงานที่เกี่ยวข้อง", "Chapter 2 - Theory and Related Literature", 2),
  reviewedChapter3Route,
  placeholderRoute("chapter-4", "บทที่ 4", "Results", "บทที่ 4 ผลการศึกษา", "Chapter 4 - Results", 4),
  placeholderRoute("chapter-5", "บทที่ 5", "Discussion", "บทที่ 5 สรุป อภิปรายผล และข้อเสนอแนะ", "Chapter 5 - Summary, Discussion, and Recommendations", 5)
];
