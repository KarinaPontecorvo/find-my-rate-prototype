/**
 * Find My Rate prototype — Design System v4
 */

const SCENARIOS = {
  simple: {
    memberId: "100115",
    dateRange: { start: new Date(2026, 4, 20), end: new Date(2026, 4, 21) },
    rateCode: "CAS2",
    fallbackRateCode: null,
    showAlert: false,
    pickerMonth: new Date(2026, 4, 1),
    member: { worth: "$8,240", segment: "Silver", reservationsOnBooks: 1 },
    inventoryByDate: {
      total: 120,
      oversellCap: 135,
      byDate: [
        { date: "2026-05-20", label: "Wed 5/20", remaining: 52, total: 120 },
        { date: "2026-05-21", label: "Thu 5/21", remaining: 47, total: 120 },
      ],
    },
    rooms: [
      {
        id: "king",
        name: "King",
        roomCode: "DK",
        inventoryRemaining: 12,
        inventoryTotal: 30,
        avgPrimary: "$65.00",
        avgPrimaryLabel: "1 night Avg",
        total: "$65.00",
        expanded: true,
        days: [
          { type: "sold", day: "Wed 5/20", price: "$65.00" },
          { type: "fallback-plain", day: "Thu 5/21", originalRate: "$195.00", price: "$65.00" },
        ],
      },
      {
        id: "double-queen",
        name: "Double Queen",
        roomCode: "DQ",
        inventoryRemaining: 8,
        inventoryTotal: 24,
        avgPrimary: "$65.00",
        avgPrimaryLabel: "1 night Avg",
        total: "$65.00",
        expanded: true,
        days: [
          { type: "fallback-plain", day: "Wed 5/20", originalRate: "$195.00", price: "$65.00" },
          { type: "sold", day: "Thu 5/21", price: "$65.00" },
        ],
      },
      {
        id: "plateau",
        name: "Plateau Suite",
        roomCode: "PS",
        inventoryRemaining: 3,
        inventoryTotal: 8,
        avgPrimary: "$125.00",
        avgPrimaryLabel: "1 night Avg",
        total: "$125.00",
        expanded: false,
        days: [],
      },
      {
        id: "vista",
        name: "Vista Suite",
        roomCode: "VS",
        inventoryRemaining: 0,
        inventoryTotal: 4,
        avgPrimary: "$175.00",
        avgPrimaryLabel: "1 night Avg",
        total: "$175.00",
        expanded: false,
        days: [],
      },
    ],
  },
  loyalty: {
    memberId: "100987",
    dateRange: { start: new Date(2026, 7, 23), end: new Date(2026, 7, 29) },
    rateCode: "CAS7",
    fallbackRateCode: "CAS7FB",
    showAlert: true,
    pickerMonth: new Date(2026, 7, 1),
    member: { worth: "$24,680", segment: "Platinum", reservationsOnBooks: 3 },
    inventoryByDate: {
      total: 120,
      oversellCap: 140,
      byDate: [
        { date: "2026-08-23", label: "Sun 8/23", remaining: 58, total: 120 },
        { date: "2026-08-24", label: "Mon 8/24", remaining: 55, total: 120 },
        { date: "2026-08-25", label: "Tue 8/25", remaining: 52, total: 120 },
        { date: "2026-08-26", label: "Wed 8/26", remaining: 50, total: 120 },
        { date: "2026-08-27", label: "Thu 8/27", remaining: 48, total: 120 },
        { date: "2026-08-28", label: "Fri 8/28", remaining: 51, total: 120 },
        { date: "2026-08-29", label: "Sat 8/29", remaining: 62, total: 120 },
      ],
    },
    rooms: [
      {
        id: "king",
        name: "King",
        roomCode: "DK",
        inventoryRemaining: 12,
        inventoryTotal: 30,
        avgPrimary: "1 night Avg",
        avgPrimaryIsLabel: true,
        avgSecondary: "$112.17",
        avgSecondaryLabel: "5 nights Avg",
        total: "$673.00",
        totalNights: "6 nights",
        expanded: true,
        days: [
          { type: "comp", day: "Sun 8/23", originalRate: "$175.00", rateCode: "CAS7" },
          { type: "fallback", day: "Mon 8/24", originalRate: "$175.00", price: "$132.00", rateCode: "CAS7FB" },
          { type: "fallback", day: "Tue 8/25", originalRate: "$175.00", price: "$132.00", rateCode: "CAS7FB" },
          { type: "fallback", day: "Wed 8/26", originalRate: "$165.00", price: "$124.00", rateCode: "CAS7FB" },
          { type: "fallback", day: "Thu 8/27", originalRate: "$165.00", price: "$124.00", rateCode: "CAS7FB" },
          { type: "fallback", day: "Fri 8/28", originalRate: "$165.00", price: "$124.00", rateCode: "CAS7FB" },
          { type: "sold", day: "Sat 8/29", price: "$175.00" },
        ],
      },
      {
        id: "double-queen",
        name: "Double Queen",
        roomCode: "DQ",
        inventoryRemaining: 15,
        inventoryTotal: 24,
        avgPrimary: "1 night Avg",
        avgPrimaryIsLabel: true,
        avgSecondary: "$112.17",
        avgSecondaryLabel: "5 nights Avg",
        total: "$673.00",
        totalNights: "6 nights",
        expanded: true,
        days: [
          { type: "comp", day: "Sun 8/23", originalRate: "$175.00", rateCode: "CAS7" },
          { type: "fallback", day: "Mon 8/24", originalRate: "$175.00", price: "$132.00", rateCode: "CAS7FB" },
          { type: "fallback", day: "Tue 8/25", originalRate: "$175.00", price: "$132.00", rateCode: "CAS7FB" },
          { type: "fallback", day: "Wed 8/26", originalRate: "$165.00", price: "$124.00", rateCode: "CAS7FB" },
          { type: "fallback", day: "Thu 8/27", originalRate: "$165.00", price: "$124.00", rateCode: "CAS7FB" },
          { type: "fallback", day: "Fri 8/28", originalRate: "$165.00", price: "$124.00", rateCode: "CAS7FB" },
          { type: "available" },
        ],
      },
    ],
  },
};

/** Demo rate hints for date-picker cells (Aug 2026 loyalty week) */
const PICKER_DAY_HINTS = {
  "2026-8-23": "comp",
  "2026-8-24": "fallback",
  "2026-8-25": "fallback",
  "2026-8-26": "fallback",
  "2026-8-27": "fallback",
  "2026-8-28": "fallback",
  "2026-8-29": "na",
  "2026-5-20": "na",
};

let activeScenario = SCENARIOS.simple;
let rooms = [];
const datePickers = [];

const DEFAULT_HOTEL = "Wildhorse Casino Resort";
const QUEUE_CREATED_BY = "K";

const state = {
  page: "find-my-rate",
  fmrView: "search",
  roomSearch: "",
  roomSort: "name",
  allExpanded: false,
  reservationQueue: [],
};

const ROOM_TAIL_COLS = 4;

function $(id) {
  return document.getElementById(id);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatShortDate(d) {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${mm}/${dd}/${yy}`;
}

function formatRange(start, end) {
  if (!start) return "Select dates";
  if (!end || start.getTime() === end.getTime()) return formatShortDate(start);
  return `${formatShortDate(start)} - ${formatShortDate(end)}`;
}

function formatQueueTimestamp(d = new Date()) {
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function getActiveDateRange() {
  const picker = datePickers.find((p) => p.id === "results") ?? datePickers[0];
  return { start: picker?.start ?? null, end: picker?.end ?? null };
}

function getHotelName() {
  return (
    $("hotel-results")?.value?.trim() ||
    $("hotel")?.value?.trim() ||
    DEFAULT_HOTEL
  );
}

function getDepartureDate(arrival, lastNight) {
  const checkout = lastNight ? new Date(lastNight) : new Date(arrival);
  return addDays(checkout, 1);
}

function buildReservationNotes(room) {
  const compNights = countFreeNights(room.days);
  if (compNights > 0) return `${compNights} COMP night${compNights === 1 ? "" : "s"}`;
  return "";
}

function buildQueueEntry(room) {
  const { start, end } = getActiveDateRange();
  const arrival = start ?? activeScenario.dateRange.start;
  const lastNight = end ?? start ?? activeScenario.dateRange.end;
  const departure = getDepartureDate(arrival, lastNight);
  const memberId = ($("member-id-results")?.value || activeScenario.memberId || "").trim();
  const rateCode = activeScenario.rateCode;
  const notes = buildReservationNotes(room);

  return {
    id: `rq-${Date.now()}-${room.id}`,
    memberId,
    arrivalDate: formatShortDate(arrival),
    departureDate: formatShortDate(departure),
    hotel: getHotelName(),
    rateCode,
    notes,
    roomType: room.name,
    roomTypeCode: room.roomCode,
    totalRate: room.total,
    created: formatQueueTimestamp(),
    createdBy: QUEUE_CREATED_BY,
  };
}

function addToReservationQueue(room) {
  if (!room) return;
  state.reservationQueue.push(buildQueueEntry(room));
  renderReservationQueue();
}

function renderReservationQueue() {
  const tbody = $("reservation-queue-tbody");
  if (!tbody) return;

  if (!state.reservationQueue.length) {
    tbody.innerHTML = `
      <tr class="ds-table__row">
        <td class="ds-table__td ds-table__td--empty" colspan="11">No reservations in queue</td>
      </tr>`;
    return;
  }

  tbody.innerHTML = state.reservationQueue
    .map(
      (entry) => `
      <tr class="ds-table__row" data-queue-id="${escapeHtml(entry.id)}">
        <td class="ds-table__td">${escapeHtml(entry.memberId)}</td>
        <td class="ds-table__td">${escapeHtml(entry.arrivalDate)}</td>
        <td class="ds-table__td">${escapeHtml(entry.departureDate)}</td>
        <td class="ds-table__td">${escapeHtml(entry.hotel)}</td>
        <td class="ds-table__td">${escapeHtml(entry.rateCode)}</td>
        <td class="ds-table__td">${escapeHtml(entry.notes || "—")}</td>
        <td class="ds-table__td">${escapeHtml(entry.roomType)}</td>
        <td class="ds-table__td">${escapeHtml(entry.roomTypeCode)}</td>
        <td class="ds-table__td">${escapeHtml(entry.totalRate)}</td>
        <td class="ds-table__td">${escapeHtml(entry.created)}</td>
        <td class="ds-table__td">${escapeHtml(entry.createdBy)}</td>
      </tr>`
    )
    .join("");
}

function dateKey(d) {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function isBetween(date, start, end) {
  if (!start || !end) return false;
  const t = new Date(date).setHours(0, 0, 0, 0);
  const s = new Date(start).setHours(0, 0, 0, 0);
  const e = new Date(end).setHours(0, 0, 0, 0);
  return t >= Math.min(s, e) && t <= Math.max(s, e);
}

class DatePicker {
  constructor(root, { onChange }) {
    this.root = root;
    this.id = root.dataset.pickerId;
    this.trigger = root.querySelector(".date-picker__trigger");
    this.display = root.querySelector(`#date-picker-${this.id}-display`);
    this.monthLabel = root.querySelector(`#date-picker-${this.id}-month`);
    this.grid = root.querySelector(`#date-picker-${this.id}-grid`);
    this.onChange = onChange;
    this.viewMonth = new Date(2026, 4, 1);
    this.start = new Date(2026, 4, 20);
    this.end = new Date(2026, 4, 21);
    this.selectingEnd = false;

    this.trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggle();
    });

    root.querySelectorAll(".date-picker__nav").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dir = btn.dataset.nav === "next" ? 1 : -1;
        this.viewMonth = new Date(this.viewMonth.getFullYear(), this.viewMonth.getMonth() + dir, 1);
        this.render();
      });
    });

    root.querySelector('[data-action="clear"]')?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.start = null;
      this.end = null;
      this.updateDisplay();
      this.render();
    });

    root.querySelector('[data-action="apply"]')?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.close();
      this.onChange?.({ start: this.start, end: this.end });
    });

    document.addEventListener("click", () => this.close());
    root.querySelector(".date-picker__popover")?.addEventListener("click", (e) => e.stopPropagation());

    this.render();
    this.updateDisplay();
  }

  setRange(start, end, viewMonth) {
    this.start = start ? new Date(start) : null;
    this.end = end ? new Date(end) : null;
    if (viewMonth) this.viewMonth = new Date(viewMonth);
    this.updateDisplay();
    this.render();
  }

  toggle() {
    const open = this.root.classList.toggle("date-picker--open");
    this.trigger.setAttribute("aria-expanded", String(open));
  }

  close() {
    this.root.classList.remove("date-picker--open");
    this.trigger.setAttribute("aria-expanded", "false");
  }

  updateDisplay() {
    this.display.textContent = formatRange(this.start, this.end);
  }

  getDayHint(date) {
    const hint = PICKER_DAY_HINTS[dateKey(date)];
    if (hint) return hint;
    if (this.start && this.end && isBetween(new Date(date), this.start, this.end)) {
      return "standard";
    }
    return null;
  }

  renderDayContent(date, hint) {
    if (hint === "comp") {
      return `<span class="date-picker__day-rate date-picker__day-rate--comp">COMP</span>`;
    }
    if (hint === "fallback") {
      return `<span class="date-picker__day-rate date-picker__day-rate--fallback">$132 <span aria-hidden="true">!</span></span>`;
    }
    if (hint === "na") {
      return `<span class="date-picker__day-rate date-picker__day-rate--na">N/A</span>`;
    }
    if (hint === "standard") {
      return `<span class="date-picker__day-rate date-picker__day-rate--standard">$65</span>`;
    }
    return "";
  }

  render() {
    const y = this.viewMonth.getFullYear();
    const m = this.viewMonth.getMonth();
    this.monthLabel.textContent = this.viewMonth.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    const first = new Date(y, m, 1);
    const startPad = first.getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const cells = [];

    for (let i = 0; i < startPad; i++) {
      const d = new Date(y, m, -startPad + i + 1);
      cells.push(this.buildDayButton(d, true));
    }
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(this.buildDayButton(new Date(y, m, day), false));
    }
    while (cells.length % 7 !== 0) {
      const d = new Date(y, m + 1, cells.length - startPad - daysInMonth + 1);
      cells.push(this.buildDayButton(d, true));
    }

    this.grid.innerHTML = cells.join("");
    this.grid.querySelectorAll(".date-picker__day").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const ts = Number(btn.dataset.ts);
        this.handleDayClick(new Date(ts));
      });
    });
  }

  buildDayButton(date, outside) {
    const hint = this.getDayHint(date);
    const classes = ["date-picker__day"];
    if (outside) classes.push("date-picker__day--outside");

    if (this.start && dateKey(date) === dateKey(this.start)) classes.push("date-picker__day--range-start");
    if (this.end && dateKey(date) === dateKey(this.end)) classes.push("date-picker__day--range-end");
    if (this.start && this.end && isBetween(new Date(date), this.start, this.end)) {
      classes.push("date-picker__day--in-range");
    }
    if (hint === "na") classes.push("date-picker__day--sold");

    const content = this.renderDayContent(date, hint);

    return `<button type="button" class="${classes.join(" ")}" data-ts="${date.getTime()}" ${
      hint === "na" ? 'disabled aria-disabled="true"' : ""
    }>
      <span class="date-picker__day-num">${date.getDate()}</span>
      ${content}
    </button>`;
  }

  handleDayClick(date) {
    if (!this.start || this.selectingEnd) {
      this.start = date;
      this.end = null;
      this.selectingEnd = true;
    } else {
      if (date < this.start) {
        this.end = this.start;
        this.start = date;
      } else {
        this.end = date;
      }
      this.selectingEnd = false;
    }
    this.updateDisplay();
    this.render();
  }
}

function renderStrike(originalRate) {
  if (!originalRate) {
    return `<span class="day-cell__strike day-cell__strike--empty" aria-hidden="true">&nbsp;</span>`;
  }
  return `<span class="day-cell__strike">${escapeHtml(originalRate)}</span>`;
}

function renderDayCell(cell) {
  if (!cell || cell.type === "available") {
    return `<div class="day-cell day-cell--available" aria-label="Available"></div>`;
  }
  if (cell.type === "sold") {
    return `
      <div class="day-cell day-cell--sold" role="cell">
        <span class="day-cell__label">SOLD OUT</span>
        <span class="day-cell__price">${escapeHtml(cell.price ?? "")}</span>
        <span class="day-cell__meta">${escapeHtml(cell.day ?? "")}</span>
      </div>`;
  }
  if (cell.type === "comp") {
    return `
      <div class="day-cell day-cell--comp" role="cell">
        ${renderStrike(cell.originalRate)}
        <span class="day-cell__comp">COMP</span>
        <span class="day-cell__meta">${escapeHtml(cell.day ?? "")}<br /><span class="day-cell__code">${escapeHtml(cell.rateCode ?? "")}</span></span>
      </div>`;
  }
  if (cell.type === "fallback") {
    return `
      <div class="day-cell day-cell--fallback" role="cell">
        ${renderStrike(cell.originalRate)}
        <span class="day-cell__price">${escapeHtml(cell.price ?? "")}</span>
        <span class="day-cell__meta">${escapeHtml(cell.day ?? "")}<br /><span class="day-cell__code">${escapeHtml(cell.rateCode ?? "")}</span></span>
      </div>`;
  }
  if (cell.type === "fallback-plain") {
    return `
      <div class="day-cell day-cell--fallback-plain" role="cell">
        ${renderStrike(cell.originalRate)}
        <span class="day-cell__price">${escapeHtml(cell.price ?? "")} <span class="day-cell__fallback-icon" aria-hidden="true">!</span></span>
        <span class="day-cell__meta">${escapeHtml(cell.day ?? "")}</span>
      </div>`;
  }
  return `<div class="day-cell day-cell--available"></div>`;
}

function renderCalendarGrid(days) {
  const slots = days.length > 0 ? days : Array(7).fill({ type: "available" });
  while (slots.length < 7) slots.push({ type: "available" });
  return `<div class="rates-detail__grid">${slots.slice(0, 7).map(renderDayCell).join("")}</div>`;
}

function countFreeNights(days) {
  if (!days?.length) return 0;
  return days.filter((d) => d.type === "comp").length;
}

function parseMoney(value) {
  const n = parseFloat(String(value).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function getActiveDateRange() {
  const resultsPicker = datePickers.find((p) => p.id === "results");
  const start = resultsPicker?.start ?? activeScenario.dateRange?.start;
  const end = resultsPicker?.end ?? activeScenario.dateRange?.end ?? start;
  return { start, end };
}

function getInventoryData() {
  const inv = activeScenario.inventoryByDate;
  if (!inv) return { stayColumns: [], rangeSummary: null, oversellCap: null, total: 0 };

  const { start, end } = getActiveDateRange();
  if (!start || !end) {
    return {
      stayColumns: inv.byDate ?? [],
      rangeSummary: null,
      oversellCap: inv.oversellCap,
      total: inv.total,
    };
  }

  const startT = new Date(start).setHours(0, 0, 0, 0);
  const endT = new Date(end).setHours(0, 0, 0, 0);
  const stayColumns = (inv.byDate ?? []).filter((row) => {
    const t = new Date(row.date).setHours(0, 0, 0, 0);
    return t >= Math.min(startT, endT) && t <= Math.max(startT, endT);
  });

  if (!stayColumns.length) {
    return { stayColumns: [], rangeSummary: null, oversellCap: inv.oversellCap, total: inv.total };
  }

  const remainingVals = stayColumns.map((d) => d.remaining);
  const rangeSummary = {
    remainingMin: Math.min(...remainingVals),
    remainingMax: Math.max(...remainingVals),
    total: inv.total,
  };

  return { stayColumns, rangeSummary, oversellCap: inv.oversellCap, total: inv.total };
}

function getTableLayout() {
  const { stayColumns, rangeSummary, oversellCap, total } = getInventoryData();
  const cols = 1 + stayColumns.length + ROOM_TAIL_COLS;
  return { stayColumns, rangeSummary, oversellCap, total, cols };
}

function formatRangeRemaining(summary) {
  if (!summary) return "—";
  const { remainingMin, remainingMax, total } = summary;
  if (remainingMin === remainingMax) return `${remainingMin} / ${total}`;
  return `${remainingMin}–${remainingMax} / ${total}`;
}

function renderPropertyInventoryCell(remaining, total) {
  const cls = getInventoryClass(remaining, total);
  return `
    <span class="inventory-badge inventory-badge--property ${cls}">
      <span class="inventory-badge__value">${remaining}<span class="inventory-badge__sep">/</span>${total}</span>
      <span class="inventory-badge__label">remaining</span>
    </span>`;
}

function renderRoomTailPlaceholders() {
  return Array(ROOM_TAIL_COLS)
    .fill('<td class="ds-table__td ds-table__td--muted" aria-hidden="true">—</td>')
    .join("");
}

function renderUnifiedThead(stayColumns, cols) {
  const { start, end } = getActiveDateRange();
  const rangeLabel = formatRange(start, end);
  const dateHeaders = stayColumns
    .map(
      (col) =>
        `<th class="ds-table__th ds-table__th--date" scope="col"><span class="ds-table__th-text">${escapeHtml(col.label)}</span></th>`
    )
    .join("");

  return `
    <tr class="ds-table__head-groups">
      <th class="ds-table__th-group" colspan="${1 + stayColumns.length}" scope="colgroup">
        By stay date · <span id="unified-table-range">${escapeHtml(rangeLabel)}</span>
      </th>
      <th class="ds-table__th-group" colspan="${ROOM_TAIL_COLS}" scope="colgroup">Room totals</th>
    </tr>
    <tr>
      <th class="ds-table__th ds-table__th--label ds-table__th--sticky" scope="col">
        <span class="ds-table__th-text">Room type</span>
      </th>
      ${dateHeaders}
      <th class="ds-table__th" scope="col"><span class="ds-table__th-text">Rooms remaining</span></th>
      <th class="ds-table__th" scope="col"><span class="ds-table__th-text">Free nights</span></th>
      <th class="ds-table__th" scope="col"><span class="ds-table__th-text">Total price</span></th>
      <th class="ds-table__th ds-table__th--actions" scope="col"><span class="ds-table__th-text">Actions</span></th>
    </tr>`;
}

function renderInventorySectionRows(stayColumns, rangeSummary, cols, oversellCap) {
  if (!stayColumns.length) return "";

  const oversellHint = oversellCap
    ? `Oversell allowance up to ${oversellCap} rooms`
    : "";

  const dateCells = stayColumns
    .map(
      (col) =>
        `<td class="ds-table__td ds-table__td--date-cell">${renderPropertyInventoryCell(col.remaining, col.total)}</td>`
    )
    .join("");

  return `
    <tr class="ds-table__row ds-table__row--section">
      <td class="ds-table__td ds-table__td--section" colspan="${cols}">Property inventory</td>
    </tr>
    <tr class="ds-table__row ds-table__row--inventory">
      <td class="ds-table__td ds-table__td--metric ds-table__td--sticky">
        <span class="ds-table__cell-primary">Total rooms remaining</span>
        <span class="ds-table__rate-sub">${escapeHtml(formatRangeRemaining(rangeSummary))} stay range${oversellHint ? ` · ${escapeHtml(oversellHint)}` : ""}</span>
      </td>
      ${dateCells}
      ${renderRoomTailPlaceholders()}
    </tr>`;
}

function findRoomDayForStayColumn(room, stayCol, stayColumns) {
  const days = room.days ?? [];
  if (!days.length) return { type: "available" };

  const labelMatch = days.find((d) => d.day && d.day.toLowerCase() === stayCol.label.toLowerCase());
  if (labelMatch) return labelMatch;

  const idx = stayColumns.findIndex((c) => c.date === stayCol.date);
  if (idx >= 0 && idx < days.length) {
    const d = days[idx];
    if (d.type !== "available" || d.day) return d;
  }

  return { type: "available" };
}

function renderTableDayCell(cell) {
  if (!cell || cell.type === "available") {
    return `<div class="table-day-cell table-day-cell--available" aria-label="Available"></div>`;
  }
  if (cell.type === "sold") {
    return `
      <div class="table-day-cell table-day-cell--sold" role="cell">
        <span class="table-day-cell__label">SOLD OUT</span>
        <span class="table-day-cell__price">${escapeHtml(cell.price ?? "")}</span>
      </div>`;
  }
  if (cell.type === "comp") {
    return `
      <div class="table-day-cell table-day-cell--comp" role="cell">
        ${renderStrike(cell.originalRate)}
        <span class="table-day-cell__comp">COMP</span>
        ${cell.rateCode ? `<span class="table-day-cell__code">${escapeHtml(cell.rateCode)}</span>` : ""}
      </div>`;
  }
  if (cell.type === "fallback") {
    return `
      <div class="table-day-cell table-day-cell--fallback" role="cell">
        ${renderStrike(cell.originalRate)}
        <span class="table-day-cell__price">${escapeHtml(cell.price ?? "")}</span>
        ${cell.rateCode ? `<span class="table-day-cell__code">${escapeHtml(cell.rateCode)}</span>` : ""}
      </div>`;
  }
  if (cell.type === "fallback-plain") {
    return `
      <div class="table-day-cell table-day-cell--fallback-plain" role="cell">
        ${renderStrike(cell.originalRate)}
        <span class="table-day-cell__price">${escapeHtml(cell.price ?? "")}</span>
      </div>`;
  }
  return `<div class="table-day-cell table-day-cell--available"></div>`;
}

function renderRoomAvgSubline(room, filterText) {
  if (room.avgPrimaryIsLabel) {
    return `<span class="room-type-meta__avg ds-table__rate-main--green">${highlightQuickFilter(room.avgSecondary, filterText)}</span>
      <span class="room-type-meta__avg-label">${highlightQuickFilter(room.avgSecondaryLabel, filterText)}</span>`;
  }
  if (room.avgPrimary) {
    return `<span class="room-type-meta__avg">${highlightQuickFilter(room.avgPrimary, filterText)}</span>
      <span class="room-type-meta__avg-label">${highlightQuickFilter(room.avgPrimaryLabel, filterText)}</span>`;
  }
  return "";
}

function renderRoomSectionRows(stayColumns, visible, filterText, cols) {
  const sectionRow = `
    <tr class="ds-table__row ds-table__row--section">
      <td class="ds-table__td ds-table__td--section" colspan="${cols}">Room types &amp; rates</td>
    </tr>`;

  const roomRows = visible
    .map((room) => {
      const freeNights = countFreeNights(room.days);
      const totalSub = room.totalNights ?? "";
      const dateCells = stayColumns
        .map(
          (col) =>
            `<td class="ds-table__td ds-table__td--day">${renderTableDayCell(findRoomDayForStayColumn(room, col, stayColumns))}</td>`
        )
        .join("");

      return `
        <tr class="ds-table__row ds-table__row--room" data-room-id="${room.id}">
          <td class="ds-table__td ds-table__td--label-col ds-table__td--sticky">
            ${renderRoomNameCell(room, filterText)}
          </td>
          ${dateCells}
          <td class="ds-table__td">${renderInventoryBadge(room, filterText)}</td>
          <td class="ds-table__td">
            <span class="ds-table__cell-primary">${highlightQuickFilter(String(freeNights), filterText)}</span>
            <span class="ds-table__rate-sub">${highlightQuickFilter("COMP nights", filterText)}</span>
          </td>
          <td class="ds-table__td">
            <span class="ds-table__cell-primary">${highlightQuickFilter(room.total, filterText)}</span>
            ${totalSub ? `<span class="ds-table__rate-sub">${highlightQuickFilter(totalSub, filterText)}</span>` : ""}
          </td>
          <td class="ds-table__td ds-table__td--actions">
            <button type="button" class="btn btn--primary btn--sm" data-reserve="${room.id}">Reserve</button>
          </td>
        </tr>`;
    })
    .join("");

  return sectionRow + roomRows;
}

function tokenizeQuickFilter(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function getRoomSearchableText(room) {
  const dayParts = (room.days ?? []).flatMap((d) => [
    d.day,
    d.price,
    d.originalRate,
    d.rateCode,
    d.type,
  ]);
  const parts = [
    room.name,
    room.roomCode,
    room.avgPrimary,
    room.avgSecondary,
    room.avgPrimaryLabel,
    room.avgSecondaryLabel,
    room.total,
    room.totalNights,
    String(room.inventoryRemaining),
    String(room.inventoryTotal),
    `${room.inventoryRemaining}/${room.inventoryTotal}`,
    String(countFreeNights(room.days)),
    ...dayParts,
    "comp",
    "nights",
    "remaining",
    "reserve",
  ];
  return parts.filter(Boolean).join(" ").toLowerCase();
}

function roomMatchesQuickFilter(room, filterText) {
  const tokens = tokenizeQuickFilter(filterText);
  if (!tokens.length) return true;
  const haystack = getRoomSearchableText(room);
  return tokens.every((token) => haystack.includes(token));
}

function highlightQuickFilter(text, filterText) {
  const safe = escapeHtml(String(text ?? ""));
  const tokens = tokenizeQuickFilter(filterText);
  if (!tokens.length) return safe;

  let result = safe;
  tokens.forEach((token) => {
    if (!token) return;
    const re = new RegExp(`(${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    result = result.replace(re, '<mark class="ag-highlight">$1</mark>');
  });
  return result;
}

function getInventoryClass(remaining, total) {
  if (remaining <= 0) return "inventory-badge--soldout";
  if (remaining / total <= 0.2) return "inventory-badge--low";
  return "";
}

function renderInventoryBadge(room, filterText) {
  const { inventoryRemaining: rem, inventoryTotal: tot, roomCode } = room;
  const cls = getInventoryClass(rem, tot);
  const label = `${rem}/${tot} remaining`;
  return `
    <span class="inventory-badge ${cls}">
      <span class="inventory-badge__code">${highlightQuickFilter(roomCode, filterText)}</span>
      ${highlightQuickFilter(label, filterText)}
    </span>`;
}

function renderRoomNameCell(room, filterText) {
  const dayHints = (room.days ?? [])
    .filter((d) => d.day)
    .map((d) => d.day)
    .join(" ");
  const avgLine = renderRoomAvgSubline(room, filterText);
  return `
    <div class="room-type-meta">
      <span class="ds-table__cell-primary">${highlightQuickFilter(room.name, filterText)}</span>
      <span class="room-type-meta__code">${highlightQuickFilter(room.roomCode, filterText)}</span>
      ${avgLine ? `<span class="room-type-meta__pricing">${avgLine}</span>` : ""}
      ${dayHints ? `<span class="room-type-meta__hint visually-hidden">${escapeHtml(dayHints)}</span>` : ""}
    </div>`;
}

function sortRooms(list, sortBy) {
  const sorted = [...list];
  sorted.sort((a, b) => {
    if (sortBy === "total") return parseMoney(b.total) - parseMoney(a.total);
    if (sortBy === "freeNights") return countFreeNights(b.days) - countFreeNights(a.days);
    if (sortBy === "inventory") {
      const ratioA = a.inventoryRemaining / a.inventoryTotal;
      const ratioB = b.inventoryRemaining / b.inventoryTotal;
      return ratioA - ratioB;
    }
    return a.name.localeCompare(b.name);
  });
  return sorted;
}

function getVisibleRooms() {
  const filtered = rooms.filter((r) => roomMatchesQuickFilter(r, state.roomSearch));
  return sortRooms(filtered, state.roomSort);
}

function updateQuickFilterUi(visibleCount, totalCount) {
  const countEl = $("room-filter-count");
  const clearBtn = $("room-quick-filter-clear");
  const hasFilter = Boolean(state.roomSearch.trim());

  clearBtn?.classList.toggle("hidden", !hasFilter);

  if (!countEl) return;
  if (!hasFilter) {
    countEl.textContent = totalCount ? `${totalCount} rows` : "";
    return;
  }
  countEl.textContent =
    visibleCount === 0
      ? "No rows to show"
      : `${visibleCount} of ${totalCount}`;
}

function renderMemberInfo() {
  const m = activeScenario.member;
  if (!m) {
    $("member-info")?.classList.add("hidden");
    return;
  }
  $("member-info")?.classList.remove("hidden");
  $("member-worth").textContent = m.worth;
  $("member-reservations").textContent = String(m.reservationsOnBooks);
  $("member-segment").textContent = m.segment;
}

function renderRatesTable() {
  const filterText = state.roomSearch;
  const visible = getVisibleRooms();
  const tbody = $("rates-tbody");
  const thead = $("rates-thead");
  const emptyEl = $("room-search-empty");
  const tableCard = $("rates-table-card");
  const hasInventory = Boolean(activeScenario.inventoryByDate);
  const hasRooms = rooms.length > 0;
  const { stayColumns, rangeSummary, oversellCap, cols } = getTableLayout();

  if (!tbody || !thead) return;

  updateQuickFilterUi(visible.length, rooms.length);
  emptyEl?.classList.toggle("hidden", visible.length > 0 || !filterText.trim() || !hasRooms);
  tableCard?.classList.toggle("hidden", !hasInventory && !hasRooms);

  if (emptyEl && filterText.trim() && visible.length === 0 && hasRooms) {
    emptyEl.textContent = `No room types match "${filterText.trim()}". Clear the quick filter to show room rows.`;
  } else if (emptyEl) {
    emptyEl.textContent = "No room types match your search.";
  }

  thead.innerHTML = renderUnifiedThead(stayColumns, cols);

  const inventoryRows =
    hasInventory && stayColumns.length
      ? renderInventorySectionRows(stayColumns, rangeSummary, cols, oversellCap)
      : "";
  const roomRows = hasRooms ? renderRoomSectionRows(stayColumns, visible, filterText, cols) : "";

  tbody.innerHTML = inventoryRows + roomRows;
  bindRatesTableEvents();
}

function bindRatesTableEvents() {
  const tbody = $("rates-tbody");
  if (!tbody) return;

  tbody.querySelectorAll("[data-reserve]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const room = rooms.find((r) => r.id === btn.dataset.reserve);
      if (!room) return;
      addToReservationQueue(room);
      location.hash = "reservation-queue";
      setPage("reservation-queue");
    });
  });
}

function showResultsChrome() {
  $("rates-toolbar")?.classList.remove("hidden");
  renderMemberInfo();
  renderRatesTable();
}

function applyScenario(key) {
  activeScenario = SCENARIOS[key] ?? SCENARIOS.simple;
  rooms = activeScenario.rooms.map((r) => ({ ...r, expanded: r.expanded ?? false }));
  state.roomSearch = "";
  state.roomSort = "name";
  state.allExpanded = rooms.every((r) => r.expanded);
  const quickFilter = $("room-quick-filter");
  const sortSelect = $("room-sort");
  if (quickFilter) quickFilter.value = "";
  if (sortSelect) sortSelect.value = "name";

  $("rate-code").textContent = activeScenario.rateCode;
  $("loyalty-alert").classList.toggle("hidden", !activeScenario.showAlert);
  $("fallback-rate-card").classList.toggle("hidden", !activeScenario.fallbackRateCode);
  $("rate-codes-wrap").classList.toggle("rate-codes--single", !activeScenario.fallbackRateCode);
  if (activeScenario.fallbackRateCode) {
    $("fallback-rate-code").textContent = activeScenario.fallbackRateCode;
  }

  $("member-id-results").value = activeScenario.memberId;

  const { start, end } = activeScenario.dateRange;
  datePickers.forEach((picker) => {
    picker.setRange(start, end, activeScenario.pickerMonth);
  });
}

function setPage(page) {
  state.page = page;
  document.querySelectorAll("[data-child-nav]").forEach((link) => {
    link.classList.toggle("child-header__link--active", link.dataset.childNav === page);
  });
  document.querySelectorAll("[data-shell-nav]").forEach((link) => {
    link.classList.toggle("shell-header__link--active", link.dataset.shellNav === page);
  });
  $("page-find-my-rate").classList.toggle("hidden", page !== "find-my-rate");
  $("page-reservation-queue").classList.toggle("hidden", page !== "reservation-queue");
  if (page === "reservation-queue") renderReservationQueue();
}

function setFmrView(view) {
  state.fmrView = view;
  $("fmr-search-view").classList.toggle("hidden", view === "results");
  $("fmr-results-view").classList.toggle("hidden", view !== "results");
  $("fmr-breadcrumb").classList.toggle("hidden", view !== "results");
  if (view === "results") showResultsChrome();
}

function pickScenario(memberId) {
  const id = memberId.trim();
  return id === "100987" ? "loyalty" : "simple";
}

function handleSearchSubmit(e) {
  e.preventDefault();
  const memberId = ($("member-id")?.value || $("member-id-results")?.value || "").trim();
  applyScenario(pickScenario(memberId || "100115"));
  setFmrView("results");
  renderRatesTable();
}

function setQuickFilter(value) {
  state.roomSearch = value;
  const input = $("room-quick-filter");
  if (input && input.value !== value) input.value = value;
  renderRatesTable();
}

function initRatesToolbar() {
  const quickFilter = $("room-quick-filter");

  quickFilter?.addEventListener("input", (e) => {
    setQuickFilter(e.target.value);
  });

  quickFilter?.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setQuickFilter("");
      quickFilter.blur();
    }
  });

  $("room-quick-filter-clear")?.addEventListener("click", () => {
    setQuickFilter("");
    quickFilter?.focus();
  });

  $("room-sort")?.addEventListener("change", (e) => {
    state.roomSort = e.target.value;
    renderRatesTable();
  });

}

async function copyToClipboard(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
    const prev = btn.textContent;
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.textContent = prev;
    }, 1500);
  } catch {
    alert(text);
  }
}

function initNavigation() {
  document.querySelectorAll("[data-child-nav]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setPage(link.dataset.childNav);
    });
  });
  if (location.hash === "#reservation-queue") setPage("reservation-queue");
}

function initDatePickers() {
  ["search", "results"].forEach((id) => {
    const el = $(`date-picker-${id}`);
    if (!el) return;
    const picker = new DatePicker(el, {
      onChange: () => {
        if (state.fmrView === "results") renderRatesTable();
      },
    });
    datePickers.push(picker);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initDatePickers();
  initRatesToolbar();
  applyScenario("simple");

  $("search-form")?.addEventListener("submit", handleSearchSubmit);
  $("search-form-results")?.addEventListener("submit", handleSearchSubmit);
  $("btn-new-search")?.addEventListener("click", () => {
    setFmrView("search");
    $("member-id")?.focus();
  });
  $("btn-copy-rate")?.addEventListener("click", () =>
    copyToClipboard($("rate-code").textContent, $("btn-copy-rate"))
  );
  $("btn-copy-fallback-rate")?.addEventListener("click", () =>
    copyToClipboard($("fallback-rate-code").textContent, $("btn-copy-fallback-rate"))
  );

  setPage("find-my-rate");
  setFmrView("search");
  renderReservationQueue();
});
