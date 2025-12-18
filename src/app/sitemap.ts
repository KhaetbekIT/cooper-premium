import type { MetadataRoute } from "next";
import { ENV } from "@/configs/env.config";
import { RoutersConfig } from "@/configs/routers.config";
import { products } from "@/defaults/products.data";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = ENV.BASE_URL;

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: `${baseUrl}/`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
		{
			url: `${baseUrl}${RoutersConfig.client.pudus}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}${RoutersConfig.client.unitrees}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
	];

	const productRoutes: MetadataRoute.Sitemap = [...products].map(
		(item): MetadataRoute.Sitemap[number] => ({
			url: `${baseUrl}${RoutersConfig.client.productsById(item.id)}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		}),
	);

	return [...staticRoutes, ...productRoutes];
}
