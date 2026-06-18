# Find My Rate — Prototype

Interactive prototype for the **Find My Rate** feature, aligned with **Duetto Design System V3 (2026)**.

## Design reference (2026 Design System v4)

| Component | Figma node |
|-----------|------------|
| Color ramps | [3279-30740](https://www.figma.com/design/yZ5mR7q3QcSdB24e3PmaX3/2026-Design-System-v4?node-id=3279-30740) |
| Global shell header | Live product chrome (screenshot reference) |
| Child header | [11985-158653](https://www.figma.com/design/yZ5mR7q3QcSdB24e3PmaX3/2026-Design-System-v4?node-id=11985-158653) |
| Date picker | [2299-46952](https://www.figma.com/design/yZ5mR7q3QcSdB24e3PmaX3/2026-Design-System-v4?node-id=2299-46952) |
| Data table | [5106-29458](https://www.figma.com/design/yZ5mR7q3QcSdB24e3PmaX3/2026-Design-System-v4?node-id=5106-29458) |

All colors use v4 ramps only (`teal`, `gray`, `blue`, `green`, `amber`, `red`) — see `styles/tokens.css`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Flows

1. **Find My Rate — Search:** Enter Member ID, hotel, dates → **Search**
2. **Find My Rate — Results:** Breadcrumb **‹ New Search**, rate codes, 7-day calendar per room, **Reserve**
3. **Reservation Queue:** Click **Reserve** on a room → row appears in the queue table (nav switches to Reservation Queue)

### Demo member IDs

| Member ID | Scenario | Highlights |
|-----------|----------|------------|
| `100115` (or empty) | CAS2 simple | Worth $8,240 · 1 reservation · DK 12/30 inventory |
| `100987` | CAS7 + CAS7FB | Worth $24,680 · 3 reservations · loyalty alert · 1 COMP night |

### Results enhancements

- **Member panel:** current worth, reservations on books, segment
- **Property inventory:** total rooms remaining (with oversell cap note)
- **Total rooms remaining by stay date:** One table row aligned to stay-date column headers (property-level, not per room type)
- **Unified results table:** Stay dates as column headers; property inventory row, then room types with per-date rate cells
- **Responsive layout:** Fluid grids, horizontal table scroll, and breakpoints for narrower viewports
- **Per room type:** code + `remaining/total` (e.g. DK 12/30)
- **Room table quick filter:** AG Grid–style search across all columns (multi-word AND, match highlight, row count, Escape to clear)
- **Toolbar:** sort, expand all / collapse all
- **Free nights column:** count of COMP nights in the date range

### Calendar day states

- **Available** — empty white cell
- **Sold out** — grey cell: `SOLD OUT`, rate, date
- **COMP** — white cell: strikethrough rack rate, bold **COMP**, date + member rate code
- **Fallback** — lime cell: strikethrough rack rate, fallback price, date + fallback rate code (e.g. CAS7FB)
- **Fallback (plain)** — white cell: strikethrough higher rate + alternate price when member code unavailable

## Structure

```
styles/tokens.css      — V3 design tokens
styles/components.css  — Layout + components
js/app.js              — Navigation + table interactions
index.html             — Shell + markup
```
