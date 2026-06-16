import { bibliographyAudit, references } from "./references.js";

export const bibliographyRoute = {
  id: "bibliography",
  label: "บรรณานุกรม",
  shortLabel: "Bibliography",
  title: "บรรณานุกรม",
  englishTitle: "Bibliography",
  status: "placeholder",
  source: "plan (1).md section 14",
  blocks: [
    {
      id: "bibliography-audit",
      type: "bibliography-list",
      status: bibliographyAudit.status,
      title: "Bibliography verification audit",
      references,
      audit: bibliographyAudit
    },
    {
      id: "bibliography-placeholder",
      type: "placeholder",
      status: "placeholder",
      title: "No verified references imported yet",
      content: [
        {
          id: "bibliography-placeholder-p",
          type: "paragraph",
          status: "placeholder",
          text:
            "ยังไม่มีรายการอ้างอิงที่ตรวจสอบแล้ว จึงไม่สร้างชื่อผู้แต่ง ปี DOI หรือรายการบรรณานุกรมขึ้นเอง"
        }
      ]
    }
  ]
};

export const appendicesRoute = {
  id: "appendices",
  label: "ภาคผนวก",
  shortLabel: "Appendices",
  title: "ภาคผนวก",
  englishTitle: "Appendices",
  status: "draft",
  source: "plan (1).md section 12G",
  blocks: [
    {
      id: "word-transfer-guide",
      type: "heading",
      level: 2,
      status: "draft",
      title: "แนวทางคัดลอกไป Microsoft Word",
      content: [
        {
          id: "word-transfer-guide-list",
          type: "ordered-list",
          status: "draft",
          items: [
            "Copy prose from section or chapter controls.",
            "Place the cursor in Word where the equation belongs.",
            "Press Alt + = to create a native equation field.",
            "Paste or type the copied LaTeX source.",
            "Review symbols, line breaks, and equation numbering manually."
          ]
        }
      ]
    }
  ]
};

export const simulationRoute = {
  id: "simulation",
  label: "Simulation",
  shortLabel: "Simulation",
  title: "Interactive Simulation",
  englishTitle: "Interactive Simulation",
  status: "draft",
  source: "plan (1).md section 12",
  blocks: [
    {
      id: "simulation-notice",
      type: "warning",
      status: "draft",
      title: "Simulation is supporting evidence only",
      content: [
        {
          id: "simulation-notice-p",
          type: "paragraph",
          status: "draft",
          text:
            "ภาพจำลองและผลเชิงตัวเลขใช้เพื่อช่วยทำความเข้าใจและตรวจสอบตัวอย่าง ไม่ใช่สิ่งทดแทนบทพิสูจน์ทางคณิตศาสตร์"
        }
      ]
    },
    {
      id: "simulation-cross-section",
      type: "simulation",
      status: "draft",
      title: "2D cross-section explorer"
    }
  ]
};

export const notFoundRoute = {
  id: "not-found",
  label: "Not found",
  nav: false,
  title: "Route not found",
  englishTitle: "Route not found",
  status: "draft",
  blocks: [
    {
      id: "not-found-message",
      type: "warning",
      status: "draft",
      title: "ไม่พบเส้นทาง",
      content: [
        {
          id: "not-found-message-p",
          type: "paragraph",
          status: "draft",
          text: "The requested hash route does not exist. Use the main navigation to return to a report section."
        }
      ]
    }
  ]
};
