import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { ENV } from "@/configs/env.config";
import { products } from "@/defaults/products.data";
import { Footer } from "@/layouts/footer.layout";
import { HeaderLayout } from "@/layouts/header.layout";

const productNames = products.map((item) => item.name);

export const metadata: Metadata = {
	metadataBase: new URL(ENV.BASE_URL),

	title: {
		default: "CooperAI — Роботы Unitree и PUDU в Узбекистане",
		template: "%s | CooperAI",
	},

	description:
		` CooperAI — официальный поставщик роботов Unitree и PUDU в Узбекистане. Продажа, интеграция, сервис и обучение. Каталог: ${productNames.join(", ")}.
	`.trim(),

	keywords: [
		"CooperAI",
		"роботы Узбекистан",
		"роботы Ташкент",
		"промышленные роботы",
		"сервисные роботы",
		"гуманоидные роботы",
		"четвероногие роботы",
		"AI роботы",
		"автономные роботы",
		"роботы для бизнеса",
		"роботы для уборки",
		"роботы для ресторанов",
		"роботы для отелей",
		"роботы для логистики",
		"интеграция роботов",
		"роботы под ключ",
		"робот-собака",
		"робот-пылесос",
		"робот мойщик полов",

		...productNames,
		...productNames.map((n) => `${n} купить`),
		...productNames.map((n) => `${n} цена`),
		...productNames.map((n) => `${n} Узбекистан`),
		...productNames.map((n) => `${n} Ташкент`),

		"robotlar Uzbekistan",
		"robot sotib olish",
		"AI robotlar",
		"xizmat robotlari",
		"sanoat robotlari",
	],

	authors: [{ name: "CooperAI" }],
	creator: "CooperAI",
	publisher: "CooperAI",

	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-32x32.png",
		apple: "/apple-touch-icon.png",
	},

	openGraph: {
		type: "website",
		locale: "ru_RU",
		url: ENV.BASE_URL,
		siteName: "CooperAI",
		title: "CooperAI — Роботы Unitree и PUDU",
		description:
			` Официальный каталог роботов Unitree и PUDU в Узбекистане. Модели: ${productNames.join(", ")}. Продажа, интеграция и сервис.
		`.trim(),
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
		title: "CooperAI — Роботы Unitree и PUDU",
		description: `Каталог роботов: ${productNames.join(", ")}`,
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
				<GoogleTagManager gtmId="GTM-NDZBTPDJ" />

				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-NSH2LDJT"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
						title="Google Tag Manager"
					/>

					{/** biome-ignore lint/performance/noImgElement: <explanation> */}
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=1150212770641880&ev=PageView&noscript=1"
						alt=""
					/>

					<div>
						{/** biome-ignore lint/performance/noImgElement: <explanation> */}
						<img
							src="https://mc.yandex.ru/watch/105323764"
							style={{ position: "absolute", left: "-9999px" }}
							alt=""
						/>
					</div>
				</noscript>

				<NextIntlClientProvider>
					<Suspense fallback={<div>Loading...</div>}>
						<NuqsAdapter>
							<HeaderLayout className="shrink-0" />

							<main className="flex-1">{children}</main>

							<Footer className="shrink-0" />
							<Toaster />
						</NuqsAdapter>
					</Suspense>
				</NextIntlClientProvider>
			</body>
		</>
	);
};

export default ClientLayout;
