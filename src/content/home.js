export const homeRoute = {
  id: "home",
  label: "หน้าแรก",
  shortLabel: "Home",
  title: "รายงานคณิตศาสตร์เรื่องปริมาตรและพื้นที่ผิวของ Steinmetz Solid",
  englishTitle: "Steinmetz Solid Mathematical Report",
  status: "draft",
  source: "plan (1).md",
  blocks: [
    {
      id: "home-purpose",
      type: "paragraph",
      status: "draft",
      text:
        "พื้นที่นี้เป็นต้นแบบของเว็บไซต์รายงานคณิตศาสตร์แบบหน้าเดียว สำหรับอ่าน ตรวจทาน และคัดลอกเนื้อหาไปจัดรูปแบบต่อใน Microsoft Word โดยสมการทุกสมการต้องเก็บต้นฉบับ LaTeX แยกจากผลลัพธ์ที่ MathJax แสดงบนหน้าเว็บ"
    },
    {
      id: "home-status",
      type: "note",
      status: "draft",
      title: "สถานะของต้นแบบ",
      content: [
        {
          id: "home-status-p",
          type: "paragraph",
          status: "draft",
          text:
            "ต้นแบบนี้สร้างโครงสร้างแอปพลิเคชัน ระบบนำทาง ระบบบล็อกเนื้อหา การแสดงสมการ และ workflow การคัดลอกแล้ว แต่ยังไม่ใช่รายงานฉบับสมบูรณ์"
        }
      ]
    },
    {
      id: "home-result-summary",
      type: "definition",
      status: "needs-review",
      title: "สูตรหลักที่นำมาจากเอกสารแผน",
      content: [
        {
          id: "home-volume-eq",
          type: "equation",
          number: "P.1",
          status: "needs-review",
          source: "plan (1).md section 12.6",
          title: "Planned general volume formula",
          description: "Formula supplied by the planning document; final proof source is still required.",
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
      id: "home-proof-warning",
      type: "warning",
      status: "needs-review",
      title: "ตัวเลขและภาพจำลองไม่ใช่บทพิสูจน์",
      content: [
        {
          id: "home-proof-warning-p",
          type: "paragraph",
          status: "needs-review",
          text:
            "ผลเชิงตัวเลขและ simulation ใช้ช่วยทำความเข้าใจและตรวจสอบตัวอย่างเท่านั้น ไม่แทนที่บทพิสูจน์เชิงคณิตศาสตร์"
        }
      ]
    },
    {
      id: "home-links",
      type: "link-list",
      status: "draft",
      links: [
        { label: "เริ่มอ่านบทที่ 3", href: "#chapter-3/ch3-method-overview" },
        { label: "เปิด Simulation", href: "#simulation" },
        { label: "ดูคำแนะนำการย้ายไป Word", href: "#appendices/word-transfer-guide" }
      ]
    },
    {
      id: "home-status-legend",
      type: "status-legend",
      status: "draft"
    }
  ]
};
