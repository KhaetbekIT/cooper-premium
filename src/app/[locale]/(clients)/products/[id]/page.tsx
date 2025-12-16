import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ENV } from "@/configs/env.config";
import { RoutersConfig } from "@/configs/routers.config";
import { pudus } from "@/defaults/pudu.data";
import { unitrees } from "@/defaults/unitrees.data";
import { redirect } from "@/i18n/navigation";
import type { DynamicMetadata } from "@/types/type";
import { ProductContent } from "./_components/product-content";

const Page = async ({ params }: PageProps<"/[locale]/products/[id]">) => {
	const { locale, id } = await params;

	if (!id) {
		redirect({
			href: RoutersConfig.client.home,
			locale: locale as Locale,
		});
	}

	setRequestLocale(locale as Locale);

	return <ProductContent productId={id} />;
};

export const generateMetadata = async ({
	params,
}: DynamicMetadata): Promise<Metadata> => {
	const { id } = await params;
	if (!id) return {};

	const allProducts = [...pudus, ...unitrees];
	const product = allProducts.find((item) => item.id === id);
	if (!product) return {};

	const baseUrl = ENV.BASE_URL;
	const productUrl = `${baseUrl}${RoutersConfig.client.productsById(product.id)}`;

	const description =
		"short_description" in product && product.short_description
			? product.short_description
			: `Подробные характеристики и описание ${product.name}. Продажа и интеграция в Узбекистане.`;

	return {
		title: `${product.name} — купить в Узбекистане | CooperAI`,
		description,

		keywords: [
			product.name,
			`${product.name} цена`,
			`${product.name} купить`,
			`${product.name} характеристики`,
			"CooperAI",
			"PUDU",
			"Unitree",
			"роботы для бизнеса",
			"AI роботы",
		],

		alternates: {
			canonical: productUrl,
		},

		openGraph: {
			type: "website",
			url: productUrl,
			title: product.name,
			description,
			siteName: "CooperAI",
			images: product.images?.length
				? product.images.map((img) => ({
						url: `${baseUrl}${img.src}`,
						width: 1200,
						height: 630,
						alt: product.name,
					}))
				: undefined,
		},

		twitter: {
			card: "summary_large_image",
			title: product.name,
			description,
			images: product.images?.length
				? [`${baseUrl}${product.images[0]?.src}`]
				: undefined,
		},

		robots: {
			index: true,
			follow: true,
		},
	};
};

export default Page;
