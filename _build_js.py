# -*- coding: utf-8 -*-
from pathlib import Path
import json

root = Path(__file__).resolve().parent
raw = (root / "data" / "pnl.json").read_text(encoding="utf-8")
# validate
json.loads(raw)

OPEN = [
    {
        "id": "Q1",
        "title": "Число шотов по объёму",
        "now": "Сейчас в модели: 250 мл = 1 шот, 350 мл = 1 шот, 450 мл = 2 шота; флэт уайт = 2 шота.",
        "ask": "Подтвердите или дайте свою таблицу шотов по каждой позиции меню.",
    },
    {
        "id": "Q2",
        "title": "Расход молока (мл) по напиткам",
        "now": "Использована согласованная таблица (капучино 150/220/300, латте 250/350, раф 200/280 и т.д.).",
        "ask": "Если фактический расход другой — пришлите мл по позициям, пересчитаем себестоимость.",
    },
    {
        "id": "Q3",
        "title": "Какао / горячий шоколад / матча / мокко",
        "now": "В УПД цены порошка нет. Оценка: какао/шоколад ~12 ₽/напиток, матча ~8 ₽.",
        "ask": "Сколько грамм и какая закупная цена за кг (или за порцию)?",
    },
    {
        "id": "Q4",
        "title": "Стакан + крышка",
        "now": "Ориентир ~12 ₽ на напиток (по расходникам из УПД).",
        "ask": "Точная себестоимость комплекта по размерам 250 / 350 / 450?",
    },
    {
        "id": "Q5",
        "title": "Альтернативное молоко",
        "now": "Выручка по допу учтена (~7 200 ₽), себестоимость в модели = 0.",
        "ask": "Какая цена за литр / за порцию растительного молока?",
    },
    {
        "id": "Q6",
        "title": "Чай, лимонады, фреш",
        "now": "В себестоимость сейчас заложен только стакан (~12 ₽), без сырья.",
        "ask": "Себестоимость порции чая / лимонада / фреша?",
    },
    {
        "id": "Q7",
        "title": "Раф — состав",
        "now": "Считаем как молочный напиток с указанным мл молока; сливки/сироп отдельно не учтены.",
        "ask": "Есть ли доп. расход (сливки, сироп) и сколько мл/гр на 350 и 450?",
    },
]

CONFIRMED = [
    "Доза эспрессо 20 г.",
    "Зерно Эфиопия Иргачефф: 1 478 ₽/кг с НДС (УПД №10066).",
    "Молоко: 87,28 ₽/л.",
    "Весь платёж Закариеву за сентябрь = закуп на точку.",
    "Росгосстрах 160 000 ₽ = аренда сентябрь + октябрь → 80 000 ₽/мес.",
    "ЗП бариста 5 000 ₽/день × дни с продажами.",
]

tpl = r"""const DATA = __DATA__;
const OPEN = __OPEN__;
const CONFIRMED = __CONFIRMED__;

const fmt = (n, d = 0) =>
  Number(n).toLocaleString("ru-RU", {
    maximumFractionDigits: d,
    minimumFractionDigits: d,
  });
const rub = (n, d = 0) => fmt(n, d) + " \u20bd";

function hBars(items, max) {
  const m = max || Math.max(...items.map((x) => Math.abs(x.value)), 1);
  return items
    .map((x) => {
      const w = Math.max(2, Math.round((Math.abs(x.value) / m) * 100));
      return `<div class="bh-row">
        <div class="bh-label">${x.label}</div>
        <div class="bh-track"><div class="bh-fill ${x.cls || ""}" style="width:${w}%"></div></div>
        <div class="bh-val">${x.lab}</div>
      </div>`;
    })
    .join("");
}

function fillHero(d) {
  const days = d.work_days;
  const targetDay = Math.round(d.breakeven.revenue_needed / days);
  const gapDay = targetDay - d.revenue.avg_day;
  document.getElementById("hero-lead").textContent =
    `Факт: ${rub(d.revenue.avg_day)}/день · ${fmt(d.units.cups_day, 1)} чашек · ${fmt(d.units.food_day, 1)} еды. ` +
    `Норма на ноль: ${rub(targetDay)}/день · ${fmt(d.breakeven.cups_day, 0)} чашек · ${fmt(d.breakeven.food_items_day, 0)} еды. ` +
    `Разрыв ~${rub(Math.round(gapDay))} в день.`;

  document.getElementById("hero-aside").innerHTML = `
    <div class="po-hero__stat"><span class="lbl">Норма / день</span><span class="val gold">${rub(targetDay)}</span></div>
    <div class="po-hero__stat"><span class="lbl">Факт / день</span><span class="val">${rub(d.revenue.avg_day)}</span></div>
    <div class="po-hero__stat"><span class="lbl">Результат сентября</span><span class="val neg">${rub(Math.round(d.result.after_fixed))}</span></div>`;
}

function fillPlan(d) {
  const days = d.work_days;
  const targetDay = Math.round(d.breakeven.revenue_needed / days);
  const gapRev = targetDay - d.revenue.avg_day;
  const gapCups = d.breakeven.cups_day - d.units.cups_day;
  const gapFood = d.breakeven.food_items_day - d.units.food_day;

  document.getElementById("decision-banner").innerHTML = `
    <div><strong>Решение:</strong> держать дневную выручку не ниже ${rub(targetDay)} при том же миксе напитки/еда.</div>
    <div class="po-decision__row">
      <div><span class="lbl">Выручка / день</span><span class="val">${rub(targetDay)}</span></div>
      <div><span class="lbl">Чашек / день</span><span class="val">${fmt(d.breakeven.cups_day, 0)}</span></div>
      <div><span class="lbl">Еда / день</span><span class="val">${fmt(d.breakeven.food_items_day, 0)} шт</span></div>
    </div>`;

  document.getElementById("compare-grid").innerHTML = [
    {
      title: "Выручка в день",
      fact: rub(d.revenue.avg_day),
      target: rub(targetDay),
      gap: `не хватает ${rub(Math.round(gapRev))}`,
    },
    {
      title: "Чашки в день",
      fact: fmt(d.units.cups_day, 1),
      target: fmt(d.breakeven.cups_day, 0),
      gap: `+${fmt(gapCups, 0)} чашек`,
    },
    {
      title: "Еда в день",
      fact: fmt(d.units.food_day, 1) + " шт",
      target: fmt(d.breakeven.food_items_day, 0) + " шт",
      gap: `+${fmt(gapFood, 0)} позиций`,
    },
  ]
    .map(
      (c) => `<div class="po-metric">
      <div class="title">${c.title}</div>
      <div class="pair">
        <div><span>Факт</span><b>${c.fact}</b></div>
        <div><span>Норма</span><b>${c.target}</b></div>
      </div>
      <div class="gap-line">${c.gap}</div>
    </div>`
    )
    .join("");

  const series = [
    {
      label: "Выручка, \u20bd",
      fact: d.revenue.avg_day,
      target: targetDay,
      fLab: rub(d.revenue.avg_day),
      tLab: rub(targetDay),
    },
    {
      label: "Чашки",
      fact: d.units.cups_day,
      target: d.breakeven.cups_day,
      fLab: fmt(d.units.cups_day, 1),
      tLab: fmt(d.breakeven.cups_day, 0),
    },
    {
      label: "Еда, шт",
      fact: d.units.food_day,
      target: d.breakeven.food_items_day,
      fLab: fmt(d.units.food_day, 1),
      tLab: fmt(d.breakeven.food_items_day, 0),
    },
  ];

  document.getElementById("chart-day-compare").innerHTML =
    series
      .map((s) => {
        // Шкала от ~55% максимума — разрыв факт/норма читается сильнее
        const max = Math.max(s.fact, s.target) || 1;
        const floor = max * 0.55;
        const span = Math.max(max - floor, 1);
        const pct = (v) => Math.max(6, Math.round(((v - floor) / span) * 100));
        const pF = pct(s.fact);
        const pT = pct(s.target);
        const gapPct = Math.max(0, Math.round((1 - s.fact / max) * 100));
        return `<div class="bc-col">
        <div class="bc-bars" style="--bc-floor:55%">
          <div class="bc-bar-wrap">
            <div class="bc-track">
              <div class="bc-bar fact" style="height:${pF}%"></div>
            </div>
            <div class="bc-val">${s.fLab}</div>
          </div>
          <div class="bc-bar-wrap">
            <div class="bc-track">
              <div class="bc-bar target" style="height:${pT}%"></div>
            </div>
            <div class="bc-val">${s.tLab}</div>
          </div>
        </div>
        <div class="bc-label">${s.label}</div>
        <div class="bc-gap">разрыв ${gapPct}%</div>
      </div>`;
      })
      .join("") +
    `<div class="bc-legend"><span><i class="fact"></i>Факт</span><span><i class="target"></i>Норма на ноль</span><span class="bc-legend-note">шкала от 55% нормы</span></div>`;
}

function fillGap(d) {
  const days = d.work_days;
  const targetDay = Math.round(d.breakeven.revenue_needed / days);
  document.getElementById("gap-card").innerHTML = `
    <p class="po-kicker">02</p>
    <h3 class="po-detail__title">Что говорит модель</h3>
    <ul class="po-detail__list po-detail__list--plain">
      <li><span>Выручка факт / мес</span><span>${rub(d.revenue.total)}</span></li>
      <li><span>Выручка на ноль / мес</span><span>${rub(Math.round(d.breakeven.revenue_needed))}</span></li>
      <li><span>Разрыв / мес</span><span>${rub(Math.round(d.breakeven.revenue_needed - d.revenue.total))}</span></li>
      <li><span>Разрыв / день</span><span>${rub(Math.round(targetDay - d.revenue.avg_day))}</span></li>
      <li><span>Результат сентября</span><span>${rub(Math.round(d.result.after_fixed))}</span></li>
    </ul>
    <p class="po-note">Без роста еды: только напитки ~${fmt(d.breakeven.cups_only_day, 0)} чашек/день. Множитель к текущему объёму: \u00d7${fmt(d.breakeven.at_current_mix_factor, 2)}.</p>`;

  document.getElementById("chart-revenue-gap").innerHTML = hBars(
    [
      { label: "Факт", value: d.revenue.total, cls: "", lab: rub(d.revenue.total) },
      { label: "Норма", value: d.breakeven.revenue_needed, cls: "accent", lab: rub(Math.round(d.breakeven.revenue_needed)) },
      { label: "Разрыв", value: d.breakeven.revenue_needed - d.revenue.total, cls: "neg", lab: rub(Math.round(d.breakeven.revenue_needed - d.revenue.total)) },
    ],
    d.breakeven.revenue_needed
  );
}

const TIP_VKLAD =
  "Вклад — маржинальная прибыль: выручка минус переменные (зерно, молоко, стаканы, еда). Это то, чем покрываем аренду, ЗП и прочий фикс.";

function tipHtml(id, text) {
  return `<span class="po-tip" data-tip="${id}">
    <button type="button" class="po-tip__btn" aria-label="Пояснение" aria-expanded="false">?</button>
    <span class="po-tip__bubble" role="tooltip">${text}</span>
  </span>`;
}

function bindTips(root) {
  const scope = root || document;
  scope.querySelectorAll(".po-tip").forEach((tip) => {
    if (tip.dataset.bound) return;
    tip.dataset.bound = "1";
    const btn = tip.querySelector(".po-tip__btn");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = tip.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.querySelectorAll(".po-tip.is-open").forEach((other) => {
        if (other !== tip) {
          other.classList.remove("is-open");
          const b = other.querySelector(".po-tip__btn");
          if (b) b.setAttribute("aria-expanded", "false");
        }
      });
    });
  });
}

document.addEventListener("click", () => {
  document.querySelectorAll(".po-tip.is-open").forEach((tip) => {
    tip.classList.remove("is-open");
    const b = tip.querySelector(".po-tip__btn");
    if (b) b.setAttribute("aria-expanded", "false");
  });
});

function fillEconomics(d) {
  const max = d.revenue.total;
  const rows = [
    { label: "Выручка", value: d.revenue.total, cls: "rev", show: d.revenue.total },
    { label: "\u2212 Переменные", value: d.cogs.total_var, cls: "cost", show: d.cogs.total_var },
    {
      label: `= Вклад${tipHtml("vklad-wf", TIP_VKLAD)}`,
      value: d.result.contribution,
      cls: "cm",
      show: d.result.contribution,
    },
    { label: "\u2212 Фикс", value: d.fixed.total, cls: "fix", show: d.fixed.total },
    {
      label: "= Результат",
      value: Math.abs(d.result.after_fixed),
      cls: d.result.after_fixed < 0 ? "result-neg" : "result-pos",
      show: d.result.after_fixed,
    },
  ];
  document.getElementById("chart-waterfall").innerHTML = rows
    .map((r) => {
      const w = Math.max(3, Math.round((r.value / max) * 100));
      return `<div class="wf-row">
        <div class="wf-label">${r.label}</div>
        <div class="wf-track"><div class="wf-fill ${r.cls}" style="width:${w}%"></div></div>
        <div class="wf-val">${rub(Math.round(r.show))}</div>
      </div>`;
    })
    .join("");
  bindTips(document.getElementById("chart-waterfall"));

  document.getElementById("chart-rev-mix").innerHTML = hBars(
    [
      { label: "Напитки", value: d.revenue.drinks, cls: "accent", lab: rub(d.revenue.drinks) },
      { label: "Еда", value: d.revenue.food, cls: "", lab: rub(d.revenue.food) },
      { label: "Допы", value: d.revenue.addons, cls: "soft", lab: rub(d.revenue.addons) },
    ],
    d.revenue.total
  );

  const f = d.fixed;
  document.getElementById("chart-fixed").innerHTML = hBars(
    [
      { label: "Бариста", value: f.barista_total, cls: "accent", lab: rub(f.barista_total) },
      { label: "Аренда", value: f.rent, cls: "", lab: rub(f.rent) },
      { label: "Кофемашина", value: f.machine, cls: "soft", lab: rub(f.machine) },
      { label: "Касса + интернет", value: f.kassa + f.internet, cls: "soft", lab: rub(Math.round(f.kassa + f.internet)) },
    ],
    f.total
  );
}

function fillMix(d) {
  const drinks = [...d.drinks].sort((a, b) => b.qty - a.qty).slice(0, 8);
  document.getElementById("chart-drinks").innerHTML = hBars(
    drinks.map((x, i) => ({
      label: x.name,
      value: x.qty,
      cls: i < 2 ? "accent" : "",
      lab: fmt(x.qty) + " шт",
    })),
    drinks[0]?.qty || 1
  );

  const food = [...d.food].sort((a, b) => b.qty - a.qty);
  document.getElementById("chart-food").innerHTML = hBars(
    food.map((x, i) => ({
      label: x.name,
      value: x.qty,
      cls: i < 2 ? "accent" : "",
      lab: fmt(x.qty) + " шт",
    })),
    food[0]?.qty || 1
  );
}

function fillOpen() {
  document.getElementById("open-questions").innerHTML = OPEN.map(
    (q) => `<article class="po-q">
      <span class="po-q__id">${q.id}</span>
      <div>
        <h3 class="po-q__title">${q.title}</h3>
        <p class="po-q__now"><strong>В модели сейчас:</strong> ${q.now}</p>
        <p class="po-q__ask">Уточнить: ${q.ask}</p>
      </div>
    </article>`
  ).join("");

  document.getElementById("confirmed-card").innerHTML = `
    <p class="po-kicker">Зафиксировано</p>
    <h3 class="po-detail__title">Не трогаем без новой вводной</h3>
    <ul class="po-detail__list">${CONFIRMED.map((x) => `<li>${x}</li>`).join("")}</ul>`;

  document.getElementById("impact-card").innerHTML = `
    <p class="po-kicker">Зачем уточнять</p>
    <h3 class="po-detail__title">Влияние на расчёт</h3>
    <ul class="po-detail__list">
      <li>Q1–Q2 напрямую меняют себестоимость чашки и маржу напитков.</li>
      <li>Q3–Q7 двигают переменные → вклад → норму выручки на день.</li>
      <li>После ответов бариста пересчитаем блок «План дня» и точку безубыточности.</li>
    </ul>`;
}

function fillTables(d) {
  document.querySelector("#tbl-drinks tbody").innerHTML = d.drinks
    .map(
      (x) =>
        `<tr><td>${x.name}</td><td class="num">${fmt(x.qty)}</td><td class="num">${rub(x.revenue)}</td><td class="num">${rub(x.cogs)}</td><td class="num">${rub(x.margin_unit)}</td></tr>`
    )
    .join("");

  document.querySelector("#tbl-food tbody").innerHTML =
    d.food
      .map(
        (x) =>
          `<tr><td>${x.name}</td><td class="num">${fmt(x.qty)}</td><td class="num">${rub(x.revenue)}</td></tr>`
      )
      .join("") +
    `<tr><td><strong>Итого еда</strong></td><td class="num"><strong>${fmt(d.units.food_items)}</strong></td><td class="num"><strong>${rub(d.revenue.food)}</strong></td></tr>` +
    `<tr><td colspan="2">Закуп Закариеву</td><td class="num">${rub(d.cogs.food_zakiriev)}</td></tr>` +
    `<tr><td colspan="2">Наценка к закупу</td><td class="num">${fmt(d.markup.food_pct, 1)} %</td></tr>`;
}

fillHero(DATA);
fillPlan(DATA);
fillGap(DATA);
fillEconomics(DATA);
fillMix(DATA);
fillOpen();
fillTables(DATA);

// tips in static HTML (section lead)
document.querySelectorAll('.po-tip[data-tip="vklad"]').forEach((el) => {
  if (el.querySelector(".po-tip__btn")) return;
  el.outerHTML = tipHtml("vklad", TIP_VKLAD);
});
bindTips(document);
"""

out = root / "assets" / "js" / "main.js"
out.write_text(
    tpl.replace("__DATA__", raw)
    .replace("__OPEN__", json.dumps(OPEN, ensure_ascii=False, indent=2))
    .replace("__CONFIRMED__", json.dumps(CONFIRMED, ensure_ascii=False, indent=2)),
    encoding="utf-8",
)
print("wrote", out, out.stat().st_size)
