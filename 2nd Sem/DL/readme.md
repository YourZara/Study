# Digital Logic (ENEX / EX 152) — Study Pack

Personal revision hub for **Tribhuvan University · IOE · BE (BEI / BCT) · Year I / Part II**.

**Live site (GitHub Pages):** [yourzara.github.io/Study](https://yourzara.github.io/Study/)  
**This hub:** […/2nd Sem/DL/Index.html](https://yourzara.github.io/Study/2nd%20Sem/DL/Index.html)

**Start here:** open [`Index.html`](Index.html) locally, or use [`link.html`](link.html) for the full file list.

---

## File tree

```
DL/
├── Index.html                          # Main study hub
├── index.html                          # Redirect → Index.html
├── link.html                           # Complete link directory
├── syllabus-map.html                   # Chapter ↔ resource map
├── readme.md                           # This file
├── Syllabus.pdf                        # Official course syllabus
├── PQA pic.jpg                         # Scanned past papers (PDF)
├── ChatGPT/
│   └── Digital_Logic_ENEX_152_Master_Guide_ChatGPT.pdf
├── Gemini/
│   ├── Digital Electronics Reference Guide - Module 1Gemini.pdf
│   ├── Logic.html
│   ├── Bool.html
│   ├── Combinational.html
│   ├── sequential_logic_circuits_master_guide.html
│   ├── Register.html
│   ├── seqmachine.html
│   └── BJT.html
├── Theory Short/
│   ├── index.html
│   ├── chapters.html
│   └── style.css
└── PQA Claude/
    ├── index.html
    ├── paper1.html
    ├── paper2.html
    ├── paper3.html
    └── paper4.html
```

---

## Root hub pages

| File | Main features |
|------|----------------|
| **`Index.html`** | Landing page for the whole pack. Shows study collections (Syllabus, PQA, Theory Short, Gemini, ChatGPT), a suggested study path, marks overview (8 chapters / 60 marks), and quick jumps from each syllabus chapter to the best local note. |
| **`index.html`** | Tiny redirect so opening the folder as a site still lands on `Index.html`. |
| **`link.html`** | Full directory of every file with type tags, paper dates, chapter mapping, and a recommended open order. Best when you want “list everything and click.” |
| **`syllabus-map.html`** | Interactive syllabus breakdown from `Syllabus.pdf`: hours, marks, topic bullets, and chips linking to Gemini / Theory Short / PQA for each of the 8 chapters. Highlights the three 10-mark units (Ch 4, 6, 7). |
| **`readme.md`** | This document — inventory and feature summary of all materials. |

---

## Official & past-paper sources

| File | Main features |
|------|----------------|
| **`Syllabus.pdf`** | Official **ENEX 152 Digital Logic** syllabus (4 pages). Covers lecture/tutorial/practical hours (3/1/3), all 8 units with subtopics, tutorial list (20 items), practical list (10 labs), final-exam marks table (60 marks), and textbook references (Floyd, Mano, Malvino, etc.). |
| **`PQA pic.jpg`** | **Despite the `.jpg` name, this is a 4-page PDF** (~4.2 MB) of scanned TU exam papers. Pages are: **2083 Baishakh** (Back), **2082 Bhadra** (Regular), **2082 Baishakh** (Back), **2081 Ashwin** (Regular). Use beside the solved answers in `PQA Claude/`. |

---

## `ChatGPT/` — printable master guide

| File | Main features |
|------|----------------|
| **`Digital_Logic_ENEX_152_Master_Guide_ChatGPT.pdf`** | 14-page printable revision book for the full syllabus. Organised as Concept → Truth table → Equation → Design → Practice. Covers foundations, gates/Boolean/K-maps, combinational design, flip-flops, registers/counters, sequential machines, and TTL/CMOS. Good for offline reading or print. |

---

## `Gemini/` — deep chapter guides

Long-form HTML (and one PDF) aligned to syllabus chapters.

| File | Syllabus | Main features |
|------|----------|----------------|
| **`Digital Electronics Reference Guide - Module 1Gemini.pdf`** | Ch 1 | Module 1 handbook: analog vs digital, logic-level / noise margins, IC scales & families, clock triggering, number codes. |
| **`Logic.html`** | Ch 2 | Logic gates reference: basic / universal / exclusive gates, positive & negative logic, De Morgan, applications. Sidebar-style long notes. |
| **`Bool.html`** | Ch 3 | Boolean algebra & Karnaugh maps: laws, SOP/POS, minterms/maxterms, 4-variable K-maps, don’t cares, grouping. |
| **`Combinational.html`** | Ch 4 | Combinational design: adders/subtractors, ripple & look-ahead, MUX/DEMUX, encoders/decoders, 7-segment, magnitude comparators. |
| **`sequential_logic_circuits_master_guide.html`** | Ch 5 | Latches vs flip-flops (SR, D, T, JK), characteristic/excitation tables, master-slave, timing, conversions. |
| **`Register.html`** | Ch 6 | Registers (SISO/SIPO/PISO/PIPO) and asynchronous/synchronous counters (up/down, mod-n), timing diagrams, applications. |
| **`seqmachine.html`** | Ch 7 | Sequential machine design procedure: state diagrams, flow tables, reduction, assignment, excitation maps, sequence detectors. |
| **`BJT.html`** | Ch 8 | Digital ICs: BJT/MOSFET switching, TTL & CMOS parameters and gate circuits, three-state, frequency/time measurement apps. |

---

## `Theory Short/` — fast exam revision

| File | Main features |
|------|----------------|
| **`index.html`** | Compact exam home: 60-mark chapter map, priority topics, “repeated in past papers” checklist (sequence detectors, counters, SIPO/PISO, K-map, MUX designs, TTL/CMOS notes), and tips to score 80%+. |
| **`chapters.html`** | Full short theory for chapters 1–8 in expandable sections, with worked TU-style examples (Gray/Excess-3/BCD, K-map, MUX adder/subtractor, FF conversions, counters, sequence detectors, logic families). |
| **`style.css`** | Shared stylesheet for the Theory Short pages (layout, tables, question blocks). |

---

## `PQA Claude/` — solved past papers

Full model answers with working, tables, K-maps, SVG circuit/timing diagrams. Each paper is self-contained.

| File | Exam | Main features |
|------|------|----------------|
| **`index.html`** | Hub | Index of all four papers, topic snippets per paper, “most repeated topics” table, and exam tips (assumptions, design order, timing labels). |
| **`paper1.html`** | 2083 Baishakh (Back) | Gray→binary, Excess-3, universal gates, K-map, octal encoder, full subtractor via MUX, D→JK, 4-bit SIPO, async BCD counter, sync mod-10 (T), **011 detector (T)**, logic families. |
| **`paper2.html`** | 2082 Bhadra (Regular) | Binary→Gray, 2’s complement & BCD add, De Morgan, K-map with don’t cares, 3-bit comparator, full adder via MUX, SR→JK, shift registers & Johnson counter, ripple counter, sync mod-6 (SR), **110 detector (SR)**, frequency counter. |
| **`paper3.html`** | 2082 Baishakh (Back) | ASCII & signed addition, Boolean proofs, priority encoder, 3×8 decoder realization, up/down counter (T), PISO, mod-12 async counter, **010 detector (D)**, CMOS NAND & TTL, time measurement. |
| **`paper4.html`** | 2081 Ashwin (Regular) | Digital vs analog, hex→octal & Gray→binary, BCD-to-7-seg (f), 1:4 MUX, HA/HS in one circuit, mod-6 down (JK), SIPO, up/down async counter, **101 detector (SR)**, TTL NOR & CMOS, frequency measurement. |

---

## Suggested use

1. Skim **`Syllabus.pdf`** / **`syllabus-map.html`** for weightage.  
2. Revise with **`Theory Short/`** (fast) or **`Gemini/`** + **`ChatGPT/` PDF** (deep / print).  
3. Drill designs that repeat every year (detectors, sync/async counters, shift registers, K-map, MUX).  
4. Practise with **`PQA pic.jpg`** (questions) + **`PQA Claude/`** (answers), then redo without looking.

---

## Course snapshot (from syllabus)

| Chapter | Topic | Hours | Marks |
|---------|--------|------:|------:|
| 1 | Introduction & codes | 5 | 7 |
| 2 | Logic gates | 3 | 4 |
| 3 | Boolean algebra & K-maps | 4 | 5 |
| 4 | Combinational circuits | 8 | **10** |
| 5 | Sequential / flip-flops | 5 | 7 |
| 6 | Registers & counters | 7 | **10** |
| 7 | Sequential machines | 8 | **10** |
| 8 | Digital ICs | 5 | 7 |
| | **Total** | **45** | **60** |
