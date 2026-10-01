# -*- coding: utf-8 -*-
"""Recalculate September P&L from existing pnl.json + barista answers (no XLS)."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PNL_PATH = ROOT / "data" / "pnl.json"

COFFEE_KG_VAT = 1700.0
DOSE_G = 20
SHOT_COST = COFFEE_KG_VAT * (DOSE_G / 1000)

MILK_L = 87.28
MILK_ML = MILK_L / 1000
CUP_COST = 12.0

# Q3: 1800 ₽/kg · ~15 g/drink (grams not stated) → 27 ₽
COCOA_KG = 1800.0
COCOA_G = 15.0
COCOA_PER_DRINK = COCOA_KG * (COCOA_G / 1000)
MATCHA_PER_DRINK = 8.0  # prior estimate, no new data

# Q5
ALT_MILK_PER_L = 166.0
# only revenue known (7200): assume ~60 ₽ addon price → qty; portion ~100 ml
ALT_MILK_PORTION_ML = 100.0
ALT_MILK_PRICE_EST = 60.0

# Q6
FRESH_COST = 100.0
TEA_COST = 15.0
# lemonade still unknown → cup only

# Q7: syrup g known; ₽/kg estimate mid of 400–600
SYRUP_KG_EST = 500.0
RAF_SYRUP_G = {"раф 350": 20.0, "раф 450": 30.0}

MILK_ML_MAP = {
    "капучино 250": 150,
    "капучино 350": 220,
    "капучино 450": 300,
    "латте 350": 250,
    "латте 450": 350,
    "Айс латте": 250,
    "раф 350": 200,
    "раф 450": 280,
    "флет Уайт 250": 150,
    "флет Уайт 350": 180,
    "какао 350": 250,
    "какао 450": 350,
    "какао брют 350": 250,
    "горячий шоколад 350": 250,
    "матча 350": 250,
    "мокко 350": 250,
    "мокко 450": 350,
}

# Andrey Q1 + assumptions for unstated sizes
SHOTS_MAP = {
    "эспрессо": 1,  # single-shot SKU; not sized 250/350
    "Доп Эспрессо": 1,
    "американо 250": 2,
    "американо 350": 2,
    "американо 450": 2,  # keep 2
    "капучино 250": 2,
    "капучино 350": 2,
    "капучино 450": 2,
    "латте 350": 2,
    "латте 450": 2,
    "Айс латте": 2,  # treat as 350-class milk drink
    "раф 350": 2,
    "раф 450": 2,
    "флет Уайт 250": 2,  # keep 2
    "флет Уайт 350": 4,
    "мокко 350": 2,
    "мокко 450": 2,
    "Эспрессо Тоник": 1,  # espresso-based, size unstated → 1 shot
    "Бамбл Кофе 350": 2,  # 350 ml rule
}


def drink_cogs_unit(name: str, shots: int, milk_ml: int) -> tuple[float, float, float, float, float]:
    """Return coffee, milk, cup, powder/other, syrup components per unit."""
    nl = name.lower()
    cup = CUP_COST

    if "фреш" in nl:
        return 0.0, 0.0, cup, FRESH_COST, 0.0
    if "чай" in nl:
        return 0.0, 0.0, cup, TEA_COST, 0.0
    if "лимонад" in nl:
        return 0.0, 0.0, cup, 0.0, 0.0

    coffee = shots * SHOT_COST
    milk = milk_ml * MILK_ML
    powder = 0.0
    if "какао" in nl or "шоколад" in nl or "мокко" in nl:
        powder = COCOA_PER_DRINK
    if "матча" in nl:
        powder = MATCHA_PER_DRINK

    syrup = 0.0
    if name in RAF_SYRUP_G:
        syrup = RAF_SYRUP_G[name] / 1000.0 * SYRUP_KG_EST

    return coffee, milk, cup, powder, syrup


def main() -> None:
    data = json.loads(PNL_PATH.read_text(encoding="utf-8"))
    work_days = data["work_days"]
    fixed_block = data["fixed"]
    fixed = fixed_block["total"]
    food_cogs = data["cogs"]["food_zakiriev"]
    food_rev = data["revenue"]["food"]
    food_qty = data["units"]["food_items"]
    addon_rev = data["revenue"]["addons"]
    total_rev = data["revenue"]["total"]

    coffee_cost = milk_cost = cup_cost = powder_cost = syrup_cost = 0.0
    drink_rows = []
    total_cups = 0.0
    drink_rev = 0.0

    for row in data["drinks"]:
        name = row["name"]
        qty = float(row["qty"])
        price = float(row["price"])
        rev = float(row["revenue"])
        total_cups += qty
        drink_rev += rev

        nl = name.lower()
        if "чай" in nl or "фреш" in nl or "лимонад" in nl:
            shots = 0
            milk_ml = 0
        elif "какао" in nl or "шоколад" in nl or "матча" in nl:
            # milk drinks without espresso (мокко — отдельно, в SHOTS_MAP)
            shots = 0
            milk_ml = MILK_ML_MAP.get(name, int(row.get("milk_ml") or 0))
        else:
            shots = SHOTS_MAP.get(name, 2 if any(x in name for x in ("250", "350", "450")) else 1)
            milk_ml = MILK_ML_MAP.get(name, int(row.get("milk_ml") or 0))

        c_coffee, c_milk, c_cup, c_pow, c_syr = drink_cogs_unit(name, shots, milk_ml)
        unit = c_coffee + c_milk + c_cup + c_pow + c_syr
        var = unit * qty

        coffee_cost += c_coffee * qty
        milk_cost += c_milk * qty
        cup_cost += c_cup * qty
        powder_cost += (c_pow + c_syr) * qty  # powder_est includes syrup estimate
        syrup_cost += c_syr * qty

        drink_rows.append(
            {
                "name": name,
                "qty": round(qty, 1),
                "price": price,
                "revenue": round(rev, 2),
                "shots": shots,
                "milk_ml": milk_ml,
                "cogs": round(var, 2),
                "cogs_unit": round(unit, 2) if qty else 0,
                "margin_unit": round(price - unit, 2),
            }
        )

    # alt milk COGS
    alt_qty_est = addon_rev / ALT_MILK_PRICE_EST if ALT_MILK_PRICE_EST else 0.0
    alt_liters = alt_qty_est * (ALT_MILK_PORTION_ML / 1000.0)
    alt_cogs = alt_liters * ALT_MILK_PER_L

    drink_cogs = coffee_cost + milk_cost + cup_cost + powder_cost
    total_var = drink_cogs + food_cogs + alt_cogs

    drink_cm = drink_rev - drink_cogs
    food_cm = food_rev - food_cogs
    addon_cm = addon_rev - alt_cogs
    total_cm = drink_cm + food_cm + addon_cm
    result = total_rev - total_var - fixed

    cm_per_cup = drink_cm / total_cups if total_cups else 0
    cm_per_food = food_cm / food_qty if food_qty else 0

    if total_cm > 0:
        be_rev = fixed / (total_cm / total_rev)
        be_factor = fixed / total_cm
    else:
        be_rev = be_factor = None

    be_cups = total_cups * be_factor if be_factor else None
    be_food_qty = food_qty * be_factor if be_factor else None
    be_cups_day = be_cups / work_days if be_cups else None
    be_food_day = be_food_qty / work_days if be_food_qty else None
    be_cups_only = fixed / cm_per_cup if cm_per_cup > 0 else None

    data["prices"] = {
        "coffee_kg_vat": round(COFFEE_KG_VAT, 2),
        "dose_g": DOSE_G,
        "shot_cost": round(SHOT_COST, 2),
        "milk_per_l": MILK_L,
        "cup_lid_est": CUP_COST,
        "cocoa_kg": COCOA_KG,
        "cocoa_g_est": COCOA_G,
        "cocoa_per_drink": round(COCOA_PER_DRINK, 2),
        "alt_milk_per_l": ALT_MILK_PER_L,
        "fresh_portion": FRESH_COST,
        "tea_portion": TEA_COST,
        "raf_syrup_kg_est": SYRUP_KG_EST,
    }
    data["cogs"] = {
        "coffee": round(coffee_cost, 2),
        "milk": round(milk_cost, 2),
        "cups": round(cup_cost, 2),
        "powder_est": round(powder_cost, 2),
        "raf_syrup_est": round(syrup_cost, 2),
        "alt_milk_est": round(alt_cogs, 2),
        "drinks_total": round(drink_cogs, 2),
        "food_zakiriev": round(food_cogs, 2),
        "total_var": round(total_var, 2),
    }
    data["markup"] = {
        "food_pct": round((food_rev / food_cogs - 1) * 100, 1) if food_cogs else None,
        "food_revenue_over_cost": round(food_rev / food_cogs, 2) if food_cogs else None,
        "drinks_margin_pct": round((drink_cm / drink_rev) * 100, 1) if drink_rev else None,
    }
    data["result"] = {
        "contribution": round(total_cm, 2),
        "after_fixed": round(result, 2),
        "cm_per_cup": round(cm_per_cup, 2),
        "cm_per_food": round(cm_per_food, 2),
    }
    data["breakeven"] = {
        "at_current_mix_factor": round(be_factor, 2) if be_factor else None,
        "revenue_needed": round(be_rev, 2) if be_rev else None,
        "cups_month": round(be_cups, 0) if be_cups else None,
        "cups_day": round(be_cups_day, 1) if be_cups_day else None,
        "food_items_month": round(be_food_qty, 0) if be_food_qty else None,
        "food_items_day": round(be_food_day, 1) if be_food_day else None,
        "cups_only_month": round(be_cups_only, 0) if be_cups_only else None,
        "cups_only_day": round(be_cups_only / work_days, 1) if be_cups_only else None,
    }
    data["drinks"] = drink_rows
    data["addons_detail"] = {
        "name": "альтернативное молоко",
        "revenue": addon_rev,
        "price_est_per_addon": ALT_MILK_PRICE_EST,
        "qty_est": round(alt_qty_est, 1),
        "portion_ml_est": ALT_MILK_PORTION_ML,
        "liters_est": round(alt_liters, 2),
        "cogs_est": round(alt_cogs, 2),
    }
    data["assumptions"] = [
        "Доза эспрессо 20 г, зерно 1 700 ₽/кг (подтверждено).",
        "Шоты (Андрей 01.10): 250 мл = 2, 350 мл = 2, флэт уайт 350 = 4; 450 мл = 2; флэт 250 = 2.",
        "Эспрессо / доп. эспрессо / эспрессо-тоник = 1 шот (размер не указан).",
        "Айс латте = 2 шота (как 350-класс). Какао/шоколад/матча = 0 шотов эспрессо.",
        "Молоко мл — подтверждено Андреем; цена 87,28 ₽/л.",
        f"Какао/шоколад/мокко: 1 800 ₽/кг × ~{COCOA_G:g} г ≈ {COCOA_PER_DRINK:.0f} ₽/напиток (граммы — оценка).",
        "Матча — прежняя оценка ~8 ₽/напиток (новых данных нет).",
        "Стакан+крышка ~12 ₽ (подтверждено).",
        f"Альт. молоко 166 ₽/л; qty≈выручка/{ALT_MILK_PRICE_EST:g}₽, порция ~{ALT_MILK_PORTION_ML:g} мл → COGS ~{alt_cogs:.0f} ₽.",
        "Фреш 100 ₽/порция; чай 15 ₽/порция (Андрей).",
        "Лимонады: сырьё неизвестно → только стакан 12 ₽.",
        f"Сироп раф: 20 г@350 / 30 г@450; цена сиропа оценка {SYRUP_KG_EST:g} ₽/кг (нет факта).",
        "Весь платёж Закариеву за сентябрь = закуп еды/товаров на точку.",
        "ЗП бариста 5 000 ₽/день × 22 дня смен.",
    ]

    PNL_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("after_fixed", data["result"]["after_fixed"])
    print("contribution", data["result"]["contribution"])
    print("COGS", data["cogs"])
    print("BE", data["breakeven"])
    print("alt_milk", data["addons_detail"])


if __name__ == "__main__":
    main()
