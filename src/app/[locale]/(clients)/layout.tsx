import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/layouts/footer.layout";
import { HeaderLayout } from "@/layouts/header.layout";

export const metadata: Metadata = {
	metadataBase: new URL("https://cooperai.uz"),

	title: {
		default: "CooperAI — Роботы Unitree и Pudu в Узбекистане",
		template: "%s | CooperAI",
	},

	description:
		"CooperAI — официальный поставщик роботов Unitree и Pudu в Узбекистане. Продажа, интеграция, сервис, обучение и инновационные роботизированные решения для бизнеса.",

	keywords: [
		"Unitree",
		"Pudu",
		"CooperAI",
		"роботы Узбекистан",
		"роботы Ташкент",
		"промышленные роботы",
		"сервисные роботы",
		"роботы доставки",
		"роботы для бизнеса",
		"роботы для уборки",
		"гуманоидные роботы",
		"четвероногие роботы",
		"инновационные роботы",
		"купить робота",
		"робот собака",
		"Unitree GO2",
		"Unitree GO2 Pro",
		"Unitree B2",
		"Unitree G1",
		"Pudu CC1 Pro",
		"Pudu CC1",
		"Pudu MT1",
		"Pudu MT1 Vac",
		"Pudu SH1",
		"роботы для ресторанов",
		"роботы для отелей",
		"роботы для логистики",
		"интеграция роботов",
		"роботы под ключ",
		"автономные роботы",
		"AI роботы",
		"роботы искусственный интеллект",
		"роботы автоматизация",
		"робот пылесос профессиональный",
		"робот мойщик полов",

		"Unitree robotlari",
		"Pudu robotlari",
		"CooperAI Uzbekistan",
		"robotlar Uzbekistan",
		"robotlar Toshkent",
		"sanoat robotlari",
		"xizmat robotlari",
		"yetkazib berish robotlari",
		"tozalash robotlari",
		"restoran robotlari",
		"mehmonxona robotlari",
		"aqlly robotlar",
		"sun’iy intellekt robotlari",
		"robot sotib olish",
		"robot it",
		"Unitree GO2",
		"Unitree GO2 Pro",
		"Unitree G1",
		"Unitree B2",
		"Pudu CC1 Pro",
		"Pudu MT1",
		"Pudu MT1 Vac",
		"Pudu SH1",
		"logistika robotlari",
		"avtonom robotlar",
		"AI robotlar",
		"robot integratsiyasi",
		"robot yechimlari",
		"robotlar biznes uchun",
	],

	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-32x32.png",
		apple: "/apple-touch-icon.png",
	},

	authors: [{ name: "CooperAI" }],
	creator: "CooperAI",
	publisher: "CooperAI",

	openGraph: {
		type: "website",
		locale: "ru_RU",
		url: "https://cooperai.uz",
		siteName: "CooperAI",
		title: "CooperAI — Роботы Unitree и Pudu в Узбекистане",
		description:
			"Продажа, интеграция и обслуживание роботов Unitree и Pudu. Профессиональные роботизированные решения для бизнеса.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "CooperAI Robots",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "CooperAI — инновационные роботы Unitree и Pudu",
		description:
			"Поставки, сервис, интеграция и обучение работе с роботами Unitree и Pudu в Узбекистане.",
		images: ["/og-image.png"],
	},

	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},

	themeColor: "#000000",
	category: "technology",
};

const ClientLayout = async ({ children }: LayoutProps<"/[locale]">) => {
	return (
		<>
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/favicon-96x96.png"
					sizes="96x96"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<meta name="apple-mobile-web-app-title" content="CooperAI" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body className="min-h-screen flex flex-col justify-between">
				<NextIntlClientProvider>
					<HeaderLayout className="shrink-0" />

					<main className="flex-1">{children}</main>

					<Footer className="shrink-0" />

					<Toaster />
				</NextIntlClientProvider>
			</body>
		</>
	);
};

export default ClientLayout;
