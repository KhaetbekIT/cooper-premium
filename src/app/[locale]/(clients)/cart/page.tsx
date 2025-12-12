import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { CartContent } from "./_components/cart-content";

const Page = async ({ params }: PageProps<"/[locale]/cart">) => {
	const { locale } = await params;

	setRequestLocale(locale as Locale);

	return <CartContent />;
};

export default Page;
