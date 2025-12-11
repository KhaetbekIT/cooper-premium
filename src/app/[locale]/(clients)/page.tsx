import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { HeaderContent } from "./_components/home-content";

const Page = async ({ params }: PageProps<"/[locale]">) => {
	const { locale } = await params;

	setRequestLocale(locale as Locale);

	return <HeaderContent />;
};

export default Page;
