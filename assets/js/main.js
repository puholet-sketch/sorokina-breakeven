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
    "cup_lid_est": 12.0,
    "cocoa_kg": 1800.0,
    "cocoa_g_est": 15.0,
    "cocoa_per_drink": 27.0,
    "alt_milk_per_l": 166.0,
    "fresh_portion": 100.0,
    "tea_portion": 15.0,
    "raf_syrup_kg_est": 500.0
  },
  "cogs": {
    "coffee": 35904.0,
    "milk": 12285.53,
    "cups": 7680.0,
    "powder_est": 3504.0,
    "raf_syrup_est": 580.0,
    "alt_milk_est": 1992.0,
    "drinks_total": 59373.53,
    "food_zakiriev": 126221.0,
    "total_var": 187586.53
  },
  "markup": {
    "food_pct": 16.5,
    "food_revenue_over_cost": 1.17,
    "drinks_margin_pct": 65.7
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
    "contribution": 140015.47,
    "after_fixed": -73863.33,
    "cm_per_cup": 178.01,
    "cm_per_food": 34.8
  },
  "breakeven": {
    "at_current_mix_factor": 1.53,
    "revenue_needed": 500424.16,
    "cups_month": 978.0,
    "cups_day": 44.4,
    "food_items_month": 917.0,
    "food_items_day": 41.7,
    "cups_only_month": 1201.0,
    "cups_only_day": 54.6
  },
  "drinks": [
    {
      "name": "капучино 450",
      "qty": 140.0,
      "price": 350.0,
      "revenue": 41736.0,
      "shots": 2,
      "milk_ml": 300,
      "cogs": 14865.76,
      "cogs_unit": 106.18,
      "margin_unit": 243.82
    },
    {
      "name": "капучино 350",
      "qty": 151.0,
      "price": 300.0,
      "revenue": 38280.0,
      "shots": 2,
      "milk_ml": 220,
      "cogs": 14979.44,
      "cogs_unit": 99.2,
      "margin_unit": 200.8
    },
    {
      "name": "какао брют 350",
      "qty": 35.0,
      "price": 320.0,
      "revenue": 10356.0,
      "shots": 0,
      "milk_ml": 250,
      "cogs": 2128.7,
      "cogs_unit": 60.82,
      "margin_unit": 259.18
    },
    {
      "name": "латте 350",
      "qty": 36.0,
      "price": 300.0,
      "revenue": 9890.0,
      "shots": 2,
      "milk_ml": 250,
      "cogs": 3665.52,
      "cogs_unit": 101.82,
      "margin_unit": 198.18
    },
    {
      "name": "латте 450",
      "qty": 31.0,
      "price": 350.0,
      "revenue": 9265.0,
      "shots": 2,
      "milk_ml": 350,
      "cogs": 3426.99,
      "cogs_unit": 110.55,
      "margin_unit": 239.45
    },
    {
      "name": "горячий шоколад 350",
      "qty": 29.0,
      "price": 350.0,
      "revenue": 8595.0,
      "shots": 0,
      "milk_ml": 250,
      "cogs": 1763.78,
      "cogs_unit": 60.82,
      "margin_unit": 289.18
    },
    {
      "name": "раф 450",
      "qty": 26.0,
      "price": 304.0,
      "revenue": 8296.0,
      "shots": 2,
      "milk_ml": 280,
      "cogs": 3105.4,
      "cogs_unit": 119.44,
      "margin_unit": 184.56
    },
    {
      "name": "Айс латте",
      "qty": 20.0,
      "price": 280.0,
      "revenue": 5406.0,
      "shots": 2,
      "milk_ml": 250,
      "cogs": 2036.4,
      "cogs_unit": 101.82,
      "margin_unit": 178.18
    },
    {
      "name": "флет Уайт 350",
      "qty": 17.0,
      "price": 330.0,
      "revenue": 5297.0,
      "shots": 4,
      "milk_ml": 180,
      "cogs": 2783.08,
      "cogs_unit": 163.71,
      "margin_unit": 166.29
    },
    {
      "name": "раф 350",
      "qty": 19.0,
      "price": 340.0,
      "revenue": 5144.0,
      "shots": 2,
      "milk_ml": 200,
      "cogs": 2041.66,
      "cogs_unit": 107.46,
      "margin_unit": 232.54
    },
    {
      "name": "Эспрессо Тоник",
      "qty": 13.0,
      "price": 380.0,
      "revenue": 4406.0,
      "shots": 1,
      "milk_ml": 0,
      "cogs": 598.0,
      "cogs_unit": 46.0,
      "margin_unit": 334.0
    },
    {
      "name": "капучино 250",
      "qty": 19.0,
      "price": 100.0,
      "revenue": 4170.0,
      "shots": 2,
      "milk_ml": 150,
      "cogs": 1768.75,
      "cogs_unit": 93.09,
      "margin_unit": 6.91
    },
    {
      "name": "матча 350",
      "qty": 14.0,
      "price": 300.0,
      "revenue": 4070.0,
      "shots": 0,
      "milk_ml": 250,
      "cogs": 585.48,
      "cogs_unit": 41.82,
      "margin_unit": 258.18
    },
    {
      "name": "американо 350",
      "qty": 16.0,
      "price": 220.0,
      "revenue": 3386.0,
      "shots": 2,
      "milk_ml": 0,
      "cogs": 1280.0,
      "cogs_unit": 80.0,
      "margin_unit": 140.0
    },
    {
      "name": "американо 250",
      "qty": 15.0,
      "price": 160.0,
      "revenue": 2564.0,
      "shots": 2,
      "milk_ml": 0,
      "cogs": 1200.0,
      "cogs_unit": 80.0,
      "margin_unit": 80.0
    },
    {
      "name": "Китайский чай",
      "qty": 11.0,
      "price": 200.0,
      "revenue": 1920.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 297.0,
      "cogs_unit": 27.0,
      "margin_unit": 173.0
    },
    {
      "name": "какао 350",
      "qty": 7.0,
      "price": 252.0,
      "revenue": 1618.0,
      "shots": 0,
      "milk_ml": 250,
      "cogs": 425.74,
      "cogs_unit": 60.82,
      "margin_unit": 191.18
    },
    {
      "name": "флет Уайт 250",
      "qty": 6.0,
      "price": 270.0,
      "revenue": 1563.0,
      "shots": 2,
      "milk_ml": 150,
      "cogs": 558.55,
      "cogs_unit": 93.09,
      "margin_unit": 176.91
    },
    {
      "name": "Фреш 350 мл",
      "qty": 4.0,
      "price": 280.0,
      "revenue": 1353.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 448.0,
      "cogs_unit": 112.0,
      "margin_unit": 168.0
    },
    {
      "name": "Чай Эрл Грей",
      "qty": 10.0,
      "price": 130.0,
      "revenue": 1300.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 270.0,
      "cogs_unit": 27.0,
      "margin_unit": 103.0
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
      "cogs": 184.0,
      "cogs_unit": 46.0,
      "margin_unit": 134.0
    },
    {
      "name": "мокко 350",
      "qty": 2.0,
      "price": 320.0,
      "revenue": 608.0,
      "shots": 2,
      "milk_ml": 250,
      "cogs": 257.64,
      "cogs_unit": 128.82,
      "margin_unit": 191.18
    },
    {
      "name": "американо 450",
      "qty": 2.0,
      "price": 280.0,
      "revenue": 560.0,
      "shots": 2,
      "milk_ml": 0,
      "cogs": 160.0,
      "cogs_unit": 80.0,
      "margin_unit": 200.0
    },
    {
      "name": "какао 450",
      "qty": 2.0,
      "price": 300.0,
      "revenue": 480.0,
      "shots": 0,
      "milk_ml": 350,
      "cogs": 139.1,
      "cogs_unit": 69.55,
      "margin_unit": 230.45
    },
    {
      "name": "Бамбл Кофе 350",
      "qty": 1.0,
      "price": 378.0,
      "revenue": 378.0,
      "shots": 2,
      "milk_ml": 0,
      "cogs": 80.0,
      "cogs_unit": 80.0,
      "margin_unit": 298.0
    },
    {
      "name": "мокко 450",
      "qty": 1.0,
      "price": 315.0,
      "revenue": 315.0,
      "shots": 2,
      "milk_ml": 350,
      "cogs": 137.55,
      "cogs_unit": 137.55,
      "margin_unit": 177.45
    },
    {
      "name": "Чай Чабрец",
      "qty": 2.0,
      "price": 130.0,
      "revenue": 260.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 54.0,
      "cogs_unit": 27.0,
      "margin_unit": 103.0
    },
    {
      "name": "Травяной чай",
      "qty": 1.0,
      "price": 184.0,
      "revenue": 184.0,
      "shots": 0,
      "milk_ml": 0,
      "cogs": 27.0,
      "cogs_unit": 27.0,
      "margin_unit": 157.0
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
    "Доза эспрессо 20 г, зерно 1 700 ₽/кг (подтверждено).",
    "Шоты (Андрей 01.10): 250 мл = 2, 350 мл = 2, флэт уайт 350 = 4; 450 мл = 2; флэт 250 = 2.",
    "Эспрессо / доп. эспрессо / эспрессо-тоник = 1 шот (размер не указан).",
    "Айс латте = 2 шота (как 350-класс). Какао/шоколад/матча = 0 шотов эспрессо.",
    "Молоко мл — подтверждено Андреем; цена 87,28 ₽/л.",
    "Какао/шоколад/мокко: 1 800 ₽/кг × ~15 г ≈ 27 ₽/напиток (граммы — оценка).",
    "Матча — прежняя оценка ~8 ₽/напиток (новых данных нет).",
    "Стакан+крышка ~12 ₽ (подтверждено).",
    "Альт. молоко 166 ₽/л; qty≈выручка/60₽, порция ~100 мл → COGS ~1992 ₽.",
    "Фреш 100 ₽/порция; чай 15 ₽/порция (Андрей).",
    "Лимонады: сырьё неизвестно → только стакан 12 ₽.",
    "Сироп раф: 20 г@350 / 30 г@450; цена сиропа оценка 500 ₽/кг (нет факта).",
    "Весь платёж Закариеву за сентябрь = закуп еды/товаров на точку.",
    "ЗП бариста 5 000 ₽/день × 22 дня смен."
  ],
  "addons_detail": {
    "name": "альтернативное молоко",
    "revenue": 7200.0,
    "price_est_per_addon": 60.0,
    "qty_est": 120.0,
    "portion_ml_est": 100.0,
    "liters_est": 12.0,
    "cogs_est": 1992.0
  }
}
;
const OPEN = [
  {
    "id": "Q3",
    "title": "Граммы какао / матча",
    "now": "Какао и горячий шоколад: 1 800 ₽/кг. В модели ~15 г ≈ 27 ₽/напиток. Матча ~8 ₽ — оценка без ₽/кг и грамм.",
    "ask": "Сколько грамм какао/шоколада на порцию? Цена матча ₽/кг и граммы на порцию?"
  },
  {
    "id": "Q6",
    "title": "Лимонад",
    "now": "Фреш 100 ₽ и чай 15 ₽ учтены. Лимонад: в модели только стакан 12 ₽, сырьё неизвестно.",
    "ask": "Себестоимость одной порции лимонада (₽)?"
  }
];
const PRICEBOOK = {
  "version": 1,
  "updated": "2026-10-01",
  "source": "Андрей 01.10.2026 + модель сентября",
  "note": "Справочник драйверов расчёта. Можно заменить файл целиком и пересобрать main.js — цифры подтянутся в UI.",
  "groups": [
    {
      "id": "coffee",
      "title": "Зерно и шоты",
      "items": [
        {
          "key": "coffee_kg_vat",
          "label": "Зерно",
          "value": 1700,
          "unit": "₽/кг",
          "status": "confirmed"
        },
        {
          "key": "dose_g",
          "label": "Доза эспрессо",
          "value": 20,
          "unit": "г",
          "status": "confirmed"
        },
        {
          "key": "shot_cost",
          "label": "Себестоимость шота",
          "value": 34,
          "unit": "₽",
          "status": "derived",
          "note": "1700 × 20/1000"
        },
        {
          "key": "shots_250_350",
          "label": "Шоты 250 / 350 мл",
          "value": 2,
          "unit": "шт",
          "status": "confirmed",
          "note": "пролив 250 ≈ 15 с"
        },
        {
          "key": "shots_450",
          "label": "Шоты 450 мл",
          "value": 2,
          "unit": "шт",
          "status": "assumed",
          "note": "как 350-класс"
        },
        {
          "key": "shots_flat_350",
          "label": "Флэт уайт 350",
          "value": 4,
          "unit": "шота",
          "status": "confirmed"
        },
        {
          "key": "shots_espresso_sku",
          "label": "Эспрессо / доп. / тоник",
          "value": 1,
          "unit": "шот",
          "status": "assumed"
        }
      ]
    },
    {
      "id": "milk",
      "title": "Молоко",
      "items": [
        {
          "key": "milk_per_l",
          "label": "Молоко",
          "value": 87.28,
          "unit": "₽/л",
          "status": "confirmed"
        },
        {
          "key": "milk_ml_table",
          "label": "Мл по напиткам",
          "value": "таблица подтверждена",
          "unit": "",
          "status": "confirmed",
          "note": "капучино/латте/раф/флэт/какао/шоколад/матча/мокко"
        }
      ]
    },
    {
      "id": "powder",
      "title": "Какао / шоколад / матча",
      "items": [
        {
          "key": "cocoa_kg",
          "label": "Какао и горячий шоколад",
          "value": 1800,
          "unit": "₽/кг",
          "status": "confirmed"
        },
        {
          "key": "cocoa_g_est",
          "label": "Граммы на порцию",
          "value": 15,
          "unit": "г",
          "status": "estimate",
          "note": "→ ≈27 ₽/напиток; ждём факт"
        },
        {
          "key": "matcha_per_drink",
          "label": "Матча на порцию",
          "value": 8,
          "unit": "₽",
          "status": "estimate",
          "note": "нет цены ₽/кг и грамм"
        }
      ]
    },
    {
      "id": "packaging",
      "title": "Стакан и крышка",
      "items": [
        {
          "key": "cup_lid",
          "label": "Стакан + крышка",
          "value": 12,
          "unit": "₽",
          "status": "confirmed",
          "note": "на все размеры"
        }
      ]
    },
    {
      "id": "alt_milk",
      "title": "Альтернативное молоко",
      "items": [
        {
          "key": "alt_milk_per_l",
          "label": "Альт. молоко (вся линейка)",
          "value": 166,
          "unit": "₽/л",
          "status": "confirmed"
        },
        {
          "key": "alt_portion_ml",
          "label": "Порция на доплату",
          "value": 100,
          "unit": "мл",
          "status": "estimate"
        },
        {
          "key": "alt_addon_price",
          "label": "Цена доплаты в чеке",
          "value": 60,
          "unit": "₽",
          "status": "estimate",
          "note": "qty ≈ выручка / 60"
        }
      ]
    },
    {
      "id": "other_drinks",
      "title": "Фреш / чай / лимонад / сироп",
      "items": [
        {
          "key": "fresh_portion",
          "label": "Фреш",
          "value": 100,
          "unit": "₽/порция",
          "status": "confirmed"
        },
        {
          "key": "tea_portion",
          "label": "Чай",
          "value": 15,
          "unit": "₽/порция",
          "status": "confirmed"
        },
        {
          "key": "lemonade_cogs",
          "label": "Лимонад (сырьё)",
          "value": "неизвестно",
          "unit": "",
          "status": "open",
          "note": "в модели только стакан 12 ₽"
        },
        {
          "key": "raf_syrup_g_350",
          "label": "Сироп раф 350",
          "value": 20,
          "unit": "г",
          "status": "confirmed"
        },
        {
          "key": "raf_syrup_g_450",
          "label": "Сироп раф 450",
          "value": 30,
          "unit": "г",
          "status": "confirmed"
        },
        {
          "key": "raf_syrup_kg",
          "label": "Сироп раф",
          "value": 500,
          "unit": "₽/кг",
          "status": "estimate"
        }
      ]
    },
    {
      "id": "fixed",
      "title": "Фикс точки",
      "items": [
        {
          "key": "rent",
          "label": "Аренда",
          "value": 80000,
          "unit": "₽/мес",
          "status": "confirmed",
          "note": "из 160 000 ₽ Росгосстрах = сен+окт"
        },
        {
          "key": "machine",
          "label": "Кофемашина",
          "value": 20000,
          "unit": "₽/мес",
          "status": "confirmed"
        },
        {
          "key": "kassa",
          "label": "Касса",
          "value": 2000,
          "unit": "₽/мес",
          "status": "confirmed"
        },
        {
          "key": "internet",
          "label": "Интернет",
          "value": 1878.8,
          "unit": "₽/мес",
          "status": "confirmed"
        },
        {
          "key": "barista_day",
          "label": "ЗП сотрудника",
          "value": 5000,
          "unit": "₽/день",
          "status": "confirmed",
          "note": "× дни с продажами"
        }
      ]
    },
    {
      "id": "food",
      "title": "Еда",
      "items": [
        {
          "key": "food_zakiriev",
          "label": "Закуп Закариеву (сентябрь)",
          "value": 126221,
          "unit": "₽",
          "status": "confirmed",
          "note": "весь платёж = закуп на точку"
        }
      ]
    }
  ]
}
;

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

const TIPS = {
  rev: "Выручка — всё, что пробили по кассе за месяц: напитки, еда и допы.",
  var: "Переменные — себестоимость продаж: зерно, молоко, стаканы, еда (закуп Закариеву) и оценки порошков.",
  vklad: "Вклад — маржинальная прибыль: выручка минус переменные. Этим покрываем аренду, ЗП и прочий фикс.",
  fix: "Фикс — постоянные расходы месяца: аренда, кофемашина, касса, интернет, ЗП сотрудника точки.",
  result: "Результат — вклад минус фикс. Плюс = точка в плюсе, минус = не хватило на постоянные расходы.",
};

function tipHtml(id, text) {
  const body = text || TIPS[id] || "";
  return `<span class="po-tip" data-tip="${id}">
    <button type="button" class="po-tip__btn" aria-label="Пояснение" aria-expanded="false">?</button>
    <span class="po-tip__bubble" role="tooltip">${body}</span>
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
    { label: `Выручка${tipHtml("rev")}`, value: d.revenue.total, cls: "rev", show: d.revenue.total },
    { label: `\u2212 Переменные${tipHtml("var")}`, value: d.cogs.total_var, cls: "cost", show: d.cogs.total_var },
    { label: `= Вклад${tipHtml("vklad")}`, value: d.result.contribution, cls: "cm", show: d.result.contribution },
    { label: `\u2212 Фикс${tipHtml("fix")}`, value: d.fixed.total, cls: "fix", show: d.fixed.total },
    {
      label: `= Результат${tipHtml("result")}`,
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

const STATUS_LABEL = {
  confirmed: "факт",
  derived: "расчёт",
  estimate: "оценка",
  assumed: "допущение",
  open: "открыто",
};

function fmtBookVal(v) {
  if (typeof v === "number") return fmt(v, Number.isInteger(v) ? 0 : 2);
  return String(v);
}

function fillPricebook() {
  const rootEl = document.getElementById("pricebook");
  if (!rootEl || !PRICEBOOK) return;
  const meta = [
    PRICEBOOK.updated ? `обновлён ${PRICEBOOK.updated}` : "",
    PRICEBOOK.source || "",
  ]
    .filter(Boolean)
    .join(" · ");
  rootEl.innerHTML = `
    <div class="po-book__head">
      <p class="po-kicker">Справочник цен</p>
      <h3 class="po-book__title">Что двигает расчёт</h3>
      <p class="po-book__meta">${meta}. Файл <code>data/pricebook.json</code> — можно подменить набор цен целиком.</p>
    </div>
    <div class="po-book__groups">
      ${(PRICEBOOK.groups || [])
        .map(
          (g) => `<section class="po-book__group">
        <h4 class="po-book__group-title">${g.title}</h4>
        <div class="table-wrap">
          <table class="po-book__table">
            <thead><tr><th>Параметр</th><th>Значение</th><th>Статус</th></tr></thead>
            <tbody>
              ${(g.items || [])
                .map((it) => {
                  const val = [fmtBookVal(it.value), it.unit || ""].filter(Boolean).join(" ");
                  const st = STATUS_LABEL[it.status] || it.status || "";
                  const note = it.note
                    ? `<div class="po-book__note">${it.note}</div>`
                    : "";
                  return `<tr class="po-book__row--${it.status || ""}">
                    <td>${it.label}${note}</td>
                    <td class="num">${val}</td>
                    <td><span class="po-book__badge po-book__badge--${it.status || ""}">${st}</span></td>
                  </tr>`;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      </section>`
        )
        .join("")}
    </div>`;
}

function fillOpen() {
  fillPricebook();

  const openRoot = document.getElementById("open-questions");
  const formWrap = document.getElementById("employee-form");
  if (!OPEN.length) {
    if (openRoot) openRoot.innerHTML = "";
    if (formWrap) formWrap.hidden = true;
    return;
  }
  if (formWrap) formWrap.hidden = false;

  openRoot.innerHTML =
    `<p class="po-open__intro">Ещё ${OPEN.length} уточнения — остальное уже в справочнике выше (оценки помечены).</p>` +
    OPEN.map(
      (q) => `<article class="po-q">
      <span class="po-q__id">${q.id}</span>
      <div class="po-q__body">
        <h3 class="po-q__title">${q.title}</h3>
        <p class="po-q__now">${q.now}</p>
        <p class="po-q__ask"><strong>Нужно уточнить:</strong> ${q.ask}</p>
        <label class="po-field po-field--block">
          <span class="po-field__label">Пишите ответ сюда</span>
          <textarea id="ans-${q.id}" name="${q.id}" rows="3" placeholder="Цифра или короткий ответ…"></textarea>
        </label>
      </div>
    </article>`
    ).join("");
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
document.querySelectorAll(".po-tip[data-tip]").forEach((el) => {
  if (el.querySelector(".po-tip__btn")) return;
  const id = el.getAttribute("data-tip");
  el.outerHTML = tipHtml(id, TIPS[id]);
});
bindTips(document);
