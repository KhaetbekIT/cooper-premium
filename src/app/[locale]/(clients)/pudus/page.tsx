import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { PudusContent } from "./_components/pudus-content";

const Page = async ({ params }: PageProps<"/[locale]/pudus">) => {
	const { locale } = await params;

	setRequestLocale(locale as Locale);

	return <PudusContent />;
};

export default Page;
