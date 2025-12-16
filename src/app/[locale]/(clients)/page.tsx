import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { searchParamsCache } from "@/lib/search-params.util";
import { HeaderContent } from "./_components/home-content";

const Page = async ({ params, searchParams }: PageProps<"/[locale]">) => {
	const { locale } = await params;

	await searchParamsCache.parse(searchParams);

	setRequestLocale(locale as Locale);

	return <HeaderContent />;
};

export default Page;
