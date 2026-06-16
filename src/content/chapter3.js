// Generated from 03_Steinmetz_Chapter3_Full_Proof.md. Do not edit imported mathematical content by hand.

export const chapter3Route = {
  "id": "chapter-3",
  "label": "บทที่ 3",
  "shortLabel": "Methodology",
  "title": "บทที่ 3 วิธีดำเนินงานและบทพิสูจน์ทางคณิตศาสตร์",
  "englishTitle": "Chapter 3 - Methodology and Mathematical Proofs",
  "chapter": 3,
  "status": "verified-proof",
  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
  "blocks": [
    {
      "id": "ch3-heading-001",
      "type": "heading",
      "level": 1,
      "status": "verified-proof",
      "title": "บทที่ 3 วิธีดำเนินงานและบทพิสูจน์ทางคณิตศาสตร์",
      "source": "03_Steinmetz_Chapter3_Full_Proof.md",
      "content": [
        {
          "id": "ch3-sec-3-1",
          "type": "heading",
          "level": 2,
          "section": "3.1",
          "status": "verified-proof",
          "title": "รูปแบบการดำเนินโครงงาน",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-001",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "โครงงานนี้เป็นการศึกษาทางคณิตศาสตร์เชิงทฤษฎีร่วมกับการตรวจสอบเชิงคำนวณ มีเป้าหมายเพื่อสร้างแบบจำลองและพิสูจน์สูตรทั่วไปสำหรับปริมาตรและพื้นที่ผิวขอบเขตของส่วนตัดร่วมระหว่างทรงกระบอกกลมตรงสองทรง ซึ่งมีรัศมีไม่จำเป็นต้องเท่ากันและมีแกนตัดกันด้วยมุมที่กำหนด"
            },
            {
              "id": "ch3-p-002",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "กระบวนการดำเนินงานแบ่งออกเป็น 4 ส่วนสำคัญ ได้แก่"
            },
            {
              "id": "ch3-list-01",
              "type": "ordered-list",
              "status": "verified-proof",
              "start": 1,
              "items": [
                "การกำหนดระบบพิกัดและพิสูจน์สมการของทรงกระบอกเอียง",
                "การวิเคราะห์หน้าตัดและพิสูจน์สูตรปริมาตร",
                "การพารามิเตอร์พื้นผิวและพิสูจน์สูตรพื้นที่ผิวขอบเขต",
                "การตรวจสอบสูตรด้วยการคำนวณเชิงตัวเลขและกรณีพิเศษ"
              ]
            },
            {
              "id": "ch3-p-003",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ผลจากการคำนวณด้วยโปรแกรมใช้เป็นหลักฐานสนับสนุนและตรวจหาความผิดพลาดของสูตร แต่ไม่ใช้แทนบทพิสูจน์ทางคณิตศาสตร์"
            }
          ]
        },
        {
          "id": "ch3-sec-3-2",
          "type": "heading",
          "level": 2,
          "section": "3.2",
          "status": "verified-proof",
          "title": "ข้อตกลง สัญลักษณ์ และสมมติฐาน",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-004",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ให้ทรงกระบอกทั้งสองเป็นทรงกระบอกกลมตรงที่มีความยาวไม่จำกัด และให้แกนของทรงกระบอกตัดกันที่จุดกำเนิด โดยกำหนดให้"
            },
            {
              "id": "eq-ch3-001",
              "type": "equation",
              "number": "3.1",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "0<r_1\\le r_2,\n\\qquad\n0<\\beta\\le \\frac{\\pi}{2}."
            },
            {
              "id": "ch3-p-005",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "มุม \\(\\beta\\) หมายถึงมุมแหลมระหว่างแกนที่ไม่มีทิศทางของทรงกระบอกทั้งสอง การจำกัดช่วงมุมดังกล่าวไม่ทำให้สูญเสียความทั่วไป เพราะมุมป้านระหว่างเวกเตอร์กำกับแกนให้เส้นแกนเดียวกันกับมุมเสริม และค่าที่ปรากฏในสูตรขึ้นกับ \\(\\sin\\beta\\)"
            },
            {
              "id": "ch3-p-006",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "กำหนดเส้นแกนของทรงกระบอกที่หนึ่งเป็น"
            },
            {
              "id": "eq-ch3-002",
              "type": "equation",
              "number": "3.2",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "L_1=\\{(0,0,t):t\\in\\mathbb{R}\\}"
            },
            {
              "id": "ch3-p-007",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "และกำหนดเวกเตอร์หน่วยตามแกนของทรงกระบอกที่สองเป็น"
            },
            {
              "id": "eq-ch3-003",
              "type": "equation",
              "number": "3.3",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\mathbf{a}=(0,\\sin\\beta,\\cos\\beta)."
            },
            {
              "id": "ch3-p-008",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ดังนั้น เส้นแกนของทรงกระบอกที่สองคือ"
            },
            {
              "id": "eq-ch3-004",
              "type": "equation",
              "number": "3.4",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "L_2=\\{t\\mathbf{a}:t\\in\\mathbb{R}\\}."
            },
            {
              "id": "ch3-p-009",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ให้ \\(C_1\\) และ \\(C_2\\) แทนบริเวณภายในรวมผิวของทรงกระบอกที่หนึ่งและทรงกระบอกที่สอง ตามลำดับ และกำหนดทรงตันที่ศึกษาเป็น"
            },
            {
              "id": "eq-ch3-005",
              "type": "equation",
              "number": "3.5",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\Omega=C_1\\cap C_2."
            },
            {
              "id": "ch3-p-010",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "กำหนดอัตราส่วนรัศมี"
            },
            {
              "id": "eq-ch3-006",
              "type": "equation",
              "number": "3.6",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "k=\\frac{r_1}{r_2},\n\\qquad 0<k\\le 1."
            },
            {
              "id": "ch3-p-011",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ใช้สัญลักษณ์อินทิกรัลวงรีสมบูรณ์ชนิดที่หนึ่งและชนิดที่สองในรูปโมดูลัส \\(k\\) ดังนี้ โดย \\(K(k)\\) มีค่าจำกัดเมื่อ \\(0\\le k<1\\) และกรณี \\(k=1\\) จะใช้เฉพาะพจน์ผสมที่มีลิมิตจำกัด"
            },
            {
              "id": "eq-ch3-007",
              "type": "equation",
              "number": "3.7",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "K(k)=\\int_0^{\\pi/2}\\frac{d\\theta}\n{\\sqrt{1-k^2\\sin^2\\theta}},"
            },
            {
              "id": "eq-ch3-008",
              "type": "equation",
              "number": "3.8",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "E(k)=\\int_0^{\\pi/2}\n\\sqrt{1-k^2\\sin^2\\theta}\\,d\\theta."
            },
            {
              "id": "ch3-p-012",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "นิยามนี้สอดคล้องกับรูปมาตรฐานของอินทิกรัลวงรีแบบเลอฌ็องดร์ โดยในซอฟต์แวร์บางชนิดอาจใช้พารามิเตอร์ \\(m=k^2\\) แทนโมดูลัส \\(k\\) จึงต้องตรวจสอบข้อตกลงของโปรแกรมก่อนคำนวณ"
            }
          ]
        },
        {
          "id": "ch3-sec-3-3",
          "type": "heading",
          "level": 2,
          "section": "3.3",
          "status": "verified-proof",
          "title": "การพิสูจน์สมการของทรงกระบอกเอียง",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-lemma-3-1",
              "type": "lemma",
              "number": "3.1",
              "status": "verified-proof",
              "title": "ระยะจากจุดถึงแกนของทรงกระบอกที่สอง",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-013",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ให้ \\(P=(x,y,z)\\) เป็นจุดในปริภูมิ และให้ \\(L_2\\) เป็นเส้นตรงผ่านจุดกำเนิดที่มีเวกเตอร์หน่วย"
                },
                {
                  "id": "eq-ch3-009",
                  "type": "equation",
                  "number": "3.9",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\mathbf{a}=(0,\\sin\\beta,\\cos\\beta)."
                },
                {
                  "id": "ch3-p-014",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "กำลังสองของระยะตั้งฉากจาก \\(P\\) ถึง \\(L_2\\) เท่ากับ"
                },
                {
                  "id": "eq-ch3-010",
                  "type": "equation",
                  "number": "3.10",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "d(P,L_2)^2\n=x^2+(y\\cos\\beta-z\\sin\\beta)^2."
                }
              ],
              "proofId": "proof-ch3-lemma-3-1",
              "relatedIds": [
                "proof-ch3-lemma-3-1"
              ]
            },
            {
              "id": "proof-ch3-lemma-3-1",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์บทตั้งที่ 3.1 ระยะจากจุดถึงแกนของทรงกระบอกที่สอง",
              "proves": "ch3-lemma-3-1",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-015",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ให้เวกเตอร์ตำแหน่งของจุด \\(P\\) เป็น"
                },
                {
                  "id": "eq-ch3-011",
                  "type": "equation",
                  "number": "3.11",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\mathbf{p}=(x,y,z)."
                },
                {
                  "id": "ch3-p-016",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เนื่องจาก \\(\\mathbf{a}\\) เป็นเวกเตอร์หน่วย การฉายเชิงตั้งฉากของ \\(\\mathbf{p}\\) บนแกน \\(L_2\\) คือ"
                },
                {
                  "id": "eq-ch3-012",
                  "type": "equation",
                  "number": "3.12",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "(\\mathbf{p}\\cdot\\mathbf{a})\\mathbf{a}."
                },
                {
                  "id": "ch3-p-017",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น กำลังสองของระยะจาก \\(P\\) ถึง \\(L_2\\) คือ"
                },
                {
                  "id": "eq-ch3-013",
                  "type": "equation",
                  "number": "3.13",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\nd(P,L_2)^2\n&=\\|\\mathbf{p}\\|^2-(\\mathbf{p}\\cdot\\mathbf{a})^2\\\\\n&=x^2+y^2+z^2-(y\\sin\\beta+z\\cos\\beta)^2.\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-018",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ขยายพจน์กำลังสอง จะได้"
                },
                {
                  "id": "eq-ch3-014",
                  "type": "equation",
                  "number": "3.14",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\nd(P,L_2)^2\n&=x^2+y^2+z^2\n-y^2\\sin^2\\beta\n-2yz\\sin\\beta\\cos\\beta\n-z^2\\cos^2\\beta\\\\\n&=x^2+y^2\\cos^2\\beta\n-2yz\\sin\\beta\\cos\\beta\n+z^2\\sin^2\\beta\\\\\n&=x^2+(y\\cos\\beta-z\\sin\\beta)^2.\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-019",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงได้ผลตามต้องการ \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-theorem-3-1",
              "type": "theorem",
              "number": "3.1",
              "status": "verified-proof",
              "title": "สมการของทรงกระบอกทั้งสอง",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-020",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ภายใต้ระบบพิกัดที่กำหนด ทรงกระบอกทั้งสองเขียนได้เป็น"
                },
                {
                  "id": "eq-ch3-015",
                  "type": "equation",
                  "number": "3.15",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "C_1:\n\\quad x^2+y^2\\le r_1^2"
                },
                {
                  "id": "ch3-p-021",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-016",
                  "type": "equation",
                  "number": "3.16",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "C_2:\n\\quad x^2+(y\\cos\\beta-z\\sin\\beta)^2\\le r_2^2."
                }
              ],
              "proofId": "proof-ch3-theorem-3-1",
              "relatedIds": [
                "proof-ch3-theorem-3-1"
              ]
            },
            {
              "id": "proof-ch3-theorem-3-1",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์ทฤษฎีบทที่ 3.1 สมการของทรงกระบอกทั้งสอง",
              "proves": "ch3-theorem-3-1",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-022",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แกนของทรงกระบอกที่หนึ่งตรงกับแกน \\(z\\) ระยะตั้งฉากจากจุด \\((x,y,z)\\) ถึงแกน \\(z\\) จึงเท่ากับ \\(\\sqrt{x^2+y^2}\\) จุดจะอยู่ภายในหรือบนผิวทรงกระบอกที่หนึ่งก็ต่อเมื่อระยะดังกล่าวไม่เกิน \\(r_1\\) จึงได้"
                },
                {
                  "id": "eq-ch3-017",
                  "type": "equation",
                  "number": "3.17",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "x^2+y^2\\le r_1^2."
                },
                {
                  "id": "ch3-p-023",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับทรงกระบอกที่สอง ใช้ผลจากบทตั้งที่ 3.1 จุดจะอยู่ภายในหรือบนผิวทรงกระบอกที่สองก็ต่อเมื่อ"
                },
                {
                  "id": "eq-ch3-018",
                  "type": "equation",
                  "number": "3.18",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "d(P,L_2)^2\\le r_2^2,"
                },
                {
                  "id": "ch3-p-024",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงได้"
                },
                {
                  "id": "eq-ch3-019",
                  "type": "equation",
                  "number": "3.19",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "x^2+(y\\cos\\beta-z\\sin\\beta)^2\\le r_2^2."
                },
                {
                  "id": "ch3-p-025",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์ \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-heading-002",
              "type": "heading",
              "level": 3,
              "status": "verified-proof",
              "title": "การตรวจสอบกรณีพิเศษ",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-026",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ \\(\\beta=\\pi/2\\) จะมี \\(\\cos\\beta=0\\) และ \\(\\sin\\beta=1\\) สมการของทรงกระบอกที่สองลดรูปเป็น"
                },
                {
                  "id": "eq-ch3-020",
                  "type": "equation",
                  "number": "3.20",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "x^2+z^2\\le r_2^2,"
                },
                {
                  "id": "ch3-p-027",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ซึ่งเป็นทรงกระบอกที่มีแกนตรงกับแกน \\(y\\) และตั้งฉากกับแกน \\(z\\) ตามที่ควรเป็น"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-4",
          "type": "heading",
          "level": 2,
          "section": "3.4",
          "status": "verified-proof",
          "title": "ความมีขอบเขตของส่วนตัดร่วม",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-lemma-3-2",
              "type": "lemma",
              "number": "3.2",
              "status": "verified-proof",
              "title": "ส่วนตัดร่วมมีปริมาตรจำกัดเมื่อ \\(\\beta>0\\)",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-028",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ถ้า"
                },
                {
                  "id": "eq-ch3-021",
                  "type": "equation",
                  "number": "3.21",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "0<\\beta\\le \\frac{\\pi}{2},"
                },
                {
                  "id": "ch3-p-029",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แล้ว \\(\\Omega=C_1\\cap C_2\\) เป็นบริเวณมีขอบเขต"
                }
              ],
              "proofId": "proof-ch3-lemma-3-2",
              "relatedIds": [
                "proof-ch3-lemma-3-2"
              ]
            },
            {
              "id": "proof-ch3-lemma-3-2",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์บทตั้งที่ 3.2 ส่วนตัดร่วมมีปริมาตรจำกัดเมื่อ \\(\\beta>0\\)",
              "proves": "ch3-lemma-3-2",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-030",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จาก \\(C_1\\) ได้"
                },
                {
                  "id": "eq-ch3-022",
                  "type": "equation",
                  "number": "3.22",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "|x|\\le r_1,\n\\qquad\n|y|\\le r_1."
                },
                {
                  "id": "ch3-p-031",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จาก \\(C_2\\) ได้"
                },
                {
                  "id": "eq-ch3-023",
                  "type": "equation",
                  "number": "3.23",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "|y\\cos\\beta-z\\sin\\beta|\\le r_2."
                },
                {
                  "id": "ch3-p-032",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ให้"
                },
                {
                  "id": "eq-ch3-024",
                  "type": "equation",
                  "number": "3.24",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "v=y\\cos\\beta-z\\sin\\beta."
                },
                {
                  "id": "ch3-p-033",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จะได้"
                },
                {
                  "id": "eq-ch3-025",
                  "type": "equation",
                  "number": "3.25",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "z=\\frac{y\\cos\\beta-v}{\\sin\\beta}."
                },
                {
                  "id": "ch3-p-034",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เนื่องจาก \\(|y|\\le r_1\\), \\(|v|\\le r_2\\) และ \\(\\sin\\beta>0\\) จึงมี"
                },
                {
                  "id": "eq-ch3-026",
                  "type": "equation",
                  "number": "3.26",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "|z|\n\\le\n\\frac{r_1\\cos\\beta+r_2}{\\sin\\beta}."
                },
                {
                  "id": "ch3-p-035",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น \\(x,y,z\\) ล้วนมีขอบเขต ทำให้ \\(\\Omega\\) เป็นบริเวณมีขอบเขตและมีปริมาตรจำกัด \\(\\square\\)"
                },
                {
                  "id": "ch3-p-036",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ \\(\\beta=0\\) ภายใต้สมมติฐานที่แกนทั้งสองผ่านจุดกำเนิด แกนของทรงกระบอกทั้งสองจะซ้อนกัน และส่วนตัดร่วมเป็นทรงกระบอกที่ยาวไม่จำกัด จึงมีปริมาตรและพื้นที่ผิวไม่จำกัด เงื่อนไข \\(\\beta>0\\) จึงเป็นเงื่อนไขจำเป็นของปัญหาในรูปทรงตันมีขอบเขต"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-5",
          "type": "heading",
          "level": 2,
          "section": "3.5",
          "status": "verified-proof",
          "title": "การวิเคราะห์พื้นที่หน้าตัด",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-037",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "กำหนดค่าคงที่ \\(x\\) โดย"
            },
            {
              "id": "eq-ch3-027",
              "type": "equation",
              "number": "3.27",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "|x|\\le r_1."
            },
            {
              "id": "ch3-p-038",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ให้"
            },
            {
              "id": "eq-ch3-028",
              "type": "equation",
              "number": "3.28",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "a(x)=\\sqrt{r_1^2-x^2},\n\\qquad\nb(x)=\\sqrt{r_2^2-x^2}."
            },
            {
              "id": "ch3-p-039",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "เนื่องจาก \\(r_1\\le r_2\\) ถ้า \\(|x|\\le r_1\\) แล้ว \\(b(x)\\) เป็นจำนวนจริงเสมอ"
            },
            {
              "id": "ch3-p-040",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "บนระนาบ \\(x=\\text{ค่าคงที่}\\) อสมการของทรงกระบอกทั้งสองลดรูปเป็น"
            },
            {
              "id": "eq-ch3-029",
              "type": "equation",
              "number": "3.29",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "|y|\\le a(x)"
            },
            {
              "id": "ch3-p-041",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "และ"
            },
            {
              "id": "eq-ch3-030",
              "type": "equation",
              "number": "3.30",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "|y\\cos\\beta-z\\sin\\beta|\n\\le b(x)."
            },
            {
              "id": "ch3-theorem-3-2",
              "type": "theorem",
              "number": "3.2",
              "status": "verified-proof",
              "title": "พื้นที่หน้าตัดของส่วนตัดร่วม",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-042",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับ \\(|x|\\le r_1\\) หน้าตัดของ \\(\\Omega\\) ด้วยระนาบ \\(x=\\text{ค่าคงที่}\\) เป็นรูปสี่เหลี่ยมด้านขนาน และมีพื้นที่"
                },
                {
                  "id": "eq-ch3-031",
                  "type": "equation",
                  "number": "3.31",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "A(x)=\n\\frac{4\n\\sqrt{r_1^2-x^2}\n\\sqrt{r_2^2-x^2}}\n{\\sin\\beta}."
                },
                {
                  "id": "ch3-p-043",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับ \\(|x|>r_1\\) หน้าตัดเป็นเซตว่างและมีพื้นที่เท่ากับศูนย์"
                }
              ],
              "proofId": "proof-ch3-theorem-3-2",
              "relatedIds": [
                "proof-ch3-theorem-3-2"
              ]
            },
            {
              "id": "proof-ch3-theorem-3-2",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์ทฤษฎีบทที่ 3.2 พื้นที่หน้าตัดของส่วนตัดร่วม",
              "proves": "ch3-theorem-3-2",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-044",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "พิจารณาการแปลงเชิงเส้นบนระนาบ \\(yz\\)"
                },
                {
                  "id": "eq-ch3-032",
                  "type": "equation",
                  "number": "3.32",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "T:(y,z)\\longmapsto(u,v)\n\n=(y,\\,y\\cos\\beta-z\\sin\\beta)."
                },
                {
                  "id": "ch3-p-045",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมทริกซ์จาโคเบียนของการแปลงคือ"
                },
                {
                  "id": "eq-ch3-033",
                  "type": "equation",
                  "number": "3.33",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\frac{\\partial(u,v)}{\\partial(y,z)}\n=\n\\begin{pmatrix}\n1&0\\\\\n\\cos\\beta&-\\sin\\beta\n\\end{pmatrix}"
                },
                {
                  "id": "ch3-p-046",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และดีเทอร์มิแนนต์มีค่า"
                },
                {
                  "id": "eq-ch3-034",
                  "type": "equation",
                  "number": "3.34",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\det\\left(\n\\frac{\\partial(u,v)}{\\partial(y,z)}\n\\right)\n=-\\sin\\beta."
                },
                {
                  "id": "ch3-p-047",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-035",
                  "type": "equation",
                  "number": "3.35",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "dy\\,dz=\\frac{1}{\\sin\\beta}\\,du\\,dv"
                },
                {
                  "id": "ch3-p-048",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เพราะ \\(\\sin\\beta>0\\)"
                },
                {
                  "id": "ch3-p-049",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ในพิกัด \\((u,v)\\) เงื่อนไขของหน้าตัดกลายเป็น"
                },
                {
                  "id": "eq-ch3-036",
                  "type": "equation",
                  "number": "3.36",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "|u|\\le a(x),\n\\qquad\n|v|\\le b(x),"
                },
                {
                  "id": "ch3-p-050",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ซึ่งเป็นรูปสี่เหลี่ยมผืนผ้าขนาด \\(2a(x)\\times2b(x)\\) มีพื้นที่ในพิกัด \\((u,v)\\) เท่ากับ"
                },
                {
                  "id": "eq-ch3-037",
                  "type": "equation",
                  "number": "3.37",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "4a(x)b(x)."
                },
                {
                  "id": "ch3-p-051",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อแปลงกลับมายังระนาบ \\((y,z)\\) พื้นที่จึงเท่ากับ"
                },
                {
                  "id": "eq-ch3-038",
                  "type": "equation",
                  "number": "3.38",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\nA(x)\n&=\\frac{4a(x)b(x)}{\\sin\\beta}\\\\\n&=\n\\frac{4\n\\sqrt{r_1^2-x^2}\n\\sqrt{r_2^2-x^2}}\n{\\sin\\beta}.\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-052",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ภาพผกผันของรูปสี่เหลี่ยมผืนผ้าภายใต้การแปลงเชิงเส้นผกผันเป็นรูปสี่เหลี่ยมด้านขนาน จึงพิสูจน์รูปร่างของหน้าตัดได้ด้วย"
                },
                {
                  "id": "ch3-p-053",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ถ้า \\(|x|>r_1\\) แล้วอสมการ \\(x^2+y^2\\le r_1^2\\) ไม่มีคำตอบจริง หน้าตัดจึงเป็นเซตว่าง \\(\\square\\)"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-6",
          "type": "heading",
          "level": 2,
          "section": "3.6",
          "status": "verified-proof",
          "title": "การพิสูจน์สูตรปริมาตรในรูปปริพันธ์",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-theorem-3-3",
              "type": "theorem",
              "number": "3.3",
              "status": "verified-proof",
              "title": "สูตรปริมาตรจากพื้นที่หน้าตัด",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-054",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ปริมาตรของส่วนตัดร่วม \\(\\Omega\\) เท่ากับ"
                },
                {
                  "id": "eq-ch3-039",
                  "type": "equation",
                  "number": "3.39",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V(r_1,r_2,\\beta)\n=\n\\frac{8}{\\sin\\beta}\n\\int_0^{r_1}\n\\sqrt{r_1^2-x^2}\n\\sqrt{r_2^2-x^2}\\,dx."
                }
              ],
              "proofId": "proof-ch3-theorem-3-3",
              "relatedIds": [
                "proof-ch3-theorem-3-3"
              ]
            },
            {
              "id": "proof-ch3-theorem-3-3",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์ทฤษฎีบทที่ 3.3 สูตรปริมาตรจากพื้นที่หน้าตัด",
              "proves": "ch3-theorem-3-3",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-055",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จากหลักการหาปริมาตรด้วยพื้นที่หน้าตัดหรือทฤษฎีบทของฟูบินี"
                },
                {
                  "id": "eq-ch3-040",
                  "type": "equation",
                  "number": "3.40",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V=\\int_{-r_1}^{r_1}A(x)\\,dx."
                },
                {
                  "id": "ch3-p-056",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แทนสูตรพื้นที่หน้าตัดจากทฤษฎีบทที่ 3.2 ได้"
                },
                {
                  "id": "eq-ch3-041",
                  "type": "equation",
                  "number": "3.41",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V\n=\n\\frac{4}{\\sin\\beta}\n\\int_{-r_1}^{r_1}\n\\sqrt{r_1^2-x^2}\n\\sqrt{r_2^2-x^2}\\,dx."
                },
                {
                  "id": "ch3-p-057",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ฟังก์ชันภายใต้เครื่องหมายปริพันธ์เป็นฟังก์ชันคู่ของ \\(x\\) ดังนั้น"
                },
                {
                  "id": "eq-ch3-042",
                  "type": "equation",
                  "number": "3.42",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\int_{-r_1}^{r_1}f(x)\\,dx\n=2\\int_0^{r_1}f(x)\\,dx."
                },
                {
                  "id": "ch3-p-058",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงได้"
                },
                {
                  "id": "eq-ch3-043",
                  "type": "equation",
                  "number": "3.43",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V(r_1,r_2,\\beta)\n=\n\\frac{8}{\\sin\\beta}\n\\int_0^{r_1}\n\\sqrt{r_1^2-x^2}\n\\sqrt{r_2^2-x^2}\\,dx."
                },
                {
                  "id": "ch3-p-059",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์ \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-heading-003",
              "type": "heading",
              "level": 3,
              "status": "verified-proof",
              "title": "การตรวจสอบมิติ",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-060",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "พจน์"
                },
                {
                  "id": "eq-ch3-044",
                  "type": "equation",
                  "number": "3.44",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\sqrt{r_1^2-x^2}\n\\sqrt{r_2^2-x^2}\\,dx"
                },
                {
                  "id": "ch3-p-061",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "มีมิติเป็น"
                },
                {
                  "id": "eq-ch3-045",
                  "type": "equation",
                  "number": "3.45",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "L\\cdot L\\cdot L=L^3."
                },
                {
                  "id": "ch3-p-062",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ส่วน \\(\\sin\\beta\\) ไม่มีมิติ ดังนั้นสูตรให้ผลเป็นมิติของปริมาตรอย่างถูกต้อง"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-7",
          "type": "heading",
          "level": 2,
          "section": "3.7",
          "status": "verified-proof",
          "title": "การลดรูปปริมาตรด้วยอินทิกรัลวงรีสมบูรณ์",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-063",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "แทนค่า"
            },
            {
              "id": "eq-ch3-046",
              "type": "equation",
              "number": "3.46",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "x=r_1\\sin\\theta,\n\\qquad\n0\\le\\theta\\le\\frac{\\pi}{2}."
            },
            {
              "id": "ch3-p-064",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "จะได้"
            },
            {
              "id": "eq-ch3-047",
              "type": "equation",
              "number": "3.47",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "dx=r_1\\cos\\theta\\,d\\theta,"
            },
            {
              "id": "eq-ch3-048",
              "type": "equation",
              "number": "3.48",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\sqrt{r_1^2-x^2}=r_1\\cos\\theta,"
            },
            {
              "id": "ch3-p-065",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "และ"
            },
            {
              "id": "eq-ch3-049",
              "type": "equation",
              "number": "3.49",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\sqrt{r_2^2-x^2}\n=r_2\\sqrt{1-k^2\\sin^2\\theta}."
            },
            {
              "id": "ch3-p-066",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ดังนั้น"
            },
            {
              "id": "eq-ch3-050",
              "type": "equation",
              "number": "3.50",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "V\n=\n\\frac{8r_1^2r_2}{\\sin\\beta}\nI(k),"
            },
            {
              "id": "ch3-p-067",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "เมื่อ"
            },
            {
              "id": "eq-ch3-051",
              "type": "equation",
              "number": "3.51",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "I(k)=\n\\int_0^{\\pi/2}\n\\cos^2\\theta\n\\sqrt{1-k^2\\sin^2\\theta}\\,d\\theta."
            },
            {
              "id": "ch3-p-068",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "เพื่อหาค่า \\(I(k)\\) จะพิสูจน์อัตลักษณ์ช่วยต่อไปนี้"
            },
            {
              "id": "ch3-lemma-3-3",
              "type": "lemma",
              "number": "3.3",
              "status": "verified-proof",
              "title": "อัตลักษณ์สำหรับปริพันธ์กำลังสาม",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-069",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับ \\(0<k<1\\) ให้"
                },
                {
                  "id": "eq-ch3-052",
                  "type": "equation",
                  "number": "3.52",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "q(\\theta)=\\sqrt{1-k^2\\sin^2\\theta}"
                },
                {
                  "id": "ch3-p-070",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-053",
                  "type": "equation",
                  "number": "3.53",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "L(k)=\\int_0^{\\pi/2}q(\\theta)^3\\,d\\theta."
                },
                {
                  "id": "ch3-p-071",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แล้ว"
                },
                {
                  "id": "eq-ch3-054",
                  "type": "equation",
                  "number": "3.54",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "L(k)\n=\n\\frac{2(2-k^2)E(k)-(1-k^2)K(k)}{3}."
                }
              ],
              "proofId": "proof-ch3-lemma-3-3",
              "relatedIds": [
                "proof-ch3-lemma-3-3"
              ]
            },
            {
              "id": "proof-ch3-lemma-3-3",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์บทตั้งที่ 3.3 อัตลักษณ์สำหรับปริพันธ์กำลังสาม",
              "proves": "ch3-lemma-3-3",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-072",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "กำหนด"
                },
                {
                  "id": "eq-ch3-055",
                  "type": "equation",
                  "number": "3.55",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "J=\\int_0^{\\pi/2}\\sin^2\\theta\\,q(\\theta)\\,d\\theta,"
                },
                {
                  "id": "eq-ch3-056",
                  "type": "equation",
                  "number": "3.56",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "A=\\int_0^{\\pi/2}\n\\frac{\\sin^2\\theta}{q(\\theta)}\\,d\\theta,"
                },
                {
                  "id": "ch3-p-073",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-057",
                  "type": "equation",
                  "number": "3.57",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "B=\\int_0^{\\pi/2}\n\\frac{\\sin^4\\theta}{q(\\theta)}\\,d\\theta."
                },
                {
                  "id": "ch3-p-074",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จาก"
                },
                {
                  "id": "eq-ch3-058",
                  "type": "equation",
                  "number": "3.58",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "q^2=1-k^2\\sin^2\\theta"
                },
                {
                  "id": "ch3-p-075",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ได้"
                },
                {
                  "id": "eq-ch3-059",
                  "type": "equation",
                  "number": "3.59",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "L=\\int q^3\\,d\\theta\n=\\int q(1-k^2\\sin^2\\theta)\\,d\\theta\n=E-k^2J,"
                },
                {
                  "id": "ch3-p-076",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-060",
                  "type": "equation",
                  "number": "3.60",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการจากต้นฉบับ (3.1)",
                  "description": "หมายเลขอ้างอิงในต้นฉบับ: (3.1)",
                  "latex": "J=\\frac{E-L}{k^2}.\n\\tag{3.1}",
                  "sourceTag": "3.1"
                },
                {
                  "id": "ch3-p-077",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "อีกด้านหนึ่ง"
                },
                {
                  "id": "eq-ch3-061",
                  "type": "equation",
                  "number": "3.61",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "E\n=\\int\\frac{q^2}{q}\\,d\\theta\n=\\int\\frac{1-k^2\\sin^2\\theta}{q}\\,d\\theta\n=K-k^2A,"
                },
                {
                  "id": "ch3-p-078",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงได้"
                },
                {
                  "id": "eq-ch3-062",
                  "type": "equation",
                  "number": "3.62",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการจากต้นฉบับ (3.2)",
                  "description": "หมายเลขอ้างอิงในต้นฉบับ: (3.2)",
                  "latex": "A=\\frac{K-E}{k^2}.\n\\tag{3.2}",
                  "sourceTag": "3.2"
                },
                {
                  "id": "ch3-p-079",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "นอกจากนี้"
                },
                {
                  "id": "eq-ch3-063",
                  "type": "equation",
                  "number": "3.63",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\nL\n&=\\int\\frac{q^4}{q}\\,d\\theta\\\\\n&=\\int\n\\frac{(1-k^2\\sin^2\\theta)^2}{q}\\,d\\theta\\\\\n&=K-2k^2A+k^4B.\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-080",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แทน (3.2) จะได้",
                  "equationRefs": [
                    {
                      "label": "3.2",
                      "id": "eq-ch3-062"
                    }
                  ],
                  "relatedIds": [
                    "eq-ch3-062"
                  ]
                },
                {
                  "id": "eq-ch3-064",
                  "type": "equation",
                  "number": "3.64",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "L=2E-K+k^4B,"
                },
                {
                  "id": "ch3-p-081",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-065",
                  "type": "equation",
                  "number": "3.65",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการจากต้นฉบับ (3.3)",
                  "description": "หมายเลขอ้างอิงในต้นฉบับ: (3.3)",
                  "latex": "B=\\frac{L-2E+K}{k^4}.\n\\tag{3.3}",
                  "sourceTag": "3.3"
                },
                {
                  "id": "ch3-p-082",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "พิจารณาฟังก์ชัน"
                },
                {
                  "id": "eq-ch3-066",
                  "type": "equation",
                  "number": "3.66",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "F(\\theta)=\\sin\\theta\\cos\\theta\\,q(\\theta)."
                },
                {
                  "id": "ch3-p-083",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เนื่องจาก"
                },
                {
                  "id": "eq-ch3-067",
                  "type": "equation",
                  "number": "3.67",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "F(0)=F\\left(\\frac{\\pi}{2}\\right)=0,"
                },
                {
                  "id": "ch3-p-084",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงมี"
                },
                {
                  "id": "eq-ch3-068",
                  "type": "equation",
                  "number": "3.68",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\int_0^{\\pi/2}F'(\\theta)\\,d\\theta=0."
                },
                {
                  "id": "ch3-p-085",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "คำนวณอนุพันธ์ได้"
                },
                {
                  "id": "eq-ch3-069",
                  "type": "equation",
                  "number": "3.69",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "F'(\\theta)\n=(\\cos^2\\theta-\\sin^2\\theta)q\n-\n\\frac{k^2\\sin^2\\theta\\cos^2\\theta}{q}."
                },
                {
                  "id": "ch3-p-086",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "อินทิเกรตตลอดช่วง จึงได้"
                },
                {
                  "id": "eq-ch3-070",
                  "type": "equation",
                  "number": "3.70",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการจากต้นฉบับ (3.4)",
                  "description": "หมายเลขอ้างอิงในต้นฉบับ: (3.4)",
                  "latex": "0=E-2J-k^2(A-B).\n\\tag{3.4}",
                  "sourceTag": "3.4"
                },
                {
                  "id": "ch3-p-087",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แทนค่า (3.1), (3.2) และ (3.3) ลงใน (3.4)",
                  "equationRefs": [
                    {
                      "label": "3.1",
                      "id": "eq-ch3-060"
                    },
                    {
                      "label": "3.2",
                      "id": "eq-ch3-062"
                    },
                    {
                      "label": "3.3",
                      "id": "eq-ch3-065"
                    },
                    {
                      "label": "3.4",
                      "id": "eq-ch3-070"
                    }
                  ],
                  "relatedIds": [
                    "eq-ch3-060",
                    "eq-ch3-062",
                    "eq-ch3-065",
                    "eq-ch3-070"
                  ]
                },
                {
                  "id": "eq-ch3-071",
                  "type": "equation",
                  "number": "3.71",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "0\n=\nE-\\frac{2(E-L)}{k^2}\n-(K-E)\n+\n\\frac{L-2E+K}{k^2}."
                },
                {
                  "id": "ch3-p-088",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "คูณทั้งสมการด้วย \\(k^2\\) และจัดรูป"
                },
                {
                  "id": "eq-ch3-072",
                  "type": "equation",
                  "number": "3.72",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "0\n=(2k^2-4)E+(1-k^2)K+3L."
                },
                {
                  "id": "ch3-p-089",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-073",
                  "type": "equation",
                  "number": "3.73",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "L\n=\n\\frac{2(2-k^2)E-(1-k^2)K}{3}."
                },
                {
                  "id": "ch3-p-090",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์ \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-lemma-3-4",
              "type": "lemma",
              "number": "3.4",
              "status": "verified-proof",
              "title": "อัตลักษณ์สำหรับ \\(I(k)\\)",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-091",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับ \\(0<k<1\\)"
                },
                {
                  "id": "eq-ch3-074",
                  "type": "equation",
                  "number": "3.74",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "I(k)\n=\n\\frac{(1+k^2)E(k)-(1-k^2)K(k)}{3k^2}."
                }
              ],
              "proofId": "proof-ch3-lemma-3-4",
              "relatedIds": [
                "proof-ch3-lemma-3-4"
              ]
            },
            {
              "id": "proof-ch3-lemma-3-4",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์บทตั้งที่ 3.4 อัตลักษณ์สำหรับ \\(I(k)\\)",
              "proves": "ch3-lemma-3-4",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-092",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จากนิยามของ \\(I(k)\\)"
                },
                {
                  "id": "eq-ch3-075",
                  "type": "equation",
                  "number": "3.75",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "I=\\int(1-\\sin^2\\theta)q\\,d\\theta\n=E-J."
                },
                {
                  "id": "ch3-p-093",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จาก (3.1)",
                  "equationRefs": [
                    {
                      "label": "3.1",
                      "id": "eq-ch3-060"
                    }
                  ],
                  "relatedIds": [
                    "eq-ch3-060"
                  ]
                },
                {
                  "id": "eq-ch3-076",
                  "type": "equation",
                  "number": "3.76",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "J=\\frac{E-L}{k^2}."
                },
                {
                  "id": "ch3-p-094",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-077",
                  "type": "equation",
                  "number": "3.77",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "I\n=E-\\frac{E-L}{k^2}\n=\n\\frac{(k^2-1)E+L}{k^2}."
                },
                {
                  "id": "ch3-p-095",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แทนค่า \\(L\\) จากบทตั้งที่ 3.3"
                },
                {
                  "id": "eq-ch3-078",
                  "type": "equation",
                  "number": "3.78",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\nI\n&=\n\\frac{1}{k^2}\n\\left[\n(k^2-1)E\n+\n\\frac{2(2-k^2)E-(1-k^2)K}{3}\n\\right]\\\\\n&=\n\\frac{(1+k^2)E-(1-k^2)K}{3k^2}.\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-096",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์ \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-theorem-3-4",
              "type": "theorem",
              "number": "3.4",
              "status": "verified-proof",
              "title": "สูตรปริมาตรในรูปอินทิกรัลวงรีสมบูรณ์",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-097",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ให้"
                },
                {
                  "id": "eq-ch3-079",
                  "type": "equation",
                  "number": "3.79",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "0<r_1\\le r_2,\n\\qquad\nk=\\frac{r_1}{r_2},\n\\qquad\n0<\\beta\\le\\frac{\\pi}{2}."
                },
                {
                  "id": "ch3-p-098",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ปริมาตรของส่วนตัดร่วมเท่ากับ"
                },
                {
                  "id": "eq-ch3-080",
                  "type": "equation",
                  "number": "3.80",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nV(r_1,r_2,\\beta)\n=\n\\frac{8r_2^3}{3\\sin\\beta}\n\\left[\n(1+k^2)E(k)\n-(1-k^2)K(k)\n\\right]\n}"
                },
                {
                  "id": "ch3-p-099",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับ \\(0<k<1\\) และสูตรมีส่วนขยายต่อเนื่องที่ \\(k=1\\)"
                }
              ],
              "proofId": "proof-ch3-theorem-3-4",
              "relatedIds": [
                "proof-ch3-theorem-3-4"
              ]
            },
            {
              "id": "proof-ch3-theorem-3-4",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์ทฤษฎีบทที่ 3.4 สูตรปริมาตรในรูปอินทิกรัลวงรีสมบูรณ์",
              "proves": "ch3-theorem-3-4",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-100",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จากทฤษฎีบทที่ 3.3 และการแทนค่าในตอนต้นของหัวข้อนี้"
                },
                {
                  "id": "eq-ch3-081",
                  "type": "equation",
                  "number": "3.81",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V=\\frac{8r_1^2r_2}{\\sin\\beta}I(k)."
                },
                {
                  "id": "ch3-p-101",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แทนผลจากบทตั้งที่ 3.4"
                },
                {
                  "id": "eq-ch3-082",
                  "type": "equation",
                  "number": "3.82",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V\n=\n\\frac{8r_1^2r_2}{3k^2\\sin\\beta}\n\\left[\n(1+k^2)E-(1-k^2)K\n\\right]."
                },
                {
                  "id": "ch3-p-102",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เนื่องจาก"
                },
                {
                  "id": "eq-ch3-083",
                  "type": "equation",
                  "number": "3.83",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "k^2=\\frac{r_1^2}{r_2^2},"
                },
                {
                  "id": "ch3-p-103",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงมี"
                },
                {
                  "id": "eq-ch3-084",
                  "type": "equation",
                  "number": "3.84",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\frac{r_1^2r_2}{k^2}=r_2^3."
                },
                {
                  "id": "ch3-p-104",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-085",
                  "type": "equation",
                  "number": "3.85",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V\n=\n\\frac{8r_2^3}{3\\sin\\beta}\n\\left[\n(1+k^2)E-(1-k^2)K\n\\right]."
                },
                {
                  "id": "ch3-p-105",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์สำหรับ \\(0<k<1\\) \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-heading-004",
              "type": "heading",
              "level": 3,
              "status": "verified-proof",
              "title": "การต่อเนื่องที่ \\(k=1\\)",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-106",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ \\(k\\to1^-\\) จะมี \\(E(k)\\to E(1)=1\\) ขณะที่ \\(K(k)\\) เพิ่มโดยไม่มีขอบเขต อย่างไรก็ตาม พจน์ที่ปรากฏในสูตรคือ"
                },
                {
                  "id": "eq-ch3-086",
                  "type": "equation",
                  "number": "3.86",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "(1-k^2)K(k)."
                },
                {
                  "id": "ch3-p-107",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับ \\(0<k<1\\)"
                },
                {
                  "id": "eq-ch3-087",
                  "type": "equation",
                  "number": "3.87",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\n0\n\\le(1-k^2)K(k)\n&=\n\\int_0^{\\pi/2}\n\\frac{1-k^2}\n{\\sqrt{1-k^2\\sin^2\\theta}}\\,d\\theta.\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-108",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เนื่องจาก"
                },
                {
                  "id": "eq-ch3-088",
                  "type": "equation",
                  "number": "3.88",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "1-k^2\\sin^2\\theta\n=\\cos^2\\theta+(1-k^2)\\sin^2\\theta\n\\ge1-k^2,"
                },
                {
                  "id": "ch3-p-109",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงได้"
                },
                {
                  "id": "eq-ch3-089",
                  "type": "equation",
                  "number": "3.89",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "0\\le\n\\frac{1-k^2}{\\sqrt{1-k^2\\sin^2\\theta}}\n\\le\\sqrt{1-k^2}."
                },
                {
                  "id": "ch3-p-110",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-090",
                  "type": "equation",
                  "number": "3.90",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "0\\le(1-k^2)K(k)\n\\le\\frac{\\pi}{2}\\sqrt{1-k^2}\n\\longrightarrow0."
                },
                {
                  "id": "ch3-p-111",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงสามารถกำหนดค่าที่ \\(k=1\\) ด้วยลิมิต และได้"
                },
                {
                  "id": "eq-ch3-091",
                  "type": "equation",
                  "number": "3.91",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V(r,r,\\beta)\n=\n\\frac{8r^3}{3\\sin\\beta}(2)\n=\n\\frac{16r^3}{3\\sin\\beta}."
                },
                {
                  "id": "ch3-p-112",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "โดยเฉพาะเมื่อ \\(\\beta=\\pi/2\\)"
                },
                {
                  "id": "eq-ch3-092",
                  "type": "equation",
                  "number": "3.92",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{V=\\frac{16r^3}{3}},"
                },
                {
                  "id": "ch3-p-113",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ซึ่งตรงกับกรณีคลาสสิกของทรงตันสไตน์เมตซ์จากทรงกระบอกรัศมีเท่ากันและแกนตั้งฉากกัน"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-8",
          "type": "heading",
          "level": 2,
          "section": "3.8",
          "status": "verified-proof",
          "title": "การแยกองค์ประกอบของพื้นที่ผิวขอบเขต",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-114",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "กำหนดฟังก์ชัน"
            },
            {
              "id": "eq-ch3-093",
              "type": "equation",
              "number": "3.93",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "f_1(x,y,z)=x^2+y^2-r_1^2"
            },
            {
              "id": "ch3-p-115",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "และ"
            },
            {
              "id": "eq-ch3-094",
              "type": "equation",
              "number": "3.94",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "f_2(x,y,z)\n=x^2+(y\\cos\\beta-z\\sin\\beta)^2-r_2^2."
            },
            {
              "id": "ch3-p-116",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "จะได้"
            },
            {
              "id": "eq-ch3-095",
              "type": "equation",
              "number": "3.95",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\Omega=\\{f_1\\le0,\\ f_2\\le0\\}."
            },
            {
              "id": "ch3-p-117",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "กำหนดผิวสองส่วน"
            },
            {
              "id": "eq-ch3-096",
              "type": "equation",
              "number": "3.96",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\Gamma_1\n=\\{f_1=0,\\ f_2\\le0\\}"
            },
            {
              "id": "ch3-p-118",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "และ"
            },
            {
              "id": "eq-ch3-097",
              "type": "equation",
              "number": "3.97",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\Gamma_2\n=\\{f_2=0,\\ f_1\\le0\\}."
            },
            {
              "id": "ch3-lemma-3-5",
              "type": "lemma",
              "number": "3.5",
              "status": "verified-proof",
              "title": "ขอบเขตของส่วนตัดร่วม",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-119",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ขอบเขตของ \\(\\Omega\\) คือ"
                },
                {
                  "id": "eq-ch3-098",
                  "type": "equation",
                  "number": "3.98",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\partial\\Omega=\\Gamma_1\\cup\\Gamma_2."
                }
              ],
              "proofId": "proof-ch3-lemma-3-5",
              "relatedIds": [
                "proof-ch3-lemma-3-5"
              ]
            },
            {
              "id": "proof-ch3-lemma-3-5",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์บทตั้งที่ 3.5 ขอบเขตของส่วนตัดร่วม",
              "proves": "ch3-lemma-3-5",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-120",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ถ้าจุด \\(P\\in\\Omega\\) มี"
                },
                {
                  "id": "eq-ch3-099",
                  "type": "equation",
                  "number": "3.99",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "f_1(P)<0\n\\qquad\\text{และ}\\qquad\nf_2(P)<0,"
                },
                {
                  "id": "ch3-p-121",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จากความต่อเนื่องของ \\(f_1\\) และ \\(f_2\\) จะมีบริเวณเปิดรอบ \\(P\\) ที่ยังคงทำให้อสมการทั้งสองเป็นจริง จุด \\(P\\) จึงเป็นจุดภายในของ \\(\\Omega\\) และไม่อยู่บนขอบเขต"
                },
                {
                  "id": "ch3-p-122",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น ถ้า \\(P\\in\\partial\\Omega\\) ต้องมีอย่างน้อยหนึ่งสมการเป็นศูนย์ กล่าวคือ \\(P\\in\\Gamma_1\\cup\\Gamma_2\\)"
                },
                {
                  "id": "ch3-p-123",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ในทางกลับกัน ให้ \\(P\\in\\Gamma_1\\cup\\Gamma_2\\) ดังนั้น \\(P\\in\\Omega\\) และมีอย่างน้อยหนึ่งทรงกระบอกที่ \\(P\\) อยู่บนผิว กำหนดจุดบนรังสีผ่าน \\(P\\) เป็น"
                },
                {
                  "id": "eq-ch3-100",
                  "type": "equation",
                  "number": "3.100",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "P_-(\\varepsilon)=(1-\\varepsilon)P,\n\\qquad\nP_+(\\varepsilon)=(1+\\varepsilon)P,"
                },
                {
                  "id": "ch3-p-124",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ \\(\\varepsilon>0\\) มีค่าน้อย เนื่องจากพจน์กำลังสองด้านซ้ายของอสมการทรงกระบอกทั้งสองเป็นฟังก์ชันเอกพันธ์ดีกรีสองใน \\(x,y,z\\) จุด \\(P_-(\\varepsilon)\\) จะทำให้อสมการทั้งสองเป็นอสมการเข้มและจึงอยู่ภายใน \\(\\Omega\\) ส่วนพจน์กำลังสองของทรงกระบอกอย่างน้อยหนึ่งทรงซึ่งมีค่าเท่ากับรัศมีกำลังสอง ณ \\(P\\) จะมีค่ามากกว่ารัศมีกำลังสอง ณ \\(P_+(\\varepsilon)\\) ทำให้ \\(P_+(\\varepsilon)\\notin\\Omega\\)"
                },
                {
                  "id": "ch3-p-125",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น ทุกบริเวณเปิดรอบ \\(P\\) มีทั้งจุดภายในและจุดภายนอก \\(\\Omega\\) จึงได้ \\(P\\in\\partial\\Omega\\)"
                },
                {
                  "id": "ch3-p-126",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงได้"
                },
                {
                  "id": "eq-ch3-101",
                  "type": "equation",
                  "number": "3.101",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\partial\\Omega=\\Gamma_1\\cup\\Gamma_2."
                },
                {
                  "id": "ch3-p-127",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์ \\(\\square\\)"
                },
                {
                  "id": "ch3-p-128",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ส่วนร่วม \\(\\Gamma_1\\cap\\Gamma_2\\) เป็นเส้นรอยต่อที่เกิดจากการแก้สมการผิวทรงกระบอกทั้งสองพร้อมกัน เมื่อพิจารณาบนพารามิเตอร์ของ \\(\\Gamma_1\\) เส้นรอยต่อนี้ตรงกับเส้นกราฟสองเส้น \\(z=z_-(\\phi)\\) และ \\(z=z_+(\\phi)\\) ซึ่งเป็นขอบของโดเมนพารามิเตอร์และมีพื้นที่ผิวสองมิติเท่ากับศูนย์ จึงสามารถหาพื้นที่ผิวรวมด้วย"
                },
                {
                  "id": "eq-ch3-102",
                  "type": "equation",
                  "number": "3.102",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S=S_1+S_2,"
                },
                {
                  "id": "ch3-p-129",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ \\(S_1\\) และ \\(S_2\\) เป็นพื้นที่ของ \\(\\Gamma_1\\) และ \\(\\Gamma_2\\) ตามลำดับ"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-9",
          "type": "heading",
          "level": 2,
          "section": "3.9",
          "status": "verified-proof",
          "title": "การพิสูจน์พื้นที่ผิวส่วนที่มาจากทรงกระบอกที่หนึ่ง",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-130",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "พารามิเตอร์ผิวของทรงกระบอกที่หนึ่งเป็น"
            },
            {
              "id": "eq-ch3-103",
              "type": "equation",
              "number": "3.103",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\mathbf{X}_1(\\phi,z)\n=(r_1\\cos\\phi,r_1\\sin\\phi,z),\n\\qquad\n0\\le\\phi<2\\pi."
            },
            {
              "id": "ch3-p-131",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "อนุพันธ์ย่อยคือ"
            },
            {
              "id": "eq-ch3-104",
              "type": "equation",
              "number": "3.104",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\frac{\\partial\\mathbf{X}_1}{\\partial\\phi}\n=(-r_1\\sin\\phi,r_1\\cos\\phi,0)"
            },
            {
              "id": "ch3-p-132",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "และ"
            },
            {
              "id": "eq-ch3-105",
              "type": "equation",
              "number": "3.105",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\frac{\\partial\\mathbf{X}_1}{\\partial z}\n=(0,0,1)."
            },
            {
              "id": "ch3-p-133",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ดังนั้น"
            },
            {
              "id": "eq-ch3-106",
              "type": "equation",
              "number": "3.106",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\left\\|\n\\frac{\\partial\\mathbf{X}_1}{\\partial\\phi}\n\\times\n\\frac{\\partial\\mathbf{X}_1}{\\partial z}\n\\right\\|\n=r_1."
            },
            {
              "id": "ch3-p-134",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "จึงมีองค์ประกอบพื้นที่"
            },
            {
              "id": "eq-ch3-107",
              "type": "equation",
              "number": "3.107",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "dS=r_1\\,d\\phi\\,dz."
            },
            {
              "id": "ch3-p-135",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "บนผิวนี้ เงื่อนไขอยู่ภายใน \\(C_2\\) คือ"
            },
            {
              "id": "eq-ch3-108",
              "type": "equation",
              "number": "3.108",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "r_1^2\\cos^2\\phi\n+\n(r_1\\sin\\phi\\cos\\beta-z\\sin\\beta)^2\n\\le r_2^2."
            },
            {
              "id": "ch3-p-136",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "จึงได้"
            },
            {
              "id": "eq-ch3-109",
              "type": "equation",
              "number": "3.109",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "|r_1\\sin\\phi\\cos\\beta-z\\sin\\beta|\n\\le\n\\sqrt{r_2^2-r_1^2\\cos^2\\phi}."
            },
            {
              "id": "ch3-p-137",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ให้"
            },
            {
              "id": "eq-ch3-110",
              "type": "equation",
              "number": "3.110",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "B(\\phi)\n=\n\\sqrt{r_2^2-r_1^2\\cos^2\\phi}."
            },
            {
              "id": "ch3-p-138",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "สำหรับแต่ละค่า \\(\\phi\\) ช่วงของ \\(z\\) คือ"
            },
            {
              "id": "eq-ch3-111",
              "type": "equation",
              "number": "3.111",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\frac{r_1\\sin\\phi\\cos\\beta-B(\\phi)}{\\sin\\beta}\n\\le z\\le\n\\frac{r_1\\sin\\phi\\cos\\beta+B(\\phi)}{\\sin\\beta}."
            },
            {
              "id": "ch3-p-139",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ความยาวของช่วงเท่ากับ"
            },
            {
              "id": "eq-ch3-112",
              "type": "equation",
              "number": "3.112",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\Delta z\n=\n\\frac{2B(\\phi)}{\\sin\\beta}."
            },
            {
              "id": "ch3-theorem-3-5",
              "type": "theorem",
              "number": "3.5",
              "status": "verified-proof",
              "title": "พื้นที่ผิวส่วนที่หนึ่ง",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-140",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "พื้นที่ของ \\(\\Gamma_1\\) เท่ากับ"
                },
                {
                  "id": "eq-ch3-113",
                  "type": "equation",
                  "number": "3.113",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nS_1\n=\n\\frac{8r_1r_2}{\\sin\\beta}E(k)\n}."
                }
              ],
              "proofId": "proof-ch3-theorem-3-5",
              "relatedIds": [
                "proof-ch3-theorem-3-5"
              ]
            },
            {
              "id": "proof-ch3-theorem-3-5",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์ทฤษฎีบทที่ 3.5 พื้นที่ผิวส่วนที่หนึ่ง",
              "proves": "ch3-theorem-3-5",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-141",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จากปริพันธ์พื้นผิว"
                },
                {
                  "id": "eq-ch3-114",
                  "type": "equation",
                  "number": "3.114",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\nS_1\n&=\n\\int_0^{2\\pi}\n\\int_{z_-(\\phi)}^{z_+(\\phi)}\nr_1\\,dz\\,d\\phi\\\\\n&=\n\\frac{2r_1}{\\sin\\beta}\n\\int_0^{2\\pi}\n\\sqrt{r_2^2-r_1^2\\cos^2\\phi}\\,d\\phi.\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-142",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดึง \\(r_2\\) ออกจากรากและใช้ \\(k=r_1/r_2\\)"
                },
                {
                  "id": "eq-ch3-115",
                  "type": "equation",
                  "number": "3.115",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S_1\n=\n\\frac{2r_1r_2}{\\sin\\beta}\n\\int_0^{2\\pi}\n\\sqrt{1-k^2\\cos^2\\phi}\\,d\\phi."
                },
                {
                  "id": "ch3-p-143",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ด้วยสมมาตรและการเลื่อนตัวแปร \\(\\theta=\\phi-\\pi/2\\)"
                },
                {
                  "id": "eq-ch3-116",
                  "type": "equation",
                  "number": "3.116",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\int_0^{2\\pi}\n\\sqrt{1-k^2\\cos^2\\phi}\\,d\\phi\n=4E(k)."
                },
                {
                  "id": "ch3-p-144",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-117",
                  "type": "equation",
                  "number": "3.117",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S_1\n=\n\\frac{8r_1r_2}{\\sin\\beta}E(k)."
                },
                {
                  "id": "ch3-p-145",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์ \\(\\square\\)"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-10",
          "type": "heading",
          "level": 2,
          "section": "3.10",
          "status": "verified-proof",
          "title": "การพิสูจน์พื้นที่ผิวส่วนที่มาจากทรงกระบอกที่สอง",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-146",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "กำหนดเวกเตอร์หน่วยสามตัว"
            },
            {
              "id": "eq-ch3-118",
              "type": "equation",
              "number": "3.118",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\mathbf{e}=(1,0,0),"
            },
            {
              "id": "eq-ch3-119",
              "type": "equation",
              "number": "3.119",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\mathbf{b}=(0,\\cos\\beta,-\\sin\\beta),"
            },
            {
              "id": "ch3-p-147",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "และ"
            },
            {
              "id": "eq-ch3-120",
              "type": "equation",
              "number": "3.120",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\mathbf{a}=(0,\\sin\\beta,\\cos\\beta)."
            },
            {
              "id": "ch3-p-148",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "เวกเตอร์ทั้งสามตั้งฉากกันเป็นคู่และมีความยาวหนึ่ง โดย \\(\\mathbf{a}\\) อยู่ตามแกนของทรงกระบอกที่สอง ส่วน \\(\\mathbf{e}\\) และ \\(\\mathbf{b}\\) ครอบคลุมระนาบตั้งฉากกับแกน"
            },
            {
              "id": "ch3-p-149",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "พารามิเตอร์ผิวของทรงกระบอกที่สองคือ"
            },
            {
              "id": "eq-ch3-121",
              "type": "equation",
              "number": "3.121",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\mathbf{X}_2(\\psi,t)\n=t\\mathbf{a}\n+r_2(\\cos\\psi\\,\\mathbf{e}+\\sin\\psi\\,\\mathbf{b})."
            },
            {
              "id": "ch3-p-150",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "เขียนเป็นพิกัดได้ว่า"
            },
            {
              "id": "eq-ch3-122",
              "type": "equation",
              "number": "3.122",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\mathbf{X}_2(\\psi,t)\n=\n\\left(\n r_2\\cos\\psi,\n t\\sin\\beta+r_2\\sin\\psi\\cos\\beta,\n t\\cos\\beta-r_2\\sin\\psi\\sin\\beta\n\\right)."
            },
            {
              "id": "ch3-p-151",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "อนุพันธ์ย่อยคือ"
            },
            {
              "id": "eq-ch3-123",
              "type": "equation",
              "number": "3.123",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\frac{\\partial\\mathbf{X}_2}{\\partial\\psi}\n=r_2(-\\sin\\psi\\,\\mathbf{e}+\\cos\\psi\\,\\mathbf{b})"
            },
            {
              "id": "ch3-p-152",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "และ"
            },
            {
              "id": "eq-ch3-124",
              "type": "equation",
              "number": "3.124",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\frac{\\partial\\mathbf{X}_2}{\\partial t}\n=\\mathbf{a}."
            },
            {
              "id": "ch3-p-153",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "เวกเตอร์ทั้งสองตั้งฉากกัน และมีความยาว \\(r_2\\) กับ \\(1\\) ตามลำดับ ดังนั้น"
            },
            {
              "id": "eq-ch3-125",
              "type": "equation",
              "number": "3.125",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\left\\|\n\\frac{\\partial\\mathbf{X}_2}{\\partial\\psi}\n\\times\n\\frac{\\partial\\mathbf{X}_2}{\\partial t}\n\\right\\|\n=r_2."
            },
            {
              "id": "ch3-p-154",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "จึงมีองค์ประกอบพื้นที่"
            },
            {
              "id": "eq-ch3-126",
              "type": "equation",
              "number": "3.126",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "dS=r_2\\,d\\psi\\,dt."
            },
            {
              "id": "ch3-p-155",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "บนผิวนี้ เงื่อนไขอยู่ภายใน \\(C_1\\) คือ"
            },
            {
              "id": "eq-ch3-127",
              "type": "equation",
              "number": "3.127",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "r_2^2\\cos^2\\psi\n+\n(t\\sin\\beta+r_2\\sin\\psi\\cos\\beta)^2\n\\le r_1^2."
            },
            {
              "id": "ch3-p-156",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "สำหรับค่าคงที่ \\(\\psi\\) จะมีคำตอบของ \\(t\\) ก็ต่อเมื่อ"
            },
            {
              "id": "eq-ch3-128",
              "type": "equation",
              "number": "3.128",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "r_2^2\\cos^2\\psi\\le r_1^2,"
            },
            {
              "id": "ch3-p-157",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "หรือ"
            },
            {
              "id": "eq-ch3-129",
              "type": "equation",
              "number": "3.129",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "|\\cos\\psi|\\le k."
            },
            {
              "id": "ch3-p-158",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "เมื่อเงื่อนไขนี้เป็นจริง ช่วงของ \\(t\\) มีความยาว"
            },
            {
              "id": "eq-ch3-130",
              "type": "equation",
              "number": "3.130",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\Delta t\n=\n\\frac{2\\sqrt{r_1^2-r_2^2\\cos^2\\psi}}\n{\\sin\\beta}."
            },
            {
              "id": "ch3-p-159",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ให้"
            },
            {
              "id": "eq-ch3-131",
              "type": "equation",
              "number": "3.131",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "D=\\{\\psi\\in[0,2\\pi):|\\cos\\psi|\\le k\\}."
            },
            {
              "id": "ch3-p-160",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ดังนั้น"
            },
            {
              "id": "eq-ch3-132",
              "type": "equation",
              "number": "3.132",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "S_2\n=\n\\frac{2r_2}{\\sin\\beta}\n\\int_D\n\\sqrt{r_1^2-r_2^2\\cos^2\\psi}\\,d\\psi."
            },
            {
              "id": "ch3-p-161",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "กำหนด"
            },
            {
              "id": "eq-ch3-133",
              "type": "equation",
              "number": "3.133",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\alpha=\\arcsin k."
            },
            {
              "id": "ch3-p-162",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ใช้สมมาตรรอบ \\(\\pi/2\\) และ \\(3\\pi/2\\) พร้อมแทน \\(\\psi=\\pi/2+\\theta\\) จะได้"
            },
            {
              "id": "eq-ch3-134",
              "type": "equation",
              "number": "3.134",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\int_D\n\\sqrt{r_1^2-r_2^2\\cos^2\\psi}\\,d\\psi\n=\n4r_2\n\\int_0^\\alpha\n\\sqrt{k^2-\\sin^2\\theta}\\,d\\theta."
            },
            {
              "id": "ch3-p-163",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "จึงมี"
            },
            {
              "id": "eq-ch3-135",
              "type": "equation",
              "number": "3.135",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการจากต้นฉบับ (3.5)",
              "description": "หมายเลขอ้างอิงในต้นฉบับ: (3.5)",
              "latex": "S_2\n=\n\\frac{8r_2^2}{\\sin\\beta}\n\\int_0^\\alpha\n\\sqrt{k^2-\\sin^2\\theta}\\,d\\theta.\n\\tag{3.5}",
              "sourceTag": "3.5"
            },
            {
              "id": "ch3-lemma-3-6",
              "type": "lemma",
              "number": "3.6",
              "status": "verified-proof",
              "title": "อัตลักษณ์สำหรับปริพันธ์ของพื้นที่ผิวส่วนที่สอง",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-164",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับ \\(0<k\\le1\\)"
                },
                {
                  "id": "eq-ch3-136",
                  "type": "equation",
                  "number": "3.136",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\int_0^{\\arcsin k}\n\\sqrt{k^2-\\sin^2\\theta}\\,d\\theta\n=\nE(k)-(1-k^2)K(k),"
                },
                {
                  "id": "ch3-p-165",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "โดยที่ขวามือที่ \\(k=1\\) เข้าใจในความหมายของลิมิตต่อเนื่อง"
                }
              ],
              "proofId": "proof-ch3-lemma-3-6",
              "relatedIds": [
                "proof-ch3-lemma-3-6"
              ]
            },
            {
              "id": "proof-ch3-lemma-3-6",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์บทตั้งที่ 3.6 อัตลักษณ์สำหรับปริพันธ์ของพื้นที่ผิวส่วนที่สอง",
              "proves": "ch3-lemma-3-6",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-166",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แทนค่า"
                },
                {
                  "id": "eq-ch3-137",
                  "type": "equation",
                  "number": "3.137",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\sin\\theta=k\\sin u,\n\\qquad\n0\\le u\\le\\frac{\\pi}{2}."
                },
                {
                  "id": "ch3-p-167",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จะได้"
                },
                {
                  "id": "eq-ch3-138",
                  "type": "equation",
                  "number": "3.138",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\cos\\theta\\,d\\theta=k\\cos u\\,du"
                },
                {
                  "id": "ch3-p-168",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-139",
                  "type": "equation",
                  "number": "3.139",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\cos\\theta\n=\\sqrt{1-k^2\\sin^2u}."
                },
                {
                  "id": "ch3-p-169",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-140",
                  "type": "equation",
                  "number": "3.140",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "d\\theta\n=\n\\frac{k\\cos u}\n{\\sqrt{1-k^2\\sin^2u}}\\,du"
                },
                {
                  "id": "ch3-p-170",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ขณะที่"
                },
                {
                  "id": "eq-ch3-141",
                  "type": "equation",
                  "number": "3.141",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\sqrt{k^2-\\sin^2\\theta}=k\\cos u."
                },
                {
                  "id": "ch3-p-171",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงได้"
                },
                {
                  "id": "eq-ch3-142",
                  "type": "equation",
                  "number": "3.142",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการจากต้นฉบับ (3.6)",
                  "description": "หมายเลขอ้างอิงในต้นฉบับ: (3.6)",
                  "latex": "\\int_0^{\\arcsin k}\n\\sqrt{k^2-\\sin^2\\theta}\\,d\\theta\n=\nk^2\n\\int_0^{\\pi/2}\n\\frac{\\cos^2u}\n{\\sqrt{1-k^2\\sin^2u}}\\,du.\n\\tag{3.6}",
                  "sourceTag": "3.6"
                },
                {
                  "id": "ch3-p-172",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จากนิยามของ \\(K\\) และ \\(E\\)"
                },
                {
                  "id": "eq-ch3-143",
                  "type": "equation",
                  "number": "3.143",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\nK-E\n&=\n\\int_0^{\\pi/2}\n\\left(\n\\frac{1}{q}-q\n\\right)du\\\\\n&=\n\\int_0^{\\pi/2}\n\\frac{1-q^2}{q}\\,du\\\\\n&=\nk^2\n\\int_0^{\\pi/2}\n\\frac{\\sin^2u}{q}\\,du,\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-173",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ"
                },
                {
                  "id": "eq-ch3-144",
                  "type": "equation",
                  "number": "3.144",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "q=\\sqrt{1-k^2\\sin^2u}."
                },
                {
                  "id": "ch3-p-174",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-145",
                  "type": "equation",
                  "number": "3.145",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\int_0^{\\pi/2}\n\\frac{\\sin^2u}{q}\\,du\n=\n\\frac{K-E}{k^2}."
                },
                {
                  "id": "ch3-p-175",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงมี"
                },
                {
                  "id": "eq-ch3-146",
                  "type": "equation",
                  "number": "3.146",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\n\\int_0^{\\pi/2}\n\\frac{\\cos^2u}{q}\\,du\n&=K-\\frac{K-E}{k^2}\\\\\n&=\n\\frac{E-(1-k^2)K}{k^2}.\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-176",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แทนใน (3.6) ได้",
                  "equationRefs": [
                    {
                      "label": "3.6",
                      "id": "eq-ch3-142"
                    }
                  ],
                  "relatedIds": [
                    "eq-ch3-142"
                  ]
                },
                {
                  "id": "eq-ch3-147",
                  "type": "equation",
                  "number": "3.147",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\int_0^{\\arcsin k}\n\\sqrt{k^2-\\sin^2\\theta}\\,d\\theta\n=\nE-(1-k^2)K."
                },
                {
                  "id": "ch3-p-177",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์ \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-theorem-3-6",
              "type": "theorem",
              "number": "3.6",
              "status": "verified-proof",
              "title": "พื้นที่ผิวส่วนที่สอง",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-178",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "พื้นที่ของ \\(\\Gamma_2\\) เท่ากับ"
                },
                {
                  "id": "eq-ch3-148",
                  "type": "equation",
                  "number": "3.148",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nS_2\n=\n\\frac{8r_2^2}{\\sin\\beta}\n\\left[\nE(k)-(1-k^2)K(k)\n\\right]\n}."
                }
              ],
              "proofId": "proof-ch3-theorem-3-6",
              "relatedIds": [
                "proof-ch3-theorem-3-6"
              ]
            },
            {
              "id": "proof-ch3-theorem-3-6",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์ทฤษฎีบทที่ 3.6 พื้นที่ผิวส่วนที่สอง",
              "proves": "ch3-theorem-3-6",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-179",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แทนผลของบทตั้งที่ 3.6 ลงในสมการ (3.5) ได้โดยตรงว่า",
                  "equationRefs": [
                    {
                      "label": "3.5",
                      "id": "eq-ch3-135"
                    }
                  ],
                  "relatedIds": [
                    "eq-ch3-135"
                  ]
                },
                {
                  "id": "eq-ch3-149",
                  "type": "equation",
                  "number": "3.149",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S_2\n=\n\\frac{8r_2^2}{\\sin\\beta}\n\\left[\nE(k)-(1-k^2)K(k)\n\\right]."
                },
                {
                  "id": "ch3-p-180",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์ \\(\\square\\)"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-11",
          "type": "heading",
          "level": 2,
          "section": "3.11",
          "status": "verified-proof",
          "title": "ทฤษฎีบทพื้นที่ผิวขอบเขตรวม",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-theorem-3-7",
              "type": "theorem",
              "number": "3.7",
              "status": "verified-proof",
              "title": "สูตรทั่วไปของพื้นที่ผิวขอบเขต",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-181",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ให้"
                },
                {
                  "id": "eq-ch3-150",
                  "type": "equation",
                  "number": "3.150",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "0<r_1\\le r_2,\n\\qquad\nk=\\frac{r_1}{r_2},\n\\qquad\n0<\\beta\\le\\frac{\\pi}{2}."
                },
                {
                  "id": "ch3-p-182",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "พื้นที่ผิวขอบเขตของส่วนตัดร่วมเท่ากับ"
                },
                {
                  "id": "eq-ch3-151",
                  "type": "equation",
                  "number": "3.151",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nS(r_1,r_2,\\beta)\n=\n\\frac{8r_2^2}{\\sin\\beta}\n\\left[\n(1+k)E(k)\n-(1-k^2)K(k)\n\\right]\n}."
                }
              ],
              "proofId": "proof-ch3-theorem-3-7",
              "relatedIds": [
                "proof-ch3-theorem-3-7"
              ]
            },
            {
              "id": "proof-ch3-theorem-3-7",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์ทฤษฎีบทที่ 3.7 สูตรทั่วไปของพื้นที่ผิวขอบเขต",
              "proves": "ch3-theorem-3-7",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-183",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จากบทตั้งที่ 3.5 ขอบเขตประกอบด้วย \\(\\Gamma_1\\) และ \\(\\Gamma_2\\) โดยเส้นรอยต่อมีพื้นที่ผิวเป็นศูนย์ ดังนั้น"
                },
                {
                  "id": "eq-ch3-152",
                  "type": "equation",
                  "number": "3.152",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S=S_1+S_2."
                },
                {
                  "id": "ch3-p-184",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แทนผลจากทฤษฎีบทที่ 3.5 และทฤษฎีบทที่ 3.6"
                },
                {
                  "id": "eq-ch3-153",
                  "type": "equation",
                  "number": "3.153",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\begin{aligned}\nS\n&=\n\\frac{8r_1r_2}{\\sin\\beta}E(k)\n+\n\\frac{8r_2^2}{\\sin\\beta}\n\\left[E(k)-(1-k^2)K(k)\\right]\\\\\n&=\n\\frac{8r_2^2}{\\sin\\beta}\n\\left[\n\\frac{r_1}{r_2}E(k)\n+E(k)\n-(1-k^2)K(k)\n\\right]\\\\\n&=\n\\frac{8r_2^2}{\\sin\\beta}\n\\left[\n(1+k)E(k)\n-(1-k^2)K(k)\n\\right].\n\\end{aligned}"
                },
                {
                  "id": "ch3-p-185",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จบการพิสูจน์ \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-heading-005",
              "type": "heading",
              "level": 3,
              "status": "verified-proof",
              "title": "กรณีรัศมีเท่ากัน",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-186",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ \\(r_1=r_2=r\\) จะมี \\(k=1\\), \\(E(1)=1\\) และ"
                },
                {
                  "id": "eq-ch3-154",
                  "type": "equation",
                  "number": "3.154",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "(1-k^2)K(k)\\to0."
                },
                {
                  "id": "ch3-p-187",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น"
                },
                {
                  "id": "eq-ch3-155",
                  "type": "equation",
                  "number": "3.155",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S(r,r,\\beta)\n=\n\\frac{8r^2}{\\sin\\beta}(2)\n=\n\\frac{16r^2}{\\sin\\beta}."
                },
                {
                  "id": "ch3-p-188",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "โดยเฉพาะเมื่อ \\(\\beta=\\pi/2\\)"
                },
                {
                  "id": "eq-ch3-156",
                  "type": "equation",
                  "number": "3.156",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{S=16r^2}."
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-12",
          "type": "heading",
          "level": 2,
          "section": "3.12",
          "status": "verified-proof",
          "title": "สมบัติโครงสร้างของสูตร",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-corollary-3-1",
              "type": "corollary",
              "number": "3.1",
              "status": "verified-proof",
              "title": "สมบัติการย่อขยาย",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-189",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับ \\(\\lambda>0\\)"
                },
                {
                  "id": "eq-ch3-157",
                  "type": "equation",
                  "number": "3.157",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V(\\lambda r_1,\\lambda r_2,\\beta)\n=\\lambda^3V(r_1,r_2,\\beta)"
                },
                {
                  "id": "ch3-p-190",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-158",
                  "type": "equation",
                  "number": "3.158",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S(\\lambda r_1,\\lambda r_2,\\beta)\n=\\lambda^2S(r_1,r_2,\\beta)."
                }
              ],
              "proofId": "proof-ch3-corollary-3-1",
              "relatedIds": [
                "proof-ch3-corollary-3-1"
              ]
            },
            {
              "id": "proof-ch3-corollary-3-1",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์บทแทรกที่ 3.1 สมบัติการย่อขยาย",
              "proves": "ch3-corollary-3-1",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-191",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อคูณรัศมีทั้งสองด้วย \\(\\lambda\\) ค่า"
                },
                {
                  "id": "eq-ch3-159",
                  "type": "equation",
                  "number": "3.159",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "k=\\frac{r_1}{r_2}"
                },
                {
                  "id": "ch3-p-192",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ไม่เปลี่ยน และ \\(K(k),E(k),\\sin\\beta\\) ไม่มีมิติ สูตรปริมาตรมีตัวประกอบ \\(r_2^3\\) จึงเพิ่มด้วยตัวคูณ \\(\\lambda^3\\) ส่วนสูตรพื้นที่ผิวมีตัวประกอบ \\(r_2^2\\) จึงเพิ่มด้วยตัวคูณ \\(\\lambda^2\\) \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-corollary-3-2",
              "type": "corollary",
              "number": "3.2",
              "status": "verified-proof",
              "title": "การขึ้นกับมุม",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-193",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อรัศมีทั้งสองคงที่"
                },
                {
                  "id": "eq-ch3-160",
                  "type": "equation",
                  "number": "3.160",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V(r_1,r_2,\\beta)\n=\\frac{C_V(r_1,r_2)}{\\sin\\beta}"
                },
                {
                  "id": "ch3-p-194",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-161",
                  "type": "equation",
                  "number": "3.161",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S(r_1,r_2,\\beta)\n=\\frac{C_S(r_1,r_2)}{\\sin\\beta},"
                },
                {
                  "id": "ch3-p-195",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "โดย \\(C_V,C_S>0\\) ไม่ขึ้นกับ \\(\\beta\\)"
                },
                {
                  "id": "ch3-p-196",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น บนช่วง"
                },
                {
                  "id": "eq-ch3-162",
                  "type": "equation",
                  "number": "3.162",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "0<\\beta\\le\\frac{\\pi}{2},"
                },
                {
                  "id": "ch3-p-197",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ทั้งปริมาตรและพื้นที่ผิวเป็นฟังก์ชันลดของ \\(\\beta\\) และมีค่าน้อยที่สุดเมื่อแกนตั้งฉากกัน"
                }
              ],
              "proofId": "proof-ch3-corollary-3-2",
              "relatedIds": [
                "proof-ch3-corollary-3-2"
              ]
            },
            {
              "id": "proof-ch3-corollary-3-2",
              "type": "proof",
              "status": "verified-proof",
              "title": "พิสูจน์บทแทรกที่ 3.2 การขึ้นกับมุม",
              "proves": "ch3-corollary-3-2",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-198",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สูตรที่พิสูจน์แล้วแสดงว่าอิทธิพลของมุมปรากฏเฉพาะในตัวประกอบ \\(1/\\sin\\beta\\) และ \\(\\sin\\beta\\) เป็นฟังก์ชันเพิ่มบนช่วงที่กำหนด จึงได้ผลตามต้องการ \\(\\square\\)"
                }
              ]
            },
            {
              "id": "ch3-corollary-3-3",
              "type": "corollary",
              "number": "3.3",
              "status": "verified-proof",
              "title": "พฤติกรรมเมื่อแกนเกือบขนาน",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-199",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ \\(\\beta\\to0^+\\)"
                },
                {
                  "id": "eq-ch3-163",
                  "type": "equation",
                  "number": "3.163",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V(r_1,r_2,\\beta)\\to\\infty"
                },
                {
                  "id": "ch3-p-200",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-164",
                  "type": "equation",
                  "number": "3.164",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S(r_1,r_2,\\beta)\\to\\infty."
                },
                {
                  "id": "ch3-p-201",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ผลดังกล่าวสอดคล้องกับเรขาคณิต เพราะเมื่อแกนเข้าใกล้การขนาน ส่วนตัดร่วมยืดยาวขึ้น และเมื่อ \\(\\beta=0\\) ส่วนตัดร่วมไม่เป็นทรงตันมีขอบเขต"
                }
              ]
            },
            {
              "id": "ch3-corollary-3-4",
              "type": "corollary",
              "number": "3.4",
              "status": "verified-proof",
              "title": "ความสมมาตรต่อการสลับรัศมี",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-202",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "แม้การพิสูจน์เลือกให้ \\(r_1\\le r_2\\) แต่ค่าทางเรขาคณิตไม่ขึ้นกับชื่อของทรงกระบอก สำหรับรัศมีบวกใด ๆ ให้กำหนด"
                },
                {
                  "id": "eq-ch3-165",
                  "type": "equation",
                  "number": "3.165",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "a=\\min\\{r_1,r_2\\},\n\\qquad\nb=\\max\\{r_1,r_2\\},\n\\qquad\nk=\\frac{a}{b}."
                },
                {
                  "id": "ch3-p-203",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สูตรทั่วไปสามารถเขียนในรูปสมมาตรว่า"
                },
                {
                  "id": "eq-ch3-166",
                  "type": "equation",
                  "number": "3.166",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nV\n=\n\\frac{8b^3}{3\\sin\\beta}\n\\left[\n(1+k^2)E(k)-(1-k^2)K(k)\n\\right]\n}"
                },
                {
                  "id": "ch3-p-204",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-167",
                  "type": "equation",
                  "number": "3.167",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nS\n=\n\\frac{8b^2}{\\sin\\beta}\n\\left[\n(1+k)E(k)-(1-k^2)K(k)\n\\right].\n}"
                },
                {
                  "id": "ch3-p-205",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้นการสลับชื่อทรงกระบอกไม่เปลี่ยนปริมาตรหรือพื้นที่ผิว"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-13",
          "type": "heading",
          "level": 2,
          "section": "3.13",
          "status": "verified-proof",
          "title": "การตรวจสอบพฤติกรรมเมื่ออัตราส่วนรัศมีมีค่าน้อย",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-206",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "จากรูปปริพันธ์ก่อนลดรูป"
            },
            {
              "id": "eq-ch3-168",
              "type": "equation",
              "number": "3.168",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "V\n=\n\\frac{8r_1^2r_2}{\\sin\\beta}\n\\int_0^{\\pi/2}\n\\cos^2\\theta\n\\sqrt{1-k^2\\sin^2\\theta}\\,d\\theta."
            },
            {
              "id": "ch3-p-207",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "เมื่อ \\(k\\to0^+\\) ฟังก์ชันภายใต้ปริพันธ์ลู่เข้า"
            },
            {
              "id": "eq-ch3-169",
              "type": "equation",
              "number": "3.169",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\cos^2\\theta."
            },
            {
              "id": "ch3-p-208",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "จึงได้"
            },
            {
              "id": "eq-ch3-170",
              "type": "equation",
              "number": "3.170",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "\\int_0^{\\pi/2}\\cos^2\\theta\\,d\\theta\n=\\frac{\\pi}{4}."
            },
            {
              "id": "ch3-p-209",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ดังนั้น"
            },
            {
              "id": "eq-ch3-171",
              "type": "equation",
              "number": "3.171",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "V\n\\sim\n\\frac{2\\pi r_1^2r_2}{\\sin\\beta}\n\\qquad (k\\to0^+)."
            },
            {
              "id": "ch3-p-210",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "สำหรับพื้นที่ผิว"
            },
            {
              "id": "eq-ch3-172",
              "type": "equation",
              "number": "3.172",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "S_1\n\\sim\n\\frac{4\\pi r_1r_2}{\\sin\\beta}"
            },
            {
              "id": "ch3-p-211",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "และ"
            },
            {
              "id": "eq-ch3-173",
              "type": "equation",
              "number": "3.173",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "S_2\n\\sim\n\\frac{2\\pi r_1^2}{\\sin\\beta}."
            },
            {
              "id": "ch3-p-212",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ผลเหล่านี้ใช้เป็นเกณฑ์ตรวจสอบเชิงลิมิตและเป็นสูตรประมาณเมื่อทรงกระบอกหนึ่งมีรัศมีเล็กกว่าอีกทรงมาก"
            }
          ]
        },
        {
          "id": "ch3-sec-3-14",
          "type": "heading",
          "level": 2,
          "section": "3.14",
          "status": "verified-proof",
          "title": "วิธีตรวจสอบเชิงตัวเลข",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-213",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "การตรวจสอบเชิงตัวเลขแบ่งเป็นการตรวจสอบปริมาตร การตรวจสอบพื้นที่ผิว และการตรวจสอบกรณีพิเศษ"
            },
            {
              "id": "ch3-sec-3-14-1",
              "type": "heading",
              "level": 3,
              "section": "3.14.1",
              "status": "verified-proof",
              "title": "การตรวจสอบปริมาตรด้วยปริพันธ์โดยตรง",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-214",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "คำนวณค่าจาก"
                },
                {
                  "id": "eq-ch3-174",
                  "type": "equation",
                  "number": "3.174",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V_{\\mathrm{quad}}\n=\n\\frac{8}{\\sin\\beta}\n\\int_0^{r_1}\n\\sqrt{r_1^2-x^2}\n\\sqrt{r_2^2-x^2}\\,dx"
                },
                {
                  "id": "ch3-p-215",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ด้วยวิธี adaptive quadrature หรือ Gauss–Legendre quadrature แล้วเปรียบเทียบกับ"
                },
                {
                  "id": "eq-ch3-175",
                  "type": "equation",
                  "number": "3.175",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V_{\\mathrm{elliptic}}\n=\n\\frac{8r_2^3}{3\\sin\\beta}\n\\left[\n(1+k^2)E(k)-(1-k^2)K(k)\n\\right]."
                }
              ]
            },
            {
              "id": "ch3-sec-3-14-2",
              "type": "heading",
              "level": 3,
              "section": "3.14.2",
              "status": "verified-proof",
              "title": "การตรวจสอบปริมาตรด้วยวิธีมอนติคาร์โล",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-216",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จากบทตั้งที่ 3.2 สามารถเลือกกล่องครอบ"
                },
                {
                  "id": "eq-ch3-176",
                  "type": "equation",
                  "number": "3.176",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "-r_1\\le x\\le r_1,"
                },
                {
                  "id": "eq-ch3-177",
                  "type": "equation",
                  "number": "3.177",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "-r_1\\le y\\le r_1,"
                },
                {
                  "id": "ch3-p-217",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-178",
                  "type": "equation",
                  "number": "3.178",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "-\\frac{r_1\\cos\\beta+r_2}{\\sin\\beta}\n\\le z\\le\n\\frac{r_1\\cos\\beta+r_2}{\\sin\\beta}."
                },
                {
                  "id": "ch3-p-218",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สุ่มจุดอย่างสม่ำเสมอในกล่องดังกล่าว แล้วนับจุดที่ทำให้อสมการ"
                },
                {
                  "id": "eq-ch3-179",
                  "type": "equation",
                  "number": "3.179",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "x^2+y^2\\le r_1^2"
                },
                {
                  "id": "ch3-p-219",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-180",
                  "type": "equation",
                  "number": "3.180",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "x^2+(y\\cos\\beta-z\\sin\\beta)^2\\le r_2^2"
                },
                {
                  "id": "ch3-p-220",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เป็นจริงพร้อมกัน"
                },
                {
                  "id": "ch3-p-221",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ถ้า \\(N\\) เป็นจำนวนจุดทั้งหมด และ \\(N_{\\mathrm{in}}\\) เป็นจำนวนจุดที่อยู่ใน \\(\\Omega\\) ค่าประมาณปริมาตรคือ"
                },
                {
                  "id": "eq-ch3-181",
                  "type": "equation",
                  "number": "3.181",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V_{\\mathrm{MC}}\n=V_{\\mathrm{box}}\n\\frac{N_{\\mathrm{in}}}{N}."
                },
                {
                  "id": "ch3-p-222",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ควรรายงานค่าความไม่แน่นอนจากการสุ่มหรือทำซ้ำหลายครั้งด้วยเมล็ดสุ่มต่างกัน"
                }
              ]
            },
            {
              "id": "ch3-sec-3-14-3",
              "type": "heading",
              "level": 3,
              "section": "3.14.3",
              "status": "verified-proof",
              "title": "การตรวจสอบพื้นที่ผิวด้วยปริพันธ์พารามิเตอร์",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-223",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ตรวจสอบ \\(S_1\\) จาก"
                },
                {
                  "id": "eq-ch3-182",
                  "type": "equation",
                  "number": "3.182",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S_{1,\\mathrm{quad}}\n=\n\\frac{2r_1}{\\sin\\beta}\n\\int_0^{2\\pi}\n\\sqrt{r_2^2-r_1^2\\cos^2\\phi}\\,d\\phi"
                },
                {
                  "id": "ch3-p-224",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และตรวจสอบ \\(S_2\\) จาก"
                },
                {
                  "id": "eq-ch3-183",
                  "type": "equation",
                  "number": "3.183",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S_{2,\\mathrm{quad}}\n=\n\\frac{2r_2}{\\sin\\beta}\n\\int_D\n\\sqrt{r_1^2-r_2^2\\cos^2\\psi}\\,d\\psi."
                },
                {
                  "id": "ch3-p-225",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "นำผลไปเปรียบเทียบกับสูตรอินทิกรัลวงรีที่พิสูจน์แล้ว"
                }
              ]
            },
            {
              "id": "ch3-sec-3-14-4",
              "type": "heading",
              "level": 3,
              "section": "3.14.4",
              "status": "verified-proof",
              "title": "ค่าคลาดเคลื่อน",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-226",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สำหรับค่ามาตรฐานอ้างอิง \\(Q_{\\mathrm{ref}}\\) และค่าที่ต้องการตรวจสอบ \\(Q_{\\mathrm{test}}\\) กำหนด"
                },
                {
                  "id": "eq-ch3-184",
                  "type": "equation",
                  "number": "3.184",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\text{Absolute Error}\n=\n|Q_{\\mathrm{test}}-Q_{\\mathrm{ref}}|"
                },
                {
                  "id": "ch3-p-227",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-185",
                  "type": "equation",
                  "number": "3.185",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\text{Relative Error}\n=\n\\frac{|Q_{\\mathrm{test}}-Q_{\\mathrm{ref}}|}\n{|Q_{\\mathrm{ref}}|}."
                },
                {
                  "id": "ch3-p-228",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ถ้ารายงานเป็นร้อยละ ให้คูณ relative error ด้วย \\(100\\)"
                }
              ]
            },
            {
              "id": "ch3-sec-3-14-5",
              "type": "heading",
              "level": 3,
              "section": "3.14.5",
              "status": "verified-proof",
              "title": "ชุดค่าทดสอบขั้นต่ำ",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-229",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ควรใช้ชุดทดสอบอย่างน้อยดังนี้"
                },
                {
                  "id": "ch3-table-01",
                  "type": "table",
                  "status": "verified-proof",
                  "headers": [
                    "ชุด",
                    "\\(r_1\\)",
                    "\\(r_2\\)",
                    "\\(\\beta\\)",
                    "วัตถุประสงค์"
                  ],
                  "rows": [
                    [
                      "1",
                      "1",
                      "1",
                      "\\(90^\\circ\\)",
                      "ตรวจกรณีคลาสสิก"
                    ],
                    [
                      "2",
                      "1",
                      "2",
                      "\\(90^\\circ\\)",
                      "ตรวจกรณีรัศมีต่างกันและแกนตั้งฉาก"
                    ],
                    [
                      "3",
                      "1",
                      "2",
                      "\\(60^\\circ\\)",
                      "ตรวจอิทธิพลของมุมเอียง"
                    ],
                    [
                      "4",
                      "1",
                      "3",
                      "\\(45^\\circ\\)",
                      "ตรวจกรณีรัศมีและมุมต่างกันมากขึ้น"
                    ],
                    [
                      "5",
                      "1",
                      "10 หรือมากกว่า",
                      "มุมคงที่",
                      "ตรวจพฤติกรรมเมื่อ \\(k\\to0\\)"
                    ],
                    [
                      "6",
                      "1",
                      "ใกล้ 1",
                      "มุมคงที่",
                      "ตรวจความต่อเนื่องเมื่อ \\(k\\to1\\)"
                    ],
                    [
                      "7",
                      "กำหนด",
                      "กำหนด",
                      "มุมขนาดเล็ก",
                      "ตรวจพฤติกรรม \\(1/\\sin\\beta\\)"
                    ]
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-15",
          "type": "heading",
          "level": 2,
          "section": "3.15",
          "status": "verified-proof",
          "title": "ข้อควรระวังในการเขียนโปรแกรม",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-sec-3-15-1",
              "type": "heading",
              "level": 3,
              "section": "3.15.1",
              "status": "verified-proof",
              "title": "โมดูลัส \\(k\\) และพารามิเตอร์ \\(m\\)",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-230",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ในรายงานนิยาม"
                },
                {
                  "id": "eq-ch3-186",
                  "type": "equation",
                  "number": "3.186",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "K(k)=\\int_0^{\\pi/2}\n(1-k^2\\sin^2\\theta)^{-1/2}\\,d\\theta"
                },
                {
                  "id": "ch3-p-231",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-187",
                  "type": "equation",
                  "number": "3.187",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "E(k)=\\int_0^{\\pi/2}\n(1-k^2\\sin^2\\theta)^{1/2}\\,d\\theta."
                },
                {
                  "id": "ch3-p-232",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "อย่างไรก็ตาม ฟังก์ชัน `scipy.special.ellipk` และ `scipy.special.ellipe` ใช้อาร์กิวเมนต์เป็น"
                },
                {
                  "id": "eq-ch3-188",
                  "type": "equation",
                  "number": "3.188",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "m=k^2."
                },
                {
                  "id": "ch3-p-233",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ดังนั้น เมื่อใช้ SciPy ต้องเขียนในลักษณะ"
                },
                {
                  "id": "ch3-code-01",
                  "type": "code",
                  "status": "verified-proof",
                  "language": "python",
                  "code": "m = k**2\nK = scipy.special.ellipk(m)\nE = scipy.special.ellipe(m)"
                },
                {
                  "id": "ch3-p-234",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ไม่ควรส่ง \\(k\\) เข้าไปโดยตรง เว้นแต่ไลบรารีที่ใช้ระบุชัดว่าอาร์กิวเมนต์เป็นโมดูลัส"
                }
              ]
            },
            {
              "id": "ch3-sec-3-15-2",
              "type": "heading",
              "level": 3,
              "section": "3.15.2",
              "status": "verified-proof",
              "title": "กรณี \\(k=1\\)",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-235",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ \\(k=1\\) ค่า \\(K(1)\\) ไม่จำกัด แต่สูตรมีพจน์"
                },
                {
                  "id": "eq-ch3-189",
                  "type": "equation",
                  "number": "3.189",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "(1-k^2)K(k)"
                },
                {
                  "id": "ch3-p-236",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ซึ่งมีลิมิตเป็นศูนย์ การคำนวณตรงในเครื่องอาจเกิดรูปไม่กำหนด \\(0\\times\\infty\\) และให้ค่า `NaN`"
                },
                {
                  "id": "ch3-p-237",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "จึงควรแยกกรณีรัศมีเท่ากันเป็น"
                },
                {
                  "id": "eq-ch3-190",
                  "type": "equation",
                  "number": "3.190",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V=\\frac{16r^3}{3\\sin\\beta}"
                },
                {
                  "id": "ch3-p-238",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "และ"
                },
                {
                  "id": "eq-ch3-191",
                  "type": "equation",
                  "number": "3.191",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "S=\\frac{16r^2}{\\sin\\beta}."
                }
              ]
            },
            {
              "id": "ch3-sec-3-15-3",
              "type": "heading",
              "level": 3,
              "section": "3.15.3",
              "status": "verified-proof",
              "title": "กรณี \\(k\\) ใกล้ศูนย์",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-239",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ \\(k\\) มีค่าน้อยมาก พจน์"
                },
                {
                  "id": "eq-ch3-192",
                  "type": "equation",
                  "number": "3.192",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "(1+k^2)E(k)-(1-k^2)K(k)"
                },
                {
                  "id": "ch3-p-240",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เกิดจากการลบจำนวนที่ใกล้กัน จึงอาจสูญเสียความแม่นยำเชิงตัวเลข ควรตรวจด้วยปริพันธ์โดยตรง ใช้เลขความละเอียดสูง หรือใช้สูตรประมาณ"
                },
                {
                  "id": "eq-ch3-193",
                  "type": "equation",
                  "number": "3.193",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "V\n\\sim\n\\frac{2\\pi r_1^2r_2}{\\sin\\beta}."
                }
              ]
            },
            {
              "id": "ch3-sec-3-15-4",
              "type": "heading",
              "level": 3,
              "section": "3.15.4",
              "status": "verified-proof",
              "title": "หน่วยของมุม",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-241",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ฟังก์ชันตรีโกณมิติในภาษาโปรแกรมทั่วไปใช้เรเดียน ถ้าข้อมูลเริ่มต้นเป็นองศาต้องแปลงด้วย"
                },
                {
                  "id": "eq-ch3-194",
                  "type": "equation",
                  "number": "3.194",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\beta_{\\mathrm{rad}}\n=\\frac{\\pi}{180}\\beta_{\\mathrm{deg}}."
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-16",
          "type": "heading",
          "level": 2,
          "section": "3.16",
          "status": "verified-proof",
          "title": "ขั้นตอนวิธีสำหรับคำนวณสูตรทั่วไป",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-242",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "ให้รับข้อมูลรัศมีบวกสองค่าและมุม \\(\\beta\\) ที่ไม่เป็นศูนย์"
            },
            {
              "id": "ch3-list-02",
              "type": "ordered-list",
              "status": "verified-proof",
              "start": 1,
              "items": [
                "กำหนด"
              ]
            },
            {
              "id": "eq-ch3-195",
              "type": "equation",
              "number": "3.195",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "a=\\min\\{r_1,r_2\\},\n   \\qquad\n   b=\\max\\{r_1,r_2\\}."
            },
            {
              "id": "ch3-list-03",
              "type": "ordered-list",
              "status": "verified-proof",
              "start": 2,
              "items": [
                "กำหนด"
              ]
            },
            {
              "id": "eq-ch3-196",
              "type": "equation",
              "number": "3.196",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "k=a/b."
            },
            {
              "id": "ch3-list-04",
              "type": "ordered-list",
              "status": "verified-proof",
              "start": 3,
              "items": [
                "ตรวจว่า \\(0<\\beta\\le\\pi/2\\) หรือแทนมุมด้วยมุมแหลมระหว่างแกน",
                "ถ้า \\(a=b\\) ภายใน tolerance ที่กำหนด ให้ใช้สูตรกรณี \\(k=1\\)",
                "ถ้า \\(a\\ne b\\) ให้คำนวณ \\(K(k)\\) และ \\(E(k)\\) ตามข้อตกลงของไลบรารี",
                "คำนวณ"
              ]
            },
            {
              "id": "eq-ch3-197",
              "type": "equation",
              "number": "3.197",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "V\n   =\n   \\frac{8b^3}{3\\sin\\beta}\n   \\left[\n   (1+k^2)E(k)-(1-k^2)K(k)\n   \\right]"
            },
            {
              "id": "ch3-list-05",
              "type": "ordered-list",
              "status": "verified-proof",
              "start": 7,
              "items": [
                "คำนวณ"
              ]
            },
            {
              "id": "eq-ch3-198",
              "type": "equation",
              "number": "3.198",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "S_1\n   =\n   \\frac{8ab}{\\sin\\beta}E(k)"
            },
            {
              "id": "ch3-list-06",
              "type": "ordered-list",
              "status": "verified-proof",
              "start": 8,
              "items": [
                "คำนวณ"
              ]
            },
            {
              "id": "eq-ch3-199",
              "type": "equation",
              "number": "3.199",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "S_2\n   =\n   \\frac{8b^2}{\\sin\\beta}\n   \\left[\n   E(k)-(1-k^2)K(k)\n   \\right]"
            },
            {
              "id": "ch3-list-07",
              "type": "ordered-list",
              "status": "verified-proof",
              "start": 9,
              "items": [
                "คำนวณ"
              ]
            },
            {
              "id": "eq-ch3-200",
              "type": "equation",
              "number": "3.200",
              "status": "verified-proof",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "title": "สมการ",
              "description": "สมการจากบทที่ 3",
              "latex": "S=S_1+S_2."
            },
            {
              "id": "ch3-list-08",
              "type": "ordered-list",
              "status": "verified-proof",
              "start": 10,
              "items": [
                "ตรวจสอบผลกับปริพันธ์โดยตรงอย่างน้อยหนึ่งวิธี"
              ]
            }
          ]
        },
        {
          "id": "ch3-sec-3-17",
          "type": "heading",
          "level": 2,
          "section": "3.17",
          "status": "verified-proof",
          "title": "สรุปผลทางคณิตศาสตร์ของบท",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-243",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "จากการกำหนดระบบพิกัดและพิสูจน์อย่างเป็นลำดับ ได้ผลหลักดังนี้"
            },
            {
              "id": "ch3-heading-006",
              "type": "heading",
              "level": 3,
              "status": "verified-proof",
              "title": "สูตรปริมาตร",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "ch3-p-244",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "เมื่อ"
                },
                {
                  "id": "eq-ch3-201",
                  "type": "equation",
                  "number": "3.201",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "a=\\min\\{r_1,r_2\\},\n\\qquad\nb=\\max\\{r_1,r_2\\},\n\\qquad\nk=\\frac{a}{b},"
                },
                {
                  "id": "ch3-p-245",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "ปริมาตรของส่วนตัดร่วมคือ"
                },
                {
                  "id": "eq-ch3-202",
                  "type": "equation",
                  "number": "3.202",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nV\n=\n\\frac{8b^3}{3\\sin\\beta}\n\\left[\n(1+k^2)E(k)-(1-k^2)K(k)\n\\right].\n}"
                }
              ]
            },
            {
              "id": "ch3-heading-007",
              "type": "heading",
              "level": 3,
              "status": "verified-proof",
              "title": "สูตรพื้นที่ผิวส่วนที่มาจากทรงกระบอกเล็กกว่า",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "eq-ch3-203",
                  "type": "equation",
                  "number": "3.203",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nS_{\\mathrm{small}}\n=\n\\frac{8ab}{\\sin\\beta}E(k).\n}"
                }
              ]
            },
            {
              "id": "ch3-heading-008",
              "type": "heading",
              "level": 3,
              "status": "verified-proof",
              "title": "สูตรพื้นที่ผิวส่วนที่มาจากทรงกระบอกใหญ่กว่า",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "eq-ch3-204",
                  "type": "equation",
                  "number": "3.204",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nS_{\\mathrm{large}}\n=\n\\frac{8b^2}{\\sin\\beta}\n\\left[\nE(k)-(1-k^2)K(k)\n\\right].\n}"
                }
              ]
            },
            {
              "id": "ch3-heading-009",
              "type": "heading",
              "level": 3,
              "status": "verified-proof",
              "title": "สูตรพื้นที่ผิวขอบเขตรวม",
              "source": "03_Steinmetz_Chapter3_Full_Proof.md",
              "content": [
                {
                  "id": "eq-ch3-205",
                  "type": "equation",
                  "number": "3.205",
                  "status": "verified-proof",
                  "source": "03_Steinmetz_Chapter3_Full_Proof.md",
                  "title": "สมการ",
                  "description": "สมการจากบทที่ 3",
                  "latex": "\\boxed{\nS\n=\n\\frac{8b^2}{\\sin\\beta}\n\\left[\n(1+k)E(k)-(1-k^2)K(k)\n\\right].\n}"
                },
                {
                  "id": "ch3-p-246",
                  "type": "paragraph",
                  "status": "verified-proof",
                  "text": "สูตรทั้งหมดผ่านการตรวจสอบเชิงมิติ กรณีรัศมีเท่ากัน กรณีแกนตั้งฉาก สมบัติการย่อขยาย ความสมมาตรต่อการสลับรัศมี และพฤติกรรมเมื่อ \\(\\beta\\to0^+\\) แล้ว ส่วนผลการคำนวณเชิงตัวเลข ตารางค่าคลาดเคลื่อน กราฟ และแบบจำลองสามมิติจะนำเสนอในบทที่ 4"
                }
              ]
            }
          ]
        },
        {
          "id": "ch3-heading-010",
          "type": "heading",
          "level": 2,
          "status": "verified-proof",
          "title": "หมายเหตุสำหรับการจัดทำบรรณานุกรมภายหลัง",
          "source": "03_Steinmetz_Chapter3_Full_Proof.md",
          "content": [
            {
              "id": "ch3-p-247",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "แหล่งอ้างอิงหลักที่ควรใส่ในบรรณานุกรมของรายงาน ได้แก่"
            },
            {
              "id": "ch3-list-09",
              "type": "ordered-list",
              "status": "verified-proof",
              "start": 1,
              "items": [
                "NIST Digital Library of Mathematical Functions, Chapter 19, Section 19.2 สำหรับนิยามและข้อตกลงของอินทิกรัลวงรีสมบูรณ์",
                "ตำราแคลคูลัสหลายตัวแปรสำหรับทฤษฎีบทของฟูบินี การเปลี่ยนตัวแปร จาโคเบียน และปริพันธ์พื้นผิว",
                "เอกสารทางการของไลบรารีที่ใช้คำนวณ เช่น SciPy สำหรับข้อตกลงที่ใช้อาร์กิวเมนต์ \\(m=k^2\\)",
                "แหล่งอ้างอิงของกรณีคลาสสิก \\(V=16r^3/3\\) และ \\(S=16r^2\\)"
              ]
            },
            {
              "id": "ch3-p-248",
              "type": "paragraph",
              "status": "verified-proof",
              "text": "บทพิสูจน์หลักในบทนี้เขียนให้สมบูรณ์ในตัวเอง จึงไม่ควรอ้างแหล่งภายนอกแทนขั้นตอนการพิสูจน์ที่โครงงานนำเสนอ"
            }
          ]
        }
      ]
    }
  ]
};
