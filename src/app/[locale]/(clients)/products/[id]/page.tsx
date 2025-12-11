import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { RoutersConfig } from "@/configs/routers.config";
import { redirect } from "@/i18n/navigation";
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

export default Page;
