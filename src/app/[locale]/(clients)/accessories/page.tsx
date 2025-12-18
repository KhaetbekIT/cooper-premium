import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { AccessoriesContent } from "./_components/accessories-content";

const Page = async ({ params }: PageProps<"/[locale]/accessories">) => {
	const { locale } = await params;

	setRequestLocale(locale as Locale);

	return <AccessoriesContent />;
};

export default Page;
