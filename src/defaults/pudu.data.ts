import PuduCC1ProImage1 from "@public/images/cc1-pro.jpg";
import PuduMT1Image1 from "@public/images/mt1.png";
import PuduMT1VacImage1 from "@public/images/mt1-vac.png";
import PuduSH1Image1 from "@public/images/sh1.jpg";
import PuduBot2Image from "@public/images/pudubot-2.webp";
import BellaBotProImage from "@public/images/bellabot-pro.webp";
import KettyBotProImage from "@public/images/kettybot-pro.png";

export const pudus = [
	{
		id: "cc1-pro",
		name: "PUDU CC1 Pro",
		short_description:
			"Профессиональный робот-поломоечная машина с полной автоматизацией уборки и интеллектуальной станцией обслуживания.",
		images: [PuduCC1ProImage1],
		full_description: `
<h2>PUDU CC1 Pro — Полные характеристики</h2>

<h3>Назначение</h3>
<p>
PUDU CC1 Pro предназначен для полностью автономной профессиональной уборки
коммерческих и общественных пространств. Робот выполняет весь цикл очистки
без участия персонала.
</p>

<h3>Функции уборки</h3>
<ul>
  <li>Подметание</li>
  <li>Пылесос</li>
  <li>Мойка полов</li>
  <li>Сушка поверхности</li>
</ul>

<h3>Интеллектуальные возможности</h3>
<ul>
  <li>AI-планирование маршрутов</li>
  <li>Распознавание препятствий</li>
  <li>Определение уровня загрязнений</li>
  <li>Автоматическая оценка качества уборки</li>
</ul>

<h3>Технические характеристики</h3>
<table class="border border-gray-200" cellpadding="6">
<tbody>
<tr><td>Производительность</td><td>до 1800 м²/ч</td></tr>
<tr><td>Ширина уборки</td><td>55 см</td></tr>
<tr><td>Бак чистой воды</td><td>15 л</td></tr>
<tr><td>Бак грязной воды</td><td>18 л</td></tr>
<tr><td>Навигация</td><td>360° LiDAR + RGB камера</td></tr>
<tr><td>Время работы</td><td>до 4 часов</td></tr>
<tr><td>Время зарядки</td><td>3–4 часа</td></tr>
</tbody>
</table>

<h3>Станция обслуживания</h3>
<ul>
  <li>Автоматическое наполнение водой</li>
  <li>Автоматический слив</li>
  <li>Самоочистка системы</li>
  <li>Сушка мопов горячим воздухом</li>
</ul>
`,
	},

	{
		id: "mt1",
		name: "PUDU MT1",
		short_description:
			"Многофункциональный автономный уборочный робот для больших коммерческих объектов.",
		images: [PuduMT1Image1],
		full_description: `
<h2>PUDU MT1 — Полные характеристики</h2>

<h3>Функциональность</h3>
<ul>
  <li>Сухая и влажная уборка</li>
  <li>Пылесос и подметание</li>
  <li>Работа в торговых и промышленных помещениях</li>
</ul>

<h3>Навигация и интеллект</h3>
<ul>
  <li>VSLAM + LiDAR SLAM</li>
  <li>AI-распознавание мусора</li>
  <li>Автоматическое построение карт</li>
</ul>

<h3>Технические характеристики</h3>
<table class="border border-gray-200" cellpadding="6">
<tbody>
<tr><td>Производительность</td><td>1500–1800 м²/ч</td></tr>
<tr><td>Ширина уборки</td><td>50–55 см</td></tr>
<tr><td>Время работы</td><td>3–6 часов</td></tr>
<tr><td>Фильтрация</td><td>HEPA 98%</td></tr>
</tbody>
</table>
`,
	},

	{
		id: "mt1-vac",
		name: "PUDU MT1 Vac",
		short_description:
			"Промышленный автономный робот-пылесос с высокой мощностью и интеллектуальной фильтрацией.",
		images: [PuduMT1VacImage1],
		full_description: `
<h2>PUDU MT1 Vac — Полные характеристики</h2>

<h3>Назначение</h3>
<p>
Предназначен для крупных объектов: склады, торговые центры, логистические зоны.
</p>

<h3>Технические характеристики</h3>
<table class="border border-gray-200" cellpadding="6">
<tbody>
<tr><td>Производительность</td><td>до 1400 м²/ч</td></tr>
<tr><td>Ширина уборки</td><td>70 см</td></tr>
<tr><td>Контейнер пыли</td><td>14 л</td></tr>
<tr><td>Фильтрация</td><td>HEPA 98–99.97%</td></tr>
<tr><td>Время работы</td><td>3–6.5 часов</td></tr>
</tbody>
</table>
`,
	},

	{
		id: "sh1",
		name: "PUDU SH1",
		short_description:
			"Компактный тихий робот-подметальщик для офисов, отелей и торговых зон.",
		images: [PuduSH1Image1],
		full_description: `
<h2>PUDU SH1 — Полные характеристики</h2>

<h3>Особенности</h3>
<ul>
  <li>Низкий уровень шума</li>
  <li>Компактные размеры</li>
  <li>Подметание и пылесос</li>
</ul>

<h3>Технические характеристики</h3>
<table class="border border-gray-200" cellpadding="6">
<tbody>
<tr><td>Ширина уборки</td><td>48 см</td></tr>
<tr><td>Контейнер пыли</td><td>3–4 л</td></tr>
<tr><td>Навигация</td><td>LiDAR SLAM</td></tr>
</tbody>
</table>
`,
	},

	{
		id: "pudubot-2",
		name: "PuduBot 2",
		short_description:
			"Универсальный робот-доставщик с двойным лидаром, PUDU VSLAM+ и поддержкой до 20 роботов в системе.",
		images: [PuduBot2Image],
		full_description: `
<h2>PuduBot 2 — Полные характеристики</h2>

<h3>Обзор</h3>
<p>
PuduBot 2 — универсальный робот-доставщик нового поколения, предназначенный
для ресторанов, отелей, больниц и коммерческих объектов.
</p>

<h3>Ключевые технологии</h3>
<ul>
  <li>Dual LiDAR (верхний + нижний)</li>
  <li>PUDU VSLAM+</li>
  <li>Гибридная навигация Laser + Vision</li>
</ul>

<h3>Технические характеристики</h3>
<table class="border border-gray-200" cellpadding="6">
<tbody>
<tr><td>Габариты</td><td>580 × 535 × 1290 мм</td></tr>
<tr><td>Вес</td><td>39 кг</td></tr>
<tr><td>Макс. нагрузка</td><td>40 кг</td></tr>
<tr><td>Время работы</td><td>10–24 ч</td></tr>
<tr><td>Скорость</td><td>0.5–1.2 м/с</td></tr>
<tr><td>Навигация</td><td>PUDU VSLAM+ + Laser SLAM</td></tr>
</tbody>
</table>

<h3>Функции</h3>
<ul>
  <li>Мульти-роботное взаимодействие</li>
  <li>Автоматический проход через двери</li>
  <li>VIP уведомления</li>
  <li>24/7 мониторинг и аналитика</li>
</ul>
`,
	},

	{
		id: "bellabot-pro",
		name: "BellaBot Pro",
		short_description:
			"Робот-доставщик с эмоциональным взаимодействием, мультимедиа и высокой грузоподъёмностью.",
		images: [BellaBotProImage],
		full_description: `
<h2>BellaBot Pro — Полные характеристики</h2>

<h3>Особенности</h3>
<ul>
  <li>Интерактивное лицо и эмоции</li>
  <li>Голосовое взаимодействие</li>
  <li>Многоуровневая доставка</li>
</ul>

<h3>Технические характеристики</h3>
<table class="border border-gray-200" cellpadding="6">
<tbody>
<tr><td>Нагрузка</td><td>до 40 кг</td></tr>
<tr><td>Экран</td><td>10.1"</td></tr>
<tr><td>Навигация</td><td>LiDAR + VSLAM</td></tr>
</tbody>
</table>
`,
	},

	{
		id: "kettybot-pro",
		name: "KettyBot Pro",
		short_description:
			"Рекламно-доставочный робот с большим экраном и автономной навигацией.",
		images: [KettyBotProImage],
		full_description: `
<h2>KettyBot Pro — Полные характеристики</h2>

<h3>Назначение</h3>
<ul>
  <li>Доставка</li>
  <li>Реклама</li>
  <li>Навигация клиентов</li>
</ul>

<h3>Технические характеристики</h3>
<table class="border border-gray-200" cellpadding="6">
<tbody>
<tr><td>Экран</td><td>18.5"</td></tr>
<tr><td>Нагрузка</td><td>30 кг</td></tr>
<tr><td>Навигация</td><td>LiDAR SLAM</td></tr>
</tbody>
</table>
`,
	},
];

export type PuduType = (typeof pudus)[number];
