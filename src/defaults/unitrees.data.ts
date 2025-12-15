import UnitreeGo2 from "@public/images/go2-edu.jpg";
import UnitreeGo2Pro from "@public/images/go2-pro-air.webp";
import UnitreeB2 from "@public/images/unitree-b2.jpg";
import UnitreeG1 from "@public/images/unitree-g1.jpg";

export const unitrees = [
	/* -------------------------------------------------------------------------- */
	/*                               UNITREE B2                                   */
	/* -------------------------------------------------------------------------- */
	{
		id: "b2",
		name: "Unitree B2",
		short_description:
			"Промышленный высоконагруженный робот-собака с LiDAR, модульной вычислительной платформой и грузоподъёмностью 40 кг.",
		images: [UnitreeB2],
		full_description: `
<h2>Unitree B2 — Полные характеристики</h2>

<h3>Общие сведения</h3>
<p>
Промышленный робот-собака с высокой грузоподъёмностью (40 кг), длительным временем работы (до 5 часов), скоростью до 3.5 м/с и расширенной вычислительной платформой.
</p>

<hr />

<h3>Модели и сравнительная таблица</h3>

<table class="border border-gray-200" cellpadding="6" cellspacing="0">
  <thead class="[&_tr]:border-b [&_tr]:border-b-gray-200">
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Параметр</th>
      <td class="px-2.5 py-2 ">B2-1</th>
      <td class="px-2.5 py-2 ">B2 LiDAR-1</th>
      <td class="px-2.5 py-2 ">B2 LiDAR-2</th>
      <td class="px-2.5 py-2 ">B2-W-1</th>
      <td class="px-2.5 py-2 ">B2-W LiDAR-1</th>
      <td class="px-2.5 py-2 ">B2-W LiDAR-2</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Вес (с батареей)</td>
      <td class="px-2.5 py-2 ">~60 кг</td>
      <td class="px-2.5 py-2 ">~65 кг</td>
      <td class="px-2.5 py-2 ">~65 кг</td>
      <td class="px-2.5 py-2 ">~70 кг</td>
      <td class="px-2.5 py-2 ">~75 кг</td>
      <td class="px-2.5 py-2 ">~75 кг</td>
    </tr>

    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Модуль восприятия</td>
      <td class="px-2.5 py-2 ">
        Камеры глубины<br />
        HD-камеры
      </td>
      <td class="px-2.5 py-2 ">
        Камеры глубины<br />
        HD-камеры<br />
        32-линейный 3D LiDAR
      </td>
      <td class="px-2.5 py-2 ">
        Камеры глубины<br />
        HD-камеры<br />
        32-линейный 3D LiDAR
      </td>
      <td class="px-2.5 py-2 ">
        Камеры глубины<br />
        HD-камеры
      </td>
      <td class="px-2.5 py-2 ">
        Камеры глубины<br />
        HD-камеры<br />
        32-линейный 3D LiDAR
      </td>
      <td class="px-2.5 py-2 ">
        Камеры глубины<br />
        HD-камеры<br />
        32-линейный 3D LiDAR
      </td>
    </tr>

    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Комплектация</td>
      <td class="px-2.5 py-2 " colspan="6">
        Стандартные: аккумулятор, зарядное устройство, контроллер.
      </td>
    </tr>

    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Дополнительно</td>
      <td class="px-2.5 py-2 " colspan="6">
        Блоки i7 могут быть заменены на Nvidia Jetson Orin NX (100 TOPS).  
        Блок i7 для радара — не заменяем.
      </td>
    </tr>
  </tbody>
</table>

<hr />

<h3>Размеры</h3>
<ul>
  <li>1098 × 450 × 645 мм (в положении стоя)</li>
</ul>

<h3>Производительность</h3>
<ul>
  <li>Скорость — 3.5 м/с</li>
  <li>Без нагрузки — 20 км / 5 часов</li>
  <li>Под нагрузкой — 15 км / 4 часа</li>
  <li>Постоянная грузоподъёмность — 40 кг</li>
  <li>Шаговая проходимость — 40 см</li>
</ul>

<h3>Батарея</h3>
<ul>
  <li>45000 mAh / 2268 Вт·ч</li>
  <li>Напряжение — 50.4 В</li>
  <li>Зарядка — 58.8 В</li>
  <li>Температура работы: -20…+50°C</li>
</ul>

<h3>Зарядное устройство</h3>
<ul>
  <li>Время зарядки — ~3 часа</li>
  <li>Пульт работает 4.5 часов</li>
  <li>Дальность управления — &gt;100 м</li>
</ul>

<h3>Опции</h3>
<ul>
  <li>Роботизированная рука Z1 + камера D435i</li>
  <li>Станция автоматической подзарядки</li>
  <li>Контактный модуль зарядки</li>
</ul>
`,
	},

	/* -------------------------------------------------------------------------- */
	/*                               UNITREE G1                                   */
	/* -------------------------------------------------------------------------- */

	{
		id: "g1",
		name: "Unitree G1",
		short_description:
			"Гуманоидный робот с до 43 степенями свободы, высокомощными приводами и продвинутыми манипуляторами.",
		images: [UnitreeG1],
		full_description: `
<h2>Unitree G1 — Полные характеристики</h2>

<h3>Комплектации</h3>

<table class="border border-gray-200" cellpadding="6">
  <thead class="[&_tr]:border-b [&_tr]:border-b-gray-200">
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Модель</th>
      <td class="px-2.5 py-2 ">Степени свободы</th>
      <td class="px-2.5 py-2 ">Манипуляторы</th>
      <td class="px-2.5 py-2 ">Вес</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">G1 Basic</td>
      <td class="px-2.5 py-2 ">23</td>
      <td class="px-2.5 py-2 ">—</td>
      <td class="px-2.5 py-2 ">~35 кг</td>
    </tr>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">G1 Edu Standard (U1)</td>
      <td class="px-2.5 py-2 ">23</td>
      <td class="px-2.5 py-2 ">—</td>
      <td class="px-2.5 py-2 ">~35 кг</td>
    </tr>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">G1 Edu Plus (U2)</td>
      <td class="px-2.5 py-2 ">29</td>
      <td class="px-2.5 py-2 ">Двупальцевые Dex3-1</td>
      <td class="px-2.5 py-2 ">~35 кг</td>
    </tr>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">G1 Edu Ultimate A/B/C/D</td>
      <td class="px-2.5 py-2 ">41–43</td>
      <td class="px-2.5 py-2 ">Пяти-пальцевые Inspire RH56</td>
      <td class="px-2.5 py-2 ">~35 кг</td>
    </tr>
  </tbody>
</table>

<hr />

<h3>Размеры</h3>
<ul>
  <li>Стоит: 1320 × 450 × 200 мм</li>
  <li>Сложен: 690 × 450 × 300 мм</li>
</ul>

<h3>Характеристики суставов</h3>
<ul>
  <li>Колено: 0–165°</li>
  <li>Бёдра: P±154°, R-30…170°, Y±158°</li>
  <li>Талия: Z±155°</li>
</ul>

<h3>Моторы и датчики</h3>
<ul>
  <li>Промышленные роликовые подшипники</li>
  <li>Высокомощные синхронные двигатели</li>
  <li>Двойные энкодеры</li>
  <li>Камера глубины + 3D LiDAR</li>
</ul>

<h3>Производительность</h3>
<ul>
  <li>Макс. крутящий момент колена: 90–120 Н·м</li>
  <li>Макс. нагрузка руки: 2–3 кг</li>
  <li>Размах руки: ~0.45 м</li>
</ul>

<h3>Питание и вычисления</h3>
<ul>
  <li>Батарея 9000 mAh</li>
  <li>Время работы: ~2 часа</li>
  <li>Процессор: Orin 100 TOPS</li>
  <li>Связь: WiFi 6, Bluetooth 5.2</li>
</ul>

<hr />
`,
	},

	/* -------------------------------------------------------------------------- */
	/*                             UNITREE GO2 EDU                                 */
	/* -------------------------------------------------------------------------- */

	{
		id: "go2-edu",
		name: "Unitree GO2 EDU",
		short_description:
			"Исследовательская версия GO2 с LiDAR, улучшенной вычислительной платформой и поддержкой роботизированной руки.",
		images: [UnitreeGo2],
		full_description: `
<h2>Unitree GO2 EDU — Полные характеристики</h2>

<h3>Габариты и масса</h3>
<ul>
  <li>Высота: ~70 см</li>
  <li>Вес: 8–18 кг (от конфигурации)</li>
</ul>

<h3>Параметры движения</h3>
<ul>
  <li>Максимальная скорость: 3.7 м/с (пик до 5 м/с)</li>
  <li>Максимальная нагрузка: 12 кг</li>
  <li>Предел угла подъёма: 35–40°</li>
</ul>

<h3>Степени свободы</h3>
<ul>
  <li>12 DOF — базовые</li>
  <li>16 DOF — расширенные версии</li>
</ul>

<h3>Батарея</h3>
<ul>
  <li>15000 mAh</li>
  <li>Работа: ~2 часа</li>
  <li>Быстрая зарядка: 33.6 В / 9 А</li>
</ul>

<h3>Комплектации LiDAR</h3>

<table class="border border-gray-200" cellpadding="6">
  <thead class="[&_tr]:border-b [&_tr]:border-b-gray-200">
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Модель</th>
      <td class="px-2.5 py-2 ">LiDAR</th>
      <td class="px-2.5 py-2 ">Функции</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">U1 / U3 / U5</td>
      <td class="px-2.5 py-2 ">Livox Mid-360</td>
      <td class="px-2.5 py-2 ">Навигация, карты, поддержка SDK</td>
    </tr>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">U2 / U4 / U6</td>
      <td class="px-2.5 py-2 ">Hesai XT16</td>
      <td class="px-2.5 py-2 ">Высокоточная навигация</td>
    </tr>
  </tbody>
</table>

<h3>Дополнительно</h3>
<ul>
  <li>Опция: роботизированная рука D1</li>
  <li>Мощные процессоры 40–100 TOPS</li>
  <li>Поддержка GO2 SDK</li>
  <li>WiFi 6 / Bluetooth 5.2</li>
</ul>
`,
	},

	/* -------------------------------------------------------------------------- */
	/*                          UNITREE GO2 PRO / AIR                            */
	/* -------------------------------------------------------------------------- */

	{
		id: "go2-pro-air",
		name: "Unitree GO2 PRO / AIR",
		short_description:
			"Две версии робособаки: AIR — лёгкая базовая модель, PRO — более мощная с 3D-лидаром, голосовым управлением и eSIM.",
		images: [UnitreeGo2Pro],
		full_description: `
<h2>Unitree GO2 AIR и PRO — Полные характеристики</h2>

<h3>Габариты</h3>
<ul>
  <li>Размер: 70 × 31 × 40 см</li>
  <li>Вес: 15 кг</li>
</ul>

<h3>Проходимость</h3>
<ul>
  <li>Макс. высота препятствия: 15–16 см</li>
  <li>Макс. угол подъёма: 30–40°</li>
</ul>

<h3>Нагрузка</h3>
<ul>
  <li>AIR: 7 кг</li>
  <li>PRO: 8 кг</li>
</ul>

<h3>Скорость</h3>
<ul>
  <li>AIR: до 2.5 м/с</li>
  <li>PRO: до 3.5 м/с</li>
</ul>

<h3>Сравнение AIR и PRO</h3>

<table class="border border-gray-200" cellpadding="6">
  <thead class="[&_tr]:border-b [&_tr]:border-b-gray-200">
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Характеристика</th>
      <td class="px-2.5 py-2 ">GO2 AIR</th>
      <td class="px-2.5 py-2 ">GO2 PRO</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Нагрузка</td>
      <td class="px-2.5 py-2 ">7 кг</td>
      <td class="px-2.5 py-2 ">8 кг</td>
    </tr>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Скорость</td>
      <td class="px-2.5 py-2 ">2.5 м/с</td>
      <td class="px-2.5 py-2 ">3.5 м/с</td>
    </tr>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">3D-лидар</td>
      <td class="px-2.5 py-2 ">Есть</td>
      <td class="px-2.5 py-2 ">Улучшенный широкоугольный</td>
    </tr>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Связь</td>
      <td class="px-2.5 py-2 ">WiFi 6 / Bluetooth</td>
      <td class="px-2.5 py-2 ">WiFi 6 / Bluetooth / eSIM 4G</td>
    </tr>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Голосовое управление</td>
      <td class="px-2.5 py-2 ">Нет</td>
      <td class="px-2.5 py-2 ">Да</td>
    </tr>
    <tr class="border-b border-b-gray-200">
      <td class="px-2.5 py-2 ">Подсветка</td>
      <td class="px-2.5 py-2 ">Нет</td>
      <td class="px-2.5 py-2 ">Да, 3 Вт</td>
    </tr>
  </tbody>
</table>

<h3>Батарея</h3>
<ul>
  <li>8000 mAh — стандартная</li>
  <li>Время работы: 1–2 часа</li>
</ul>

<h3>Особенности</h3>
<ul>
  <li>Трюки: сальто, прыжки, танцы</li>
  <li>Приложение с передачей видео</li>
  <li>OTA обновления</li>
</ul>
`,
	},
];

export type UnitreeType = (typeof unitrees)[number];
