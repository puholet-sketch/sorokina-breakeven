const DATA = {
  "period": "сентябрь 2026",
  "point": "Кофейня в БЦ, 2й этаж (ИП Сорокина)",
  "work_days": 22,
  "revenue": {
    "total": 327602.0,
    "avg_day": 14891.0,
    "drinks": 173300.0,
    "food": 147102.0,
    "addons": 7200.0
  },
  "units": {
    "cups": 640.0,
    "cups_day": 29.1,
    "food_items": 600.0,
    "food_day": 27.3
  },
  "prices": {
    "coffee_kg_vat": 1700.0,
    "dose_g": 20,
    "shot_cost": 34.0,
    "milk_per_l": 87.28,
    "cup_lid_est": 12.0
  },
  "cogs": {
    "coffee": 28220.0,
    "milk": 12285.53,
    "cups": 7680.0,
    "powder_est": 1024.0,
    "drinks_total": 49209.53,
    "food_zakiriev": 126221.0,
    "total_var": 175430.53
  },
  "markup": {
    "food_pct": 16.5,
    "food_revenue_over_cost": 1.17,
    "drinks_margin_pct": 71.6
  },
  "fixed": {
    "rent": 80000,
    "machine": 20000,
    "kassa": 2000,
    "internet": 1878.8,
    "barista_day": 5000,
    "barista_days": 22,
    "barista_total": 110000,
    "total": 213878.8,
    "note_rent": "80 000 ₽ сентябрь (из 160 000 ₽ Росгосстрах = сен+окт)",
    "note_barista": "5 000 ₽/день × дни с продажами"
  },
  "result": {
    "contribution": 152171.47,
    "after_fixed": -61707.33,
    "cm_per_cup": 193.89,
    "cm_per_food": 34.8
  },
  "breakeven": {
    "at_current_mix_factor": 1.41,
    "revenue_needed": 460448.48,
    "cups_month": 900.0,
    "cups_day": 40.9,
    "food_items_month": 843.0,
    "food_items_day": 38.4,
    "cups_only_month": 995.0,
    "cups_only_day": 45.3
  },
  "drinks": [
    {
      "name": "капучино 450",
      "qty": 140.0,
      "price": 350.0,
      "revenue": 41736.0,
      "shots": 2,
      "milk_ml": 300,
      "cogs": 14866.79,
      "cogs_unit": 106.19,
      "margin_unit": 243.81
    },
    {
      "name": "капучино 350",
      "qty": 151.0,
      "price": 300.0,
      "revenue": 38280.0,
      "shots": 1,
      "milk_ml": 220,
      "cogs": 9846.0,
      "cogs_unit": 65.21,
      "margin_unit": 234.79
    },
    {
      "name": "какао брют 350",
      "qty": 35.0,
      "price": 320.0,
      "revenue": 10356.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 2793.83,
      "cogs_unit": 79.82,
      "margin_unit": 240.18
    },
    {
      "name": "латте 350",
      "qty": 36.0,
      "price": 300.0,
      "revenue": 9890.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 2441.65,
      "cogs_unit": 67.82,
      "margin_unit": 232.18
    },
    {
      "name": "латте 450",
      "qty": 31.0,
      "price": 350.0,
      "revenue": 9265.0,
      "shots": 2,
      "milk_ml": 350,
      "cogs": 3427.22,
      "cogs_unit": 110.56,
      "margin_unit": 239.44
    },
    {
      "name": "горячий шоколад 350",
      "qty": 29.0,
      "price": 350.0,
      "revenue": 8595.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 2314.89,
      "cogs_unit": 79.82,
      "margin_unit": 270.18
    },
    {
      "name": "раф 450",
      "qty": 26.0,
      "price": 304.0,
      "revenue": 8296.0,
      "shots": 2,
      "milk_ml": 280,
      "cogs": 2715.59,
      "cogs_unit": 104.45,
      "margin_unit": 199.55
    },
    {
      "name": "Айс латте",
      "qty": 20.0,
      "price": 280.0,
      "revenue": 5406.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 1356.47,
      "cogs_unit": 67.82,
      "margin_unit": 212.18
    },
    {
      "name": "флет Уайт 350",
      "qty": 17.0,
      "price": 330.0,
      "revenue": 5297.0,
      "shots": 2,
      "milk_ml": 180,
      "cogs": 1627.2,
      "cogs_unit": 95.72,
      "margin_unit": 234.28
    },
    {
      "name": "раф 350",
      "qty": 19.0,
      "price": 340.0,
      "revenue": 5144.0,
      "shots": 1,
      "milk_ml": 200,
      "cogs": 1205.73,
      "cogs_unit": 63.46,
      "margin_unit": 276.54
    },
    {
      "name": "Эспрессо Тоник",
      "qty": 13.0,
      "price": 380.0,
      "revenue": 4406.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 598.05,
      "cogs_unit": 46.0,
      "margin_unit": 334.0
    },
    {
      "name": "капучино 250",
      "qty": 19.0,
      "price": 100.0,
      "revenue": 4170.0,
      "shots": 1,
      "milk_ml": 150,
      "cogs": 1122.82,
      "cogs_unit": 59.1,
      "margin_unit": 40.9
    },
    {
      "name": "матча 350",
      "qty": 14.0,
      "price": 300.0,
      "revenue": 4070.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 1061.53,
      "cogs_unit": 75.82,
      "margin_unit": 224.18
    },
    {
      "name": "американо 350",
      "qty": 16.0,
      "price": 220.0,
      "revenue": 3386.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 736.06,
      "cogs_unit": 46.0,
      "margin_unit": 174.0
    },
    {
      "name": "американо 250",
      "qty": 15.0,
      "price": 160.0,
      "revenue": 2564.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 690.06,
      "cogs_unit": 46.0,
      "margin_unit": 114.0
    },
    {
      "name": "Китайский чай",
      "qty": 11.0,
      "price": 200.0,
      "revenue": 1920.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 132.0,
      "cogs_unit": 12.0,
      "margin_unit": 188.0
    },
    {
      "name": "какао 350",
      "qty": 7.0,
      "price": 252.0,
      "revenue": 1618.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 558.77,
      "cogs_unit": 79.82,
      "margin_unit": 172.18
    },
    {
      "name": "флет Уайт 250",
      "qty": 6.0,
      "price": 270.0,
      "revenue": 1563.0,
      "shots": 2,
      "milk_ml": 150,
      "cogs": 558.6,
      "cogs_unit": 93.1,
      "margin_unit": 176.9
    },
    {
      "name": "Фреш 350 мл",
      "qty": 4.0,
      "price": 280.0,
      "revenue": 1353.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 48.0,
      "cogs_unit": 12.0,
      "margin_unit": 268.0
    },
    {
      "name": "Чай Эрл Грей",
      "qty": 10.0,
      "price": 130.0,
      "revenue": 1300.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 120.0,
      "cogs_unit": 12.0,
      "margin_unit": 118.0
    },
    {
      "name": "Лимонады",
      "qty": 5.0,
      "price": 224.0,
      "revenue": 1116.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 60.0,
      "cogs_unit": 12.0,
      "margin_unit": 212.0
    },
    {
      "name": "эспрессо",
      "qty": 4.0,
      "price": 180.0,
      "revenue": 720.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 184.01,
      "cogs_unit": 46.0,
      "margin_unit": 134.0
    },
    {
      "name": "мокко 350",
      "qty": 2.0,
      "price": 320.0,
      "revenue": 608.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 159.65,
      "cogs_unit": 79.83,
      "margin_unit": 240.17
    },
    {
      "name": "американо 450",
      "qty": 2.0,
      "price": 280.0,
      "revenue": 560.0,
      "shots": 2,
      "milk_ml": 0,
      "cogs": 160.01,
      "cogs_unit": 80.0,
      "margin_unit": 200.0
    },
    {
      "name": "какао 450",
      "qty": 2.0,
      "price": 300.0,
      "revenue": 480.0,
      "shots": 1,
      "milk_ml": 350,
      "cogs": 177.1,
      "cogs_unit": 88.55,
      "margin_unit": 211.45
    },
    {
      "name": "Бамбл Кофе 350",
      "qty": 1.0,
      "price": 378.0,
      "revenue": 378.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 46.0,
      "cogs_unit": 46.0,
      "margin_unit": 332.0
    },
    {
      "name": "мокко 450",
      "qty": 1.0,
      "price": 315.0,
      "revenue": 315.0,
      "shots": 2,
      "milk_ml": 350,
      "cogs": 122.56,
      "cogs_unit": 122.56,
      "margin_unit": 192.44
    },
    {
      "name": "Чай Чабрец",
      "qty": 2.0,
      "price": 130.0,
      "revenue": 260.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 24.0,
      "cogs_unit": 12.0,
      "margin_unit": 118.0
    },
    {
      "name": "Травяной чай",
      "qty": 1.0,
      "price": 184.0,
      "revenue": 184.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 12.0,
      "cogs_unit": 12.0,
      "margin_unit": 172.0
    },
    {
      "name": "Доп Эспрессо",
      "qty": 1.0,
      "price": 64.0,
      "revenue": 64.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 46.0,
      "cogs_unit": 46.0,
      "margin_unit": 18.0
    }
  ],
  "food": [
    {
      "name": "Сэндвичи",
      "qty": 213.0,
      "price": 300.0,
      "revenue": 53630.0
    },
    {
      "name": "Горячее",
      "qty": 115.0,
      "price": 370.0,
      "revenue": 36800.0
    },
    {
      "name": "Роллы",
      "qty": 102.0,
      "price": 300.0,
      "revenue": 26190.0
    },
    {
      "name": "Печенье",
      "qty": 61.0,
      "price": 150.0,
      "revenue": 8010.0
    },
    {
      "name": "Завтраки",
      "qty": 31.0,
      "price": 216.0,
      "revenue": 6980.0
    },
    {
      "name": "Круассаны",
      "qty": 30.0,
      "price": 250.0,
      "revenue": 6214.0
    },
    {
      "name": "Салаты",
      "qty": 19.0,
      "price": 320.0,
      "revenue": 5208.0
    },
    {
      "name": "Трубочка со сгущенкой",
      "qty": 23.0,
      "price": 150.0,
      "revenue": 3035.0
    },
    {
      "name": "Чиабатта",
      "qty": 2.0,
      "price": 350.0,
      "revenue": 550.0
    },
    {
      "name": "Сочник",
      "qty": 4.0,
      "price": 135.0,
      "revenue": 485.0
    }
  ],
  "assumptions": [
    "Доза эспрессо 20 г, зерно 1 700 ₽/кг.",
    "Шоты: 250 мл — 1, 350 мл — 1, 450 мл — 2; флэт уайт — 2.",
    "Молоко мл — по согласованной таблице; цена 87,28 ₽/л.",
    "Какао/шоколад/матча — оценка порошка (нет цены в УПД).",
    "Стакан+крышка ~12 ₽/напиток (оценка по УПД).",
    "Весь платёж Закариеву за сентябрь = закуп еды/товаров на точку.",
    "Альтернативное молоко: выручка учтена, себестоимость неизвестна.",
    "ЗП бариста 5 000 ₽/день × 22 дня смен."
  ]
}
;
const OPEN = [
  {
    "id": "Q1",
    "title": "Число шотов по объёму",
    "now": "Сейчас в модели: 250 мл = 1 шот, 350 мл = 1 шот, 450 мл = 2 шота; флэт уайт = 2 шота.",
    "ask": "Подтвердите или дайте свою таблицу шотов по каждой позиции меню."
  },
  {
    "id": "Q2",
    "title": "Расход молока (мл) по напиткам",
    "now": "Использована согласованная таблица (капучино 150/220/300, латте 250/350, раф 200/280 и т.д.).",
    "ask": "Если фактический расход другой — пришлите мл по позициям, пересчитаем себестоимость."
  },
  {
    "id": "Q3",
    "title": "Какао / горячий шоколад / матча / мокко",
    "now": "В УПД цены порошка нет. Оценка: какао/шоколад ~12 ₽/напиток, матча ~8 ₽.",
    "ask": "Сколько грамм и какая закупная цена за кг (или за порцию)?"
  },
  {
    "id": "Q4",
    "title": "Стакан + крышка",
    "now": "Ориентир ~12 ₽ на напиток (по расходникам из УПД).",
    "ask": "Точная себестоимость комплекта по размерам 250 / 350 / 450?"
  },
  {
    "id": "Q5",
    "title": "Альтернативное молоко",
    "now": "Выручка по допу учтена (~7 200 ₽), себестоимость в модели = 0.",
    "ask": "Какая цена за литр / за порцию растительного молока?"
  },
  {
    "id": "Q6",
    "title": "Чай, лимонады, фреш",
    "now": "В себестоимость сейчас заложен только стакан (~12 ₽), без сырья.",
    "ask": "Себестоимость порции чая / лимонада / фреша?"
  },
  {
    "id": "Q7",
    "title": "Раф — состав",
    "now": "Считаем как молочный напиток с указанным мл молока; сливки/сироп отдельно не учтены.",
    "ask": "Есть ли доп. расход (сливки, сироп) и сколько мл/гр на 350 и 450?"
  }
];
const CONFIRMED = [
  "Доза эспрессо 20 г.",
  "Зерно: 1 700 ₽/кг.",
  "Молоко: 87,28 ₽/л.",
  "Весь платёж Закариеву за сентябрь = закуп на точку.",
  "Росгосстрах 160 000 ₽ = аренда сентябрь + октябрь → 80 000 ₽/мес.",
  "ЗП сотрудника точки 5 000 ₽/день × дни с продажами."
];

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

const ANSWERS_URL = "data/barista-answers.json";
const ANSWERS_LS_KEY = "sorokina_employee_answers_v1";

function fillOpen() {
  document.getElementById("open-questions").innerHTML = OPEN.map(
    (q) => `<article class="po-q">
      <span class="po-q__id">${q.id}</span>
      <div class="po-q__body">
        <h3 class="po-q__title">${q.title}</h3>
        <p class="po-q__now">${q.now}</p>
        <p class="po-q__ask"><strong>Нужно уточнить:</strong> ${q.ask}</p>
        <label class="po-field po-field--block">
          <span class="po-field__label">Пишите ответ сюда</span>
          <textarea id="ans-${q.id}" name="${q.id}" rows="4" placeholder="Например: подтверждаю / или свои цифры…"></textarea>
        </label>
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
      <li>После ответов сотрудника пересчитаем блок «План дня» и точку безубыточности.</li>
    </ul>`;
}

function collectAnswers() {
  const answers = {};
  OPEN.forEach((q) => {
    const el = document.getElementById(`ans-${q.id}`);
    answers[q.id] = el ? el.value.trim() : "";
  });
  return {
    updated_at: new Date().toISOString(),
    updated_by: (document.getElementById("ans-name")?.value || "").trim() || "сотрудник",
    answers,
  };
}

function applyAnswers(payload) {
  if (!payload) return;
  if (payload.updated_by) {
    const name = document.getElementById("ans-name");
    if (name) name.value = payload.updated_by === "сотрудник" ? "" : payload.updated_by;
  }
  const answers = payload.answers || {};
  OPEN.forEach((q) => {
    const el = document.getElementById(`ans-${q.id}`);
    if (el && answers[q.id] != null) el.value = answers[q.id];
  });
}

function setSaveStatus(text, kind) {
  const el = document.getElementById("save-status");
  if (!el) return;
  el.textContent = text;
  el.dataset.kind = kind || "";
}

async function loadAnswers() {
  let remote = null;
  try {
    const res = await fetch(`${ANSWERS_URL}?t=${Date.now()}`, { cache: "no-store" });
    if (res.ok) remote = await res.json();
  } catch (_) {}

  let local = null;
  try {
    local = JSON.parse(localStorage.getItem(ANSWERS_LS_KEY) || "null");
  } catch (_) {}

  const remoteTs = remote?.updated_at ? Date.parse(remote.updated_at) : 0;
  const localTs = local?.updated_at ? Date.parse(local.updated_at) : 0;
  const best = localTs > remoteTs ? local : remote;
  if (best && best.answers) {
    applyAnswers(best);
    if (best.updated_at) {
      const when = new Date(best.updated_at).toLocaleString("ru-RU");
      setSaveStatus(`Загружены ответы от ${best.updated_by || "сотрудника"} · ${when}`, "ok");
    }
  }
}

function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

async function saveAnswersToGitHub(payload) {
  const cfg = window.SOROKINA_SAVE || {};
  const token = cfg.token;
  if (!token) throw new Error("Нет токена сохранения (config.js)");

  const owner = cfg.owner || "puholet-sketch";
  const repo = cfg.repo || "sorokina-breakeven";
  const path = cfg.path || "data/barista-answers.json";
  const api = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };

  let sha;
  const cur = await fetch(api, { headers });
  if (cur.ok) {
    const j = await cur.json();
    sha = j.sha;
  }

  const body = {
    message: "Update employee answers from point form.",
    content: utf8ToBase64(JSON.stringify(payload, null, 2) + "\n"),
    branch: cfg.branch || "main",
  };
  if (sha) body.sha = sha;

  const put = await fetch(api, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!put.ok) {
    const err = await put.text();
    throw new Error(`GitHub ${put.status}: ${err.slice(0, 180)}`);
  }
}

async function saveAnswersToMail(payload) {
  const res = await fetch("https://formsubmit.co/ajax/sorvanovon@yandex.ru", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: "Сорокина: ответы сотрудника",
      _template: "box",
      _captcha: "false",
      name: payload.updated_by,
      updated_at: payload.updated_at,
      answers_json: JSON.stringify(payload.answers, null, 2),
      ...payload.answers,
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`mail ${res.status}: ${t.slice(0, 120)}`);
  }
}

function bindEmployeeForm() {
  const form = document.getElementById("employee-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.getElementById("btn-save-answers");
    const payload = collectAnswers();
    const filled = Object.values(payload.answers).filter(Boolean).length;
    if (!filled) {
      setSaveStatus("Заполните хотя бы одно поле ответа.", "err");
      return;
    }
    localStorage.setItem(ANSWERS_LS_KEY, JSON.stringify(payload));
    if (btn) btn.disabled = true;
    setSaveStatus("Сохраняю…", "");
    let githubOk = false;
    let mailOk = false;
    let errMsg = "";
    try {
      if (window.SOROKINA_SAVE && window.SOROKINA_SAVE.token) {
        await saveAnswersToGitHub(payload);
        githubOk = true;
      }
    } catch (err) {
      errMsg = err.message;
    }
    try {
      await saveAnswersToMail(payload);
      mailOk = true;
    } catch (err) {
      if (!errMsg) errMsg = err.message;
    }
    const when = new Date(payload.updated_at).toLocaleString("ru-RU");
    if (githubOk) {
      setSaveStatus(`Сохранено на сервере · ${when}. Можно перезаписать позже.`, "ok");
    } else if (mailOk) {
      setSaveStatus(`Сохранено (почта + этот браузер) · ${when}. Можно перезаписать позже.`, "ok");
    } else {
      setSaveStatus(`Сохранено только в этом браузере. Сервер: ${errMsg || "ошибка"}`, "err");
    }
    if (btn) btn.disabled = false;
  });
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
bindEmployeeForm();
loadAnswers();

// tips in static HTML (section lead)
document.querySelectorAll('.po-tip[data-tip="vklad"]').forEach((el) => {
  if (el.querySelector(".po-tip__btn")) return;
  el.outerHTML = tipHtml("vklad", TIP_VKLAD);
});
bindTips(document);
