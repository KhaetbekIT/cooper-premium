import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { UnitreesContent } from "./_components/unitrees-content";

const Page = async ({ params }: PageProps<"/[locale]/unitrees">) => {
	const { locale } = await params;

	setRequestLocale(locale as Locale);

	return <UnitreesContent />;
};

export default Page;
