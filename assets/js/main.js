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
    "coffee_kg_vat": 1478.18,
    "dose_g": 20,
    "shot_cost": 29.56,
    "milk_per_l": 87.28,
    "cup_lid_est": 12.0
  },
  "cogs": {
    "coffee": 24537.84,
    "milk": 12285.53,
    "cups": 7680.0,
    "powder_est": 1024.0,
    "drinks_total": 45527.38,
    "food_zakiriev": 126221.0,
    "total_var": 171748.38
  },
  "markup": {
    "food_pct": 16.5,
    "food_revenue_over_cost": 1.17,
    "drinks_margin_pct": 73.7
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
    "contribution": 155853.62,
    "after_fixed": -58025.18,
    "cm_per_cup": 199.64,
    "cm_per_food": 34.8
  },
  "breakeven": {
    "at_current_mix_factor": 1.37,
    "revenue_needed": 449570.06,
    "cups_month": 878.0,
    "cups_day": 39.9,
    "food_items_month": 823.0,
    "food_items_day": 37.4,
    "cups_only_month": 1071.0,
    "cups_only_day": 48.7
  },
  "drinks": [
    {
      "name": "капучино 450",
      "qty": 140.0,
      "price": 350.0,
      "revenue": 41736.0,
      "shots": 2,
      "milk_ml": 300,
      "cogs": 13623.59,
      "cogs_unit": 97.31,
      "margin_unit": 252.69
    },
    {
      "name": "капучино 350",
      "qty": 151.0,
      "price": 300.0,
      "revenue": 38280.0,
      "shots": 1,
      "milk_ml": 220,
      "cogs": 9175.56,
      "cogs_unit": 60.77,
      "margin_unit": 239.23
    },
    {
      "name": "какао брют 350",
      "qty": 35.0,
      "price": 320.0,
      "revenue": 10356.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 2638.43,
      "cogs_unit": 75.38,
      "margin_unit": 244.62
    },
    {
      "name": "латте 350",
      "qty": 36.0,
      "price": 300.0,
      "revenue": 9890.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 2281.81,
      "cogs_unit": 63.38,
      "margin_unit": 236.62
    },
    {
      "name": "латте 450",
      "qty": 31.0,
      "price": 350.0,
      "revenue": 9265.0,
      "shots": 2,
      "milk_ml": 350,
      "cogs": 3151.94,
      "cogs_unit": 101.68,
      "margin_unit": 248.32
    },
    {
      "name": "горячий шоколад 350",
      "qty": 29.0,
      "price": 350.0,
      "revenue": 8595.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 2186.13,
      "cogs_unit": 75.38,
      "margin_unit": 274.62
    },
    {
      "name": "раф 450",
      "qty": 26.0,
      "price": 304.0,
      "revenue": 8296.0,
      "shots": 2,
      "milk_ml": 280,
      "cogs": 2484.71,
      "cogs_unit": 95.57,
      "margin_unit": 208.43
    },
    {
      "name": "Айс латте",
      "qty": 20.0,
      "price": 280.0,
      "revenue": 5406.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 1267.67,
      "cogs_unit": 63.38,
      "margin_unit": 216.62
    },
    {
      "name": "флет Уайт 350",
      "qty": 17.0,
      "price": 330.0,
      "revenue": 5297.0,
      "shots": 2,
      "milk_ml": 180,
      "cogs": 1476.24,
      "cogs_unit": 86.84,
      "margin_unit": 243.16
    },
    {
      "name": "раф 350",
      "qty": 19.0,
      "price": 340.0,
      "revenue": 5144.0,
      "shots": 1,
      "milk_ml": 200,
      "cogs": 1121.37,
      "cogs_unit": 59.02,
      "margin_unit": 280.98
    },
    {
      "name": "Эспрессо Тоник",
      "qty": 13.0,
      "price": 380.0,
      "revenue": 4406.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 540.33,
      "cogs_unit": 41.56,
      "margin_unit": 338.44
    },
    {
      "name": "капучино 250",
      "qty": 19.0,
      "price": 100.0,
      "revenue": 4170.0,
      "shots": 1,
      "milk_ml": 150,
      "cogs": 1038.46,
      "cogs_unit": 54.66,
      "margin_unit": 45.34
    },
    {
      "name": "матча 350",
      "qty": 14.0,
      "price": 300.0,
      "revenue": 4070.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 999.37,
      "cogs_unit": 71.38,
      "margin_unit": 228.62
    },
    {
      "name": "американо 350",
      "qty": 16.0,
      "price": 220.0,
      "revenue": 3386.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 665.02,
      "cogs_unit": 41.56,
      "margin_unit": 178.44
    },
    {
      "name": "американо 250",
      "qty": 15.0,
      "price": 160.0,
      "revenue": 2564.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 623.46,
      "cogs_unit": 41.56,
      "margin_unit": 118.44
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
      "cogs": 527.69,
      "cogs_unit": 75.38,
      "margin_unit": 176.62
    },
    {
      "name": "флет Уайт 250",
      "qty": 6.0,
      "price": 270.0,
      "revenue": 1563.0,
      "shots": 2,
      "milk_ml": 150,
      "cogs": 505.32,
      "cogs_unit": 84.22,
      "margin_unit": 185.78
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
      "cogs": 166.25,
      "cogs_unit": 41.56,
      "margin_unit": 138.44
    },
    {
      "name": "мокко 350",
      "qty": 2.0,
      "price": 320.0,
      "revenue": 608.0,
      "shots": 1,
      "milk_ml": 250,
      "cogs": 150.77,
      "cogs_unit": 75.38,
      "margin_unit": 244.62
    },
    {
      "name": "американо 450",
      "qty": 2.0,
      "price": 280.0,
      "revenue": 560.0,
      "shots": 2,
      "milk_ml": 0,
      "cogs": 142.25,
      "cogs_unit": 71.13,
      "margin_unit": 208.87
    },
    {
      "name": "какао 450",
      "qty": 2.0,
      "price": 300.0,
      "revenue": 480.0,
      "shots": 1,
      "milk_ml": 350,
      "cogs": 168.22,
      "cogs_unit": 84.11,
      "margin_unit": 215.89
    },
    {
      "name": "Бамбл Кофе 350",
      "qty": 1.0,
      "price": 378.0,
      "revenue": 378.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 41.56,
      "cogs_unit": 41.56,
      "margin_unit": 336.44
    },
    {
      "name": "мокко 450",
      "qty": 1.0,
      "price": 315.0,
      "revenue": 315.0,
      "shots": 2,
      "milk_ml": 350,
      "cogs": 113.68,
      "cogs_unit": 113.68,
      "margin_unit": 201.32
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
      "cogs": 41.56,
      "cogs_unit": 41.56,
      "margin_unit": 22.44
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
    "Доза эспрессо 20 г, зерно Эфиопия Иргачефф 1 478 ₽/кг с НДС (УПД №10066).",
    "Шоты: 250 мл — 1, 350 мл — 1, 450 мл — 2; флэт уайт — 2.",
    "Молоко мл — по согласованной таблице; цена 87,28 ₽/л.",
    "Какао/шоколад/матча — оценка порошка (нет цены в УПД).",
    "Стакан+крышка ~12 ₽/напиток (оценка по УПД).",
    "Весь платёж Закариеву за сентябрь = закуп еды/товаров на точку.",
    "Альтернативное молоко: выручка учтена, себестоимость неизвестна.",
    "ЗП бариста 5 000 ₽/день × 22 дня смен."
  ]
};
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
  "Зерно Эфиопия Иргачефф: 1 478 ₽/кг с НДС (УПД №10066).",
  "Молоко: 87,28 ₽/л.",
  "Весь платёж Закариеву за сентябрь = закуп на точку.",
  "Росгосстрах 160 000 ₽ = аренда сентябрь + октябрь → 80 000 ₽/мес.",
  "ЗП бариста 5 000 ₽/день × дни с продажами."
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
        const max = Math.max(s.fact, s.target) || 1;
        const hF = Math.max(4, Math.round((s.fact / max) * 140));
        const hT = Math.max(4, Math.round((s.target / max) * 140));
        return `<div class="bc-col">
        <div class="bc-bars">
          <div class="bc-bar-wrap"><div class="bc-bar fact" style="height:${hF}px"></div><div class="bc-val">${s.fLab}</div></div>
          <div class="bc-bar-wrap"><div class="bc-bar target" style="height:${hT}px"></div><div class="bc-val">${s.tLab}</div></div>
        </div>
        <div class="bc-label">${s.label}</div>
      </div>`;
      })
      .join("") +
    `<div class="bc-legend"><span><i class="fact"></i>Факт</span><span><i class="target"></i>Норма на ноль</span></div>`;
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
